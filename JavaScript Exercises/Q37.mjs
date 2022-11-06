/* 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads 
I love JavaScript. Make a large shirt and a medium shirt with the default message, 
and a shirt of any size with a different message.
*/


function make_shirt(size, msg){
    if(size.toLowerCase() == "large"){
        console.log("I love JavaScript");
    }
    else if(size.toLowerCase() == "medium"){
        console.log("I love JavaScript");
    }
    else{
        console.log("Ohh! That will look great on T-Shirt of size: " + size + " and the message: " + msg);
    }
    
}

make_shirt("XL", "Don't Stop until you are done");