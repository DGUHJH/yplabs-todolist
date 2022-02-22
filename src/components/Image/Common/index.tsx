import { ImageType } from 'types/common';
import * as Styled from './styled';

const CommonImage: React.FC<ImageType> = (props) => {
  return <Styled.Root {...props} />;
};

export default CommonImage;
