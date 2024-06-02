/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   index.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: aelomari <aelomari@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/05/24 10:17:35 by aelomari          #+#    #+#             */
/*   Updated: 2024/05/24 11:54:59 by aelomari         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from "react";
import "./style.css";
import TuneIcon from "@mui/icons-material/Tune";
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
  return (
    <div>
      <div className="seachbar">
		<div className="search">	
			<SearchIcon />
			<input className="" type="text" placeholder="Search ..." />
		</div>
        <div className="setting">
          <TuneIcon />
        </div>
      </div>
    </div>
  );
}
