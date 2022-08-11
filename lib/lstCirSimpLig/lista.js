class Nodo{

    info=0;
    liga=null;
}
export class ListaCircular{
  
   INICIO=null;
   canvas=null;

   constructor(canvas) {
    this.canvas = canvas;
   }///////////////////////////////////////////

   buscar(DATO){
       var encontrado=false;
       var tmp=this.INICIO;
       while(tmp!=null){
            if(tmp.info==DATO){
                encontrado=true;
                break;
            }
            tmp=tmp.liga; 
       }

       return encontrado;
   }


   inserta_inicio(DATO){
    if (this.INICIO==null){
       var P=this.INICIO;
       var Q=new Nodo();
       Q.info=DATO;
       Q.liga=P;
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
    }
   }///////////////////////////////////////////
   inserta_final(DATO){
    if(INICIO==null){
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
    }/////////////////////////////////////////////
    dibujarNodosLog(){

        var	tmp=this.INICIO;
        var cad="";
        while(tmp!=null){
            cad+=tmp.info+"::";
            tmp=tmp.liga;
        }
        console.log(cad);
    }

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
       

    }
}
