import { useRef, useState } from "react";
import React from "react";

export default function App() {
  const [text, setText] = useState("");
  const [cvc, setDate] = useState("");
  const cvcRef = useRef(null);
  const dateRef = useRef(null);

  const handleOnChange = (e) => {
    const val = e.target.value;
    setText(val);
    if (val.length === 16) {
      cvcRef.current.focus();
    }
  };
  const handleOnCvcChange = (e) => {
    const vals = e.target.value;
    setDate(vals);
    if (vals.length === 3) {
      dateRef.current.focus();
    }
  };

  return (
    <div className="w-50 mx-auto mb-5">
      <div className="border p-3 mt-5">
        <input
          type="text"
          className="form-control"
          onChange={handleOnChange}
          value={text}
          placeholder="Card number"
        />
        <input
          type="text"
          className="form-control mt-2"
          ref={cvcRef}
          onChange={handleOnCvcChange}
          value={cvc}
          placeholder="CVC code"
        />
        <input
          type="text"
          className="form-control mt-2"
          ref={dateRef}
          placeholder="Expiration date"
        />
      </div>
    </div>
  );
}
