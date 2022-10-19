import './toast.css'

const Toast = (props:any) => {
    return (
      <div className="alert-success-components">
        <p className="successText">{props.message}</p>
        <i className="fa-solid fa-xmark closeSymbol"></i>
      </div>
    );
}

export default Toast