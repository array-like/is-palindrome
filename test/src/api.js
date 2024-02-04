import test from 'ava';

import {isPalindrome} from '#module';

const macro = (t, s, expected) => {
	t.is(expected, isPalindrome(s));
};

macro.title = (title, s, expected) =>
	title ?? expected ? `'${s}' is a palindrome` : `'${s}' is not a palindrome`;

test(macro, '', true);
test(macro, 'Ö', true);
test(macro, 'x', true);
test(macro, 'xx', true);
test(macro, 'xyx', true);
test(macro, 'sator arepo tenet opera rotas', true);
test(macro, 'ΝΙΨΟΝΑΝΟΜΗΜΑΤΑΜΗΜΟΝΑΝΟΨΙΝ', true);

test(macro, 'ab', false);
test(macro, 'abc', false);
test(macro, 'abca', false);
test(macro, 'sator arepo tenët opera rotas', false);
test(macro, 'Sator Arepo Tenet Opera Rotas', false);
test(macro, 'ΝΙΨΟΝ ΑΝΟΜΗΜΑΤΑ ΜΗ ΜΟΝΑΝ ΟΨΙΝ', false);
