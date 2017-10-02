/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/*    
    Dr. Mark E. Lehr
    September 11th, 2017
    Savings function implemented 7 different ways

 */

function Savings (pv, intr, n) {
    this.pv = pv;
    this.intr = intr;
    this.n = n;  //n = number of years
}

//Savings with a for-loop
Savings.prototype.save1 = function() {
    var pval = this.pv;
    for(var year=1;year<=this.n;year++){
        pval*=(1+this.intr);
    }
    return pval;
};

//Savings with a power function
Savings.prototype.save2=function(){
    return this.pv*Math.pow((1+this.intr),this.n);
};

//Savings with the exponential-log
Savings.prototype.save3=function(){
    return this.pv*Math.exp(this.n*Math.log(1+this.intr));
};

//Savings with recursion
Savings.prototype.save4=function(pv=this.pv, intr=this.intr, n=this.n){
    if(n<=0)return pv;
    return save4(pv,intr,n-1)*(1+intr);
};

//Savings with a defaulted parameter
Savings.prototype.save5=function(){
    var pval=this.pval;
    for(var year=1;year<=this.n;year++){
        pval*=(1+this.intr);
    }
    return pval;
};

//Savings with a reference object
Savings.prototype.save6=function(fv){
    fv.save=this.pv*Math.exp(this.n*Math.log(1+this.intr));
};

//Savings with an array
Savings.prototype.save7=function(){
    //Declare an array
    var fv=new Array();
    //Calculate all the values in the array
    fv[0]=this.pv;
    for(var year=1;year<=this.n;year++){
        fv[year]=fv[year-1]*(1+this.intr);
    }
    return fv;
};

//Display the savings array
Savings.prototype.display=function(fv){
    //Output the heading for our table
    document.write('<table width="200" border="1">');
    document.write("<tr><th>Years</th><th>Savings</th></tr>");
    for(var year=0;year<fv.length;year++){
        document.write("<tr>");
        document.write("<td>"+year+"</td>");
        var x=1*fv[year];
        document.write("<td>$"+x.toFixed(2)+"</td>");
        document.write("</tr>");
    }
    document.write("</table>");	
};

