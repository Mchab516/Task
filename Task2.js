let product_V1 = [7, 9, 1,9]
let product_V2 = [6, 0, 2,11]


function dotProduct(product_V1,product_V2){
    let p = 0;
    for(let i = 0; i < product_V1.length; i++){
        p = p + product_V1[i] * product_V2[i]
      }
    return p

  }
  console.log(dotProduct(product_V1,product_V2))
