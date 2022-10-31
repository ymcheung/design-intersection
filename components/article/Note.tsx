import { StyledPre } from './styled';
import { Divider } from '@elements/divider';

interface NoteProps {
  children?: React.ReactNode;
  withAsterisk?: boolean;
}

export default function Note({ children, withAsterisk }: NoteProps) {
  return (
    <StyledPre withAsterisk={withAsterisk}>
      {children}
      <Divider position="pre" />
    </StyledPre>
  );
};
