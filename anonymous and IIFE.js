//------------------------(a) odd number in array (anonymous function & IIFE)-----------------------------------------//
(function (ar){
    var ans =[]
    for(val of ar){
        if(val%2!=0)
        ans.push(val)
    }
    console.log(`Odd numbers for the given array are : ${ans}`)
})([1,2,3,4,5,6,7,8,9,10,17]);




//--------------------------(b) Convert all the strings to title caps in a string array----------------------------------------//

let vehicles=["beNz","auDi","bMw","jaQuar"];
(function(str){
    var ans = []
    for(string of str){
        var firstLetter = string[0].toUpperCase();
        ans.push(firstLetter+string.toLowerCase().slice(1))

    } console.log(ans);
})(vehicles);




//---------------------------------(c) Sum of all numbers in an array --------------------------------------------//
(function (n){
    var sum=0
    for(val of n){
        sum=sum+val;
    }
    console.log(`Sum of all numbers in this array is : ${sum}`)
})([1,2,3,4,5,6,7,8,9,10,54]);




//------------------------------(d) Return all the prime numbers in an array------------------------------------------------// 

(function (primeNumbers){
    var ans=[];
    for(val of primeNumbers)
    {
        var count=0;
        for(var i=1;i<=val;i++)
        {

            if(val%i==0)
            {
               count++;
            }

        }
        if(count==2){
            ans.push(val)
        }
    }
    console.log(`the prime numbers in this array are : ${ans}`);

})([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);



//---------------------------(e) Return all the palindromes in an array----------------------------------//

(function (string){
    let rev,palindrome = [];
    for(str of string)
    {
        rev=str.split("").reverse().join("");
        if(rev==str){
            palindrome.push(str);
        }
    }
    console.log(`Palindromes in the given array are : ${palindrome}`)
})(["dad" , "mom" ,"sir" ,"malayalaM" , "malayalam"]);




//--------------------(f) Return median of two sorted arrays of same size--------------------------------------//

let arr1=[1,5,3,8,4,7];
let arr2=[9,6,0];
(function(arr1,arr2){
var concat=arr1.concat(arr2).sort((a,b)=> a-b);
var length=concat.length;
if(length%2==1){     
    console.log("The median is :",concat[((length)/2)-0.5]);
}
else{
  console.log("The median is : ",(concat[length/2]+concat[(length/2)-1])/2)
}

})(arr1,arr2);




// ----------------------(g) Remove duplicates from an array-------------------------------------------------------------//

(function (n){
    console.log([...new Set(n)]);
})(["ram", "ram", "kavya", "kamal" ,"kavya","guna","unal","guna","mahesh"]);




//----------------------------------(h) Rotate an array by k times-----------------------------------------------//


 //----------------If you want to change the value of 'K times To Rotate' .. you can change.. the array will rotate 'k' times----//
var num = [2,6,8,9,0,17,11];
(function (ar,KtimesToRotate){
    var i=0;
    while(i<KtimesToRotate){
        ar.unshift(ar.pop());
        i++;
    }
    console.log(ar);
})(num,8); 

//---------------------------------------------------------------------------------------------------------------------------//