export const fetchMovie = ({ params }) => {
    console.log(params.movieId);
    return new Promise((res) => {
        setTimeout(() =>
            res({
                name: params.movieId === '1' ? 'Lord of the Rings' : params.movieId === '2' ? 'Gladiator' : '5th element',
                duration: 300,
                id: params.movieId
            }),
            2000)
    })
}