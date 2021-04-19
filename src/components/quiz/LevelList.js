import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../../components/quiz/LevelList.css';

class LevelList extends Component {
	render() {
		return (
			<div className="LevelList">
				<h1 class="center-align">Levels List!</h1>
				<div class="container">
					<div class="row">
						{this.props.levels.map((l) => (
							<div class="Level col l4 center-align" key={l.name}>
								<img src={l.src} alt={l.name} />
								<h3>
									<Link className="underline" to={`/levels/${l.name}`}>
										{l.name}
									</Link>
								</h3>
							</div>
						))}
					</div>
				</div>
			</div>
		);
	}
}
export default LevelList;
