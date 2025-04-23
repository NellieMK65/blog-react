import { Link } from 'react-router-dom';

function AboutPage() {
	return (
		<div>
			<Link to={'/'}>
				<button className="border bg-amber-300 p-3">Home</button>
			</Link>
		</div>
	);
}

export default AboutPage;
