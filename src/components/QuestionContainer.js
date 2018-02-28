import React, { Component } from 'react';

import { CircularProgress } from 'material-ui/Progress';
import { Route } from 'react-router-dom';

import { client } from '../Client';


const QUESTION_IDS = [];

class QuestionContainer extends Component {
	state = {
		fetched: false,
		questions: [],
	};

	componentDidMount() {
		console.log("mounting...");
		this.getQuestions();
	};

	getQuestions = () => {
		console.log("Getting questions...")
		client.getQuestions(QUESTION_IDS)
		.then((questions) => (
			this.setState({
				fetched: true,
				questions: questions,
			})
			));
	};

	render() {
		if (!this.state.fetched) {
			return (
				<CircularProgress />
			);
		} else {
			return (
				<h1>Question Loaded</h1>
			);
		}
	}
}

export default QuestionContainer;