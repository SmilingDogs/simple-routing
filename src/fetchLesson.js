export const fetchLesson = ({ request }) => {
    console.log(request);
    const url = new URL(request.url);
    const searchQuery = url.searchParams.get('q');

    if (searchQuery) {
      return fetch(`https://react-course-api.azurewebsites.net/lesson/${searchQuery}`);
    }
    return null;
  }

