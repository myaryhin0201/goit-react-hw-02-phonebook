import { useState, useEffect } from 'react';
import shortid from 'shortid';

import ContactsList from '../ContactsList';
import ContactForm from '../ContactForm/';
import Filter from '../Filter';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56699' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12699' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79151' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-2612' },
];

const Phonebook = () => {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  const handleAddContact = (name, number) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };
    setContacts(prevState => [newContact, ...prevState]);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('contacts'));
    setContacts(data);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleDeleteContact = contactId => {
    setContacts(prevState => prevState.filter(({ id }) => id !== contactId));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };
  const normalizedFilter = filter.toLowerCase();

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm onSubmit={handleAddContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactsList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </>
  );
};
export default Phonebook;
