
export default
function Body1(props){
    
    return(
        <section className="main">
        <video src={`/videos/${props.video}`} autoPlay loop muted controls =' ' type="mp4"></video>
        <img src="/images/mask.jpg" className="mask"/>
        <h2 id="pomlo">{props.title}</h2>
        <ul className="lop">
            <li><a href="https://web.facebook.com/moussa.lolo.319"><ion-icon name="logo-facebook"></ion-icon></a></li>
            <li><a href="https://twitter.com/home"><ion-icon name="logo-twitter"></ion-icon></a></li>
            <li><a href="https://www.instagram.com/moussalolo/?hl=fr"><ion-icon name="logo-instagram"></ion-icon></a></li>
        </ul>
        
    </section>
    )
}