import { grantPermission } from "./locationData";

async function formatDataProvider(data) {
  const { latitude, longitude } = await grantPermission();
  const formData = new FormData();
  formData.append("firstName", data.firstName);
  formData.append("lastName", data.lastName);
  formData.append("email", data.email);
  formData.append("password", data.password);
  formData.append("latitude", latitude);
  formData.append("longitude", longitude);
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
