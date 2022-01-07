import React from 'react';
import { connect } from 'react-redux';
import * as API from '../services/handle-api';

class Title extends React.Component {
  componentDidMount() {
    const { getAPI } = this.props;
    getAPI();
  }

  render() {
    const { game } = this.props;
    return (
      <div className="flex flex-row flex-wrap items-center justify-center">
        {game.map((value, idex) => (
          <div key={idex}>{value}</div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  getAPI: () => dispatch(API.getAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Title);
