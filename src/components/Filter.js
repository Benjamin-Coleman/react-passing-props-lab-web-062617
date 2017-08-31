import React, { Component } from 'react';

// class Filter extends Component {
//   constructor() {
//     super();

//     // this.state = {
//     //   filters: []
//     // };
//   }



//   render() {
//     return (
//       <select onChange={this.props.handleChange} defaultValue='all'>
//         <option value='all'>All</option>
//         {this.props.filters.map(filter =>
//           <option key={filter} value={filter}>{filter}</option>
//         )}
//       </select>
//     );
//   }
// }

const Filter = (props) => <select onChange={props.handleChange} defaultValue='all'>
        <option value='all'>All</option>
        {props.filters.map(filter =>
          <option key={filter} value={filter}>{filter}</option>
        )}
      </select>

Filter.defaultProps = {
  filters: [],
  handleChange: ''
}

export default Filter;
