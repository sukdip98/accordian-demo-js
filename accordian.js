const accordianItemHeaders=document.querySelectorAll(".accordian-item-header");
accordianItemHeaders.forEach(header=>{
    header.addEventListener("click",event=>{
        header.classList.toggle("active");
        const nestedItem=document.querySelectorAll(".nest-items");
        if(nestedItem.length>=1){
          document.querySelectorAll(".nest-header").forEach(nest=>{
            nest.addEventListener("click",event=>{
                nest.classList.toggle("active2");
            })
          })
        }
    })
})