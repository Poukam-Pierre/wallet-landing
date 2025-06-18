'use client';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Divider, IconButton, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { QRCodeSVG } from 'qrcode.react';
import { JSX } from 'react';
import { useIntl } from 'react-intl';

interface ISocialIcon {
  icon: JSX.Element;
  link: string;
}
export default function Footer() {
  const { formatMessage } = useIntl();
  const socialIcon: ISocialIcon[] = [
    {
      icon: (
        <TwitterIcon
          sx={{
            color: 'white',
            fontSize: 'inherit',
          }}
        />
      ),
      link: 'https://twitter.com/xafpay',
    },
    {
      icon: (
        <FacebookIcon
          sx={{
            color: 'white',
            fontSize: 'inherit',
          }}
        />
      ),
      link: 'https://www.facebook.com/xafpay',
    },
    {
      icon: (
        <InstagramIcon
          sx={{
            color: 'white',
            fontSize: 'inherit',
          }}
        />
      ),
      link: 'https://www.instagram.com/xafpay',
    },
    {
      icon: (
        <LinkedInIcon
          sx={{
            color: 'white',
            fontSize: 'inherit',
          }}
        />
      ),
      link: 'https://www.linkedin.com/company/xafpay',
    },
  ];

  const resources: { title: string; link: string }[] = [
    {
      title: formatMessage({ id: 'privacyPolicy' }),
      link: `/termsAndcondition`,
    },
    {
      title: formatMessage({ id: 'termsOfService' }),
      link: `/termsAndcondition`,
    },
  ];


  return (
    <Box
      sx={{
        display: 'grid',
        padding: { mobile: '32px 16px', desktop: '62px 118px' },
        background:
          'linear-gradient(to right, rgba(15, 93, 190, 1), rgba(7, 43, 88, 1))',
        color: 'white',
        rowGap: { mobile: '15px', desktop: '28px' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: { desktop: 'center', mobile: 'baseline' },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fonstFamily: 'Space Grotesk',
            fontSize: { desktop: '48px', mobile: '32px' },
            lineHeight: '120%',
            fontWeight: 700,
          }}
        >
          {formatMessage({ id: 'remittanceOnYourHands' })}
        </Typography>
        <Box sx={{
          display: { mobile: 'none', desktop: 'grid' },
          justifyItems: 'center',
          rowGap: 1
        }}>
          <QRCodeSVG value={`${process.env.NEXT_PUBLIC_APP_URL}`} />
          <Typography variant='l2r'>
            {formatMessage({ id: 'accessOurAppHere' })}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { desktop: '1fr 1fr', mobile: 'none' },
          marginTop: { mobile: 0, desktop: '32px' },
          marginBottom: { mobile: 0, desktop: '32px' },
          rowGap: { mobile: '15px', desktop: '0px' },
        }}
      >
        <Image
          src="/assets/logo.png"
          alt="Xafpay Logo"
          width={170}
          height={85}
        />
        <Box
          sx={{
            display: 'grid',
            textAlign: { mobile: 'left', desktop: 'right' },
            height: { mobile: 'fit-content', desktop: '100%' }
          }}
        >
          <Typography variant="h3" marginBottom={1}>
            {formatMessage({ id: 'getInTouch' })}
          </Typography>
          <Box sx={{ display: 'grid', rowGap: 1 }}>
            <Typography
              variant="l2r"
              component="a"
              href="mailto:contact@xafpay.com"
            >
              {formatMessage({ id: 'email' })}: contact@xafpay.com
            </Typography>
            <Typography variant="l2r">
              {formatMessage({ id: 'address' })}:
              1001 S. Main ST, STE 600, Kalispell MT 59901, USA
            </Typography>
          </Box>
        </Box>

      </Box>
      <Divider />
      <Box
        sx={{
          display: 'grid',
          rowGap: { mobile: '15px', desktop: 4 },
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 500 }}>
          XAFPAY LLC is a Fintech company incorporated in the USA under Montana SOS file
          No.C1446980-16217942. Registered with FinCEN as a money service business
          with registration number 31000273428168
        </Typography>
        <Divider />
        <Box sx={{
          display: 'grid',
          alignItems: 'center',
          rowGap: 2
        }}>
          <Box sx={{
            display: { desktop: 'grid', mobile: 'ruby' },
            gridAutoFlow: { desktop: 'column', mobile: 'row' },
            columnGap: 2,
            justifyItems: 'space-between',
          }}>
            <Typography
              variant="p2r">
              © {2023} XAFPAY LLC. ALL RIGHTS RESERVED
            </Typography>
            <Box sx={{
              display: 'grid',
              gridAutoFlow: 'column',
              alignItems: 'center',
              justifyContent: 'end',
              columnGap: 2,
            }}>
              {resources.map(({ title, link }, index) => (
                <Typography
                  variant="l2r"
                  component={Link}
                  href={link}
                  key={`${title}-${index}`}
                  sx={{ cursor: 'pointer' }}
                >
                  {title}
                </Typography>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, auto)',
              width: 'fit-content',
              columnGap: 2,
              justifySelf: { mobile: 'start', desktop: 'end' },
            }}
          >
            {socialIcon.map(({ icon, link }, index) => (
              <IconButton
                size="large"
                key={index}
                href={link}
                target="_blank"
                sx={{
                  padding: 0,
                }}
              >
                {icon}
              </IconButton>
            ))}
          </Box>

        </Box>
      </Box>
    </Box>
  );
}
