'use client';
import { signOut } from 'next-auth/react';

export default function Signout() {
	const handleClick = () => signOut({ callbackUrl: '/' });
	return <button onClick={handleClick}>Sign Out</button>;
}
