import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { AccessAlarm, Polymer, Build, Code } from '@material-ui/icons';
import { home, larc,canada, tmr2018, larc17,japon } from './images/'
import 'react-vertical-timeline-component/style.min.css';
import './styles.css';
//import firebase from '../../firebase.js'

export default class Timeline extends React.Component{
	state = { eventos:[
		{
			title: '@Home 2018',
			description: 'Prototype of the @Home robot launched at Conecta TEC.',
			image: home,
			members: ['Diego Garza', 'Emilio Chavez', 'Sebastian Rivera'],
			date: 'November 2018',
			id:0
		},
		{
			title: 'LARC 2018',
			description: 'First place in the Latin American Robotics Competition 2018 in Joao Pessoa, Brazil.',
			image: larc,
			members: ['Osvaldo Alvarez', 'Alexis Virgen', 'Ivan Sol', 'Antonio Rodriguez', 'Mariano Uvalle'],
			date: 'November 2018',
			id:1
		},
		{
			title: 'RobocupJr 2018',
			description: 'Participation in Robocup Jr in Montreal, Canada in the categories of Soccer Open and Maze.',
			image: canada,
			members: ['Alberto Jahuey', 'Greg Espinoza', 'Yulisa Gutierrez', 'Alberto Lopez', 'Ricardo Osorio', 'Jesus Anaya', 'Iqui Balam'],
			date: 'Junio 2018',
			id:2
		},
		{
			title: 'TMR 2018',
			description: 'Fist place obtained at Maze Jr, Second place at Soccer Open and Third place at Autonomous Drones and Soccer Light ',
			image: tmr2018,
			members: ['Alberto Jahuey', 'Greg Espinoza', 'Yulisa Gutierrez', 'Alberto Lopez', 'Ricardo Osorio', 'Jesus Anaya', 'Iqui Balam', 'Paul Vazquez','Alex Garza', 'Christian Bentin','Aurora Tijerina'],
			date: 'March 2018',
			id:3
		},
		{
			title: 'LARC 2017',
			description: 'Third place in the Latin American Robotics Competition 2017 in Brazil.',
			image: larc17,
			members: ['Alejandro Garza', 'Clara Gutierrez', 'Nestor Maldonado', 'Javier Escamilla', 'Diego Cardozo'],
			date: 'November 2017',
			id:4
		},
		{
			title: 'RobocupJr 2017',
			description: 'Third place with the robot Mariachi from the category Maze Jr in the RobocupJr International Tournament in Nagoya, Japan.',
			image: japon,
			members: ['Sebastian Esquer', 'Alexis Virgen', 'Ernesto Cervantes', 'Tomas Lugo',],
			date: 'November 2017',
			id:5
		}
	],
	}
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
					<img src={evento.image} height={600} resizemode="stretch" />
					<p>
						{evento.description}
					</p>
				</VerticalTimelineElement>
			 );

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
