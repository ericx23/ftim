# ftim
<!DOCTYPE html>
<html>
	<head>
	 <style>
	 #tela {
	color: white;
	font-size: 20px;
	font-weight: bold;
	text-align: right;
	width: 212px;
	background: black;
}		
#tabela{
    border: inset 10px #b3daff;
    border-radius: 12px;
    background: #80c1ff;
}
td{
	padding: 3px;
}
button{
	width: 50px;
    font-size: 26px;
    font-weight: bold;
    color: white;
    background-color: #339cff;
}
input{
	height: 40px;
}
#btZero {
	width: 104px;
}
</style>
	<title>Page Title</title>
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
		 <script> 
		 var valor = "";
var operacao = "";
var a = "";
var resultado = "";
var saida = "";
var por = "";

function Ponto(){
    if(valor === 0){
valor = "0.";
}
 else if(valor === 0.){
     valor = valor + 0;
}
else {
    valor = valor + ".";
}
saida = document.getElementById("tela");
saida.value = valor;
}
function Um(){
    if(valor === 0){
valor = 1;
}
 else{
valor = valor + "1";
}
saida = document.getElementById("tela");
saida.value = valor;
}
function Dois(){
    if(valor === 0){
valor = 2;
}
 else{
valor = valor + "2";
}
saida = document.getElementById("tela");
saida.value = valor;
}
function Tres(){
    if(valor === 0){
        valor = 3;
}
 else{
valor = valor + "3";
}
saida = document.getElementById("tela");
saida.value = valor;
}
function Quatro(){
    if(valor === 0){
valor = 4;
}
 else{
valor = valor + "4";
}
saida = document.getElementById("tela");
saida.value = valor;
}
function Cinco(){
    if(valor === 0){
valor = 5;
}
 else{
valor = valor + "5";
}
saida = document.getElementById("tela");
saida.value = valor;
}
function Seis(){
    if(valor === 0){
valor = 6;
}
 else{
valor = valor + "6";
}
saida = document.getElementById("tela");
saida.value = valor;
}
function Sete(){
    if(valor === 0){valorres = 7;
}
 else{
valor = valor + "7";
}
saida = document.getElementById("tela");
saida.value = valor;
}
function Oito(){
    if(valor === 0){
valor = 8;
}
 else{
valor = valor + "8";
}
saida = document.getElementById("tela");
saida.value = valor;
}
function Nove(){
    if(valor === 0){
valor = 9;
}
 else{
valor = valor + "9";
}
saida = document.getElementById("tela");
saida.value = valor;
}
function Zero(){
    if(valor === 0){
valor = 0;
}
 else{
valor = valor + "0";
}
saida = document.getElementById("tela");
saida.value = valor;
}
function AC(){
valor = 0;
saida = document.getElementById("tela");
saida.value = valor;
}
function MaisMenos(){
valor = valor *-1;
saida = document.getElementById("tela");
saida.value = valor;
}
function Porcentagem(){
    if(operacao == "+"){
        operacao = "Por+";
    }
    else if(operacao == "-"){
        operacao = "Por-";
    }
    else {
    valor = valor / 100;
    saida = document.getElementById("tela");
saida.value = valor;
        }
}
function Mais(){
operacao = "+";
a = valor;
valor = document.getElementById("tela");
valor = 0;
}
function Menos(){
operacao = "-";
a = valor;
valor = document.getElementById("tela");
valor = 0;
}
function Dividir(){
a = valor;
operacao = "/";
valor = document.getElementById("tela");
valor = 0;
}
function Multiplicar(){
operacao = "*"
a = valor;
valor = document.getElementById("tela");
valor = 0;
}
function Igual(){
if(operacao == "+"){
  resultado = eval(a) + eval(valor);
saida = document.getElementById("tela");
saida.value = resultado; 
}
if(operacao == "-"){
    resultado = eval(a) - eval(valor);
saida = document.getElementById("tela");
saida.value = resultado; 
}
if(operacao == "*"){
    resultado = eval(a) * eval(valor);
saida = document.getElementById("tela");
saida.value = resultado; 
}
if(operacao == "/"){
    resultado = eval(a) / eval(valor);
saida = document.getElementById("tela");
saida.value = resultado; 
}
if(operacao == "Por+"){
    resultado = eval(valor) / 100 * eval(a) + eval(a);
saida = document.getElementById("tela");
saida.value = resultado;  
}
if(operacao == "Por-"){
    resultado = (((valor/100)*a)-a)*-1;
saida = document.getElementById("tela");
saida.value = resultado;  
}
}
		 </script>
	</body>
</html>
