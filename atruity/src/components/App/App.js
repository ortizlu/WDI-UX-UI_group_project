import React, { Component } from 'react'
import './App.css'
import PlanningPage from '../Planning/PlanningPage'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPencilAlt, faBars } from '@fortawesome/free-solid-svg-icons'
import { Route, Switch, Link } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import TextExpanded from '../Planning/TextExpanded'
// import Objectives from '../Objectives/Objectives'
import Swot from '../Planning/SWOT'
import Implementation from '../GrayBar/Implementation'
import Tasks from '../GrayBar/Tasks'
import Blank from '../GrayBar/Blank'

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

  changeSwot = obj => {
    this.state.boxes[3].content = obj.str
    this.state.boxes[4].content = obj.wkn
    this.state.boxes[5].content = obj.opp
    this.state.boxes[6].content = obj.thr
  }

  render() {
    return (
      <div>
        <Header />
        <div className="flex bar">
          <Sidebar />

          <main className="main">
            <div className="gray-nav">
              <Link to="/">Planning</Link>
              <Link to="/implementation">Implementation</Link>
              <Link to="/tasks">My Tasks</Link>
            </div>
            <Switch>
              <Route path="/implementation" component={Implementation} />
              <Route path="/blank" component={Blank} />
              <Route path="/tasks" component={Tasks} />
              <Route
                path="/swot_analysis"
                render={props => (
                  <Swot
                    boxes={this.state.boxes}
                    contentChange={this.contentChange}
                    changeSwot={this.changeSwot}
                    {...props}
                  />
                )}
              />

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

              {/* objectives side button view */}

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
