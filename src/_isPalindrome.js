/**
 * Tests whether a slice of an array-like is a palindrome.
 *
 * @param {ArrayLike} a Array-like input
 * @param {number} i Inclusive left bound
 * @param {number} j Non-inclusive right bound
 * @return boolean True if the input slice is a palindrome.
 */
export default function _isPalindrome(a, i, j) {
	while (i < j) {
		if (a[i++] !== a[--j]) {
			return false;
		}
	}

	return true;
}
