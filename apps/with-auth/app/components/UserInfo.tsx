'use client';
import { useSession } from 'next-auth/react';

export default function UserInfo() {
	const { data } = useSession();
	return <div>{data?.user?.name}</div>;
}
