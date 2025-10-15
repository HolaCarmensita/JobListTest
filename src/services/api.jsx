//Formattering för att få likadan form av data på varje rad
const formatJobData = (job) => ({
  id: job.id,
  title: job.title,
  titleShort: job.title?.split(' ').slice(0, 2).join(' ') || '',
  company: job.company,
  locations: job.locations,
  locationShort: job.locations?.[0]?.location?.text?.split(',')[0] || '',
});

export const fetchJobs = async () => {
  const res = await fetch(
    'https://feed.jobylon.com/feeds/7d7e6fd12c614aa5af3624b06f7a74b8/?format=json'
  );
  const data = await res.json();
  return data.map(formatJobData);
};
