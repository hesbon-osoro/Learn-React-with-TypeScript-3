function lo(s1: number, s2: number, s3: number) {
	console.log(s1, s2, s3);
}
const l1: [number, number, number] = [75, 65, 80];

lo(...l1);

const scoreUnlimited: [...number[]] = [75, 84, 90, 100];

// lo(...scoreUnlimited)
