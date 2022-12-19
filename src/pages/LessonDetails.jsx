import { useRouteLoaderData } from 'react-router-dom';


export const LessonDetails = () => {
  const lesson = useRouteLoaderData('lesson');
  console.log(lesson); //*currently returns undefined
  
  return (
    <p>This is specific lesson details</p>
  )
}
