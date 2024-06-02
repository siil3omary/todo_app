/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   index.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: aelomari <aelomari@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/05/24 10:17:50 by aelomari          #+#    #+#             */
/*   Updated: 2024/05/24 10:17:52 by aelomari         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from "react";
import "./style.css";

export default function Tasks({ title, teammembre, progress }) {
  return (
    <div className="tasks">
      <div className="Box">
        <div className="task">
          <div className="taskname">
            <h3>{title}</h3>
          </div>
		  <div className="team">
			<h9>team members</h9>
			<div className="avatars">
				{teammembre.map((member , index) => (
					<>
					<img key={index}  src={member.avatar}  alt=""/>
					</>
				))}
			</div>
		  </div>
		<h4>Completed</h4>
          <div className="progress">
			<div className="progress-bar" style={{width : `${progress}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
