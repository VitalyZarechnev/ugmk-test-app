export const formatWeight = (value: number) => {
	if (!value) return 0;

	return Math.floor(value / 1000);
};
