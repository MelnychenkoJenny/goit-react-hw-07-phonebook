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
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';

import { ToastContainer } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';
import { Error } from 'components/Error/Error';
import { useFetchContactsQuery } from 'redux/RTK-query/contactsApi';

export const App = () => {
  const {
    data: contacts = [],
    isFetching: isLoading,
    error,
  } = useFetchContactsQuery();

  const filter = useSelector(selectFilter);
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);
  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getFilteredContacts();

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
