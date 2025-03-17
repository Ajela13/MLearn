import "./Preloader.css";

function Preloader() {
  return (
    <div className="preloader-container">
      <div className="circle-preloader"></div>
      <p className="circle-preloader__text">Loading...</p>
    </div>
  );
}

export default Preloader;
