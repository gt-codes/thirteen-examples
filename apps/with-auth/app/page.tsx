import Link from 'next/link';

export default function Home() {
	return (
		<div>
			<h1>This is a public page</h1>
			<Link href='/dashboard'>Admin Dashboard</Link>
		</div>
	);
}
