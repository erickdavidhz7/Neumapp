import * as React from 'react';
import {useState} from 'react';
import Map, {Popup} from 'react-map-gl';

export function MarkerClient (){

    return (
        <> <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                <h1 style={{height:"30px", color:"#2500B7", fontSize:"50px", fontWeight:"bold"}}>TU</h1>
                <img style={{width:"70px", height:"80px"}} src="/images/MapImages/Location.png" alt="" />
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