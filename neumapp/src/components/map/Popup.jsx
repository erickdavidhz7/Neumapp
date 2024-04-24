import ButtonUI from "../UI/Button/Button";
import { DataProvider, WaitingProvider } from "./DataProvider";
import { useState } from "react";
import { Provider } from "../provider/Provider";
export function CustomPopUp({ img, name, changeToProvider, providerState}) {

    const [changedData, setChangedData] = useState(false);
    const [displayState , setDisplayState] = useState("block");
    const [titleData, setTitleData] = useState("En espera de confirmacion...");
    const [displayWaiting, setDisplayWaiting] = useState("flex");
    const [displayProvider, setDisplayProvider] = useState("absolute");

    async function handleClick() {
        setChangedData(!changedData);
        setDisplayState("none");
        
        await fetch("https://neumapp.site:3001/orders/fc383217-fb53-42ce-8ea4-52280a311998",{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                status:"started"
            })
        })

        let count = 0;
        const intervalId = setInterval(async () => {
        try {
            const response = await fetch('https://neumapp.site:3001/orders');
            const data = await response.json();
            const order = data.find(order => order.id === "fc383217-fb53-42ce-8ea4-52280a311998");
            if (order.status === "in process") {
                setTitleData("Se ha aceptado el servicio... aguarde un instante.");
                setTimeout(() => {
                    setDisplayWaiting("none");
                    setDisplayProvider("absolute");
                    changeToProvider("absolute")
                    
                }, 2000);

                let count = 0;
                    const intervalId = setInterval(async () => {
                    try {
                        const response = await fetch('https://neumapp.site:3001/orders');
                        const data = await response.json();
                        const order = data.find(order => order.id === "fc383217-fb53-42ce-8ea4-52280a311998");
                        if (order.status === "finished") {
                            providerState(true);
                        }
                        count++;
                        if (count >= 15) {
                        clearInterval(intervalId);
                        }
                    } catch (error) {
                        console.error('Error al realizar la llamada a la API:', error);
                    }
                    }, 5000);
                
                    return () => clearInterval(intervalId);
            }
            count++;
            if (count >= 5) {
            clearInterval(intervalId);
            }
        } catch (error) {
            console.error('Error al realizar la llamada a la API:', error);
        }
        }, 5000);
    
        return () => clearInterval(intervalId);
        
    }

    return (
        <>
            <div style={{ display: displayWaiting }} className=" flex-col items-center justify-between h-[400px] w-[220px] max-w-sm rounded overflow-hidden shadow-lg rounded-3xl">
                <img className="w-full h-1/2" src={"/images/MapImages/popUp/provider1.png"} alt="Provider image" />
                <div className="flex flex-col text-center">
                    <div className="px-6 py-4">
                        <p className="font-bold text-xl mb-2">{name}</p>
                    </div>
                    {
                        changedData ? <WaitingProvider title={titleData}></WaitingProvider> : <DataProvider></DataProvider>
                    }                    
                    <div className="flex items-center justify-center">
                        <ButtonUI style={{ display: displayState }} onClick={() => {handleClick() }} className="bg-blue-500 mt-5">Pedir Ahora</ButtonUI>
                    </div>
                </div>
            </div>
        </>
    );
}