import { Product } from "../types/Product";

type Error = {
    [key: string]: string;
}

export const validate = (data: Product)=>{
    const errors : Error = {};

    if(!data.name){
        errors["name"] = "O nome é obrigatório";
    }

    return errors;
}