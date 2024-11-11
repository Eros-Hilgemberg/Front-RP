import { InputHTMLAttributes, ReactHTML } from "react";

export interface ProductsProps extends InputHTMLAttributes<HTMLInputElement>{
    label:string;
    type:string;
    placeholder:string;
    value:any;
    modified:any;
}

const InputText = ({label,type, placeholder, value, modified} : ProductsProps) =>{
    const onUpdate = (e : React.ChangeEvent<HTMLInputElement>) => {
        modified(e.target.value);
    }
    return(
        <div className="flex flex-col">
            <label htmlFor="">{label}:</label>
            <input className="bg-slate-100 rounded-lg p-2" onChange={onUpdate} required type={type} placeholder={placeholder} value={value}/>
        </div>
    )
}
export default InputText;