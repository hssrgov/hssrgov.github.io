function getQ(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
var idd = getQ("haer");
document.getElementById("sid").value=idd;
const dg=["类人型哈儿","高智商哈儿","中智商哈儿","低智商哈儿","化学物质型哈儿"];
const dgclr=["#00FF00","#AA00FF","#FFFF00","#00FFFF","#CC0000"];
const flagoj="\n<br>\n<strong style=\"color: #CC0000;\">下图是此哈儿的个人旗帜（由此哈儿亲自设计）：</strong>";
var name,age,des,dgs,info,haerona;
var mhn=23,minhn=1,rg=64;
if (idd == "0") {
    name="“萨尤兹”联盟";
	age=-1;
	des="ĈFLŜ最大的恐怖组织";
	dgs=0;
	info="“萨尤兹”联盟是由ŬĈŜ发起的一个恐怖组织，在ĈFLŜ中四处分布，与炼钢党勾结，试图发动反人类武装行动。[br]他们反对人类正常繁衍子孙的行为，试图从根本上清除人类，以达到他们扭曲内心里的可怕目标。[br]他们发动政变，独裁了ĈFLŜ-2019-19，并打击异己者（异己者和他们反对的人被他们称作“阶级敌人”），拒绝外人加入。[br]哈儿实验室ĈFLŜ地下组织部派遣了3个<a href=\"index.html?haer=1\" style=\"color: #FFFF00;\" target=\"_blank\">提季提孩子</a>与其斗争。";
	haerona="G-6054-18K";
	//A+=0 A=1 B=2 C=3 D=4
} else if (idd == "1") {
	name="提季提孩子";
	age=13;
	des="最可怕的魔鬼之一";
	dgs=2;
	info="它是一个魔鬼，于2018年4月21日14:38:39变成哈儿。[br]它喜好撕咬任何生物身上凸起的部分，许多人都被咬掉必须的器官而死。[br]使其停止攻击的条件是其所攻击的对象已被咬成球形或其精力耗尽。[br]将其杀死后，其尸体会分裂出100余个副本并继续咬人，因此其目前无法被销毁。[br]截至2021年10月1日，共有约12万个提季提孩子活跃于哈儿实验室，至少有约8万个提季提孩子隐匿于世界各地。";
	haerona="K-2510-51Y";//真实姓名：江柯毅
} else if (idd == "2") {
    name="哈儿之王";
	age=24;
	des="目前智商最低的哈儿";
	dgs=4;
	info="它是目前智商最低的哈儿，应当被销毁。但它由于功能过于简单，将其销毁后发现其依然屹立于原地，并分裂出2个新的个体。[br]当在哈儿实验室外发现它时严禁移动，否则会遭到其攻击，可能会丧失生命。";
	haerona="G-6054-18K";
} else if (idd == "3") {
    name="空洞孩子";
	age=14;
	des="能够保护被提季提孩子攻击的不幸者";
	dgs=2;
	info="当一个人被提季提孩子攻击后，它可以帮助此人。但由于它的能力有限，在一个星期内只能帮助一个受伤较轻的人。[br]用它头上的空洞分泌的液体，与其另一种体液混合，并涂于伤员的伤口。伤员会很快痊愈，并恢复正常生活。[br]它无法分裂出新的个体，但也无法被人为消灭。";
	haerona="K-2510-51Y";//真实姓名：江柯毅
} else if (idd == "4") {
    name="肾先生";
	age=31;
	des="一个感情破裂的哈儿";
	dgs=3;
	info="它在感情破裂后于街上散步，偶然走进哈儿门。T-5991-54K同志把它的肾小球和静脉连接在一起，成为一个独立的血液循环系统，这导致了他的肾坏死。因为它进入哈儿门前遭受了最残酷的感情破裂，所以他常常毁掉大多数他认为是情侣的人的肾脏，被鉴定为危险哈儿。";
	haerona="T-5991-54K";//真实姓名：韩宇乐
} else if (idd == "5") {
    name="CXK病毒";
	age=0;
	des="存在于计算机中的哈儿";
	dgs=4;
	info="2020年7月22日上午ĈFLŜ的一次技术测试中，有人在其电脑内发现“点我解压CXK打篮球视频”的一个应用程序，[br]打开后电脑损坏，文件全部丢失。[br]受害者之一的B-7418-65Ŭ同志认为自己遭到了报复，[br]因为前一天晚上他画了“坤头套儿”以讽刺中国的一个流量明星CXK。";//B-7418-65Ŭ的真实姓名：刘昊维
	haerona="OpenG-qkmb";
} else if (idd == "6") {
    name="橄榄先生";
	age=13;
	des="研究其它哈儿的哈儿";
	dgs=0;
	info="在一次失败的实验中，橄榄先生发生了意外，但幸存了下来。他具有奉献精神，帮助我们研究其它哈儿，数次身负重伤。[br]其于2021年9月1日获得哈儿国建设模范勋章。";
	haerona="S-2231-63D";
} else if (idd == "7") {
    name="小哈儿";
	age=12;
	des="提季提孩子的附属哈儿";
	dgs=3;
	info="它是在提季提孩子的房间当提季提孩子情绪欲望发泄器多年的哈儿，身受重伤但喜好被提季提孩子撕咬，减少了很多次提季提孩子攻击人的事件。[br]其死亡后会分裂至少100个副本并继续等待提季提孩子的撕咬。[br]一般小哈儿的尸体会被提季提孩子咬成球形。";
	haerona="S-2231-63D";
} else if (idd == "8") {
    name="炸（zhá）药";
	age=0;
	des="以油炸方式制成的药品";
	dgs=4;
	info="这是以油炸方式制成的药品，在一次哈儿实验室举办的跳水比赛中，[br]一名参赛的哈儿服用过多，入水时炸（zhá）毁游泳场，因此而发现。[br]极度危险，且难以被销毁。";
	haerona="O-4819-94S";//真实姓名：赵培辰
} else if (idd == "9") {
    name="已体检对象";
	age=14;
	des="体检合格后狂喜的哈儿";
	dgs=4;
	info="这个哈儿体检合格后进入哈儿门，随后拿着显示体检合格体检单四处弹跳，[br]导致哈儿们<span style=\"color: #FFAAAA;\">集体跳动了一个下午</span>，最后被麻醉枪全部制服。[br]它被归为危险哈儿的原因：喜欢在哈儿门处反复进出，动作娴熟，每天能进出<span style=\"color: #FFFFAA;\">2000次以上</span>。[br]这导致它应当被销毁，但现在它已经对所有麻醉剂产生了抵抗力，且目前未找到将其销毁的办法。";
	haerona="A-8139-21B";
}
else if (idd == "10") {
    name="电话者";
	age=9;
	des="电话不停的哈儿";
	dgs=1;
	info="这个哈儿变哈的时候只有7岁，出于好奇进入。[br]当时它刚刚接触电话，对电话机很感兴趣，[br]于是它在这几年的时间里每天向外拨出至少300个电话，导致我们话费严重欠费，[br]我们便把电话机拿走了，结果它联合<a href=\"index.html?haer=1\" target=\"_blank\" style=\"color: #FFAAAA;\">提季提孩子</a>咬人，[br]最终我们将电话交还给它，但是是<span style=\"color: #AAFFFF;\">内部电话，由计算机负责接电话，并播放不堪入耳的话语</span>。[br]这导致目前它有<span style=\"color: #FF0000;\">严重的暴力倾向</span>，已造成3人轻伤。";
	haerona="F-9182-00L";//真实姓名：程子寒
}
else if (idd == "11") {
    name="考生";
	age=13;
	des="考试中的危险存在";
	dgs=2;
	info="它参加了一场考试，<span style=\"color: #FFFFAA;\">在考试中被发现是哈儿（疑似进入考场前上楼梯时滑倒摔坏了脑子）</span>。[br]它试图携带一台电子显微镜进入考场，击倒前来阻止的监考老师并强行开始做题，[br]做题期间为证明线段AB=AC+OD，[br]于是<span style=\"color: #FFAAAA;\">精准作图</span>，<span style=\"color: #FFAAAA;\">并在电子显微镜的帮助下数出AB、AC、OD有多少个分子</span>，[br]被强制移除考场后补考，仍然不断地使用电子显微镜。[br]由它的变哈，我们开发了高台坠落法以将正常人变为哈儿。";
	haerona="O-4819-94S";//真实姓名：赵培辰
}
else if (idd == "12") {
    name="器官收集者";
	age=14;
	des="仅次于提季提孩子的恶魔";
	dgs=4;
	info="这是一个可怕的哈儿，有收集人体器官的癖好。[br]常在公寓、居民小区出没。[br]被收集器官的人都<span style=\"color:  #FFAAAA;\"><strong>当场死亡</strong></span>。\n<br>过于危险，其相关信息不会发布。";
	haerona="B-7418-65Ŭ";//真实姓名：刘昊维
}
else if (idd == "13") {
    name="-000";
	age=2;
	des="反复自尽的哈儿";
	dgs=4;
	info="这个哈儿令人费解。[br]关押它的地方有一堵墙，在特定时间会因为错误而消失。[br]此时，-000常常从墙洞内逃逸，同时它的一个副本在远处自杀。[br]它移动以观察自己副本的尸体，看见了自己副本的尸体后，将突然自杀。[br]在自杀的十余秒前，墙的破洞内重新走出一个新的-000副本，已被恢复成上一个副本刚走出墙外的状态，[br]新的-000副本看见了上一个副本自杀后，[br]将如此循环，直到墙再次恢复。[br]无法被销毁，且试图销毁它时操作者会随机消失，且无法被找到。更多信息不会发布。";
	haerona="K-2510-51Y";//真实姓名：江柯毅
}
else if (idd == "14") {
    name="炸（zhá）药人";
	age=20;
	des="出生为炸（zhá）药的哈儿";
	dgs=4;
	info="它以炸（zhá）药为唯一活动能源，其副本被产生时会将自己炸（zhá）至死亡，并产生新的副本，[br]极其危险，靠近时可能丧失生命。";
	haerona="O-4819-94S";//真实姓名：赵培辰
}
else if (idd == "15") {
    name="自行分解者";
	age=2;
	des="无法识别的对象";
	dgs=4;
	info="它的一些功能与<a style=\"color: #FFAAAA;\" target=\"_blank\" href=\"index.html?haer=13\">-000</a>相仿。[br]它移动时，会将自己分解，并在另外位置重新复制一个自己的副本。[br]时常附带分解其附近的生物，被分解的生物无法再找到，可以定为已被杀死。[br]目前它已经将3名研究员分解，且无法被销毁，更多信息不会发布。";
	haerona="K-2510-51Y";//真实姓名：江柯毅
}
else if (idd == "16") {
    name="地理老师";
	age=29;
	des="飘（piàp）行者";
	dgs=0;
	info="这是一位地理老师，在失踪十余天后突然再次出现在学校。[br]自此以后，其每次上地理课，她都会带着学生和教室飘（piàp）走，下课又飘（piàp）回来。[br]它禁止学生上课时呼吸，理由是空气稀薄。[br]试图离开教室的学生会失去呼吸系统的所有器官，胸腹俱破，尸体将从空中坠落。[br]其认为飘（piàp）走是为了让学生亲眼观察地形地貌，但是跟随它的学生在下课后都被发现已经死亡。[br]其经常带着教学楼飘（piàp）走，只带着自己学生的尸体回来，[br]其它的学生和剩余部分的教学楼，被永远留在了未知位置的空中。[br]试图销毁它的人会在销毁的过程中突然死亡，其无法被销毁。";
	haerona="O-4819-94S";//真实姓名：赵培辰
}
else if (idd == "17") {
    name="已扭曲矩形对象";
	age=14;
	des="目击者终生的阴影";
	dgs=4;
	info="这是一个学生。它面目扭曲，使得看到它脸的人都永远失去了理智，变得精神失常，生活不能自理，[br]它成为目击者终生的阴影，目击者恢复正常的精神状态后回想时时常会再次疯狂以至于猝死。[br]它双眼扭曲，鼻子弯曲，这是一位目击者死亡前所描述的。[br]它喜欢邪教，常常从楼上跳下去测试自己能否飞行，[br]最终飞了数秒，挂在树上，使得大量路人死亡。[br]其应当被销毁，但由于其生命力顽强，目前仍未有效的销毁方案。"+flagoj;
	haerona="V-7851-08Z";//真实姓名：贺骥繇
}
else if (idd == "18") {
    name="Song Liangsa（中文名无法识别）";
	age=13;
	des="炼钢党领导人";
	dgs=1;
	info="这是一个学生。它曾经使用烟花爆竹和手枪攻击自己的身体特定部位以炼钢。[br]其炼钢所需的物品有：军火、毒品和肾宝片。[br]其炼成钢后组建炼钢党，试图独裁世界。[br]其能够发电（特别是在使用了特定类型的蘑菇后），其发电速度能够替代2~3座核电厂，但发电时时常平移。[br]其无法被销毁，但可以销毁一般的哈儿。[br]如果将其与一个<a style=\"color: #FFAAAA;\" target=\"_blank\" href=\"index.html?haer=1\">提季提孩子</a>放在一个密闭房间内，10分钟后房间内会有大约2000个提季提孩子。[br]其能够破坏哈儿门，为防止其造成更大骚动，我们将其安置在哈儿实验室能源部以发挥其才能。[br]其目前为克里瓦斯特第一发电厂厂长、提季提格勒第二冶炼厂厂长、卡尔林纳卡第一发电厂厂长、萨卡维奇第三发电厂技术指导。[br]炼钢党相当一部分党员在哈儿国各地发电厂和冶炼厂工作，但它们时常在工作中突然集体平移。";
	haerona="L-9218-73Z";//真实姓名：刘泽宇
}
else if (idd == "19") {
    name="炼钢党";
	age=-1;
	des="哈儿实验室能源部的主力军";
	dgs=3;
	info="这是一个由<a style=\"color: #FFAAAA;\" target=\"_blank\" href=\"index.html?haer=18\">Song Liangsa</a>组建的试图独裁世界的党派。其大量走私军火、毒品和肾宝片。[br]其成员（除了Song Liangsa）均可以用没收其军火的方式销毁。[br]其成员可以破坏哈儿门，我们将其成员安置在哈儿实验室能源部。[br]哈儿国至少45座发电厂和28座冶炼厂由炼钢党运作。[br]炼钢党极其勤奋地发电和炼钢，但时常在发电时突然集体平移。";
	haerona="L-9218-73Z";//真实姓名：刘泽宇
}
else if (idd == "20") {
    name="Song Liangsa的老师";
	age=67;
	des="哈儿实验室能源部的主力军";
	dgs=2;
	info="这是炼钢党领导人<a style=\"color: #FFAAAA;\" target=\"_blank\" href=\"index.html?haer=18\">Song Liangsa</a>的老师，[br]教会了Song Liangsa如何炼钢。[br]但是它自己未炼成钢，而且将自己的身体特定部位磨平了，[br]于是Song Liangsa赠送给它许多自己炼的钢。[br]其协助Song Liangsa炼钢，有时对着Song Liangsa发射导弹以满足Song Liangsa炼钢的需求。";
	haerona="L-9218-73Z";//真实姓名：刘泽宇
}
else if (idd == "21") {
    name="吸毒者";
	age=13;
	des="炼钢党的受害者";
	dgs=3;
	info="这是一位<a style=\"color: #FFAAAA;\" target=\"_blank\" href=\"index.html?haer=19\">炼钢党</a>的受害者，因吸毒过多被L-9218-73Z鉴定为哈儿。[br]在ĈFLŜ私藏毒品，时常在非工作时间偷偷吸毒。[br]大喊大叫“我要炼钢”，对柜子和抽屉很感兴趣。"+flagoj;
	haerona="L-9218-73Z";//真实姓名：刘泽宇
}
else if (idd == "22") {
    name="腐蚀者";
	age=13;
	des="破坏力极强的哈儿";
	dgs=4;
	info="这是一个破坏力极强的哈儿，完全没有应激性。[br]我们教导它：见到刀向你刺来时应该躲闪，而不是用胸口迎上去。[br]但它可以腐蚀周边一切物体。[br]这使得它时常穿墙而过，似乎毫无阻力，而墙体直接坍塌。[br]其对建筑物的破坏力极强，因此目前它是唯一一个没有住处的哈儿。";
	haerona="V-7851-08Z";//真实姓名：贺骥繇
}
else if (idd == "23") {
    name="对岸对象";
	age=19;
	des="危险的可自行移动物";
	dgs=4;
	info="这是一种极度危险的哈儿。常出现于[Uns]河流域。[br]当可见范围内河道仅一侧有人时，该哈儿会出现在河道对面并随人移动（如果有一群人则会随着最后一个人移动）。[br]如果人过河，则该哈儿会突然出现在河的对岸。[br]如果河道可视范围内两侧均有人，则该哈儿会自行销毁并将河道两侧的人变为该哈儿的副本。[br]经过安全的检测，发现该哈儿可以随人极快速地平移，疑似<a style=\"color: #FFAAAA;\" target=\"_blank\" href=\"index.html?haer=19\">炼钢党</a>受害者。[br]其时常在跟随人移动时吸食炼钢党提供的毒品并高唱炼钢党内火爆的歌曲。";
	haerona="L-1917-11S";
}
else //注意第二年要更新哈儿的年龄！！！
{
    document.getElementById("title").innerHTML = "无档案 - 哈儿实验室危险哈儿数据库 HLUHD";
    document.getElementById("main").innerHTML = "<h1 style=\" color: #FFAAAA;\">没有关于这个哈儿的档案</h1>";
	document.getElementById("haernum").innerHTML=minhn+"~"+mhn;
}
for(var i=0;i<rg;++i)
{
	info=info.replace("[Uns]","<strong style=\"color: #FF0000;\">[禁止显示]</strong>");
	info=info.replace("[br]","\n<br>\n");
}
document.getElementById("title").innerHTML = name+" - 哈儿实验室危险哈儿数据库 HLUHD";
document.getElementById("t1").innerHTML =document.getElementById("t2").innerHTML =name;
document.getElementById("des").innerHTML =des;
document.getElementById("img").alt = document.getElementById("id1").innerHTML =idd;
document.getElementById("age").innerHTML =Number(age)+Number(1);
document.getElementById("info").innerHTML =info;
document.getElementById("img").src ="haer-img\\"+idd+".jpg";
document.getElementById("img").title=name+" - "+idd;
document.getElementById("dg").innerHTML=dg[dgs];
document.getElementById("dg").style="color: "+dgclr[dgs]+";";
document.getElementById("haerona").innerHTML=haerona;
document.getElementById("haernum").innerHTML=minhn+"~"+mhn;