import React,{ ChangeEventHandler, DetailedHTMLProps, InputHTMLAttributes, useState } from "react";

export function useValidName(): any {
    function validate(name: string) {
        let error = '';
        if(!name.length){
          error = 'Name is required!'
        } else if(!/^[\s\S]{5,50}$/.test(name)) {
          error = 'Name is invalid required 5 to 50 characters!'
        }
        return error;
      }
      //Estado nombre
      const [name, setName] = useState<string>('')
  
      //Estado error
      const [error, setError] = useState<string>('')
  
      const handleName = (event: React.ChangeEvent<HTMLInputElement>):void => {
        event.preventDefault()
        console.log(event.target.value)
        setName(event.target.value)
        setError(validate(event.target.value))
      }
    return [name, error, handleName]
}