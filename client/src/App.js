import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Training from './components/Training';
import Login from './components/Login';
import Register from './components/Register';
import NotFound from './components/NotFound';
import { randomChord, randomKey } from './helpers.js';
import { createBrowserHistory as createHistory } from "history";
import axios from 'axios';
import keys from './chords';
import './App.css';



class App extends Component {
  //HISTORY
  history = createHistory(this.props);
  url = "http://localhost:5000";

  //STATE
  state = {
    key: [],
    chords: [],
    answers: [],
    isCorrect: [],
    submitted: false,
    isLoggedIn: false,
    message: '',
    currentUsername: null,
    currentUserId: null,
    open: false
  };

  //ON COMPONENT MOUNT, LOAD CHORD PROGRESSION
  componentDidMount() {
    this.newProgression();
    axios('/server/status')
    .then(status => {
      if (status.data) {
        this.setState({
          isLoggedIn: true,
          currentUsername: status.data.username,
          currentUserId: status.data.id
        })
      }
    })
  }

  //LOG IN
  login = user => {
    console.log('CLIENT USER: ', user);
    axios.post(`${this.url}/server/login`, user)
    .then(user => {
      console.log('USER: ', user );
      this.history.push('/');
      this.setState({ 
        message: "",
        isLoggedIn: true,
        currentUsername: user.data.username,
        currentUserId: user.data.id,
        open : true
      })      
    })
    .catch(err => {
      this.setState({
        message: err.response.data.message
      })
    });
  };

  //LOG OUT
  logout = () => {
    console.log('LOG OUT CLICKED');
    axios.post(`${this.url}/server/logout`)
    .then(data => {
      this.setState({
        message: "",
        isLoggedIn: false,
        currentUsername: null,
        currentUserId: null,
        open : false
      })
      console.log('Client Logout: ', data );
    })
    .catch(err => {
      console.log('Logout Error: ', err);
    });
    this.setState({ isLoggedIn: false });
  };

  //REGISTER
  register = newUser => {
    if (newUser.password !== newUser.confirmation) {
      this.setState({ message: 'Passwords do not match' });
      return;
    }
    axios.post(`${this.url}/server/register`, newUser)
    .then(user => {
      console.log('USER: ', user );
      this.history.push('/');
      this.setState({
        message: "",
        isLoggedIn: true,
        currentUsername: user.data.username,
        currentUserId: user.data.id,
        open : true
      })
    })
    .catch(err => {
      this.setState({"message": err.response.data.message})
    })
  };

  //UPDATING STATE ON ROUTE CHANGE
  updateState = () => {
    this.setState({
        message: ""
    })
  }

  //HANDLE SNACKBAR FOR REGISTRATION
  closeSnackBar = () => {
    this.setState({
      open: false
    })
  }

  //LOADS NEW CHORD PROGRESSION
  newProgression = () => {
    let k = randomKey();
    let chords = keys[k];
    let chordProgression = [];
    for (let i = 0; i < 8; i++) {
      let c = randomChord();
      chordProgression.push(chords[c]);
    }
    this.setState({
      key: chords,
      chords: chordProgression,
    });
    console.log('ANSWER KEY: ', chordProgression);
  };

  //SUBMIT USER ANSWERS
  userAnswers = [];
  submitAnswer = () => {
    this.setState({ submitted: true });
    let answerKey = [...this.state.chords];
    let userAnswers = [...this.state.answers];
    //ANSWERS FOR DATABASE
    let answers = [];
    let isCorrect = answerKey.map((answer, i) => { 
      let correct =  answer === userAnswers[i] ? true : false;
      answers.push({chord: answer, correct});
      return correct;
    });
    this.setState({ isCorrect: isCorrect });
    let answerObj = {keyName: this.state.key[0], answers};
    if (this.state.currentUsername) {
      axios.post(`${this.url}/server/answers`, answerObj);
    } 
  };

  //NEXT QUESTION
  nextQuestion = () => {
    this.newProgression();
    this.setState({ submitted: false, isCorrect: [] });
  };

  // DRAG AND DROP
  dragStart = (e, chord) => {
    e.dataTransfer.setData('chordName', chord);
  };

  dragOver = e => {
    e.preventDefault();
  };
  
  onDragDrop = (e, index) => {
    if (!this.state.submitted) {
      let chord = e.dataTransfer.getData('chordName');
      e.currentTarget.innerHTML = chord;
      this.userAnswers[index] = chord;
      this.setState({
        answers: this.userAnswers,
      });
    }
  };

  render() {
    return (
      <Router history={this.history}>
        <div>
          <Header 
          logout={this.logout} 
          isLoggedIn={this.state.isLoggedIn} 
          updateState={this.updateState}
          />
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return (
                  <Training
                    isCorrect={this.state.isCorrect}
                    nextQuestion={this.nextQuestion}
                    chords={this.state.chords}
                    keyName={this.state.key[0]}
                    submitAnswer={this.submitAnswer}
                    submitted={this.state.submitted}
                    onDragDrop={this.onDragDrop}
                    dragOver={this.dragOver}
                    dragStart={this.dragStart}
                    chordChoices={this.state.key}
                    open={this.state.open}
                    username={this.state.currentUsername}
                    closeSnackBar={this.closeSnackBar}
                  />
                );
              }}
            />

            <Route
              exact
              path="/login"
              render={() => {
                return <Login 
                login={this.login}
                message={this.state.message}
                />;
              }}
            />

            <Route
              exact
              path="/register"
              render={() => {
                return (
                  <Register
                    register={this.register}
                    message={this.state.message}
                  />
                );
              }}
            />

            <Route exact component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
