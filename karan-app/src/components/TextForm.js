import React , {useState} from 'react'

export default function TextForm(props) {
    const HandleUpClick=()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase!","success")
    }

    const HandleLowClick=()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase!","success")
    }

    const HandleCLSClick=()=>{
        let newText = "";
        setText(newText)
        props.showAlert("Text is cleard!","success")
    }

    const HandleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard!","success");
    }

    const HandleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces removed!","success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const [text,setText] = useState("");
    return (  
        <>    
        <div style={{color : props.Mode==='dark' ? 'white':'black'}}>
        <h1>{props.heading}</h1>
            <div className="mb-2">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.Mode==='dark' ? '#A9A9A9':'white' , color : props.Mode==='dark' ? 'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-dark mx-2 my-2" disabled={text.length===0} onClick={HandleUpClick} type="button">Convert to uppercase</button>
            <button className="btn btn-dark mx-2 my-2" disabled={text.length===0} onClick={HandleLowClick} type="button">Convert to LowerCase</button>
            <button className="btn btn-dark mx-2 my-2" disabled={text.length===0} onClick={HandleCopy} type="button">Copy</button>
            <button className="btn btn-dark mx-2 my-2" disabled={text.length===0} onClick={HandleExtraSpaces} type="button">Remove Extra Spaces</button>
            <button className="btn btn-dark mx-2 my-2" disabled={text.length===0} onClick={HandleCLSClick} type="button">Clear</button>
        </div>
        
        <div className="conatiner my-3" style={{color : props.Mode==='dark' ? 'white':'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minuts to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter somthing in the TEXTBOX above to preview it here!"}</p>
        </div>        
        </>
    )
}
