import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import goalReducer from '../features/tasks/taskSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        tasks: goalReducer,
    },
})