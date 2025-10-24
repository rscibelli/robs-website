import { React, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { runningSummary } from '../apiCalls';

function Running() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await runningSummary();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    console.log("data: " + data);

    if (loading) return <p className="text-gray-500">Loading...</p>;
    if (error) return <p className="text-red-500">Error: {error}</p>;

    return (
        <div className="container my-5">
            <h2 className="mb-4 text-center">🏃‍♂️ Running Summary</h2>

            <div className="table-responsive mb-5">
                <table className="table table-striped table-bordered align-middle shadow-sm">
                <thead className="table-dark">
                    <tr>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Distance</th>
                    <th>Time</th>
                    <th>Pace</th>
                    <th>Calories</th>
                    <th>Avg HR</th>
                    </tr>
                </thead>
                <tbody>
                    {data.runs.map((run) => (
                    <tr key={run.id}>
                        <td>{new Date(run.runDate).toLocaleDateString("en-US")}</td>
                        <td>{run.name}</td>
                        <td>{run.distance}</td>
                        <td>{run.time}</td>
                        <td>{run.pace}</td>
                        <td>{run.caloriesBurned}</td>
                        <td>{run.averageHeartRate}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>

            <div className="card shadow-sm">
                <div className="card-body">
                <h4 className="card-title mb-3">
                    Summary ({new Date(data.summary.insertDate).toLocaleDateString("en-US")})
                </h4>
                <div
                    className="card-text"
                    dangerouslySetInnerHTML={{
                    __html: data.summary.summary.replace(/\n/g, "<br/>"),
                    }}
                ></div>
                </div>
            </div>
        </div>
    );
}

export default Running;