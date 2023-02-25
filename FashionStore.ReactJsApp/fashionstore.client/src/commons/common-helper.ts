export const createData = (criteria: string, data: string) => {
	return { criteria, data };
}

export const getCookie = (name: string): string | null => {
	const cookieString = document.cookie;
	if (cookieString.length === 0) {
		return null;
	}

	const cookies = cookieString.split("; ");
	for (const cookie of cookies) {
		const [cookieName, cookieValue] = cookie.split("=");
		if (cookieName === name) {
			return decodeURIComponent(cookieValue);
		}
	}

	return null;
};
