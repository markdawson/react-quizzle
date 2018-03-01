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
		<div style={{ margin: 20 }}>
		<Paper style={style} zDepth={3} onClick={() => isCorrect(choice.is_correct)}>
			<div>{choice.choice_text}</div>
		</Paper>
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