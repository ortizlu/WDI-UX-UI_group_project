import React, { Component } from 'react'
import './App.css'
import PlanningPage from '../Planning/PlanningPage'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPencilAlt, faBars } from '@fortawesome/free-solid-svg-icons'
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import TextExpanded from '../Planning/TextExpanded'
import Objectives from '../Objectives/Objectives'
import Tasks from '../Objectives/Tasks'

library.add(faPencilAlt)
library.add(faBars)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      boxes: [
        {
          title: 'mission',
          content: `This is a good place to start your strategic planning journey!`,
          placeholder: `What do you do? Why do you exist?`
        },
        {
          title: 'vision',
          content: `You'll set your company's direction here.`,
          placeholder: 'Where are you trying to go?'
        },
        {
          title: 'values',
          content: `You'll put into words what your company cares about here.`,
          placeholder: `What are you company's values?`
        },
        {
          title: 'strengths',
          content: `To edit, click the pencil icon`,
          placeholder: 'What does your company do well?'
        },
        {
          title: 'weaknesses',
          content: `To edit, click the pencil icon`,
          placeholder: 'What could your company do better?'
        },
        {
          title: 'opportunities',
          content: `To edit, click the pencil icon`,
          placeholder: 'What opportunities do you want to capitalize on?'
        },
        {
          title: 'threats',
          content: `To edit, click the pencil icon`,
          placeholder: 'What outside threats do you need to mitigate?'
        }
      ]
    }
  }

  contentChange = obj => {
    // this.state.boxes.content.push(text)
    let box = this.state.boxes.find(box => box.title === obj.title)
    this.state.boxes[this.state.boxes.indexOf(box)].content = obj.textfield
  }
  
  render() {
    return (
      <div>
        <Header />
        <div className="flex">
          <Sidebar />

          <main className="main">
            <Switch>
              {/* objectives side button view */}
              <Route 
              path="/objectives"
              Component={Objectives}
              />
              {/* tasks view */}
              <Route 
              route="/tasks"
              Component={Tasks} 
              />
              {/* each individual box view */}
              <Route
                path="/:id"
                render={props => {
                  let oneBox = this.state.boxes.find(
                    singleBox => singleBox.title === props.match.params.id
                  )
                  return (
                    <TextExpanded
                      {...props}
                      contentChange={this.contentChange}
                      singleBox={oneBox}
                    />
                  )
                }}
              />
              {/* main view landing page */}
              <Route
                path="/"
                render={props => {
                  return <PlanningPage allBoxes={this.state.boxes} />
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
