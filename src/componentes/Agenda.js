import React, { Component } from 'react'
import './Agenda.css'

export default class Agenda extends Component {

    constructor(props) {
        super(props);
        this.state = {
            valor_nome: "",
            valor_telefone: "",
            valor_operadora: "",
            lista: [
                { nome: "Yasmin Fernandes", telefone: "98981431325", operadora: "tim" }

            ]
        }
        this.salvar = this.salvar.bind(this);

    }
    salvar() {
        console.log(this.state);
        this.setState({
            lista: [...this.state.lista, {
                nome: this.state.valor_nome, telefone: this.state.valor_telefone, operadora: this.state.valor_operadora

            }]
        });
    }

    render() {
        return (
            <div className="dados">
                {/* <p> NOME TELEFONE OPERADORA </p> */}
                <div className="formulario">

                    <label for="nome"> Nome</label>
                    <input type="text" id="nome" name="nome" onChange={(event) => { this.setState({ valor_nome: event.target.value }) }}></input>
                    <div className="formulario">
                        <label for="telefone"> Telefone</label>
                        <input type="text" id="telefone" name="telefone" onChange={(event) => { this.setState({ valor_telefone: event.target.value }) }}></input>
                    </div>
                    <div className="formulario">
                        <label for="operadora"> Operadora</label>
                        <input type="text" id="operadora" name="operadora" onChange={(event) => { this.setState({ valor_operadora: event.target.value }) }}></input>
                    </div>
                    <div>
                        <input type="button" value="Salvar" onClick={this.salvar}></input>
                    </div>
                </div>
                <div className="buscar">
                    <h1>Lista de Contatos</h1>
                    <input type="text"></input>
                    <input type="button" value="Buscar"></input>


                </div>
                <div className="tabela">
                    <table className="tabela">
                        <thead>
                            <tr>
                                <th>nome</th>
                                <th>telefone</th>
                                <th>operadora</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.lista.map(function (contato) {
                                    return (
                                        <tr key={contato.nome}>
                                            <td>{contato.nome}</td>
                                            <td>{contato.telefone}</td>
                                            <td>{contato.operadora}</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>


            </div>
        )

    }
}
