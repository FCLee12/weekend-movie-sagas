import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    // Takes you to the details page on movie picture click
    const toDetails = (id) => {
        console.log('this is id', id);

        // this dispatch will go to a saga which will
        // fetch the movie details by the movie id
        dispatch({
            type: 'FETCH_DETAILS_SAGA',
            payload: id
        })

        history.push('/details')
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title} onClick={() => toDetails(movie.id)} />
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;