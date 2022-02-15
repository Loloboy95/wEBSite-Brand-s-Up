import Body1 from "../body1";
import ProduitItem from "../produit-item";

export default function Index(params) {
    return(
        <>
            <Body1 title="Loloboy" video='the_best.mp4'/>
            <article className="my-4 d-flex justify-content-center items-start flex-wrap">
            {[1,2,2,3,4,4,4,3].map(function(value,index){
                 return  <ProduitItem
                 titre='T-shirt Manches longues Africa'
                 sub_titre=' Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                 Odio accusantium, architecto impedit nam beatae atque vel numquam quam ab blanditiis cumque dignissimos! Fugiat excepturi maiores, 
                 et magni nihil labore dolorum.'
                 slogan='lorem,ipsum dolor.'
                 prix="1020"
                 nbr_etoile={[1,2,3,4,2]}
             />
           })} 
          </article>

        </>
       
    )
}