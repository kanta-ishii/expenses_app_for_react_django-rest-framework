import React from 'react';
import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";


interface Props {
  title: string;
  open: boolean;
  close: boolean;
  params: number; 
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

function Header(props: Props) {
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open"
  })<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    ...(open && {
      width: `calc(100% - ${props.params}px)`,
      marginLeft: `${props.params}px`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    })
  }))

  const handleDrawerOpen = () => {
    props.setOpen(true);
    props.setClose(false);
  };

  const handleDrawerClose = () => {
    props.setOpen(false);
    props.setClose(true);
  };

  return (
    <>
      <AppBar color="inherit" position="fixed" open={props.open}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(props.open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>

          <IconButton
              aria-label="close drawer"
              onClick={handleDrawerClose}
              edge="start"
              sx={{ mr: 2, ...(props.close && { display: "none" }) }}
            >
            <ChevronLeftIcon />
          </IconButton>

          <Typography variant="h6" noWrap component="div">
            {props.title}
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;