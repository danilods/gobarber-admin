import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface CheckProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onChange(value: boolean): void;
}

const CheckBox: React.FC<CheckProps> = ({children, onChange,...rest}) => {

  return (
    <Container>
      <input
      type="checkbox"
      onChange={e => onChange(e.target.checked)}
      {...rest}
     />
     </Container>
  );
}

export default CheckBox;
