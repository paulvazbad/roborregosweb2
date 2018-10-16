import React from 'react';
import placeholder from 'images/placeholder.png'

import { withStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';

function MembersGridCell(props) {
	const member = props.member

	return (
		<GridListTile key={member.id}  cols={1}>
			<img src={placeholder} alt={member.name} />
		</GridListTile>
	);
}

export default MembersGridCell;