
import { useState } from 'react';
import { AppBar, Toolbar, styled, Box, Typography, InputBase } from '@mui/material';
import { LogoUrl } from '../../constants/Constant';
import { Menu, BookmarkAdd, ExpandMore } from '@mui/icons-material';

import Headermenu from './HeaderMenu';
import { useNavigate } from 'react-router-dom';
import { routepath } from '../../constants/Route';

// now we will handle css of differnt component

const Toolbarcss = styled(Toolbar)`
    background : #121212;
    min-height : 56px !important ; 
    padding : 0 115px !important;
    justify-content : space-between;

    & > * {
        padding : 0 16px;
    }
    & > div {
        display : flex;
        align-item : center;
        cursor : pointer;

        & > p {
         font-size : 14px;
         font-weight : 600;
        }
    }

    & > p {
        font-size : 14px;
        font-weight : 600;
       }
`;

const Inputbasecss = styled(InputBase)`
     background : #FFFFFF;
     height : 30px;
     width : 55%;
     border-radius : 5px;
`
// space between ke help se harek compoenent ke bich me equally space aa jata hai
// when we use html tag component with styled then we will use in string 

const Logo = styled('img')({
    width: 64
})

// default value min-height ka 64 px hai aur jab given value load nhi karta hai to important keyword ka use karna padta hai

const Header = () => {

    const [open, setopen] = useState(null);
    const navigate = useNavigate();

    const handleclick = (e) => {
        setopen(e.currentTarget);
    }

    const handleClose = ()=>{
        setopen(null);
    }
    return (

        // bydefault appbar position is fixed so when we write something in banner it will not be visible so we use positiion static
        
        <AppBar position='static'>
            <Toolbarcss>
                <Logo src={LogoUrl} alt="logo" onClick={()=>navigate(routepath.home)} />
                <Box onClick={handleclick}>
                    <Menu />
                    <Typography>Menu</Typography>
                </Box>
                <Headermenu open={open} handleClose = {handleClose} />
                <Inputbasecss />
                <Typography>IMDb<Box component="Span" >Pro</Box></Typography>

                <Box>
                    <BookmarkAdd />
                    <Typography>Watchlist</Typography>
                </Box>
                <Typography>Sign In</Typography>
                <Box>
                    <Typography>EN</Typography>
                    <ExpandMore />
                </Box>
            </Toolbarcss>
        </AppBar>
    )
}

export default Header;