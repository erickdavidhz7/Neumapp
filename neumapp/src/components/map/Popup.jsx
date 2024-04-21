import ButtonUI from "../UI/Button/Button";
import { DataProvider, WaitingProvider } from "./DataProvider";
import { useState } from "react";
export function CustomPopUp({ img, name }) {

    const [changedData, setChangedData] = useState(false);
    const [displayState , setDisplayState] = useState("block");

    return (
        <>
            <div className="flex flex-col items-center justify-between h-[400px] w-[220px] max-w-sm rounded overflow-hidden shadow-lg rounded-3xl">
                <img className="w-full h-1/2" src={"/images/MapImages/popUp/provider1.png"} alt="Provider image" />
                <div className="flex flex-col text-center">
                    <div className="px-6 py-4">
                        <p className="font-bold text-xl mb-2">{name}</p>
                    </div>
                    {
                        changedData ? <WaitingProvider></WaitingProvider> : <DataProvider></DataProvider>
                    }
                    <div className="flex items-center justify-center">
                        <ButtonUI style={{ display: displayState }} onClick={() => {setChangedData(!changedData); setDisplayState("none") }} className="bg-blue-500 mt-5">Pedir Ahora</ButtonUI>
                    </div>
                </div>
            </div>
        </>
    );
}