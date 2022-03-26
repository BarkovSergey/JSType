const type = (a) => typeof (a);
const bool = (b) => !(b % 2);

const arg = (c) => {
    (type(c) ? console.log(c) : (bool(c) ? console.log('четное') : console.log('нечетное')));
}

const multiTurn = (d) =>  console.log(!(d % 2) ? d * 2 : d * 3);
const multi = (e) => {
  if (!(e % 2)) {
      console.log(e * 2);
  } else {
      console.log(e * 3);
  }
}

const sumSub = (f,g) => {
    f = Number(f);
    g = Number(g);
     if (!((f % 2)) && (!(g % 2))){
         console.log(f + g);
     } else if (!((f % 2)) || (!(g % 2))) {
         console.log(f - g);
     } else {
         console.log(f * g);
     }
}

arg('Hello');
multiTurn(2);
multi(1);
sumSub('22',3);

