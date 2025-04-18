import React, { useState } from 'react';
import axios from 'axios';

const BookChefForm = ({ chefId, userId }: { chefId: string; userId: string }) => {
  const [dateTime, setDateTime] = useState('');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('https://chef-client-five.vercel.app/api/bookings', {
        chefId,
        userId,
        dateTime,
        location,
        notes
      });
      alert('Chef booked successfully!');
    } catch (err) {
      alert('Booking failed: ' + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-2">Book This Chef</h2>
      <input type="datetime-local" value={dateTime} onChange={e => setDateTime(e.target.value)} required className="block mb-2" />
      <input type="text" placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} required className="block mb-2" />
      <textarea placeholder="Notes (optional)" value={notes} onChange={e => setNotes(e.target.value)} className="block mb-2" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Book Now</button>
    </form>
  );
};

export default BookChefForm;
