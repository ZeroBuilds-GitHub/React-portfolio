import React from 'react';
import { Grid } from 'semantic-ui-react';

const About_Grid = (props) => (
    <Grid columns='three' divided>
        <Grid.Row>
        <hr />
            <Grid.Column >
                <div style={{fontSize: '15px', fontWeight: "bold"}}>
                    {props.title_A}
                </div>
                <div>
                    {props.content_A}
                </div>
            </Grid.Column>
            <Grid.Column>
                <div style={{fontSize: '15px', fontWeight: "bold"}}>
                    {props.title_B}
                </div>
                <div>{props.content_B}</div>
            </Grid.Column>
            <Grid.Column>
                <div style={{fontSize: '15px', fontWeight: "bold"}}>
                    {props.title_C}
                </div>
                <div>{props.content_C}</div>
            </Grid.Column>
        </Grid.Row>

        <Grid.Row>
            <Grid.Column >
                <div style={{fontSize: '15px', fontWeight: "bold"}}>
                    {props.title_D}
                </div>
                <div>{props.content_D}</div>
            </Grid.Column>
            <Grid.Column>
                <div style={{fontSize: '15px', fontWeight: "bold"}}>
                    {props.title_E}
                </div>
                <div>{props.content_E}</div>
            </Grid.Column>
            <Grid.Column>
                <div style={{fontSize: '15px', fontWeight: "bold"}}>
                    {props.title_F}
                </div>
                <div>{props.content_F}</div>
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

export default About_Grid;