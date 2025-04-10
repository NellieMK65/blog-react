import { BlogCard } from './components/BlogCard';
import { FeaturedBlogCard } from './components/FeaturedBlogCard';
import { SearchBar } from './components/SearchBar';

const blogOne = {
	title: 'React',
	description: 'Learning react',
	category: 'Tech',
	image: 'https://cdn.pixabay.com/photo/2024/08/30/10/15/woman-9009013_1280.png',
};

const blogTwo = {
	title: 'JS',
	description: 'JS objects',
	category: 'Tech',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP_endJ0irj_csDdx69b2bo8te3UMTrDDPXQ&s',
};

// array iterating methods
// map, find, reduce, forEach, filter
// .map -> iterate over the array and return the modified array
const blogs = [
	{
		id: 1,
		title: 'React',
		description: 'Learning react',
		category: 'Tech',
		image: 'https://cdn.pixabay.com/photo/2024/08/30/10/15/woman-9009013_1280.png',
	},
	{
		id: 2,
		title: 'JS',
		description: 'JS objects',
		category: 'Tech',
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP_endJ0irj_csDdx69b2bo8te3UMTrDDPXQ&s',
	},
	{
		id: 3,
		title: '10 ways to take your UI design game to the next level',
		description: 'UI/UX',
		category: 'UI',
		image: 'https://www.istockphoto.com/resources/images/IllustrationsLanding/SignatureTile-1318319153.jpg',
	},
	{
		id: 4,
		title: 'New blog',
	},
];

// the spread operator creates a copy at this point
// const obj = { ...blogOne };

function App() {
	return (
		<main className="min-h-screen flex p-8 gap-3 bg-gray-100 font-poppins">
			<div className="w-[70%] space-y-3">
				<h1 className="font-semibold text-2xl">Latest Blogs</h1>
				<SearchBar />

				<FeaturedBlogCard
					image="https://digitalsynopsis.com/wp-content/uploads/2019/08/beautiful-illustrations-design-inspiration-37.png"
					title="How much can an app make for you?"
					description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, impedit. Similique, delectus? Fugiat libero nihil autem laboriosam ut quasi sint in? Officia voluptates nihil dolore consequuntur, unde magnam numquam odit."
					category="Marketing"
					viewCount={1600}
					// isVisible={true}
				/>

				<FeaturedBlogCard
					viewCount={15000}
					title="React basics"
					category="Tech"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nostrum ad nemo enim cumque maxime rem accusantium totam blanditiis recusandae dolor adipisci provident, animi, quisquam eos commodi quam sit dignissimos."
					image="https://slp-statics.astockcdn.net/static_assets/staging/25Illustrations/Card4_1163891948.jpg?width=580&format=webp"
				/>

				<div className="grid grid-cols-2 gap-6">
					{/* This was the first implementation */}
					{/* <BlogCard {...blogOne} />
					<BlogCard {...blogTwo} />
					<BlogCard />
					<BlogCard /> */}

					{/* List and keys */}
					{blogs.map((blog) => (
						<BlogCard key={blog.id} {...blog} />
					))}

					{/* {blogs.map(function (blog) {
						return <BlogCard key={blog.id} {...blog} />;
					})} */}
				</div>
			</div>
			<div className="flex-1">News</div>
		</main>
	);
}

export default App;
