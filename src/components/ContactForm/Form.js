import { useState } from "react";
import { useAddContactMutation, useFetchContactsQuery } from "redux/contacts/contactsApi";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Centre } from './Form.styled.jsx'


const ContactForm = () => {
    const { data } = useFetchContactsQuery();
    const [addContact] = useAddContactMutation();

    const [name, setName] = useState('');
    const [number, setPhone] = useState('');

    const onAddNewContact = evt => {
        evt.preventDefault();
        if (data.find(
            contact => contact.name.toLowerCase() === name.toLowerCase()
        )
        ) { 
            alert(`${name} is already in contacts`);
        } else {
            reset();
            addContact({name, number});
        }
    };

    const reset = () => {
        setName("");
        setPhone("");
    };
    
    return (

        <div>
            <Form onSubmit={onAddNewContact}>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="tel"
                        name="name"
                        value={name}
                        placeholder="Enter name"
                        onChange={evt => setName(evt.target.value)}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Number</Form.Label>
                    <Form.Control
                        type="tel"
                        name="phone"
                        value={number}
                        placeholder="Enter number"
                        onChange={evt => setPhone(evt.target.value)}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </Form.Group>
                <Centre>
                <Button variant="primary" type="submit">
                    Add contact
                </Button>
                </Centre>
            </Form>
        </div>
    )
};
export default ContactForm;