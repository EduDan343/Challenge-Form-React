import React,{ useState } from "react";

export function useValidEmail(): any {
    function validate(email: string) {
        let error = '';
        if(!email.length){
          error = 'Email is required!'
        } else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
          error = 'Email is invalid required format example@mail.com !'
        }
        return error;
      }
      //Estado email
      const [email, setEmail] = useState<string>('')
  
      //Estado error
      const [error, setError] = useState<string>('')
  
      const handleEmail = (event: React.ChangeEvent<HTMLInputElement>):void => {
        event.preventDefault()
        console.log(event.target.value)
        setEmail(event.target.value)
        setError(validate(event.target.value))
      }
    return [email, error, handleEmail]
}