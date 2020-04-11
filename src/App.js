import React, { Component } from 'react';
import Person from './Components/Person/Person';
import Header from './Components/Header/header';
import Modal from './Components/Modal/modal';
import { state } from './JsonData';
class App extends Component {
  state = state;

  personClickedHandler = (id, activityCurrentUser) => {
    this.setState({ clickedId : id, activityCurrentUser : activityCurrentUser, modal: true })
  }
  closeModalHandler = () => {
    this.setState({modal : false})
  }
  render() {
    let personData = this.state.members.map(memberObj => {
      return (
        <Person
          key={memberObj.id}
          real_name={memberObj.real_name}
          clicked={() => this.personClickedHandler(memberObj.id, memberObj.activity_periods)} />
      )
    })
    return (
      <div>
        <Header />
        {personData}
        <Modal id= {this.state.clickedId} 
        showModal={this.state.modal}
        currentActivity = {this.state.activityCurrentUser}
         closeModal = {this.closeModalHandler}
         />
      </div>
    )
  }
}

export default App;
