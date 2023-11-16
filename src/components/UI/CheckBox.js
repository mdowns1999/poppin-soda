const CheckBox = (props) => {
    return <>
    <input
              type="checkbox"
              id={`custom-check-box-${props.id}`}
              name={props.name}
              value={props.name}
              onChange={() => props.handleOnChange(props.index)}
            />
            <label htmlFor={`custom-check-box-${props.id}`}>{props.name}</label>
            </>
}

export default CheckBox;