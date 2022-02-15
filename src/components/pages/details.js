import { useParams } from "react-router-dom";
import { data_man } from "../../data/data-man";
import { data_unisex } from "../../data/data-unisex";
import { data_woman } from "../../data/data-woman";
import DetailsItems from "../details-items";

export default function Details(props){
    const param=useParams();
    const id=param.id;
    const global_data =[...data_man,...data_woman,...data_unisex];
    let data = global_data.find(value=> Number(value.id)===Number(id));
    return(
        <>
            <DetailsItems data={data}/>
        </>
        
    );
}