import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
import GroupsIcon from "@mui/icons-material/Groups";
import HomeIcon from "@mui/icons-material/Home";
import CableIcon from "@mui/icons-material/Cable";
import ChatIcon from "@mui/icons-material/Chat";
import SettingsIcon from "@mui/icons-material/Settings";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "../App.css";
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 0 }}>
      <AppBar position="static" className="NavBar">
        <div className="innerNavbar">
          <Typography className="Advocasehedding">
            <span>A</span>DVOCASE
          </Typography>
          <div className="hedding">
            <div className="headIcons">
              <button class="gradient-button">
                <WysiwygIcon style={{ marginRight: "0.5rem" }} />
                News feed
              </button>
              <button class="gradient-button">
                <GroupsIcon style={{ marginRight: "0.5rem" }} />
                Find lawyers
              </button>
              <button class="gradient-button-home">
                <HomeIcon style={{ marginRight: "0.5rem" }} />
                Home
              </button>
              <button class="gradient-button">
                <CableIcon style={{ marginRight: "0.5rem" }} />
                Connections
              </button>
              <button class="gradient-button">
                <ChatIcon style={{ marginRight: "0.5rem" }} />
                Chats
              </button>
            </div>
          </div>
          <div className="icons">
            <SettingsIcon className="profileIcon" />
            <CircleNotificationsIcon className="profileIcon" />
            <AccountCircleIcon className="profileIcon" />
          </div>
        </div>
      </AppBar>
    </Box>
  );
}
