import Link from 'next/link';
import React from 'react';
import { supabase } from '../../utils/supabase';

export default async function Layout({
	children,
	params: { id },
}: {
	params: { id: string };
	children: React.ReactNode;
}) {
	const { data } = await supabase.from('messages').select('*').eq('author', id);

	return (
		<div>
			<h1>User #{id}</h1>
			<p>Viewing {data?.length} messages</p>
			<Link href={`/${id}/messages/new`}>Add a Message</Link>
			{children}
		</div>
	);
}
