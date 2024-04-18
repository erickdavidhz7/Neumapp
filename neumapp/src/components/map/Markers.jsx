export function MarkerClient (){

    return (
        <> <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                <h1 style={{color:"#2500B7", fontSize:"60px", fontWeight:"bold"}}>TU</h1>
                <img src="/images/MapImages/Location.png" alt="" />
            </div> 
        </>
    );
}


export function MarkerProvider ({img}){

    return (
        <> <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                <img src={img} alt="" />
                <img src={"/images/MapImages/Location2.png"} alt="" />
            </div> 
        </>
    );
}