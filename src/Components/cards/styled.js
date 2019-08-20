import styled from 'styled-components';

const fontSize = '20px';

export const Cards = styled.div`
border-radius: 15px;
@media screen and (max-width: 600px) {
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
    padding: 10px;
    text-align: center;
    color: white;
    background: #201D3E;
    width: 90%;
    height: 140px;
    margin-bottom: 20px;
    justify-content: center;
    margin: 10px auto 10px auto;
  }

  @media screen and (min-width: 600px) {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
    padding: 2px;
    text-align: center;
    color: white;
    background: #201D3E;
    height: 135px;
    width: 270px;
    margin-bottom: 20px;
  }
  
}`;

export const Name = styled.h3`
  font-size: ${fontSize};
  color: #3eecac;
`;

export const Description = styled.p`
  font-size: ${fontSize};
  color: #10b7e0;
`;
