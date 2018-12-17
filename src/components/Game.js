import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {
    super(props);

    this.state = {
      player: 1,
      submissions: [],
      isSubmitted: false
    }
  }


  onLineSubmit = (line) => {

    const { submissions } = this.state;
    let { player } = this.state;
    submissions.push(line);
    player += 1

    this.setState({
      submissions: submissions,
      player: player,
    })
    console.log(this.state.submissions)
  }

  onShowFinalPoem = () => {
    console.log('I want to a show poem - Game')
    // return this.state.submissions

    this.setState({isSubmitted: !this.state.isSubmitted})
    console.log(this.state.isSubmitted)
  }



  render() {

    const exampleFormat = FIELDS.map((field) => {
      if (field.key) {
        return field.placeholder;
      } else {
        return field;
      }
    }).join(" ");

    return (
      <div className="Game">
        <h2>Game</h2>

        <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

        <p>Please follow the following format for your poetry submission:</p>

        <p className="Game__format-example">
          { exampleFormat }
        </p>

        <RecentSubmission submissions={this.state.submissions}/>


        <PlayerSubmissionForm onLineSubmitCallback={this.onLineSubmit}/>

        <FinalPoem
        submissions={this.state.submissions}
        onShowFinalPoemCallback={this.onShowFinalPoem}
        isSubmitted={this.state.isSubmitted}
        />

      </div>
    );
  }
}

const FIELDS = [
  "The",
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  "the",
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  ".",
];

export default Game;
