import React, { Component } from 'react';

import { CircularProgress } from 'material-ui/Progress';
import { Route } from 'react-router-dom';
import Question from './Question';

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
				questions: questions.results,
			})
			));
	};

	render() {
		// console.log(this.state.questions);
		// this.state.questions = [{"text": "dog"}, {"text": "marco"}]
		// let questions = this.state.questions.map((q, index) => //q.text
			
		// 		<h3 key={index}>
		// 			{q.text}
		// 		</h3>
			
		// )
		// console.log("QUESTIONS:")
		// console.log(questions)

		const questions = [{"text": "hello questions"}, {"text":"hello q2"}];
		const qlist = this.state.questions.map((q, index) => (
			<Question
					question={q}
			/>

		));
		console.log(questions);

		// const element = <h1>{questions}</h1>;
		if (!this.state.fetched) {
			return (
				<CircularProgress />
			);
		} else {
			const matchPath = "/question"
			console.log(matchPath)
			console.log("ABOUT TO RETURN")
			return (
				<Route
					path={`${matchPath}/:questionId`}
					render={({ match }) => {
						console.log("PATH IS")
						console.log(match)
						console.log(this.state.questions)
						console.log(match.params.questionId)
		                const question = this.state.questions.find(
		                  (a) => a.id == match.params.questionId
		                 );
		            console.log("QUESTION MATCHED IS")
		            console.log(question);
		            return (
		            	<Question
		            		question={question}
		            	/>
		            );
		        	}}
				/>
			);
		}
	}
}

export default QuestionContainer;