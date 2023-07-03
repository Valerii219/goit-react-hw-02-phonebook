import { nanoid } from "nanoid";
import { Component } from "react"


export class App extends Component  {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
  }
  handleChange = (e)=>{    
    this.setState({
      name:e.target.value,
      
    })
  
  }

  handleChangeNumber = (e)=>{
    this.setState({
      number:e.target.value,
      
    })
  }
  handleChangeFilter = (e)=>{
    this.setState({
      filter:e.target.value,
      
    })
  }

  handleSubmit = (e)=>{
    e.preventDefault()
    const {name, number} = this.state;
    if(name === "" || number === ""){return

    }

    const newContact = {
      id:nanoid(),
      name:name,
      number:number,
    }

    this.setState((prevState)=>{
      return{
        contacts:[...prevState.contacts, newContact],
        name:"",
        number:"",
      }

       })
      
  }

  
  render(){
    const normalizedFilter = this.state.filter.toLowerCase();
    const newFilter =this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    return (
      <>
      <div
        // style={{
        //   height: '100vh',
        //   display: 'flex',
        //   justifyContent: 'center',
        //   alignItems: 'center',
        //   fontSize: 40,
        //   color: '#010101'
        // }}
      >
      </div>
      <div>
    
<form action="" onSubmit={this.handleSubmit}>
<h2>Phonebook</h2>
    <input
    type="text"
    name="name"
    pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    required
    onChange={this.handleChange}
    value={this.state.name}
/>
<h2>Number</h2>
<input type="tel"
  name="number"
  pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
  onChange={this.handleChangeNumber}
    value={this.state.number}>

  </input>
<button> Add contact</button>
</form>

<h2>Contacts</h2>

<label>Find contacts by name </label>
<input type="text" 
name="filter"
onChange={this.handleChangeFilter}
value={this.state.filter}
/>
<ul>
  {newFilter.map(({ id, name, number }) => (
    <li key={id}>
      {name}: {number}
    </li>
  ))}
</ul>

</div>
    </>
    );
  }
  
};
