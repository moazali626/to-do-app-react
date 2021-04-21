import React from 'react'
import styled from 'styled-components'
import AddIcon from '@material-ui/icons/Add';

const Input = styled.input`
    padding: 5px 10px;
    font-size: 20px;
    margin-bottom: 35px;
`;

const Button = styled.button`
    padding: 5px 9px;
    margin-left: 10px;
    position: relative;
    top:3px;
    background: none;
    background-color: #8E49E9;
    border: none;
    border-radius: 4px;
`;

const NewTask = (props) => {
    return (
        <div className="form">
            <h2>To Do App</h2>
            <form>

            <Input autoFocus placeholder="Add your new task" onChange={props.newTask} value={props.currentTask}>
            </Input>

            <Button type="submit" onClick={props.submitTasks} req>
                <AddIcon className="AddIcon"/>
            </Button >

            </form>
        </div>
    )
}

export default NewTask;