import React from  'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Task from "./Task";

const Tasks = ({tasks, onDelete }) => {
    return (
        <div>
            {
                tasks.map((t) => {
                    return <Task onDelete={onDelete} task = {t}> </Task>
                })
            }
        </div>
    );
};

export default Tasks;