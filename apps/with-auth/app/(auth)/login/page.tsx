import Link from 'next/link';
import Signin from '../../components/Signin';

export default function Home() {
	return (
		<div>
			<h1>Login to continue</h1>
			<Signin />
			<Link href='/'>Go Home</Link>
		</div>
	);
}
