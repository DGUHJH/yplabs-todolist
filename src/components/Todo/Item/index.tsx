import { Close, Edit } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import CommonCheckbox from 'components/Checkbox/Common';
import CommonTypography from 'components/Typography/Common';
import { useState } from 'react';
import * as Styled from './styled';

type Props = {
  checked?: boolean;
  onCheckboxClick?: () => void;
  onChange?: (e: any) => void;
  onDeleteButtonClick?: () => void;
  content?: string;
};

const TodoItem: React.FC<Props> = ({
  checked = false,
  onCheckboxClick = () => {},
  onChange = () => {},
  onDeleteButtonClick = () => {},
  content = '테스트 데이터',
}) => {
  const [editMode, setEditMode] = useState<boolean>(false);

  return (
    <Styled.Root>
      <Styled.ContentContainer onClick={onCheckboxClick}>
        <CommonCheckbox checked={checked} />
        {editMode ? (
          <Styled.ContentTextField
            autoFocus={true}
            value={content}
            onChange={onChange}
            onBlur={() => setEditMode(false)}
          />
        ) : (
          <CommonTypography fontFamily="NotoSansKR-Regular" fontSize={14}>
            {content}
          </CommonTypography>
        )}
      </Styled.ContentContainer>
      <Styled.MenuContainer>
        <IconButton onClick={() => setEditMode((prev) => !prev)}>
          <Edit />
        </IconButton>
        <IconButton onClick={onDeleteButtonClick}>
          <Close />
        </IconButton>
      </Styled.MenuContainer>
    </Styled.Root>
  );
};

export default TodoItem;
