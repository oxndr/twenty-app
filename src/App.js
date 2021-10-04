import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { StateMachineProvider, createStore } from 'little-state-machine'
import { Step1 } from './pages/Step1'
import { Step2 } from './pages/Step2'
import { Step3 } from './pages/Step3'
import { Step4 } from './pages/Step4'
import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/styles.scss'

createStore({ data: { name: '', email: '', phone: '', quantity: '' } })

function App() {
  return (
    <StateMachineProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Step1} />
          <Route path="/step1" component={Step1} />
          <Route path="/step2" component={Step2} />
          <Route path="/step3" component={Step3} />
          <Route path="/step4" component={Step4} />
        </Switch>
      </Router>
    </StateMachineProvider>
  )
}

export default App
