import { routes } from 'appConstants';
// import { useRouter } from 'next/router';
import { useMemo } from 'react';

export const useNavItems = () => 
// const router = useRouter();
// const { pathname } = router;

  useMemo(() => (
    [
      {
        title: 'Home',
        href: routes.home.root,
        isActive: true,
      },
      {
        title: 'Explorer',
        href: 'https://testnet.odysseyscan.com/',
      },
      // {
      //   title: 'Blockchain',
      //   isActive: ['/txs'].includes(pathname),
      //   subitems: [
      //     {
      //       title: 'Transactions',
      //       href: '/txs',
      //       isActive: pathname === '/txs',
      //     },
      //     {
      //       title: 'Blocks',
      //       href: '/blocks',
      //       isActive: pathname === '/blocks',
      //     },
      //     {
      //       title: 'Top accounts',
      //       href: '/accounts',
      //       isActive: pathname === '/accounts',
      //     },
      //   ],
      // },
      // {
      //   title: 'Validators',
      //   isActive: pathname === '/validators',
      //   subitems: [
      //     {
      //       title: 'Transactions',
      //       href: '/txs',
      //       isActive: pathname === '/txs',
      //     },
      //     {
      //       title: 'Blocks',
      //       href: '/blocks',
      //       isActive: pathname === '/blocks',
      //     },
      //     {
      //       title: 'Top accounts',
      //       href: '/accounts',
      //       isActive: pathname === '/accounts',
      //     },
      //   ],
      // },
      // {
      //   title: 'Tokens',
      //   isActive: pathname === '/tokens',
      //   subitems: [
      //     {
      //       title: 'Transactions',
      //       href: '/txs',
      //       isActive: pathname === '/txs',
      //     },
      //     {
      //       title: 'Blocks',
      //       href: '/blocks',
      //       isActive: pathname === '/blocks',
      //     },
      //     {
      //       title: 'Top accounts',
      //       href: '/accounts',
      //       isActive: pathname === '/accounts',
      //     },
      //   ],
      // },
      // {
      //   title: 'Resources',
      //   isActive: pathname === '/resources',
      //   subitems: [
      //     {
      //       title: 'Transactions',
      //       href: '/txs',
      //       isActive: pathname === '/txs',
      //     },
      //     {
      //       title: 'Blocks',
      //       href: '/blocks',
      //       isActive: pathname === '/blocks',
      //     },
      //     {
      //       title: 'Top accounts',
      //       href: '/accounts',
      //       isActive: pathname === '/accounts',
      //     },
      //   ],
      // },
      // {
      //   title: 'More',
      //   isActive: pathname === '/more',
      //   subitems: [
      //     {
      //       title: 'Transactions',
      //       href: '/txs',
      //       isActive: pathname === '/txs',
      //     },
      //     {
      //       title: 'Blocks',
      //       href: '/blocks',
      //       isActive: pathname === '/blocks',
      //     },
      //     {
      //       title: 'Top accounts',
      //       href: '/accounts',
      //       isActive: pathname === '/accounts',
      //     },
      //   ],
      // },
    ]
  ), []);
