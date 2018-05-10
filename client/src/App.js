import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
//COMPONENTS
import Header from './components/Header';
import Training from './components/Training';
import Login from './components/Login';
import Register from './components/Register';
import Progress from './components/Progress';
import NotFound from './components/NotFound';
//HELPER FUNCTIONS AND DATA
import { randomChord, randomKey } from './helpers.js';
import keys from './chords';
//DEPENDENCIES
import { createBrowserHistory as createHistory } from "history";
import axios from 'axios';
//STYLE
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
    open: false,
    majorProgress: [],
    minorProgress: [],
    majorRootProgress: [],
    minorRootProgress: [],
    totalScore: null,
    toneProgression: []
  };

  //ON COMPONENT MOUNT, LOAD CHORD PROGRESSION
  //CHECK IF USER IS LOGGED INTO DATABASE
  //TODO: ERROR HANDLING, CATCH
  componentDidMount() {
    this.newProgression();
    this.checkStatus()
    .then(({username, id}) => {
      this.setState({
        isLoggedIn: true,
        currentUsername: username,
        currentUserId: id
        })
        // this.getProgressData();
    });
  }

  //LOG IN
  login = user => {
    axios.post(`${this.url}/server/login`, user)
    .then(user => {
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
    axios.post(`${this.url}/server/logout`)
    .then(data => {
      this.setState({
        message: "",
        isLoggedIn: false,
        currentUsername: null,
        currentUserId: null,
        open : false
      })
    })
    .catch(err => {
      //TODO: Handle Error
      console.log('Client Logout Error: ', err);
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
      axios.post(`${this.url}/server/login`, {username: newUser.username, password: newUser.password});
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

  //CHECK USER STATUS
  checkStatus = () => {
    return new Promise((resolve, reject) => {
      axios('/server/status')
      .then(status => {
        if (status.data) {
          resolve(status.data);
        }
      })
      .catch(err => {
        reject(err);
      });
    });
  }

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
    for (let i = 0; i < 7; i++) {
      let c = randomChord();
      chordProgression.push(chords[c]);
    }
    chordProgression.unshift(chords[0]);
    this.setState({
      key: chords,
      chords: chordProgression,
    });
    console.log('ANSWER KEY: ', chordProgression);
    //PASS CHORD PROGRESSION FOR AUDIO, REPLACE # with S for sharp chords
    let toneProgression = chordProgression.map(chord => chord.replace("#", "S"));
    this.setState({toneProgression});
  };

  //SUBMIT USER ANSWERS
  userAnswers = [];
  submitAnswer = async () => {
    this.setState({ submitted: true });
    let answerKey = [...this.state.chords];
    let userAnswers = [...this.state.answers];
    //ANSWERS FOR DATABASE
    let answers = [];
    let isCorrect = answerKey.map((answer, i) => { 
      let correct =  answer === userAnswers[i] ? true : false;
      let chordRoot = this.state.key.indexOf(answer) + 1;
      answers.push({chord: answer, correct, chordRoot});
      return correct;
    });
    this.setState({ isCorrect: isCorrect });
    let answerObj = {keyName: this.state.key[0], answers};
    let user = await this.checkStatus();
    if (user) {
      axios.post(`${this.url}/server/answers`, answerObj)
      .then(message => {
        // this.getProgressData();
      })
    } 
  };

  getProgressData = () => {
    if (this.state.currentUsername) {
      axios.get(`${this.url}/server/progress/root_stats/major`)
      .then(({data}) => {
        this.setState({
          majorRootProgress: data
        });
      });
      axios.get(`${this.url}/server/progress/root_stats/minor`)
      .then(({data}) => {
        this.setState({
          minorRootProgress: data
        });
      });
      axios.get(`${this.url}/server/progress/major`)
      .then(({data}) => {
        this.setState({
          majorProgress: data
        })
      });
      axios.get(`${this.url}/server/progress/minor`)
      .then(({data}) => {
        this.setState({
          minorProgress: data
        });
      });
      axios.get(`${this.url}/server/progress/overview/total`)
      .then(({data: { score: totalScore}}) => {
        this.setState({
          totalScore
        });
      });
    }
  }

  //RESET USER DATA
  resetData = () => {
    axios.delete(`${this.url}/server/progress/reset`)
    .then(({data: message}) => {
      console.log('DATA: ', message );
      this.getProgressData();
    });
  }

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
          getProgressData={this.getProgressData}
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
                    toneProgression={this.state.toneProgression}
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

            <Route exact path="/progress" render={() => {
              return (
                <Progress 
                  getProgressData={this.getProgressData}
                  majorProgress={this.state.majorProgress}
                  minorProgress={this.state.minorProgress}
                  username={this.state.currentUsername}
                  resetData={this.resetData}
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
