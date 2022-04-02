import React from "react";
import * as S from "./styles";

class Card extends React.Component {
  render() {
    return (
      <S.CardContainer >
         
      
        <S.CardFooter>
        <img src= {this.props.job.imagem} alt={this.props.job.descricao} />
        <h2 title={this.props.job.nome}>
         <u>{this.props.job.nome} </u>
        </h2>
          <span>&#128176; R$ {this.props.job.preco}</span>
         
        </S.CardFooter>
      </S.CardContainer>
    );
  }
}

export default Card;
