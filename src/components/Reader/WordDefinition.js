import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
//import AddCircleIcon from '@material-ui/icons/AddCircle';
//import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';

const styles = (theme) => ({
	card: {
		minWidth: 275,
		margin: 'auto',
		textAlign: 'center',
		overflow: 'hidden',

		width: 500
	},
	pos: {
		marginBottom: 12,
		color: theme.palette.text.secondary
	},
	buttonContainer: {
		display: 'flex',
		contentAlign: 'center',
		alignItems: 'center'
	}
});

function WordDefinition(props) {
	const { classes, word, pronunciation, definition, isSaved = false } = props;

	return (
		<div>
			<Card className={classes.card}>
				<Grid container>
					<Grid item xs={9}>
						<CardContent>
							<Typography type="headline" component="h2">
								{word}
							</Typography>
							<Typography type="body1" className={classes.pos}>
								{pronunciation}
							</Typography>
							<Typography component="p">{definition}</Typography>
						</CardContent>
					</Grid>
					<Grid item xs={3} className={classes.buttonContainer}>
						<CardActions>
							<Button
								variant="contained"
								fab="true"
								color={isSaved ? 'inherit' : 'primary'}
								onClick={() =>
									props.onClick({
										word,
										pronunciation,
										definition,
										timeInterval: 1,
										nextTime: Date.now() + 60000
									})}
							>
								{isSaved ? <ClearIcon /> : <AddIcon />}
							</Button>
						</CardActions>
					</Grid>
				</Grid>
			</Card>
		</div>
	);
}

export default withStyles(styles)(WordDefinition);
