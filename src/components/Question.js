import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 200,
  width: 500,
  margin: 20,
  textAlign: 'center',
  /* display: 'inline-block', */
};

const isCorrect = (isCorrect) => (
	alert(isCorrect)
  );

const ChoiceSet = ((choices) => 
	choices.map((
		choice => 
		
		<div>
		<br/><br/>
			<div onClick={() => isCorrect(choice.is_correct)}>
				<p>{choice.choice_text}</p>
			</div>
		</div>
	))
);

const Question = ({question}) => (
	<div className="question">
		<h2>{question.text}</h2>
		<div>{ChoiceSet(question.choices)}</div>
	</div>
);

export default Question