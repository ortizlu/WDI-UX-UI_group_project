import React, { Component } from 'react'
import './App.css'
import PlanningPage from '../Planning/PlanningPage'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPencilAlt, faBars } from '@fortawesome/free-solid-svg-icons'
import Header from './Header'
import Sidebar from './Sidebar'

library.add(faPencilAlt)
library.add(faBars)

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="flex">
          <Sidebar />
          <main className="main">
            <PlanningPage />
          </main>
        </div>
      </div>
    )
  }
}

export default App
