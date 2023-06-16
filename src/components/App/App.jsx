import {
  Container,
  MainTitle,
  Title,
  ContactsContainer,
  AmountContacts,
  EmptyText,
} from './App.styled';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { Contacts } from 'components/Contacts';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { ToastContainer } from 'react-toastify';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
const dispatch = useDispatch();
useEffect(()=>{
dispatch(fetchContacts())
}, [dispatch])


  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  
  const visibleContacts = getVisibleContacts();

  return (
    <Container>
      <MainTitle>Телефонна книга</MainTitle>
      <ContactForm />
      <ContactsContainer>
        <Title>Мої контакти</Title>
        <AmountContacts>
          Загальна кількість контактів: {contacts.length}
        </AmountContacts>
        <Filter />
        {visibleContacts.length ? (
          <Contacts contacts={visibleContacts} />
        ) : (
          <EmptyText>Не знайдено жодного контакту</EmptyText>
        )}
      </ContactsContainer>
      <ToastContainer />
    </Container>
  );
};
