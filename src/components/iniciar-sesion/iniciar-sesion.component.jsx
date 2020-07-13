import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth, IniciarSesionConGoogle} from '../../firebase/firebase.utils';

import './iniciar-sesion.styles.scss';

class IniciarSesion extends React.Component{
    constructor(param) {
        super(param);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event =>{
        event.preventDefault();
        const {email, password} = this.state;
        
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:'',password:''});
        } catch (error) {
            console.log(error);
        }

        this.setState({email:'', password:''})
    }

    handleChange = event =>{
        const {value, name} = event.target;

        this.setState({[name]: value})
    }

    render() {
        return(
            <div className='iniciar-sesion'>
                <h2 className='titulo'>¡Ya estoy registrado!</h2>
                <span>Inicia sesión ingresando tu email y contraseña</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label='email'
                        required />

                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                        required />
                    <div className='botones'>
                        <CustomButton type='submit'>Inicia sesión</CustomButton>
                        <CustomButton type='button' onClick={IniciarSesionConGoogle} 
                        iniciarSesionGoogle>Inicia sesión Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default IniciarSesion;