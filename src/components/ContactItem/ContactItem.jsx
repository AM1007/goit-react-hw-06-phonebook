import { useDispatch } from 'react-redux';
import { removeContacts } from 'redux/contacts/slice';
import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

export default function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <div className={s.div}>
      <span>
        {name}: {number}
      </span>
      <button
        className={s.button}
        type="submit"
        name={name}
        onClick={() => dispatch(removeContacts(id))}
      >
        Delete
      </button>
    </div>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
