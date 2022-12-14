import { useLoaderData, Link } from 'react-router-dom';
import Card from '../components/Card';
import { Error } from './Error';
export const LessonCard = () => {

  const loaderData = useLoaderData();
  console.log(loaderData);
  const isDataEmpty = Array.isArray(loaderData) && !loaderData.length;
  const isSomethingWentWrong = loaderData === 'Something went wrong';


  return (
    <div>
      {isSomethingWentWrong && <Error />}
      {isDataEmpty && <p>Nothing found ...try another keyword!</p>}
      {!isDataEmpty && loaderData.map((dataObj, i) => (
        <Link key={i} to={`/lesson/${loaderData[0].name}`} className='card-link'>
          <Card dataObj={dataObj} />
        </Link>
      ))}
    </div>
  )
}
