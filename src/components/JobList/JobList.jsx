import JobItem from './JobItem';
import styled from 'styled-components';

const JobListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const Joblist = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function JobList({ jobs }) {
  return (
    <JobListContainer>
      <h1>JobylonList</h1>
      <Joblist>
        {jobs.map((job) => (
          <JobItem key={job.id} job={job} />
        ))}
      </Joblist>
    </JobListContainer>
  );
}

export default JobList;
