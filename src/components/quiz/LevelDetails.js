import React, { Component } from 'react';
import '../../components/quiz/LevelDetails.css';
import { Link } from 'react-router-dom';

class LevelDetails extends Component {
	render() {
		let { level } = this.props;
		return (
			<div class="container">
				<div class="LevelDetails row center-align">
					<div class="col s11 l5">
						<div class="LevelDetails-card card">
							<img class="card-image responsive-img" src={level.src} alt={level.name} />
							<div className="card-body">
								<h2 className="card-title">{level.name}</h2>
								<h4 class="card-content text-muted">
									{level.buttonVocab}
									{level.buttonSent}
								</h4>
							</div>
							<ul class="collection">
								{level.facts.map((fact, i) => (
									<li class="collection-item" key={i}>
										{fact}
									</li>
								))}
							</ul>
							<div class="card-content">
								<Link to="/levels" class="waves-effect waves-light btn">
									Go Back
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default LevelDetails;
