import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function App() {
  const [image, setImage] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=12')
      .then((response) => response.json())
      .then((data) => setImage(data));
  }, []);

  return (
    <div className="bg-gradient-to-b from-indigo-600 via-blue-500 to-blue-700 text-white min-h-screen">
      <header className="bg-primary py-4 text-center">
        <h2 className="text-3xl font-bold">Cool Color Picker</h2>
      </header>

      <Container className="mt-8">
        <CardGroup>
          {image.map((picture) => (
            <Card key={picture.id} className="mb-4">
              <Card.Img variant="top" src={picture.url} alt={picture.thumbnailUrl} />
              <Card.Body>
                <Card.Title>Title: {picture.title}</Card.Title>
              </Card.Body>
            </Card>
          ))}
        </CardGroup>
      </Container>
    </div>
  );
}

export default App;
  