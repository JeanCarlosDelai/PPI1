import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import TypoGraphy from '@mui/material/Typography';
function App() {
  return (
    <div>
      <AppBar color="primary" position="static">
        <Toolbar>
          <TypoGraphy variant="h4" color="inherit">
            Meu cabeçalho
          </TypoGraphy>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default App;