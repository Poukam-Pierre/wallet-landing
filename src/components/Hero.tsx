import arrowDownwardIcon from '@iconify/icons-fluent/arrow-down-20-regular';
import arrowRight from '@iconify/icons-fluent/arrow-right-28-regular';
import down from '@iconify/icons-fluent/chevron-down-12-filled';
import { Icon } from '@iconify/react';
import {
  Box,
  Button,
  Chip,
  Divider,
  TextField,
  Typography,
} from '@mui/material';
import { useTheme } from '@xafpay/theme';
import { CurrencyEntity } from '@xafpay/types';
// import { useCurrencies } from 'api/hooks/useCurrency';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import CurrencyMenu from './currencyMeny';
// import { useCurrencies } from 'api/hooks/useCurrency';

export function Hero() {
  const { formatMessage, formatNumber } = useIntl();
  const theme = useTheme();

  const [amount, setAmount] = useState<number | string>(1);
  const [currencyAnchorEl, setCurrencyAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const [activeCurrency, setActiveCurrency] = useState<CurrencyEntity>();

//   const { data: currencies, isFetching: areCurrenciesLoading } =
//     useCurrencies();


  const [currencies] = useState<CurrencyEntity[]>([
    {
      currency: 'USD',
      supported_currency_id: 'USD',
      is_active: true,
      xaf_rate: 600.0,
      last_updated: new Date().toDateString(),
      created_at: new Date().toDateString(),
      created_by: '',
    },
    {
      currency: 'CAD',
      supported_currency_id: 'CAD',
      is_active: true,
      xaf_rate: 450.0,
      last_updated: new Date().toDateString(),
      created_at: new Date().toDateString(),
      created_by: '',
    },
])
  const areCurrenciesLoading = false;
    
  const correspondingFlags: { [key: string]: string } = {
    USD: '/assets/usa-flag.jpg',
    CAD: '/assets/canada-flag.png',
  };

  useEffect(() => {
    setActiveCurrency(currencies?.[0]);
  }, [currencies]);

  /* Handle amount by checking if number value has been typed 
     if so not, clear the value textfield
  */
  const handleChange = (e) => {
    const { value } = e.target;
    if (value === 0 || !isNaN(value)) {
      setAmount("");
    }
    setAmount(value);
  }
  return (
    <>
      <CurrencyMenu
        anchorEl={currencyAnchorEl}
        handleClose={() => setCurrencyAnchorEl(null)}
        open={!!currencyAnchorEl}
        supportedCurrencies={currencies}
        isLoading={areCurrenciesLoading}
        selectItem={setActiveCurrency}
      />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            mobile: '1fr',
            tablet: 'repeat(2, 1fr)',
          },
          gridTemplateRows: {
            mobile: '1fr 1fr',
            tablet: 'auto auto',
          },
          padding: {
            mobile: '0px 16px 40px',
            tablet: '100px 80px'
          },
          bgcolor: 'rgba(250, 250, 253, 1)',
          rowGap: 4
        }}
      >
        <Box
          sx={{
            display: 'grid',
            textAlign: 'start',
            rowGap: 4,
            alignSelf: 'center',
          }}
        >
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            columnGap: 1
          }}>
            <Typography
              variant="h1"
              sx={{
                fontFamily: 'Space Grotesk',
                fontWeight: 'bold',
                fontSize: {
                  tablet: '48px',
                  mobile: '36px',
                },
                lineHeight: '120%',
                color: '#0E103A',
              }}
            >
              {formatMessage({ id: 'heroMessage' })}
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontFamily: 'Space Grotesk',
                fontWeight: 'bold',
                fontSize: {
                  tablet: '48px',
                  mobile: '36px',
                },
                lineHeight: '120%',
                color: theme.palette.secondary.main,
              }}
            >
              {formatMessage({ id: 'unbeatable' })}
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontFamily: 'Space Grotesk',
                fontWeight: 'bold',
                fontSize: {
                  tablet: '48px',
                  mobile: '36px',
                },
                lineHeight: '120%',
                color: '#0E103A',
              }}
            >
              {formatMessage({ id: 'rates' })}
            </Typography>
          </Box>
          <Typography
            variant="h2"
            sx={{
              color: 'rgba(28, 29, 39, 0.80)',
              leadingTrim: 'both',
              textEdge: 'cap',
              fontFamily: 'Space Grotesk',
              fontSize: { tablet: '24px', mobile: '16px' },
              fontWeight: 500,
              lineHeight: '130%',
            }}
          >
            {formatMessage({ id: 'descriptionheroMessage' })}
          </Typography>
          <Box sx={{
            display: 'grid',
            gridAutoFlow: {
              mobile: 'row',
              tablet: 'column'
            },
            justifyContent: {
              mobile: 'normal',
              tablet: 'flex-start'
            },
            alignItems: 'center',
            gap: 2
          }}>
            <Typography
              variant='h4'
              sx={{
                fontFamily: 'Space Grotesk',
                color: 'rgba(28, 29, 39, 0.80)',
              }}
            >
              {formatMessage({ id: 'doYouHaveAnAccount' })}
            </Typography>
            <Button
              variant="contained"
              size="medium"
              sx={{
                width: {
                  mobile: '100%',
                  tablet: '12rem'
                },
                fontSize: '14px',
                fontFamily: 'Poppins',
              }}
              onClick={() =>
                window.open(`${process.env.NEXT_PUBLIC_APP_URL}/register`, '_blank')
              }
            >
              {formatMessage({ id: 'register' })}
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'grid',
            border: '1px solid darkgray',
            borderRadius: 3,
            boxShadow: {
              mobile: '0px 10px 5px rgba(21, 124, 251, 0.3), 0px -10px 8px rgba(21, 124, 251, 0.3)',
              tablet: '-40px -40px 8px rgba(21, 124, 251, 0.3), 0px 7px 8px rgba(251, 1, 2, 0.15)'
            },
            maxWidth: '25rem',
            backgroundColor: theme.palette.background.paper,
            justifySelf: 'center',
          }}
        >
          <Box sx={{
            display: 'grid',
            rowGap: 0.5,
            backgroundColor: theme.palette.primary.main,
            borderRadius: '12px 12px 0 0',
            padding: 1,
            color: 'white'
          }}>
            <Typography
              variant="h4"
              sx={{
                textAlign: 'center',
                fontFamily: 'Space Grotesk',
                fontWeight: 600,
                lineHeight: '130%',
              }}
            >
              {formatMessage({ id: 'feesRates' })}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                textAlign: 'center',
                fontFamily: 'Space Grotesk',
                fontWeight: 600,
                lineHeight: '130%',
              }}
            >
              {activeCurrency ?
                `1 ${activeCurrency.currency} = XAF ${activeCurrency.xaf_rate}`
                :
                'loading...'
              }
            </Typography>
          </Box>
          <Box sx={{
            display: 'grid',
            rowGap: 2,
            padding: '0 16px 16px'
          }}>
            <Divider />
            <Box
              sx={{
                display: 'grid',
                textAlign: 'start',
              }}
            >
              <Typography
                variant="p3r"
                sx={{
                  fontSize: { mobile: '10px', tablet: '12px' },
                  lineHeight: '160%',
                  color: '#12192C',
                  fontFamily: 'Poppins',
                }}
              >
                {formatMessage({ id: 'whenYouSend' })}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <TextField
                  variant="standard"
                  type="number"
                  placeholder="100 $"
                  sx={{
                    '& .MuiInputBase-input': {
                      textAlign: 'start',
                      fontSize: { tablet: '36px', mobile: '24px' },
                      fontWeight: '700',
                      fontFamily: 'Poppins',
                      width: '15rem',
                    },
                    '& .MuiInput-root::before': {
                      border: 'none',
                    },
                  }}
                  InputProps={{
                    disableUnderline: true,
                  }}
                  onChange={handleChange}
                  value={amount}
                  disabled={areCurrenciesLoading}
                />
                <Box
                  sx={{
                    display: 'grid',
                    gridAutoFlow: 'column',
                    columnGap: 1,
                    alignItems: 'center',
                    cursor: 'pointer',
                  }}
                  onClick={(e) => setCurrencyAnchorEl(e.currentTarget)}
                >
                  {activeCurrency && (
                    <Image
                      src={correspondingFlags[activeCurrency.currency]}
                      width={24}
                      height={24}
                      alt={`${activeCurrency} flag`}
                    />
                  )}
                  <Typography
                    variant="p1m"
                    sx={{
                      fontFamily: 'Space Grotesk',
                      fontSize: { tablet: '24px', mobile: '14px' },
                      lineHeight: '130%',
                    }}
                  >
                    {activeCurrency?.currency}
                  </Typography>
                  <Icon icon={down} />
                </Box>
              </Box>
            </Box>
            <Divider
              variant="fullWidth"
              sx={{
                backgroundColor: 'transparent',
                borderStyle: 'dashed',
              }}
            >
              <Chip
                label={<Icon icon={arrowDownwardIcon} />}
                sx={{
                  backgroundColor: '#0E103A',
                  color: 'white',
                  fontSize: '1.2rem',
                  height: '36px',
                  width: '36px',
                  '& .MuiChip-label': {
                    padding: 0,
                  },
                }}
              />
            </Divider>
            <Box
              sx={{
                display: 'grid',
                textAlign: 'start',
              }}
            >
              <Typography
                variant="p3r"
                sx={{
                  fontSize: { mobile: '10px', tablet: '12px' },
                  lineHeight: '160%',
                  color: '#12192C',
                  fontFamily: 'Poppins',
                }}
              >
                {formatMessage({ id: 'WillReceive' })}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'end',
                    gap: 1,
                    flexGrow: 1,
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      textAlign: 'start',
                      fontSize: { tablet: '36px', mobile: '24px' },
                      fontWeight: '700',
                      fontFamily: 'Poppins',
                    }}
                  >
                    {amount && activeCurrency
                      ? formatNumber(
                        Number((Number(amount) * activeCurrency.xaf_rate).toFixed(2))
                      )
                      : '...'}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'grid',
                    gridAutoFlow: 'column',
                    columnGap: 1,
                    alignItems: 'center',
                  }}
                >
                  <Image
                    src="/assets/cameroon-flag.png"
                    width={24}
                    height={24}
                    alt="cameroon flag"
                  />
                  <Typography
                    variant="p1m"
                    sx={{
                      fontFamily: 'Space Grotesk',
                      fontWeight: 500,
                      fontSize: { tablet: '24px', mobile: '14px' },
                      lineHeight: '130%',
                    }}
                  >
                    XAF
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Divider />
            <Box
              sx={{
                display: 'grid',
                alignItems: 'center',
                justifyContent: 'space-between',
                gridAutoFlow: 'column',
              }}
            >
              <Typography
                variant="p2m"
                sx={{
                  fontSize: { mobile: '10px', tablet: '12px' },
                  lineHeight: '160%',
                  fontFamily: 'Poppins',
                }}
              >
                {formatMessage({ id: 'OurTransactionFees' })}
              </Typography>
              <Typography
                variant="p2m"
                sx={{
                  fontSize: { mobile: '10px', tablet: '12px' },
                  lineHeight: '160%',
                  fontFamily: 'Poppins',
                  color: theme.palette.primary.dark,
                  fontWeight: 'bold',
                }}
              >
                {formatMessage({ id: 'feesRate' })}
              </Typography>
            </Box>
            <Divider />
            <Button
              size="large"
              variant="contained"
              color="primary"
              endIcon={<Icon icon={arrowRight} />}
              sx={{
                fontSize: '1.2rem',
                fontWeight: 'bold',
                fontFamily: 'Poppins',
                width: '100%',
              }}
              onClick={() =>
                window.open(
                  `${process.env.NEXT_PUBLIC_APP_URL}/amount=${amount}&currency=${activeCurrency?.currency}`,
                  '_blank'
                )
              }
              disabled={areCurrenciesLoading || !activeCurrency}
            >
              {formatMessage({ id: 'transferNow' })}
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
