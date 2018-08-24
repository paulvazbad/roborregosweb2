import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { AccessAlarm, ThreeDRotation, Build } from '@material-ui/icons';
import '../styles/Timeline.css';
export default class Timeline extends React.Component{

	render(){
		return(
			<div className={'background'}>
			<VerticalTimeline>
			  <VerticalTimelineElement
			    className="vertical-timeline-element--work"
			    date="2011 - present"
			    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
			    icon={<Build />}
			  >
			    <h3 className="vertical-timeline-element-title">@Home</h3>
			    <h4 className="vertical-timeline-element-subtitle">blah blah</h4>
			    <p>
			     More blah blah
			    </p>
				
				</VerticalTimelineElement>
			</VerticalTimeline>
			</div>

		);
	}
}
