import React from 'react';
import MembersGrid from './MembersGrid/index';
import MembersHeader from './MembersHeader/index';
import MembersJoinUs from './MembersJoinUs/index';
import './styles.css';

class Members extends React.Component {
	constructor(props) {
		super(props);

		this.membersData = props.membersData.members;
	}

	render() {
		return (
			<div id="members-section">
				<MembersHeader />

				<MembersGrid membersData={this.membersData} className={'members-grid-section'} />

				<MembersJoinUs />
			</div>
		);
	}
}

export default Members;