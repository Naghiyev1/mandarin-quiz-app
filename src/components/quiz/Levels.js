import React, { Component, Fragment } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import LevelList from '../../components/quiz/LevelList';
import LevelDetails from '../../components/quiz/LevelDetails';

import hsk1 from '../../assets/img/HSK1.png';
import hsk2 from '../../assets/img/HSK2.png';
import hsk3 from '../../assets/img/HSK3.png';
import hsk4 from '../../assets/img/HSK4.png';
import hsk5 from '../../assets/img/HSK5.png';
import hsk6 from '../../assets/img/HSK6.png';

class Levels extends Component {
	static defaultProps = {
		levels: [
			{
				name: 'HSK1',
				buttonVocab: (
					<Link to="/play/quiz" class="waves-effect waves-light btn">
						Learn Vocabulary
					</Link>
				),
				buttonSent: (
					<Link to="/lesson" class="waves-effect waves-light btn">
						Practice Sentences
					</Link>
				),
				src: hsk1,
				facts: [
					"The HSK (Level I) assesses test takers' abilities in the application of everyday Chinese (Mandarin). It is the counterpart of the Level I of the Chinese Language Proficiency Scales for Speakers of Other Languages and the A1 Level of the Common European Framework of Reference (CEF). ",
					'Test takers who are able to pass the HSK (Level I) can understand and use very simple Chinese phrases, meet basic needs for communication and possess the ability to further their Chinese language studies.',
					'Master 150 commonly used words and basic grammar patterns'
				]
			},
			{
				name: 'HSK2',
				buttonVocab: (
					<Link to="/play/quiztwo" class="waves-effect waves-light btn">
						Learn Vocabulary
					</Link>
				),
				buttonSent: (
					<Link to="/lessontwo" class="waves-effect waves-light btn">
						Practice Sentences
					</Link>
				),
				src: hsk2,
				facts: [
					"The HSK (Level II) assesses test takers' abilities in the application of everyday Chinese (Mandarin). It is the counterpart of the Level II of the Chinese Language Proficiency Scales for Speakers of Other Languages and the A2 Level of the Common European Framework of Reference (CEF). ",
					'Test takers who are able to pass the HSK (Level II) have an excellent grasp of basic Chinese and can communicate in simple and routine tasks requiring a simple and direct exchange of information on familiar and routine matters.',
					'Master 300 commonly used words and related grammar patterns.'
				]
			},
			{
				name: 'HSK3',
				buttonVocab: (
					<Link to="/play/quizthree" class="waves-effect waves-light btn">
						Learn Vocabulary
					</Link>
				),
				buttonSent: (
					<Link to="/lessonthree" class="waves-effect waves-light btn">
						Practice Sentences
					</Link>
				),
				src: hsk3,
				facts: [
					"The HSK (Level III) assesses test takers' abilities in the application of everyday Chinese (Mandarin). It is the counterpart of the Level III of the Chinese Language Proficiency Scales for Speakers of Other Languages and the B1 Level of the Common European Framework of Reference (CEF). ",
					'Test takers who are able to pass the HSK (Level III) can communicate in Chinese at a basic level in their daily, academic and professional lives. They can manage most communication in Chinese when travelling in China.',
					'Master 728 commonly used words and related grammar patterns.'
				]
			},
			{
				name: 'HSK4',
				buttonVocab: (
					<Link to="/play/quizthree" class="waves-effect waves-light btn">
						Learn Vocabulary
					</Link>
				),
				buttonSent: (
					<Link to="/lessonthree" class="waves-effect waves-light btn">
						Practice Sentences
					</Link>
				),
				shuiping: 4,
				src: hsk4,
				facts: [
					"The HSK (Level IV) assesses test takers' abilities in the application of everyday Chinese (Mandarin). It is the counterpart of the Level IV of the Chinese Language Proficiency Scales for Speakers of Other Languages and the B2 Level of the Common European Framework of Reference (CEF). ",
					'Test takers who are able to pass the HSK (Level IV) can converse in Chinese on a wide range of topics and are able to communicate fluently with native Chinese speakers.',
					'Master 1,200 commonly used words and related grammar patterns.'
				]
			},
			{
				name: 'HSK5',
				buttonVocab: (
					<Link to="/play/quizthree" class="waves-effect waves-light btn">
						Learn Vocabulary
					</Link>
				),
				buttonSent: (
					<Link to="/lessonthree" class="waves-effect waves-light btn">
						Practice Sentences
					</Link>
				),
				shuiping: 5,
				src: hsk5,
				facts: [
					"The HSK (Level V) assesses test takers' abilities in the application of everyday Chinese (Mandarin). It is the counterpart of the Level V of the Chinese Language Proficiency Scales for Speakers of Other Languages and the C1 Level of the Common European Framework of Reference (CEF). ",
					'Test takers who are able to pass the HSK (Level V) can read Chinese newspapers and magazines, enjoy Chinese films and plays and give a full-length speech in Chinese.',
					'Master 2,500 commonly used words and related grammar patterns.'
				]
			},
			{
				name: 'HSK6',
				buttonVocab: (
					<Link to="/play/quizthree" class="waves-effect waves-light btn">
						Learn Vocabulary
					</Link>
				),
				buttonSent: (
					<Link to="/lessonthree" class="waves-effect waves-light btn">
						Practice Sentences
					</Link>
				),
				shuiping: 6,
				src: hsk6,
				facts: [
					"The HSK (Level VI) assesses test takers' abilities in the application of everyday Chinese (Mandarin). It is the counterpart of the Level V of the Chinese Language Proficiency Scales for Speakers of Other Languages and the C2 Level of the Common European Framework of Reference (CEF). ",
					'Test takers who are able to pass the HSK (Level VI) can easily comprehend written and spoken information in Chinese and can effectively express themselves in Chinese, both orally and on paper.',
					'Master 5,000 or more commonly used words.'
				]
			}
		]
	};
	render() {
		const getLevel = (props) => {
			let name = props.match.params.name;
			let currentLevel = this.props.levels.find((level) => level.name.toLowerCase() === name.toLowerCase());
			return <LevelDetails {...props} level={currentLevel} />;
		};
		return (
			<Switch>
				<Route exact path="/levels" render={() => <LevelList levels={this.props.levels} />} />;
				<Route exact path="/levels/:name" render={getLevel} />;
			</Switch>
		);
	}
}

export default Levels;
