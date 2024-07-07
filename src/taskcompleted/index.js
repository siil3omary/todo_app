/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   index.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: aelomari <aelomari@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/05/24 10:17:43 by aelomari          #+#    #+#             */
/*   Updated: 2024/06/02 19:11:12 by aelomari         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from "react";
import "./style.css";
import Tasks from "../tasks";
import TaskCompleted from "../taskcompletedpage";

export default function Taskcomp() {
  return (
    <div>
      <div className="Completedtask">
        <div className="head">
          <h2>Task Completed</h2>
		  <a to="/taskcompleted" className="viewall">
			View All
					  </a>
        </div>
        <div className="taskss">
          <Tasks
            title={"Real Estate Website Design"}
            teammembre={[
              { avatar: "../../public/download.png" },
              { avatar: "../../public/download.png" },
              { avatar: "../../public/download.png" },
              { avatar: "../../public/download.png" },
              { avatar: "../../public/download.png" },
            ]}
            progress="90"
          />
          <Tasks
            title={"Real Estate Website Design"}
            teammembre={[
              { avatar: "avatar1.png" },
              { avatar: "avatar2.png" },
              { avatar: "avatar3.png" },
              { avatar: "avatar4.png" },
            ]}
            progress="100"
          />
          <Tasks
            title={"Real Estate Website Design"}
            teammembre={[
              { avatar: "avatar1.png" },
              { avatar: "avatar2.png" },
              { avatar: "avatar3.png" },
              { avatar: "avatar4.png" },
            ]}
            progress="100"
          />
          <Tasks
            title={"Real Estate Website Design"}
            teammembre={[
              { avatar: "avatar1.png" },
              { avatar: "avatar2.png" },
              { avatar: "avatar3.png" },
              { avatar: "avatar4.png" },
            ]}
            progress="100"
          />
        </div>
      </div>
    </div>
  );
}
