import { useDispatch } from 'react-redux';
import { deleteTask } from '../features/tasks/taskSlice';
import './TaskItem.css';


function TaskItem({ task }) {
    const dispatch = useDispatch();

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className='task'>
            <div>
                <strong>Title:</strong> {task.title}
            </div>
            <div>
                <strong>Description:</strong> {task.description}
            </div>
            <div>
                <strong>Due Date:</strong> {formatDate(task.dueDate)}
            </div>
            <div>
                <button onClick={() => dispatch(deleteTask(task._id))} className='btn close'>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default TaskItem;
