import { Box, Button, Drawer, Typography } from "@mui/material";
import { INavItem } from "@xafpay/types";
import Image from "next/image";
import { useIntl } from "react-intl";
import { NavItem } from "./NavItem";
import { useRouter } from "next/navigation";

interface SideBarProps {
    open: boolean,
    onClose: () => void,
    navItems: INavItem[]
}
export function SideBar({
    navItems,
    onClose,
    open
}: SideBarProps) {
    const { formatMessage } = useIntl();
    const { push } = useRouter();
    return (
        <Drawer
            open={open}
            onClose={onClose}
            anchor="right"
        >
            <Box sx={{
                display: 'grid',
                gridTemplateRows: '1fr auto',
                padding: '30px 15px',
                height: '100%',
                width: 250
            }}>
                <Box sx={{
                    display: 'grid',
                    justifyContent: 'start',
                    height: 'fit-content',
                    rowGap: '45px'
                }}>
                    <Image
                        src="/assets/logo.png"
                        alt="Xafpay Logo"
                        width={126}
                        height={60}
                    />
                    <Box
                        sx={{
                            display: 'grid',
                            gridAutoFlow: 'row',
                            rowGap: 4,
                        }}
                    >
                        {navItems.map((item, index) => (
                            <NavItem
                                key={index}
                                navItem={item}
                                handleLink={() => {
                                    push(item.href)
                                    onClose()
                                }}
                            />
                        ))}
                    </Box>
                </Box>
                <Box sx={{
                    display: 'grid',
                    gridAutoFlow: 'row',
                    rowGap: 0.5,
                }}>
                    <Button
                        variant="outlined"
                        size='medium'
                        onClick={() =>
                            window.open(
                                `${process.env.NEXT_PUBLIC_APP_URL}/login`,
                                '_blank'
                            )
                        }
                    >
                        <Typography variant="p2r" fontFamily="Poppins">
                            {formatMessage({ id: 'login' })}
                        </Typography>
                    </Button>
                </Box>
            </Box>
        </Drawer>
    )
}