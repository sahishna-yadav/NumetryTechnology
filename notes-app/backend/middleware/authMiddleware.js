const jwt = require("jsonwebtoken");
require("dotenv").config();

const authMiddleware = (req, res, next) => {
    const token = req.header("Authorization")?.split(" ")[1]; // Extract Bearer token
    if (!token) {
        return res.status(401).json({ message: "Access Denied, No Token Provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // ✅ Use secret key
        req.user = decoded; // Attach user data
        next();
    } catch (error) {
        res.status(403).json({ message: "Invalid Token" });
    }
};

module.exports = authMiddleware;
