import { Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { routepath } from "../../constants/Route";

// javascript object destructuing concept

const Headermenu = ({ open, handleClose }) => {

    const openmenu = Boolean(open);

    return (
        <div>
            <Menu
                id="basic-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={open}
                open={openmenu}
                onClose={handleClose}
            >
                <Link to = {`${routepath.categories}?category=popular`} style = {{textDecoration :'none',color :'inherit'}}>
                    <MenuItem onClick={handleClose}>Popular</MenuItem>
                </Link>

                <Link to = {`${routepath.categories}?category=Toprated`}style = {{textDecoration :'none',color :'inherit'}}>
                    <MenuItem onClick={handleClose}>Top Rated</MenuItem>
                </Link>

                <Link to = {`${routepath.categories}?category=Upcoming`} style = {{textDecoration :'none',color :'inherit'}}>
                    <MenuItem onClick={handleClose}>Upcoming</MenuItem>
                </Link>

            </Menu>
        </div>
    )
}

export default Headermenu;