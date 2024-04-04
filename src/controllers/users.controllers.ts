//IMPORTO LOS SERVICIOS DE USUARIOS//
const userServices = require ('../services/users.services')

const UsersControllers = {
    getAllUsers: async (req: any, res: any) => {
        try {
            const users = await userServices.getAllUsers()
            res.status(200).json(users)
        } catch (error) {
            res.status(500).send("Internal Serve Error")
        }
    },
    //Aca Se deben agregar el resto de los controladores de usuarios 
}
module.exports = UsersControllers;