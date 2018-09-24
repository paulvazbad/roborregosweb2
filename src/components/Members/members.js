import React from 'react';
import MembersGrid from './MembersGrid/membersGrid';
import { withStyles } from '@material-ui/core/styles';

class Members extends React.Component {
	constructor(props) {
		super(props);

		this.membersData = props.membersData.members;
	}

	render() {
		return (
			<MembersGrid membersData={this.membersData} />
		);
	}
}

export default Members;