import React, { useEffect, useState } from "react";
import { withRouter, Link } from "react-router-dom";
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
                setData(data)
            })
    }
    
    enviaBusca(user)

    let sairLink = `/`
    
    return(
        <body class="perfil">
            <div class="perfil nomeUsuario">
                {nomeUsuario}
            </div>
            <Link to={sairLink}>
                <div class="perfil sair">
                    Sair
                </div>
            </Link>
            <div class="perfil imagem">
                <img class="perfil" alt='' src={avatar} />
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
            <Link>
                <button class="perfil seguidores">
                    <div class="perfil num">
                        {seguidores}
                    </div>
                    Seguidores
                </button>
            </Link>
            <Link>
                <button class="perfil repos">
                    <div class="perfil num">
                        {seguindo}
                    </div>
                    Seguindo
                </button>
            </Link>
            <Link>
                <button class="perfil seguindo">
                    <div class="perfil num">
                        {repos}
                    </div>
                    Repositorios
                </button>
            </Link>
            <div class="perfil bio">
                Bio
            </div>
            <div class="perfil bioInfo">
                {bio}
            </div>
        </body>)

}

export default withRouter(CardsInfo)