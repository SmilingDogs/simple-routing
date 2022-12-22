export const fetchLesson = async ({ request }) => {
  
  const url = new URL(request.url);
  const searchQuery = url.searchParams.get('q');

  if (searchQuery) {
    const response = await fetch(`https://react-course-api.azurewebsites.net/lesson/${searchQuery}`)
    return await response.json();
  }
  return null;
}

