import { createBrowserRouter } from 'react-router-dom';
import { Error } from './pages/Error';
import { LessonsLayout } from './pages/LessonsLayout';
import { Main} from './pages/Main';
import { LessonCard } from './pages/LessonCard';
import { fetchLesson } from './fetchLesson';
import { LessonDetails } from './pages/LessonDetails';



export const routerLessons = createBrowserRouter([
    {
        path: '/',
        element: < LessonsLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Main />,
            },
            {
                path: '/?topic=:searchParams',
                element: <LessonCard />,
                loader: fetchLesson,
                errorElement: <Error />
            },
            {
                path: '/lesson/:name',
                element: <LessonDetails />,
                
            }
        ]
    }
])