$(document).ready(function(){
  let grains = 1;
  let total = 1;
  for (var i = 1; i <= 64; i++) {
    $('#table').append(
      `<tr>
        <td>${i}</td>
        <td>${grains.toLocaleString()}</td>
        <td>${total.toLocaleString()}</td>
      </tr>`
    )
    grains = grains*2;
    total = total+grains;
  }//end of loop

}); //doc ready
