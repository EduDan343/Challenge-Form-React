import React,{ ChangeEventHandler, useEffect, useState } from "react";
import { useValidName } from '../hooks/useValidName';
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  inputName: {
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

export function InputName(props: any): JSX.Element {

  const classes = useStyles()

    console.log('props', props)

    const [name, error, handleName] = useValidName()

    useEffect(() => {
      (error.length || name.length == 0) ? props.fn({...props.status, name: false}) : props.fn({...props.status, name: true})
    },[name, error])

    return(
      <div className={classes.container} >
          <input 
            className={classes.inputName} 
            style={{ border: '3px solid', 
            borderColor: error.length ? 'red':'greenyellow'}} 
            type="text" 
            name="name" 
            placeholder='Full Name' 
            value={name} 
            onChange={handleName} 
          />
          {error.length ? <p style={{ color: 'red' }}>{ error }</p> : null}
      </div>
    )
}