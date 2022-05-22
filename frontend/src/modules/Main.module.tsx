import React from 'react';
import { styled } from "@mui/material/styles";


interface Props {
    open: boolean;
    params: number;
    page: any;
}

function Main(props: Props) {
    const MainContainer = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
        open?: boolean;
    }>(({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginLeft: `-${props.params}px`,
        ...(open && {
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen
            }),
            marginLeft: 0
        })
    }))

    return (
        <>
            <MainContainer open={props.open}>
                {props.page}
            </MainContainer>

        </>
    );
}

export default Main;