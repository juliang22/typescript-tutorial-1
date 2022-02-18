import React from 'react'
import '../App.css';
import { IPeeps as IProps } from '../App'


const List: React.FC<IProps> = ({ peeps }) => {

	const renderList = (): JSX.Element[] => {
		return peeps.map(person => {
			return (
				<li className="List">
					<div className="List-header">
						<img className="List-img" src={person.url} alt='img' />
						<h2>{person.name}</h2>
					</div>
					<p>{person.age} years old</p>
					<p className="List-note">{person.note}</p>
				</li>
			)
		})
	}

	return (
		<ul>
			{renderList()}
		</ul>
	)
}

export default List


