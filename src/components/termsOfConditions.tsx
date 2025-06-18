import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";


interface ITermsOfConditions {
    number: number,
    title: string,
    points?: string[],
    clause: string
}
export function TermsOfConditions({
    number,
    title,
    clause,
    points
}: ITermsOfConditions) {
    return (
        <Box sx={{
            display: 'grid',
            rowGap: 1,
            padding: '10px 0',
        }}>
            <Typography
                variant="h3"
                sx={{
                    fontFamily: 'Space Grotesk',
                    lineHeight: '120%',
                }}
            >
                {number}. {title}
            </Typography>
            <Typography
                variant="p1r"
                sx={{
                    fontFamily: 'Space Grotesk',
                    fontSize: '1.1rem',
                }}
            >
                {clause}
            </Typography>
            <List
                dense
                sx={{
                    listStyleType: 'disc',
                    pl: 4
                }}
            >
                {points?.map((point, index) => (
                    <ListItem
                        key={`${index}-${point}`}
                        sx={{
                            display: 'list-item'
                        }}
                    >
                        <ListItemText
                            disableTypography
                            primary={point}
                            sx={{
                                fontFamily: 'Space Grotesk',
                                fontSize: '1.1rem',
                            }}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}