import React from 'react'
import { useState } from 'react'
import './Main.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export default function Main() {
    const [text, setText] = useState("");
    const [audioUrl, setAudioUrl] = useState(null);

    const handleChange = (event) => {
        setText(event.target.value)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const response = await fetch('https://snmeorbd4j.execute-api.us-east-1.amazonaws.com/speak', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text }),
        });
    
        const data = await response.json();
        setAudioUrl(data.audio_url);
      };

  return (
    <div className="Input">
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3 mt-3 w-50 mx-auto border-0 rounded" controlId="exampleForm.ControlTextarea1">
      <Form.Control 
        as="textarea" rows={10}
        value={text}
        onChange={handleChange}
        placeholder="Enter text here"
        style={{ fontSize: '1.5rem' }}
        />
    </Form.Group>
    <div className="text-center mt-3">
      <Button 
        className="bg-dark btn-lg" 
        type="submit"
        style={{ padding: '1rem 2rem', fontSize: '1.5rem' }}
        >Submit</Button>
    </div>
  </Form>

  {audioUrl && (
    <div className="d-flex justify-content-center mt-5">
    <audio controls>
        <source src={audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
    </audio>
    </div>
      )}
  </div>
  )
}
