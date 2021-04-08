
  $(document).ready(function () {


    var datos = [
        {
          name: "Alejandro",
          username: "alejandro",
          email: "alejandro@gmail.com"
        },
        {
          name: "Julio",
          username: "julillo",
          email: "julio@yahoo.es"
        },
        {
          name: "Pedro",
          username: "peter",
          email: "peter@gmail.com"
        },
        {
            name: "Julio",
            username: "julillo",
            email: "julio@yahoo.es"
          },
          {
            name: "Pedro",
            username: "peter",
            email: "peter@gmail.com"
          },
          {
            name: "Julio",
            username: "julillo",
            email: "julio@yahoo.es"
          },
          {
            name: "Pedro",
            username: "peter",
            email: "peter@gmail.com"
          },
          {
            name: "Julio",
            username: "julillo",
            email: "julio@yahoo.es"
          },
          {
            name: "Pedro",
            username: "peter",
            email: "peter@gmail.com"
          },
          {
            name: "Julio",
            username: "julillo",
            email: "julio@yahoo.es"
          },
          {
            name: "Pedro",
            username: "peter",
            email: "peter@gmail.com"
          }
          ,
          {
            name: "Julio",
            username: "julillo",
            email: "julio@yahoo.es"
          },
          {
            name: "Pedro",
            username: "peter",
            email: "peter@gmail.com"
          } 
      ];
      
      $('#myTable').DataTable({
        paging: true,
        searching: true,
        info: false,
        data: datos,
        columns: [
          { title: "Nombre", data: "name" },
          { title: "Usuario", data: "username" },
          { title: "Correo", data: "email" }
        ],
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
          ]
      });
    
    
      $("#myTable").attr('style',  'margin-top:20px');
      $("#myTable_filter").attr('style','margin-top:20px');
      
    

      
  });