import { DividerType } from 'types/common';
import * as Styled from './styled';

const CommonDivider: React.FC<DividerType> = (props) => {
  return <Styled.Root {...props} />;
};

export default CommonDivider;
