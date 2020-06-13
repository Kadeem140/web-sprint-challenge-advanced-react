// write your custom hook here to control your checkout form
import React, { useState } from "react";

export function useForm(initialValue){
    const[formValues, setFormValues] = useState(initialValue);

    
   const handleChanges = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };
     
    return [formValues, handleChanges]

}
