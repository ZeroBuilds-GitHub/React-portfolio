import React from 'react';
import { Card, Col, Row } from 'antd';

const CardList = (props) => (
    <div className="site-card-wrapper">
        <Row gutter={16}>
            <Col span={8}>
            <Card title={props.title_A} bordered={false}>
                {props.content_A}
            </Card>
            </Col>
            <Col span={8}>
                <Card title={props.title_B} bordered={false}>
                    {props.content_B}
                </Card>
            </Col>
            <Col span={8}>
                <Card title={props.title_C} bordered={false}>
                    {props.content_C}
                </Card>
            </Col>
        </Row>
    </div>
);

export default CardList;