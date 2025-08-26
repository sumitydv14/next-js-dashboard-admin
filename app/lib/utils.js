import mongoose from "mongoose";

let isConnected = false; // ✅ global variable to persist across hot reloads

export const connectToDB = async () => {
  if (isConnected) {
    console.log("✅ Using existing MongoDB connection");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGO);

    isConnected = db.connections[0].readyState; // ✅ correct
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw new Error("MongoDB connection failed");
  }
};

export const getDate = (date) => {
    return new Date(date).toLocaleDateString('en-IN', {
        day:'2-digit',
        month:'short',
        year:'numeric'
    })
} 