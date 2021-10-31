import React, { useState } from 'react'
// Declare a new state variable, which we'll call "count"

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log('Uppercase was Clicked' + text)
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert('Converted to uppercase!', 'success')
  }
  const handleLoClick = () => {
    // console.log('Uppercase was Clicked' + text)
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert('Converted to Lowerrcase!', 'success')
  }
  const handleClearClick = () => {
    // console.log('Uppercase was Clicked' + text)
    let newText = ''
    setText(newText)
    props.showAlert('Clear text!', 'success')
  }
  const handleOnChange = (event) => {
    // console.log('on change')
    setText(event.target.value)
  }

  const handleCopy = () => {
    var text = document.getElementById('myBox')
    text.select()
    navigator.clipboard.writeText(text.value)
    document.getSelection().removeAllRanges()
    props.showAlert('Copied to clipboard!', 'success')
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(' '))
    props.showAlert('Removed Extra Spaces!', 'success')
  }

  const [text, setText] = useState('')
  // text = "new text": wrong way to change the state
  // settext = "new text": correct way to change the state

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black',
            }}
            id="myBox"
            rows="8"
            placeholder="Enter your text"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleUpClick}
        >
          Convert to upperCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleLoClick}
        >
          Convert to LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleClearClick}
        >
          Clear text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleCopy}
        >
          Copy text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text.split(' ').filter((element) => {
              return element.length !== 0
            }).length
          }{' '}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(' ').filter((element) => {
              return element.length !== 0
            }).length}{' '}
          minutes read
        </p>
        <h2> preview</h2>
        <p>{text.length > 0 ? text : 'Nothing to preview!'}</p>
      </div>
    </>
  )
}
