import React from 'react';
import AboutList from '../ui/AboutList';
import '../css/About.css';

const con = '\n안녕하세요. \n\n';
const con1 = '계속해서 새로운 기술이 나오며 발전해나가는 세상\n';
const con2 = '그러한 세상에서 새로운 기술을 배우는데 두려워하지 않고 성장해나가는 개발자가 되고 싶습니다.';
const content = con + con1 + con2;
const Uni = '서일대학교(소프트웨어공학과) \n 2018.03 - 2022.02';

const AboutPage = (props) => {
	return (
		<div>
			<h1 style={{marginTop: "15px"}}>ABOUT ME</h1>
			<hr className='line'/>
			<AboutList 
			head='앞으로 나아가는 개발자' content={content}
			title_A='이름' content_A='김동기'
			title_B='생년월일' content_B='99.08.10'
			title_C='주소' content_C='서울특별시 중랑구'
			title_D='연락처' content_D='010-7434-1359'
			title_E='이메일' content_E='hby7454@gmail.com'
			title_F='학력' content_F={Uni} />
		</div>
	);
};

export default AboutPage;