import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getUsers } from '../services/services';
import { FaStar } from 'react-icons/fa';
import avatar from '../../public/assets/avatar.png'
import avatar2 from '../../public/assets/image.png'


const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

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
        <div className="p-5 bg-gray-100 min-h-screen flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-6">Chef Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {users.map((user) => (
                    <div key={user._id} className="bg-white shadow-md rounded-lg p-6 w-80 flex flex-col items-center">
                        <img 
                            src={user.avatar || avatar2} 
                            alt="Profile Avatar" 
                            className="w-24 h-24 rounded-full mb-4"
                        />
                        <p className="text-lg font-semibold flex items-center">
                            <strong>Name:</strong> {user.name} 
                            <FaStar className="text-yellow-500 ml-2" />
                            <FaStar className="text-yellow-500 ml-2" />
                            <FaStar className="text-yellow-500 ml-2" />
                        </p>
                        <p className="text-sm text-gray-600"><strong>Email:</strong> {user.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;