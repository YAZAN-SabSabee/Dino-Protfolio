let body=document.querySelector("body"),
    lightBox=document.querySelector(".lightBox"),
     heart=document.querySelector(".heart"),
     down=document.querySelector(".down"),
    img=document.querySelectorAll(".gImg"),
    showimg=lightBox.querySelector(".showimg img"),
    close=lightBox.querySelector(".close");

            heart.addEventListener("click", function(){
            	if (heart.style.color = '#fff') {
	        heart.style.color='red';
	        heart.style.backgroundColor='#ccc'
	    		          }
	    		          else{
	    		          	heart.style.color='#fff';
	                        heart.style.backgroundColor='#ccc'
	    		          }  })
   
	          down.addEventListener("click", function(){
	           down.style.color='#56ccf2';
	           down.style.backgroundColor='#ccc' })

for (let image of img) {
	image.addEventListener("click", ()=>{
		lightBox.style.display = "block";
		showimg.src=image.src;
		body.style.overflow="hidden";
		close.addEventListener("click", ()=>{
			lightBox.style.display = "none";
			body.style.overflow="visible";
		})
	})
}
