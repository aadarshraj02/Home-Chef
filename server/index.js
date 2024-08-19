const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const cookieParser = require("cookie-parser");

require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.listen(port, () => console.log(`server is running on the port ${port}`));
