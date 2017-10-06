/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * 
 * Created by Scott Parker, 11:40 AM, 10/4/2017
 * Class to manage inventory items in local storage. Will enable the following:
 *      Create initial inventory file
 *      Add item to inventory
 *      Show all items in inventory
 * 
 */


function InvenManager() {
    if (localStorage.getItem("Inventory") === null) {
        //Create an array with 2 objects
        var inventoryItem1={"Product":"Chicken","Inventory":"155","Price":"3.55"};
        var inventoryItem2={"Product":"Milk","Inventory":"203","Price":"2.33"};
        var inventory=[];
        inventory[0]=inventoryItem1;
        inventory[1]=inventoryItem2;
        //Display the array
        document.write("Creating two item inventory to start with in localstorage");
        //Stringify the array
        var str=JSON.stringify(inventory);
        //Store into local Storage
        localStorage.setItem("Inventory",str);
    }
    this.inven=localStorage.getItem("Inventory");
}
        
InvenManager.prototype.display = function () {
    //Parse the information back into an array
    var inventory=JSON.parse(this.inven);
    //Display the array
    var temptxt="Inventory Items: <br>";
    for(var items=0;items<inventory.length;items++){
        temptxt+=("The "+items+" Object</br>");
        var obj=inventory[items];
        for(var property in obj){
        temptxt+=(property+"="+obj[property]+"</br>");
        }
    }
    document.getElementById("invdisplay").innerHTML = temptxt;
};     
        
        
//InvenManager.prototype.display = function () {
//    //Parse the information back into an array
//    var inventory=JSON.parse(this.inven);
//    //Display the array
//    for(var items=0;items<inventory.length;items++){
//        document.write("The "+items+" Object</br>");
//        var obj=inventory[items];
//        for(var property in obj){
//        document.write(property+"="+obj[property]+"</br>");
//        }
//    }
//};

InvenManager.prototype.addItem = function () {
    //Get the information from the local URL
    var url=document.location.href;
    //Call the getForm function to place into an object
    var $_GET=getForm(url);
    //Retrieve from Inventory (load localstorage file)
    var str=localStorage.getItem("Inventory");
    //Parse the inventory to an object
    var inventory=JSON.parse(str);
    //How many products are in inventory
    var number=inventory.length;
    //Add our new product to inventory
    inventory[number]=$_GET;
    //Put back the object into local storage after adding to the inventory object
    var str=JSON.stringify(inventory);
    localStorage.setItem("Inventory",str);
    this.inven=localStorage.getItem("Inventory");
    //Display the array of objects
    this.display();
};


InvenManager.prototype.reset = function () {
    //clear everything after ? in the URL (take the split array before ? and reassign to location bar
    location.href = location.href.split('?')[0];
};

var inventory = new InvenManager();