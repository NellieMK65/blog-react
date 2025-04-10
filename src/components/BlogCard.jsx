export function BlogCard({ image, title, description, category }) {
	return (
		<div className="flex flex-col rounded-xl shadow bg-white overflow-hidden">
			<img src={image} className="w-full h-56" />
			<div className="p-4">
				<h3 className="text-purple-500 text-sm">{category}</h3>
				<h1 className="font-bold text-2xl">{title}</h1>
				<p className="line-clamp-3">{description}</p>
			</div>
		</div>
	);
}
