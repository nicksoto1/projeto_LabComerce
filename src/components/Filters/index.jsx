import React from 'react';
import * as S from './styles'


class Filters extends React.Component {
	render(){
	return (
		<S.FiltersContainer>
		<input type="text"
		placeholder='Pesquisa'
		value={this.props.query}
		onChange={this.props.updateQuery}
		/>
			<input type="number"
		placeholder='Preço Mínimo'
		value={this.props.minPrice}
		onChange={this.props.updateMinPrice}
		/>
			<input type="number"
		placeholder='Preço Máximo'
		value={this.props.maxPrice}
		onChange={this.props.updateMaxPrice}
		/>

<span>
<label htmlFor="sort">Ordenação: </label>

<select 
name="sort" 
value={this.props.sortingParameter}
	onChange={this.props.updateSortingParameter}
>
<option value="nome">Nome</option>
<option value="preco">Preço</option>
</select>
</span>


<select name="order" 
value={this.props.order}
onChange={this.props.updateOrder}
>
<option value={1}>Crescente</option>
<option value={-1}>Decrescente</option>
</select>



		</S.FiltersContainer>
   );
  }
}

export default Filters;