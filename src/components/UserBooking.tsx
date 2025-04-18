import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserBookings = ({ userId }: { userId: string }) => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/bookings/user/${userId}`)
            .then(res => setBookings(res.data))
            .catch(err => console.error(err));
    }, [userId]);

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-2">My Bookings</h2>
            {bookings.map((booking: any) => (
                <div key={booking._id} className="mb-2 border p-2 rounded">
                    <div><strong>Chef:</strong> {booking.chefId.name}</div>
                    <div><strong>Date:</strong> {new Date(booking.dateTime).toLocaleString()}</div>
                    <div><strong>Status:</strong> {booking.status}</div>
                </div>
            ))}
        </div>
    );
};

export default UserBookings;
