import {Tabs, type TabsOwnProps} from "@mui/material";
import {styled} from "@mui/system";
import type {ReactNode} from "react";

const StyledTabs = styled(Tabs)(() => ({
  '&.MuiTabs-root': {
    width: 'max-content',
    backgroundColor: "var(--light-gray)",
    borderRadius: '12px',

    '.MuiTabs-list':{
      position: 'relative',
      zIndex: 2
    },

    '.MuiButtonBase-root': {
      color: 'var(--text-light)',

      '&.Mui-selected': {
        color: 'var(--text)'
      }
    },

    '.MuiTabs-indicator': {
      backgroundColor: "var(--middle-gray)",
      height: '100%'
    }
  }
}))

interface TabsProps extends TabsOwnProps {
  className?: string
  children?: ReactNode
}

const CTabs = (props: TabsProps) => {
  const {
    className,
    children,
    ...other
  } = props;

  return (
    <StyledTabs className={className} {...other}>
      {children}
    </StyledTabs>
  );
};

export default CTabs;