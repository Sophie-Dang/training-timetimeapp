import PropTypes from 'prop-types';
import React from 'react';
import { useEffect } from 'react';
import styles from './Select.module.scss';

function Select({
  name,
  id,
  options,
  optionDefault,
  handleChange,
  toggleOptions, // reducer props
  addSelect, // reducer props
  selects, // reducer props
  setSelect // reducer props
}) {

  const defaultSelectObj = {
    id: id,
    name: name,
    options: options,
    selectedOption: optionDefault,
    isOptionsOpen: false,
  }
  const currentSelect = selects.length > 0 ? selects.find(select => id === select.id) : defaultSelectObj;
  const isOptionsOpen = currentSelect.isOptionsOpen
  const selectedOption = currentSelect.selectedOption;

  useEffect(() => {
    addSelect(defaultSelectObj);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSelect = (evt) => {
    setSelect({selectId: evt.currentTarget.dataset.select, value: evt.currentTarget.value});
    handleChange(evt);
  }

  return (
    <div className={styles.container}>
      <button
        type="button"
        name={name}
        id={id}
        aria-haspopup="listbox"
        aria-expanded={isOptionsOpen}
        className={`button func-button t-base-xsmall ${styles.select} ${isOptionsOpen ? styles.select_expanded : ""}`}
        onClick={(evt) => toggleOptions(evt.currentTarget.id)} >

        {selectedOption}

      </button>
      <ul
        className={`${styles.options_list} ${isOptionsOpen ? styles.options_show : ''}`}
        role="listbox"
        aria-activedescendant={selectedOption}
        tabIndex={-1} >

        {options.map((option, index) => 
          <li 
            id={`option-${id}-${option.value}`}
            value={option.value}
            key={`option-${id}-${index}`}
            data-select={id}
            role="option"
            aria-selected={selectedOption === index}
            tabIndex={0}
            onClick={(evt) => handleSelect(evt)} >

            {option.label ? option.label : option.value}

          </li>
        )}

      </ul>
    </div>
  )
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  optionDefault: PropTypes.any.isRequired,
  handleChange: PropTypes.func.isRequired,
  toggleOptions: PropTypes.func.isRequired,
  addSelect: PropTypes.func.isRequired,
  selects: PropTypes.array.isRequired,
  setSelect: PropTypes.func.isRequired,
};

export default Select;