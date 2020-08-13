window.addEventListener("load", function(){
        //Capturar formulario
        let formulario = document.querySelector(".formulario");
        //console.log (formulario.elements.email.value);
        formulario.addEventListener("submit", function(evento){
          if(!validaciones(evento)){
              evento.preventDefault();   
          }else{
              formulario.submit();
          }
    
           function validaciones (evento){
               //Destructuring (destructuración de código)
               let {first_name, last_name, email, password, confirm_password, provincia, avatar }= 
               formulario.elements;
               let errores = [];
               //Validar el Nombre
               if (first_name.value == ""){
                   errores.push("El campo Nombre no puede estar vacío");
                   first_name.classList.add("is-invalid");
                   //Para cada caja/sección (es un array compuesto);
                   //errores["first_name"] = "El campo Nombre no puede estar vacío";
               }else{
                   first_name.classList.add("is-valid");
                   first_name.classList.remove("is-invalid")
               }
              //Validar el Apellido
              if (last_name.value == ""){
                errores.push("El campo Apellido no puede estar vacío");
                last_name.classList.add("is-invalid");
                //Para cada caja/sección (es un array compuesto);
                //errores["first_name"] = "El campo Nombre no puede estar vacío";
            }else{
                last_name.classList.add("is-valid");
                last_name.classList.remove("is-invalid")
            }
            //Validar el e-mail con el uso de Expresiones Regulares https://www.w3schools.com/jsref/jsref_obj_regexp.asp
    //https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
         let reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
        if(!reEmail.test(email.value)){
            errores.push("El campo Email no puede estar vacío");
            email.classList.add("is-invalid");
            //Para cada caja/sección (es un array compuesto);
            //errores["first_name"] = "El campo Nombre no puede estar vacío";
        }else{
            email.classList.add("is-valid");
            email.classList.remove("is-invalid")
        } 
        
    
    
               //Aqui enviamos los errores al usuario
                let ulErrores = document.getElementById("errores");
                ulErrores.classList.add("alert-danger")
                if (errores.length > 0){
                    evento.preventDefault();
                    ulErrores.innerHTML = ""; //Borrar el contenido de la lista de errores
                    for (let i = 0; i < errores.length; i ++){
                        ulErrores.innerHTML += `<li> ${errores[i]} </li> `
                    } 
                    errores = [] // Borra el array / lo vacia
                } else{
                        return true;
                    }
                }
    
        })
  
    
    })