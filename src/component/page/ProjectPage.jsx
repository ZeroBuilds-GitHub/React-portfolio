import React from 'react';
import GridList from '../ui/GridList';
import '../css/About.css';
import img from '../Image/project.png';

const p1 = '자기소개, 인적 사항, 기술 스택, 프로젝트 경험\n';
const p2 = 'React, JS, CSS, Bootstrap\n';
const p3 = 'Visual Studio Code\n';
const p4 = 'Netlify';
const p5 = 'https://github.com/ZeroBuilds-GitHub/React-portfolio';

const c_title = '주요 기능';
const c_title2 = 'Front';
const c_title3 = 'Tool';
const c_title4 = 'Deployment ';
const c_title5 = 'GitHub ';

const title_A = '포트폴리오 사이트\n(1인 프로젝트)';
const content_A = '포트폴리오 용도로 제작한 웹사이트입니다.\n\n';
const content_B = 'REACT 프로젝트의 경험을 쌓는 것은 물론이고\n Netlify을 이용하여 배포를 경험해볼 수 있었습니다.\n\n';

const title_content = content_A + content_B;

const ProjectPage = (props) => {
	return (
		<div className='p_page'>
			<h1 style={{marginTop: "15px"}}>PROJECT</h1>
			<hr className='line'/>
			<div className='list'>
				<GridList Img={img} title={title_A} content_T={title_content}
				 c_title={c_title} content={p1}
				 c_title2={c_title2} content2={p2}
				 c_title3={c_title3} content3={p3}
				 c_title4={c_title4} content4={p4}
				 c_title5={c_title5} content5={p5}/>
			</div>
		</div>
	);
};

export default ProjectPage;