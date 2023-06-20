import { formattedNumber } from 'components/calc/numberFormatted';
import { useDeleteContactsMutation } from 'redux/RTK-query/contactsApi';
import { ContactsList, ContactsItem, ButtonDelete } from './Contacts.styled';

export const Contacts = ({ contacts }) => {
  // const dispatch = useDispatch();
  const [deleteContact] =  useDeleteContactsMutation()
  return (
    <ContactsList>
      {contacts.map(({ id, name, number }) => (
        <ContactsItem key={id}>
          <p>{name}</p>
          <p>{formattedNumber(number)}</p>
          <ButtonDelete onClick={() => deleteContact(id)}>
            Видалити
          </ButtonDelete>
        </ContactsItem>
      ))}
    </ContactsList>
  );
};
