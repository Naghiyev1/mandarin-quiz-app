import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import QuizInstructions from './components/quiz/QuizInstructions';
import Play from './components/quiz/Play';
import QuizSummary from './components/quiz/QuizSummary';
import Lesson from './components/quiz/Lesson';
import PlayTwo from './components/quiz/PlayTwo';
import QuizSummaryTwo from './components/quiz/QuizSummeryTwo';
import LessonTwo from './components/quiz/LessonTwo';
import Reader from './components/Reader/Reader';
import PlayThree from './components/quiz/PlayThree';
import QuizSummeryThree from './components/quiz/QuizSummeryThree';
import LessonThree from './components/quiz/LessonThree';

function App() {
	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/play/instructions" exact component={QuizInstructions} />
			<Route path="/play/quiz" exact component={Play} />
			<Route path="/play/quizSummary" exact component={QuizSummary} />
			<Route path="/lesson" exact component={Lesson} />
			<Route path="/play/quiztwo" exact component={PlayTwo} />
			<Route path="/play/quizSummaryTwo" exact component={QuizSummaryTwo} />
			<Route path="/lessontwo" exact component={LessonTwo} />
			<Route path="/play/quizthree" exact component={PlayThree} />
			<Route path="/play/quizSummeryThree" exact component={QuizSummeryThree} />
			<Route path="/lessonthree" exact component={LessonThree} />
			<Route path="/reader" exact component={Reader} />
		</Switch>
	);
}

export default App;
