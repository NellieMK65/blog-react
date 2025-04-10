export function FeaturedBlogCard() {
	return (
		<div className="flex bg-white rounded-xl shadow h-56 overflow-hidden">
			<img
				src="https://digitalsynopsis.com/wp-content/uploads/2019/08/beautiful-illustrations-design-inspiration-37.png"
				className="h-full w-[30%] object-cover"
			/>
			<div className="flex-1 p-4">
				<h3 className="text-purple-500 text-sm">MARKETING</h3>
				<h1 className="font-bold text-2xl">
					Embrace the power of story telling in business
				</h1>
				<p className="line-clamp-3">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Nobis, dolores aut eligendi sunt cupiditate vel corrupti
					recusandae quam velit. Rerum aliquid labore architecto ipsam
					placeat aut! Quas libero deleniti suscipit doloribus. Lorem
					ipsum dolor sit amet consectetur adipisicing elit.
					Necessitatibus deserunt praesentium reiciendis tempore unde
					aliquid eius architecto doloribus, ut harum, quidem fugit
					rem! Laudantium ad saepe molestias, suscipit accusamus quam.
				</p>
				<div className="flex justify-between mt-2.5">
					<span>1.6k</span>
					<span>Share</span>
				</div>
			</div>
		</div>
	);
}
