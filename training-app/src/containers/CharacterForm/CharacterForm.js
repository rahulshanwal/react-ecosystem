import React from "react";
import CharacterFormComponent from "../../components/CharacterForm/CharacterForm";
import { createStructuredSelector } from 'reselect';
import { makeSelectCharacters } from './selector';
import { addCharacters } from './actions';
import { connect } from 'react-redux';

class CharacterForm extends React.PureComponent {
  render() {
    return <CharacterFormComponent onsubmit={this.props.onsubmit}/>
  }
}

export const mapStateToProps = createStructuredSelector({
  items: makeSelectCharacters(),
});

export const mapDispatchToProps = dispatch => ({
  onsubmit(character) {
    dispatch(addCharacters(character));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterForm);
