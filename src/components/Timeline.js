import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { AccessAlarm, ThreeDRotation, Build } from '@material-ui/icons';
import '../styles/Timeline.css';
export default class Timeline extends React.Component{
	state = { eventos:[
		{
			title: '@Home 2018',
			description: 'Desarrollo del prototipo de robot de servicio en la categoria @Home',
			image: 'https://via.placeholder.com/150x150',
			members: ['Diego Garza', 'Emilio Chavez', 'Sebastian Rivera'],
			date: '2018-present',
			color: 'rgb(33, 150, 243)'
		},
		{
			title: 'LARC 2018',
			description: 'Participacion en la Latin American Robotics Competition 2018 en Brazil',
			image: 'https://via.placeholder.com/150x150',
			members: ['Osvaldo Alvarez', 'Alexis Virgen', 'Ivan Sol', 'Antonio Rodriguez', 'Mariano Uvalle'],
			date: 'November 2018',
			color: 'rgb(34, 100, 203)'
		}
	]}

	 returnTimeLineEle = () => {
		return this.state.eventos.map( evento =>
			 <VerticalTimelineElement
				 className="vertical-timeline-element--work"
				 date={evento.date}
				 iconStyle={{ background: evento.color, color: '#fff' }}
				 icon={<Build />}
			 >
				 <h3 className="vertical-timeline-element-title">{evento.title}</h3>
				 <p>
					{evento.description}
				 </p>
			 </VerticalTimelineElement>);

		}

	render(){
		return(
			<div className={'background'}>
			<VerticalTimeline>
			{
				this.returnTimeLineEle()
			}
			</VerticalTimeline>
			</div>

		);
	}
}
