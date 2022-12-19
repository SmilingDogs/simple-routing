import { useLocation } from 'react-router-dom';
import Details from '../components/Details';

export const LessonDetails = () => {
  // const lesson = useRouteLoaderData('lesson');
  // console.log(lesson); //*currently returns undefined
  const location = useLocation();
  const data = location.state;
  console.log(data);

  return <Details data={data} />
}
