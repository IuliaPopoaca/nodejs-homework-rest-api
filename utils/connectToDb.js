import mongoose from "mongoose";

async function connectToDb() {
    try {
      await mongoose.connect('mongodb+srv://iulia6303:TJPGVhe6L2TfNLM0@cluster0.gvota4p.mongodb.net/db-contacts')
      console.log("Database connection successful");
    } catch (error) {
      console.error(error);
      process.exit(1);
      }
  }
export default connectToDb;  