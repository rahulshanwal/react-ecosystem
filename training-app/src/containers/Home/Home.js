import React from "react";
import CharacterForm from "../CharacterForm/CharacterForm";
import Layout from "../../components/core/Layout/Layout2080";
import CharactersList from "../CharactersList/CharactersList";

class Home extends React.PureComponent {
  render() {
    return <Layout first={<CharacterForm />} second={<CharactersList/>}/>
  }

}

export default Home;
