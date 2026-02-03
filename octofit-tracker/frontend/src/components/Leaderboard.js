import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaderboards, setLeaderboards] = useState([]);
  const endpoint = `${process.env.REACT_APP_CODESPACE_URL}/api/leaderboards/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Leaderboard API endpoint:', endpoint);
        console.log('Fetched leaderboards:', data);
        setLeaderboards(data.results || data);
      });
  }, [endpoint]);

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h2 className="card-title">Leaderboard</h2>
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Team</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {leaderboards.map((entry, idx) => (
              <tr key={entry.id || idx}>
                <td>{entry.team?.name || 'Unknown'}</td>
                <td>{entry.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Leaderboard;
