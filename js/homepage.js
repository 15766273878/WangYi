		var stop = document.getElementById("renqi-top");

		var ps = stop.getElementsByTagName("p");

		var alls = document.getElementsByClassName("alls");

		for(var i = 0; i < ps.length; i++) {
			ps[i].index = i;
			ps[i].onclick = function() {
				for(var j = 0; j < ps.length; j++) {
					ps[j].className = "";
					alls[j].className = "alls";
				}
				this.className = "pstyle";
				alls[this.index].className = "alls show";
			}
		}

		function returnDate() {
			var startTime = new Date();
			var endTime = new Date("2017/12/8 17:30:00");
			var startMins = startTime.getTime();
			var entMins = endTime.getTime();

			var time = entMins - startMins;
			var day = 0;
			var h = 0;
			var min = 0;
			var sec = 0;
			var mm = 0;

			if(time > 0) {

				day = Math.floor(time / 1000 / 60 / 60 / 24);
				h = Math.floor(time / 1000 / 60 / 60 % 24);
				min = Math.floor(time / 1000 / 60 % 60);
				sec = Math.floor(time / 1000 % 60);
				mm = Math.floor(time % 1000);
			}
			//		document.getElementsByClassName("day")[0].value= day;
			document.getElementsByClassName("hour")[0].value = h;
			document.getElementsByClassName("min")[0].value = min;
			document.getElementsByClassName("sec")[0].value = sec;
			//		document.getElementById("mm").innerHTML= mm;
		}
		returnDate();
		setInterval("returnDate()", 1);
		