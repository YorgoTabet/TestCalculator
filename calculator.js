

var items = [];
iobox = document.getElementById("ioArea");


function buttonpressed(event){

        //iobox.innerHTML+=event.target.innerHTML;
        //items[items.length()]= event.target.innerHTML;


        switch(event.target.innerHTML) {

                case "C":
                        if(items.length>0){
                        items = [];
                        iobox.innerHTML = "";
                        }
                        break;
                case "back":
                        if(items.length>0){
                        items.pop();
                        loadIoBox();
                        }
                        break;
                case "=":
                        if(items.length>0){
                        performEquation();
                        }
                        break;
                case "+" , "-", "/", "%","x":
                        items[items.length]==event.target.innerHTML;
                default:
                       if(isOperator(event.target.innerHTML)){

                        isOperator(items[items.length-1])?items[(items.length)-1]=event.target.innerHTML:items[items.length]=event.target.innerHTML;
                        loadIoBox();

                       }else{

                        iobox.innerHTML+=event.target.innerHTML;
                        isOperator(items[(items.length)-1])?items[items.length]=event.target.innerHTML:items[items.length-1]==null?
                        items[items.length]=event.target.innerHTML:items[items.length-1]+=event.target.innerHTML;
                }
                      


        }
        console.log(items)

    

}

function loadIoBox(){

        console.log('loading');
        iobox.innerHTML = '';

        for( let i=0;i<items.length;i++){

                iobox.innerHTML+=items[i];

        }

}

function performEquation(){

        total = 0;
        while(items.includes('%'))
        {
                while(items.includes('%'))
                {
                       let index = items.indexOf('%');
                       console.log('equation is '+ (parseFloat(items[index-1])/100)*parseFloat(items[index+1]));
                       items[index-1]=(parseFloat(items[index-1])/100)*parseFloat(items[index+1]);
                       items.splice(index,2);
                       loadIoBox();


                        
                }
        }

        while(items.includes('x')||items.includes('/'))
        {
                while(items.includes('x'))
                {
                       let index = items.indexOf('x');
                       console.log('equation is '+ parseFloat(items[index-1])*parseFloat(items[index+1]));
                       items[index-1]=parseFloat(items[index-1])*parseFloat(items[index+1]);
                       items.splice(index,2);
                       loadIoBox();


                        
                }
                while(items.includes('/')){

                        if(items.includes('/'))
                        {
                               let index = items.indexOf('/');
                               console.log('equation is '+ parseFloat(items[index-1])/parseFloat(items[index+1]));
                               items[index-1]=parseFloat(items[index-1])/parseFloat(items[index+1]);
                               items.splice(index,2);
                               loadIoBox();
        
        
                                
                        }

                }

        }
        while(items.includes('+')||items.includes('-'))
        {
                while(items.includes('+'))
                {
                       let index = items.indexOf('+');
                       console.log('equation is '+ parseFloat(items[index-1])+parseFloat(items[index+1]));
                       items[index-1]=parseFloat(items[index-1])+parseFloat(items[index+1]);
                       items.splice(index,2);
                       loadIoBox();


                        
                }
                while(items.includes('-')){

                        if(items.includes('-'))
                        {
                               let index = items.indexOf('-');
                               console.log('equation is '+ parseFloat(items[index-1])-parseFloat(items[index+1]));
                               items[index-1]=parseFloat(items[index-1])-parseFloat(items[index+1]);
                               items.splice(index,2);
                               loadIoBox();
        
        
                                
                        }

                }

        }



}
/*function findPrevOp(index){
      let x;
      

        for(let i=index-1;i>=0;i--){

              if(!items[i].isOperator)
              {
                 x+=items[i].toString;
                 console.log("prevop:" + x.toString())

                
              }else{
                      
                console.log("prevop:" + parseInt.x)
                return x.toString
                        }

        }


}
function findNextOp(index){

        let x=[];

        for(let i=index+1;i<items.length;i++){

              if(!items[i].isOperator)
              {
                x.push(items[i]);
                
              }else return x.toString;
              
        }*/



function isOperator(item){

        if(item=='x' || item == '/' || item== '-' || item== '%' || item=='+')
        {
                return true;

        }
        else return false;
}