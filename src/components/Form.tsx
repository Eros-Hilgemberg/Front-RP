import { useState, FormEvent } from "react"

import {Product} from "../types/Product"
import { validate } from "../util/validate";
import axios from "axios";

const Form = () =>{

    const [name, setName] = useState<string>("");
    const [price,setPrice] = useState<string>();
    const [amount, setAmount] = useState<string>();
    const [image, setImage] = useState<string>("");

    const [errors, setErrors] = useState<Product | null>(null);

    const handleSumbmit = (e: FormEvent) =>{
        e.preventDefault();

        const data: Product = {
            name,
            price,
            amount,
            image,
        };

        const validateErrors = validate(data);

        console.log(data,errors)

        if(Object.keys(validateErrors).length>0){
            setErrors(validateErrors);
            alert("Tem erros!")
            return;
        }

        salvar(data)

        setName("");
        setPrice("");
        setAmount("");
        setImage("");
    }

    function salvar(data: Product){
        axios.post('http://127.0.0.1:8000/api/products',data)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    
    return <form action="" onSubmit={handleSumbmit}>
        <div>
            <label htmlFor="">Nome</label>
            <input type="text" placeholder="Digite o nome" value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="">Preço</label>
            <input type="text" placeholder="Digite o preço" value={price} onChange={(e)=>setPrice((e.target.value))}/>
        </div>
        <div>
            <label htmlFor="">Quantidade</label>
            <input type="text" placeholder="Digite a quantidade" value={amount} onChange={(e)=>setAmount((e.target.value))}/>
        </div>
        <div>
            <label htmlFor="">Imagem</label>
            <input type="text" placeholder="Informe uma imagem" value={image} onChange={(e)=>setImage(e.target.value)}/>
        </div>
        <button>Cadastrar</button>
    </form>
}
export default Form