this.registrado=false;

$("#Entrar").click(function(){
	if ($("#Usuario").val() =="user" && $("#Contraseña").val() == "admin" ){

		registrado=true;

		if (registrado == true) {
			window.location="inicio.html";
		}	
	}else{
		swal.fire("error");

	}
});



window.addEventListener("load",function(){
	$(".container").fadeIn(1000);

	function pdf(){


		window.location ="pdf.html"
	}

	function validar()
		{
		var pdf = document.getElementById('verificar').value;
		
	}