import { useEffect, useState } from "react";
import type { InputProps } from "../../interfaces/CreateModalProps";
import { usePratoMutate } from "../../hooks/usePratoMutate";
import type { PratoCreateDTO } from "../../interfaces/PratoCreateDTO";
import "./modal.css";
import type { ModalProps } from "../../interfaces/CloseModal";
//---
const Input = ({label,value,updateValue}: InputProps) => {
    //---
    return (
        <div>
            <label>{label}</label>
            <input type="text" value={value} onChange={e => updateValue(e.target.value)} />
        </div>
    )
}
//---
export function CreateModal({ closeModal }: ModalProps){
    const [prato_title,setTitle] = useState<string|number>("");
    const [prato_price,setPrice] = useState<string|number>(0);
    const [prato_image,setImage] = useState<string|number>("");
    const { mutate,isSuccess,isPending } = usePratoMutate();
    //---
    const submit = () => {
        const pratoCreateDTO: PratoCreateDTO = {prato_image,prato_price,prato_title};
        //---
        mutate(pratoCreateDTO);
    }
    //---
    useEffect(():void => {
        if(!isSuccess)return;
        closeModal();
    }, [isSuccess]);
    //---
    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo item no cardápio</h2>
                <form className="input-container">
                    <Input label="title" value={prato_title} updateValue={setTitle}/>
                    <Input label="price" value={prato_price} updateValue={setPrice}/>
                    <Input label="image" value={prato_image} updateValue={setImage}/>
                </form>
                <button onClick={submit} className="btn-secondary">
                    { isPending ? "Saving..." : "Postar"  }
                </button>
            </div>
        </div>
    )
}