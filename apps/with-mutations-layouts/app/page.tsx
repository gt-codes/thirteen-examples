import styles from './page.module.css';
import { supabase } from './utils/supabase';

export default async function Home() {
	const { data, error } = await supabase
		.from('messages')
		.select('*')
		.order('created_at', { ascending: false });

	return (
		<div className={styles.container}>
			<h1>All Messages</h1>
			<pre>{JSON.stringify({ data, error }, null, 2)}</pre>
		</div>
	);
}
