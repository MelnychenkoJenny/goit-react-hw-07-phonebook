import { formattedNumber } from 'components/calc/numberFormatted';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/operations';
import { ContactsList, ContactsItem, ButtonDelete } from './Contacts.styled';

export const Contacts = ({ contacts }) => {
  const dispatch = useDispatch();

  return (
    <ContactsList>
      {contacts.map(({ id, name, number }) => (
        <ContactsItem key={id}>
          <p>{name}</p>
          <p>{formattedNumber(number)}</p>
          <ButtonDelete onClick={() => dispatch(deleteContacts(id))}>
            Видалити
          </ButtonDelete>
        </ContactsItem>
      ))}
    </ContactsList>
  );
};
