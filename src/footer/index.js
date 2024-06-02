/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   index.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: aelomari <aelomari@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/05/24 10:17:05 by aelomari          #+#    #+#             */
/*   Updated: 2024/05/24 10:17:06 by aelomari         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from "react";
import "./style.css";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import ChatBubbleSharpIcon from "@mui/icons-material/ChatBubbleSharp";
import AddBoxSharpIcon from "@mui/icons-material/AddBoxSharp";
import CalendarMonthSharpIcon from "@mui/icons-material/CalendarMonthSharp";
import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="Container">
        <div className="left">
          <div className="Home">
            <div className="Icon">
              {" "}
              <HomeSharpIcon />{" "}
            </div>
            <div className="Text">Home</div>
          </div>
          <div className="Chat">
            <div className="Icon">
              <ChatBubbleSharpIcon />
            </div>
            <div className="Text">Chat</div>
          </div>
        </div>
        <div className="Add">
          <div className="IconAdd">
            <AddBoxSharpIcon />
          </div>
        </div>
        <div className="right">
          <div className="Calendar">
            <div className="Icon">
              <CalendarMonthSharpIcon />
            </div>
            <div className="Text">Calendar</div>
          </div>
          <div className="Notification">
            <div className="Icon">
              <NotificationsSharpIcon />
            </div>
            <div className="Text">Notification</div>
          </div>
        </div>
      </div>
    </div>
  );
}
