function formatDataProvider(data) {
  const formData = new FormData();
  formData.append("firstName", data.firstName);
  formData.append("lastName", data.lastName);
  formData.append("email", data.email);
  formData.append("password", data.password);
  formData.append("latitude", 111111);
  formData.append("longitude", 111111);
  formData.append("phoneClient", `${data.codeP}${data.phoneClient}`);
  formData.append("phoneProvider", `${data.codeP}${data.phoneProvider}`);
  formData.append("photo", data.photo.item(0));

  return formData;
}

const onKeyNumbers = (e) => {
  if (!/^([0-9])*$/.test(e.key) && e.key !== "Backspace") {
    e.preventDefault();
  }
};
function formatDataClient(data) {
  const formData = new FormData();
  formData.append("firstName", data.firstName);
  formData.append("lastName", data.lastName);
  formData.append("email", data.email);
  formData.append("password", data.password);
  formData.append("phoneClient", `${data.codeP}${data.phoneClient}`);
  formData.append("photo", data.photo.item(0));

  return formData;
}

function getFormData(formData) {
  for (const entry of formData.entries()) {
    const [key, value] = entry;
    console.log(`${key}:${value}`);
  }
}

export { formatDataClient, formatDataProvider, onKeyNumbers, getFormData };
