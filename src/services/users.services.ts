const UserServices = {
  getAllUsers: async () => {
    try {
      return '<h1>Estas Haciendo une GET a todos los usuarios de la base de datos.</h1>'
    } catch (error) {
      throw new Error('Error al buscar usuarios')
    }
  },
  // Aca debemos seguir agregando los servicios de Usuarios
}
export default UserServices
