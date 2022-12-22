import { useLocation } from 'react-router-dom';
import Details from '../components/Details';

export const LessonDetails = () => {
  // const lesson = useRouteLoaderData('lesson');
  // console.log(lesson); //*currently returns undefined
  const location = useLocation();
  const dataObj = location.state;
  
  return <Details data={dataObj} />
}
