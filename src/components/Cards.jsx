import React, { useEffect, useState } from "react";
import { Card, Image, Icon } from 'semantic-ui-react'
import { withRouter } from "react-router-dom";
import './Cards.css'

function CardsInfo() {
    const [nome, setNome] = useState('');
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [seguidores, setSeguidores] = useState('');
    const [seguidoresUrl, setSeguidoresUrl] = useState('');
    const [seguindo, setSeguindo] = useState('');
    const [seguindoUrl, setSeguindoUrl] = useState('');
    const [repos, setRepos] = useState('');
    const [reposUrl, setReposUrl] = useState('')
    const [avatar, setAvatar] = useState('');
    const [bio, setBio] = useState('');
    const [email, setEmail] = useState('');
    const [local, setLocal] = useState('');
    const [error, setError] = useState(' ')
    
    const user = String(window.location.pathname).slice(9)
    
    useEffect(() => {
        fetch("https://api.github.com/users/example")
        .then(res => res.json())
        .then(data => {
            setData(data)
        })
    }, [])
    
    const setData = ({ name, login, followers, followers_url, following, following_url, public_repos, repos_url, avatar_url, bio, email, location}) => {
        setNome(name)
        setNomeUsuario(login)
        setSeguidores(followers)
        setSeguidoresUrl(followers_url)
        setSeguindo(following)
        setSeguindoUrl(following_url)
        setRepos(public_repos)
        setReposUrl(repos_url)
        setAvatar(avatar_url)
        setBio(bio)
        setEmail(email)
        setLocal(location)
    }
    
    const enviaBusca = userInfo => {
        fetch(`https://api.github.com/users/${userInfo}`)
        .then(res => res.json())
        .then(data => {
            if (data.message) {
                setError(data.message)
            }
            else {
                setError(null)
                setData(data)
            }
        })
    }
    
    enviaBusca(user)

    const chamaSeguidores = () => {
        this.props.history.push(`/seguidores/${user}`)
    }
    
    return(
        <body class="perfil">
            <div class="perfil nomeUsuario">
                {nomeUsuario}
            </div>
            <div class="perfil sair">
                Sair
            </div>
            <div class="perfil imagem">
                <img class="perfil" src={avatar} />
            </div>
            <div class="perfil nome">
                {nome}
            </div>
            <div class="perfil email">
                {email}
            </div>
            <div class="perfil local">
                {local}
            </div>
            <button class="perfil seguidores">
                <div class="perfil num">
                    {seguidores}
                </div>
                Seguidores
            </button>
            <button class="perfil repos">
                <div class="perfil num">
                    {repos}
                </div>
                Repositorios
            </button>
            <button class="perfil seguindo">
                <div class="perfil num">
                    {repos}
                </div>
                Seguindo
            </button>
            <div class="perfil bio">
                Bio
            </div>
            <div class="perfil bioInfo">
                {bio}
            </div>
        </body>)
}

// class Cards extends React.Component {
//     render() {
//         CardsInfo()
//         // console.log((String(window.location.pathname).slice(7)))
// }

export default withRouter(CardsInfo)