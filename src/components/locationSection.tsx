import { Box, Typography } from "@mui/material";
import { useIntl } from "react-intl";
import CheckCircleIcon from '@iconify/icons-fluent/checkmark-circle-20-regular';
import { SectionTitle } from "@components";
import { Icon } from "@iconify/react";


export function LocationSection() {
    const { formatMessage } = useIntl();

    return (
        <Box sx={{
            display: 'grid',
            padding: {
                mobile: '0 16px 64px',
                tablet: '0 118px 64px'
            },
            paddingBottom: '48px',
            background: 'linear-gradient(to right, rgba(15, 93, 190, 1), rgba(7, 43, 88, 1))',
            color: 'white',
            textAlign: 'center',
            rowGap: {
                mobile: 4,
                laptop: 7
            }
        }}>
            <Box sx={{
                display: 'grid',
                rowGap: 1
            }}>
                <SectionTitle color="white" width="90%">
                    {formatMessage({ id: 'HeroRemittanceMessage' })}
                </SectionTitle>
                <Typography
                    variant="h3"
                    sx={{
                        fontSize: { tablet: '24px', mobile: '20px' },
                    }}
                >
                    {formatMessage({ id: 'reliableRemittanceService' })}
                </Typography>
            </Box>
            <Box sx={{
                display: 'grid',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Box sx={{
                    display: 'grid',
                    gridAutoFlow: 'column',
                    alignItems: 'center',
                    width: {
                        mobile: '70%',
                        tablet: '100%'
                    },
                    justifySelf: 'center'
                }}>
                    <Box sx={{
                        display: 'grid',
                        height: 'fit-content'
                    }}>
                        <Box sx={{
                            display: 'grid',
                            gridAutoFlow: 'column',
                            alignItems: 'center',
                            width: 'fit-content',
                        }}>
                            <Box
                                component='img'
                                src='/assets/cad.png'
                                alt="cad flag"
                            />
                            <Box
                                component='img'
                                src='/assets/arrow.png'
                                alt="arrow"
                                sx={{
                                    transform: 'scaleY(-1)',
                                    width: '180px',
                                }}
                            />
                        </Box>
                        <Box sx={{
                            display: 'grid',
                            gridAutoFlow: 'column',
                            alignItems: 'center',
                            width: 'fit-content',
                        }}>
                            <Box
                                component='img'
                                src='/assets/usa.png'
                                alt="cad flag"
                                sx={{
                                }}
                            />
                            <Box
                                component='img'
                                src='/assets/arrow.png'
                                alt="arrow"
                                width={180}
                            />
                        </Box>
                    </Box>
                    <Box
                        component='img'
                        src='/assets/africa.png'
                        alt='africa map'
                        sx={{
                            width: {
                                tablet: '400px',
                                mobile: '150px'
                            },
                            height: {
                                tablet: '400px',
                                mobile: '150px'
                            },
                        }}
                    />
                </Box>
            </Box>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: {
                    tablet: 'repeat(2, 1fr)',
                    mobile: 'repeat(1, 1fr)'
                },
                columnGap: 25,
                rowGap: 3
            }}>
                <Box sx={{
                    display: 'grid',
                    gridAutoFlow: 'column',
                    textAlign: 'left',
                    columnGap: 1,
                    alignContent: 'baseline'
                }}>
                    <Icon
                        icon={CheckCircleIcon}
                        style={{
                            width: '24px',
                            height: '24px',
                        }}
                    />
                    <Typography variant="h4">
                        {formatMessage({ id: 'serviceLocation' })}
                    </Typography>
                </Box>
                <Box sx={{
                    display: 'grid',
                    gridAutoFlow: 'column',
                    textAlign: 'left',
                    columnGap: 1,
                    alignContent: 'baseline'
                }}>
                    <Icon
                        icon={CheckCircleIcon}
                        style={{
                            width: '24px',
                            height: '24px',
                        }}
                    />
                    <Typography variant="h4">
                        {formatMessage({ id: 'conformityAndCompliance' })}
                    </Typography>
                </Box>
            </Box>
        </Box>

    )
}