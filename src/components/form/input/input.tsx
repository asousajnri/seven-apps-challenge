import React from 'react';
import { Search, X } from 'react-feather';

import { useViewContext } from '../../../contexts/view';

import { StyledInput, InputWrapper } from './input-styles';

type InputProps = {
  name: string;
  label?: string;
  inputType?: string;
  inputRef?: React.MutableRefObject<HTMLInputElement | null>;
  placeholder?: string;
};

const Input = ({
  name,
  label,
  inputType,
  inputRef,
  placeholder,
}: InputProps) => {
  const {
    setIsFiredSearch,
    isFiredSearch,
    data,
    setUsers,
  } = useViewContext();

  const handleCleanSearch = () => {
    setIsFiredSearch(false);
    setUsers(data);
    if (inputRef && inputRef.current) inputRef.current.value = '';
  };

  return (
    <StyledInput>
      {label && <label htmlFor={name}>{label}</label>}
      <InputWrapper>
        <Search color="#248cd3" />
        <input
          ref={inputRef}
          type={inputType || 'text'}
          name={name}
          id={name}
          placeholder={placeholder}
        />
        {isFiredSearch && <button onClick={handleCleanSearch}><X color="#248cd3" /></button>}
      </InputWrapper>
    </StyledInput>
  );
};

export default Input;
