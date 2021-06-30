import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Form from './components/Form'
import Cards from './components/Cards.jsx'

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Form} exact/>
            <Route path="/usuario" component={Cards} />
            <Route component={() => <div>Page 404</div>} />
        </Switch>
    )
}