var errore;
var numeropersone = prompt("Quante persone vuoi inserire?")
if (numeropersone != parseInt(numeropersone))
{
	errore = "NaN"
}	
else
{
	var n = parseInt(numeropersone)
	if (n<=0){
		errore = "Numero Negativo"
	}
	else{
		var nome;
		var eta;
		var persone = [];
		for(var i=0;i<n;i++)
		{
			var valido = false
			do {

				nome=prompt("Nome persona "+(i+1)+" :");
				
				if(nome.trim().length > 0){
					valido=true
				}
			}
			while(!valido)

			valido = false
			do {
				
				eta=prompt("Età "+nome+" :");

				if(eta.trim().length > 0){
					if (eta.trim() == parseInt(eta.trim()))
					{
						var etafin = parseInt(eta.trim())
						if (etafin>0){
							valido = true
						}
						
					}	
				}
				
			}
			while(!valido)

			var persona = {
				nome: nome,
				eta: etafin
			} 

			persone.push(persona)

		}
		
		if(persone.length >0){
			var minper = persone[0];

			for(var i=0; i<persone.length; i++)
			{
				if(persone[i].eta < minper.eta){
					minper = persone[i];
				}
			}

			console.log(minper.nome)
		}




	}
}