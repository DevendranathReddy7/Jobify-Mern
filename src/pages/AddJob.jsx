import { useOutletContext } from 'react-router-dom';
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constants';
import { Form, useNavigation, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { RegisterForm, FormSelect } from '../components';

export const actions = async ({ request }) => {
    const formdata = await request.formData()
    const data = Object.fromEntries(formdata)
    console.log(data);

    try {
        await customFetch.post('/jobs', data)
        toast.success('job added successfully')
        return redirect('all-jobs')
    } catch (error) {
        toast.error('failed to add job')
        return error
    }
}
const AddJob = () => {
    const { user } = useOutletContext()
    const navigate = useNavigation()
    const isSubmitting = navigate.state === 'submitting'
    return (
        <Wrapper>
            <Form method='post' className='form'>
                <h1 className='form-title'>add job</h1>
                <div className='form-center'>
                    <RegisterForm type='text' name='position' />
                    <RegisterForm type='text' name='company' />
                    <RegisterForm type='text' name='jobLocation' labelText='job location' defaultValue={user.location} />
                    <FormSelect labelText='job status' name='jobStatus' defaultValue={JOB_STATUS.PENDING} list={Object.values(JOB_STATUS)} />
                    <FormSelect labelText='job type' name='jobType' defaultValue={JOB_TYPE.FULL_TIME} list={Object.values(JOB_TYPE)} />
                    <button type='submit' className='btn btn-block form-btn' disabled={isSubmitting}>{isSubmitting ? 'Submitting' : 'Submit'}</button>
                </div>
            </Form>
        </Wrapper>
    )
}
export default AddJob