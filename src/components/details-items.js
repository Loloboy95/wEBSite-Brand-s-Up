import { isAccordionItemSelected } from "react-bootstrap/esm/AccordionContext";


export default function DetailsItems({data}) {
     const {details,image,titre,sub_titre,prix,nbr_etoile,slogan}=data;
    return(
    <>
        <article className="position-relative mt-4">
        <div className="col-10 m-auto box-first ">
        <div className="w-100 d-flex justify-content-between text-center ">
            <div className="col-lg-4">
                <img src={image} alt className="rounded" width="250" height="250"/>
                    <h5>{titre}</h5>
                    <div className="star mt-3 align-items-center">
                    {nbr_etoile && nbr_etoile.map((value,index)=> <i key={index}    className="fas fa-star"></i>
                    )}
                    </div>
            </div>
            <div className="col-lg-6">
                <h5>{titre}</h5>
                <span>
                    {prix}FCFA
                </span>
                <h6>Livraison à domicile</h6>
                <br/>

                <div className="p-3 text-center text-white bg-warning mt-3 cursor molp">
                    <span className="text-uppercase text-ligth">Acheter</span>
                </div>
                <div className="p-3 bissap1 text-center text-white mt-1 bg-success cursor">
                    <span className="text-uppercase text-ligth">Whatsapp</span>
                </div>
                <div className="text-start" id="icon-box">
                    <i className="text-muted fal fa-truck fa-2x mt-3 " id="livraison"></i>
                    <span className="mx-3" id="liv">
                        Frais de livraison : 150F CF
                    </span>
                </div>
                <br/>
                <div className="text-start" id="icon-box">
                    <i className="fal fa-shield-check fa-2x"></i>
                    <span className="mx-3" id="liv">
                        Sécurité garantie
                    </span>
                </div>
            </div>
            
        
        </div>

        <div className="w-100 mt-3 ">
            <hr/>
            <h2> Details </h2>
            <span className="text1 d-block">
               {details}
            </span>

            
        </div>
        

    </div>
        </article>
    </>
    
    )
}