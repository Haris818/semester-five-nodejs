function checkAuth(req, res, next) {
  const key = req.query.key;

  if (key !== "12345") {
    return res.json({
      success: false,
      message: "Unauthorized access"
    });
  }

  next();
}

module.exports = checkAuth;
