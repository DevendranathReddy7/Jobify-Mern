import Wrapper from "../assets/wrappers/JobsContainer"
import { useAllJobsContext } from "../pages/AllJobs"
import PageBtnContainer from './PageBtnContainer'
import Job from "./Job"

const JobsContainer = () => {
    const { data } = useAllJobsContext()
    const { jobs, totalJobs, numOfPages } = data;
    if (jobs.length === 0) {
        return <Wrapper>
            <h3>No Jobs to Display!</h3>
        </Wrapper>
    }
    return (
        <Wrapper>
            <h5>{totalJobs} job{jobs.length > 1 && 's'} found</h5>
            <div className="jobs">
                {jobs.map(job => {
                    return <Job key={job._id} {...job} />
                })}
            </div>
            {numOfPages > 1 && <PageBtnContainer />}
        </Wrapper>
    )
}
export default JobsContainer