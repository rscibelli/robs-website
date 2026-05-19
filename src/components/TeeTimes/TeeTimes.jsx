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

    const selectedCourse = courses.find((course) => course.name === courseName) || courses[0];
    const displayPhone = selectedCourse?.phone ?? '';
    const formattedPhone = displayPhone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');

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

            <div className="card shadow-sm mb-4">
                <div className="card-body d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center">
                    <div>
                        <h5 className="card-title mb-0">Course Contact</h5>
                        <p className="card-text mb-0">{selectedCourse.displayName}</p>
                    </div>
                    <a href={`tel:${displayPhone}`} className="btn btn-outline-success mt-3 mt-sm-0">
                        Call {formattedPhone}
                    </a>
                </div>
            </div>

            {loading && <p className="text-gray-500">Loading tee times...</p>}
            {error && <div className="alert alert-danger">Error: {error}</div>}

            {!loading && !error && teeTimes.length === 0 && (
                <div className="alert alert-warning">No tee times found for the selected course and date.</div>
            )}

            <div className="row row-cols-1 row-cols-md-4 g-2">
                {teeTimes.map((slot, index) => (
                    <div className="col" key={`${slot.courseName}-${slot.time}-${index}`}>
                        <div className="card h-100 shadow-sm">
                            <div className="card-body p-2">
                                <h6 className="card-title mb-2">{slot.courseName}</h6>

                                <p className="card-text mb-2">
                                    Details: {slot.details || 'N/A'}
                                </p>

                                <p className="card-text mb-1">
                                    <strong>{slot.time}</strong> • {slot.date}
                                </p>

                                <p className="card-text mb-1">
                                    {slot.price} • {slot.holes} holes
                                </p>

                                <p className="card-text mb-2">
                                    Capacity: {slot.playerCapacity || 'N/A'}
                                </p>

                                <a
                                    href={slot.bookingUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-sm btn-outline-primary w-50"
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
