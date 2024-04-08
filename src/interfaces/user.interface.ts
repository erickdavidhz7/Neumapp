interface UserI {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneClient: string;
  photo: string;
  status?: string;
  isVerified?: string;
}

export default UserI;