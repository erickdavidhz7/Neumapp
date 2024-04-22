import { DataProvider } from "../map/DataProvider"
import ButtonUI from "../UI/Button/Button"
import { useState } from "react"

function ProviderCommingSoon() {
    return (
        <div className="bg-slate-300 w-[50%] h-[400px] rounded-tr-2xl rounded-br-2xl">
            <div className="flex flex-col items-center justify-center h-full">
                <h3 className="text-white text-4xl text-center font-bold mb-5">Maria está en camino, pronto llegará!</h3>
                <div className="flex flex-row items-center justify-center w-full gap-10">
                    <img src="/images/icons/Call.png" alt="" />
                    <img src="/images/icons/Chat.png" alt="" />
                    <img src="/images/icons/Unavailable.png" alt="" />
                </div>
            </div>
        </div>
    )
}

function ValueProvider() {
    return (
        <div className="bg-slate-300 w-[50%] h-[400px] rounded-tr-2xl rounded-br-2xl">
            <div className="flex flex-col items-center justify-around h-full">
                <h3 className="text-slate-700 text-2xl text-center font-bold mb-5 w-[80%]">Tu servicio ha finalizado. Por favor califica al prestador.</h3>
                <div className="flex flex-row items-center justify-center">
                    <img src="/images/icons/Star2.png" alt="" />
                    <img src="/images/icons/Star2.png" alt="" />
                    <img src="/images/icons/Star2.png" alt="" />
                    <img src="/images/icons/Star2.png" alt="" />
                    <img src="/images/icons/Star2.png" alt="" />
                </div>
                <div className="w-[80%] text-center">
                    <p>Deja un comentario (opcional)</p>
                    <input className="w-full h-10 bg-slate-700 mt-4 rounded-2xl text-white text-center" type="text" />
                </div>
                <div className="text-center">
                    <p>La reseña es anonima.</p>
                    <ButtonUI className="bg-blue-500 mt-5 font-bold"> Enviar </ButtonUI>
                </div>
            </div>
        </div>
    )
}
export function Provider() {

    const [changedData, setChangedData] = useState(false);

    setTimeout(() => {
        setChangedData(true);
    }, 6000);
    return (
        <>
        <div className="flex items-center justify-center bg-zinc-700 w-full h-[100vh]">
            <div className="flex flex-row items-center justify-center rounded w-[80%] ">
                <div className=" bg-white flex flex-col items-center justify-between h-[400px] w-[220px] max-w-sm overflow-hidden shadow-lg rounded-tl-2xl rounded-bl-2xl">
                    <img className="w-full h-1/2 " src={"/images/MapImages/popUp/provider1.png"} alt="Provider image" />
                    <div className="flex flex-col text-center mb-10 ">
                        <div className="px-6 py-4">
                            <p className="font-bold text-xl mb-2">Maria</p>
                        </div>
                        <DataProvider></DataProvider>
                    </div>
                </div>
                {
                    changedData ? <ValueProvider></ValueProvider> : <ProviderCommingSoon></ProviderCommingSoon>
                }               
            </div>
        </div>
        </>
    )
}