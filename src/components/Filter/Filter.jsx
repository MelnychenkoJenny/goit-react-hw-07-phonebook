import { InputGroup, Label, Input } from './Filter.styled';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

const filtrId = nanoid();
export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const changeFilter = event => {
    dispatch(setFilter(event.currentTarget.value.trim()));
  };
  return (
    <InputGroup>
      <Label htmlFor={filtrId}>Пошук контактів за іменем</Label>
      <Input
        type="text"
        name={filter}
        onChange={changeFilter}
        id={filtrId}
      />
    </InputGroup>
  );
};
