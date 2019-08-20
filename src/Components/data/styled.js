import styled from 'styled-components';

export const FlexCard = styled.div`
  @media screen and (min-width: 600px) {
    display: flex;
    justify-content: space-evenly;
  }
  ,
  @media screen and (max-width: 600px) {
    .flex-card {
      flex-direction: column;
      display: flex;
      justify-content: center;
    }
  }
`;

export const SubTitle = styled.h2`
  color: white;
`;

export const Title = styled.h1`
  color: #10b7e0;
  margin-bottom: 80px;
`;
