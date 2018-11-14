import React from 'react';
import './styles.css';

class MembersHeader extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="members-header">
				<div id="header-legend">
					<h2>
						Frase chida e inspiracional
					</h2>
				</div>
			</div>
		);
	}
}

export default MembersHeader;