import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Form'
import axios from 'axios'
import formSchema from './Validation/formSchema'
import * as yup from 'yup'
import User from './User'
import { v4 as uuid} from 'uuid'

const initialFormValues = {

  username: '',
  email: '',
  password: '',
  role: '',
  termsOfService: false,

}

const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  role: '',

}

const initialUsers = []
const initialDisabled = true

export default function App() {

  const [users, setUsers ] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

const getUsers = () => {
  axios.get("https://reqres.in/api/users")
    .then(res => {
      setUsers(res.data.data)
    })
    .catch(err => {
      debugger
    })  
}

const postNewUser = newUser => {

  axios.post('https://reqres.in/api/users', newUser )
    .then(res => {
      console.log(res)
      setUsers([...users, res.data])
    })
    .catch(err => {
      debugger
    })
    .finally(() => {
      setFormValues(initialFormValues)
    })
}

// Form Actions Below

const inputChange = (name, value) => {

  yup
    .reach(formSchema, name)
    .validate(value)
    .then(valid => {
      setFormErrors({
        ...formErrors,
        [name]: "",
      })
    })

    .catch(err => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0]
      })
    })

    setFormValues({
      ...formValues,
      [name]: value
    })

}

const checkboxChange = (name, isChecked) => {
  setFormValues({
    ...formValues,
    [name]: isChecked
  })
}

const submit = () => {

  const newUser = {
    username: formValues.username.trim(),
    email: formValues.email.trim(),
    password: formValues.password.trim(),
    role: formValues.role,
    termsOfService: formValues.termsOfService,
  }

  postNewUser(newUser);
}

// what the hell does this useEffect do
useEffect(() => { 
  getUsers()
}, [])

useEffect(() => {
  formSchema.isValid(formValues)
    .then(valid => {
      setDisabled(!valid) // this disables the ability to submit
      // if inputs are invalid I believe
    })
}, [formValues])



  return (
    <div className="App">
      <header><h1>User Onboarding App</h1></header>
      <Form
      values={formValues}
      errors={formErrors}
      inputChange={inputChange}
      submit={submit}
      disabled={disabled}
      checkboxChange={checkboxChange}

      />

      {
        users.map(user => {
          return (
            <User key={user.id} details={user}/>
          )
        })
      }


    </div>
  );
}


