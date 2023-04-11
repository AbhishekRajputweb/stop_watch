var hr = 00;
        var min = 00;
        var sec = 00;
        var count = 00; 
         
        var timer = false;

        function stopwatch(){
           if(timer==true){
              count=count+1;
                if(count==100){
                    sec=sec+1;
                    count=00;
                    if(sec==60){
                        min=min+1;
                        sec=00;
                        if(min==60){
                            hr+hr+1;
                            min=00;
                        }
                    }
                }


              setTimeout("stopwatch()",10)
           }

           var hrst =hr;
           var minst = min;
           var secst = sec;
           var countst = count;
           if(count<10){
             countst="0"+count
           }
           if(sec<10){
             secst="0"+sec
           }
           if(min<10){
             minst="0"+min
           }
           if(hr<10){
             hrst="0"+hr
           }

           document.getElementById('hr').innerHTML=hrst;
           document.getElementById('min').innerHTML=minst;
           document.getElementById('sec').innerHTML=secst;
           document.getElementById('count').innerHTML=countst;
        }

     function start(){
        timer = true;
        stopwatch()
     }

     function stop(){
        timer = false;
    }

    function reset(){
        timer = false;
        var hr = 00;
        var min = 00;
        var sec = 00;
        var count = 00;

        document.getElementById("hr").innerHTML="00"
        document.getElementById("min").innerHTML="00"
        document.getElementById("sec").innerHTML="00"
        document.getElementById("count").innerHTML="00"
    }