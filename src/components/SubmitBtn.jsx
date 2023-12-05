import { useNavigation } from "react-router-dom"

const SubmitBtn = ({ formBtn }) => {
    const navigate = useNavigation()
    const isSubmitting = navigate.state === 'submitting'
    return (
        <button
            className={`btn btn-block ${formBtn && 'form-btn'}`}
            type='submit'
            disabled={isSubmitting}
        >
            {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
    )
}
export default SubmitBtn