//*************************************************create Conatiner */
var div=CreateTag('div',['class'],['container']);
document.body.append(div);

var cal_div=CreateTag('div',['class'],['calculator']);
div.append(cal_div);
//**************************************************create heading tag
var h1=CreateTag('h1',['id','class'],['title','tt'],'Casio');
var p=CreateTag('p',['id','class'],['description','tt1'],'<br>Basic Calculator');
cal_div.append(h1,p);

//************************************************create Input Elements */
var ip=CreateTag('input',['type','id','placeholder'],['text','result','0']);
var b1=CreateTag('button',['id','onclick'],['clear',`clr()`],'CLR');
var b2=CreateTag('button',['id','onclick'],['delete',`del()`],'DEL');
var b3=CreateTag('button',['id','onclick'],['per',`calculate('%')`],'%');
var b4=CreateTag('button',['id','onclick'],['devision',`calculate('/')`],'/');
var b5=CreateTag('button',['id','onclick'],['7',`calculate('7')`],'7');
var b6=CreateTag('button',['id','onclick'],['8',`calculate('8')`],'8');
var b7=CreateTag('button',['id','onclick'],['9',`calculate('9')`],'9');
var b8=CreateTag('button',['id','onclick'],['mul',`calculate('*')`],'*');
var b9=CreateTag('button',['id','onclick'],['4',`calculate('4')`],'4');
var b10=CreateTag('button',['id','onclick'],['5',`calculate('5')`],'5');
var b11=CreateTag('button',['id','onclick'],['6',`calculate('6')`],'6');
var b12=CreateTag('button',['id','onclick'],['subtract',`calculate('-')`],'-');
var b13=CreateTag('button',['id','onclick'],['1',`calculate('1')`],'1');
var b14=CreateTag('button',['id','onclick'],['2',`calculate('2')`],'2');
var b15=CreateTag('button',['id','onclick'],['3',`calculate('3')`],'3');
var b16=CreateTag('button',['id','onclick'],['add',`calculate('+')`],'+');
var b17=CreateTag('button',['id','onclick'],['dec',`calculate('.')`],'.');
var b18=CreateTag('button',['id','onclick'],['0',`calculate('0')`],'0');
var b19=CreateTag('button',['id','class','onclick'],['equal','equal',`Result()`],'=');
cal_div.append(ip,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19)




///****************************************************create element Function
function CreateTag(tagname,att_name=[],att_value=[],value='')
{
 var el=document.createElement(tagname);
 if(att_name.length>0)
 {
    for(let i=0;i<att_name.length;i++)
   {
     el.setAttribute(att_name[i],att_value[i]);
   }
 }
 if(value!=='')
  el.innerHTML=value;
return el;
}



// Get input element
let result=document.getElementById('result');

//create calucalute function for concatenating input
let calculate=(num)=>{
 result.value+=num;
}
//this is final execution of the input using eval function
let Result=()=>
{
    try {
        result.value=eval(result.value);
    } catch (error) {
        alert('Enter the valid input');//input is wrong display msg
    }
}
//clear function clear the input
function clr()
{
    result.value=" ";
    
}
//delete function delete the last entered value
function del()
{
    result.value=result.value.slice(0,-1)

}

//keyboard event handling
function onkeys(){
           
			onkeydown=function(e){
                
				if(e.key=='*' || e.key=='+'|| e.key=='/' || e.key=='-' || e.key=='.'){
					result.value += e.key;
				}
                //else if(e.charCode >= 48 && e.charCode <= 57)
               else if(e.key=='0' || e.key=='1' || e.key=='2'|| e.key=='3' ||e.key=='4'||e.key=='5'||e.key=='6'||e.key=='7'||e.key=='8'||e.key=='9')
                {
                    result.value += e.key;
                }
                //else if(e.charCode==13)
                else if(e.key=='Enter')
                {
                    Result();
                }
                else{
				alert('Only numbers are allowed');
		    	}
}
}
onkeys();
