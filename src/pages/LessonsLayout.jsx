import { NavLink, Outlet, useNavigation, useNavigate, createSearchParams } from 'react-router-dom';
import { Main } from './Main';

export const LessonsLayout = () => {
    const { state } = useNavigation();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        let searchQuery = form.search.value;
        console.log(searchQuery);
        const params = { q: searchQuery };//* creating an search params object with key:value format

        navigate({
            pathname: '/lesson',
            search: `?${createSearchParams(params)}`, //* passing params to createSearchParams function, result will be navigating to url http://localhost:3000/lesson?q=searchQuery
        });

        form.search.value = '';
    }


    return (
        <div>
            <nav className='nav'>
                <NavLink to='/' className='nav-link'>Home</NavLink>
            </nav>
            <form onSubmit={handleSubmit} className='search-form'>
                <label htmlFor='search'>Type a React search keyword</label>
                <input type='text' name='search' />
                <button type='submit'>Go!</button>
            </form>
            <Main />
            {state === 'loading' ? 'Loading your data' : <main><Outlet /></main>}
        </div>
    )
}