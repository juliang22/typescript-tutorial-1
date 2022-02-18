import React, { useState } from 'react'
import { IPeeps as Props } from '../App'


interface IProps {
	peeps: Props["peeps"]
	setPeeps: React.Dispatch<React.SetStateAction<Props["peeps"]>>
}


const AddToList: React.FC<IProps> = ({ peeps, setPeeps }) => {

	const [input, setInput] = useState({
		name: '',
		age: '',
		url: '',
		note: ''
	})

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
		setInput({
			...input,
			[e.target.name]: e.target.value
		})
	}

	const handleClick = (): void => {
		if (!input.name || !input.age || !input.url) return
		console.log("hi");
		setPeeps([...peeps, {
			name: input.name,
			age: parseInt(input.age),
			url: input.url,
			note: input.note
		}])
		setInput({
			name: '',
			age: '',
			url: '',
			note: ''
		})
	}

	return (
		<div className='AddToList'>
			<input
				type="text"
				placeholder='Name'
				className='AddToList-input'
				value={input.name}
				onChange={handleChange}
				name="name"
			/>
			<input
				type="text"
				placeholder='Age'
				className='AddToList-input'
				value={input.age}
				onChange={handleChange}
				name="age"
			/>
			<input
				type="text"
				placeholder='Image Url'
				className='AddToList-input'
				value={input.url}
				onChange={handleChange}
				name="url"
			/>
			<textarea
				placeholder='Notes'
				className='AddToList-input'
				value={input.note}
				onChange={handleChange}
				name="note"
			/>
			<button
				className="AddToList-btn"
				onClick={handleClick}
			>
				Add To List
			</button>
		</div>
	)
}

export default AddToList

