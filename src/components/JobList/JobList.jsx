import JobItem from './JobItem';
import styled from 'styled-components';

const JobListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const Joblist = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (min-width: 768px) {
    gap: 1rem;
  }
  list-style: none;
  padding: 0 1rem; /* Luft på sidorna för mobil */
  margin: 0;
  width: 100%;
  max-width: 850px;
`;

function JobList({ jobs }) {
  return (
    <JobListContainer>
      <header>
        <h1 tabIndex={0}>List of jobs</h1>
      </header>
      <Joblist>
        {jobs.map((job) => (
          <li key={job.id}>
            <JobItem job={job} />
          </li>
        ))}
      </Joblist>
    </JobListContainer>
  );
}

export default JobList;
