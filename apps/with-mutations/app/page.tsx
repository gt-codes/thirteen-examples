import styles from './page.module.css';
import Form from './components/form';
import { supabase } from './utils/supabase';

export default async function Home() {
	const { data, error } = await supabase.from('messages').select('*');

	return (
		<div className={styles.container}>
			<Form />
			<pre>{JSON.stringify({ data, error }, null, 2)}</pre>
		</div>
	);
}
