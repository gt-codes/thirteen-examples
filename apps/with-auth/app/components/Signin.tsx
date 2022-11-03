'use client';
import { signIn, useSession } from 'next-auth/react';
import Signout from './Signout';

export default function Signin() {
	const handleClick = () => signIn('github', { callbackUrl: '/' });
	const { data: session } = useSession();
	return (
		<>
			{session ? (
				<div>
					Welcome {session.user?.name} <Signout />
				</div>
			) : (
				<button onClick={handleClick}>Sign In</button>
			)}
		</>
	);
}
