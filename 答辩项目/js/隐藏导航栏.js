            var ul=document.getElementById("dalist");
			var lis=ul.getElementsByTagName("li");
			var divs=document.getElementsByClassName("baner-yincang")
			for(var i=1;i<lis.length;i++){
				lis[i].index=i;
				lis[i].onmouseenter=function(){
					for(var j=1;j<lis.length;j++){
      					divs[j].className="baner-yincang";
						
					}
				    divs[this.index].className="baner-yincang show";
					}
				
				divs[i].onmouseleave=function(){
						this.className="baner-yincang";
				}
			}