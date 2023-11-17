import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask } from '../features/tasks/taskSlice';
import './TaskForm.css';

function TaskForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');


    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()

        if (!title || !description || !dueDate) {
            // Add some error handling for empty fields
            alert("All fields are required");
            return;
        }

        const taskData = {
            title,
            description,
            dueDate,
        }

        dispatch(createTask(taskData));
    }

    return (
        <section className='form'>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='title'>Title</label>
                    <input
                        type='text'
                        name='title'
                        id='title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='description'>Description</label>
                    <textarea
                        name='description'
                        id='description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='dueDate'>Due Date</label>
                    <input
                        type='date'
                        name='dueDate'
                        id='dueDate'
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <button className='btn btn-block' type='submit'>
                        Add Task
                    </button>
                </div>
            </form>
        </section>
    );
}

export default TaskForm;
