import React from 'react';
import { Grid } from 'semantic-ui-react';
import { faBookOpen, faChildReaching, faHiking } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AIconList = (props) => (
    <Grid columns='three' divided>
        <Grid.Row>
        <hr />
        <Grid.Column >
            <FontAwesomeIcon icon={faBookOpen} size='3x'/>
            <span style={{marginLeft: "10px", marginBottom: "5px", fontSize: "20px", fontWeight: "bold"}}>
                {props.Book}
            </span>
        </Grid.Column>
        <Grid.Column >
            <FontAwesomeIcon icon={faChildReaching} size='3x'/>
            <span style={{marginLeft: "10px", marginBottom: "5px", fontSize: "20px", fontWeight: "bold"}}>
                {props.child}
            </span>
        </Grid.Column>
        <Grid.Column >
            <FontAwesomeIcon icon={faHiking} size='3x'/>
            <span style={{marginLeft: "10px", marginBottom: "5px", fontSize: "20px", fontWeight: "bold"}}>
                {props.hiking}
            </span>
        </Grid.Column>
        </Grid.Row>
    </Grid>
);

export default AIconList;