import JobItem from './JobItem';

function JobList({ jobs }) {
  return (
    <div>
      {jobs.map((job) => (
        <JobItem key={job.id} job={job} />
      ))}
    </div>
  );
}

export default JobList;
