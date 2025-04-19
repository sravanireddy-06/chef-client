import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getUsers } from '../services/services';
import { FaStar } from 'react-icons/fa';
import avatar from '../../public/assets/avatar.png'
import avatar2 from '../../public/assets/image.png'
import BookChefForm from '../components/BookingChefForm';
import UserBookings from '../components/UserBooking';

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [showBookingForm, setShowBookingForm] = useState(false);
    const [selectedChefId, setSelectedChefId] = useState(null);
    const [showBookings, setShowBookings] = useState(false);
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await getUsers();
                setUsers(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch user data');
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;


    return (
        <>

            <div className="top-5 right-5 mt-8 mb-8">
                <button
                    type="submit"
                    onClick={() => setShowBookings(true)}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                    style={{ pointerEvents: 'auto' }} 
                >
                    See Bookings
                </button>
            </div>
            <div>
                <h1 className="text-2xl font-bold mb-4">Available Chefs</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {users.map(user => (
                        <div key={user._id} className="border p-4 rounded shadow">
                            <h2 className="text-lg font-semibold">{user.name}</h2>
                            <p>{user.email}</p>
                            <BookChefForm chefId={user._id} userId={userId} />
                        </div>
                    ))}

                    {showBookingForm && (
                        <BookChefForm chefId={selectedChefId} userId={userId} onClose={() => setShowBookingForm(false)} />
                    )}
                    {showBookings && (
                        <UserBookings userId={userId} onClose={() => setShowBookings(false)} />
                    )}

                </div>
            </div>
        </>
    );
}

export default Dashboard;