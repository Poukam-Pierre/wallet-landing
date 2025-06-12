import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useIntl } from "react-intl";
import SectionTitle from "./sectionTitle";
import { IWhyTrust } from "@xafpay/types";


export default function TrustSection() {
    const { formatMessage } = useIntl();

    const whyTrustData: IWhyTrust[] = [
        {
            title: formatMessage({ id: 'speedAndReliability' }),
            description: formatMessage({ id: 'speedAndReliabilityDescription' }),
            image: {
                link: '/assets/reliable-secure.png',
                label: formatMessage({ id: 'security' })
            }
        },
        {
            title: formatMessage({ id: 'zeroFee' }),
            description: formatMessage({ id: 'zeroFeeDescription' }),
            image: {
                link: '/assets/zero-fee.png',
                label: formatMessage({ id: 'zeroFee' })
            }

        },
        {
            title: formatMessage({ id: 'competitivePrices' }),
            description: formatMessage({ id: 'competitivePriceDescription' }),
            image: {
                link: '/assets/unbeatable-fee.png',
                label: formatMessage({ id: 'unbeatable' })
            }

        },
        {
            title: formatMessage({ id: 'instantTransfer' }),
            description: formatMessage({ id: 'instantTransferDescription' }),
            image: {
                link: '/assets/speed.png',
                label: formatMessage({ id: 'speed' })
            }

        }
    ]

    return (
        <Box sx={{
            display: 'grid',
            textAlign: 'center',
            justifyContent: 'center',
            paddingBottom: '68px',
            rowGap: 8,
            bgcolor: 'rgba(250, 250, 253, 1)'
        }}>
            <SectionTitle color='#0E103A'>
                {formatMessage({ id: 'whyTrust' })}
            </SectionTitle>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, auto)',
                columnGap: 1,
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
                                width={150}
                                height={100}
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