import { useState } from 'react';
import calculate from '../logic/calculate';
import './UI.css';

function UI() {
  const [result, SetResult] = useState(
    {
      total: null,
      next: null,
      operation: null,
    },
  );
  const { total, next, operation } = result;

  const HandleClick = (e) => {
    const buttonName = e.target.textContent;
    SetResult(calculate(result, buttonName));
  };
  return (
    <>
      <div id="result" className="result">
        {next || operation || total || 0}
      </div>
      <div className="buttons">
        <button type="button" onClick={HandleClick} className="button-clear">
          AC
        </button>
        <button type="button" onClick={HandleClick} className="button-sign">
          +/-
        </button>
        <button type="button" onClick={HandleClick} className="button-percent">
          %
        </button>
        <button type="button" onClick={HandleClick} className="operator">
          /
        </button>
        <button type="button" onClick={HandleClick}>7</button>
        <button type="button" onClick={HandleClick}>8</button>
        <button type="button" onClick={HandleClick}>9</button>
        <button type="button" onClick={HandleClick} className="operator">
          x
        </button>
        <button type="button" onClick={HandleClick}>4</button>
        <button type="button" onClick={HandleClick}>5</button>
        <button type="button" onClick={HandleClick}>6</button>
        <button type="button" onClick={HandleClick} className="operator">
          -
        </button>
        <button type="button" onClick={HandleClick}>
          1
        </button>
        <button type="button" onClick={HandleClick}>2</button>
        <button type="button" onClick={HandleClick}>3</button>
        <button type="button" onClick={HandleClick} className="operator">
          +
        </button>
        <button type="button" onClick={HandleClick} className="button-zero">
          0
        </button>
        <button type="button" onClick={HandleClick}>.</button>
        <button type="button" onClick={HandleClick} className="operator">
          =
        </button>
      </div>
    </>
  );
}

export default UI;
