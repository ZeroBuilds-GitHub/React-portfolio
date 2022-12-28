import React from 'react';
import CardList from '../ui/CardList';
import '../css/About.css';

const lang = 'JAVA\n JavaScript\n  Python\n  C#';
const front = 'HTML5\n CSS\n React\n BootStrap';
const back = '\n JSP\n Spring\n \n';
const db = 'MariaDB\n Oracle\n MsSql\n';
const tool = 'Eclipse\n Visual Studio\n Visual Studio Code';
const cloud = '\n Ubuntu\n \n';

const SkillPage = (props) => {
	return (
		<div>
			<h1 style={{marginTop: "15px"}}>SKILL</h1>
			<hr className='line'/>
			<div className='list'>
				<CardList title_A='Language' content_A={lang}
				title_B='FrontEnd' content_B={front}
				title_C='BackEnd' content_C={back} />
			</div>
			<div className='list'>
				<CardList title_A='DataBase(DB)' content_A={db}
				title_B='Tool' content_B={tool}
				title_C='Cloud' content_C={cloud} />
			</div>
		</div>
	);
};

export default SkillPage;