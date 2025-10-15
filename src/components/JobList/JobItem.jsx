import styled from 'styled-components';
import { MarkerPin01, ArrowNarrowRight } from '@untitledui/icons';

const JobCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr auto;
  align-items: center;
  background-color: white;
  gap: 1rem;
  padding: 1.2rem;
  border: 0.5px solid rgba(0, 0, 0, 0.08);
  border-radius: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr auto;
  }
`;

const Title = styled.p`
  font-weight: 500;
  text-align: left;
  font-weight: 700;
`;

const Company = styled.p`
  text-align: center;
`;

const EmploymentType = styled.p`
  text-align: center;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const Location = styled.p`
  text-align: center;
`;

const ExperienceContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ExperienceBadge = styled.span`
  background-color: ${(props) => {
    switch (props.$experience) {
      case 'Experienced':
        return 'var(--color-primary-2)';
      case 'Mid level':
        return 'var(--color-secondary-1)';
      case 'Entry level':
        return 'var(--color-secondary-4)';
      default:
        return '#ccc';
    }
  }};
  color: white;
  border-radius: 1rem;
  padding: 0.3rem 1rem;
  white-space: nowrap;
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
      <EmploymentType>{job.employmentType}</EmploymentType>
      <LocationContainer>
        <MarkerPin01 strokeWidth={1.5} />
        <Location>{job.locationShort}</Location>
      </LocationContainer>
      <ExperienceContainer>
        <ExperienceBadge $experience={job.experience}>
          {job.experience}
        </ExperienceBadge>
      </ExperienceContainer>

      <Button>
        <ArrowNarrowRight strokeWidth={1.5} />
      </Button>
    </JobCard>
  );
}

export default JobItem;
