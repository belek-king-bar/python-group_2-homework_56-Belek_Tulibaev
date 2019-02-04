import React from 'react';
import { ListGroup, ListGroupItem, Button, Label, CustomInput} from 'reactstrap';

function Task(props) {
    return <ListGroup className="container">
        <ListGroupItem>
            <Label for={props.id} className="float-left mt-2" check>
                <CustomInput id={props.id} onChange={props.isTaskDone} type="checkbox"/>
            </Label>
            {props.tasks}
            <Button className="float-right" onClick={props.onDelete}>Delete</Button>
        </ListGroupItem>
    </ListGroup>
}


export default Task