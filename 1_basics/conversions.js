let score= "28"

//a scenario where front end is sending teh value in different format lets say string  eg: const{scote}=req.body

//console.log(typeof score);
//console.log(typeof(score)); //output number

//lets change the type to string "28"


let valueIn= Number(score)
//console.log(typeof(valueIn));


/* "33"=>33
   "33aab"=>NaN
   "acbgs"=>NaN
    true=>1 */


    let a=" "
    let b =Boolean(a)
    console.log(typeof b);
    console.log(b);

