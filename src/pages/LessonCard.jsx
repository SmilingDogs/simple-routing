import { useLoaderData, Link } from 'react-router-dom';
import Card from '../components/Card';
import { Error } from './Error';
export const LessonCard = () => {

  const loaderData = useLoaderData();
  
  const isDataEmpty = Array.isArray(loaderData) && !loaderData.length;
  const isSomethingWentWrong = loaderData === 'Something went wrong';


  return (
    <div>
      {isSomethingWentWrong && <Error />}
      {isDataEmpty && <p>Nothing found ...try another keyword!</p>}
      {!isDataEmpty && loaderData.map((dataObj, i) => (
        <Link key={i} to={`/lesson/${dataObj.name}`} className='card-link' state={dataObj}>
          <Card dataObj={dataObj} />
        </Link>
      ))}
    </div>
  )
}
