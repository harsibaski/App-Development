import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <header>
        <Container>
          <Row>
            <Col>
              <h1>Welcome to SportsZ</h1>
              <p>Your one-stop shop for sports equipment and apparel.</p>
              <Button variant="secondary">Shop Now</Button>
            </Col>
          </Row>
        </Container>
      </header>

      <section>
        <Container>
          <h2>Featured Products</h2>
        </Container>
      </section>

      <footer>
        <Container>
          <p>&copy; 2023 SportsZ</p>
        </Container>
      </footer>
    </div>
  );
};

export default Home;