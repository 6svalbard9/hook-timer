import React from 'react'
import Timer from "./Timer";

export default function Products(props){
    
    return( 
        <>
            <div>produits</div>
            <Timer goHome={props.goHome}/>
        </>
    );
}