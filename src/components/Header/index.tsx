// import { useState } from 'react';
import Image from 'next/image';
// import cx from 'classnames';
import Link from 'next/link';

// import { Input, RoundIconLink } from 'components';
import { 
  // Avatar, 
  DioneProtocolIcon,
} from 'assets';
// import { useNavItems } from './hooks';

import styles from './styles.module.scss';
// import { NavigationMenu } from './NavigationMenu';
// import { ThemeSwitch } from './ThemeSwitch';

const Header = () => 
// const navItems = useNavItems();
// const [value, setValue] = useState('');

  (
    <header className={styles.header_container}>
      <Link href="/" className={styles.header_logo}>
        <Image src={DioneProtocolIcon} alt="logo" width={48} height={48} />
      </Link>

      {/* <Input 
        classNameContainer={styles.search__container} 
        classNameInput={styles.search__input} 
        value={value} 
        onChangeValue={setValue} 
        placeholder="Search by Address"
        isSearch
      /> */}

      {/* <div className={styles.navigation}>
        {navItems.map(({
          title, href, isActive, 
          // subitems, 
        }) => (
          // subitems ? (
          //   <NavigationMenu
          //     key={`link_${title}`}
          //     title={title}
          //     subitems={subitems}
          //     isActive={isActive}
          //   />
          // ) : (
          <Link
            href={href}
            key={`link_${title}`}
            legacyBehavior
          > 
            <a
              href={href}
              className={cx(styles.link, {
                [styles.active]: isActive,
              })}
            >
              {title}
            </a>
          </Link>
          // )
        ))}
      </div> */}

      {/* <ThemeSwitch /> */}

      {/* <RoundIconLink
        href="https://api.testnet.odysseyscan.com/auth/auth0"
        label="Sign in"
        iconSrc={Avatar}
      /> */}
    </header>
  );
export { Header };
