import React, {Component} from 'react';


class LoginForm extends Component{

    render(){
        return(
            <div className="alert alert-info">
                <form className="formulario" action="registrado">
                    <label className="nameLogin">Usuario:</label>
                    <input className="inputNameUser" type="text" namw="userName" placeholder="Usuario"/>
                    <label className="passwordLogin">Cotraseña:</label>
                    <input className="inputPasswordUser" type="password" name="userPassword" placeholder="Contraseña"/>
                    <button className="btn-secondary">Entrar</button>
                </form>
            </div>
        );
    }
    
}

export default LoginForm;