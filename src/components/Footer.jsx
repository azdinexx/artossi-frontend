import styled from 'styled-components';

const FooterContainer = styled.div`
  background-color: #eee;
  p {
    padding: 2rem;
    text-align: center;
    color: #8e8e8e;
    margin: 0;
  }
`;

const GridContainer = styled.div`
  padding-block: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  color: #686868;
  border-bottom: 1px solid #8e8e8e6a;
  max-width: 1280px;
  margin: 0 auto;
  .logo-section {
    grid-column: span 3;
  }

  nav {
    grid-column: span 5;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    ul {
      list-style: none;

      h4 {
        margin-bottom: 1rem;
      }
      li {
        padding-block: 0.3rem;
        font-weight: 500;
      }
    }
  }

  .payment-methods {
    h4 {
      margin-bottom: 1rem;
    }
  }
`;
function Footer() {
  return (
    <FooterContainer>
      <GridContainer>
        <div className='logo-section'>Artossi</div>
        <nav>
          <ul>
            <h4>Shop</h4>
            <li>All Collections</li>
            <li>Winter Edition</li>
            <li>Discount</li>
          </ul>
          <ul>
            <h4>Company</h4>
            <li>About Us</li>
            <li>Contact</li>
            <li>Affiliates</li>
          </ul>
          <ul>
            <h4>Support</h4>
            <li>FAQ</li>
            <li>Cookie Policy</li>
            <li>Terms of use</li>
          </ul>
        </nav>
        <div className='payment-methods'>
          <h4>Payment Methods</h4>
          <img
            src='https://artossi.com/wp-content/uploads/2018/08/payment_methods.png'
            alt=''
          />
        </div>
      </GridContainer>
      <p>Copyright &copy;2023 ARTOSSI,All Rights Reserved</p>
    </FooterContainer>
  );
}

export default Footer;
