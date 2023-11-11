import { useDispatch, useSelector } from 'react-redux';
import { BtnDeleteContact, List, ListItem } from './ContactList.styled';
import { delContact } from 'redux/contactsSlice';
import { selectFilters, selectContacts } from 'redux/selectors';

export const ContactList = () => {
  const listContacts = useSelector(selectContacts);
  const filter = useSelector(selectFilters);

  const dispatch = useDispatch();

  const getFilterList = () => {
    const lowerWord = filter.toLowerCase();
    return listContacts.filter(contact => {
      return contact.name.toLowerCase().includes(lowerWord);
    });
  };
  const filterList = getFilterList();

  // const deleteContact = idContact =>
  //   dispatch(delContact(idContact))
  //     );

  return (
    <List>
      {filterList?.map(({ id, name, number }) => (
        <ListItem key={id}>
          <p>{name}</p>
          <p>{number}</p>
          <BtnDeleteContact onClick={() => dispatch(delContact(id))}>
            Delete
          </BtnDeleteContact>
        </ListItem>
      ))}
    </List>
  );
};
