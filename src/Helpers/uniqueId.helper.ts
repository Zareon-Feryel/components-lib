/*
 * Generates a unique ID by transforming properties into a base64 string.
 * @param str A string that will be converted to base 64
 * @param properties Additional properties to generate a unique ID
 */
export function getUniqueID (str: string, ...properties: (string | number)[]): string {
	if (!str) {
		throw new Error('String should not be null, undefined or empty.');
	}
	
	const uniqueID = btoa(str);
	if (!properties || properties.length === 0) {
		return uniqueID;
	}
	
	return properties.reduce<string>((acc, cur): string => {
		const stringProperty = typeof cur === 'string' ? cur : `${cur}`;
		
		if (!stringProperty) {
			return '';
		}
		
		return acc + btoa(stringProperty);
	}, uniqueID);
}