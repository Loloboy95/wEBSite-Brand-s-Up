import {Link} from "react-router-dom"
export default 
function Header(){

    const open=(e)=>{
         e.preventDefault();
         let menu = document.querySelector('.menu');
         menu.classList.toggle('active');
    }
    return <header> 
        <Link to="/" className="logo">Brand'SAP</Link>
        <div id="listcat">
            <ul id="molopo">
                <li className="mort">
                    <Link to="/menu-man">Man'SAP ||</Link>
                </li>
    
                <li className="mort">
                    <Link to="/menu-woman">Women'SAP ||</Link>
                </li>
    
                <li className="mort">
                    <Link to="/menu-unisex">Unisex ||</Link>
                </li>

                <li className="mort">
                    <Link to="/menu-videos">Vidéos</Link>
                </li>
            </ul>
            
            
        </div>

        <div className="menu">
            <div onClick={open} className="toggle" ><ion-icon name="add-outline"></ion-icon></div>
            
            <li style={{"--i":1}}>
                <Link to="/"><ion-icon name="home-outline"></ion-icon></Link>
            </li>
    
            <li style={{"--i":3}}>
                <Link to="/menu-man"><ion-icon name="female-outline"></ion-icon></Link>
            </li>   
            
            <li style={{"--i":5}}>
                <Link to="/menu-woman"><ion-icon name="male-outline"></ion-icon></Link>
            </li>   

            <li style={{"--i":7}}>
                <Link to="/menu-unisex"><ion-icon name="male-female-outline"></ion-icon></Link>
            </li>
        </div>
    </header>
}