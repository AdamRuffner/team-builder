import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {
  const [teamMembers, setTeamMembers] = useState([])

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
  }

  return (
    <div className="App">
     <h1>Members</h1>

     <Form 
      values={formValues}
      update={updateForm}
      submit={submitForm}
     />
    </div>
  );
}

export default App;
