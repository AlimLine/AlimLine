import {Tabs, type TabsOwnProps} from "@mui/material";
import {styled} from "@mui/system";
import {clsx} from "clsx";
import styles from './tabs.module.scss';
import type {ReactNode} from "react";

const StyledTabs = styled(Tabs)(() => ({
  '&.style': {
    fontSize: '12px'
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