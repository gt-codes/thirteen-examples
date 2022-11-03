'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { addMessage } from '../lib/add-message';

export default function Form({ id }: { id: string }) {
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState('');

	const handleSubmit = async () => {
		setLoading(true);
		await addMessage({ message, author: Number(id) }, router.refresh);
		setLoading(false);
		setMessage('');
	};
	return (
		<div>
			<label htmlFor="message">New Message</label>
			<input
				id="message"
				name="message"
				type="text"
				value={message}
				onChange={(e) => setMessage(e.target.value)}
			/>
			<button type="button" onClick={handleSubmit}>
				{loading ? 'Submitting...' : 'Submit'}
			</button>
			<Link href={`/${id}/messages`}>View Messages</Link>
		</div>
	);
}
