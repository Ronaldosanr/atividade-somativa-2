import React, { Component } from "react";
import firebase from '../../firebase';


class Principal extends Component{
    constructor(props){
        super(props);
        this.state = {
            nome: "",
            sobrenome: "",
            dataDeNascimento: ""
        }
    }

    deslogar(){
        window.location.href = "./"
    }

    async componentDidMount(){

        await firebase.auth().onAuthStateChanged(async (usuario)=>{
            if(usuario){
                var uid = usuario.uid;

                await firebase.firestore().collection("usuario").doc(uid).get()
                .then((retorno)=>{

                    this.setState({
                        nome: retorno.data().nome,
                        sobrenome: retorno.data().sobrenome,
                        dataDeNascimento: retorno.data().dataDeNascimento
                    })

                });

            }

        });

    }

    render(){
        return(
            <div>
                <h1>Tela Principal</h1>
                Nome: {this.state.nome} <br/>
                Sobrenome: {this.state.sobrenome} <br/>
                Data de Nascimento: {this.state.dataDeNascimento} <br />
                <button onClick={this.deslogar}>Deslogar</button>
            </div>
        )
    }

}


export default Principal;