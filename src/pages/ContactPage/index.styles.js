import styled from "styled-components";

export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  h1 {
    text-align: center;
    background-color: #0e2f35;
    color: white;
  }
`;

export const ContactContainer = styled.div`
  width: 400px;
  margin: auto;
  background-color: #0e2f35;
  color: white;
  padding: 20px;
  border-radius: 8px;
`;

export const ContactForm = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;

    div {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    label {
      font-weight: bold;
    }

    input,
    textarea {
      padding: 5px;
      max-width: 100%;
    }

    button {
      padding: 5px;
      background-color: #2b2a33;
      color: white;
      border: 1px solid #ddd;
      border-radius: 8px;
      cursor: pointer;
    }
  }
`;

export const ErrorMessage = styled.p`
  color: red;
`;

export const StyledButton = styled.button`
  background-color: #2b2a33;
`;
