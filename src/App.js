import React, { Component } from 'react';
import './App.css';
import Accordion from 'react-bootstrap/lib/Accordion';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Modal from 'react-bootstrap/lib/Modal';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';


class App extends Component {
state ={
  recipes: [
    {recipeName: 'korma', ingredients:['chicken','yogurt','onion']},
    {recipeName: 'Birayni', ingredients:['chicken','yogurt','onion','tomato']},
    {recipeName: 'sabzi', ingredients:['Aalo','gobi','onion']}
  ],
  showAdd: false,
   newestRecipe: {recipeName:"", ingredients:[]}
}
// delete a recipe
deteleRecipe(index){
  let recipes = this.state.recipes.slice();
  recipes.splice(index, 1);
  this.setState({recipes});
}
//Update updateNewRecipe
updateNewRecipe(recipeName, ingredients){
  this.setState({newestRecipe:{recipeName: recipeName, ingredients: ingredients}});


}

//Closes a modal
close =() => {
  if(this.state.showAdd){
    this.setState({showAdd:false})
  }
}
// Open a modal
open  = (state) => {
  this.setState({[state]:true});

}
  render() {
    const {recipes} = this.state;
    return (
      <div className="App container">
      <Accordion>
        {recipes.map((recipe,index) => (
          <Panel header={recipe.recipeName} eventKey={index} key={index}>
        <ol>
        {recipe.ingredients.map((item)=>(
          <li key={item}>{item}</li>

        ))}
        </ol>
        <ButtonToolbar>
        <Button bsStyle="danger" onClick={(event) => this.deteleRecipe(index)}>Delete Recipe</Button>
        <Button bsStyle="default">Edit Recipe</Button>
        </ButtonToolbar>
          </Panel>

        ))}
      </Accordion>
<Modal show={this.state.showAdd} onHide={this.close}>
<Modal.Header closeButton>
  <Modal.Title>Add Recipe</Modal.Title>
    <Modal.Body>
      <FormGroup controlId='formBasicText'>
        <ControlLabel>Recipe Name</ControlLabel>
        <FormControl
        type="text"
        value={newestRecipe.recipeName}
        placeholder='Enter Recipe Name'
        onChange = {(event) => this.updateNewRecipe(event.target.value, newestRecipe.ingredients)}

        ></FormControl>
      </FormGroup>
        <FormGroup controlId='formControlsTextarea'>
        <ControlLabel>Recipe Name</ControlLabel>
        <FormControl
        type="textarea"
        value = {newestRecipe.recipeName}
        placeholder='Enter Ingredients (Seprate By Commas)'
        onChange = {(event) => this.updateNewRecipe(newestRecipe.recipeName, event.target.value.split(","))}
        value ={newestRecipe.ingredients}

        ></FormControl>
      </FormGroup>
    </Modal.Body>
</Modal.Header>

</Modal>
      <button bsStyle="primary" onClick={(event) => this.open("showAdd")}>
      Add Recipe
      </button>
        
      </div>
    );
  }
}

export default App;
