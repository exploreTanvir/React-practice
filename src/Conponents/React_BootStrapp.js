import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const React_Bootstrap = () => {
  return (
    <Card>
       <Card.Body>
       <Card.Title className='mb-2'>Card Title</Card.Title>
        <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque minima vitae laboriosam praesentium sequi autem.</Card.Text>
        <Button>Learn more</Button>
       </Card.Body>
    </Card>
  )
}

export default React_Bootstrap