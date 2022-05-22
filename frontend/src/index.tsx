import React from 'react';
import { createRoot } from 'react-dom/client';
import Box from "@mui/material/Box";
import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom';

import params from "./params";
import SideBar from './modules/SideBar.module';
import Header from './modules/Header.module';
import Main from './modules/Main.module';
import DrawerHeader from './modules/DrawerHeader.module';
import ExpensesList from "./components/ExpensesList.component";
import AddExpenses from "./components/AddExpenses.component";


function Index() {
  const [open, setOpen] = React.useState(false);
  const [close, setClose] = React.useState(true);
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ display: "flex" }}>
        <Header
             title={'Persistent drawer'}
             open={open}
             close={close}
             params={params.drawerWidth}
             setOpen={setOpen}
             setClose={setClose}
        />

        <SideBar
            open={open}
            value={value}
            setValue={setValue}
            params={params.drawerWidth}
        />

        <Main
            open={open}
            params={params.drawerWidth}
            page={
                <>
                  <DrawerHeader />
                  <BrowserRouter>
                    <Routes>
                      <Route path="/" element={<ExpensesList />} />
                      <Route path="/add" element={<AddExpenses />} />
                    </Routes>
                  </BrowserRouter>
                </>
            }
          />
    </Box>
  );
}

const container: any = document.getElementById('app');
const root = createRoot(container);
root.render(
    <Index />
);