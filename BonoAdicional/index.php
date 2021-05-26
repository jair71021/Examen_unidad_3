<!doctype html>
<html lang="en">
  <head>
    <title>Bono Adicional</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  </head>
  <body>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4"></h1>
          <div class="card">
            <div class="card-body">
              <form method="post" onsubmit="return calcular_bono()" id="frmdatos"> <h3>Datos del empleo</h3>
                <div class="row">
                  <div class="col">
                    <label for="cantidad">Sueldo</label>
                    <input type="text" class="form-control" id="cantidad" name="cantidad" placeholder="Ingresa su Sueldo" pattern="[0-9]+">     
                  </div>
                  
                  <div class="col">
                    <label for="edad">Edad</label>
                    <input type="text" class="form-control" id="edad" name="edad" placeholder="Ingresa su Edad" pattern="[0-9]+">     
                  </div>
                </div>
                <hr> 
                <div class="row">
                  <div class="col">
                    <label for="mof">Sexo</label>
                      <select name="mof" id="mof" class="form-control">
                        <option value="">[Seleccionar]</option>
                        <option value="masculino">Masculino</option>
                        <option value="fenemino">Fenemino</option>
                      </select>
                    </div>
                  <div class="col">
                    <label for="noe">Nacionalidad</label>
                      <select name="noe" id="noe" class="form-control">
                        <option value="">[Seleccionar]</option>
                        <option value="nacional">Nacional</option>
                        <option value="extranjero">Extranjero</option>
                      </select>
                  </div>
                </div>
                <hr> 
                <h3>Curso</h3>
                  <div class="row">
                    <div class="col-sm-6">
                      <input type="checkbox" name="crs" id="php" value="php">
                        <label for="php"> PHP </label>
                    </div>
                    <div class="col-sm-6">
                      <input type="checkbox" name="crs" id="java" value="java">
                        <label for="java">Java</label>
                    </div>
                  </div>
                  <br>
                  <div class="row">
                    <div class="col-sm-6">
                      <input type="checkbox" name="crs" id="aspnet" value="aspnet">
                        <label for="aspnet"> ASP.Net </label>
                    </div>
                    <div class="col-sm-6">
                      <input type="checkbox" name="crs" id="oracle" value="oracle">
                        <label for="oracle">Oracle</label>
                    </div>
                  </div>
                  <br>
                  <div class="row">
                    <div class="col-sm-6">
                      <input type="checkbox" name="crs" id="vdnet" value="vdnet">
                        <label for="vdnet"> VD.Net </label>
                    </div>
                    <div class="col-sm-6">
                      <input type="checkbox" name="crs" id="bd" value="bd">
                        <label for="bd">Introducion a las base de datos </label>
                    </div>
                  </div>  
                <hr> 
                <h3>Antiguedad</h3>
                  <div class="row">
                    <div class="col-sm-6">
                      <input type="radio" name="anti" id="1a5" value="1a5">
                        <label for="1a5"> 1 a 5 años </label>
                    </div>
                    <div class="col-sm-6">
                      <input type="radio" name="anti" id="6a10" value="6a10">
                        <label for="6a10">6 a 10 años</label>
                    </div>
                  </div>
                  <br>
                  <div class="row">
                    <div class="col-sm-6">
                      <input type="radio" name="anti" id="10omas" value="10omas">
                        <label for="10omas">10 o mas años </label>
                    </div> 
                  </div> 
                  <br>
                  <div class="row">
                    <div class="col-sm-6">
                      <button class="btn btn-outline-primary">Calcular</button>
                        <span class="btn btn-outline-success" onclick="limpiar()"> Nuevo caLculo</span>
                    </div>
                    <div class="col-sm-6">  
                      <label for="10omas">Total de bono </label>
                        <input type="text" id="Total_Bono" class="form-control" readonly>
                      
                    </div>
                  </div>
              </form>
            </div>
          </div>
      </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script src="script.js"></script>
  </body>
</html>
