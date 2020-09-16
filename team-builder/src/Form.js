import React, { useState } from 'react'
import App from './App'


export default function Form(props){
    const { values, update, submit } = props

  

     const onChange = evt => {
         const {name, value} = evt.target
        update(name, value)
     }

     const onSubmit = evt => {
         evt.preventDefault()
         submit()
     }



    return(
        <form onSubmit={onSubmit}>
            <label>Name:
                <input 
                type ='text'
                name ='name'
                onChange={onChange}
                value={values.name}
                placeholder='name'
                />
            </label>

            <label>Email:
                <input 
                type ='email'
                name='email'
                onChange={onChange}
                value={values.email}
                placeholder='email'
                />
            </label>

            <label>Role:
                <select name='role' value={values.role} onChange={onChange} >
                <option value=''>--select role--</option>
                <option value='FrontEnd'>--FrontEnd--</option>
                <option value='BackEnd'>--BackEnd--</option>
                <option value='Designer'>--Designer--</option>
                </select>
            </label>
            <div className='submit'>
                <button>Submit</button>
            </div>
        </form>
    )
 }