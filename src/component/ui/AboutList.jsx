import React from 'react';
import { Card } from 'antd';

import AIconList from '../ui/AIconList';
import AboutP_A from '../ui/AboutP_A';
import About_Grid from './About_Grid';

const AboutList = (props) => (
    <div className="site-card-wrapper">
        <Card columns={3} divided>
            <AboutP_A head={props.head} content={props.content}/>

            <AIconList Book='성장' child='성실함' hiking='책임감'/>

            <About_Grid 
            title_A={props.title_A} content_A={props.content_A}
            title_B={props.title_B} content_B={props.content_B}
			title_C={props.title_C} content_C={props.content_C}
			title_D={props.title_D} content_D={props.content_D}
			title_E={props.title_E} content_E={props.content_E}
			title_F={props.title_F} content_F={props.content_F} />
        </Card>
    </div>
);

export default AboutList;