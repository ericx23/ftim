# ftim
<!DOCTYPE html>
<html>
	<head>
	 <link rel="stylesheet" href="calculadora.css"><script src="calculadora.js"> </script>	<title>Page Title</title>
	</head>
	<body>
	<input id= "tela" /p>
	<table id="tabela">
	<tr>
	<td>
	<button id="btAc" onclick = "AC ()">AC</button>
	<button id="bt+-">+/-</button>
	<button id="bt%">%</button>
	<button id="bt/" onclick = "Dividir ()">/</button>
	</td>
	<tr>
	<td>
	<button id="bt7" onclick = "Sete ()">7</button>
	<button id="bt8" onclick = "Oito ()">8</button>
	<button id="bt9" onclick = "Nove ()">9</button>
	<button id="bt*" onclick = "Multiplicar ()">*</button>
	</td>
	</tr>
	 <tr>
	<td>
	<button id="bt4" onclick = "Quatro ()">4</button>
	<button id="bt5" onclick = "Cinco ()">5</button>
	<button id="bt6" onclick = "Seis ()">6</button>
	<button id="bt-" onclick = "Menos ()">-</button>
	</td>
	</tr>
	<tr>
	<td>
	<button id="bt1" onclick = "Um()">1</button>
	<button id="bt2" onclick = "Dois()">2</button>
	<button id="bt3" onclick = "Tres ()">3</button>
	<button id="bt+" onclick = "Mais ()">+</button>
	</td>
	</tr>
	<tr>
	<td>
	<button id="btZero" onclick = "Zero ()">0</button>
	<button id="bt.">.</button>
	<button id="bt=" onclick = "Igual()">=</button>
	</td>
	</tr>
	</table>
	</body>
</html>
