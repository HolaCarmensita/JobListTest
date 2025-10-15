import styled from 'styled-components';
import { MarkerPin01, ArrowNarrowRight } from '@untitledui/icons';

const JobCard = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr auto;
  align-items: center;
  background-color: white;
  gap: 1rem;
  padding: 1.2rem;
  border: 0.5px solid rgba(0, 0, 0, 0.08);
  border-radius: 1rem;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }

  &:focus {
    outline: 2px solid var(--color-primary-2);
    outline-offset: 2px;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr auto;
  }
`;

const Title = styled.p`
  font-weight: 700;
  text-align: left;
  margin: 0;
  font-size: 1rem;
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

const OpenButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  padding: 0.5rem;
  margin: 0;
  color: #666;
  cursor: pointer;
  border-radius: 0.5rem;

  &:hover {
    background-color: var(--color-primary-2);
    color: white;
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary-2);
    outline-offset: 2px;
  }

  svg {
    flex-shrink: 0;
  }
`;

function JobItem({ job }) {
  const ariaLabel = `${job.title} at ${job.company?.name}, located in ${
    job.locationShort
  }${job.experience ? `, ${job.experience} level` : ''}${
    job.employmentType ? `, ${job.employmentType}` : ''
  }`;

  return (
    <JobCard tabIndex={0} aria-label={ariaLabel}>
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
      <OpenButton aria-label='View job details'>
        <ArrowNarrowRight strokeWidth={1.5} />
      </OpenButton>
    </JobCard>
  );
}

export default JobItem;
