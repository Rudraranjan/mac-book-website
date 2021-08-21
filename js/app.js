// function declare for memory price addjustment

function extraMemoryDetails (memory){
    const extraMemoryOne = document.getElementById('extra-memory');
    const getInner = extraMemoryOne.innerText; 
    if(memory == true){
        const totalInner = 0;
        extraMemoryOne.innerText =totalInner;
    }
    else{
        const totalInner = 180;
        extraMemoryOne.innerText =totalInner;
    }  
    calculationAmount();
    
}

document.getElementById('memoryOne-add').addEventListener('click', function(){
   extraMemoryDetails(true);

   
})
document.getElementById('memoryTwo-add').addEventListener('click',function(){
    extraMemoryDetails(false);

       
})

// function declare for storage price addjustment

function extraStorageDetails (storage){
    const extraMemoryOne = document.getElementById('extra-storage');
    const getInner = extraMemoryOne.innerText; 
    if(storage == 'first'){
        const totalInner = 0;
        extraMemoryOne.innerText =totalInner;
    }
    else if(storage == 'second'){
        const totalInner = 100;
        extraMemoryOne.innerText =totalInner;
    } 
    else{
        const totalInner = 180;
        extraMemoryOne.innerText =totalInner;
    }    
    calculationAmount();
}

document.getElementById('storageOne-add').addEventListener('click', function(){
    extraStorageDetails('first');   
    
})
document.getElementById('storageTwo-add').addEventListener('click',function(){
    extraStorageDetails('second');
   
    
})
document.getElementById('storageThree-add').addEventListener('click',function(){
    extraStorageDetails('third');
    
})

// function declare for delivery price addjustment

function extraDeliveryyDetails (delivery){
    const extraMemoryOne = document.getElementById('delivery-charge');
    const getInner = extraMemoryOne.innerText; 
    if(delivery == true){
        const totalInner = 0;
        extraMemoryOne.innerText =totalInner;
    }
    else{
        const totalInner = 20;
        extraMemoryOne.innerText =totalInner;
    }
    
    calculationAmount();
}

document.getElementById('deliveryOne-add').addEventListener('click', function(){
   extraDeliveryyDetails(true);
   
   
})
document.getElementById('deliveryTwo-add').addEventListener('click',function(){
    extraDeliveryyDetails(false);      
   
    
})

//function for total price declaration

function amountInput(amountId){
   

    var amountStore = document.getElementById(amountId);
    var amountInner = amountStore.innerText;
    var amountInnerParse = parseInt(amountInner);    
    return amountInnerParse;
}

function calculationAmount(){
    const basePriceAmount = amountInput('base-price');
    const extraMemory = amountInput('extra-memory');
    const extraStorage = amountInput('extra-storage');
    const deliveryCharge = amountInput('delivery-charge');
    const totalPrice = amountInput('total-price');

    var totalAmountCal = extraMemory + extraStorage + deliveryCharge + basePriceAmount;

    document.getElementById('total-price').innerText = totalAmountCal;        
} 





