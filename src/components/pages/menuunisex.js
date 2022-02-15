import Body1 from "../body1"
import ProduitItem from "../produit-item"
import { data_unisex } from "../../data/data-unisex"

export default function MenuUniSex(props) {
    return(
        <>
        <Body1 title="Unisex" video='unisex_vid.mp4'/>
        <article className="my-4 d-flex justify-content-center items-start flex-wrap">
        {data_unisex.map(function(value,index){
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