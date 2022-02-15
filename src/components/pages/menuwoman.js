import Body1 from "../body1"
import ProduitItem from "../produit-item"
import {data_woman} from "../../data/data-woman"

export default function MenuWoman(props) {
    return(
      <>
        <Body1 title="Fedicha" video='woman_vid.mp4'/>
        <article className="my-4 d-flex justify-content-center items-start flex-wrap">
        {data_woman.map(function(value,index){
                 return  <ProduitItem
                 id={value.id}
                 titre={value.titre}
                 sub_titre={value.sub_titre}
                 slogan={value.slogan}
                 prix={value.prix}
                 image={value.image}
                 nbr_etoile={value.nbr_etoile}
             />
           })} 
      </article>
      </>
    )
   
}