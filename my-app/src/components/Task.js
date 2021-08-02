import React from  'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const Task = ({task, onDelete, toggleReminder }) => {
    let classNames = 'task ';
    classNames += task.reminder ? 'reminder' : '';
    return (
        <div onDoubleClick={ () => toggleReminder(task.id) } className={classNames}>
            <h3 key={task.key}>
                {task.name}
                <FaTimes onClick = {() => onDelete(task.id)} style={{ color : 'red', cursor : 'pointer' }} />
            </h3>
        </div>
    );
};

export default Task;