import './App.css'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
import React, { useState } from 'react'
import Alert from './components/Alert'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  const [mode, setMode] = useState('light') //wheather dark mode is on ore not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type })
    setTimeout(() => {
      setAlert(null)
    }, 1800)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#05214b'
      showAlert('Dark mode enabled', 'success')
      document.title = 'Text Utils - Dark Mode'
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode enabled', 'success')
      document.title = 'Text Utils - Light Mode'
    }
  }
  return (
    <>
      {/* <Navbar title="Text Utils" aboutText="About Textutils" /> */}
      {/* <Navbar /> */}
      <Router>
        <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/">
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze below"
                mode={mode}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App
