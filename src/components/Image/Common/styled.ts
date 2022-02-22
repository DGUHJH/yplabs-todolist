import styled from 'styled-components';
import { ImageType } from 'types/common';

export const Root = styled.img<ImageType>`
  width: ${(props) => props.width};
  height: ${(props) => props.height ?? 'auto'};
  margin-top: ${(props) => props.marginTop ?? 0}px;
  margin-bottom: ${(props) => props.marginBottom ?? 0}px;
  margin-left: ${(props) => props.marginLeft ?? 0}px;
  margin-right: ${(props) => props.marginRight ?? 0}px;
  border-radius: ${(props) => props.borderRadius}px;
  cursor: ${(props) => (props.onClick ? `pointer` : `default`)};
`;
