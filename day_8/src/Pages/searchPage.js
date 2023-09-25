import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import sportsProducts from '../Components/productsList.json'; // Import your product data
import { useSelector,useDispatch } from 'react-redux';
import { selectUser } from '../redux/userSlice';
import { toast } from 'react-toastify';
import { addToCart } from '../redux/cartSlice';
import { ToastContainer } from 'react-toastify';
const SearchPage = () => {
  const dispatch = useDispatch();
  const searchTerm = localStorage.getItem('search');

  const filteredProducts = sportsProducts.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );
 const Email=useSelector(selectUser)
  const addTocart = (pid) => {
    const product = sportsProducts.find((p) => p.pid === pid);
    if (Email.email) {
      dispatch(addToCart(product)); // Dispatch addToCart with the product object
      toast.success('Added to cart');
    } else {
      toast.error('Login to add item to cart!!');
    }
  };

  return (
    <Container>
      <Row>
        {filteredProducts.map((product) => (
          <Col md={12} key={product.pid}>
            <Card className="product1-card mb-4">
              <Card.Img variant="top" alt={product.productName} />
              <Card.Body>
                <Card.Title>{product.productName}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: ${product.productPrice.toFixed(2)}</Card.Text>
                <button className="shopnow-btn" onClick={() => addTocart(product.pid)}>
                  Shop now
                </button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <ToastContainer
          position="bottom-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
    </Container>
  );
};

export default SearchPage;
