import React, { useState } from 'react'
import App from './App'


export default function Form(props){
    const { values, update, submit } = props

  

     const change = evt => {
         const {name, value} = evt.target
        update(name, value)
     }

     const onSubmit = evt => {
         evt.preventDefault()
         submit()
     }



    return(
        <form>
            <label>Name:
                <input 
                type ='text'
                name ='name'
                change={change}
                value={values.name}
                placeholder='name'
                />
            </label>

            <label>Email:
                <input 
                type ='email'
                name='email'
                change={change}
                vaule={values.email}
                placeholder='email'
                />
            </label>

            <label>Role:
                <input 
                type ='text'
                name='role'
                change={change}
                value={values.role}
                placeholder='role'
                />
            </label>
            <div className='submit'>
                <button>Submit</button>
            </div>
        </form>
    )
 }