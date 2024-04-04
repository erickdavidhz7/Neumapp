
const UserServices = {
    getAllUsers: async () => {
        try {
            return 'Estas Haciendo une GET a todos los usuarios de la base de datos.'
        } catch (error) {
            throw new Error ('Error al buscar usuarios')
        }
    },
    // Aca debemos seguir agregando los servicios de Usuarios
}
module.exports = UserServices