import './UI.css';

function UI() {
  return (
    <>
      <div className="result">0</div>
      <div className="buttons">
        <button type="button" className="button-clear">AC</button>
        <button type="button" className="button-sign">+/-</button>
        <button type="button" className="button-percent">%</button>
        <button type="button" className="operator">/</button>
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button type="button" className="operator">*</button>
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button" className="operator">-</button>
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button" className="operator">+</button>
        <button type="button" className="button-zero">0</button>
        <button type="button">.</button>
        <button type="button" className="operator">=</button>
      </div>
    </>
  );
}

export default UI;
