import React from 'react';
import MembersGrid from './MembersGrid/index';
import './styles.css';

class Members extends React.Component {
	constructor(props) {
		super(props);

		this.membersData = props.membersData.members;
	}

	render() {
		return (
			<div>
				<MembersGrid membersData={this.membersData} className={'members-grid-section'} />
			</div>
		);
	}
}

export default Members;