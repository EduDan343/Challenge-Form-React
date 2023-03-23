import React,{ useEffect, useState } from "react";
import { useValidEmail } from '../hooks/useValidEmail'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  inputEmail: {
    margin: '5px',
    borderRadius: '5px',
    height: '2rem',
    width: '20rem',
    textAlign: 'center'
  },
  container: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    margin: '1rem',
    flexDirection: 'column'
  }
})

export function InputEmail(props: any): JSX.Element {

    const classes = useStyles()

    const [email, error, handleEmail] = useValidEmail()

    useEffect(() => {
        (error.length || email.length == 0) ? props.fn({...props.status, email: false}) : props.fn({...props.status, email: true})
      },[email, error])

    return(
        <div className={classes.container}>
            <input 
                className={classes.inputEmail} 
                style={{ border: '3px solid', 
                borderColor: error.length ? 'red':'greenyellow'}} 
                type="email" 
                placeholder='Your Email' 
                onChange={handleEmail}/>
            {error.length ? <p style={{ color: 'red' }}>{ error }</p> : null}
        </div>
    )
}