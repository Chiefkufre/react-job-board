import {Route, createBrowserRouter,
  createRoutesFromElements, RouterProvider
} from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage';
import AddJobs from './pages/AddJobs';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, {loader} from './pages/JobPage';
import EditJobPage from './pages/EditJobPage';



function App() {

  const addNewJob = async(job) =>{
    const res = await fetch(
      '/api/jobs',
       {
        method: "POST",
        headers:{
          'Content-Type': "application/json",
        },
        body: JSON.stringify(job)
       }
    )
    return;
  }

  // Delete Job
  const deleteJob = async(id) =>{
    const res = await fetch(
      `/api/jobs/${id}`,
       {
        method: "DELETE",
        headers:{
          'Content-Type': "application/json",
        },
       }
    )
    return;
  }

  // Update job
  const updateJob = async(job) =>{
    const res = await fetch(
      `/api/jobs/${job.id}`,
       {
        method: "PUT",
        headers:{
          'Content-Type': "application/json",
        },
        body: JSON.stringify(job)
       }
    )
    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />} >
        <Route index element={<HomePage />}  />
        <Route path='/add' element={<AddJobs addNewJob={addNewJob} />}  />
        <Route path='/jobs' element={<JobsPage />}  />
        <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={loader}  />
        <Route path='/jobs/:id/edit' element={<EditJobPage updateJob={updateJob} />} loader={loader}  />
        <Route path='*' element={<NotFoundPage />}  />
      </Route>
    ),
    
  );
  return <RouterProvider router={router} />
}
export default App
