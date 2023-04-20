import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../firebase';

class Cadastro extends Component{

    constructor(props){
        super(props);
        this.state = {
            email: "",
            senha: "",
            nome: "",
            sobrenome: "",
            dataDeNascimento: ""
        }

        this.cadastrar = this.cadastrar.bind(this);
        this.voltar = this.voltar.bind(this);
    }

    voltar(){
        window.location.href = "./"
    }

    async cadastrar(){
        await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
          .then(async (retorno) =>{
            await firebase.firestore().collection("usuario").doc(retorno.user.uid).set({
              nome: this.state.nome,
              sobrenome: this.state.sobrenome,
              dataDeNascimento: this.state.dataDeNascimento,
            });
      
            alert("Usuário cadastrado com sucesso");
     
          })
          .catch((erro) => {
            console.error(erro);
            alert("Verifique os dados do formulário e tente novamente.");
          });
      }
      

    render(){
        return(
            <div>
                <h1> Tela de Cadastro</h1>
                <input type="text" placeholder='E-mail' onChange={(e) => this.setState({email:e.target.value})} />
                <br/>
                <input type="password" placeholder='Senha' onChange={(e) => this.setState({senha:e.target.value})} />
                <br/>
                <input type="text" placeholder='Nome' onChange={(e) => this.setState({nome:e.target.value})} />
                <br/>
                <input type="text" placeholder='Sobrenome' onChange={(e) => this.setState({sobrenome:e.target.value})} />
                <br/>
                <input type="date" placeholder='Data de Nascimento' onChange={(e) => this.setState({dataDeNascimento:e.target.value})} />
                <br/>
                <button onClick={this.cadastrar}>Cadastrar-se</button>
                <button onClick={this.voltar}>Voltar</button>
            </div>
        )
    }

}

    export default Cadastro;