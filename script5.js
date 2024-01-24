console.log("one");
console.log("two");
console.log("three");

//callbacks &callback hell
/*function getData(dataId,getNextData){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        console.log("data"+dataId);
        resolve("success");
        if(getNextData){
        getNextData();
        }
      },2000);
   });
};

getData(1,()=>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4);
       })
    });
})*/


//promise chaining
const promise=new Promise((resolve,reject)=>{
     resolve("learning promise")
});

promise
.then(function(result1){
    console.log(result1);
    setTimeout(()=>{
       return new Promise((resolve,reject)=>{
        resolve("learning promise chaining");
      })
   },1000);
})
.then(()=>{
    console.log("problem solved");
}).catch(()=>{
    console.log("will recheck the code");
})

/*function sum(a,b){
    console.log(a+b);
}*/
const sum=((a,b)=>{
    console.log(a+b);
})

function sub(a,b){
    console.log(a-b);
}

function calculator(a,b,sumCallback,subCallback){
    sumCallback(a,b);
    subCallback(a,b);
}

calculator(8,5,sum,sub);

function asyncFunc(){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        console.log("fetching data1........");
       })   
       setTimeout(()=>{
        console.log("data1");
        resolve("success");
       },5000);
    })
}

function asyncFunc2(){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        console.log("data2");
        resolve("success");
       },5000);
    })
}

let p1=asyncFunc();
p1.then((res)=>{
    console.log("result");
    console.log("fetching data2........")

    let p2=asyncFunc2();
    p2.then(()=>{
        console.log("result");
    }); 
});

//async await
//simplest way to chain methods 

function api(dataId){
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("weather data");
    console.log("data"+dataId)
    resolve("success");
    },2000);
  })
}

async function getWeatherData(){//create a function with any name 
    console.log("fetching weather data1");
    await api(1);
    console.log("fetching weather data2");
    await api(2);
    console.log("fetching weather data3");
    await api(3);
    console.log("fetching weather data4");
    await api(4);
}


//IIFA-->Immediately Invoked Function Expression
(async function (){//any function name can be taken in place of "function"
    console.log("fetching weather data1");
    await api(1);
    console.log("fetching weather data2");
    await api(2);
    console.log("fetching weather data3");
    await api(3);
    console.log("fetching weather data4");
    await api(4);
})();










