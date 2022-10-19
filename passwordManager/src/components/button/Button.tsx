import "./button.css";

const Button = (props: any) => {
  return (
    <div>
      <button className="button-background">{props.value}</button>
    </div>
  );
};

export default Button;
