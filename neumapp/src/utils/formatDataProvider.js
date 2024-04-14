function formatData(data) {
  const formatedData = {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: data.password,
    phoneProvider: `${data.codeP}${data.phoneProvider}`,
    photo: data.photo,
  };

  return formatedData;
}

export { formatData };
