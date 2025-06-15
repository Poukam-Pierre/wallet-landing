'use client';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Divider, IconButton, Typography } from '@mui/material';
import Image from 'next/image';
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
      link: `${process.env.NEXT_PUBLIC_APP_URL}/privacy-policy`,
    },
    {
      title: formatMessage({ id: 'termsOfService' }),
      link: `${process.env.NEXT_PUBLIC_APP_URL}/terms-of-service`,
    },
  ];


  return (
    <Box
      sx={{
        display: 'grid',
        padding: '62px 118px',
        background:
          'linear-gradient(to right, rgba(15, 93, 190, 1), rgba(7, 43, 88, 1))',
        color: 'white',
        rowGap: '28px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fonstFamily: 'Space Grotesk',
            fontSize: '48px',
            lineHeight: '120%',
            fontWeight: 700,
          }}
        >
          {formatMessage({ id: 'remittanceOnYourHands' })}
        </Typography>
        <Box sx={{
          display: 'grid',
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
          gridTemplateColumns: '1fr 1fr 1fr',
          marginTop: '32px',
          marginBottom: '32px',
        }}
      >
        <Box
          sx={{
            display: 'grid',
            rowGap: 0,
            textAlign: 'left',
          }}
        >
          <Image
            src="/assets/logo.png"
            alt="Xafpay Logo"
            width={166}
            height={80}
          />
          <Typography variant="caption" color="white" fontFamily="Poppins">
            @xafpay -{2023}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'grid',
            textAlign: 'center',
            alignContent: 'start',
          }}
        >
          <Typography variant="h3" marginBottom={1}>
            {formatMessage({ id: 'legal' })}
          </Typography>
          <Box sx={{ display: 'grid', rowGap: 1 }}>
            {resources.map(({ title, link }) => (
              <Typography variant="l2r" component="a" href={link} key={link}>
                {title}
              </Typography>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            display: 'grid',
            textAlign: 'right',
            alignContent: 'start',
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
          rowGap: 4,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 500 }}>
          XAFPAY LLC is a Fintech company incorporated in the USA under Montana SOS file
          No.C1446980-16217942. Registered with FinCEN as a money service business
          with registration number 31000273428168
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: 500 }}>
          {formatMessage({ id: 'ContactUsMessage' })}
        </Typography>
        <Box sx={{
          display: 'grid',
          justifyItems: 'center',
          alignItems: 'center',
          rowGap: 1
        }}>
          <Typography variant="p2r">
            © {2023} XAFPAY LLC. ALL RIGHTS RESERVED
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, auto)',
              width: 'fit-content',
              columnGap: 2,
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
