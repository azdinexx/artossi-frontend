import styled from 'styled-components';

const Wrapper = styled.div`
  min-width: 100%;
  min-height: 100vh;
  overflow: hidden;

  background: url('https://images.unsplash.com/photo-1622205623691-5343267f2eac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80')
    no-repeat;
  background-size: 100%;
  background-position-y: bottom;

  display: grid;
  grid-template-columns: 1fr 1fr;

  .row {
    margin: auto;

    h1 {
      font-size: 6rem;
      font-weight: 200;
      color: white;
      text-shadow: 4px 8px 6px rgba(25, 25, 25, 0.981);
    }
    h2 {
      color: #f2f2f2;
    }
    ul {
      display: flex;
      flex-direction: column;
      list-style: none;
      gap: 1rem;
      backdrop-filter: blur(3px) brightness(1.1);
      li {
        border: 1px solid #eeeeee54;
        display: grid;
        padding: 1rem;
        h3 {
          max-width: 20ch;
        }
        div {
          display: flex;
          align-items: center;
          color: white;
          span {
            font-size: 3rem;
          }
        }
        .items {
          color: #b9b9b9;
          display: block;
          justify-self: start;
          padding-left: 1rem;
          padding-bottom: 0.2rem;
        }
      }
    }
  }
`;
function Hero() {
  return <Wrapper></Wrapper>;
}

export default Hero;
