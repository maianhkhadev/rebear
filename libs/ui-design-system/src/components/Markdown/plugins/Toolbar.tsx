import { useCallback, useEffect, useState } from 'react';
import {
  IconBold01,
  IconItalic01,
  IconUnderline01,
  IconStrikethrough01,
  IconAlignLeft,
  IconAlignCenter,
  IconAlignRight,
} from 'rebear-icons';
import { ButtonIcon, ButtonVariant } from '../../Button';
import {
  $getSelection,
  $isRangeSelection,
  COMMAND_PRIORITY_LOW,
  FORMAT_ELEMENT_COMMAND,
  FORMAT_TEXT_COMMAND,
  SELECTION_CHANGE_COMMAND,
} from 'lexical';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { mergeRegister } from '@lexical/utils';

function Divider() {
  return <div className="divider" />;
}

export function Toolbar() {
  const [editor] = useLexicalComposerContext();
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);

  const $updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      setIsBold(selection.hasFormat('bold'));
      setIsItalic(selection.hasFormat('italic'));
      setIsUnderline(selection.hasFormat('underline'));
      setIsStrikethrough(selection.hasFormat('strikethrough'));
    }
  }, []);

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(
          () => {
            $updateToolbar();
          },
          { editor }
        );
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        (_payload, _newEditor) => {
          $updateToolbar();
          return false;
        },
        COMMAND_PRIORITY_LOW
      )
    );
  }, [editor, $updateToolbar]);

  const handleBold = () => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
  };

  const handleItalic = () => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic');
  };

  const handleUnderline = () => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline');
  };

  const handleSrikeThrough = () => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough');
  };

  const handleAlignLeft = () => {
    editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'left');
  };

  const handleAlignCenter = () => {
    editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'center');
  };

  const handleAlignRight = () => {
    editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'right');
  };

  return (
    <div className="toolbar">
      <ButtonIcon
        variant={isBold ? ButtonVariant.Primary : ButtonVariant.Secondary}
        icon={<IconBold01 />}
        onClick={handleBold}
      />

      <ButtonIcon
        variant={isItalic ? ButtonVariant.Primary : ButtonVariant.Secondary}
        icon={<IconItalic01 />}
        onClick={handleItalic}
      />

      <ButtonIcon
        variant={isUnderline ? ButtonVariant.Primary : ButtonVariant.Secondary}
        icon={<IconUnderline01 />}
        onClick={handleUnderline}
      />

      <ButtonIcon
        variant={
          isStrikethrough ? ButtonVariant.Primary : ButtonVariant.Secondary
        }
        icon={<IconStrikethrough01 />}
        onClick={handleSrikeThrough}
      />

      <Divider />

      <ButtonIcon
        variant={ButtonVariant.Secondary}
        icon={<IconAlignLeft />}
        onClick={handleAlignLeft}
      />

      <ButtonIcon
        variant={ButtonVariant.Secondary}
        icon={<IconAlignCenter />}
        onClick={handleAlignCenter}
      />

      <ButtonIcon
        variant={ButtonVariant.Secondary}
        icon={<IconAlignRight />}
        onClick={handleAlignRight}
      />
    </div>
  );
}

export default Toolbar;
