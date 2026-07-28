import type {ReactNode} from "react";
import styles from './page-wrapper.module.scss'
import {clsx} from "clsx";

interface PageContainerProps {
  children?: ReactNode
  className?: string
  containerSize?: number
}

const PageWrapper = (props: PageContainerProps) => {
  const {
    children,
    className,
    containerSize = 1170,
    ...other
  } = props;

  return (
    <div {...other} className={clsx(className, styles.page_container)} style={{maxWidth: `${containerSize}px`}}>
      {children}
    </div>
  );
};

export default PageWrapper;