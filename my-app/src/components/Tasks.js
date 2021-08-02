import React from  'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Task from "./Task";

const Tasks = ({tasks, onDelete, toggleReminder }) => {
    return (
        <div>
            {
                tasks.map((t) => {
                    return <Task toggleReminder = {toggleReminder} onDelete={onDelete} task = {t}> </Task>
                })
            }
        </div>
    );
};

export default Tasks;