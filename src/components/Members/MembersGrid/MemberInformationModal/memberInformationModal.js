import React from 'react';
import placeholder from '../MembersGridCell/placeholder.png';
import './memberInformationModal.css';

function MemberInformationModal(props) {
	const member = props.member;
	const memberAvatar = member.img;
	const memberName = member.name + member.lastname;
	const memberGithub = member.github;
	const memberId = member.id;

	return (
		<div className={'memberInformationModal'}>
			<div className={'memberAvatarContainer'}>
				<img src={placeholder} />
			</div>
			<div className={'memberInformationContainer'}>
				<p>
					{memberName}
					<br />
					{memberGithub}
					<br />
					{memberId}
				</p>
			</div>
		</div>
	);
}

export default MemberInformationModal;