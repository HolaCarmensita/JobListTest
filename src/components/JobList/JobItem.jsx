function JobItem({ job }) {
  return (
    <div>
      <p>{job.title}</p>
      <p>{job.company?.name}</p>
      <p>{job.locations[0]?.location?.text}</p>
    </div>
  );
}

export default JobItem;
