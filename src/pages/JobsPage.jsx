
import React from 'react'
import jobs from '../jobs.json'
import JobListings from '../components/JobListings'


const JobsPage = () => {
  return (
     <>
        <JobListings isHome={false}/>
     </>
  )
}

export default JobsPage