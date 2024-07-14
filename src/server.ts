import mongoose from "mongoose";
import config from "./app/config";
import app from "./app";
import { Server } from "http";

let server: Server;
async function main() {
  try {
    await mongoose.connect(config.db_connect as string);
    server = app.listen(config.port, () => {
      console.log("Fitness accesories backend server Running");
    });
  } catch (error) {
    console.log(error);
  }
}

main();
process.on("unhandledRejection", () => {
  console.log(`Unhandled Rejection Detected.Server Shutting Down`);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on("uncaughtException", () => {
  console.log(`Uncaoght Exception detected.Server shutting down...`);
  process.exit(1);
});
