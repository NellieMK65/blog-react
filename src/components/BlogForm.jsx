import { useState } from 'react';
import toast from 'react-hot-toast';

const initialValues = {
	title: '',
	description: '',
	category: '',
	image: '',
	author: '',
};

export const BlogForm = ({ day, sayHi, handleFetch }) => {
	const [formData, setFormData] = useState(initialValues);

	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormData((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// For other CRUD operations,
		// we do not need useEffect since the
		// users can only interact with things like
		// forms once the entire website is rendered
		fetch('http://localhost:3000/blogs', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				// This will go to App.jsx
				// and it will execute the function
				handleFetch();

				toast.success('Blog created successfully');

				// we only reset the form incase the operation
				// is successful
				setFormData(initialValues);
			})
			.catch(() => {
				// handle any errors that might occur
				toast.error('Unable to save blog');
			});
	};

	return (
		<form
			action=""
			className="border p-2 rounded-xl w-full space-y-3"
			onSubmit={handleSubmit}
		>
			<div>
				<label htmlFor="">Title</label>
				<input
					type="text"
					placeholder="title"
					className="p-2 bg-white border w-full rounded-lg"
					onChange={handleChange}
					name="title"
					value={formData.title}
				/>
			</div>
			<div>
				<label htmlFor="">Description</label>
				<textarea
					name="description"
					id=""
					placeholder="description"
					className="p-2 bg-white border w-full rounded-lg"
					onChange={handleChange}
					value={formData.description}
				></textarea>
			</div>
			<div>
				<label htmlFor="">Category</label>
				<input
					type="text"
					placeholder="Category"
					className="p-2 bg-white border w-full rounded-lg"
					onChange={handleChange}
					name="category"
					value={formData.category}
				/>
			</div>
			<div>
				<label htmlFor="image">Image</label>
				<input
					id="image"
					type="text"
					placeholder="image"
					className="p-2 bg-white border w-full rounded-lg"
					onChange={handleChange}
					name="image"
					value={formData.image}
				/>
			</div>
			<button className="w-full p-2 bg-amber-300 rounded-lg">Save</button>
		</form>
	);
};
