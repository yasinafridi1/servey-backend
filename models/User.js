const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    university: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    officeUsed: {
      type: String,
      required: true,
    },
    word_comfortability: {
      type: String,
    },
    powerpoint_proficiency: {
      type: String,
    },
    excel_usage: {
      type: String,
    },
    access_used_for_db: {
      type: String,
    },
    macros_pivot_mail_merge: {
      type: String,
    },
    formal_training: {
      type: String,
    },
    usage_duration_devices_used: {
      type: String,
    },
    alternative: {
      type: String,
    },
    faced_challenges: {
      type: String,
    },
    literacy_skills: {
      type: String,
    },
    attending_workshop: {
      type: String,
    },
    basic_formatting: {
      type: String,
    },
    access_manage_informations: {
      type: String,
    },
    leverage_digital_skill: {
      type: String,
    },
    word_advance_feature: {
      type: String,
    },
    office_proficience_impact: {
      type: String,
    },
    resource_seeking: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
