export const fetchLesson = ({ params }) => {
    console.log(params);
    fetch(`https://react-course-api.azurewebsites.net/lesson/${params.searchParams}`)
} 