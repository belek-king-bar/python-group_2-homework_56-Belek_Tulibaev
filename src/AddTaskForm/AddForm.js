import React from 'react';
import { Button, Form, FormGroup, Input} from 'reactstrap';

function AddTaskForm(props) {
    return <Form className="container">
        <FormGroup>
            <Input className="mb-3 mt-3" type="text" name="text" value={props.text} onChange={props.onChangeInput}/>
            <Button disabled={props.isAddButtonDisabled} type="submit" onClick={props.onAddTask}>Добавить</Button>
        </FormGroup>
    </Form>
}



export default AddTaskForm;