import React, { useState, useEffect } from 'react';
import { firestore } from '../../config/firebase';

function ViewMarks() {
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

  return (
    <div>
      <h2>View Marks</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Marks</th>
            </tr>
          </thead>
          <tbody>
            {marks.map((mark, index) => (
              <tr key={index}>
                <td>Subject {index + 1}</td>
                <td>{mark}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ViewMarks;
