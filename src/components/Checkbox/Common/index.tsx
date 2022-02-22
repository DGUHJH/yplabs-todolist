import { CheckboxType } from 'types/common';
import * as Styled from './styled';

const CommonCheckbox: React.FC<CheckboxType> = (props) => {
  return <Styled.Root {...props} />;
};

export default CommonCheckbox;
