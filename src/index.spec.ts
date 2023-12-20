import { add } from './index';

describe('add', () => {
	it('adds two numbers', () => {
		expect(add(1, 5)).toStrictEqual(6);
	});
});
