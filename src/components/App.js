import React from 'react';

import FruitBasket from './FruitBasket';

// const App = () => <FruitBasket />;

class App extends React.Component {
	state = {
		filters: [],
		fruit: [],
		currentFilter: null
	}

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ selectedFilter: event.target.value });
  }

   componentWillMount = () => {
    this.fetchFilters();
    this.fetchItems()
  }

  fetchItems = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({ fruit: [...items] }));
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

	render() {
		return (
			<FruitBasket 
			handleFilterChange={this.handleFilterChange} 
			filters={this.state.filters} 
			items={this.state.fruit} 
			selectedFilter={this.state.currentFilter}
			fetchFilters={this.fetchFilters}
			fetchItems={this.fetchItems}
			/>

			)
	}
}

export default App;
