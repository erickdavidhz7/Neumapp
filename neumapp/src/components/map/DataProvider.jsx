export function DataProvider() {
    return (
        <>
            <ul>
                <li className="flex flex-row justify-between w-full" style={{ borderBottom: '1px solid black' }}>
                    <p>Servicios</p>
                    <div className="flex flex-row">
                        <img src="/images/icons/BicycleFloorPump.png" alt="" />
                        <img src="/images/icons/FlatTire.png" alt="" />
                        <img src="/images/icons/TireIron.png" alt="" />
                    </div>
                </li>
                <li className="flex flex-row justify-between" style={{ borderBottom: '1px solid black' }}>
                    <p>Distancia</p>
                    <p> 700m </p>
                </li>
                <li className=" flex flex-row justify-between" style={{ borderBottom: '1px solid black' }}>
                    <p>Valoracion</p>
                    <div className="flex flex-row">
                        <img src="/images/icons/Star.png" alt="" />
                        <img src="/images/icons/Star.png" alt="" />
                        <img src="/images/icons/Star.png" alt="" />
                        <img src="/images/icons/Star.png" alt="" />
                        <img src="/images/icons/Star.png" alt="" />
                    </div>
                </li>
            </ul>
        </>
    )
}

export function WaitingProvider (){

    return (
        <>
            <div className="flex flex-row items-center mb-10">
                <img className="w-[50px] h-[50px]" src="/images/icons/time.png" alt="Time Waiting" />
                <p className="text-center text-xl">En espera de confirmacion...</p>
            </div>
        </>
    )
}