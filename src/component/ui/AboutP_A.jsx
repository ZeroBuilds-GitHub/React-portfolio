import React from 'react';
import { Image } from 'semantic-ui-react';
import { Row, Col } from 'antd';

import user from '../Image/user.jpg';

const AboutP_A = (props) => (
    <Row gutter={30}>
        <Col span={6}>
            <Image className='Ims' src={user} />
        </Col>
        <Col span={18}>
            <div style={{fontSize: '20px', fontWeight: "bold", textAlign: "left"}}>
                {props.head}
            </div>
            <div className='list' style={{fontSize: '15px', fontWeight: "bold", textAlign: "left"}}>
                {props.content}
            </div>
        </Col>
    </Row>
);

export default AboutP_A;