import styled from 'styled-components';

const NewsletterContainer = styled.div`
  padding: 4rem;
  width: fit-content;
  margin-inline: auto;
  h1 {
    max-width: 35ch;
    font-size: 2rem;
    text-align: center;
    margin-block: 1.5rem;
    font-weight: 500;
  }

  h3 {
    font-weight: 500;
    font-size: 1rem;
    color: #888;
  }

  p {
    font-weight: 500;
    color: #888;
  }
`;

const InputContainer = styled.div`
  width: fit-content;
  margin-inline: auto;
  display: flex;
  padding-block: 2rem;

  input {
    width: 320px;

    background-color: #eee;
    transition: all 600ms cubic-bezier(0.82, 0.075, 1, 0.165);
  }
  input:focus {
    width: 350px;
    padding: 1rem;
    transition: all 600ms cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  button {
    background-color: #222;
    color: white;
    border: none;
    border-radius: 10px;
    padding: 0.75rem 1rem;
    margin-left: 1rem;
  }
`;

function NewsLetter() {
  return (
    <NewsletterContainer>
      <h1>
        Subscribe to our newsletter to get updates to our latest collections
      </h1>
      <h3>
        get 20% off on your first order just by subscribing to our newsletter
      </h3>
      <InputContainer>
        <input type='email' placeholder='enter your email' />
        <button>Subscribe</button>
      </InputContainer>

      <p>You are free to Unsubscribe anytime</p>
    </NewsletterContainer>
  );
}

export default NewsLetter;
