import './App.css';
import { useState, useEffect } from 'react';
import JobList from './components/JobList/JobList';

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await fetch(
        'https://feed.jobylon.com/feeds/7d7e6fd12c614aa5af3624b06f7a74b8/?format=json'
      );
      const data = await res.json();
      setJobs(data);
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <h1>JobylonList</h1>
      <JobList jobs={jobs} />
    </div>
  );
}

export default App;
