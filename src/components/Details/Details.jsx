import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Details() {

    const history = useHistory();
    const details = useSelector(store => store.details)

    const toList = () => {
        history.push('/');
    }

    return(
        <>
            <h1>{details.title}</h1>
            <img src={details.poster} />
            <p>{details.description}</p>
            <button onClick={toList}>Back to List</button>
        </>
    )
}

export default Details;