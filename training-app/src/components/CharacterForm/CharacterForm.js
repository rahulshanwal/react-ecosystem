import React from "react";
import Button from "../core/Button/Button";
import FieldSection from "../core/FieldSection/FieldSection";
import "./CharacterForm.css";

class CharacterForm extends React.Component {

  constructor() {
    super();
    this.state = {
      name: '',
      house: '',
      gender: '',
      occupation: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler (event) {
    event.preventDefault();
    this.props.onsubmit({character:{
      name: this.state.name,
      house: this.state.house,
      gender: this.state.gender,
      occupation: this.state.occupation,
    }});
  }

  onChange(e) {
    this.setState({...this.state, ...{[e.target.id] : e.target.value}});
  }

  render() {
    return (<form className="character-form">
      <FieldSection field="name" label="Name" value={this.state.name} onChange={this.onChange}/>
      <FieldSection field="house" label="House" value={this.state.house} onChange={this.onChange}/>
      <FieldSection field="gender" label="Gender" value={this.state.gender} onChange={this.onChange}/>
      <FieldSection field="occupation" label="Occupation" value={this.state.occupation} onChange={this.onChange}/>
      <div>
        <Button type="submit" onClick={this.onClickHandler}>Add member</Button>
      </div>
    </form>
    )
  }
}

export default CharacterForm;
