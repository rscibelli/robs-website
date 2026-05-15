import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { getTeeTimes } from '../../apiCalls';
import courses from './courses';

const initialCourseName = 'westover';
const initialDate = new Date().toISOString().split('T')[0];

function TeeTimes() {
    const [courseName, setCourseName] = useState(initialCourseName);
    const [date, setDate] = useState(initialDate);
    const [teeTimes, setTeeTimes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const loadTeeTimes = async (event) => {
        if (event) {
            event.preventDefault();
        }

        setLoading(true);
        setError(null);

        try {
            const data = await getTeeTimes(courseName, date);
            setTeeTimes(data);
        } catch (err) {
            setError(err.message);
            setTeeTimes([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const fetchInitial = async () => {
            setLoading(true);
            setError(null);

            try {
                const data = await getTeeTimes(initialCourseName, initialDate);
                setTeeTimes(data);
            } catch (err) {
                setError(err.message);
                setTeeTimes([]);
            } finally {
                setLoading(false);
            }
        };

        fetchInitial();
    }, []);

    return (
        <div className="container my-5">
            <div className="text-start mt-3 ms-3 mb-3">
                <button
                    type="button"
                    className="btn btn-light d-inline-flex"
                    onClick={() => navigate('/')}
                >
                    <span className="me-2">←</span> Back to Home
                </button>
            </div>

            <div className="card shadow-sm mb-4">
                <div className="card-body">
                    <h2 className="card-title mb-3 text-center">Tee Times</h2>
                    <form className="row g-3" onSubmit={loadTeeTimes}>
                        <div className="col-md-6">
                            <label htmlFor="courseName" className="form-label">
                                Course Name
                            </label>
                            <select
                                id="courseName"
                                className="form-select"
                                value={courseName}
                                onChange={(e) => setCourseName(e.target.value)}
                                required
                            >
                                {courses.map((course) => (
                                    <option key={course.name} value={course.name}>
                                        {course.displayName}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="date" className="form-label">
                                Date
                            </label>
                            <input
                                id="date"
                                type="date"
                                className="form-control"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-md-2 d-flex align-items-end">
                            <button type="submit" className="btn btn-primary w-100">
                                Search
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {loading && <p className="text-gray-500">Loading tee times...</p>}
            {error && <div className="alert alert-danger">Error: {error}</div>}

            {!loading && !error && teeTimes.length === 0 && (
                <div className="alert alert-warning">No tee times found for the selected course and date.</div>
            )}

            <div className="row row-cols-1 row-cols-md-2 g-4">
                {teeTimes.map((slot, index) => (
                    <div className="col" key={`${slot.courseName}-${slot.time}-${index}`}>
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">{slot.courseName}</h5>
                                <p className="card-text mb-1">
                                    <strong>Time:</strong> {slot.time}
                                </p>
                                <p className="card-text mb-1">
                                    <strong>Price:</strong> {slot.priceRange}
                                </p>
                                <p className="card-text mb-1">
                                    <strong>Capacity:</strong> {slot.golferCapacity}
                                </p>
                                <p className="card-text mb-3">
                                    <strong>Holes:</strong> {slot.holesAvailable}
                                </p>
                                <a
                                    href={slot.bookingUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-outline-primary"
                                >
                                    Book Tee Time
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TeeTimes;
