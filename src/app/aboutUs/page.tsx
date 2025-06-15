'use client';

import { SectionTitle } from '@components';
import { Box, Button, Divider, Typography } from '@mui/material';
import { useTheme } from '@xafpay/theme';
import { useIntl } from 'react-intl';

export default function AboutUs() {
  const { formatMessage } = useIntl();
  const theme = useTheme();
  const hightlightData = [
    {
      label: 'feesStat',
      description: formatMessage({ id: 'feesannualStat' }),
    },
    {
      label: '6-10%',
      description: formatMessage({ id: 'transferPercentage' }),
    },
  ];
  return (
    <Box
      maxWidth="laptop"
      sx={{
        display: 'grid',
        justifySelf: 'center',
      }}
    >
      <SectionTitle color="#0E103A">
        {formatMessage({ id: 'aboutUs' })}
      </SectionTitle>

      <Typography
        variant="p1r"
        sx={{
          fontSize: '1.2rem',
          padding: '20px 0',
          fontFamily: 'Poppins',
          textAlign: 'justify',
          lineHeight: 2,
        }}
      >
        {formatMessage({ id: 'aboutUsDescription' })}
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          columnGap: 5,
          justifySelf: 'center',
          color: 'white',
          fontFamily: 'Poppins',
          py: 5,
        }}
      >
        {hightlightData.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: 'grid',
              rowGap: 1,
              textAlign: 'center',
              padding: 2,
              backgroundColor: theme.palette.primary.main,
              width: 'fit-content',
              borderRadius: 2,
              boxShadow: '0px 14px 41px rgba(0, 0, 0, 0.25)',
            }}
          >
            <Typography variant="h2" fontWeight="bold">
              {item.label}
            </Typography>
            <Typography variant="p1r" fontWeight="bold" width="340px">
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          textAlign: 'justify',
          lineHeight: 2,
          py: 5,
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ fontWeight: 600 }}
        >
          {formatMessage({ id: 'ourMission' })}
        </Typography>
        <Divider sx={{ mb: 3 }} />
        <Typography
          variant="p1r"
          sx={{
            fontSize: '1.1rem',
            textAlign: 'justify',
            fontFamily: 'Poppins',
          }}
        >
          {formatMessage({ id: 'ourMissionDescription' })}
        </Typography>
        <Typography
          variant="p1r"
          sx={{
            fontSize: '1.1rem',
            fontStyle: 'italic',
            fontFamily: 'Poppins',
          }}
        >
          {' '}
          {formatMessage({ id: 'ourMissionEngagement' })}
        </Typography>
      </Box>

      <Box
        sx={{
          border: `1px solid ${theme.palette.grey[200]}`,
          borderRadius: 2,
          display: 'grid',
          padding: 2,
          justifyItems: 'center',
          mb: 5,
          rowGap: 2,
        }}
      >
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
          {formatMessage({ id: 'joinUs' })}
        </Typography>
        <Typography
          variant="p1r"
          sx={{
            fontSize: '1.1rem',
            textAlign: 'justify',
            fontFamily: 'Poppins',
            lineHeight: 2,
          }}
        >
          {formatMessage({ id: 'joinUsDescription' })}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{
            mt: 3,
            px: 4,
            py: 1.5,
            fontSize: '1.1rem',
            fontWeight: 600,
          }}
          onClick={() => {
            window.open(process.env.NEXT_PUBLIC_APP_URL, '_blank')
          }}
        >
          {formatMessage({ id: 'getStarted' })}
        </Button>
      </Box>
    </Box>
  );
}
