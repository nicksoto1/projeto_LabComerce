import styled from "styled-components";

export const CardContainer = styled.div`
  display: grid;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0px 0px;
  background-color: lavender;
  margin: 5px;
  padding: 0 15px;
  border-radius: 5px;

  img {
    width: 30%;
  }
`;

export const CardFooter = styled.h4`
  grid-area: area1;
`;
