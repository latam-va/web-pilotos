import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  flightHours: {
    type: String,
    required: false,
    default: "0",
  },
  reports: {
    type: String,
    required: false,
    default: "0",
  },
  currentLocation: {
    type: String,
    required: false,
    default: "SABE",
  },
  callsign: {
    type: String,
    required: false,
    default: 'DSM7XXX'
  },
  callsignNumber: {
    type: Number,
    required: false
  },
  userId: {
    type: String,
    required: true,
  },
});

export default mongoose.models.User || mongoose.model("Custom", UserSchema);
