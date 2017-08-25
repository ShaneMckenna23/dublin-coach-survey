import React from 'react'
import { Switch, Route,BrowserRouter } from 'react-router-dom'
import { RouteTransition } from 'react-router-transition';
import WelcomePage from './components/WelcomePage/WelcomePage.js'
import SurveyInfo from './components/SurveyInfo/SurveyInfo.js'
import TaskOne from './components/TaskOne/TaskOne.js'

const App = () => (
  <main>
    <BrowserRouter>
      <Route render={({location, history, match}) => {
        return (
          <RouteTransition 
            className="animated-wrapper"
            pathname={location.pathname}
            atEnter={{ opacity: 0, height: "100px" }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
          >
            <Switch key={location.key} location={location}>
              <Route exact path='/' component={WelcomePage}/>
              <Route path='/survey' component={SurveyInfo}/>
              <Route path='/task/1' component={TaskOne}/> 
            </Switch>
          </RouteTransition>
        );
      }} />
    </BrowserRouter>
  </main>
)

export default App



