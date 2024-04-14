// function formatData(data, img) {
//   const formatedData = {
//     firstName: data.firstName,
//     lastName: data.lastName,
//     email: data.email,
//     password: data.password,
//     phoneProvider: `${data.codeP}${data.phoneProvider}`,
//     photo: img.photo.item(0),
//     location: "americas"
//   };

//   return formatedData;
// }

// export { formatData };


function formatData(data) {
    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("location", 'asdasd');
    formData.append("phoneProvider", `${data.codeP}${data.phoneProvider}`);
    formData.append("photo", data.photo.item(0));
  
    return formData;
  }
  
  export { formatData };