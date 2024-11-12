const getStoredCartList = (listName) =>{

    const storedListr = localStorage.getItem(listName);

    if(storedListr){
        const storedList = JSON.parse(storedListr);
        return storedList;
    }else{
        return []
    }
}

const setStoredCartList = (id, listname) =>{
    
    let storedListr = getStoredCartList(listname);
    
    if(storedListr){

        storedListr.push(id);
    }else{

        storedListr =[]
        storedListr.push(id);
    }

    const storedListsr = JSON.stringify(storedListr);

    localStorage.setItem(listname, storedListsr);
    
}
const deleteFromCart = (id, listName) =>{
    let storedListr = getStoredCartList(listName);
    const index = storedListr.indexOf(id);
    storedListr.splice(index,1);
   
    const storedListsr = JSON.stringify(storedListr);
    localStorage.setItem(listName, storedListsr);
}
const clearCart = (listname) =>{
    const storedListsr = JSON.stringify([]);

    localStorage.setItem(listname, storedListsr);
}

export {getStoredCartList, setStoredCartList,clearCart, deleteFromCart}