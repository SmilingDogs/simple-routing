import { useLoaderData, Link } from 'react-router-dom';
import Card from '../components/Card';
import { Error } from './Error';
export const LessonCard = () => {

  const {data, error} = useLoaderData();
  
  const isDataEmpty = Array.isArray(data) && !data.length;
  const isSomethingWentWrong = error !== null;


  return (
    <div>
      {isSomethingWentWrong && <Error />}
      {isDataEmpty && <p>Nothing found ...try another keyword!</p>}
      {!isDataEmpty && data.map((dataObj, i) => (
        <Link key={i} to={`/lesson/${dataObj.name}`} className='card-link' state={dataObj}>
          <Card dataObj={dataObj} />
        </Link>
      ))}
    </div>
  )
}
