import React, { Component } from 'react';

// class FilteredFruitList extends Component {
//   constructor(props) {
//     super(props);

//     // this.state = {
//     //   items: []
//     // };
//   }

//     componentWillMount() {
//       this.props.fetchItems()
//   }

  

//   render() {
//     const list = !this.props.filter ? this.props.items : this.props.items.filter(i => i.fruit_type === this.props.filter);

//     return (
//       <ul className="fruit-list">
//         {list.map((item, index) => <li key={index}>{item.char}</li>)}
//       </ul>
//     );
//   }
// }

const FilteredFruitList = (props) => {
    const list = !props.filter ? props.fruit : props.fruit.filter(i => i.fruit_type === props.filter);
    console.log(list)
    return (
      <ul className="fruit-list">
        {list.map((item, index) => <li key={index}>{item.char}</li>)}
      </ul>
    );
}

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: null,
}

export default FilteredFruitList;
