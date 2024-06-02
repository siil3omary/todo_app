/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   index.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: aelomari <aelomari@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/05/24 10:17:25 by aelomari          #+#    #+#             */
/*   Updated: 2024/05/24 11:22:56 by aelomari         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from "react";
import "./style.css";

export default function Boxproject({ title, date , progress}) {
  return (
    <div className="project">
      <div className="titles">{title}</div>
      <div className="left-right">
        <div className="left">
          <h6>team members</h6>
          <div className="avatar"></div>
          <div className="date"> Due on : {date}</div>
        </div>
        <div className="righ">
          <svg
            width="50"
            height="50"
            viewBox="0 0 250 250"
            class="circular-progress"
            style={{'--progress': `${progress}`}}
			>
            <circle class="bg"></circle>
            <circle class="fg"></circle>

          </svg>
        </div>
      </div>
    </div>
  );
}
