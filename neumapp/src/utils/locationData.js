export const grantPermission = async () => {
  let latitude = null;
  let longitude = null;
  try {
    await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          resolve(pos.coords);
          latitude = pos.coords.latitude;
          longitude = pos.coords.longitude;
        },
        (error) => {
          reject(error);
        }
      );
    });
    return {
      latitude,
      longitude,
    };
  } catch (error) {
    throw new Error("Error, usuario denego la geolocalización.");
  }
};
