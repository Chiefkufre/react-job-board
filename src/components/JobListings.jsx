import React, { useEffect, useState } from 'react'
import JobCard from './JobCard'
import Spinner from './Spinner'
const JobListings = ({isHome}) => {

    const [jobs, setJobs] = useState([])
    const [isloading, setIsLoading] = useState(true)

    useEffect(() => {
      try {
        const fetchData = async() =>{
          const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs';
          const res = await fetch(apiUrl);
          const data = await res.json();
          setJobs(data);
        }
        fetchData();
      } catch (error) {
        console.log(error);
      }finally{
        setIsLoading(false)
      }
    }, [])

    // const jobListings = isHome ? jobs.slice(0, 3) : jobs

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
            {
            isloading ?
             ( <div className='text-center'> <Spinner loading={isloading} /> </div>) 
             : 
              ( 
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {jobs.map((job) =>( 
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            )}
      </div>
    </section>
  )
}

export default JobListings