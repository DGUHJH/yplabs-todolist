import styled from 'styled-components';
import { DotType } from 'types/common';

export const Root = styled.div<DotType>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height ?? props.width}px;
  background: ${(props) => props.background};
  border-radius: ${(props) => props.width}px;
  margin-top: ${(props) => props.marginTop ?? 0}px;
  margin-bottom: ${(props) => props.marginBottom ?? 0}px;
  margin-left: ${(props) => props.marginLeft ?? 0}px;
  margin-right: ${(props) => props.marginRight ?? 0}px;
`;
