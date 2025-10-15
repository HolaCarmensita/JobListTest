import styled from 'styled-components';
import { MarkerPin01, ArrowNarrowRight } from '@untitledui/icons';

const JobCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr auto;
  align-items: center;
  background-color: white;
  gap: 1rem;
  padding: 1.2rem;
  border: 1px solid #ddd;
  border-radius: 1rem;
`;

const Title = styled.p`
  font-weight: 500;
  text-align: left;
`;

const Company = styled.p`
  text-align: center;
`;

const Location = styled.p`
  text-align: center;
`;

const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0;

  svg {
    flex-shrink: 0;
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  font: inherit;
  color: inherit;
  cursor: pointer;
  outline: none;

  &:focus-visible {
    outline: 0.125rem solid currentColor;
    outline-offset: 0.125rem;
  }

  svg {
    flex-shrink: 0;
  }
`;

function JobItem({ job }) {
  return (
    <JobCard>
      <Title>{job.titleShort}</Title>
      <Company>{job.company?.name}</Company>
      <LocationContainer>
        <MarkerPin01 strokeWidth={1.5} />
        <Location>{job.locationShort}</Location>
      </LocationContainer>
      <Button>
        <ArrowNarrowRight strokeWidth={1.5} />
      </Button>
    </JobCard>
  );
}

export default JobItem;
