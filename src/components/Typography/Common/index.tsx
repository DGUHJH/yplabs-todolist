import { FontType } from 'types/common';
import * as Styled from './styled';

const CommonTypography: React.FC<FontType> = (props) => {
  return <Styled.Root {...props}>{props.children}</Styled.Root>;
};

export default CommonTypography;
