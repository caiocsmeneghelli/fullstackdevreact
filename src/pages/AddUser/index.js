import React, { Component } from 'react';

import Header from '../../components/Header';
import api from '../../services/api'

import './index.css';
export default class AddUser extends Component {
    state = {
        userGit: '',
        linguagem: '',
        sexo: '',
        experiencia: ''
    }

    handeleSubmit = async event => {
        event.preventDefault();
        await api.post('/users', {
            userGit: this.state.userGit,
            linguagem: this.state.linguagem,
            sexo: this.state.sexo,
            experiencia: this.state.experiencia
        })
    }

    handleOnChange = event => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <div>
                <Header />
                <form onSubmit={this.handeleSubmit}>
                    <div className='addUser-container'>
                        <h1>Cadastrar Desenolvedor</h1>

                        <span>Github Username</span>
                        <input type='text'
                            name='userGit'
                            value={this.state.userGit}
                            onChange={this.handleOnChange} />
                        
                        <span>Linguagem</span>
                        <select type='text'
                                name='linguagem'
                                value={this.state.linguagem}
                                onChange={this.handleOnChange}>
                            <option value=''></option>
                            <option value='javascript'>Javascript</option>
                            <option value='python'>Python</option>
                            <option value='c#'>C#</option>
                        </select>

                        <span>Sexo</span>
                        <select type='text'
                                name='sexo'
                                value={this.state.sexo}
                                onChange={this.handleOnChange}>
                            <option value=''></option>
                            <option value='masculino'>Masculino</option>
                            <option value='feminino'>Feminino</option>
                        </select>

                        <span>Experiencia</span>
                        <select type='text'
                                name='experiencia'
                                value={this.state.experiencia}
                                onChange={this.handleOnChange}>
                            <option value=''></option>
                            <option value='junior'>Junior</option>
                            <option value='pleno'>Pleno</option>
                            <option value='senior'>Senior</option>
                        </select>
                        <button type='submit'>Salvar</button>
                    </div>
                </form>
            </div>
        )
    }
}