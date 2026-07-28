import {Tabs, type TabsOwnProps} from "@mui/material";
import {styled} from "@mui/system";
import {clsx} from "clsx";
import styles from './tabs.module.scss';
import type {ReactNode} from "react";

const StyledTabs = styled(Tabs)(() => ({
  '&.MuiTabs-root': {
    width: 'max-content',
    backgroundColor: "#ececec",
    borderRadius: '12px',

    '.MuiTabs-list':{
      position: 'relative',
      zIndex: 2
    },

    '.MuiButtonBase-root': {
      '&.Mui-selected': {
        color: 'black'
      }
    },

    '.MuiTabs-indicator': {
      backgroundColor: "#c6c6c6",
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
    <StyledTabs className={clsx(className, styles.tabs)} {...other}>
      {children}
    </StyledTabs>
  );
};

export default CTabs;