import "./Input.css";

const Input = (props: any) => {
  return (
    <div>
      <input
        type="text"
        placeholder={props.placeholder}
        className="field-outline username"
        minLength={props.minValue}
        maxLength={props.maxValue}
      />
    </div>
  );
};

export default Input;
