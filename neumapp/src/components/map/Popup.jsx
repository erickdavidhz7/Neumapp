import ButtonUI from "../UI/Button/Button";
import { DataProvider, WaitingProvider } from "./DataProvider";
import { useState } from "react";
// import { Provider } from "../provider/Provider";
export function CustomPopUp({ img, name, changeToProvider, providerState }) {
  const [changedData, setChangedData] = useState(false);
  const [displayState, setDisplayState] = useState("block");
  const [titleData, setTitleData] = useState("En espera de confirmacion...");
  const [displayWaiting, setDisplayWaiting] = useState("flex");
  const [displayProvider, setDisplayProvider] = useState("absolute");

  async function handleClick() {
    setChangedData(!changedData);
    setDisplayState("none");

    await fetch(
      "https://neumapp.site:3001/orders/fc383217-fb53-42ce-8ea4-52280a311998",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: "started",
        }),
      }
    );

    let count = 0;
    const intervalId = setInterval(async () => {
      const response = await fetch("https://neumapp.site:3001/orders");
      const data = await response.json();
      const order = data.find(
        (order) => order.id === "fc383217-fb53-42ce-8ea4-52280a311998"
      );

      if (order.status === "in process") {
        setTitleData("Se ha aceptado el servicio... aguarde un instante.");
        setTimeout(() => {
          setDisplayWaiting("none");
          setDisplayProvider("absolute");
          changeToProvider("absolute");
        }, 2000);
      }
      count++;
      if (count >= 5) {
        console.log("primer if");
        clearInterval(intervalId);
      }
    }, 5000);

    let count2 = 0;
    const intervalId2 = setInterval(async () => {
      const response = await fetch("https://neumapp.site:3001/orders");
      const data = await response.json();
      const order = data.find(
        (order) => order.id === "fc383217-fb53-42ce-8ea4-52280a311998"
      );

      if (order && order.status === "finished") {
        setTitleData("Se ha aceptado el servicio... aguarde un instante.");
        setTimeout(() => {
          providerState(true);
        }, 2000);
      }
      count2++; // Incrementing count2 here
      if (count2 >= 5) {
        // Fix here from count to count2
        console.log("ultimo if");
        clearInterval(intervalId2); // Also fix from intervalId to intervalId2
      }
    }, 5000);

    return () => clearInterval(intervalId2);
  }

  return (
    <>
      <div
        style={{ display: displayWaiting }}
        className=" flex-col items-center justify-between h-[400px] w-[220px] max-w-sm overflow-hidden shadow-lg rounded-3xl"
      >
        <img
          className="w-full h-1/2"
          src={"/images/MapImages/popUp/provider1.png"}
          alt="Provider 1 location on map"
        />
        <div className="flex flex-col text-center">
          <div className="px-6 py-4">
            <p className="font-bold text-xl mb-2">{name}</p>
          </div>
          {changedData ? (
            <WaitingProvider title={titleData}></WaitingProvider>
          ) : (
            <DataProvider></DataProvider>
          )}
          <div className="flex items-center justify-center">
            <ButtonUI
              style={{ display: displayState }}
              onClick={() => {
                handleClick();
              }}
              className="bg-blue-500 mt-5"
            >
              Pedir Ahora
            </ButtonUI>
          </div>
        </div>
      </div>
    </>
  );
}
