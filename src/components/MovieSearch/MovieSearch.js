import React from 'react'
import * as actionTypes from '../../store/Search/searchActions'
import {connect} from "react-redux";

const movieSearch = props => (
    <div className="active-cyan-3 active-cyan-4">
      <input value={props.currParams} className="form-control" type="text" placeholder="Search" aria-label="Search" onChange={(e) => props.onParamsChanged(e.target.value)}/>
    </div>
);

const mapStateToProps = state => {
  return {
    currParams: state.searchParams
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onParamsChanged: (newParams) => dispatch({type: actionTypes.SEARCH_INPUT_CHANGED, currParams: newParams})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(movieSearch);


