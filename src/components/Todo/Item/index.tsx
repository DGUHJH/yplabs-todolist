import { Close, Done, Edit } from '@mui/icons-material';
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

  const contentLineList = content.split('\n');

  return (
    <Styled.Root>
      <Styled.ContentContainer onClick={onCheckboxClick}>
        <Styled.ContentCheckboxWrapper>
          <CommonCheckbox
            checked={checked}
            onClick={() => setChecked((prev) => !prev)}
          />
        </Styled.ContentCheckboxWrapper>
        {editMode ? (
          <Styled.ContentTextField
            autoFocus={true}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        ) : (
          <Styled.ContentTypoContainer
            onClick={() => (window.location.href = `/todo/${id}`)}
          >
            {contentLineList.map(
              (contentLine, index) =>
                index < 5 && (
                  <CommonTypography
                    fontFamily="NotoSansKR-Regular"
                    color={checked ? '#999' : '#111'}
                    textDecoration={checked ? 'line-through' : 'none'}
                    fontSize={14}
                    key={`todo_item_content_line_${index}`}
                  >
                    {contentLine}
                  </CommonTypography>
                )
            )}
            {contentLineList.length > 5 && (
              <CommonTypography
                fontFamily="NotoSansKR-Regular"
                color={checked ? '#999' : '#111'}
                textDecoration={checked ? 'line-through' : 'none'}
                fontSize={14}
              >
                ...
              </CommonTypography>
            )}
          </Styled.ContentTypoContainer>
        )}
      </Styled.ContentContainer>
      <Styled.MenuContainer>
        {!checked && !editMode && (
          <IconButton onClick={() => setEditMode((prev) => !prev)}>
            <Edit />
          </IconButton>
        )}
        {editMode && (
          <IconButton
            onClick={() => {
              onUpdateTodoItem(value.replaceAll('<br>', '\r\n'));
              setEditMode(false);
            }}
          >
            <Done />
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
