import React from 'react';
import placeholder from './MembersGridCell/placeholder.png';
import MembersGridCell from './MembersGridCell/membersGridCell';
import MemberInformationModal from './MemberInformationModal/memberInformationModal';
import './membersGrid.css';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import GridListTile from '@material-ui/core/GridListTile';
import GridList from '@material-ui/core/GridList';

import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';


const styles = theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden'
	},
	gridList: {
		width: '100%',
		height: '100%'
	},
	paper: {
		padding: 0,
		margin: 0,
		height: '100%',
		width: '100%'
	}
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}


class MembersGrid extends React.Component {
	constructor(props) {
		super(props);

		this.handleOpenMember = this.handleOpenMember.bind(this);
		this.handleCloseMember = this.handleCloseMember.bind(this);

		this.membersData = props.membersData;

		this.state = {
			openMember: false,
			memberData: this.membersData[0]
		}
	}

	handleOpenMember(member, event) {
		this.setState({
			openMember: true,
			memberData: member
		});
	}

	handleCloseMember() {
		this.setState({
			openMember: false
		});
	}

	render() {
		const classes = this.props;

		return (
			<div className={classes.root}>
				<GridList
					cellHeight={'auto'}
					className={classes.gridList, 'members-grid'}
					cols={5}
					spacing={0}
				>
					{this.membersData.map(member =>(

						<GridListTile
							key={member.id}
							cols={1}
							className='member-cell'
							onClick={this.handleOpenMember.bind(this, member)}
						>
							<img src={placeholder} alt={member.name} />
						</GridListTile>

					))}
				</GridList>

				{this.state.openMember &&
					<MemberInformationModal
						member={this.state.memberData}
						onClick={() => this.handleCloseMember()}
					/>
				}

			</div>
		);
	}
}

MembersGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MembersGrid);