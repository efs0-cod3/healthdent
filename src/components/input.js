import React from "react";
import { FaCheckCircle, FaTimesCircle} from "react-icons/fa"
import { GroupInput, ErrorLeyend, IconValidation, Label, Input } from "../elements/form";

const CompInput = ({state, changeState, type, label, placeholder,  name, errorLeyend, expresionRegular, funcion}) => {
    const onChange = (e) => {
        // console.log(e.target.value);
        changeState({...state, field: e.target.value})//cambia el estado y spread field and valid como input
    }

    const validation = (e) =>{
        if(expresionRegular){
            if(expresionRegular.test(state.field)){
                changeState({...state, valid: 'true'})
            }else{
                changeState({...state, valid: 'false'})

            }
        }
        if(funcion){

            funcion();
        }
    }
    return (
        <div>
            <Label htmlFor={name} valid={state.valid}>{label} </Label> 
               <GroupInput>
                    <Input type = {type} placeholder = {placeholder} id={name} value={state.field} onChange={onChange} onKeyUp={validation} onBlur={validation} valid={state.valid}/>
                    <IconValidation
                     icon={state.valid ===  'true' ? FaCheckCircle : FaTimesCircle} 
                     valid={state.valid}/>
               </GroupInput>
               <ErrorLeyend valid={state.valid}> {errorLeyend} </ErrorLeyend> 
        </div>      
    );
}

export default CompInput