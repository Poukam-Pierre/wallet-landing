import { SectionTitle } from "@components";
import { Box } from "@mui/material";
import Image from "next/image";
import { useIntl } from "react-intl";
import TextCard from "./textCard";

export function HowItWorks() {
    const { formatMessage } = useIntl();
    return (
        <Box
            id="howItWorks"
            sx={{
                display: 'grid',
                justifyContent: 'center',
                bgcolor: 'rgba(250, 250, 253, 1)',
                padding: {
                    mobile: '0 16px 0',
                    tablet: 0
                },
            }}
        >
            <SectionTitle color='#0E103A'>
                {formatMessage({ id: 'howItWorksTitle' })}
            </SectionTitle>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: {
                    mobile: '1fr',
                    tablet: 'repeat(2, 1fr)'
                },
                gridTemplateRows: 'auto auto',
                '& > :first-child': {
                    mobile: {
                        order: 2
                    },
                    tablet: {
                        order: 1
                    }
                },
                '& > :last-child': {
                    mobile: {
                        order: 1
                    },
                    tablet: {
                        order: 2
                    }
                },
                columnGap: 25,
                alignItems: 'center',
                paddingTop: {
                    mobile: 7,
                    tablet: 5
                },
            }}>
                <Image
                    src='/assets/step_1_xaf.png'
                    alt='first registration step'
                    width={400}
                    height={500}
                    style={{
                        objectFit: 'contain',
                    }}
                />
                <TextCard
                    title={formatMessage({ id: 'howItWorksStep1' })}
                    description={formatMessage({ id: 'howItWorksStep1Description' })}
                    step={1}
                    positionY={36}
                />
            </Box>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: {
                    mobile: '1fr',
                    tablet: 'repeat(2, 1fr)'
                },
                gridTemplateRows: 'auto auto',
                columnGap: 25,
                alignItems: 'center',
                paddingTop: {
                    mobile: 5,
                    tablet: 0
                }
            }}>
                <TextCard
                    title={formatMessage({ id: 'howItWorksStep2' })}
                    description={formatMessage({ id: 'howItWorksStep2Description' })}
                    step={2}
                    positionY={30}
                />
                <Image
                    src='/assets/step_2_xaf.png'
                    alt='second registration step'
                    width={350}
                    height={600}
                    style={{
                        objectFit: 'contain',
                        objectPosition: 'center',
                    }}
                />

            </Box>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: {
                    mobile: '1fr',
                    tablet: 'repeat(2, 1fr)'
                },
                gridTemplateRows: 'auto auto',
                '& > :first-child': {
                    mobile: {
                        order: 2
                    },
                    tablet: {
                        order: 1
                    }
                },
                '& > :last-child': {
                    mobile: {
                        order: 1
                    },
                    tablet: {
                        order: 2
                    }
                },
                columnGap: 25,
                alignItems: 'center'
            }}>
                <Image
                    src='/assets/step_3_xaf.png'
                    alt='first registration step'
                    width={400}
                    height={500}
                    style={{
                        objectFit: 'contain',
                        objectPosition: 'top',
                        justifySelf: 'end'
                    }}
                />
                <TextCard
                    title={formatMessage({ id: 'howItWorksStep3' })}
                    description={formatMessage({ id: 'howItWorksStep3Description' })}
                    step={3}
                    positionY={40}
                />
            </Box>
        </Box>
    )
}