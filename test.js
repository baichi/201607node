'use strict'
function one(){
    'use strict'
    function two(){
        console.log(this);
    }
    two();
}

one();