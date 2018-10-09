import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { AccessAlarm, ThreeDRotation, Build } from '@material-ui/icons';
import 'react-vertical-timeline-component/style.min.css';
import './styles.css';

export default class Timeline extends React.Component{
	state = { eventos:[
		{
			title: '@Home 2018',
			description: 'Desarrollo del prototipo de robot de servicio en la categoria @Home.',
			image: 'https://via.placeholder.com/450x300',
			members: ['Diego Garza', 'Emilio Chavez', 'Sebastian Rivera'],
			date: '2018-present',
			color: 'rgb(33, 150, 243)'
		},
		{
			title: 'LARC 2018',
			description: 'Participacion en la Latin American Robotics Competition 2018 en Brazil.',
			image: 'https://via.placeholder.com/450x300',
			members: ['Osvaldo Alvarez', 'Alexis Virgen', 'Ivan Sol', 'Antonio Rodriguez', 'Mariano Uvalle'],
			date: 'November 2018',
			color: 'rgb(34, 100, 203)'
		},
		{
			title: 'RobocupJr 2018',
			description: 'Participacion en Robocup Jr en Montreal Canada con equipos de Soccer Open y Maze.',
			image: 'https://via.placeholder.com/450x300',
			members: ['Alberto Jahuey', 'Greg Espinoza', 'Yulisa Gutierrez', 'Alberto Lopez', 'Mariano Uvalle'],
			date: 'November 2018',
			color: 'rgb(34, 100, 203)'
		}
	]}

	 returnTimeLineEle = () => {
		return this.state.eventos.map( evento =>
			 <VerticalTimelineElement
				 className="vertical-timeline-element--work"
				 iconStyle={{ background: evento.color, color: '#fff' }}
				 icon={<Build />}
			 >
				 <h3 className="vertical-timeline-element-title"><b>{evento.title}</b></h3>
				 <h4 className="vertical-timeline-element-subtitle">{evento.date}</h4>
				 <img src={evento.image} height={600} resizemode="stretch"/>
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
