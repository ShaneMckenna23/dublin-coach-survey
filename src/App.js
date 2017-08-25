import React from 'react'
import { Switch, Route,BrowserRouter } from 'react-router-dom'
import WelcomePage from './components/WelcomePage/WelcomePage.js'
import SurveyInfo from './components/SurveyInfo/SurveyInfo.js'
import TaskOne from './components/TaskOne/TaskOne.js'

const App = () => (
  <main>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={WelcomePage}/>
        <Route path='/survey' component={SurveyInfo}/>
        <Route path='/task/1' component={TaskOne}/>     
      </Switch>
    </BrowserRouter>
  </main>
)

export default App

