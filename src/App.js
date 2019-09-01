import React from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import ArtWorks from './components/ArtWorks'
import Profile from './components/Profile'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const theme = createMuiTheme({
  palette: {
    background:{
      default: "#F8F8F7"
    },
  }
})

function App() {
    return (
      <div className="App">
      <Router>
        <MuiThemeProvider theme={theme}>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/artworks" exact component={ArtWorks} />
          </Switch>
          <Footer />
        </MuiThemeProvider>
      </Router>
      </div>
    );
}

export default App;
