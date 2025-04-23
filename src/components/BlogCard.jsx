import './BlogCard.css';
import { Link } from 'react-router-dom';

// A component only accepts one parameter

// inline desctructuring
export function BlogCard({ id, image, title, description, category }) {
	// console.log(props);

	// outline destructuring
	// const { id, image, title, description, category } = props;

	return (
		<Link
			to={`/blogs/${id}`}
			className="flex flex-col rounded-xl shadow bg-white overflow-hidden hover:cursor-pointer"
		>
			<img src={image} className="w-full h-56" />
			<div className="p-4">
				<h3 className="text-purple-500 text-sm">{category}</h3>
				<h1 className="font-bold text-2xl">{title}</h1>
				<p className="line-clamp-3">{description}</p>
			</div>
		</Link>
	);
}
