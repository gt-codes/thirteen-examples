import { supabase } from '../../utils/supabase';

export default async function UserPage({ params: { id } }: { params: { id: string } }) {
	const { data } = await supabase
		.from('messages')
		.select('*')
		.eq('author', id)
		.order('created_at', { ascending: false });

	return (
		<div>{!data?.length ? <p>No Messages</p> : <pre>{JSON.stringify(data, null, 2)}</pre>}</div>
	);
}
