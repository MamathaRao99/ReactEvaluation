import "../siteBox/siteBoxs.css";

const CopyPass = () => {
  return (
    <div className="copy">
      <img
        src={require("../../assets/image/copyBook.png")}
        alt="copy"
        className="copyIcon"
      />
      <p className="copyText">Copy Password</p>
    </div>
  );
};

export default CopyPass;
