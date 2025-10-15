import { useState, useEffect } from 'react';
import JobList from './components/JobList/JobList';
import { fetchJobs } from './services/api';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 2rem;
`;

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
    <AppContainer>
      <JobList jobs={jobs} />
    </AppContainer>
  );
}

export default App;
