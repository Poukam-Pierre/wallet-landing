import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useIntl } from "react-intl";
import { SectionTitle } from "@components";
import { IWhyTrust } from "@xafpay/types";


export function TrustSection() {
    const { formatMessage } = useIntl();

    const whyTrustData: IWhyTrust[] = [
        {
            title: formatMessage({ id: 'zeroFee' }),
            description: formatMessage({ id: 'zeroFeeDescription' }),
            image: {
                link: '/assets/no-fee.svg',
                label: formatMessage({ id: 'zeroFee' })
            }

        },
        {
            title: formatMessage({ id: 'competitivePrices' }),
            description: formatMessage({ id: 'competitivePriceDescription' }),
            image: {
                link: '/assets/feedback-review.svg',
                label: formatMessage({ id: 'unbeatable' })
            }

        },
        {
            title: formatMessage({ id: 'instantTransfer' }),
            description: formatMessage({ id: 'instantTransferDescription' }),
            image: {
                link: '/assets/time-fast.svg',
                label: formatMessage({ id: 'speed' })
            }
        },
        {
            title: formatMessage({ id: 'speedAndReliability' }),
            description: formatMessage({ id: 'speedAndReliabilityDescription' }),
            image: {
                link: '/assets/immunity.svg',
                label: formatMessage({ id: 'security' })
            }
        }
    ]

    return (
        <Box sx={{
            display: 'grid',
            textAlign: 'center',
            justifyContent: 'center',
            rowGap: 7,
            bgcolor: 'rgba(250, 250, 253, 1)',
            padding: { mobile: '0 24px 60px', tablet: '0 0 60px' }
        }}>
            <SectionTitle color='#0E103A'>
                {formatMessage({ id: 'whyTrust' })}
            </SectionTitle>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: {
                    mobile: 'none',
                    tablet: 'repeat(2, auto)',
                    desktop: 'repeat(4, auto)'
                },
                columnGap: 1,
                rowGap: 1
            }}>
                {whyTrustData.map(({ description, image, title }) => (
                    <Box
                        key={title}
                        sx={{
                            border: '1px solid lightgray',
                            borderRadius: '10px',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'grid',
                                rowGap: 3,
                                margin: 1,
                            }}>
                            <Image
                                src={image.link}
                                alt={image.label}
                                width={120}
                                height={70}
                                style={{
                                    justifySelf: 'center',
                                    objectFit: 'contain',
                                }}
                            />
                            <Typography
                                variant="h4"
                                sx={{
                                    lineHeight: '100%',
                                    fontFamily: 'Poppins'
                                }}
                            >
                                {title}
                            </Typography>
                            <Typography
                                variant="p1r"
                                width={300}
                                sx={{
                                    width: 300,
                                    fontFamily: 'Poppins',
                                    lineHeight: '143%'
                                }}
                            >
                                {description}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>


    )
}