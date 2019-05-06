import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './week-view.module.scss';

class WeekView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: true
    };
  }

  componentDidMount = () => {
    console.log(this.props.match.params.slug);
  };

  render() {
    return (
      <div>
        <h1>Test WeekView</h1>
        <div>
          <Link
            to={`/groups/edit/${this.props.match.params.slug}`}
            style={{ color: 'black' }}
          >
            EDIT
          </Link>
        </div>
      </div>
    );
  }
}

export default WeekView;
