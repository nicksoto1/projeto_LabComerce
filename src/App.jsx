import React from 'react';
import jobList from "./data/jobs.json";
import  Card from './components/Card/index'
import * as S from './styles'
import Filters from './components/Filters/index'

class App extends React.Component {
 state = {
jobs: jobList,
query: "",
minPrice: "",
maxPrice: "",
sortingParameter: "nome",
order: 1,
 }

 updateQuery = (ev) => {
  this.setState({
    query: ev.target.value,
  });
};

updateMinPrice = (ev) => {
  this.setState({
    minPrice: ev.target.value,
  });
};

updateMaxPrice = (ev) => {
  this.setState({
    maxPrice: ev.target.value,
  });
};

updateSortingParameter = (ev) => {
  this.setState({
    sortingParameter: ev.target.value,
  });
};

updateOrder = (ev) => {
  this.setState({
    order: ev.target.value,
  });
};


   render(){
  return (
<>


    <Filters
          query={this.state.query}
          updateQuery={this.updateQuery}
          updateMinPrice={this.updateMinPrice}
          updateMaxPrice={this.updateMaxPrice}
          updateSortingParameter={this.updateSortingParameter}
          updateOrder={this.updateOrder}
          minPrice={this.state.minPrice}
          maxPrice={this.state.maxPrice}
          sortingParameter={this.state.sortingParameter}
          order={this.state.order}
        />

        <S.ListContainer>
        {this.state.jobs
          .filter((job) => {
            return (
              job.nome
                .toLowerCase()
                .includes(this.state.query.toLowerCase())
            );
          })
          .filter((job) => {
            return (
              this.state.minPrice === "" || job.preco >= this.state.minPrice
            );
          })
          .filter((job) => {
            return (
              this.state.maxPrice === "" || job.preco <= this.state.maxPrice
            );
          })
          .sort((currentJob, nextJob) => {
            switch (this.state.sortingParameter) {
              case "nome":
                return (
                  this.state.order *
                  currentJob.nome.localeCompare(nextJob.nome)
                );
             
              default:
                return this.state.order * (currentJob.preco - nextJob.preco);
            }
          })
          .map((job) => {
            return <Card key={job.id} job={job}  />;
          })
          
          }
         
      </S.ListContainer>


















</>
    );
  }
}

export default App;