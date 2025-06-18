import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { QRCodeSVG } from 'qrcode.react';
import { useIntl } from 'react-intl';

export function ContactUsSection() {
  const { formatMessage } = useIntl();
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { mobile: 'none', tablet: '1fr auto' },
        justifyContent: 'center',
        maxWidth: '70rem',
        justifySelf: 'center',
        columnGap: 5,
        padding: { mobile: '0 16px', tablet: 0 },
        textAlign: { mobile: 'center', tablet: 'inherit' },
        marginTop: 7
      }}
    >
      <Box
        sx={{
          display: 'grid',
          rowGap: 4,
          height: 'fit-content',
          alignSelf: 'center',
          pb: { mobile: 4, tablet: 0 }
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: 'Space Grotesk',
            fontSize: { mobile: '36px', tablet: '48px' },
            lineHeight: '120%',
          }}
        >
          {formatMessage({ id: 'remittanceSolutionOnHand' })}
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontSize: {
              mobile: '24px',
              tablet: '32px'
            },
          }}
        >
          {formatMessage({ id: 'qrCodeEngagement' })}
        </Typography>
        <Box sx={{
          display: {
            mobile: 'none',
            tablet: 'block'
          }
        }}>
          <QRCodeSVG
            value={`${process.env.NEXT_PUBLIC_APP_URL}`}
            style={{
              width: '13rem',
              height: '13rem',
            }}
          />
        </Box>
        <Box sx={{
          display: {
            mobile: 'block',
            tablet: 'none'
          },
          justifySelf: 'center'
        }}>
          <QRCodeSVG
            value={`${process.env.NEXT_PUBLIC_APP_URL}`}
            style={{
              width: '9rem',
              height: '9rem',
            }}
          />
        </Box>
      </Box>
      <Image
        src="/assets/phoneIllustration.png"
        alt="phone illustration"
        width={400}
        height={600}
        style={{
          objectFit: 'contain',
        }}
      />
    </Box>
  );
}
