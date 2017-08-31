import React from 'react'
import { Switch, Route,BrowserRouter } from 'react-router-dom'
import { RouteTransition } from 'react-router-transition';
import {Row,Col} from 'react-bootstrap'
import SurveyInfo from './components/SurveyInfo/SurveyInfo.js'
import TaskOne from './components/TaskOne/TaskOne.js'
import TaskOneSurvey from './components/TaskOneSurvey/TaskOneSurvey.js'
import TaskTwo from './components/TaskTwo/TaskTwo.js'
import TaskTwoSurvey from './components/TaskTwoSurvey/TaskTwoSurvey.js'
import TaskThree from './components/TaskThree/TaskThree.js'
import TaskThreeSurvey from './components/TaskThreeSurvey/TaskThreeSurvey.js'
import TaskFour from './components/TaskFour/TaskFour.js'
import TaskFourSurvey from './components/TaskFourSurvey/TaskFourSurvey.js'
import TaskFive from './components/TaskFive/TaskFive.js'
import TaskFiveSurvey from './components/TaskFiveSurvey/TaskFiveSurvey.js'
import Results from './components/Results/Results.js'

const App = () => (
  <div className="container">
    <Row>
      <Col lg={12} md={12} sm={12} xs={12}>
          <BrowserRouter>
            <Route render={({location, history, match}) => {
              return (
                <RouteTransition 
                  className="animated-wrapper"
                  pathname={location.pathname}
                  atEnter={{ translateX: 500 }}
                  atLeave={{ translateX: -200 }}
                  atActive={{ translateX: 0 }}
                  mapStyles={styles => {
                    if(styles.translateX < -140){
                      return { display: 'none'}
                    }
                    return { transform: `translateX(${styles.translateX}%)` }
                  }}
                >
                  <Switch key={location.key} location={location}>
                    <Route exact path='/' component={SurveyInfo}/>
                    <Route exact path='/results' component={Results}/>
                    <Route exact path='/task/1' component={TaskOne}/>
                    <Route path='/task/1/survey' component={TaskOneSurvey}/>
                    <Route exact path='/task/2' component={TaskTwo}/>
                    <Route path='/task/2/survey' component={TaskTwoSurvey}/> 
                    <Route exact path='/task/3' component={TaskThree}/>
                    <Route path='/task/3/survey' component={TaskThreeSurvey}/> 
                    <Route exact path='/task/4' component={TaskFour}/>
                    <Route path='/task/4/survey' component={TaskFourSurvey}/> 
                    <Route exact path='/task/5' component={TaskFive}/>
                    <Route path='/task/5/survey' component={TaskFiveSurvey}/> 
                  </Switch>
                </RouteTransition>
              );
            }} />
          </BrowserRouter>
      </Col>
    </Row>
  </div>
)

export default App



