// function formatData(data, img) {
//   const formatedData = {
//     firstName: data.firstName,
//     lastName: data.lastName,
//     email: data.email,
//     password: data.password,
//     phoneProvider: `${data.codeP}${data.phoneProvider}`,
//     photo: img.photo.item(0),
//     location: "americas",
//   };

//   return formatedData;
// }

function formatData(data) {
  const formData = new FormData();
  formData.append("firstName", data.firstName);
  formData.append("lastName", data.lastName);
  formData.append("email", data.email);
  formData.append("password", data.password);
  formData.append("location", "argentina"); // aun no se define en el back, asi que se deja predefinido
  formData.append("phoneProvider", `${data.codeP}${data.phoneProvider}`);
  formData.append("phoneClient", `${data.codeP}${data.phoneClient}`);
  formData.append("photo", data.photo.item(0));

  return formData;
}

const onKeyNumbers = (e) => {
  if (!/^([0-9])*$/.test(e.key) && e.key !== "Backspace") {
    e.preventDefault();
  }
};
function registUserformatData(data) {
  const formData = new FormData();
  formData.append("firstName", data.firstName);
  formData.append("lastName", data.lastName);
  formData.append("email", data.email);
  formData.append("password", data.password);
  formData.append("phoneClient", `${data.codeP}${data.phoneClient}`);
  formData.append("photo", data.photo.item(0));

  return formData;
}

export {registUserformatData, formatData, onKeyNumbers };
