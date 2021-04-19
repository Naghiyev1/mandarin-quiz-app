import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
	card: {
		minWidth: 275,
		margin: 'auto',
		textAlign: 'center',
		paddingTop: 50,
		width: 500
	},
	title: {
		marginBottom: 16,
		fontSize: 40,
		color: theme.palette.text.secondary
	},
	pos: {
		marginBottom: 12,

		color: theme.palette.text.secondary
	}
});

const ReviewCard = ({ classes, word, pronunciation, definition, backShown, pass, fail, showBack }) => (
	<div>
		<Card className={classes.card}>
			<CardContent>
				<Typography type="body1" className={classes.title}>
					{word}
				</Typography>
				{backShown ? (
					<div>
						<Typography type="headline" component="h2">
							{pronunciation}
						</Typography>
						<Typography component="p">{definition}</Typography>
					</div>
				) : null}
			</CardContent>
			<CardActions style={{ justifyContent: 'center' }}>
				{backShown ? (
					<div>
						<Button size="medium" dense="true" onClick={fail}>
							Fail
						</Button>
						<Button size="medium" dense="true" onClick={pass}>
							Pass
						</Button>
					</div>
				) : (
					<div>
						<Button size="medium" dense="true" onClick={showBack}>
							Show
						</Button>
					</div>
				)}
			</CardActions>
		</Card>
	</div>
);

export default withStyles(styles)(ReviewCard);
