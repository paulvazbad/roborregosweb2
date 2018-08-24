import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { AccessAlarm, ThreeDRotation, Build } from '@material-ui/icons';
import '../styles/Timeline.css';
export default class Timeline extends React.Component{
	 returnTimeLineEle = (max) => {
			let timeline = []
			for(let i=0; i<max; i++){
				timeline.push(
					<VerticalTimelineElement
				    className="vertical-timeline-element--work"
				    date="2011 - present"
				    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
				    icon={<Build />}
				  >
				    <h3 className="vertical-timeline-element-title">@Home {i}</h3>
				    <h4 className="vertical-timeline-element-subtitle">blah blah</h4>
				    <p>
				     More blah blah
				    </p>

					</VerticalTimelineElement>
				)
			}
			 return timeline

		}

	render(){
		return(
			<div className={'background'}>
			<VerticalTimeline>
			{
				this.returnTimeLineEle(6)
			}
			</VerticalTimeline>
			</div>

		);
	}
}
