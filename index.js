function MinWindowSubstring(strArr) { 
    let str = strArr[0];
        let needle = strArr[1].split('');
    
     let len = str.length;
      for(let i = needle.length; i <= len; i++ ){
    
    for (j = 0; j <= len - i; j++) {
    let mySlice = str.substr(j, i);
                if (isContained(mySlice)) {
                    return mySlice;
                }
    
    }
    
      }
    
      
     function isContained(str) {
            let arr = str.split('');
            for (let i = 0, len = needle.length; i < len; i++) {
                let place = arr.findIndex(val => {
                    return val === needle[i]
                });
                if (place === -1) {
                    return false;
                } else {
                    arr.splice(place, 1);
                }
            }
            return true;
        }
    
    
     }
    
    
       
    
    console.log(MinWindowSubstring(["aaabaaddae", "aed"]));