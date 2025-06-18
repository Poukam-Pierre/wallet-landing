'use client';
import { Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { LanguageSwapper } from '@xafpay/shared';
import { INavItem } from '@xafpay/types';
import Image from 'next/image';
import { NavItem } from './NavItem';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/navigation';
import { SideBar } from '@components';
import { useState } from 'react';
import MenuIcon from '@iconify/icons-fluent/line-horizontal-3-20-regular';
import { Icon } from '@iconify/react';

export default function Header() {
  const { formatMessage } = useIntl();
  const { push } = useRouter();

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const navItems: INavItem[] = [
    { label: formatMessage({ id: 'home' }), href: '/' },
    { label: formatMessage({ id: 'aboutUs' }), href: '/aboutUs' },
    { label: formatMessage({ id: 'howItWorksTitle' }), href: '/#howItWorks' },
    { label: formatMessage({ id: 'faq' }), href: '/#faq' },
  ];
  return (
    <>
      <SideBar
        open={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        navItems={navItems}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          padding: { desktop: '24px 117.5px', mobile: '24px 16px' },
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            padding: 0
          }}
        >
          <Box sx={{
            display: { desktop: 'block', mobile: 'none' },
            width: 166,
            height: 80,
            position: 'relative'
          }}>
            <Image
              src="/assets/logo.png"
              alt="Xafpay Logo"
              fill
            />
          </Box>
          <Box sx={{
            display: {
              desktop: 'none',
              mobile: 'block'
            },
          }}>
            <LanguageSwapper />
          </Box>
          <Box sx={{
            display: { desktop: 'none', mobile: 'block' },
            width: 80,
            height: 80,
            position: 'relative'
          }}>
            <Image
              src="/assets/mobile_logo.png"
              alt="Xafpay Logo"
              fill
            />
          </Box>
          <Box
            sx={{
              display: { desktop: 'grid', mobile: 'none' },
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
          <IconButton sx={{
            display: { laptop: 'none', mobile: 'block' }
          }}
            onClick={() => setIsSidebarOpen(true)}
          >
            <Icon icon={MenuIcon} color="#2F3A45" />
          </IconButton>
          <Box
            sx={{
              display: { desktop: 'grid', mobile: 'none' },
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
    </>
  );
}
