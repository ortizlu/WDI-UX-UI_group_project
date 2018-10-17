import React, { Component } from 'react';
import './App.css';
import PlanningPage from '../Planning/PlanningPage'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faPencilAlt)

class App extends Component {
  render() {
    return (
      <div>
        <header>
        </header>
        <main>

        <PlanningPage />

        </main>
      </div>
    );
  }
}

export default App;
