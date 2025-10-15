import JobItem from './JobItem';
import styled from 'styled-components';

const JobListContainer = styled.div`
  max-width: 850px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

function JobList({ jobs }) {
  return (
    <JobListContainer>
      {jobs.map((job) => (
        <JobItem key={job.id} job={job} />
      ))}
    </JobListContainer>
  );
}

export default JobList;
