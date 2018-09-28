import React from 'react';
import placeholder from '../MembersGridCell/placeholder.png';
import './memberInformationModal.css';

import { whitStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid';

function MemberInformationModal(props) {
	const member = props.member;
	const memberAvatar = member.img;
	const memberName = member.name + member.lastname;
	const memberGithub = member.github;
	const memberId = member.id;

	return (
		<div className={'memberInformationModal'}>
			<Grid container spacing={0}>
				<Grid item xs={5} className={'memberAvatarContainer'}>
					<img src={placeholder} />
				</Grid>
				<Grid item xs={7} className={'memberInformationContainer'}>
					{memberName}
					<br />
					{memberGithub}
					<br />
					{memberId}
					<IconButton onClick={props.onClick}>
						<Close />
					</IconButton>
				</Grid>
			</Grid>
		</div>
	);
}

export default MemberInformationModal;