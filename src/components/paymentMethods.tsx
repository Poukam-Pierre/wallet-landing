import { Box } from "@mui/material";
import { IPaymentMethods } from "@xafpay/types";
import Image from "next/image";
import { useIntl } from "react-intl";
import { SectionTitle } from "@components"


export function PaymentMethods() {
    const { formatMessage } = useIntl();


    const paymentMethods: IPaymentMethods[] = [
        {
            link: '/assets/momo.png',
            alt: 'MTN mobile money'
        },
        {
            link: '/assets/om.png',
            alt: 'Orange money'
        },
        {
            link: '/assets/cash.png',
            alt: 'Cash money'
        },
        {
            link: '/assets/bank-deposit.png',
            alt: 'Bank deposit'
        },
    ]

    return (
        <Box
            sx={{
                display: 'grid',
                rowGap: 5,
                marginBottom: 7,
                width: '100%',
            }}
        >
            <SectionTitle color="#0E103A">
                {formatMessage({ id: 'payoutMethods' })}
            </SectionTitle>
            <Box sx={{
                display: { mobile: 'flex', tablet: 'grid' },
                flexWrap: 'wrap',
                gridAutoFlow: 'column',
                columnGap: 7,
                rowGap: 7,
                width: 'fit-content',
                justifySelf: 'center',
                justifyContent: 'center',
            }}>
                {paymentMethods.map(({ link, alt }, index) => (
                    <Image
                        key={index}
                        src={link}
                        alt={alt}
                        width={130}
                        height={90}
                        style={{
                            objectFit: 'contain'
                        }}
                    />
                ))}
            </Box>
        </Box>

    )
}