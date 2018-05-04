import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Training from "./components/Training";
import Login from "./components/Login";
import Register from "./components/Register";
import NotFound from "./components/NotFound";
import { randomChord, randomKey } from "./helpers.js";
import keys from "./chords";
import "./App.css";

class App extends Component {
  //STATE
  state = {
    key: [],
    chords: [],
    answers: [],
    isCorrect: [],
    submitted: false,
    isLoggedIn: false,
    "message": ""
  };

  //LOG IN
  login = user => {
    console.log("USER: ", user);
    this.setState({ isLoggedIn: true });
  };

  //Log Out
  logout = () => {
    console.log("LOG OUT CLICKED");
    this.setState({ isLoggedIn: false });
  };

  //REGISTER
  register = newUser => {
    if(newUser.password !== newUser.confirm) { 
      this.setState({"message": "Passwords do not match"});
    }
    console.log("NEW USER", newUser);
  };

  //ON COMPONENT MOUNT, LOAD CHORD PROGRESSION
  componentDidMount() {
    this.newProgression();
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
      chords: chordProgression
    });
    console.log("ANSWER KEY: ", chordProgression);
  };

  //SUBMIT USER ANSWERS
  userAnswers = [];
  submitAnswer = () => {
    this.setState({ submitted: true });
    let answerKey = [...this.state.chords];
    let userAnswers = [...this.state.answers];
    let isCorrect = answerKey.map((answer, i) => {
      return answer === userAnswers[i] ? true : false;
    });
    this.setState({ isCorrect: isCorrect });
  };

  //NEXT QUESTION
  nextQuestion = () => {
    this.newProgression();
    this.setState({ submitted: false, isCorrect: [] });
  };

  // DRAG AND DROP
  dragStart = (e, chord) => {
    e.dataTransfer.setData("chordName", chord);
  };
  dragOver = e => {
    e.preventDefault();
  };
  onDragDrop = (e, index) => {
    if (!this.state.submitted) {
      let chord = e.dataTransfer.getData("chordName");
      e.currentTarget.innerHTML = chord;
      this.userAnswers[index] = chord;
      this.setState({
        answers: this.userAnswers
      });
    }
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header logout={this.logout} isLoggedIn={this.state.isLoggedIn} />
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
                    />
                  );
                }}
              />

              <Route
                exact
                path="/login"
                render={() => {
                  return <Login login={this.login} />;
                }}
              />

              <Route
                exact
                path="/register"
                render={() => {
                  return <Register register={this.register} message={this.state.message}/>;
                }}
              />

              <Route exact component={NotFound} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
