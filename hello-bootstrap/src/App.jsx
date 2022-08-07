import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <img
              width={64}
              height={64}
              className="mr-3"
              src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"
                alt="Gambar Sate"
            />
            <h4>Makanan Sate</h4>
            <p>Sate adalah makanan yang terbuat dari daging.</p>
          </Col>
          <Col>
            <img
              width={64}
              height={64}
              className="mr-3"
              src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"
              alt="Gambar Sate"
            />
            <h4>Makanan Sate</h4>
            <p>Sate adalah makanan yang terbuat dari daging.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              width={64}
              height={64}
              className="mr-3"
              src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"
              alt="Gambar Sate"
            />
            <h4>Makanan Sate</h4>
            <p>Sate adalah makanan yang terbuat dari daging.</p>
          </Col>
          <Col>
            <img
              width={64}
              height={64}
              className="mr-3"
              src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"
              alt="Gambar Sate"
            />
            <h4>Makanan Sate</h4>
            <p>Sate adalah makanan yang dibuat dari daging.</p>
          </Col>
          <Col>Col 3 of 3</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
