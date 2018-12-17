import React, { Component } from 'react';
import './PlayerSubmissionForm.css';
import PropTypes from 'prop-types';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      adj1: "",
      adj2: "",
      adv: "",
      noun1: "",
      noun2: "",
      verb: ""
    }
  }

  onLineSubmit = (event) => {
    event.preventDefault();

    const {adj1, adj2, adv, noun1, noun2, verb} = this.state;
    let newLine = `The ${adj1} ${noun1} ${adv} ${verb} the ${adj2} ${noun2}`

    this.props.onLineSubmitCallback(newLine);

    this.setState({
      adj1: "",
      adj2: "",
      adv: "",
      noun1: "",
      noun2: "",
      verb: ""

    })
  }

  onFieldChangeHandler = (event, fieldToGetValueFrom = 'value') => {
    const updateState = {}
    const fieldName = event.target.name;
    const value = event.target[fieldToGetValueFrom];

    updateState[fieldName] = value;
    this.setState(updateState)
  }

  render() {

    return(
      <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player{this.props.player}</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={this.onLineSubmit}>

      <div className="PlayerSubmissionForm__poem-inputs">
      <p>The</p>
      <input
      className="PlayerSubmissionForm__poem-inputs"
      placeholder="adjective"
      type="text"
      name="adj1"
      value= {this.state.adj1}
      onChange={this.onFieldChangeHandler} />

      <input
      className="PlayerSubmissionForm__poem-inputs"
      placeholder="noun"
      type="text"
      name="noun1"
      value={this.state.noun1}
      onChange={this.onFieldChangeHandler} />

      <input
      className="PlayerSubmissionForm__poem-inputs"
      placeholder="adverb"
      type="text"
      name="adv"
      value={this.state.adv}
      onChange={this.onFieldChangeHandler} />

      <input
      className="PlayerSubmissionForm__poem-inputs"
      placeholder="verb"
      type="text"
      name="verb"
      value={this.state.verb}
      onChange={this.onFieldChangeHandler} />

      <input
      className="PlayerSubmissionForm__poem-inputs"
      placeholder="adjective"
      type="text"
      name="adj2"
      value={this.state.adj2}
      onChange={this.onFieldChangeHandler} />

      <input
      className="PlayerSubmissionForm__poem-inputs"
      placeholder="noun"
      type="text"
      name="noun2"
      value={this.state.noun2}
      onChange={this.onFieldChangeHandler} />


      <div className="PlayerSubmissionForm__submit">
      <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
      </div>
      </div>

      </form>
      </div>
    )
  }
}


PlayerSubmissionForm.propTypes = {
  fields: PropTypes.array,
  isSubmitted: PropTypes.bool,
  onLineSubmitCallback: PropTypes.func,
};


export default PlayerSubmissionForm;
