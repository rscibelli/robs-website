import { React, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { runningSummary } from '../apiCalls';

function Running() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        runningSummary()
        .then((result) => {
            setData(result);
            setLoading(false);
        })
        .catch((err) => {
            setError(err.message);
            setLoading(false);
        });
    }, []);

    if (loading) return <p className="text-gray-500">Loading...</p>;
    if (error) return <p className="text-red-500">Error: {error}</p>;

    return (
        <div className="p-4 border rounded-xl shadow-md bg-white">
        <h2 className="text-xl font-bold mb-2">Endpoint Response</h2>
        <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto">
            {data}
        </pre>
        </div>
    );
}

export default Running;