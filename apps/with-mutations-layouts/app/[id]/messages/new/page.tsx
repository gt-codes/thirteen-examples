import React from 'react';
import Form from '../../../components/form';

export default function NewMessagePage({ params: { id } }: { params: { id: string } }) {
	return <Form id={id} />;
}
