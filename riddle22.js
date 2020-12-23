'use strict';

// g -> c
// c -> g
// t -> a
// a -> u

// let DNKString = 'agtc';
let DNKString = prompt('введите днк строку');
console.log('DNKString: ', DNKString);

// const funcDNKtoRNK = function(DNKString) {

if (typeof DNKString === 'string') {

    
    let RNKString = '';
    DNKString = DNKString.toUpperCase();
    console.log('DNKString: ', DNKString);

    const mask = {
        'A': 'U',
        'T': 'A',
        'C': 'G',
        'G': 'C'
    }
    
    for (let i = 0; i < DNKString.length; i++) {
        
        const element = DNKString[i];

        if (typeof mask[element] === 'undefined') {
            console.log('Sorry! here is error in DNK');
            break;
        }
        RNKString += mask[element];


/**        
        if (element === 'A') {
            RNKString += 'U';
        } else if (element === 'T') {
            RNKString += 'A';
        } else if (element === 'G') {
            RNKString += 'C';
        } else if (element === 'C') {
            RNKString += 'G';
        } else {
            console.log('Sorry! here is error in DNK');
            break;
        }
*/        
        console.log('RNKString: ', RNKString);
    };
    

} else {
    console.log('Sorry это не строка');
}
    
    
    // }
