class Nodo{

    info=0;
    liga=null;
}
export class ListaCircularSimplementeLigada{
  
   INICIO=null;
   LISTA_CANVAS=null;

   constructor(listaCanvas) {
        this.LISTA_CANVAS = listaCanvas;
   }///////////////////////////////////////////
   inserta_inicio(DATO){
    if (this.INICIO==null){
       var P=this.INICIO;
       var Q=new Nodo();
       Q.info=DATO;
       Q.liga=Q;
       P=Q;

       this.INICIO=P;
    }
    else{
        var P=this.INICIO;
        var Q=new Nodo();
        Q.info=DATO;
        
        var F=P;
        while(F.liga!=P){
            F=F.liga;
        }
        F.liga=Q;
        Q.liga=P;
        P=Q;

        this.INICIO=P;
    }

    this.LISTA_CANVAS.inserta_inicio(this.INICIO);

   }///////////////////////////////////////////

   inserta_final(DATO){
    if(this.INICIO==null){
        var P=this.INICIO;

        var Q=new Nodo();
        Q.info=DATO;
        Q.liga=Q;
        P=Q;

        this.INICIO=P;
    }
    else{
        var P=this.INICIO;
        
        var T=P;
        while(T.liga!=P){
            T=T.liga; 
        }
        var Q=new Nodo();
        Q.info=DATO;
        Q.liga=null;
        T.liga=Q;

        Q.liga=P;
        
        this.INICIO=P;   
        }

        this.LISTA_CANVAS.inserta_final(this.INICIO);
    }/////////////////////////////////////////////

    dibujarNodosLog(){

        var P=this.INICIO;
        if(P!=null){
            var F=P;
            
            var cad="";
            if(F.liga==P){//1
                
                cad+=P.info+"::";
                cad+=P.liga.info;
                
            }
            else{//2 o mas
                
                var cad="";
                while(F.liga!=P){
                    cad+=F.info+"::";
                    F=F.liga;
                }    
                cad+=F.info+"::";
                cad+=F.liga.info;
            }
                
            console.log(cad);
        }
       

    }/////////////////////////////////////////////

    buscar(DATO){
        if(this.INICIO==null)
                return false;
        
        var encontrado=false;
        var	tmp=this.INICIO;
        var P=this.INICIO;
    
        do{
            if(tmp.info==DATO){
                encontrado=true;
                break;
            }
            tmp=tmp.liga;
    
        }while(tmp!=P);
        
        return encontrado;
    }///////////////////////////////////////////

    inserta_antes_X (DATO,X){
        var P=this.INICIO;
        
        var Q=P;
        var BAND=1;
        var T;
        while ( Q.info!=X && BAND==1 ){
            if(Q.liga!=P){
                T=Q;
                Q=Q.liga;
            }
            else{
                BAND=0;
            }
        }
        if(BAND==1){
            var X1=new Nodo();
            X1.info=DATO;
            if(P==Q){
                X1.liga=P;
                P=X1;

                var U=P;
                while(U.liga!=P){
                    U=U.liga;
                }

                X1.liga=P;
                P=X1;

                U.liga=P;

            }
            else{
                T.liga=X1;
                X1.liga=Q;
            }
        }
        else{
            throw new Error("EL NODO DADO COMO REFERENCIA NO SE ENCUENTRA EN LA LISTA");
        }
        
        this.INICIO=P;

        this.LISTA_CANVAS.inserta_antes_X(this.INICIO, DATO);
    }

    inserta_despues_X(DATO,X){
        var P=this.INICIO;

        var Q=P;
        var BAND=1;
        while ( Q.info!=X && BAND==1 ){
            if(Q.liga!=P){
                Q=Q.liga;
            }
            else{
                BAND=0;
            }
        }
    
        if(BAND==1){
            var T=new Nodo();
            T.info=DATO;
            T.liga=Q.liga;
            Q.liga=T;
        }
        else{
            throw new Error("EL NODO DADO COMO REFERENCIA NO SE ENCUENTRA EN LA LISTA");
        }
        this.INICIO=P;

        this.LISTA_CANVAS.inserta_despues_X(this.INICIO, DATO);
    }

    elimina_inicio(){
        var P=this.INICIO;
        var Q=P;
        P=Q.liga;
        delete Object.Q;
        this.INICIO=P;
        
    }

    elimina_ultimo(){
        var P=this.INICIO;
        var Q=P;
        var T;
        if(P.liga==null){
            P=null;
        }
        else{
            while(Q.liga!=null){
                T=Q;
                Q=Q.liga;
            }
            T.liga=null;
        }

        delete Object.Q;
        
    }

    elimina_x(X){
        var P=this.INICIO;

        var Q=P;
        var T;
        var BAND=1;
        while ( Q.info!=X && BAND==1 ){
            if(Q.liga!=null){
                T=Q;
                Q=Q.liga; 
            }
            else{
                BAND=0;
            }

        }
        if(BAND==0){
            throw new Error("EL ELEMENTO CON INFORMACION X NO SE ENCUENTRA EN LA LISTA ");
        }

        else if(P==Q){
            P=Q.liga;
        }

        else{
         T.liga=Q.liga;
        }

        delete Object.Q;

        this.INICIO=P;
    }

    elimina_antes_x(X){
        var P=this.INICIO;
        var Q;
        var T;
        var R;
        var BAND;

        if(P.info==X){
            throw new Error("NO EXISTE NODO ANTERIOR AL PRIMERO");
        }

        else{
            Q=P;
            T=P;
            var BAND=1;
            while ( Q.info!=X && BAND==1 ){
                if(Q.liga!=null){
                    R=T;
                    T=Q;    
                    Q=Q.liga;
                }
                else{
                    BAND=0;
                }
            }

        if(BAND==0){
            throw new Error("EL ELEMENTO NO SE ENCUENTRA EN LA LISTA ");
        }

        else{
            if(P.liga==Q){
                P=Q;
            }
            else{
                R.liga=Q;
            }
            delete Object.T;
        }
        }
        this.INICIO=P;
    }

    elimina_despues_x(X){
        var P=this.INICIO;
        var Q=P;
        var T=Q.liga;
        var BAND=1;
        while(Q.info!=X && BAND==1){
            if(Q.liga!=null){
                Q=Q.liga;
                T=T.liga;
            }
            else{
                BAND=0;
            }
        }
        if(BAND==0){
            throw new Error("EL NODO DADO COMO REFERENCIA NO SE ENCUENTRA EN LA LISTA");
        }
        else{
            if(T==null){
                throw new Error("NO HAY NODO DESPUES DE X");
            }
            else{
                Q.liga=T.liga;
            }
        }
        this.INICIO=P;
    }

}
