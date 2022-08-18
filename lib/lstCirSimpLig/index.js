import {ListaCircularSimplementeLigada} from './lista.js';
import {ListCircularSimplementeLigadaCanvas} from './listaCanvas.js';
import {bootbox_prompt,bootbox_alert} from '../utils/dialog.js';

let lista=null;
let listaCanvas=null;

export async function insertar_al_inicio(){
    var canvas=document.getElementById('tutorial2'); 
    if(lista==null){
        listaCanvas=new ListCircularSimplementeLigadaCanvas(canvas);
        lista=new ListaCircularSimplementeLigada(listaCanvas);
    }
    
    var DATO = await bootbox_prompt("Ingrese valor de nodo");
    if(DATO==null || DATO.trim()=="")
        return;

    try{
        
        DATO=DATO.trim();
        if(lista.buscar(DATO)==true)
            throw new Error("EL NODO YA SE INGRESO");

        lista.inserta_inicio(DATO);
        
        lista.dibujarNodosLog();	
    
    }catch(e){
        console.log(e);
        await bootbox_alert(e.message);
    }
}////////////////////////////////////////////////////////

export async function insertar_al_final(){
    var canvas=document.getElementById('tutorial2'); 
    if(lista==null){
        listaCanvas=new ListCircularSimplementeLigadaCanvas(canvas);
        lista=new ListaCircularSimplementeLigada(listaCanvas);
    }
    
    var DATO = await bootbox_prompt("Ingrese valor de nodo");
    if(DATO==null || DATO.trim()=="")
        return;

    try{
        
        DATO=DATO.trim();
        if(lista.buscar(DATO)==true)
            throw new Error("EL NODO YA SE INGRESO");

        lista.inserta_final(DATO);
        
        lista.dibujarNodosLog();	
    
    }catch(e){
        console.log(e);
        await bootbox_alert(e.message);
    }
}////////////////////////////////////////////////////////

export async function insertar_antes_x(){
    var canvas=document.getElementById('tutorial2'); 
    if(lista==null){
        listaCanvas=new ListCircularSimplementeLigadaCanvas(canvas);
        lista=new ListaCircularSimplementeLigada(listaCanvas);
    }
    
    if(lista.isVacio()==true){//la lista esta vacia
        throw new Error("LA LISTA ESTA VACIA");
    }
    var DATO = await bootbox_prompt("Ingrese valor del Dato");
    if(DATO==null || DATO.trim()=="")
        return;

    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        var DATO = await bootbox_prompt("Ingrese valor del Dato");
        if(DATO==null || DATO.trim()=="")
            return;
    
        
        DATO=DATO.trim();
        var X = await bootbox_prompt("Ingrese valor de X");
        if(X==null || DATO.trim()=="")
                return;
        X=X.trim();
        
        lista.inserta_antes_X(DATO,X);
        
        lista.dibujarNodosLog();	
    
    }catch(e){
        console.log(e);
        await bootbox_alert(e.message);
    }

} ////////////////////////////////////////////////////////////

export async function insertar_despues_x(){
    var canvas=document.getElementById('tutorial2'); 
    if(lista==null){
        listaCanvas=new ListCircularSimplementeLigadaCanvas(canvas);
        lista=new ListaCircularSimplementeLigada(listaCanvas);
    }
    
    if(lista.isVacio()==true){//la lista esta vacia
        throw new Error("LA LISTA ESTA VACIA");
    }
    var DATO = await bootbox_prompt("Ingrese valor del Dato");
    if(DATO==null || DATO.trim()=="")
        return;

    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        var DATO = await bootbox_prompt("Ingrese valor del Dato");
        if(DATO==null || DATO.trim()=="")
            return;
    
        
        DATO=DATO.trim();
        var X = await bootbox_prompt("Ingrese valor de X");
        if(X==null || DATO.trim()=="")
                return;
        X=X.trim();
        
        lista.inserta_despues_X(DATO,X);
        
        lista.dibujarNodosLog();	
    
    }catch(e){
        console.log(e);
        await bootbox_alert(e.message);
    }

} ////////////////////////////////////////////////////////////

export async function elimina_inicio() {
    var canvas=document.getElementById('tutorial2'); 
    if(lista==null){
        listaCanvas=new ListCircularSimplementeLigadaCanvas(canvas);
        lista=new ListaCircularSimplementeLigada(listaCanvas);
    }

    try {
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }

        lista.elimina_inicio();
        lista.dibujarNodosLog();

    } catch (e) {
        await bootbox_alert(e.message);
    }
}

