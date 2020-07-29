import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { Menu, Search, Add, Create, Home } from "@material-ui/icons";
import Logo from "../assets/movie_review.svg";

const useStyle = makeStyles(() => ({
  links: {
    textDecoration: "none",
    color: "inherit",
  },
}));

function NavBar() {
  const classes = useStyle();

  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const drawer = (
    <div>
      <Divider style={{ background: "#404040" }} />
      <List style={{ background: "#404040", color: "white" }}>
        <Link to={{ pathname: "/" }} className={classes.links}>
          <ListItem button>
            <ListItemIcon style={{ color: "white" }}>
              {" "}
              <Home />{" "}
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link to={{ pathname: "/SearchMovie" }} className={classes.links}>
          <ListItem button>
            <ListItemIcon style={{ color: "white" }}>
              {" "}
              <Search />{" "}
            </ListItemIcon>
            <ListItemText primary="Buscar" />
          </ListItem>
        </Link>
        <Link to={{ pathname: "/movies/NewMovie" }} className={classes.links}>
          <ListItem button>
            <ListItemIcon style={{ color: "white" }}>
              {" "}
              <Add />{" "}
            </ListItemIcon>
            <ListItemText primary="Nueva Reseña" />
          </ListItem>
        </Link>
        {/* <Link to={{ pathname: "/movies/EditMovie" }} className={classes.links}>
          <ListItem button>
            <ListItemIcon style={{ color: "white" }}>
              {" "}
              <Create />{" "}
            </ListItemIcon>
            <ListItemText primary="Modificar Reseña" />
          </ListItem>
        </Link> */}
      </List>
    </div>
  );

  return (
    <div>
      <AppBar position="static" style={{ background: "#404040" }}>
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <IconButton
            onClick={handleDrawerOpen}
            color="inherit"
            edge="start"
            aria-label="menu"
          >
            <Menu />
          </IconButton>
          <Typography variant="h4" style={{ flexGrow: 1, textAlign: "center" }}>
            Movie Review
          </Typography>
          <img src={Logo} alt="logo" width="50px" height="50px" />
        </Toolbar>
      </AppBar>

      <Drawer anchor="top" open={open} onClose={() => setOpen(false)}>
        {drawer}
      </Drawer>
    </div>
  );
}

export default NavBar;

//color verde: #54FFA2
