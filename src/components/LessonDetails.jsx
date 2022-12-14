import {useLoaderData, useParams } from 'react-router-dom';

export const LessonDetails = () => {
  const { lessonName } = useParams();
  const loaderData = useLoaderData();
  
  return (
    <>
    <h1>React Lesson Page</h1>
    <p>Lesson about: {lessonName}</p>
    <p>{loaderData.title}</p>
    </>
  )
}
