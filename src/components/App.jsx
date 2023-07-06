
import { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";

import Filter from "./Filter/Filter";
import ContactList from "./ListContact/ContatcList";



export class App extends Component  {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  
  }
  handleChangeFilter = e => {
    this.setState({ filter:e.currentTarget.value });
  };

  handleAddContact = (newContact) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact]
    }));
  
  }

  render(){ 
    const { contacts, filter } = this.state;
    const newFilter =contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

    return (
<>
<h2>Phonebook</h2>
<ContactForm addContact ={this.handleAddContact}/>
<h2>Contacts </h2>
<Filter onChangeFilter={this.handleChangeFilter} filter={filter} />
<ContactList contacts={newFilter}/>
    </>
    );
  }
  
};