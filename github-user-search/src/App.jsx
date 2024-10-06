import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserDetails from "./components/UserDetails";

function App() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  const fetchUserData = async (username) => {
    try {
      const userResponse = await fetch(`https://api.github.com/users/${username}`);
      const userData = await userResponse.json();
      setUser(userData);

      const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
      const reposData = await reposResponse.json();
      setRepos(reposData);
    } catch (error) {
      console.error("Error fetching data:", error);
      setUser(null);
      setRepos([]);
    }
  };

  const handleReset = () => {
    setUser(null);
    setRepos([]);
  };

  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      {!user ? (
        <UserForm onSubmit={fetchUserData} />
      ) : (
        <UserDetails user={user} repos={repos} onReset={handleReset} />
      )}
    </div>
  );
}

export default App;
