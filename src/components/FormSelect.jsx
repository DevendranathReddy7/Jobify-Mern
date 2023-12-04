const FormSelect = ({ name, labelText, list, defaultValue = '' }) => {
    return (
        <div className='form-div'>
            <label htmlFor={name} className='form-label'>{labelText || name}</label>
            <select name={name} id={name} className='form-select' defaultValue={defaultValue}>
                {list.map((itemValue) => {
                    return (
                        <option key={itemValue} value={itemValue}>
                            {itemValue}
                        </option>
                    );
                })}
            </select>
        </div>
    )
}
export default FormSelect