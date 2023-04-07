import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Details() {

    const history = useHistory();
    const details = useSelector(store => store.details)

    const toList = () => {
        history.push('/');
    }

    console.log('this is details', details);

    return(
        <>
            <h1>{details.title}</h1>
            <img src={details.poster} />
            <h3>Genres</h3>
            <ul>
                {details.genres.map((genre, i) => (
                    <li key={i}>{genre}</li>
                ))}
            </ul>
            <h3>Summary</h3>
            <p>{details.description}</p>
            <button onClick={toList}>Back to List</button>
        </>
    )
}

export default Details;