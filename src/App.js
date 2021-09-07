import { Component } from "react";
import shortid from "shortid";
import Form from "./components/Form/Form";
import ContactsList from "./components/ContactsList/ContactsList";
import ContactsFilter from "./components/ContactsFilter/ContactsFilter";

import css from "./App.module.css";

class Phonebook extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = (profile) => {
    const contact = {
      id: shortid.generate(),
      name: profile.name,
      number: profile.number,
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  onChangeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();
    const visibleFilter = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <div className={css.app}>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact} contacts={contacts} />

        <h2>Contacts</h2>
        <ContactsFilter value={filter} onChange={this.onChangeFilter} />

        <ContactsList
          contacts={visibleFilter}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default Phonebook;
