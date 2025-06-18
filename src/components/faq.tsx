import rightIcon from '@iconify/icons-fluent/chevron-right-12-filled';
import { Icon } from "@iconify/react";
import { Accordion, AccordionDetails, AccordionSummary, Box } from "@mui/material";
import { useLanguage, useTheme } from "@xafpay/theme";
import { faqQuestionsEn, faqQuestionsFr, IFaqQuestions } from "@xafpay/types";
import { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { SectionTitle } from "@components";


export function FAQ() {
    const { formatMessage } = useIntl();
    const theme = useTheme();
    const [faqQuestionsData, setFaqQuestionsData] =
        useState<IFaqQuestions[]>([])
    const { activeLanguage } = useLanguage()




    useEffect(() => {
        if (activeLanguage === 'En') setFaqQuestionsData(faqQuestionsEn)
        else setFaqQuestionsData(faqQuestionsFr)
    }, [activeLanguage])

    return (
        <Box
            id="faq"
            sx={{
                display: 'grid',
                justifyContent: 'center',
                alignContent: 'center',
                rowGap: 5,
                marginBottom: 7
            }}>
            <SectionTitle color="#0E103A">
                {formatMessage({ id: 'faq' })}
            </SectionTitle>
            <Box
                sx={{
                    maxWidth: '62.5rem',
                    marginBottom: 2,
                }}
            >
                {faqQuestionsData.map(({ question, answer: { response, description } }, index) => (
                    <Accordion
                        disableGutters
                        square
                        elevation={0}
                        key={index}
                        sx={{
                            marginBottom: 2
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<Icon icon={rightIcon} />}
                            sx={{
                                maxWidth: '40rem',
                                fontSize: '20px',
                                fontWeight: '600',
                                fontFamily: 'Darker Grotesque',
                                lineHeight: 25 / 20,
                                flexDirection: 'row-reverse',
                                '& .MuiAccordionSummary-content': {
                                    marginLeft: theme.spacing(1),
                                },
                                '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                                    transform: 'rotate(90deg)',
                                }
                            }}
                        >
                            {question}
                        </AccordionSummary>
                        <AccordionDetails sx={{
                            '&.MuiAccordionDetails-root': {
                                padding: '8px 38px 16px'
                            }
                        }}>
                            {response}
                            {description && description.map((item, index) => (
                                <li
                                    key={index}
                                    style={{
                                        listStyle: 'disc',
                                        marginLeft: '1rem',
                                        marginTop: '1rem'
                                    }}
                                >
                                    {item}
                                </li>
                            ))}
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>
        </Box >

    )
}