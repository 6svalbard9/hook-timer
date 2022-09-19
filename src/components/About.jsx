

import Timer from "./Timer";

export default function About(props){
    // console.log('maria teguchi???',localTime)
    return( 
        <>
            <div> à propos...</div>
            <Timer goHome={props.goHome}/>
        </>
    );
}