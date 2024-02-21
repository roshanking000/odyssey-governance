import Head from 'next/head';
import cx from 'classnames';
import Image from 'next/image';

import { Ellipse1, Ellipse2 } from 'assets';

import styles from './styles.module.scss';

type Props = {
  children: React.ReactNode,
  header?: React.ReactNode,
  footer?: React.ReactNode,
  title?: string,
  meta?: {
    name: string,
    content: string,
  },
  link?: {
    rel: string,
    href: string,
  },
  className?: string,
  mainClassName?: string,
};

const Layout: React.FC<Props> = ({
  children, title, meta, link, className, mainClassName, header, footer,
}) => (
  <>
    <Head>
      {title &&
        (<title>{title}</title>)}
      {meta &&
        (<meta name={meta.name} content={meta.content} />)}
      {link &&
        (<link rel={link.rel} href={link.href} />)}
    </Head>
    <div 
      className={cx(
        styles.page_container, 
        className,
      )}
    >
      <div className={styles.ellipse1}>
        <Image src={Ellipse1} alt="ellipse1" width={425} height={619} className={styles.imageEclipse} />
      </div>
      <div className={styles.ellipse2}>
        <Image src={Ellipse2} alt="ellipse2" className={styles.imageEclipse2} />
      </div>
      {header}
      <main className={cx(
        styles.page__main, 
        mainClassName,
      )}
      >
        {children}
      </main>
      {footer}
    </div>
  </>
);

export default Layout;
