import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'
import axios from './Axios'
import Member from './Member'

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {
  const [members, setMembers] = useState([])

  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue })
  }

    const submitForm = () => {
      const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
    }

    if (!newMember.name || !newMember.email || !newMember.role){
      return
    }

    axios.post('fakeapi.com', newMember)
      .then(res => {
        setMembers([res.data, ...members])
        setFormValues(initialFormValues)
      })
      .catch(err => {
        
      })
  }

  useEffect(() => {
    axios.get('fakeapi.com')
    .then(res => setMembers(res.data))
  }, [])

  return (
    <div className="App">
     <h1>Members</h1>

     <Form 
      values={formValues}
      update={updateForm}
      submit={submitForm}
     />

      {
        members.map(member => {
          return (
            <Member key={member.id} details={member} />
          )
        })
      }
    </div>
    
  );
}

export default App;
