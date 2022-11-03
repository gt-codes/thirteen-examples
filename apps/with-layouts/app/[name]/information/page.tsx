interface Country {
	name: string;
	capital: string;
	population: number;
}

const countries: Country[] = [
	{
		name: 'UK',
		capital: 'London',
		population: 8799800,
	},
	{
		name: 'USA',
		capital: 'Washington, DC',
		population: 331893745,
	},
	{
		name: 'Australia',
		capital: 'Canberra',
		population: 25990600,
	},
];

const getInfo = async (name: string): Promise<Country> => {
	return await new Promise((resolve) => {
		const country = countries.find(
			(country) => country.name.toLowerCase() === name.toLowerCase()
		) as Country;
		resolve(country);
	});
};

export default async function Information({ params }: { params: { name: string } }) {
	const data = await getInfo(params.name);

	return (
		<div className="flex">
			<div className="flex-col">
				<p className="text-xl">Capital: {data.capital}</p>
				<p className="text-xl">Population: {data.population}</p>
			</div>
		</div>
	);
}
