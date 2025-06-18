'use client';

import { SectionTitle } from '@components';
import { Box, Typography } from '@mui/material';
import { useIntl } from 'react-intl';

export default function AboutUs() {
  const { formatMessage, formatDate } = useIntl();
  const style = {
    fontFamily: 'Space Grotesk',
    fontSize: '1.1rem',
  };
  return (
    <Box
      maxWidth="laptop"
      sx={{
        display: 'grid',
        justifySelf: 'center',
        padding: { desktop: '0 0 48px 0', mobile: '0 16px 48px 16px' },
      }}
    >
      <SectionTitle color="#0E103A">
        {formatMessage({ id: 'aboutUs' })}
      </SectionTitle>
      <Typography
        variant='p2r'
        justifySelf='center'
        lineHeight={2}
      >
        {formatMessage({ id: 'updatedAs' })}{' '}
        {formatDate(new Date('2025-06-16'), {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </Typography>
      <Box sx={{
        display: 'grid',
        rowGap: 2,
        paddingTop: 5
      }}>
        <Box>
          <Typography
            variant='p1r'
            sx={style}
          >
            {formatMessage({ id: 'launchedDate' })}
          </Typography>
          <Typography
            variant='p1r'
            sx={{
              ...style,
              fontWeight: 'bold',
            }}
          >
            {formatMessage({ id: 'xafpayLLC' })}
          </Typography>
          <Typography
            variant='p1r'
            sx={style}
          >
            {formatMessage({ id: 'aboutUsDescriptionP1' })}
          </Typography>
          <Typography
            variant='p1r'
            sx={{
              ...style,
              fontWeight: 'bold',
            }}
          >
            {formatMessage({ id: 'aboutUsDescriptionP1Highlighted' })}
          </Typography>
          <Typography
            variant='p1r'
            sx={style}
          >
            {formatMessage({ id: 'and' })}
          </Typography>
          <Typography
            variant='p1r'
            sx={{
              ...style,
              fontWeight: 'bold',
            }}
          >
            {formatMessage({ id: 'accessible' })}
          </Typography>
          <Typography
            variant='p1r'
            sx={style}
          >
            {formatMessage({ id: 'aboutUsDescriptionP2' })}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant='p1r'
            sx={style}
          >
            {formatMessage({ id: 'everyYear' })}
          </Typography>
          <Typography
            variant='p1r'
            sx={{
              ...style,
              fontWeight: 'bold',
            }}
          >
            {formatMessage({ id: 'balanceRate' })}
          </Typography>
          <Typography
            variant='p1r'
            sx={style}
          >
            {formatMessage({ id: 'aboutUsDescriptionP3' })}
          </Typography>
          <Typography
            variant='p1r'
            sx={{
              ...style,
              fontWeight: 'bold',
            }}
          >
            {formatMessage({ id: 'aboutUsDescriptionP3Highlighted' })}
          </Typography>
          <Typography
            variant='p1r'
            sx={style}
          >
            {formatMessage({ id: 'aboutUsDescriptionP4' })}
          </Typography>
        </Box>
      </Box>
      <Box sx={{
        paddingTop: 2,
        display: 'grid',
        rowGap: 2
      }}>
        <Box>
          <Typography
            variant='p1r'
            sx={style}
          >
            {formatMessage({ id: 'at' })}
          </Typography>
          <Typography
            variant='p1r'
            sx={{
              ...style,
              fontWeight: 'bold',
            }}
          >
            {formatMessage({ id: 'xafpay' }).toUpperCase()}
          </Typography>
          <Typography
            variant='p1r'
            sx={style}
          >
            {formatMessage({ id: 'ourMissionDescriptionP1' })}
          </Typography>
          <Typography
            variant='p1r'
            sx={{
              ...style,
              fontWeight: 'bold',
            }}
          >
            {formatMessage({ id: 'ourMissionDescriptionP1Highlighted' })}
          </Typography>
          <Typography
            variant='p1r'
            sx={style}
          >
            {formatMessage({ id: 'and' })}
          </Typography>
          <Typography
            variant='p1r'
            sx={{
              ...style,
              fontWeight: 'bold',
            }}
          >
            {formatMessage({ id: 'userFriendly' })}
          </Typography>
          <Typography
            variant='p1r'
            sx={style}
          >
            {formatMessage({ id: 'ourMissionDescriptionP2' })}
          </Typography>
          <Typography
            variant='p1r'
            sx={style}
          >
            {formatMessage({ id: 'ourMissionEngagement' })}
          </Typography>
        </Box>
      </Box>
      <Box sx={{
        paddingTop: '40px',
        display: 'grid',
        rowGap: 2
      }}>
        <Typography
          variant='h3'
          sx={{
            fontFamily: 'Space Grotesk',
            lineHeight: '120%',
          }}
        >
          {formatMessage({ id: 'joinUs' })}
        </Typography>
        <Box>
          <Typography
            variant='p1r'
            sx={style}
          >
            {formatMessage({ id: 'joinUsDescriptionP1' })}
          </Typography>
          <Typography
            variant='p1r'
            sx={{
              ...style,
              fontWeight: 'bold',
            }}
          >
            {formatMessage({ id: 'xafpayLLC' })}
          </Typography>
          <Typography
            variant='p1r'
            sx={style}
          >
            {formatMessage({ id: 'joinUsDescriptionP2' })}
          </Typography>

        </Box>
      </Box>
    </Box>
  );
}
