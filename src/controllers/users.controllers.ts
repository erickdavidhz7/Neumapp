//IMPORTO LOS SERVICIOS DE USUARIOS//
import userServices from "../services/users.services";
import { Request, Response } from "express";

const UsersControllers = {
  registerUser: async (req: Request, res: Response) => {
    try {
      const {
        firstName,
        lastName,
        email,
        password,
        phoneClient,
        photo,
        phoneProvider,
        location,
      } = req.body;

      if (!firstName || !lastName || !email || !password || !phoneClient) {
        return res.status(400).json({ message: "Missing User Data" });
      }
      const user = await userServices.createUsers({
        firstName,
        lastName,
        email,
        password,
        phoneClient,
        photo,
      });
      if (phoneProvider && location) {
        const provider = await providerServices.createProvider({
          phoneProvider,
          location,
        })
      }
      const finalUser = {...user, provider}
      return res.status(201).json(finalUser);
    } catch (error) {
      res.status(500).json("Internal Server Error");
    }
  },
  getAllUsers: async (req: Request, res: Response) => {
    try {
      const users = await userServices.getAllUsers();
      res.status(200).send(users);
    } catch (error) {
      res.status(500).send("Internal Server Error");
    }
  },
  getUserByEmail: async (req: Request, res: Response) => {
    try {
      const { email } = req.params;

      if (!email) {
        return res.status(404).json({ message: "Data not found" });
      }

      const userEmail = await userServices.findUserByEmail(email);

      return res.status(200).json(userEmail);
    } catch (error) {
      res.status(500).json("Internal Server Error");
    }
  },
};
export default UsersControllers;
