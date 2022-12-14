import { Outlet, useNavigate  } from 'react-router-dom';


export const LessonsLayout = () => {
    // const [query, setQuery] = useState('');
    const navigate = useNavigate();
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        let searchQuery = form.search.value;
        console.log(searchQuery);

        navigate(`/lesson/${searchQuery}`);
        form.search.value = '';
        
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='search a React lesson' name='search'/>
                <button type='submit'>Go!</button>
            </form>
            {/* {responseError && <p style={{ color: 'red' }}>{responseError}</p>} */}
            <main><Outlet /></main>
        </div>
    )
}