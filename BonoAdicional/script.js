function calcular_bono(){
  //sueldo a ingresar
    let cantidad = parseInt($('#cantidad').val());
      if (cantidad < 1) {
        swal("La cantidad debe ser mayor a cero");
        return false;
      }
  //edad a ingresar      
    let edad = parseInt($('#edad').val());
      if (edad < 1) {
        swal("La cantidad debe ser mayor a cero");
        return false;
      }   
    //sexo
    let mof = $('#mof').val();
      if ( mof== "") {
          swal("Debes seleccionar tu genero");
          return false;
      }
  //nacionalidad
    let noe= $('#noe').val();
      if (noe== "") {
          swal("Debes seleccionar tu nacionalidad");
          return false;
      }
  // curso
    let crs = $('input:checkbox[name=crs]:checked').val();
      if (crs == undefined) {
        swal("Debes seleccionar una opcion");
        return false;
      }
  //antiguedad 
    let anti = $('input:radio[name=anti]:checked').val();
      if (anti == undefined) {
        swal("Debes seleccionar una opcion");
        return false;
      }
    resultado = total(cantidad,edad,mof,noe,crs,anti);
        $('#Total_Bono').val("El bono es : " + resultado );
        return false;
}
function total(cantidad,edad,mof,noe,crs,anti) {
    let total_a_pagar = 0;
    let total_a_pagar_2=0;
    let subtotal=0;
    let subtotal_1=0;
    let subtotal_2=0;
    let subtotal_3=0;
    let subtotal_4=0;
    let curso1=20;
    let curso2=35;
    let curso3=40;
    let curso4=60;
    let curso5=55;
    let curso6=15;
    let total =0;
    

    if (mof == "masculino") {
      if (noe == "nacional") {
        switch (anti) {
          case "1a5":
            if(edad>=45){
              console.log(cantidad);
              subtotal=cantidad *0.15;
              console.log(subtotal);
              subtotal_1=(cantidad+subtotal)*0.02;
              console.log(subtotal_1);
              subtotal_2=(cantidad+subtotal+subtotal_1)*0.05;
              console.log(subtotal_2);
              total_a_pagar =cantidad+subtotal+subtotal_1+subtotal_2;
              console.log(total_a_pagar);
              switch (crs) {
                case "php":
                    total_a_pagar_2 = curso1*3 ;
                    //console.log(total_a_pagar_2);
                    total=total_a_pagar_2+total_a_pagar;
                    //console.log(total);
                break;
                case "java":
                    total_a_pagar_2 = curso2*3;
                    console.log(total_a_pagar_2);
                    total= total_a_pagar_2+total_a_pagar
                    
                    break;
                case "aspnet":
                    total_a_pagar_2 = curso3*3;
                    total= total_a_pagar_2+total_a_pagar
                break;
                case "oracle":
                    total_a_pagar_2 = curso4*3;
                    total= total_a_pagar_2+total_a_pagar
                break;
                case "vdnet":
                    total_a_pagar_2 = curso5*3;
                    total= total_a_pagar_2+total_a_pagar
                break;
                case "bd":
                    total_a_pagar_2 = curso6*3;
                    total= total_a_pagar_2+total_a_pagar
                break;
      
              }

            }else{
              subtotal=cantidad *0.15;
              subtotal_1=(cantidad+subtotal)*0.05;
              total_a_pagar = cantidad +subtotal+subtotal_1;
            
            switch (crs) {
              case "php":
                total_a_pagar_2 = curso1*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "java":
                total_a_pagar_2 = curso2*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "aspnet":
                total_a_pagar_2 = curso3*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "oracle":
                total_a_pagar_2 = curso4*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "vdnet":
                total_a_pagar_2 = curso5*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "bd":
                total_a_pagar_2 = curso6*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
    
            }
          }
          break;
          case "6a10":
            if(edad>=45){
              subtotal=cantidad *0.15;
              subtotal_1=(cantidad+subtotal)*0.02;
              subtotal_2=(cantidad+subtotal+subtotal_1)*0.10;
              total_a_pagar =cantidad+subtotal+subtotal_1+subtotal_2;
              switch (crs) {
                case "php":
                  total_a_pagar_2 = curso1*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "java":
                  total_a_pagar_2 = curso2*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "aspnet":
                  total_a_pagar_2 = curso3*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "oracle":
                  total_a_pagar_2 = curso4*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "vdnet":
                  total_a_pagar_2 = curso5*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                  break;
                case "bd":
                  total_a_pagar_2 = curso6*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
    
              }

            }else{
              subtotal=cantidad *0.15;
              subtotal_1=(cantidad+subtotal)*0.10;
              total_a_pagar = cantidad +subtotal+subtotal_1;
            
            switch (crs) {
              case "php":
                  total_a_pagar_2 = curso1*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "java":
                  total_a_pagar_2 = curso2*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "aspnet":
                  total_a_pagar_2 = curso3*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "oracle":
                  total_a_pagar_2 = curso4*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "vdnet":
                  total_a_pagar_2 = curso5*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "bd":
                  total_a_pagar_2 = curso6*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
    
            }
          } 
          break;
          case "10omas":
            if(edad>=45){
              subtotal=cantidad *0.15;
              subtotal_1=(cantidad+subtotal)*0.02;
              subtotal_2=(cantidad+subtotal+subtotal_1)*0.15;
              total_a_pagar =cantidad+subtotal+subtotal_1+subtotal_2;
              switch (crs) {
                case "php":
                  total_a_pagar_2 = curso1*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "java":
                  total_a_pagar_2 = curso2*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "aspnet":
                  total_a_pagar_2 = curso3*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "oracle":
                  total_a_pagar_2 = curso4*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "vdnet":
                  total_a_pagar_2 = curso5*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "bd":
                  total_a_pagar_2 = curso6*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
      
              }

            }else{
              subtotal=cantidad *0.15;
              subtotal_1=(cantidad+subtotal)*0.15;
              total_a_pagar = cantidad +subtotal+subtotal_1;
            
            switch (crs) {
              case "php":
                  total_a_pagar_2 = curso1*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "java":
                  total_a_pagar_2 = curso2*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "aspnet":
                  total_a_pagar_2 = curso3*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "oracle":
                  total_a_pagar_2 = curso4*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "vdnet":
                  total_a_pagar_2 = curso5*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "bd":
                  total_a_pagar_2 = curso6*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;    
            }
          }
          break;
          
        }
      }else if (noe == "extranjero"){
        switch (anti) {
          case "1a5":
            if(edad>=45){
              subtotal=cantidad *0.15;
              subtotal_1=(cantidad+subtotal)*0.02;
              subtotal_2=(cantidad+subtotal+subtotal_1)*0.05;
              subtotal_3=(cantidad+subtotal+subtotal_1-subtotal_2)*0.05;
              total_a_pagar =cantidad+subtotal+subtotal_1-subtotal_2+subtotal_3;
              switch (crs) {
                case "php":
                  total_a_pagar_2 = curso1*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "java":
                  total_a_pagar_2 = curso2*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "aspnet":
                  total_a_pagar_2 = curso3*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "oracle":
                  total_a_pagar_2 = curso4*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "vdnet":
                  total_a_pagar_2 = curso5*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "bd":
                  total_a_pagar_2 = curso6*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;    
      
              }

            }else{
              subtotal=cantidad *0.15;
              subtotal_1=(cantidad+subtotal)*0.05;
              subtotal_2=(cantidad+subtotal-subtotal_1)*0.05;
              total_a_pagar = cantidad +subtotal-subtotal_1+subtotal_2;
            
            
            switch (crs) {
              case "php":
                  total_a_pagar_2 = curso1*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "java":
                  total_a_pagar_2 = curso2*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "aspnet":
                  total_a_pagar_2 = curso3*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "oracle":
                  total_a_pagar_2 = curso4*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "vdnet":
                  total_a_pagar_2 = curso5*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "bd":
                  total_a_pagar_2 = curso6*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;    
    
            }
          }
          break;
          case "6a10":
            if(edad>=45){
              if(edad>=45){
              subtotal=cantidad *0.15;
              subtotal_1=(cantidad+subtotal)*0.02;
              subtotal_2=(cantidad+subtotal+subtotal_1)*0.05;
              subtotal_3=(cantidad+subtotal+subtotal_1-subtotal_2)*0.10;
              total_a_pagar =cantidad+subtotal+subtotal_1-subtotal_2+subtotal_3;
              switch (crs) {
                case "php":
                  total_a_pagar_2 = curso1*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "java":
                  total_a_pagar_2 = curso2*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "aspnet":
                  total_a_pagar_2 = curso3*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "oracle":
                  total_a_pagar_2 = curso4*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "vdnet":
                  total_a_pagar_2 = curso5*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "bd":
                  total_a_pagar_2 = curso6*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;    
      
              }

            }else{
              subtotal=cantidad *0.15;
              subtotal_1=(cantidad+subtotal)*0.05;
              subtotal_2=(cantidad+subtotal-subtotal_1)*0.10;
              total_a_pagar = cantidad +subtotal-subtotal_1+subtotal_2;
            
            
            switch (crs) {
              case "php":
                  total_a_pagar_2 = curso1*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "java":
                  total_a_pagar_2 = curso2*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "aspnet":
                  total_a_pagar_2 = curso3*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "oracle":
                  total_a_pagar_2 = curso4*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "vdnet":
                  total_a_pagar_2 = curso5*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "bd":
                  total_a_pagar_2 = curso6*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;    
    
            }
          } 
          break;
        }
          case"10omas":
            if(edad>=45){
              subtotal=cantidad *0.15;
              console.log(subtotal);
              subtotal_1=(cantidad+subtotal)*0.02;
              console.log(subtotal_1);
              subtotal_2=(cantidad+subtotal+subtotal_1)*0.05;
              console.log(subtotal_2);
              subtotal_3=(cantidad+subtotal+subtotal_1-subtotal_2)*0.15;
              console.log(subtotal_3);
              total_a_pagar =cantidad+subtotal+subtotal_1-subtotal_2+subtotal_3;
              switch (crs) {
                case "php":
                  total_a_pagar_2 = curso1*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "java":
                  total_a_pagar_2 = curso2*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "aspnet":
                  total_a_pagar_2 = curso3*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "oracle":
                  total_a_pagar_2 = curso4*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "vdnet":
                  total_a_pagar_2 = curso5*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "bd":
                  total_a_pagar_2 = curso6*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;    
              }

            }else{
              subtotal=cantidad *0.15;
              subtotal_1=(cantidad+subtotal)*0.05;
              subtotal_2=(cantidad+subtotal-subtotal_1)*0.15;
              total_a_pagar = cantidad +subtotal-subtotal_1+subtotal_2;
            
            
            switch (crs) {
              case "php":
                total_a_pagar_2 = curso1*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "java":
                total_a_pagar_2 = curso2*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "aspnet":
                total_a_pagar_2 = curso3*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "oracle":
                total_a_pagar_2 = curso4*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "vdnet":
                total_a_pagar_2 = curso5*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "bd":
                total_a_pagar_2 = curso6*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;    
            }
          }
          break;
          
        
        }
      }
    }
    
    else if (mof == "fenemino") {
      if (noe == "nacional") {
        switch (anti) {
          case "1a5":
            if(edad>=45){
              subtotal=cantidad *0.15;
              subtotal_1=(cantidad+subtotal)*0.03;
              subtotal_2=(cantidad+subtotal+subtotal_1)*0.02;
              subtotal_3=(cantidad+subtotal+subtotal_1+subtotal_2)*0.05;
              total_a_pagar =cantidad+subtotal+subtotal_1+subtotal_2+subtotal_3;
                switch (crs) {
                  case "php":
                  total_a_pagar_2 = curso1*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "java":
                  total_a_pagar_2 = curso2*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "aspnet":
                  total_a_pagar_2 = curso3*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "oracle":
                  total_a_pagar_2 = curso4*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "vdnet":
                  total_a_pagar_2 = curso5*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "bd":
                  total_a_pagar_2 = curso6*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;   
      
              }

            }else{
              subtotal=cantidad *0.15;
              subtotal_1=(cantidad+subtotal)*0.03;
              subtotal_2=(cantidad+subtotal+subtotal_1)*0.05;
              total_a_pagar =cantidad+subtotal+subtotal_1+subtotal_2;
            
            switch (crs) {
              case "php":
                total_a_pagar_2 = curso1*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "java":
                total_a_pagar_2 = curso2*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "aspnet":
                total_a_pagar_2 = curso3*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "oracle":
                total_a_pagar_2 = curso4*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "vdnet":
                total_a_pagar_2 = curso5*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "bd":
                total_a_pagar_2 = curso6*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;   
    
            }
          }
          break;
          case "6a10":
            if(edad>=45){
              subtotal=cantidad *0.15;
              subtotal_1=(cantidad+subtotal)*0.03;
              subtotal_2=(cantidad+subtotal+subtotal_1)*0.02;
              subtotal_3=(cantidad+subtotal+subtotal_1+subtotal_2)*0.10;
              total_a_pagar =cantidad+subtotal+subtotal_1+subtotal_2+subtotal_3;
              
              
              switch (crs) {
                case "php":
                total_a_pagar_2 = curso1*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "java":
                total_a_pagar_2 = curso2*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "aspnet":
                total_a_pagar_2 = curso3*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "oracle":
                total_a_pagar_2 = curso4*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "vdnet":
                total_a_pagar_2 = curso5*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "bd":
                total_a_pagar_2 = curso6*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;   
      
              }

            }else{
              subtotal=cantidad *0.15;
              subtotal_1=(cantidad+subtotal)*0.03;
              subtotal_2=(cantidad+subtotal+subtotal_1)*0.10;
              total_a_pagar =cantidad+subtotal+subtotal_1+subtotal_2;
            
            switch (crs) {
              case "php":
                total_a_pagar_2 = curso1*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "java":
                total_a_pagar_2 = curso2*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "aspnet":
                total_a_pagar_2 = curso3*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "oracle":
                total_a_pagar_2 = curso4*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "vdnet":
                total_a_pagar_2 = curso5*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "bd":
                total_a_pagar_2 = curso6*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;   
    
            }
          } 
          break;
          case "10omas":
            if(edad>=45){
              subtotal=cantidad *0.15;
              subtotal_1=(cantidad+subtotal)*0.03;
              subtotal_2=(cantidad+subtotal+subtotal_1)*0.02;
              subtotal_3=(cantidad+subtotal+subtotal_1+subtotal_2)*0.15;
              total_a_pagar =cantidad+subtotal+subtotal_1+subtotal_2+subtotal_3;
              switch (crs) {
                case "php":
                total_a_pagar_2 = curso1*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "java":
                total_a_pagar_2 = curso2*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "aspnet":
                total_a_pagar_2 = curso3*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "oracle":
                total_a_pagar_2 = curso4*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "vdnet":
                total_a_pagar_2 = curso5*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "bd":
                total_a_pagar_2 = curso6*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;   
      
              }

            }else{
              subtotal=cantidad *0.15;
              subtotal_1=(cantidad+subtotal)*0.03;
              subtotal_2=(cantidad+subtotal+subtotal_1)*0.10;
              total_a_pagar =cantidad+subtotal+subtotal_1+subtotal_2;
            switch (crs) {
              case "php":
                total_a_pagar_2 = curso1*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "java":
                total_a_pagar_2 = curso2*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "aspnet":
                total_a_pagar_2 = curso3*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "oracle":
                total_a_pagar_2 = curso4*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "vdnet":
                total_a_pagar_2 = curso5*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "bd":
                total_a_pagar_2 = curso6*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;   
            }
          }
          break;

        }
      }  
      else if(noe == "extranjero"){
        switch (anti) {
          case "1a5":
            if(edad>=45){
              subtotal=cantidad *0.15;
              subtotal_1=(cantidad+subtotal)*0.03;
              subtotal_2=(cantidad+subtotal)*0.02;
              subtotal_3=(cantidad+subtotal+subtotal_1)*0.05;
              subtotal_4=(cantidad+subtotal+subtotal_1+subtotal_2-subtotal_3)*0.05;
              total_a_pagar =cantidad+subtotal+subtotal_1+subtotal_2-subtotal_3+subtotal_4;
              switch (crs) {
                case "php":
                total_a_pagar_2 = curso1*3 ;
                total= total_a_pagar_2+total_a_pagar;
                break;
                case "java":
                  total_a_pagar_2 = curso2*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "aspnet":
                  total_a_pagar_2 = curso3*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "oracle":
                  total_a_pagar_2 = curso4*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "vdnet":
                  total_a_pagar_2 = curso5*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "bd":
                  total_a_pagar_2 = curso6*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;   
        
              }

            }else{
              subtotal=cantidad *0.15;
              subtotal_1=(cantidad+subtotal)*0.03;
              subtotal_2=(cantidad+subtotal+subtotal_1)*0.05;
              subtotal_3=(cantidad+subtotal+subtotal_1-subtotal_2)*0.05;
              total_a_pagar =cantidad+subtotal+subtotal_1-subtotal_2+subtotal_3;
            switch (crs) {
              case "php":
                total_a_pagar_2 = curso1*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "java":
                total_a_pagar_2 = curso2*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "aspnet":
                total_a_pagar_2 = curso3*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "oracle":
                total_a_pagar_2 = curso4*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "vdnet":
                total_a_pagar_2 = curso5*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "bd":
                total_a_pagar_2 = curso6*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;   
    
            }
          }
          break;
        
          case "6a10":
            if(edad>=45){
              subtotal=cantidad *0.15;
              subtotal_1=(cantidad+subtotal)*0.03;
              subtotal_2=(cantidad+subtotal)*0.02;
              subtotal_3=(cantidad+subtotal+subtotal_1+subtotal_2)*0.05;
              subtotal_4=(cantidad+subtotal+subtotal_1+subtotal_2-subtotal_3)*0.10;
              total_a_pagar =cantidad+subtotal+subtotal_1+subtotal_2-subtotal_3+subtotal_4;
              switch (crs) {
                case "php":
                  total_a_pagar_2 = curso1*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "java":
                  total_a_pagar_2 = curso2*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "aspnet":
                  total_a_pagar_2 = curso3*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "oracle":
                  total_a_pagar_2 = curso4*3 ;
                  total= total_a_paga5_2+total_a_pagar;
                break;
                case "vdnet":
                  total_a_pagar_2 = curso5*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;
                case "bd":
                  total_a_pagar_2 = curso6*3 ;
                  total= total_a_pagar_2+total_a_pagar;
                break;   
              }

            }else{
              subtotal=cantidad *0.15;
              subtotal_1=(cantidad+subtotal)*0.03;
              subtotal_2=(cantidad+subtotal+subtotal_1)*0.05;
              subtotal_3=(cantidad+subtotal+subtotal_1-subtotal_2)*0.10;
              total_a_pagar =cantidad+subtotal+subtotal_1-subtotal_2+subtotal_3;
            
            switch (crs) {
              case "php":
                total_a_pagar_2 = curso1*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "java":
                total_a_pagar_2 = curso2*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "aspnet":
                total_a_pagar_2 = curso3*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "oracle":
                total_a_pagar_2 = curso4*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "vdnet":
                total_a_pagar_2 = curso5*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "bd":
                total_a_pagar_2 = curso6*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;   
    
            }
          } 
          break;
          case "10omas":
            if(edad>=45){
              subtotal=cantidad *0.15;
              subtotal_1=(cantidad+subtotal)*0.03;
              subtotal_2=(cantidad+subtotal)*0.02;
              subtotal_3=(cantidad+subtotal+subtotal_1+subtotal_2)*0.05;
              subtotal_4=(cantidad+subtotal+subtotal_1+subtotal_2-subtotal_3)*0.15;
              total_a_pagar =cantidad+subtotal+subtotal_1+subtotal_2-subtotal_3+subtotal_4;
              switch (crs) {
                case "php":
                total_a_pagar_2 = curso1*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "java":
                total_a_pagar_2 = curso2*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "aspnet":
                total_a_pagar_2 = curso3*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "oracle":
                total_a_pagar_2 = curso4*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "vdnet":
                total_a_pagar_2 = curso5*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "bd":
                total_a_pagar_2 = curso6*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;   
      
              }

            }else{
              subtotal=cantidad *0.15;
              subtotal_1=(cantidad+subtotal)*0.03;
              subtotal_2=(cantidad+subtotal+subtotal_1)*0.05;
              subtotal_3=(cantidad+subtotal+subtotal_1-subtotal_2)*0.10;
              total_a_pagar =cantidad+subtotal+subtotal_1-subtotal_2+subtotal_3;
            switch (crs) {
              case "php":
                total_a_pagar_2 = curso1*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "java":
                total_a_pagar_2 = curso2*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "aspnet":
                total_a_pagar_2 = curso3*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "oracle":
                total_a_pagar_2 = curso4*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "vdnet":
                total_a_pagar_2 = curso5*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;
              case "bd":
                total_a_pagar_2 = curso6*3 ;
                total= total_a_pagar_2+total_a_pagar;
              break;   
    
            }
          }
          break;
          
        }

        }
      } 
    
      return total;
  }
function limpiar(){
    $('#frmdatos')[0].reset();
}
