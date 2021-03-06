import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
//COMPONENTS
import Header from './components/Header';
import Training from './components/Training';
import Login from './components/Login';
import Register from './components/Register';
import Progress from './components/Progress';
import SnackBar from './components/SnackBar';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
//AUDIO 
import Tone from 'tone'
//HELPER FUNCTIONS AND DATA
import { randomChord, randomKey } from './helpers.js';
import { keys, majNumerals, minNumerals } from './chords';
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
    majorRootProgress: null,
    minorRootProgress: null,
    majNumerals: majNumerals,
    minNumerals: minNumerals,
    totalScore: null,
    toneProgression: [],
    playing: false,
    currentBar: null
  };

  //ON COMPONENT MOUNT, LOAD CHORD PROGRESSION
  //CHECK IF USER IS LOGGED INTO DATABASE
  componentDidMount() {
    this.newProgression();
    this.checkStatus()
    .then(({username, id}) => {
      this.setState({
        isLoggedIn: true,
        currentUsername: username,
        currentUserId: id
        })
        this.getProgressData();
    })
    .catch(err => {
      console.error(err);
    });
  }

  //LOG IN
  login = user => {
    axios.post(`${this.url}/server/login`, user)
    .then(user => {
      this.history.push('/');
      this.setState({ 
        message: `Welcome ${user.data.username}`,
        isLoggedIn: true,
        currentUsername: user.data.username,
        currentUserId: user.data.id,
        open : true
      })      
    })
    .catch(err => {
      console.log('ERROR: ', err );
        this.setState({
          message: err.response.data.message
        })
    })
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
        open : false,
        majorProgress: [],
        minorProgress: [],
        majorRootProgress: null,
        minorRootProgress: null,
        totalScore: null
      })
    })
    .catch(err => {
      //TODO: Handle Error
      console.error('React Logout Error: ', err);
    });
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
        message: `Welcome ${user.data.username}`,
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

  //HANDLE CLOSTING SNACKBAR
  closeSnackBar = () => {
    this.setState({
      open: false,
      message: ""
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
    Tone.Transport.stop();
    this.pianoLoop.stop();
    this.setStateStop();
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
      axios.post(`${this.url}/server/answers`, answerObj);
    } 
  };

  //NEXT QUESTION
  nextQuestion = () => {
    Tone.Transport.stop();
    this.pianoLoop.stop();
    this.setStateStop();
    this.newProgression();
    this.setState({ submitted: false, isCorrect: [], answers: []});
  };

  //SET PLAY STATE
  setStatePlay = () => {
    this.setState({
      playing: true
    });
  }
  //SET STOP STATE
  setStateStop = () => {
    this.setState({
      playing: false
    });
  }
  //GET USER DATA
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
    .then(({data: {message}}) => {
      this.setState({
        open: true,
        message: message
      });
      this.getProgressData();
    });
  }

  /////AUDIO FUNCTIONS
  piano = new Tone.Players({
    "Abmaj": require("./audio/Abmaj.mp3"),
    "Abmin": require("./audio/Abmin.mp3"),
    "Amaj": require("./audio/Amaj.mp3"),
    "Amin": require("./audio/Amin.mp3"),
    "Adim": require("./audio/Adim.mp3"),
    "ASdim": require("./audio/ASdim.mp3"),
    "Bbmin": require("./audio/Bbmin.mp3"),
    "Bmin": require("./audio/Bmin.mp3"),
    "Bbmaj": require("./audio/Bbmaj.mp3"),
    "Bdim": require("./audio/Bdim.mp3"),
    "Bmaj": require("./audio/Bmaj.mp3"),
    "Cbmaj": require("./audio/Cbmaj.mp3"),
    "CSmin": require("./audio/CSmin.mp3"),
    "Cmaj": require("./audio/Cmaj.mp3"),
    "Cmin": require("./audio/Cmin.mp3"),
    "Cdim": require("./audio/Cdim.mp3"),
    "CSdim": require("./audio/CSdim.mp3"),
    "Dbmaj": require("./audio/Dbmaj.mp3"),
    "Dmin": require("./audio/Dmin.mp3"),
    "Ddim": require("./audio/Ddim.mp3"),
    "Dmaj": require("./audio/Dmaj.mp3"),
    "DSmin": require("./audio/DSmin.mp3"),
    "DSdim": require("./audio/DSdim.mp3"),
    "Ebmin": require("./audio/Ebmin.mp3"),
    "Ebmaj": require("./audio/Ebmaj.mp3"),
    "Edim": require("./audio/Edim.mp3"),
    "Emaj": require("./audio/Emaj.mp3"),
    "Emin": require("./audio/Emin.mp3"),
    "Fmaj": require("./audio/Fmaj.mp3"),
    "Fmin": require("./audio/Fmin.mp3"),
    "Fdim": require("./audio/Fdim.mp3"),
    "FSmaj": require("./audio/FSmaj.mp3"),
    "FSmin": require("./audio/FSmin.mp3"),
    "FSdim": require("./audio/FSdim.mp3"),
    "Gbmaj": require("./audio/Gbmaj.mp3"),
    "Gmaj": require("./audio/Gmaj.mp3"),
    "Gmin": require("./audio/Gmin.mp3"),
    "Gdim": require("./audio/Gdim.mp3"),
    "GSmin": require("./audio/GSmin.mp3"),
    "GSdim": require("./audio/GSdim.mp3")
  }, {
    "volume": 0,
    "fadeOut": "32n",
  }).toMaster();
  //Piano Loop
  pianoLoop = new Tone.Sequence((time, col) => { 
    this.setState({
      currentBar: col
    });
    this.piano.get(this.state.toneProgression[col]).start(time, 0, "1n", 0);   
    if(col === 7) { 
      this.stopProgression();  
      this.setStateStop();   
    }  
  }, [0, 1, 2, 3, 4, 5, 6, 7], "1n");

  //PLAY PIANO PROGRESSION
  playProgression = () => {
    Tone.context.resume();
    Tone.Transport.start();
    this.pianoLoop.start();
    this.setStatePlay();
  }

  //STOP PIANO PROGRESSION
  stopProgression = () => {
    Tone.Transport.stop();
    this.pianoLoop.stop();
    this.setStateStop();
    setTimeout(() => {
      this.setState({currentBar: null})
    }, 1500);
  }

  //CHANGE TEMPO
  changeTempo = (tempo) => {    
    Tone.Transport.bpm.value = tempo
  }

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
                    toneProgression={this.state.toneProgression}
                    playProgression={this.playProgression}
                    stopProgression={this.stopProgression}
                    playing={this.state.playing}
                    changeTempo={this.changeTempo}
                    currentBar={this.state.currentBar}
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
                  majorRoot={this.state.majorRootProgress}
                  minorRoot={this.state.minorRootProgress}
                  username={this.state.currentUsername}
                  resetData={this.resetData}
                  totalScore={this.state.totalScore}
                  majNumerals={this.state.majNumerals}
                  minNumerals={this.state.minNumerals}
                  isLoggedIn={this.state.isLoggedIn}
                />
              );
            }} 
            />

            <Route exact component={NotFound} />
          </Switch>
          <Footer />
          <SnackBar 
            open={this.state.open}
            username={this.state.currentUsername}
            closeSnackBar={this.closeSnackBar}
            message={this.state.message}
          />
        </div>
      </Router>
    );
  }
}

export default App;
