import { FeaturedBlogCard } from './components/FeaturedBlogCard';
import { SearchBar } from './components/SearchBar';

function App() {
	return (
		<main className="min-h-screen flex p-8 gap-3 bg-gray-100 font-poppins">
			<div className="w-[70%] space-y-3">
				<h1 className="font-semibold text-2xl">Latest Blogs</h1>
				<SearchBar />
				<FeaturedBlogCard />
			</div>
			<div className="flex-1">News</div>
		</main>
	);
}

export default App;
