import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { AccessAlarm, Polymer, Build, Code } from '@material-ui/icons';
import 'react-vertical-timeline-component/style.min.css';
import './styles.css';

export default class Timeline extends React.Component{
	state = { eventos:[
		{
			title: '@Home 2018',
			description: 'Desarrollo del prototipo de robot de servicio en la categoria @Home.',
			image: 'https://via.placeholder.com/450x300',
			members: ['Diego Garza', 'Emilio Chavez', 'Sebastian Rivera'],
			date: '2018-present'
		},
		{
			title: 'LARC 2018',
			description: 'Participacion en la Latin American Robotics Competition 2018 en Brazil.',
			image: 'https://via.placeholder.com/450x300',
			members: ['Osvaldo Alvarez', 'Alexis Virgen', 'Ivan Sol', 'Antonio Rodriguez', 'Mariano Uvalle'],
			date: 'November 2018',
		},
		{
			title: 'RobocupJr 2018',
			description: 'Participacion en Robocup Jr en Montreal Canada con equipos de Soccer Open y Maze.',
			image: 'https://via.placeholder.com/450x300',
			members: ['Alberto Jahuey', 'Greg Espinoza', 'Yulisa Gutierrez', 'Alberto Lopez', 'Mariano Uvalle'],
			date: 'November 2018'
		},
		{
			title: 'TMR 2018',
			description: 'Participacion en el Torneo Mexicano de Robotica en Monterrey, NL con equipos de Soccer Open, Soccer Light, Maze y Drones Autonomos',
			image: 'https://via.placeholder.com/450x300',
			members: ['Alberto Jahuey', 'Greg Espinoza', 'Yulisa Gutierrez', 'Alberto Lopez', 'Mariano Uvalle'],
			date: 'November 2018'
		}
	]}
getRandomColor = () =>{
	let color;
	color = Math.random();
	console.log(color);
	console.log(color.toString(16));
	return Math.random().toString(16).slice(2, 8);
}
getRandomIcon = () =>  {
  let ico = Math.floor(Math.random() * Math.floor(3));
	console.log(ico);
	if(ico===0){
		return( <Build/>);
	}
	else if( ico===1){
		return( <Code/>);
	}
	else{
		return (<Polymer />);
	}
}
	 returnTimeLineEle = () => {
		return this.state.eventos.map( evento =>
			 <VerticalTimelineElement
				 className="vertical-timeline-element--work"
				 iconStyle={{ background: "#" + this.getRandomColor(), color: '#fff' }}
				 icon={this.getRandomIcon()}
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
