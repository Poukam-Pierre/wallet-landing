import { Box, Button, Typography } from '@mui/material';
import { useTheme } from '@xafpay/theme';
import { useIntl } from 'react-intl';

export function Cta() {
  const { formatMessage } = useIntl();
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: '372px',
        background: `url('/assets/mobileTransaction.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: '50% 60%',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'grid',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          backgroundColor: 'rgba(7, 43, 88, 0.6)',
          height: '100%',
          width: '100%',
        }}
      />
      <Box
        sx={{
          display: 'grid',
          rowGap: 4,
          color: 'white',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: 'Space Grotesk',
            fontSize: { tablet: '48px', mobile: '30px' },
            lineHeight: '120%',
            zIndex: 1,
          }}
        >
          {formatMessage({ id: 'pushToAction' })}
        </Typography>
        <Button
          variant="contained"
          sx={{
            justifySelf: 'center',
            backgroundColor: 'white',
            fontFamily: 'Poppins',
            width: { mobile: '12rem', tablet: '18rem' },
            color: theme.palette.primary.main,
          }}
          onClick={() => window.open(`${process.env.NEXT_PUBLIC_APP_URL}/register`, '_blank')}
        >
          {formatMessage({ id: 'register' })}
        </Button>
      </Box>
    </Box>
  );
}
