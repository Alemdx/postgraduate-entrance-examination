dragging = false;
dragX0 = 0;
dragY0 = 0;
/* 描述: 对话框打开 */
//       strUrl: url地址 strRUrl:父地址 strWidth:宽度 strHeight:高度 
function openWindow1(strUrl,strRUrl,strWidth,strHeight){
	var win1

	var s_Top=window.document.body.clientHeight/2-eval(strHeight)/2;
	var s_Left=window.document.body.clientWidth/2-eval(strWidth)/2;
	
	win1=window.showModalDialog(strUrl,window,"dialogWidth:"+strWidth+"px"+";dialogHeight:"+strHeight+"px;help:no;status:no;top:"+s_Top+";left:"+s_Left+";");			

    if(win1!=null){
		if (win1!=""){
		   if(win1!="ok"){
			window.location=strRUrl+"?"+win1;
			}
		   else{
		    window.location=strRUrl;
			}
		}else{
		    window.location=strRUrl;
		} 
	}
}
function MouseDownOnPopWin()
{
	obj = document.all["popWin"].style;
	x = event.x+document.body.scrollLeft;
	y = event.y+document.body.scrollTop;

	if (x>=obj.pixelLeft+5 && y>=obj.pixelTop && x<=obj.pixelLeft+280 && y<=obj.pixelTop+20){
		dragging = true;
		dragX0 = x-obj.pixelLeft;
		dragY0 = y-obj.pixelTop;
	}
	return true;
}

function MouseMoveOnPopWin()
{
	obj = document.all["popWin"].style;
	x = event.x+document.body.scrollLeft;
	y = event.y+document.body.scrollTop;
	if (dragging){
		obj.pixelLeft = x-dragX0;
		obj.pixelTop = y-dragY0;
	}
	return true;
}

function MouseUpOnPopWin()
{
	dragging = false;
	return true;
}


function ShowHelp(){ 
	var wnd=window.open('/finance/help/DepartCode-h.asp','new','scrollbars=yes,toolbar=yes,resizable=yes,width=600,height=500,top=0,left=0');
	wnd.focus();
}
//窗口缩放时调整

function window_onresize()
{
var intHeight

	intHeight = document.body.offsetHeight - GetOffsetTop(divMain)-0;	
	if(intHeight>40){
		divMain.style.height = document.body.offsetHeight - GetOffsetTop(divMain);
	}
}

//取得某对象在屏幕上的y方向的偏移
function GetOffsetTop(objObject)
{
var objParent
	
	intTop = objObject.offsetTop;
	objParent = objObject.offsetParent;
	while(null!=objParent){
		intTop += objParent.offsetTop;
		objParent = objParent.offsetParent;
	}
	return intTop;
}

function on_keypress(nextobj)
{
  if (event.keyCode==13 )
      {
    	 if (nextobj!=null)
		{   
		    nextobj.focus();
			window.event.keyCode=0;
			return;
		}
          
      }	
}

//打开弹出窗口
function OpenPopWin(width1,height1)
{
	if (document.all){
		obj = document.all["popWin"].style;
		obj.pixelLeft = (document.body.clientWidth-width1)/2+document.body.scrollLeft;
		obj.pixelTop  = (document.body.clientHeight-height1)/2+document.body.scrollTop;
		obj.visibility="visible";
		document.all["popWin"].onmousedown = MouseDownOnPopWin;
		document.all["popWin"].onmousemove = MouseMoveOnPopWin;
		document.all["popWin"].onmouseup = MouseUpOnPopWin;
		document.all["popWin"].onmouseout = MouseUpOnPopWin;
	}
}

//关闭弹出窗口
function ClosePopWin()
{
	document.all["popWin"].style.visibility="hidden";
}

//打开弹出窗口pop
function OpenPop(width1,height1)
{
	if (document.all){
		obj = document.all["pop"].style;
		obj.pixelLeft = (document.body.clientWidth-width1)/2+document.body.scrollLeft;
		obj.pixelTop  = (document.body.clientHeight-height1)/2+document.body.scrollTop;
		obj.visibility="visible";
		document.all["pop"].onmousedown = MouseDownOnPopWin1;
		document.all["pop"].onmousemove = MouseMoveOnPopWin1;
		document.all["pop"].onmouseup = MouseUpOnPopWin;
		document.all["pop"].onmouseout = MouseUpOnPopWin;
	}
}
function MouseDownOnPopWin1()
{
	obj = document.all["pop"].style;
	x = event.x+document.body.scrollLeft;
	y = event.y+document.body.scrollTop;

	if (x>=obj.pixelLeft+5 && y>=obj.pixelTop && x<=obj.pixelLeft+280 && y<=obj.pixelTop+20){
		dragging = true;
		dragX0 = x-obj.pixelLeft;
		dragY0 = y-obj.pixelTop;
	}
	return true;
}

function MouseMoveOnPopWin1()
{
	obj = document.all["pop"].style;
	x = event.x+document.body.scrollLeft;
	y = event.y+document.body.scrollTop;
	if (dragging){
		obj.pixelLeft = x-dragX0;
		obj.pixelTop = y-dragY0;
	}
	return true;
}
//关闭弹出窗口pop
function ClosePop()
{
	document.all["pop"].style.visibility="hidden";
}

//防止录入乱字
function ItemKeyPress()
{
   switch (event.keyCode)
   {case 58: event.keyCode=0;break;
    case 59: event.keyCode=0;break;
    case 60: event.keyCode=0;break;
    case 62: event.keyCode=0;break;
    case 42: event.keyCode=0;break;
    case 124: event.keyCode=0;break;
    case 96: event.keyCode=0;break;
    case 38: event.keyCode=0;break;
    case 35: event.keyCode=0;break;
    case 33: event.keyCode=0;break;
    case 36: event.keyCode=0;break;
    case 40: event.keyCode=0;break;
    case 41: event.keyCode=0;break;
    case 91: event.keyCode=0;break;
    case 93: event.keyCode=0;break;
    case 123: event.keyCode=0;break;
    case 125: event.keyCode=0;break;
    case 34: event.keyCode=0;break;
    case 39: event.keyCode=0;break;
    case 37: event.keyCode=0;break;
    case 32: event.keyCode=0;break;
    }
}

//检查输入的是否数字
function getValidNumInput(lngKeyCode,txtValue)
{
	if (lngKeyCode > 57 || lngKeyCode < 45)
	{
		if (lngKeyCode!=13) 
			return false;
	}
	if (lngKeyCode == 47)
		return false;
	return true;
}
//检查输入的是否数字且减号不准输入
function getValidNumInput1(lngKeyCode,txtValue)
{
	if (lngKeyCode > 57 || lngKeyCode < 46)
	{
		if (lngKeyCode!=13) 
			return false;
	}
	if (lngKeyCode == 47)
		return false;
	return true;
}

function ItemNumKeyPress()
{
  ItemKeyPress()
  if (!getValidNumInput(event.keyCode,""))
  {
		event.keyCode=0;
  }

}
function ItemNumKeyPress(nextobj)
{
  ItemKeyPress()
  if (!getValidNumInput(event.keyCode,""))
  {
		event.keyCode=0;
  }
  if (event.keyCode==13 )
      {
    	 if (nextobj!=null)
		{   
		    nextobj.focus();
			window.event.keyCode=0;
			return;
		}
          
      }
}

//格式化数字类型
function FormatNumber(srcStr,nAfterDot){
var srcStr,nAfterDot;
var resultStr,nTen;
srcStr = ""+srcStr+"";
strLen = srcStr.length;
dotPos = srcStr.indexOf(".",0);
if (dotPos == -1){
	resultStr = srcStr+".";
for (i=0;i<nAfterDot;i++){
	resultStr = resultStr+"0";
}
return resultStr;
}
else{
if ((strLen - dotPos - 1) >= nAfterDot){
	nAfter = dotPos + nAfterDot + 1;
	nTen =1;
	for(j=0;j<nAfterDot;j++){
		nTen = nTen*10;
		}
resultStr = Math.round(parseFloat(srcStr)*nTen)/nTen;
return resultStr;
}
else{
	resultStr = srcStr;
	for (i=0;i<(nAfterDot - strLen + dotPos + 1);i++){
		resultStr = resultStr+"0";
	}
	return resultStr;
	}
	}
} 
//模仿超级连接（objName为对象名）
//MouseOver_Link()方法为鼠标放在对象时发生
		function MouseOver_Link(objName)
		{
		window.document.all(objName).style.color="#008080";
		window.document.all(objName).style.cursor="hand";
		window.document.all(objName).style.textDecoration="underline";
		}
//MouseOut_Link()方法为鼠标离开对象时发生
		function MouseOut_Link(objName)
		{
		window.document.all(objName).style.color="#000000";
		window.document.all(objName).style.cursor="";
		window.document.all(objName).style.textDecoration="";
		}

