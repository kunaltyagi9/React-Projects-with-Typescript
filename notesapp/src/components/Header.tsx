
import { AppBar, Toolbar, Typography } from '@mui/material';

import { logo } from '../constants/constant';

const Header: React.FunctionComponent = () => {

    return (
        <AppBar color="transparent" position='static'>
            <Toolbar>
                <img src={logo} alt="logo" style={{ width: 30, marginRight: 10 }} />
                <Typography variant="h6">EverNote</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;