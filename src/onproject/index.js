/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   index.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: aelomari <aelomari@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/05/24 10:16:49 by aelomari          #+#    #+#             */
/*   Updated: 2024/06/02 19:26:09 by aelomari         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from "react";
import "./style.css";
import Boxproject from "../onprojectbox";
import { useNavigate } from "react-router-dom";


export default function Onproject() {
	const Navigate = useNavigate();
function handleNav()
{
	Navigate("/taskcompleted");
}
  return (
    <div className="Onprojects">
      <div className="Head">
        <h1>On Project</h1>
		<button onClick={handleNav}>Go to Task Completed</button>
      </div>
      <Boxproject title="Mobile App Wireframe" date="21 March" progress={75} />
      <Boxproject title="Real Estate App Design" date="20 June" progress={60} />
      <Boxproject title="Dashboard & App Design" date="20 June" progress={50} />
      <Boxproject title="E-commerce Website" date="10 July" progress={80} />
      <Boxproject
        title="Social Media Campaign"
        date="15 August"
        progress={90}
      />
      <Boxproject title="SEO Optimization" date="5 September" progress={40} />
      <Boxproject title="Content Strategy" date="25 September" progress={55} />
      <Boxproject
        title="Customer Feedback Analysis"
        date="30 October"
        progress={65}
      />
      <Boxproject title="New Marketing Plan" date="15 November" progress={30} />
      <Boxproject title="Website Redesign" date="1 December" progress={70} />
    </div>
  );
}
