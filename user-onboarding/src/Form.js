import React from 'react';
import './App.css';

export default function Form(props) {

const {
    values,
    errors,
    inputChange,
    checkboxChange,
    disabled,
    submit
} = props

const onSubmit = evt => {
    evt.preventDefault()
    submit()
}

const onCheckboxChange = evt => {
    const { name, checked } = evt.target
    checkboxChange(name, checked)
}



  return (
    <form className='form-container' onSubmit={onSubmit}>
        <div className='form-submit-div' >
            <h2>Add a user</h2>
            <button>Submit</button>

            <div className='errors'>
                
                <div></div>
            </div>
            <div className='input-div'>
                <h4>Enter Information</h4>

                <label>Username&nbsp;
                    <input 
                    name='username'
                    type='text'



                    />
                </label>

                <label>Email&nbsp;
                    <input 
                    name='email'
                    type='email'


                    />
                </label>

                <label>Password&nbsp;
                    <input
                    name='password'
                    type='password'

                    />
                </label>

                <label>Role&nbsp;
                    <select
                    name='role'
                    >
                        <option value=''>--Select an Option</option>
                        <option value='Hacker-Beast'>Hacker Beast</option>
                        <option value='Front-End'>Front End Engineer</option>
                        <option value='Back-End'>Back End Engineer</option>
                    </select>
                </label>

                <label>Agree to Terms of Service&nbsp;
                    <input 
                    type='checkbox'
                    name='termsOfService'

                    />

                </label>


            </div>

        </div>

    </form>
  );
}

