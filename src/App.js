import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routerLessons } from './routingLessons';

const App = () => <RouterProvider router={routerLessons} />

export default App;
