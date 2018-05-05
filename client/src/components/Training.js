import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Snackbar from 'material-ui/Snackbar';
import Chords from './Chords';
import Choices from './Choices';

class Training extends Component {
  render() {
    return (
      <div>
        <Chords
          isCorrect={this.props.isCorrect}
          nextQuestion={this.props.nextQuestion}
          chords={this.props.chords}
          keyName={this.props.keyName}
          submitAnswer={this.props.submitAnswer}
          submitted={this.props.submitted}
          onDragDrop={this.props.onDragDrop}
          dragOver={this.props.dragOver}
        />
        
        <Choices
          dragStart={this.props.dragStart}
          chordChoices={this.props.chordChoices}
        />

        <MuiThemeProvider>
          <Snackbar
              open={this.props.open}
              message={`Welcome ${this.props.username}`}
              autoHideDuration={4000}
              onRequestClose={this.props.closeSnackBar}
            />
        </MuiThemeProvider>

      </div>
    );
  }
}
export default Training;
