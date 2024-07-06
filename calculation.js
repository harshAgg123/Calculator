let imput=document.getElementById('input');
        let button=document.querySelectorAll('button');
        let string="";
        let arr=Array.from(button);
        arr.forEach(button =>{
            button.addEventListener('click',(e)=>{
                if(e.target.innerHTML=='='){
                    string=eval(string);
                    input.value=string;
                }
                else if(e.target.innerHTML=='AC'){
                    string="";
                    input.value=string;
                }
                else if(e.target.innerHTML=='DEL'){
                    string=string.substring(0,string.length-1);
                    input.value=string;
                }
                else if(e.target.innerHTML=='sin'){
                    let angle = parseFloat(input.value);
                    let angleInRadians = angle * Math.PI / 180;
                    let sineValue = Math.sin(angleInRadians);
                    input.value = sineValue;
                }
                else if(e.target.innerHTML=='cos'){
                    let angle = parseFloat(input.value);
                    let angleInRadians = angle * Math.PI / 180;
                    let cosValue = Math.cos(angleInRadians);
                    input.value = cosValue;
                }
                else if(e.target.innerHTML=='tan'){
                    let angle = parseFloat(input.value);
                    let angleInRadians = angle * Math.PI / 180;
                    let tanValue = Math.tan(angleInRadians);
                    input.value = tanValue;
                }
                else if(e.target.innerHTML=='π'){
                    let sineValue = Math.PI;
                    input.value = sineValue;
                }
                else if(e.target.innerHTML=='log'){
                    let angle = parseFloat(input.value);
                    let Value = Math.log(angle);
                    input.value = Value;
                }
                else{
                string+=e.target.innerHTML;
                input.value=string;
                }
            })
        })