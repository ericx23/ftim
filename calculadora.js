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
