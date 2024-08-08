require("dotenv").config();
const express = require("express");
const cors = require("cors");
const User = require("./models/User");
const { getLevelUrl } = require("./Utils/userutil");
const app = express();
const PORT = process.env.PORT;

const corsOption = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOption));
app.use(express.json());

// mongoose
//   .connect(process.env.MONGO_URL, {
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("database connected");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

app.get("/health", (req, res) => {
  return res.status(200).json({ message: "Server is active" });
});

app.post("/user-entry", async (req, res) => {
  try {
    const {
      email,
      fullName,
      university,
      department,
      gender,
      officeUsed,
      word_comfortability,
      powerpoint_proficiency,
      excel_usage,
      access_used_for_db,
      macros_pivot_mail_merge,
      formal_training,
      usage_duration_devices_used,
      alternative,
      faced_challenges,
      literacy_skills,
      attending_workshop,
      basic_formatting,
      access_manage_informations,
      leverage_digital_skill,
      word_advance_feature,
      office_proficience_impact,
      resource_seeking,
    } = req.body;

    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong", error: error });
  }
});

app.get("/dashboardData", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
