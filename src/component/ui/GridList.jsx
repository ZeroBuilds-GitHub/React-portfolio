import React from 'react'
import { Icon } from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'
import { Row, Card, Col } from 'antd';
import '../css/About.css';

const GridExampleCelled = (props) => (
    <div className="site-card-wrapper">
        <Card title={props.title} bordered={false} >
            <Row gutter={30}>
                <Col span={10}>
                    <Image className='Ims' src={props.Img} />
                </Col>
                <Col span={14}>
                    <Card bordered={false}>
                        <div style={{fontSize: '15px', fontWeight: "bold"}}>
                            {props.content_T}
                        </div>
                        <hr style={{marginTop: -5}}/>
                        <div style={{textAlign: "left"}}>
                            <Icon name='angle right' />
                            <span style={{fontSize: '15px', fontWeight: "bold"}}>
                                {props.c_title}
                            </span>
                            <span style={{float: "right"}}>
                                {props.content}
                            </span>
                            <br />
                            <Icon name='angle right' />
                            <span style={{fontSize: '15px', fontWeight: "bold"}}>
                                {props.c_title2}
                            </span>
                            <span style={{float: "right"}}>
                                {props.content2}
                            </span>
                            <br />
                            <Icon name='angle right' />
                            <span style={{fontSize: '15px', fontWeight: "bold"}}>
                                {props.c_title3}
                            </span>
                            <span style={{float: "right"}}>
                                {props.content3}
                            </span>
                            <br />
                            <Icon name='angle right' />
                            <span style={{fontSize: '15px', fontWeight: "bold"}}>
                                {props.c_title4}
                            </span>
                            <span style={{float: "right"}}>
                                {props.content4}
                            </span>
                            <br />
                            <Icon name='angle right' />
                            <span style={{fontSize: '15px', fontWeight: "bold"}}>
                                {props.c_title5}
                            </span>
                            <span style={{float: "right"}}>
                                {props.content5}
                            </span>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Card>
    </div>
)

export default GridExampleCelled