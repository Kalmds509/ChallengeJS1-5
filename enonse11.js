let lis=[5,4,1,15,57,8,12]
pi_piti=lis[0]
pi_gran=lis[0]
for (let i of lis){
    if (i<pi_piti){
        pi_piti=i
    }
    else if(i>pi_gran){
        pi_gran=i
    }
}
console.log(pi_piti,pi_gran)