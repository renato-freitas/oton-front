import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Experts from './pages/experts/experts'
import Analysis from './pages/analysis/analysis'
import Farms from './pages/farms/farms'

export default Routes => (
    <Switch>
        <Route path="/experts" component={Experts}></Route>
        <Route path="/analysis" component={Analysis}></Route>
        <Route path="/farms" component={Farms}></Route>
        <Redirect from="*" to="/" />
    </Switch>
)