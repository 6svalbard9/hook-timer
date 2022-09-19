import { Link } from "react-router-dom";

// element enfant pour générer le menu
const MenuElt = ({title = 'titre',path='/'}) => {
    return <div className="childMenu"><Link to={path}>{title}</Link></div>
}

// par défaut menu retourne un array pour éviter les bugs
export default function Menu({menu = []}){
    
    let renderedMenu = [];
    
    for(let m in menu){
        //menuElt est la composante enfant déclarée en haut!
        renderedMenu.push(<div key={m}><MenuElt {...menu[m]} /></div>)
    }
    
    return( 
        <>
            <div className="parentMenu">
                {renderedMenu}
            </div>
        </>
    );
}