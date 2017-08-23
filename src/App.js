import React from 'react'
import { Switch, Route } from 'react-router-dom'
import WelcomePage from './components/WelcomePage/WelcomePage.js'
import SurveyPage from './components/SurveyPage/SurveyPage.js'
import ResultsPage from './components/ResultsPage/ResultsPage.js'


const App = () => (
  <main>
    <Switch>
      <Route exact path='/' component={WelcomePage}/>
      <Route path='/survey' component={SurveyPage}/>
      <Route path='/results' component={ResultsPage}/>
    </Switch>
  </main>
)

export default App
