import './App.css';
import useJsonFetch from "./UseJsonFetch";

function App() {
    return (
        <div className="App">
            <ShowInfo url={process.env.REACT_APP_URL + 'data'}/>
            <ShowInfo url={process.env.REACT_APP_URL + 'error'}/>
            <ShowInfo url={process.env.REACT_APP_URL + 'loading'}/>
        </div>
    );
}

export default App;

function ShowInfo(props) {
    const {url} = props;
    const [data, loading, error] = useJsonFetch(url);

    const okEl = data ? <div>Case ok
        {JSON.stringify(data)}
    </div>: '';

    const loadingEL = loading ? <div className="loading">Loading:
        {loading ? 'true' : 'false'}
    </div>: '';

    const errorEl = error ? <div className="error">{JSON.stringify(error)}</div> : '';
    return (
        <div>
            {okEl}
            {loadingEL}
            {errorEl}
        </div>
    )
}
