import { createBrowserRouter } from 'react-router-dom';
import { Error } from './pages/Error';
import { LessonsLayout } from './pages/LessonsLayout';
import { Lesson } from './pages/Lesson';
import { LessonDetails } from './components/LessonDetails';
import { fetchLesson } from './fetchLesson';



export const routerLessons = createBrowserRouter([
    {
        path: '/',
        element: < LessonsLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Lesson />,
            },
            {
                path: '/lesson/:lessonName',
                element: <LessonDetails />,
                loader: fetchLesson
            }
        ]
    }
])