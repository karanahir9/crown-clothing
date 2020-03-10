import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firbase.utils';

import {SignInButton, SignInContainer, SignInTitle} from './sign-in.styles.jsx';

class SignIn extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({ email: '', password:''});
        } catch (error) {
            console.log(error);
        }  
    };

    handdleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name] : value});
    }

    render() {
        return( 
        <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>Sign In with your email and password</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput name="email" type="email" value={this.state.email} handleChange={this.handdleChange} label="Email" required/>
            
                <FormInput name="password" type="password" value={this.state.password} handleChange={this.handdleChange} label="Password" required/>
                
            <SignInButton>
                <CustomButton type="submit">Sign In</CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
            </SignInButton>
            </form>
        </SignInContainer>
        );
    }
}

export default SignIn;