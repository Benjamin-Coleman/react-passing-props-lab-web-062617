import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

// class FruitBasket extends Component {
//   constructor() {
//     super();

//     // this.state = {
//     //   filters: [],
//     //   selectedFilter: null
//     // };
//   }

//   componentWillMount() {
//     this.props.fetchFilters();
//   }

//   render() {
//     return (
//       <div className="fruit-basket">
//         <Filter handleChange={this.props.handleFilterChange} filters={this.props.filters}/>
//         <FilteredFruitList
//           filter={this.props.selectedFilter} items={this.props.items} fetchItems={this.props.fetchItems}/>
//       </div>
//     );
//   }
// }

const FruitBasket = (props) => {
    return (
      <div className="fruit-basket">
        <Filter items={props.items} handleChange={props.handleFilterChange} filters={props.filters}/>
        <FilteredFruitList
          filter={props.selectedFilter} fruit={props.fruit} fetchItems={props.fetchItems}/>
      </div>
    )
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: null
}

export default FruitBasket;
