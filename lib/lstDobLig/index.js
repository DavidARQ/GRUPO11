import {ListaDoblementeLigada} from './lista.js';
import {bootbox_prompt,bootbox_alert} from '../utils/dialog.js';
import { ListaDoblementeLigadaCanvas } from './listaCanvas.js';

let lista=null;
let listaCanvas=null;

export async function insertar_inicio(){
    
    if(lista==null){
        var canvas=document.getElementById('tutorial3');

        listaCanvas=new ListaDoblementeLigadaCanvas(canvas);
        lista=new ListaDoblementeLigada(listaCanvas);	
    }
    
    var DATO = await bootbox_prompt("ingrese valor de nodo");
    if(DATO==null || DATO.trim()=="")
        return;

    try{
        DATO=DATO.trim();
        
        lista.inserta_inicio(DATO);
        
        console.log("recorrido derecha");
        lista.dibujarNodosLogDer();
        console.log("recorrido izquierda");	
        lista.dibujarNodosLogIzq();	
    
    }catch(e){
        console.log(e);
        await bootbox_alert(e.message);
    }
}////////////////////////////////////////////////////////
export async function insertar_final(){
    var canvas=document.getElementById('tutorial3'); 
    if(lista==null){
        listaCanvas=new ListaDoblementeLigadaCanvas(canvas);
        lista=new ListaDoblementeLigada(listaCanvas);		
    }
    
    var DATO = await bootbox_prompt("Ingrese valor de nodo");
    if(DATO==null || DATO.trim()=="")
        return;

    try {
        DATO=DATO.trim();
            
        lista.insertar_final(DATO);
        
        console.log("recorrido derecha");
        lista.dibujarNodosLogDer();
        console.log("recorrido izquierda");	
        lista.dibujarNodosLogIzq();
    } catch (e) {
        await bootbox_alert(e.message); 
    }

}//////////////////////////////////////////////////////////
export async function inserta_antes_X(){
    var canvas=document.getElementById('tutorial3'); 
    if(lista==null){

        listaCanvas=new ListaDoblementeLigadaCanvas(canvas);
        lista=new ListaDoblementeLigada(listaCanvas);		
    }
    
    try{

        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
       
        var DATO = await bootbox_prompt("ingrese valor de DATO");
        if(DATO==null || DATO.trim()=="")
                return;

        DATO=DATO.trim();
        
        var X = await bootbox_prompt("ingrese valor de X");
        if(X==null || DATO.trim()=="")
                return;
        
        X=X.trim();
        lista.inserta_antes_X(DATO,X);
        console.log("recorrido derecha");
        lista.dibujarNodosLogDer();
        console.log("recorrido izquierda");	
        lista.dibujarNodosLogIzq();
        
    }catch(e){
        console.log(e);
        await bootbox_alert(e.message);
    }

}/////////////////////////////////////////////////////////
export async function inserta_despues_X(){
    var canvas=document.getElementById('tutorial3'); 
    if(lista==null){

        listaCanvas=new ListaDoblementeLigadaCanvas(canvas);
        lista=new ListaDoblementeLigada(listaCanvas);		
    }
    
    try{

        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
       
        var DATO = await bootbox_prompt("ingrese valor de DATO");
        if(DATO==null || DATO.trim()=="")
                return;

        DATO=DATO.trim();
        
        var X = await bootbox_prompt("ingrese valor de X");
        if(X==null || DATO.trim()=="")
                return;
        
        X=X.trim();
        lista.inserta_despues_X(DATO,X);
        console.log("recorrido derecha");
        lista.dibujarNodosLogDer();
        console.log("recorrido izquierda");	
        lista.dibujarNodosLogIzq();
        
    }catch(e){
        console.log(e);
        await bootbox_alert(e.message);
    }

}/////////////////////////////////////////////////////////

export async function elimina_inicio(){
    var canvas=document.getElementById('tutorial3'); 
    if(lista==null){
        listaCanvas=new ListaDoblementeLigadaCanvas(canvas);
        lista=new ListaDoblementeLigada(listaCanvas);		
    }

    try{
        
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }

        await lista.elimina_inicio();
        console.log("recorrido derecha");
        lista.dibujarNodosLogDer();
        console.log("recorrido izquierda");	
        lista.dibujarNodosLogIzq();

        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
    
    }catch(e){
        console.log(e);
        await bootbox_alert(e.message);
    }
}/////////////////////////////////////////////////////////

export async function eliminar_ultimo(){
    var canvas=document.getElementById('tutorial3'); 
    if(lista==null){
        listaCanvas=new ListaDoblementeLigadaCanvas(canvas);
        lista=new ListaDoblementeLigada(listaCanvas);		
    }
    
    try{
        
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }

        await lista.eliminar_ultimo();
        console.log("recorrido derecha");
        lista.dibujarNodosLogDer();
        console.log("recorrido izquierda");	
        lista.dibujarNodosLogIzq();

        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
    
    }catch(e){
        console.log(e);
        await bootbox_alert(e.message);
    }

}/////////////////////////////////////////////////////////

export async function eliminar_x(){
    var canvas=document.getElementById('tutorial3'); 
    if(lista==null){
        listaCanvas=new ListaDoblementeLigadaCanvas(canvas);
        lista=new ListaDoblementeLigada(listaCanvas);			
    }
    
    try{
        
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }

        await lista.eliminar_x();
        console.log("recorrido derecha");
        lista.dibujarNodosLogDer();
        console.log("recorrido izquierda");	
        lista.dibujarNodosLogIzq();

        await bootbox_alert("NODO ELIMINADO SATISFACTORIAMENTE");
    
    }catch(e){
        console.log(e);
        await bootbox_alert(e.message);
    }
  
}/////////////////////////////////////////////////////////

export async function eliminar_antes_x(){
    var canvas=document.getElementById('tutorial3'); 
    if(lista==null){
        listaCanvas=new ListaDoblementeLigadaCanvas(canvas);
        lista=new ListaDoblementeLigada(listaCanvas);	
    }
    
    try{
        
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }

        await lista.eliminar_antes_x();
        console.log("recorrido derecha");
        lista.dibujarNodosLogDer();
        console.log("recorrido izquierda");	
        lista.dibujarNodosLogIzq();

        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
    
    }catch(e){
        console.log(e);
        await bootbox_alert(e.message);
    }
}/////////////////////////////////////////////////////////

export async function eliminar_despues_x(){
    var canvas=document.getElementById('tutorial3'); 
    if(lista==null){
        listaCanvas=new ListaDoblementeLigadaCanvas(canvas);
        lista=new ListaDoblementeLigada(listaCanvas);		
    }
    
    try{
        
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }

        await lista.eliminar_despues_x();
        console.log("recorrido derecha");
        lista.dibujarNodosLogDer();
        console.log("recorrido izquierda");	
        lista.dibujarNodosLogIzq();

        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
    
    }catch(e){
        console.log(e);
        await bootbox_alert(e.message);
    }
}/////////////////////////////////////////////////////////