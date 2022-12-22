import { useLocation } from 'react-router-dom';
import Details from '../components/Details';

export const LessonDetails = () => {
 
  const location = useLocation();
  const dataObj = location.state;
  
  return <Details data={dataObj} />
}
