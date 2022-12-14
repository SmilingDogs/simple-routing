import { NavLink, Outlet, useNavigate, useNavigation  } from 'react-router-dom';


export const LessonsLayout = () => {
    const { state } = useNavigation();
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        let searchQuery = form.search.value;
        console.log(searchQuery);

        navigate(`/${searchQuery}`);
        form.search.value = '';
    }


    return (
        <div>
            <nav className='nav'>
                <NavLink to={'/'} className='nav-link'>Home</NavLink>
            </nav>
            <form onSubmit={handleSubmit} className='search-form'>
                <label htmlFor='search'>Type a React search keyword</label>
                <input type='text'  name='search'/>
                <button type='submit'>Go!</button>
            </form>
            {state === 'loading' ? 'Loading your data' : <main><Outlet /></main>}
        </div>
    )
}