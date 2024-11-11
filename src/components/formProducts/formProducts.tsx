import { useState } from 'react';
import InputText from './inputProducts';
import axios from 'axios';

interface Product{
    name:string;
    price:number;
    amount:number;
    imagem:string;
}
const FormProduct = () =>{
    const [name, setName] = useState<string>("");
    const [price,setPrice] = useState<number>();
    const [amount, setAmount] = useState<number>();
    const [image, setImagem] = useState<string>("");

    
    
    const salvar = () => {
        setName("chinelo");
        setPrice(20.55)
        setAmount(15)
        setImagem

        console.log(name)
        axios.post('http://127.0.0.1:8000/api/products', {
            name:name,
            price:price,
            amount:amount,
            image:image
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    async function getProduct() {
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/products/2');
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      }

    return(
        <div className="bg-white rounded-lg p-7">
            <h2 className='text-lg font-bold text-center m-4'>Cadastro de Produto:</h2>
            {/* <form onSubmit={salvar}  className='flex flex-col'>
                <InputText label="Nome" type="text" placeholder="Digite o nome" value={name} modified={(value:string) => setName(value)}/>
                <InputText label="Preço" type="number" placeholder="Digite o valor" value={price} modified={(value:number) => setPrice(value)}/>
                <InputText label="Quantidade" type="number" placeholder="Digite a quantidade" value={amount} modified={(value:number) => setAmount(value)}/>
                <InputText label="Imagem" type="text" placeholder="Informe o link da imagem" value={image} modified={(value:string) => setImagem(value)}/>
                <button type='submit'>Salvar</button>
            </form> */}
            <button onClick={salvar}>Salvar</button>
        </div>
    )
}
export default FormProduct