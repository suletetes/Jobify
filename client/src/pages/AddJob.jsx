import {FormRow} from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import {redirect, useOutletContext} from 'react-router-dom';
import {Form, useNavigation} from 'react-router-dom';
import customFetch from "../utils/customFetch.js";
import {JOB_TYPE} from "../../../utils/constants.js";


export const action = async ({request}) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
        await customFetch.post('/jobs', data);
        toast.success('Job added successfully');
        return redirect('all-jobs');
    } catch (error) {
        toast.error(error?.response?.data?.msg);
        return error;
    }
};

const AddJob = () => {
    const {user} = useOutletContext();
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';

    return (
        <Wrapper>
            <Form method='post' className='form'>
                <h4 className='form-title'>add job</h4>
                <div className='form-center'>
                    <FormRow type='text' name='position'/>
                    <FormRow type='text' name='company'/>
                    <FormRow
                        type='text'
                        labelText='job location'
                        name='jobLocation'
                        defaultValue={user.location}
                    />
                    <div className='form-row'>
                        <label htmlFor='jobStatus' className='form-label'>
                            job status
                        </label>
                        <select
                            name='jobStatus'
                            id='jobStatus'
                            className='form-select'
                            defaultValue={JOB_TYPE.FULL_TIME}
                        >
                            {Object.values(JOB_TYPE).map((itemValue) => {
                                return (
                                    <option key={itemValue} value={itemValue}>
                                        {itemValue}
                                    </option>
                                );
                            })}
                        </select>
                    </div>

                    <button
                        type='submit'
                        className='btn btn-block form-btn '
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'submitting...' : 'submit'}
                    </button>
                </div>
            </Form>
        </Wrapper>
    );
};

export default AddJob;