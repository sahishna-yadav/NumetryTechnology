const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors()); // ✅ Allow cross-origin requests
app.use(express.json());

// Your routes...

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
