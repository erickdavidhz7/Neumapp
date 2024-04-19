import { Router } from "express";
import { seedsController } from "./seed.controller";

const seedsRouter = Router()

seedsRouter.post('/all', seedsController.usersProviders)

export default seedsRouter