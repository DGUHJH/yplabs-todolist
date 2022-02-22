import { Checkbox } from '@mui/material';
import styled from 'styled-components';
import { CheckboxType } from 'types/common';

export const Root = styled(Checkbox)<CheckboxType>`
  &&& {
    margin-top: ${(props) => props.marginTop ?? 0}px;
    margin-bottom: ${(props) => props.marginBottom ?? 0}px;
    margin-left: ${(props) => props.marginLeft ?? 0}px;
    margin-right: ${(props) => props.marginRight ?? 0}px;
  }
`;
