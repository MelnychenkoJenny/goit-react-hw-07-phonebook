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
import {
  selectContacts,
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { ToastContainer } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';
import { Error } from 'components/Error/Error';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <Container>
      <MainTitle>Телефонна книга</MainTitle>
      <ContactForm />
      {isLoading && !error && <Loader />}

      <ContactsContainer>
        {error ? (
          <Error>{error}</Error>
        ) : (
          <div>
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
          </div>
        )}
      </ContactsContainer>
      <ToastContainer />
    </Container>
  );
};
