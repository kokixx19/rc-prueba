$(document).ready(function () {

    var fecha = new Date(); //Fecha actual
  var mes = fecha.getMonth()+1; //obteniendo mes
  var dia = fecha.getDate()+1; //obteniendo dia
  var ano = fecha.getFullYear(); //obteniendo año
  if(dia<10)
    dia='0'+dia; //agrega cero si el menor de 10
  if(mes<10)
    mes='0'+mes //agrega cero si el menor de 10
  $('#CalendarAgenda').val(ano+"-"+mes+"-"+dia);

  console.log("La fecha",fecha);
  ObtenerParticipantes();

  $("#Visitas").change(function(){
    if($(this).prop("checked") == true){
       $("#visita2").html("");
       $("#visita2").append(`

       <label>Seleccionar Empresa para la Visita despues del medio día (Tarde)</label>
       <select class="form-control">
         <option>MGi SAFI</option>
         <option>Option 2</option>
         <option>Option 3</option>
       </select>

`);
   console.log("true");
    }else{

        $("#visita2").empty();
        console.log("false")
    }
});
    

});



  




  function ObtenerParticipantes(){
    $('[name="checks[]"]').click(function() {
      
        var arr = $('[name="checks[]"]:checked').map(function(){
          return this.value;
        }).get();
        
        var str = arr.join(',');
        
        $('#arr').text(JSON.stringify(arr));
        
        $('#str').text(str);

        console.log(str);


      
      });

      
  }
