import React, { useState, useEffect } from 'react';
import { firestore } from '../../config/firebase';

function AdminPanel() {
  const [marks, setMarks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMarks = async () => {
      try {
        const marksCollection = await firestore.collection('marks').get();
        const marksData = marksCollection.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setMarks(marksData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchMarks();
  }, []);

  const sortMarks = (subject) => {
    const sortedMarks = [...marks].sort((a, b) => b[subject] - a[subject]);
    setMarks(sortedMarks);
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th onClick={() => sortMarks('subject1')}>Subject 1</th>
              <th onClick={() => sortMarks('subject2')}>Subject 2</th>
              <th onClick={() => sortMarks('subject3')}>Subject 3</th>
              <th onClick={() => sortMarks('subject4')}>Subject 4</th>
              <th onClick={() => sortMarks('subject5')}>Subject 5</th>
            </tr>
          </thead>
          <tbody>
            {marks.map((mark, index) => (
              <tr key={index}>
                <td>{mark.id}</td>
                <td>{mark.subject1}</td>
                <td>{mark.subject2}</td>
                <td>{mark.subject3}</td>
                <td>{mark.subject4}</td>
                <td>{mark.subject5}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AdminPanel;
