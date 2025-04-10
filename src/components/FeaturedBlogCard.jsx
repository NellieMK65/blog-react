// http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
const formatter = new Intl.NumberFormat('en-US', {
	notation: 'compact',
});

export function FeaturedBlogCard({
	image,
	title,
	description,
	category,
	viewCount,
}) {
	return (
		<div className="flex bg-white rounded-xl shadow h-56 overflow-hidden">
			<img src={image} className="h-full w-[30%] object-cover" />
			<div className="flex-1 p-4">
				<h3 className="text-purple-500 text-sm">{category}</h3>
				<h1 className="font-bold text-2xl">{title}</h1>
				<p className="line-clamp-3">{description}</p>
				<div className="flex justify-between mt-2.5">
					<span>{formatter.format(viewCount)}</span>
					<span>Share</span>
				</div>
			</div>
		</div>
	);
}
