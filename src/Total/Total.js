import React, { Component } from 'react';

export default class Total extends Component {

    render() {
        // console.log(this.props);

        const totalDollars = Object.keys(this.props.selected)
          .reduce((acc, curr) => acc + this.props.selected[curr].cost, 0);    
        // console.log(totalDollars);

      return (
        <div className="summary__total">
        <div className="summary__total__label">Your Price: </div>
        <div className="summary__total__value">
            {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
                      .format(totalDollars)}
            </div>
        </div>
      );
    }
  }