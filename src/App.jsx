import { useState } from 'react';
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
const data = [
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
const { image, title } = blogOne;
const numbers = [1, 2, 3];
const [one, two, four] = numbers;

const Button = () => {
	return <button className="p-3 bg-blue-300">My Button</button>;
};

function App() {
	// React state -> dynamic data in a component
	const [count, updateCount] = useState(0);
	const [blogs, setBlogs] = useState(data);

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [category, setCategory] = useState('');
	const [image, setImage] = useState('');

	// TO BE COVERED LATER
	// useEffect(() => {
	// 	fetch('http://localhost:3000/blogs')
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			setBlogs(data);
	// 		});
	// }, []);

	return (
		<main className="min-h-screen flex p-8 gap-3 bg-gray-100 font-poppins">
			<div className="w-[70%] space-y-3">
				<button
					className="border bg-amber-300 p-3"
					onClick={() => {
						console.log('Button clicked');
						updateCount(count + 1);
					}}
				>
					Count {count}
				</button>

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
					{blogs.map((blog, index) => (
						<BlogCard key={index} {...blog} />
					))}

					{/* {blogs.map(function (blog) {
						return <BlogCard key={blog.id} {...blog} />;
					})} */}
				</div>
			</div>
			<div className="flex-1">
				News
				<form
					action=""
					className="border p-2 rounded-xl w-full space-y-3"
					onSubmit={(e) => {
						e.preventDefault();
						console.log({ title, description, category, image });
						// update blogs with new values from form
						setBlogs([
							...blogs,
							...[{ title, description, category, image }],
						]);
						// clear form
						setTitle('');
					}}
				>
					<div>
						<label htmlFor="">Title</label>
						<input
							type="text"
							placeholder="title"
							className="p-2 bg-white border w-full rounded-lg"
							onChange={(e) => {
								setTitle(e.target.value);
							}}
						/>
					</div>
					<div>
						<label htmlFor="">Description</label>
						<textarea
							name=""
							id=""
							placeholder="description"
							className="p-2 bg-white border w-full rounded-lg"
							onChange={(e) => {
								setDescription(e.target.value);
							}}
						></textarea>
					</div>
					<div>
						<label htmlFor="">Category</label>
						<input
							type="text"
							placeholder="Category"
							className="p-2 bg-white border w-full rounded-lg"
							onChange={(e) => {
								setCategory(e.target.value);
							}}
						/>
					</div>
					<div>
						<label htmlFor="image">Image</label>
						<input
							id="image"
							type="text"
							placeholder="image"
							className="p-2 bg-white border w-full rounded-lg"
							onChange={(e) => {
								setImage(e.target.value);
							}}
						/>
					</div>
					<button className="w-full p-2 bg-amber-300 rounded-lg">
						Save
					</button>
				</form>
			</div>
		</main>
	);
}

export default App;
