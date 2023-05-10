import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TypoGraphy from '@mui/material/Typography';
function NavBar(props) {
    return (
        <List component="nav">
            <ListItem component="div">
                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="h6">
                        Home
                    </TypoGraphy>
                </ListItemText>
                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="h6">
                        Postagens
                    </TypoGraphy>
                </ListItemText>
                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="h6">
                        Contato
                    </TypoGraphy>
                </ListItemText>
            </ListItem >
        </List>
    )
}
export default NavBar;