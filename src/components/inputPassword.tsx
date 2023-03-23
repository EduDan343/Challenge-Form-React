import React, { useEffect } from "react";
import {createUseStyles} from 'react-jss'
import { useValidPassword } from '../hooks/useValidPassword'

const useStyles = createUseStyles({
    inputPassword: {
      margin: '5px',
      borderRadius: '5px',
      height: '2rem',
      width: '20rem',
      textAlign: 'center',
      marginBottom: '1rem'
    },
    container: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      margin: '1rem',
      flexDirection: 'column'
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'baseline',
        margin: '1.5rem'
    }
  })
export function InputPassword(status:any, setStatus: any) {

    const classes = useStyles()

    const [password, error, handlePassword] = useValidPassword()

    // useEffect(() => {
    //     (error.message.length || password.newPassword.length == 0) ? setStatus({...status, password: false}) : setStatus({...status, password: true})
    //   },[password, error])
    console.log('password :', password.newPassword)
    return(
        <div className={classes.container}>
            <input 
                className={classes.inputPassword} 
                style={{ border: '3px solid', borderColor: !password.newPassword.length ? 'black' : error.message.length ? 'red':'greenyellow'}} 
                type="password" 
                placeholder='Your Password' 
                onChange={handlePassword}
                name='newPassword'
            />
            <input 
                className={classes.inputPassword} 
                style={{ border: '3px solid', borderColor: !password.newPassword.length ? 'black' : error.message.length ? 'red':'greenyellow'}} 
                type="password" 
                placeholder='Rewrite your password' 
                onChange={handlePassword}
                name='repeatPassword'
            />
            {error.message.length ? <p style={{ color: 'red' }}>{ error.message }</p> : null}
            <ul className={classes.list}>
                <li style={{ color: !password.newPassword.length ? 'black' : !error.eigthCharacters ? 'red' : 'green' }}>Should be at least 8 characters long</li>
                <li style={{ color: !password.newPassword.length ? 'black' : !error.oneNumber ? 'red' : 'green' }}>Should contains at least one number</li>
                <li style={{ color: !password.newPassword.length ? 'black' : !error.twoNACharacters ? 'red' : 'green' }} >Should contains at least two non-alphanumeric characters</li>
                <li style={{ color: !password.newPassword.length ? 'black' : !error.oneUppercase ? 'red' : 'green' }} >Should contains at least one uppercase character</li>
            </ul>
        </div>
    )
}