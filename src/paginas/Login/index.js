import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from '../../firebase';


class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            senha: ""
        }

        this.login = this.login.bind(this);
        this.cadastro = this.cadastro.bind(this);
    }

    cadastro(){
        window.location.href = "./cadastro"
    }

    async login(){

        await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
        .then(() =>{
            window.location.href = "./principal"
        })
        .catch((erro) =>{
            alert("Verifique se os dados estão corretos ou se você possui cadastro!")
        });

    }

    render(){
        return(
            <div>
                <h1> Tela de Login</h1>
                <input type="text" placeholder='E-mail' onChange={(e) => this.setState({email:e.target.value})} />
                <br/>
                <input type="password" placeholder='Senha' onChange={(e) => this.setState({senha:e.target.value})} />
                <br/>
                <button onClick={this.login}>Login</button>
                <button onClick={this.cadastro}>Cadastro</button>
            </div>
        )
    }
}
export default Login;