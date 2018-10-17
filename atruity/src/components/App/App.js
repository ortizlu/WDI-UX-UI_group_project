import React, { Component } from 'react'
import './App.css'
import PlanningPage from '../Planning/PlanningPage'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPencilAlt, faBars } from '@fortawesome/free-solid-svg-icons'
import {
  Link,
  Route,
  Switch
} from "react-router-dom";
import Header from './Header'
import Sidebar from './Sidebar'
import TextExpanded from '../Planning/TextExpanded'

library.add(faPencilAlt)
library.add(faBars)

class App extends Component {
    constructor(props) {
    super(props)
    this.state = {
      titles: [
        'mission',
        'vision',
        'values',
        'strengths',
        'weaknesses',
        'opportunities',
        'threats'
      ],
      mission: [
        `This is a good place to start your strategic planning journey!`,
        `You'll set your company's direction here.`,
        `You'll put into words what your company cares about here.`,
        `To edit, click the pencil icon`,
        `To edit, click the pencil icon`,
        `To edit, click the pencil icon`,
        `To edit, click the pencil icon`,
        `To edit, click the pencil icon`
      ]
    }
  }
  render() {
    return (
      <div>
        <Header />
        <div className="flex">
          <Sidebar />

          <main className="main">

            <Switch>

              <Route
                path="/:id"
                render={props => {
                  return <TextExpanded titles={this.state.titles} mission={this.state.mission}/>
                }}
              />

              <Route
              path="/"
              render={props => {
                return  <PlanningPage titles={this.state.titles} mission={this.state.mission}/> 
              }}
            />

            </Switch>
            
          </main>
        </div>
      </div>
    )
  }
}

export default App
