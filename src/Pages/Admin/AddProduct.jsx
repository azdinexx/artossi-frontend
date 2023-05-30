import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  margin-top: 6rem;
  box-sizing: border-box;

  .container {
    border: 1px solid #888;
    padding: 2rem;
    form {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding: 1rem;
      .forminput {
        font-size: 1.3rem;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        gap: 5rem;
        input {
          font-family: 'Poppins';
          font-size: 1.3rem;
          justify-self: end;
        }
        textarea {
          resize: none;
          justify-self: end;
          grid-column: span 4;
        }
      }
    }
    margin: 6rem;
  }
`;
function AddProduct() {
  return (
    <Wrapper>
      <h1>AddProduct</h1>
      <div className='container'>
        <form action=''>
          <div className='forminput'>
            <label htmlFor='title'> Title</label>
            <input id='title' type='text' placeholder='title' />
          </div>
          <div className='forminput'>
            <label htmlFor='description'> Description</label>
            <textarea name='description' id='description'></textarea>
          </div>
          <div className='forminput'>
            <label htmlFor='title'> Title</label>
            <input id='title' type='text' placeholder='title' />
          </div>
          <div className='forminput'>
            <label htmlFor='title'> Title</label>
            <input id='title' type='text' placeholder='title' />
          </div>
          <div className='forminput'>
            <label htmlFor='title'> Title</label>
            <input id='title' type='text' placeholder='title' />
          </div>
        </form>
      </div>
    </Wrapper>
  );
}

export default AddProduct;
