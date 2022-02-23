import { Close, Edit } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import CommonCheckbox from 'components/Checkbox/Common';
import CommonTypography from 'components/Typography/Common';
import { useState } from 'react';
import * as Styled from './styled';

type Props = {
  id: number;
  onCheckboxClick?: () => void;
  onUpdateTodoItem?: (value: string) => void;
  onDeleteButtonClick?: () => void;
  content?: string;
};

const TodoItem: React.FC<Props> = ({
  id,
  onCheckboxClick = () => {},
  onUpdateTodoItem = () => {},
  onDeleteButtonClick = () => {},
  content = '테스트 데이터',
}) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [value, setValue] = useState<string>(content);
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <Styled.Root>
      <Styled.ContentContainer onClick={onCheckboxClick}>
        <CommonCheckbox
          checked={checked}
          onClick={() => setChecked((prev) => !prev)}
        />
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
          <CommonTypography
            fontFamily="NotoSansKR-Regular"
            color={checked ? '#999' : '#111'}
            textDecoration={checked ? 'line-through' : 'none'}
            fontSize={14}
            onClick={() => (window.location.href = `/todo/${id}`)}
          >
            {content}
          </CommonTypography>
        )}
      </Styled.ContentContainer>
      <Styled.MenuContainer>
        {!checked && (
          <IconButton onClick={() => setEditMode((prev) => !prev)}>
            <Edit />
          </IconButton>
        )}
        <IconButton onClick={onDeleteButtonClick}>
          <Close />
        </IconButton>
      </Styled.MenuContainer>
    </Styled.Root>
  );
};

export default TodoItem;
