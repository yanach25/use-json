import {useEffect, useState} from "react";

function useJsonFetch(url, options) {
    const [data, setData] = useState({data: undefined, error: undefined, loading: true});

    useEffect(() => {
        fetch(url)
            .then(status)
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                setData({data, error: undefined, loading: false});
            }).catch(error => {
            setData(prev => ({...prev, error: error.toString(), loading: false}));
        })
    }, [url, options]);

    return [data.data, data.loading, data.error];
}

export default useJsonFetch;

function status(res) {
    if (!res.ok) {
        throw new Error(res.statusText);
    }
    return res;
}
