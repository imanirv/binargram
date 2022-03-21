const Input = ({
    name,
    type,
    placeholder,
    label,
    onChange,
    onBlur,
    dataTestId
}) =>{
    return (
        <label htmlFor={name}> 
            <div className="font-bold mb-1">{label}</div>
            <input type={type} 
            name={name} 
            className="py-2 mb-2 focus:ring-0 focus:outline-none border-b w-full bg-slate-900"
            placeholder={placeholder} 
            onChange={onChange}
            onBlur={onBlur}
            data-testId={dataTestId}
            />
        </label>
    )
}


export default Input