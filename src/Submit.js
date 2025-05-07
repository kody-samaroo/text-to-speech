import React from 'react'
import './Submit.css'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function Submit() {
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
        <div className="audio-player">
          <h3>Listen to the result:</h3>
          <audio controls src={audioUrl} />
        </div>
      )}
  </div>
  )
}
