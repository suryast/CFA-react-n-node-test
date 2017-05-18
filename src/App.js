import React, { Component } from 'react';
import './App.css';

import Axios from 'axios';
import IngredientList from './IngredientList'
import IngredientForm from './IngredientForm'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      ingredients: []
    }
  };

  componentWillMount(){
    console.log('componentWillMount');
  };

  getIngredientList(){
    const URL = 'http://yamagucci.herokuapp.com/api/ingredients?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNob3VoZWkueWFtYXVjaGlAbGl2ZS5jb20iLCJpYXQiOjE0OTQ5OTMxMTV9.G0ctQghRRAqaZiGSZyT5Oi-YXUUfb3UsYQpsmMaVA0k'
    Axios.get(URL)
      .then((response) => {
        console.log(response.data);
        this.setState({ingredients: response.data})
      })
      .catch(function(error){
        console.log(error)
      });
  }

  componentDidMount(){
    console.log('componentDidMount');
    this.getIngredientList();
  };

  render() {
    console.log('render');
    return (
      <div>
        <h1>Recipes Frontend</h1>
        <IngredientForm getIngredientList={() => this.getIngredientList()}/>
        {this.state.ingredients.length < 1 ? <p>Loading..</p> :
          <IngredientList ingredients={this.state.ingredients} />
        }
      </div>
    );
  };
};

export default App;
