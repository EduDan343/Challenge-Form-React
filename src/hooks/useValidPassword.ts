import React,{ useEffect, useState } from "react";



export function useValidPassword(): any {
    function validate(password: any) {
        let error = {
            message: '',
            eigthCharacters: false,
            oneNumber: false,
            twoNACharacters: false,
            oneUppercase: false,
        };
        if(!password.newPassword.length){
            error.message = 'Password is required!'
        } else if( password.newPassword != password.repeatPassword ) {
            error.message = 'Password dont match !!'
        } 

        if(/^.{8,}/.test(password.newPassword)) {
            error.eigthCharacters = true
        } else {
            error.eigthCharacters = false
        }

        if(!/^(?=.*?[0-9])/.test(password.newPassword)) {
            error.oneNumber = false
        } else {
            error.oneNumber = true
        }

        if(!/^(?=.*?[\/#\(\?\)\!@\[\$\]\%\{\^\}\&\:\\;\\'\\,\\`\\~\\+\\=\\<\\>\\"\\.\*-])/.test(password.newPassword)) {
            error.twoNACharacters = false
        } else {
            error.twoNACharacters = true
        }

        if(!/^(?=.*?[A-Z])/.test(password.newPassword)) {
            error.oneUppercase = false
        } else {
            error.oneUppercase = true
        }

        return error;
      }
      //Estado password
      const [password, setPassword] = useState<object>({
        newPassword: '',
        repeatPassword: '',
      })
  
      //Estado error
      const [error, setError] = useState<object>({
        message: '',
        eigthCharacters: false,
        oneNumber: false,
        twoNACharacters: false,
        oneUppercase: false,
      })

      useEffect(() => {
        setError(validate(password))
      },[password])
  
      const handlePassword = (event: React.ChangeEvent<HTMLInputElement>):void => {
        event.preventDefault()
        console.log(event.target.value)
        setPassword({
            ...password,
            [event.target.name] : event.target.value
        })
      }
    return [password, error, handlePassword]
}