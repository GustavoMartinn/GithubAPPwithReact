import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from './App.jsx'
import Cards from './components/Cards.jsx'


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact/>
            <Route path="/usuario" component={Cards} />
            <Route component={() => <div>Page 404</div>} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
)