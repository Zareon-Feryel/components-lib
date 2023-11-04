export function timestampToNumericDate (timestamp: Date | string): string {
	const date = new Date(timestamp);
	return `${formatDateNumbers(date.getDate())}/${formatDateNumbers(date.getMonth() + 1)}/${date.getFullYear()}`;
}

function formatDateNumbers (number: number): string {
	return number < 10 ? `0${number}` : `${number}`;
}

export function formatNumericDateToReadable (culture: string, date: string) {
	const inputDate = new Date(date);
	const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
	const formattedDate = new Intl.DateTimeFormat(`${culture}-${culture.toUpperCase()}`, options).format(inputDate);
	
	return (formattedDate);
}