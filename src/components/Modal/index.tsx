import React, { FC } from 'react';
import RModal, { Props as RModalProps } from 'react-modal';
import cx from 'classnames';
import { Typography } from 'components';
import styles from './styles.module.scss';

type Props = {
  children?: React.ReactNode
  isOpen: boolean
  onClose: () => void
  title?: string
  overlayClassName?: string
  bodyClassName?: string
  classNameHeader?: string
} & RModalProps;

export const Modal: FC<Props> = ({
  children,
  isOpen,
  onClose,
  title,
  overlayClassName,
  bodyClassName,
  appElement,
  classNameHeader,
}) => (
  <RModal
    isOpen={isOpen}
    onRequestClose={onClose}
    appElement={appElement}
    className={cx(styles.modal_body, bodyClassName)}
    overlayClassName={cx(styles.modal_overlay, overlayClassName)}
    bodyOpenClassName={cx(styles.body)}
    ariaHideApp={false}
  >
    <div className={styles.modal_container}>
      <div className={cx(styles.modal_container_header, classNameHeader)}>
        {title && (
        <Typography type="p" className={styles.modal_title}>
          {title}
        </Typography>
        )}
      </div>
      <div className={styles.modal_content}>
        {children}
      </div>
    </div>
  </RModal>
);
