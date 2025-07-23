console.log("警告！此文件是过期版本，参见../bdohlh/show.js");//祝您好运！
function getQ(hname)//获取参数
{
    var reg=new RegExp("(^|&)"+hname+"=([^&]*)(&|$)","i");
    var r=window.location.search.substr(1).match(reg);
    if(r!=null)
	{
		return unescape(r[2]);
	}
    return null;
}
const dg=["类人型哈儿","高智商哈儿","中智商哈儿","低智商哈儿","化学物质型哈儿","待销毁哈儿","已销毁哈儿","外逃哈儿","不存在此哈儿","已灭亡哈儿"];//各类哈儿综合能力等级（ХИРГ）的名称
//           0             1            2       3           4            5         6           7         8           9
const dgclr=["#00FF00","#AA00FF","#FFFF00","#00FFFF","#CC0000","#D06A0D","#6B6895","#2A5750","#FFFFFF","#88AAEE"];//每个ХИРГ的对应颜色
const clrs=["#FFAAAA","#FFFFAA","#AAFFAA","#AAFFFF","#FFAAFF","#AAFFFF"],xmlfileurl="https://hssrgov.github.io/hluhd/haerlib.xml";//链接颜色，共6个；数据库存储文件URL
const ne_title="不支持 - 哈儿实验室危险哈儿数据库 БДОХЛХ",ne_body="<h1 style=\" color: #FFAAAA;\">浏览器版本太旧，请使用更高版本的浏览器</h1>";//База Данных Опасных Хаеры Лаборатории Хаера=БДОХЛХ
var hname,born,des,dgs,info,haerona,dgmhx,age,die;//hname：名称（临时存储用的变量），born：出生年份，des：概要，dgs：ХИРГ（临时存储用的变量），info：信息（描述），haerona：此哈儿的负责人，dgmhx：哈儿性质（0=哈儿，1=哈儿团，2=哈儿簇，临时存储用的变量）,age：年龄（临时存储用的变量），die：被销毁或死亡年份（临时存储用的变量，用以标注年龄）
var mhn,minhn,thisyear,actualminhn,rg,qj;//mhn为最大编号，minhn为最小编号，直接影响到索引的表格行数和“当前可用编号”的数值；thisyear为当前年份（公历），用于计算哈儿的年龄，每年末要更新；actualminhn为实际最小哈儿编号；rg为循环替换如[br]之类的简略符号的循环次数，32次足够多；可用哈儿区间
var xmlDoc;
function run()//БДОХЛХ主页面运行函数
{
	var idd=getQ("haer");//idd：请求的哈儿编号
	if(idd!=null)window.location.href="../bdohlh/index.html?haer="+idd;
	else window.location.href="../";
	return;
}
function runtable()//БДОХЛХ索引运行函数
{
	window.location.href="../bdohlh/list.html";
	return;
}
function nextbutton(ifnext)//БДОХЛХ主页面翻页按钮运行函数，若ifnext=1则翻到后一个哈儿，否则翻到前一个哈儿
{
	let idd=getQ("haer");//idd：请求的哈儿编号
	if(ifnext==1)window.location.href="../bdohlh/index.html?haer="+(Number(idd)+Number(1));//向后翻页
	else window.location.href="../bdohlh/index.html?haer="+(Number(idd)-Number(1));//向前翻页
	return;
}