export const filenameFromPath = (path, {
	includeExtension = false
} = {}) => {
	if (!path || typeof path !== 'string') return;

	const pathParts = path.split('/');

	if (!pathParts.length) return path;
	if (pathParts.length === 1)
	{
		if (path.includes('.') && !includeExtension)
		{
			// Is a filename without a path
			const nameParts = path.split('.');
			if (nameParts.length > 1) return nameParts.slice(0, nameParts.length - 1).join('');
		}

		// Is not a path, return string raw
		return path;
	}

	const fileName = pathParts[pathParts.length-1];
	if (includeExtension) return fileName;

	if (fileName.includes('.') && !includeExtension)
	{
		const nameParts = fileName.split('.');
		if (nameParts.length > 1) return nameParts.slice(0, nameParts.length - 1).join('.');
	}

	return fileName;
}