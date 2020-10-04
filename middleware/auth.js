const jwt = require("jsonwebtoken");

exports.protect = async (req, res, next) => {
  // * Cek Auth Header
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    return res.status(401).json({
      success: false,
      message: "Not authenticated (Header Not Found)",
    });
  }
  const token = authHeader.split(" ")[1];
  let decoded;

  // * Cek JWT Token
  try {
    decoded = jwt.verify(token, "secret123");
  } catch (err) {
    if (err.name === "JsonWebTokenError") {
      return res.status(401).json({ success: false, message: "UnAuthorized" });
    } else {
      return res.status(401).json({ success: false, message: err.message });
    }
  }

  req.user = decoded.id;
  next();
};

exports.generateAccessToken = (id) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      { id },
      "secret123",
      {
        expiresIn: "30d",
      },
      (err, token) => {
        if (err) {
          console.log(err.message);
          return reject(new Error("Error:" + err));
        }
        resolve(token);
      }
    );
  });
};
