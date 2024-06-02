/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   index.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: aelomari <aelomari@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/05/24 10:17:15 by aelomari          #+#    #+#             */
/*   Updated: 2024/05/25 15:20:39 by aelomari         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from 'react'
import './style.css'
import Welcome from '../welcomeuser'
import SearchBar from '../searchbar'
import Taskcomp from '../taskcompleted'
import Onproject from '../onproject'



export default function Home() {
  return (
	<div>
		<div className='Homepage'>


		<Welcome />
		<SearchBar />
		<Taskcomp />
		<Onproject/>

		</div>
	</div>
  )
}
