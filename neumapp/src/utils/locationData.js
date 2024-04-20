export const grantPermission = async () => {
  try {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          resolve(pos.coords);
        },
        (err) => {
          reject(err);
        }
      );
    });
    return {
      latitude : position.latitude,
      longitude : position.latitude,
    };
  } catch (error) {
    throw new Error("Error, usuario denego la geolocalización.");
  }
};
