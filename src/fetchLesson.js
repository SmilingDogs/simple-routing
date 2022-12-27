export const fetchLesson = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const searchQuery = url.searchParams.get('q');

    if (searchQuery) {
      const response = await fetch(`https://react-course-api.azurewebsites.net/lesson/${searchQuery}`)
      const data = await response.json();

      return { data, error: null };
    }
  } catch (error) {
    return { data: null, error };
  }
}
