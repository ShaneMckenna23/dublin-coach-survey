import React from 'react'
import { Switch, Route,BrowserRouter } from 'react-router-dom'
import WelcomePage from './components/WelcomePage/WelcomePage.js'
import SurveyInfo from './components/SurveyInfo/SurveyInfo.js'

const App = () => (
  <main>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={WelcomePage}/>
        <Route path='/survey' component={SurveyInfo}/>
      </Switch>
    </BrowserRouter>
  </main>
)

export default App

