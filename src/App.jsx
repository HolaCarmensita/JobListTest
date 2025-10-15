import './App.css';
import { useState, useEffect } from 'react';
import JobList from './components/JobList/JobList';
import { fetchJobs } from './services/api';

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getJobs = async () => {
      const data = await fetchJobs();
      setJobs(data);
    };
    getJobs();
  }, []);

  return (
    <div>
      <h1>JobylonList</h1>
      <JobList jobs={jobs} />
    </div>
  );
}

export default App;
