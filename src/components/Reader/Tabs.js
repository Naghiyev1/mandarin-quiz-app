import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TranslateIcon from '@material-ui/icons/Translate';
import ListIcon from '@material-ui/icons/List';
import RestoreIcon from '@material-ui/icons/Restore';

export default function TabRoutes(props) {
	return (
		<Paper>
			<Tabs
				value={props.value}
				onChange={(e, value) => props.onChange(value)}
				fullwidth="true"
				indicatorColor="primary"
				textColor="primary"
				centered
			>
				<Tab icon={<TranslateIcon />} label="READ" />
				<Tab icon={<ListIcon />} label="ANALYSE" />
				<Tab icon={<RestoreIcon />} label="REVIEW" />
			</Tabs>
		</Paper>
	);
}
