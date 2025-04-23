import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BlogCard } from '../components/BlogCard';

function BlogDetails() {
	const [blog, setBlog] = useState();

	const params = useParams();

	useEffect(() => {
		fetch(`http://localhost:3000/blogs/${params.blogId}`)
			.then((res) => res.json())
			.then((data) => setBlog(data));
	}, [params.blogId]); //provide params as a dependancy so that everytime the id in the url changes,
	// the useEffect runs again which means the fetch runs again too

	return (
		<div>
			BlogDetails {params.blogId}
			<BlogCard {...blog} />
		</div>
	);
}

export default BlogDetails;
