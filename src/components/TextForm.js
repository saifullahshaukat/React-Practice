import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [font, setFont] = useState("Arial"); // Default font

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handlelowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleFontClick = () => {
    // Toggle font between two options
    const newFont = font === "Arial" ? "Noto Sans" : "Arial";
    setFont(newFont);
  };
  const clearText = () => {
    let newText = "";
    setText(newText);
  };
  const copyText = () => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Text copied to clipboard!");
    }).catch(err => {
      console.error("Failed to copy text: ", err);
    });
  };
  const removeExtraSpaces = () => {
    
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

return (
    <div className='container my-3' style={{color: props.mode === 'light' ? 'white' : 'black'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea
                value={text}
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="8"
                onChange={handleOnChange}
            ></textarea>

            <button className="btn btn-primary mx-1 my-3" onClick={handleUpClick}>
                Convert To Uppercase
            </button>
            <button className="btn btn-primary mx-1 my-3" onClick={handlelowClick}>
                Convert To Lowercase
            </button>
            <button className="btn btn-primary mx-1 my-3" onClick={clearText}>
                Clear Text
            </button>
            <button className="btn btn-primary mx-1 my-3" onClick={copyText}>
                Copy Text
            </button>
            <button className="btn btn-primary mx-1 my-3" onClick={removeExtraSpaces}>
                Remove Extra Spaces
            </button>
        </div>

        <div>
            <h3>Text Summary</h3>
            <p>
                Your Text Has {text.trim().length === 0 ? 0 : text.split(" ").filter((word) => word.length > 0).length} Words & {text.length} Characters
            </p>
            <p>{0.008 * text.split(" ").length} Min Read</p>
            <h3
                onClick={handleFontClick}
                style={{ cursor: "pointer" }} // Add cursor pointer style
            >
                Preview
            </h3>
            <p style={{ fontFamily: font }}>{text}</p> {/* Apply the current font */}
        </div>
    </div>
);
}
