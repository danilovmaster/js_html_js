"use strict"
console.log(`
	Какие из перечисленных ниже console.log выполнятся?

	Какие конкретно значения будут результатами выражений в условиях if(...)?

	if (-1 || 0) console.log( 'first' );
	if (-1 && 0) console.log( 'second' );
	if (null || -1 && 1) console.log( 'third' );
`);

console.log(`
	if (-1 || 0) console.log( 'first' )
	выполнится, '-1' конвертируется в true, на этом проверка остановится, проверка:`);

if (-1 || 0) console.log( 'first' );

console.log(`
	(-1 && 0) console.log( 'second' );
	невыполнится, здесь условие и, одно утверждение истинное, второе ложное.
	Проверим:
	`);

if (-1 && 0) console.log( 'second' );

console.log(`
	if (null || -1 && 1) console.log( 'third' );
	выполнится - приоритет у && больше, сначала вычислится -1 && 1 - здесь оба утверждения истинны
	`);

if (null || -1 && 1) console.log( 'third' );