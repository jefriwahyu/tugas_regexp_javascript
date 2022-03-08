
function panggilRegexp(value) {
 let str = "abcdefghijklmnopqrstuvwxyz-A        B        C        D        E        F        G        H        I        J        K        L        M        N        O        P        Q        R        S        T        U        V        W        X        Y        Z";

 let wer = str.match(/c/g);
 wer.push('C');
 console.log(wer);
 let wer2 = str.match(/k/g);
 wer2.push('K');
 console.log(wer2);
 let wer3 = str.match(/l/g);
 wer3.push('L');
 return wer3;

}

console.log(panggilRegexp())
