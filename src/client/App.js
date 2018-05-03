
import React, { Component } from 'react';
import Header from './components/Header';
import Chords from './components/Chords';
import Choices from './components/Choices';
import { randomChord, randomKey } from './helpers.js';
import keys from './chords';
import './App.css';

class App extends Component {
  //STATE
  state = {
    key: [],
    chords: [],
    answers: [],
    isCorrect: [],
    submitted: false
  }
  //ON COMPONENT MOUNT, LOAD CHORD PROGRESSION
  componentDidMount() {
    this.newProgression();
  }
  
  //LOADS NEW CHORD PROGRESSION
  newProgression = () => {
    let k = randomKey();
    let chords = keys[k] 
    let chordProgression = [];
    for (let i = 0; i < 8; i++) {
      let c = randomChord();
      chordProgression.push(chords[c]);
    };
    this.setState({
      key: chords,
      chords: chordProgression
    });
    console.log('ANSWER KEY: ', chordProgression );
  }
  
  //SUBMIT USER ANSWERS
  userAnswers = [];
  submitAnswer = () => {
    this.setState({submitted: true});
    let answerKey = [...this.state.chords];
    let userAnswers = [...this.state.answers];
    let isCorrect = answerKey.map((answer, i) => {
      return answer === userAnswers[i] ? true : false;
    });  
    this.setState({isCorrect: isCorrect});
 
  }

  //NEXT QUESTION
  nextQuestion = () => {
    this.newProgression();
    this.setState({submitted: false, isCorrect: []});
  }

  // DRAG AND DROP
  dragStart = (e, chord) => {
    e.dataTransfer.setData("chordName", chord);
  }
  dragOver = (e) => {
    e.preventDefault();
  }
  onDragDrop = (e, index) => {
    if(!this.state.submitted) {
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
      <div>
        <Header />
        <Chords 
        isCorrect={this.state.isCorrect}
        nextQuestion={this.nextQuestion}
        chords={this.state.chords}
        keyName={this.state.key[0]}
        submitAnswer={this.submitAnswer}
        submitted={this.state.submitted}
        onDragDrop={ this.onDragDrop } 
        dragOver={this.dragOver} />
        <Choices 
        dragStart={this.dragStart} 
        chordChoices={this.state.key} />
      </div>
    );
  }
}

export default App;

