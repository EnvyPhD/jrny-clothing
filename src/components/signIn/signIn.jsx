import React from 'react';

import FormInput from '../formInput/formInput'

import './signIn.style.scss'
import CustomButton from '../customButton/customButton';

import { signInWithGoogle } from '../../firebase/firebase.utils'


class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: ''})
}
    

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value})
}

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                    name='email' 
                    type='email' 
                    label='Email'
                    value={this.state.email} 
                    required 
                    handleChange={this.handleChange}/>

                    <FormInput 
                    name='password' 
                    type='password' 
                    label='Password'
                    value={this.state.password} 
                    required
                    handleChange={this.handleChange}/>

                    <CustomButton onClick={signInWithGoogle}> Sign In</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;