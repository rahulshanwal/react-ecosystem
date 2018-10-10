import React from "react";
import Table from "../../components/core/Table/Table";
import TableRow from "../../components/core/Table/TableRow/TableRow";
import TableColumn from "../../components/core/Table/TableColumn/TableColumn";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectCharacters } from './selector';
import { fetchCharacters } from './actions';

class CharactersList extends React.PureComponent {

  componentDidMount() {
    this.props.onComponentMount();
    console.log("list data loading");
  }

  render() {
    console.log(this.props);
    return (<Table headers={['Name', 'Gender', 'House', 'Occupation']}>

      {
        this.props.items.map((item,i)=> {
          return (<tbody><TableRow>
            <TableColumn key={i}>{item.name}</TableColumn>
            <TableColumn key={i}>{item.gender}</TableColumn>
            <TableColumn key={i}>{item.house}</TableColumn>
            <TableColumn key={i}>{item.occupation}</TableColumn>
          </TableRow></tbody>)
        })
      }

    </Table>)
  }
}

export const mapStateToProps = createStructuredSelector({
  items: makeSelectCharacters(),
});

export const mapDispatchToProps = dispatch => ({
  onComponentMount() {
    dispatch(fetchCharacters());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CharactersList);
