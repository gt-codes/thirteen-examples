import Image from 'next/image';

const getPhotos = async (name: string): Promise<string[]> => {
	return new Promise((resolve) => {
		resolve(Array(6).fill('https://picsum.photos/200/300'));
	});
};

export default async function Gallery({ params }: { params: { name: string } }) {
	const photos = await getPhotos(params.name);

	return (
		<div className="p-2">
			<div className="flex flex-col">
				<div className="grid gap-3 grid-cols-3">
					{photos.map((photo, i) => (
						<div className="relative rounded-lg overflow-hidden w-52 h-80" key={i}>
							<Image src={photo} fill alt={`image ${i}`} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
