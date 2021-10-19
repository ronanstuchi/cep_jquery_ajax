
function consultaCep() {
var cep = document.getElementById("cep").value;
var url = "https://viacep.com.br/ws/" + cep + "/json/";
console.log(url);
$.ajax({
    url:url,
    type: "GET",
    success: function(response){
        console.log(response);
         $("#logradouro").html(response.logradouro);  
         $("#uf").html(response.uf); 
         $("#localidade").html(response.localidade); 
         $("#bairro").html(response.bairro); 
         $("#titulo_cep").html("CEP " + response.cep); 
         $(".cep").show();
        
       //document.getElementId("logradouro").innerHTML = response.bairro;   - outra maneira  
       // $("bairro").html(response.bairro);
       //   $("localidade").html(response.localidade);
        //   $("uf").html(response.uf);

             }
        })

}
