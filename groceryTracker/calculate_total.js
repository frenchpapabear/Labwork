let g1Amount;
let g2Amount;
let g3Amount;


function calculateTotal(){
    g1Amount = +document.getElementById('g1Amount').value;
    g2Amount = +document.getElementById('g2Amount').value;
    g3Amount = +document.getElementById('g1Amount').value;

    let result = g1Amount + g2Amount + g3Amount;

    document.getElementById('result').innerHTML = result;
}