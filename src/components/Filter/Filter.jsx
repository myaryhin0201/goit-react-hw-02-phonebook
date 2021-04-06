import PropTypes from 'prop-types';
import useStyles from './FilterStyles';
const Filter = ({ value, onChange }) => {
  const classes = useStyles();
  return (
    <label className={classes.Filter}>
      <span> Find contact by name</span>
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};
Filter.defaultProps = {
  value: '',
};
Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
export default Filter;
