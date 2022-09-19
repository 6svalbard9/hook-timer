//on importe le timer local ici
// de cette façon quand on navigue ailleurs le timer local part avec la composante du dom
import Timer from "./Timer";

export default function Contact(props){
    
    return( 
        <>
            <div>contact</div>
            {/* ne pas oublier de rajouter la fonction goHome si on veut que la composante appelle les fonction du routeurs */}
            <Timer goHome={props.goHome}/>
        </>
    );
}