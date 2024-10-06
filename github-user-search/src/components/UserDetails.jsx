import React from "react";

function UserDetails({ user, repos, onReset }) {
  return (
    <div>
      <img src={user.avatar_url} alt={`${user.name}'s avatar`} style={{ width: 100 }} />
      <h2>{user.name}</h2>
      <p>Location: {user.location}</p>
      <p>Bio: {user.bio}</p>
      <h3>Repositories:</h3>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

export default UserDetails;
