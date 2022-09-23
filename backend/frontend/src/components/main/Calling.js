import "./Calling.css";

const Calling = () => {
  return (
    <div className="wrap">
      <div className="calling">
        <div className="call-content">
          <div className="content-intro">Let's talk</div>
          <input className="content-mylanguage"></input>
          <input className="content-yourlanguage"></input>
        </div>
        <div className="option">
          <div className="option-word">옵션</div>
          <div className="option-icon"></div>
        </div>
      </div>
      <button className="call-button">Call</button>
    </div>
  );
};

export default Calling;
