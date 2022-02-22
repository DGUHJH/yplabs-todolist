import { Close, Edit } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import CommonCheckbox from 'components/Checkbox/Common';
import CommonTypography from 'components/Typography/Common';
import { useState } from 'react';
import * as Styled from './styled';

type Props = {
  checked?: boolean;
  onCheckboxClick?: () => void;
  onUpdateTodoItem?: (value: string) => void;
  onDeleteButtonClick?: () => void;
  content?: string;
};

const TodoItem: React.FC<Props> = ({
  checked = false,
  onCheckboxClick = () => {},
  onUpdateTodoItem = () => {},
  onDeleteButtonClick = () => {},
  content = '테스트 데이터',
}) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [value, setValue] = useState<string>(content);

  return (
    <Styled.Root>
      <Styled.ContentContainer onClick={onCheckboxClick}>
        <CommonCheckbox checked={checked} />
        {editMode ? (
          <Styled.ContentTextField
            autoFocus={true}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={() => {
              setEditMode(false);
              setValue(content);
            }}
            onKeyPress={(e) => e.key === 'Enter' && onUpdateTodoItem(value)}
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
