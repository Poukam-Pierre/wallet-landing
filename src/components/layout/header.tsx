'use client';
import { Box, Button, Toolbar, Typography } from '@mui/material';
import { LanguageSwapper } from '@xafpay/shared';
import { INavItem } from '@xafpay/types';
import Image from 'next/image';
import { NavItem } from './NavItem';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/navigation';

export default function Header() {
  const { formatMessage } = useIntl();
  const { push } = useRouter();

  const navItems: INavItem[] = [
    { label: formatMessage({ id: 'home' }), href: '/' },
    { label: formatMessage({ id: 'aboutUs' }), href: '/aboutUs' },
    { label: formatMessage({ id: 'howItWorksTitle' }), href: '/#howItWorks' },
    { label: 'FAQ', href: '/#faq' },
  ];
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        height: '128px',
        padding: '24px 117.5px',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <Image
          src="/assets/logo.png"
          alt="Xafpay Logo"
          width={166}
          height={80}
        />
        <Box
          sx={{
            display: 'grid',
            columnGap: 3,
            gridAutoFlow: 'column',
          }}
        >
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              navItem={item}
              handleLink={() => push(item.href)}
            />
          ))}
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridAutoFlow: 'column',
            columnGap: 2,
            alignItems: 'center',
          }}
        >
          <LanguageSwapper />
          <Button
            variant="outlined"
            size='medium'
            onClick={() =>
              window.open(
                `${process.env.NEXT_PUBLIC_APP_URL}/login`,
                '_blank'
              )
            }
          >
            <Typography variant="p2r" fontFamily="Poppins">
              {formatMessage({ id: 'login' })}
            </Typography>
          </Button>
          <Button
            variant="contained"
            size='medium'
            onClick={() =>
              window.open(
                `${process.env.NEXT_PUBLIC_APP_URL}/register`,
                '_blank'
              )
            }
          >
            <Typography variant="p2r" fontFamily="Poppins">
              {formatMessage({ id: 'register' })}
            </Typography>
          </Button>
        </Box>
      </Toolbar>
    </Box>
  );
}
