const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const contacts = require("./routes/contactsRoute");
const auth = require("./routes/authRoute");
const notFound = require("./Middleware/notFound");

const cors = require("cors");
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/contacts", contacts);
app.use("/", auth);
app.use(notFound);

// Defining PORT
const port = process.env.PORT || 3000;
console.log(process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI || "", {});

mongoose.connection.on("open", () => {
  console.log(`DB connected !`);
});

app.listen(port, () => {
  console.log(`Server running @ port ${port} !`);
});
