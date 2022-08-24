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
  size = 'medium',
  toggleOptions, // reducer props
  addSelect, // reducer props
  selects, // reducer props
  setSelect // reducer props
}) {

  const sizeClass = {
    small: styles.select_small,
    medium: '',
    large: styles.select_large,
  }
  const defaultSelectObj = {
    id: id,
    name: name,
    options: options,
    selectedOption: optionDefault,
    isOptionsOpen: false,
  }
  const select = selects.length > 0 ? selects.find(select => id === select.id) : defaultSelectObj;
  const currentSelect = undefined !== select ? select : defaultSelectObj;
  const isOptionsOpen = currentSelect.isOptionsOpen;
  const selectedOption = currentSelect.selectedOption;
  const selectedOptionLabel = currentSelect.options.find(option => option.value === selectedOption);

  useEffect(() => {
    addSelect(defaultSelectObj);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSelect = (evt) => {
    setSelect({selectId: evt.currentTarget.dataset.select, value: evt.currentTarget.dataset.value});
    handleChange(evt);
  }

  return (
    <div className={`${styles.container} ${sizeClass[size]}`}>
      <button
        type="button"
        name={name}
        id={id}
        aria-haspopup="listbox"
        aria-expanded={isOptionsOpen}
        className={`button func-button ${styles.select} ${isOptionsOpen ? styles.select_expanded : ""}`}
        onClick={(evt) => toggleOptions(evt.currentTarget.id)} >

        {selectedOptionLabel && selectedOptionLabel.label ? selectedOptionLabel.label : selectedOption}

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
            data-value={option.value}
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
  /** CPT - The select name */
  name: PropTypes.string.isRequired,
  /** CPT - The select id (must be unique) */
  id: PropTypes.string.isRequired,
  /** CPT - All select options */
  options: PropTypes.array.isRequired,
  /** CPT - The option displayed by default */
  optionDefault: PropTypes.any.isRequired,
  /** CPT - The handler function */
  handleChange: PropTypes.func.isRequired,
  /** CPT - The select size : small || large || medium || null */
  size: PropTypes.string.isRequired,
  toggleOptions: PropTypes.func.isRequired,
  addSelect: PropTypes.func.isRequired,
  selects: PropTypes.array.isRequired,
  setSelect: PropTypes.func.isRequired,
};

export default Select;