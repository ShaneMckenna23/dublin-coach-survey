import React from 'react'
import { Switch, Route,BrowserRouter } from 'react-router-dom'
import WelcomePage from './components/WelcomePage/WelcomePage.js'
import SurveyPage from './components/SurveyPage/SurveyPage.js'


const App = () => (
  <main>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={WelcomePage}/>
        <Route path='/survey' component={SurveyPage}/>
      </Switch>
    </BrowserRouter>
  </main>
)

export default App
