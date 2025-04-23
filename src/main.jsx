import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home.jsx';
import AboutPage from './pages/About.jsx';
import BlogDetails from './pages/BlogDetails.jsx';

// configure our routes/pages
const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/about',
		element: <AboutPage />,
	},
	{
		// this is a dynamic route
		// -> blogs/1
		// -> blogs/95
		path: '/blogs/:blogId',
		element: <BlogDetails />,
	},
	// {
	// 	path: '/courses/:id',
	// 	element: <div>Course</div>,
	// },
	// {
	// 	path: '/courses/:courseId',
	// },
	// {
	// 	path: '/courses/:id/assignment/:id', // -> { id: 123 }
	// },
	// {
	// 	path: '/courses/:courseId/assignment/:assignmentId', // -> { courseId: 123, assignmentId: 345 }
	// },
	// {
	// 	path: '/courses/:id/courseId',
	// },
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		{/* instead of display app directly, we display the routes
		and let the package decide what is visible */}
		{/* <App /> */}

		<RouterProvider router={router} />
		<Toaster position="bottom-right" />
	</StrictMode>
);
