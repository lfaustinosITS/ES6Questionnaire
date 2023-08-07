function log(v) {
    if (v) { console.log('ok'); }
    else { console.log('no'); }
}

//   true gives ok
//   false gives no
//   ‘true’ gives ok
//   ‘false’ gives ok (Any no empty string is a truthy value)
//   {} gives ok
//   [] gives ok
//   NaN gives no
//   0 gives no
//   1 gives ok
//   undefined gives no
//   null gives no
