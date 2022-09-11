import _isPalindrome from './_isPalindrome.js';

/**
 * Tests whether an array-like is a palindrome.
 *
 * @param {ArrayLike} a Array-like input
 * @return boolean True if the input is a palindrome.
 */
export default function isPalindrome(a) {
	return _isPalindrome(a, 0, a.length);
}
