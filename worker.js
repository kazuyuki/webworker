var n = 2300000000000001;	//偶数は素数になり得ないから、奇数を指定すること。
search:
while (true) {
	n += 2;
	for (var i = 2; i <= Math.sqrt(n); i += 1) {
		if (n % i == 0) {
			continue search;
		}
	}
	// 素数を発見
	postMessage(n);
}
