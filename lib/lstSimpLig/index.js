import {Lista} from './lista.js';
import {bootbox_prompt,bootbox_alert} from '../utils/dialog.js';

let lista=null;

export async function insertar_al_inicio(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }
    
    var DATO = await bootbox_prompt("Ingrese el valor de nodo");
    if(DATO==null)
        return;

    try {
        if(lista.buscar(DATO)==true)
            throw new Error("EL NODO YA SE INGRESO");

        lista.inserta_inicio(DATO);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(DATO);
    } catch (e) {
       await bootbox_alert(e.message);
    }

}////////////////////////////////////////////////////////
export async function insertar_al_final(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }
    
    var DATO = await bootbox_prompt("Ingrese valor de nodo");
    if(DATO==null)
        return;

    try {
        if(lista.buscar(DATO)==true)
            throw new Error("EL NODO YA SE INGRESO");

            lista.inserta_final(DATO);
            lista.dibujarNodosLog();	
            lista.dibujarNodos(DATO);
    } catch (e) {
        await bootbox_alert(e.message); 
    }

}//////////////////////////////////////////////////////////
export async function insertar_antes_x(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }
    
    try {
        var DATO = await bootbox_prompt("Ingrese valor de DATO");

        if(DATO==null)
            return;

        if(lista.buscar(DATO)==true)
            throw new Error("EL NODO YA SE INGRESO");

        var X = await bootbox_prompt("Ingrese valor de X");
        
        if(X==null)
            return;

        lista.inserta_antes_X(DATO,X);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(DATO);
    } catch (e) {
        await bootbox_alert(e.message);
    }

}/////////////////////////////////////////////////////////

export async function insertar_despues_x(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }
    
    try {
        var DATO = await bootbox_prompt("Ingrese valor de DATO");

        if(DATO==null)
            return;

        if(lista.buscar(DATO)==true)
            throw new Error("EL NODO YA SE INGRESO");

        var X = await bootbox_prompt("Ingrese valor de X");

        if(X==null)
            return;

        lista.inserta_despues_X(DATO,X);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(DATO);
    } catch (e) {
        await bootbox_alert(e.message);
    }
   

}/////////////////////////////////////////////////////////

export async function eliminar_inicio(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }
    
    lista.elimina_inicio();
    lista.dibujarNodosLog();	
    lista.dibujarNodos();
    await bootbox_alert("NODO ELIMINADO SATISFACTORIAMENTE");

}/////////////////////////////////////////////////////////

export async function eliminar_ultimo(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }
    
    lista.elimina_ultimo();
    lista.dibujarNodosLog();	
    lista.dibujarNodos();
    await bootbox_alert("NODO ELIMINADO SATISFACTORIAMENTE");

}/////////////////////////////////////////////////////////

export async function eliminar_x(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }
    
    try {
        var X = await bootbox_prompt("Ingrese valor de X");
        lista.elimina_x(X);
        lista.dibujarNodosLog();	
        lista.dibujarNodos();
    } catch (e) {
        await bootbox_alert(e.message);
    }
    if(lista==null){
          await bootbox_alert("NODO ELIMINADO SATISFACTORIAMENTE");
    }      
}/////////////////////////////////////////////////////////

export async function eliminar_antes_x(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }
    
    try {
        var X = await bootbox_prompt("Ingrese valor de X");
        lista.elimina_antes_x(X);
        lista.dibujarNodosLog();	
        lista.dibujarNodos();
    } catch (e) {
        await bootbox_alert(e.message);
    }
    await bootbox_alert("NODO ELIMINADO SATISFACTORIAMENTE");
}/////////////////////////////////////////////////////////

export async function eliminar_despues_x(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }
    
    try {
        var X = await bootbox_prompt("Ingrese valor de X");
        lista.elimina_despues_x(X);
        lista.dibujarNodosLog();	
        lista.dibujarNodos();
    } catch (e) {
        await bootbox_alert(e.message);
    }
    await bootbox_alert("NODO ELIMINADO SATISFACTORIAMENTE");
}/////////////////////////////////////////////////////////