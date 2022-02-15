import { Link } from "react-router-dom";

export default function ProduitItem({titre,sub_titre,id,image,slogan,prix,nbr_etoile,}){
    return (
            <div className="col-md-3  m-2">
                <div className="card mt-3">
                    <div className="product-1 align-items-center p-2 text-center">
                        <img src={image} alt="" className="rounded" width="160"/>
                        <h5>{titre}</h5>
                        <div className="mt-3 info">
                            <span className="text1 d-block">
                               {sub_titre}
                            </span>
                            <span className="text1">
                                {slogan}
                            </span>
                            <div className="cost1 mt-3 text-dark">
                                <span>
                                    {prix}$
                                </span>
                                <div className="star mt-3 align-items-center">
                                {nbr_etoile && nbr_etoile.map((value,index)=> <i key={index} className="fas fa-star"></i>
                                )}
                                </div>
                                <div className="p-3 bissap1 text-center text-white mt-3 cursor">
                                    <Link to={`/details/${id}`} className="text-uppercase text-white text-decoration-none">Acheter</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}