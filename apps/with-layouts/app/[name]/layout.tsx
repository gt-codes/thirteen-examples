import Link from 'next/link';
import { ReactNode } from 'react';

export default function Layout({
	children,
	params,
}: {
	children: ReactNode;
	params: { name: string };
}) {
	return (
		<div className="p-3">
			<p className="text-2xl" style={{ fontSize: '2em' }}>
				{params.name}
			</p>
			<nav className="flex">
				<Link
					className="hover:text-red-800 transition-all duration-300"
					href={`${params.name}/information`}
				>
					Information
				</Link>
				<Link
					className="hover:text-red-800"
					href={`${params.name}/gallery`}
					style={{ marginLeft: '10px' }}
				>
					Gallery
				</Link>
			</nav>
			<section>{children}</section>
		</div>
	);
}
