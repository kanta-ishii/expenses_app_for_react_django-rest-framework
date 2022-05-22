import * as React from "react";
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";


interface LinkTabProps {
  label?: string;
  href?: string;
}

interface Props {
  params: number;
  open: boolean;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

const LinkTab = (props: LinkTabProps) => {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

function SideBar(props: Props) {
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    props.setValue(newValue);
  };

  return (
  <>
    <Drawer
        sx={{
          width: props.params,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: props.params,
            boxSizing: "border-box"
          }
        }}
        variant="persistent"
        anchor="left"
        open={props.open}
      >
        <Divider />
        <List>
          <Tabs
            value={props.value}
            onChange={handleChange}
            variant="scrollable"
            orientation="vertical"
          >
            <LinkTab label="Item One" href="/" />
            <LinkTab label="Item Two" href="/add" />

          </Tabs>
        </List>
      </Drawer>
    </>
  );
}

export default SideBar;
