import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Home = () => (
	<Fragment>
		<Helmet>
			<title>Home - Mandarin Quiz App</title>
		</Helmet>
		<div id="home">
			<section>
				<div style={{ textAlign: 'center' }}>
					<span className="mdi mdi-school-outline school" />
				</div>
				<h1>Mandarin Quiz</h1>
				<div className="play-button-container">
					<ul>
						<li>
							<Link className="play-button" to="/levels">
								Learn Vocabulary
							</Link>
						</li>
					</ul>
				</div>
				<div className="auth-container">
					<Link to="/reader" className="auth-buttons" id="login-button">
						Practice reading
					</Link>
					<Link to={{ pathname:"http://naghiyev.com/"  }} target="_blank" className="auth-buttons" id="signup-button">
						About me
					</Link>
				</div>
			</section>
		</div>
	</Fragment>
);

export default Home;
/* background by SVGBackground.com */
