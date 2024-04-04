import dotenv from "dotenv";
import path from "node:path";
dotenv.config();


export const port: string | undefined = process.env.PORT;

// It will go back 3 folder levels from this file's directory in order to go to ssl's folder that is supposed to be outside of the project's directory
export const sslPathOutsideRep: string | undefined = path.join(__dirname, "..", "..", "..", "/ssl");