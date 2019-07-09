import React from 'react'
import logo from './logo.svg'
import './App.css'
import Layout from './Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/projects" exact component={Projects}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
