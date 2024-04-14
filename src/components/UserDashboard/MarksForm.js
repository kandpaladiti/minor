import React, { useState } from 'react';
import { firestore } from '../../config/firebase';

function MarksForm() {
  const [marks, setMarks] = useState({
    subject1: '',
    subject2: '',
    subject3: '',
    subject4: '',
    subject5: ''
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMarks(prevMarks => ({
      ...prevMarks,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await firestore.collection('marks').add(marks);
      console.log('Marks submitted successfully');
      // Optionally, you can redirect to another page or show a success message
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Enter Marks</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Subject 1:</label>
          <input type="number" name="subject1" value={marks.subject1} onChange={handleChange} required />
        </div>
        <div>
          <label>Subject 2:</label>
          <input type="number" name="subject2" value={marks.subject2} onChange={handleChange} required />
        </div>
        <div>
          <label>Subject 3:</label>
          <input type="number" name="subject3" value={marks.subject3} onChange={handleChange} required />
        </div>
        <div>
          <label>Subject 4:</label>
          <input type="number" name="subject4" value={marks.subject4} onChange={handleChange} required />
        </div>
        <div>
          <label>Subject 5:</label>
          <input type="number" name="subject5" value={marks.subject5} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MarksForm;
