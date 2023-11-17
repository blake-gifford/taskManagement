import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import TaskForm from '../components/TaskForm'
import TaskItem from '../components/TaskItem'
import Loader from '../components/Loader'
import { getTasks, reset } from '../features/tasks/taskSlice'

function Dashboard() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)
    const { tasks = [], isLoading, isError, message } = useSelector(
        (state) => state.tasks
    )

    useEffect(() => {
        if (isError) {
            console.log(message)
        }

        if (!user) {
            navigate('/login')
        }

        dispatch(getTasks())

        return () => {
            dispatch(reset())
        }
    }, [user, navigate, isError, message, dispatch])

    if (isLoading) {
        return <Loader />
    }

    return (
        <>
            <TaskForm />

            <section className='content'>
                {tasks.length > 0 ? (
                    <div className='tasks'>
                        {tasks.map((task) => (
                            <TaskItem key={task?._id} task={task} />
                        ))}
                    </div>
                ) : (
                    <h3>You have not set any tasks</h3>
                )}
            </section>
        </>
    )
}

export default Dashboard