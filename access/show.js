function getQ(hname){
    var reg = new RegExp("(^|&)" + hname + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if(r != null) return unescape(r[2]);
    return null;
}
var idd = getQ("haer");
document.getElementById("sid").value=idd;
const dg=["类人型哈儿","高智商哈儿","中智商哈儿","低智商哈儿","化学物质型哈儿","待销毁哈儿","已销毁哈儿","已出逃，无法鉴定"];
const dgclr=["#00FF00","#AA00FF","#FFFF00","#00FFFF","#CC0000","#D06A0D","#6B6895","#2A5750"];
const flagoj="\n<br>\n<strong style=\"color: #CC0000;\">下图是此哈儿的个人旗帜（由此哈儿亲自设计）：</strong>";
var hname,age,des,dgs,info,haerona;
var mhn=40,minhn=1,rg=64;
if(idd==0){
    hname="“萨尤兹”联盟";
	age=-1;
	des="ĈFLŜ最大的恐怖组织";
	dgs=0;
	info="“萨尤兹”联盟是由ŬĈŜ发起的一个恐怖组织，在ĈFLŜ中四处分布，与炼钢党勾结，试图发动反人类武装行动。[br]他们反对人类正常繁衍子孙的行为，试图从根本上清除人类，以达到他们扭曲内心里的可怕目标。[br]“萨尤兹”联盟的头目为“联盟总统”，其成员极度狂热，思想变态，无所不为。[br]他们发动政变，独裁了ĈFLŜ-2019-19，并打击异己者（他们最针对的两个人被他们称作“阶级敌人”）和批评者，对正常的人类活动产生极度鄙视。[br]当外人试图加入时，会遭到其成员恶劣而极端的人身攻击。尽管如此，仍有许多人效仿此组织以达到霸权目的。[br]哈儿实验室ĈFLŜ地下组织部派遣了3个<a href=\"index.html?haer=1\" style=\"color: #FFFF00;\" target=\"_blank\">提季提孩子</a>与其斗争。";
	haerona="L-1917-11S";
	
} else if(idd==-1){
    hname="夜车联盟";
	age=1;
	des="ĈFLŜ的恐怖组织之一";
	dgs=7;
	info="夜车联盟是由Y先生发起的恐怖组织。这个组织成员个数不明确。[br]其目的是在晚上从事危险工作，然后到其它ĈFLŜ分配室。[br]ĈFLŜ规定禁止上述行为，但该组织的成员完全违反这些行为。[br]这个组织中的每个人都有自己的呼叫标志。晚上，总司令Y先生安排时间让成员们在晚上从事危险工作，[br]并安排时间去其它ĈFLŜ分配室，未经ĈFLŜ许可。[br]其成员在分配室门口通常会发出奇怪的声音信号，使分配室内的生物整夜处于活动状态。[br]有些成员来到分配室门口传达命令，并唤醒其他成员执行任务。这是ĈFLŜ最可怕的恐怖组织之一。"
	haerona="V-1047-74A";
} else if(idd==1){
	hname="提季提孩子";
	age=13;
	des="最可怕的魔鬼之一";
	dgs=2;
	info="它是一个魔鬼，于2018年4月21日14:38:39变成哈儿。[br]它喜好撕咬任何生物身上凸起的部分，许多人都被咬掉必须的器官而死。[br]使其停止攻击的条件是其所攻击的对象已被咬成球形或其精力耗尽。[br]将其杀死后，其尸体会分裂出100余个副本并继续咬人，因此其目前无法被销毁。[br]截至2021年10月1日，共有约12万个提季提孩子活跃于哈儿实验室，至少有约8万个提季提孩子隐匿于世界各地。";
	haerona="K-2510-51Y";//江柯毅
} else if(idd==2){
    hname="哈儿之王";
	age=24;
	des="目前智商最低的哈儿";
	dgs=4;
	info="它是目前智商最低的哈儿，应当被销毁。但它由于功能过于简单，将其销毁后发现其依然屹立于原地，并分裂出2个新的个体。[br]当在哈儿实验室外发现它时严禁移动，否则会遭到其攻击，可能会丧失生命。";
	haerona="G-6054-18K";
} else if(idd==3){
    hname="空洞孩子";
	age=14;
	des="能够保护被提季提孩子攻击的不幸者";
	dgs=2;
	info="当一个人被提季提孩子攻击后，它可以帮助此人。但由于它的能力有限，在一个星期内只能帮助一个受伤较轻的人。[br]用它头上的空洞分泌的液体，与其另一种体液混合，并涂于伤员的伤口。伤员会很快痊愈，并恢复正常生活。[br]它无法分裂出新的个体，但也无法被人为消灭。";
	haerona="K-2510-51Y";//江柯毅
} else if(idd==4){
    hname="肾先生";
	age=31;
	des="一个感情破裂的哈儿";
	dgs=3;
	info="它在感情破裂后于街上散步，偶然走进哈儿门。T-5991-54K同志把它的肾小球和静脉连接在一起，成为一个独立的血液循环系统，这导致了他的肾坏死。因为它进入哈儿门前遭受了最残酷的感情破裂，所以他常常毁掉大多数他认为是情侣的人的肾脏，被鉴定为危险哈儿。";
	haerona="T-5991-54K";//韩宇乐
} else if(idd==5){
    hname="CXK病毒";
	age=0;
	des="存在于计算机中的哈儿";
	dgs=6;
	info="2020年7月22日上午ĈFLŜ的一次技术测试中，有人在其电脑内发现“点我解压CXK打篮球视频”的一个应用程序，[br]打开后电脑损坏，文件全部丢失。[br]受害者之一的<strong>B-7418-65V</strong>同志认为自己遭到了报复，[br]因为前一天晚上他画了“坤头套儿”以讽刺中国的一个流量明星CXK。";//B-7418-65V→刘昊维
	haerona="OpenG-qkmb";
} else if(idd==6){
    hname="橄榄先生";
	age=13;
	des="研究其它哈儿的哈儿";
	dgs=0;
	info="在一次失败的实验中，橄榄先生发生了意外，但幸存了下来。他具有奉献精神，帮助我们研究其它哈儿，数次身负重伤。[br]其于2021年9月1日获得哈儿国建设模范勋章。[br]其哈儿实验室编制号码为：<strong>L-9218-73Z</strong>。";
	haerona="L-9218-73Z";//刘泽宇
} else if(idd==7){
    hname="小哈儿";
	age=12;
	des="提季提孩子的附属哈儿";
	dgs=3;
	info="它是在<a href=\"index.html?haer=1\" target=\"_blank\" style=\"color: #FFAAAA;\">提季提孩子</a>的房间担任提季提孩子情绪欲望发泄器多年的哈儿，身受重伤但喜好被提季提孩子撕咬，减少了很多次提季提孩子攻击人的事件。[br]其死亡后会分裂至少100个副本并继续等待提季提孩子的撕咬。[br]一般小哈儿的尸体会被提季提孩子咬成球形。";
	haerona="S-2231-63D";
} else if(idd==8){
    hname="炸（zhá）药";
	age=0;
	des="以油炸方式制成的药品";
	dgs=4;
	info="这是以油炸方式制成的药品，在一次哈儿实验室举办的跳水比赛中，[br]一名参赛的哈儿服用过多，入水时炸（zhá）毁游泳场，因此而发现。[br]极度危险，且难以被销毁。";
	haerona="O-4819-94S";//赵培辰
} else if(idd==9){
    hname="已体检对象";
	age=14;
	des="体检合格后狂喜的哈儿";
	dgs=5;
	info="这个哈儿体检合格后进入哈儿门，随后拿着显示体检合格体检单四处弹跳，[br]导致哈儿们<span style=\"color: #FFAAAA;\">集体跳动了一个下午</span>，最后被麻醉枪全部制服。[br]它被归为危险哈儿的原因：喜欢在哈儿门处反复进出，动作娴熟，每天能进出<span style=\"color: #FFFFAA;\">2000次以上</span>。[br]这导致它应当被销毁，但现在它已经对所有麻醉剂产生了抵抗力，且目前未找到将其销毁的办法。";
	haerona="A-8139-21B";
}
else if(idd==10){
    hname="电话者";
	age=9;
	des="电话不停的哈儿";
	dgs=1;
	info="这个哈儿变哈的时候只有7岁，出于好奇进入。[br]当时它刚刚接触电话，对电话机很感兴趣，[br]于是它在这几年的时间里每天向外拨出至少300个电话，导致我们话费严重欠费，[br]我们便把电话机拿走了，结果它联合<a href=\"index.html?haer=1\" target=\"_blank\" style=\"color: #FFAAAA;\">提季提孩子</a>咬人，[br]最终我们将电话交还给它，但是是<span style=\"color: #AAFFFF;\">内部电话，由计算机负责接电话，并播放不堪入耳的话语</span>。[br]这导致目前它有<span style=\"color: #FF0000;\">严重的暴力倾向</span>，已造成3人轻伤。";
	haerona="F-9182-00L";//程子寒
}
else if(idd==11){
    hname="考生";
	age=13;
	des="考试中的危险存在";
	dgs=2;
	info="它参加了一场考试，<span style=\"color: #FFFFAA;\">在考试中被发现是哈儿（疑似进入考场前上楼梯时滑倒摔坏了脑子）</span>。[br]它试图携带一台电子显微镜进入考场，击倒前来阻止的监考老师并强行开始做题，[br]做题期间为证明线段AB=AC+OD，[br]于是<span style=\"color: #FFAAAA;\">精准作图</span>，<span style=\"color: #FFAAAA;\">并在电子显微镜的帮助下数出AB、AC、OD有多少个分子</span>，[br]被强制移除考场后补考，仍然不断地使用电子显微镜。[br]由它的变哈，我们开发了高台坠落法以将正常人变为哈儿。";
	haerona="O-4819-94S";//赵培辰
}
else if(idd==12){
    hname="器官收集者";
	age=14;
	des="仅次于提季提孩子的恶魔";
	dgs=5;
	info="这是一个可怕的哈儿，有收集人体器官的癖好。[br]常在公寓、居民小区出没。[br]被收集器官的人都<span style=\"color:  #FFAAAA;\"><strong>当场死亡</strong></span>。\n<br>过于危险，其相关信息不会发布。";
	haerona="B-7418-65V";//刘昊维
}
else if(idd==13){
    hname="-000";
	age=2;
	des="反复自尽的哈儿";
	dgs=5;
	info="这个哈儿令人费解。[br]关押它的地方有一堵墙，在特定时间会因为错误而消失。[br]此时，-000常常从墙洞内逃逸，同时它的一个副本在远处自杀。[br]它移动以观察自己副本的尸体，看见了自己副本的尸体后，将突然自杀。[br]在自杀的十余秒前，墙的破洞内重新走出一个新的-000副本，已被恢复成上一个副本刚走出墙外的状态，[br]新的-000副本看见了上一个副本自杀后，[br]将如此循环，直到墙再次恢复。[br]无法被销毁，且试图销毁它时操作者会随机消失，且无法被找到。更多信息不会发布。";
	haerona="K-2510-51Y";//江柯毅
}
else if(idd==14){
    hname="炸（zhá）药人";
	age=20;
	des="出生为炸（zhá）药的哈儿";
	dgs=4;
	info="它以炸（zhá）药为唯一活动能源，其副本被产生时会将自己炸（zhá）至死亡，并产生新的副本，[br]极其危险，靠近时可能丧失生命。";
	haerona="O-4819-94S";//赵培辰
}
else if(idd==15){
    hname="自行分解者";
	age=2;
	des="无法识别的对象";
	dgs=5;
	info="它的一些功能与<a style=\"color: #FFAAAA;\" target=\"_blank\" href=\"index.html?haer=13\">-000</a>相仿。[br]它移动时，会将自己分解，并在另外位置重新复制一个自己的副本。[br]时常附带分解其附近的生物，被分解的生物无法再找到，可以定为已被杀死。[br]目前它已经将3名研究员分解，且无法被销毁，更多信息不会发布。";
	haerona="K-2510-51Y";//江柯毅
}
else if(idd==16){
    hname="地理老师";
	age=29;
	des="飘（piàp）行者";
	dgs=0;
	info="这是一位地理老师，在失踪十余天后突然再次出现在学校。[br]自此以后，其每次上地理课，她都会带着学生和教室飘（piàp）走，下课又飘（piàp）回来。[br]它禁止学生上课时呼吸，理由是空气稀薄。[br]试图离开教室的学生会失去呼吸系统的所有器官，胸腹俱破，尸体将从空中坠落。[br]其认为飘（piàp）走是为了让学生亲眼观察地形地貌，但是跟随它的学生在下课后都被发现已经死亡。[br]其经常带着教学楼飘（piàp）走，只带着自己学生的尸体回来，[br]其它的学生和剩余部分的教学楼，被永远留在了未知位置的空中。[br]试图销毁它的人会在销毁的过程中突然死亡，其无法被销毁。";
	haerona="O-4819-94S";//赵培辰
}
else if(idd==17){
    hname="已扭曲矩形对象";
	age=13;
	des="目击者均被吓到猝死";
	dgs=5;
	info="这是一个学生。它面目扭曲，使得看到它脸的人都永远失去了理智，变得精神失常，生活不能自理，最终猝死。[br]它成为目击者终生的阴影，即使有幸恢复正常的精神状态，回想时也会再次被吓得疯狂以至于猝死。[br]它双眼扭曲，鼻子弯曲，“酷似练了邪教”——这是一位目击者猝死前所描述的。[br]它喜欢邪教，常常从楼上跳下去测试自己能否飞行，[br]最终飞了数秒，挂在树上，使得大量路人死亡。[br]其应当被销毁，但由于其生命力顽强，目前仍未有效的销毁方案。[br]自从对其的6次销毁失败以后，其见到哈儿实验室工作人员就立刻说不堪入耳的粗话，[br]目前已被强制隔离。"+flagoj;
	haerona="V-7851-08Z";//贺骥繇
}
else if(idd==18){
    hname="Song Liangsa（中文名无法识别）";
	age=13;
	des="炼钢党领导人";
	dgs=1;
	info="这是一个学生。它曾经使用烟花爆竹和手枪攻击自己的身体特定部位以炼钢。[br]其炼钢所需的物品有：军火、毒品和肾宝片。[br]其炼成钢后组建炼钢党，试图独裁世界。[br]其能够发电（特别是在使用了特定类型的蘑菇后），其发电速度能够替代2~3座核电厂，但发电时时常平移。[br]其无法被销毁，但可以销毁一般的哈儿。[br]如果将其与一个<a style=\"color: #FFAAAA;\" target=\"_blank\" href=\"index.html?haer=1\">提季提孩子</a>放在一个密闭房间内，10分钟后房间内会有大约2000个提季提孩子。[br]其能够破坏哈儿门，为防止其造成更大骚动，我们将其安置在哈儿实验室能源部以发挥其才能。[br]其目前为克里瓦斯特第一发电厂厂长、提季提格勒第二冶炼厂厂长、卡尔林纳卡第一发电厂厂长、萨卡维奇第三发电厂技术指导。[br]炼钢党相当一部分党员在哈儿国各地发电厂和冶炼厂工作，但它们时常在工作中突然集体平移。";
	haerona="L-9218-73Z";//刘泽宇
}
else if(idd==19){
    hname="炼钢党";
	age=-1;
	des="哈儿实验室能源部的主力军";
	dgs=3;
	info="这是一个由<a style=\"color: #FFAAAA;\" target=\"_blank\" href=\"index.html?haer=18\">Song Liangsa</a>组建的试图独裁世界的党派。其大量走私军火、毒品和肾宝片。[br]其成员（除了Song Liangsa）均可以用没收其军火的方式销毁。[br]其成员可以破坏哈儿门，我们将其成员安置在哈儿实验室能源部。[br]哈儿国至少45座发电厂和28座冶炼厂由炼钢党运作。[br]炼钢党极其勤奋地发电和炼钢，但时常在发电时突然集体平移。[br]其党员吵架的流程为：拿出面包，砸在地上（如果吵架极其激烈可能会踩一脚），[br]然后拿起来吃，边吃边骂，吃完即骂完，如果对方仍在骂，则此党员须再拿出面包，重复上述流程后继续吵架。[br]直到没有面包，就砸包里的其他东西，直到没有东西为止，随后将包剪下继续争吵。[br]最终如果吵架持续时间过长，则双方将一丝不挂，而地上全是二人的衣服和物品，均被砸在地上（可能还被踩了一脚）。[br]由于其炼钢语过于复杂，二人吵架时时常听不清对方，自己也时常说不清楚，因此一般吵架不会持续太久。";
	haerona="L-9218-73Z";//刘泽宇
}
else if(idd==20){
    hname="Song Liangsa的老师";
	age=67;
	des="炼钢党的始祖";
	dgs=2;
	info="这是炼钢党领导人<a style=\"color: #FFAAAA;\" target=\"_blank\" href=\"index.html?haer=18\">Song Liangsa</a>的老师，[br]教会了Song Liangsa如何炼钢。[br]但是它自己未炼成钢，而且将自己的身体特定部位磨平了，[br]于是Song Liangsa赠送给它许多自己炼的钢。[br]其协助Song Liangsa炼钢，有时对着Song Liangsa发射导弹以满足Song Liangsa炼钢的需求。";
	haerona="L-9218-73Z";//刘泽宇
}
else if(idd==21){
    hname="吸毒者";
	age=13;
	des="炼钢党的受害者";
	dgs=5;
	info="这是一位<a style=\"color: #FFAAAA;\" target=\"_blank\" href=\"index.html?haer=19\">炼钢党</a>的受害者，因吸毒过多被<strong>L-9218-73Z</strong>同志鉴定为哈儿。[br]在ĈFLŜ私藏毒品，时常在非工作时间偷偷吸毒。[br]大喊大叫“我要炼钢”，对柜子和抽屉很感兴趣。[br]其尤其喜欢被销毁，但其无法被销毁。"+flagoj;
	haerona="L-9218-73Z";//刘泽宇
}
else if(idd==22){
    hname="腐蚀者";
	age=13;
	des="破坏力极强的哈儿";
	dgs=5;
	info="这是一个破坏力极强的哈儿，完全没有应激性。[br]我们教导它：见到刀向你刺来时应该躲闪，而不是用胸口迎上去。[br]但它可以腐蚀周边一切物体。[br]这使得它时常穿墙而过，似乎毫无阻力，而墙体直接坍塌。[br]其对建筑物的破坏力极强，因此目前它是唯一一个没有住处的哈儿。";
	haerona="V-7851-08Z";//贺骥繇
}
else if(idd==23){
    hname="对岸对象";
	age=19;
	des="危险的可自行移动物";
	dgs=4;
	info="这是一种极度危险的哈儿。常出现于[Uns]河流域。[br]当可见范围内河道仅一侧有人时，该哈儿会出现在河道对面并随人移动（如果有一群人则会随着最后一个人移动）。[br]如果人过河，则该哈儿会突然出现在河的对岸。[br]如果河道可视范围内两侧均有人，则该哈儿会自行销毁并将河道两侧的人变为该哈儿的副本。[br]经过安全的检测，发现该哈儿可以随人极快速地平移，疑似<a style=\"color: #FFAAAA;\" target=\"_blank\" href=\"index.html?haer=19\">炼钢党</a>受害者。[br]其时常在跟随人移动时吸食炼钢党提供的毒品并高唱炼钢党内火爆的歌曲。";
	haerona="L-1917-11S";
}
else if(idd==24){
    hname="Ling Ji（中文名无法识别）";
	age=13;
	des="Song Liangsa最亲密的朋友";
	dgs=2;
	info="该哈儿的属性均来自目击者描述。其疑似为<a style=\"color: #AAFFAA;\" target=\"_blank\" href=\"index.html?haer=18\">Song Liangsa</a>的朋友兼同事，[br]时常共同发表演讲。Song Liangsa与其常常共同炼钢，并共同领导<a style=\"color: #FFAAAA;\" target=\"_blank\" href=\"index.html?haer=19\">炼钢党</a>。[br]由于未获取到该哈儿的实体（被存放于Song Liangsa的家中），因此其大部分性质未知。";
	haerona="L-9218-73Z";//刘泽宇
}
else if(idd==25){
    hname="舞者集团";
	age=-1;
	des="可怕的未知歌舞团";
	dgs=0;
	info="这是一个未知的歌舞团，没有任何乐器。[br]其在ĈFLŜ中四处散布（尤其是ĈFLŜ-2019-17和ĈFLŜ-2019-18），对特定目标进行表演。[br]哈儿实验室的一位常驻ĈFLŜ的哈儿实验室赫尔自治州分部危险哈儿管制及实验区的同志[br]（哈儿实验室内部编制号码：<strong>E-5407-61B</strong>）反复遭遇此歌舞团的演出，[br]因此被任命为此哈儿团的负责人。[br]据<strong>E-5407-61B</strong>的描述，当此哈儿团发现其行踪后，[br]尾随并集体高唱“博博, 博博, I love you! 博博, 博博, I fxxk you!”。[br]目前，<strong>E-5407-61B</strong>同志已经第41次上报要求增派人员以进行研究，但此要求未得到批准。";
	haerona="E-5407-61B";
}
else if(idd==26){
    hname="吸烟者";
	age=58;
	des="意志力惊人";
	dgs=0;
	info="这是一个<a style=\"color: #FFFFAA;\" target=\"_blank\" href=\"index.html?haer=19\">炼钢党</a>的高级领导人，与<a style=\"color: #AAFFAA;\" target=\"_blank\" href=\"index.html?haer=18\">Song Liangsa</a>交情颇深。[br]时常将自己身体的一部分取下来，点燃并猛吸一口。[br]时常不顾自己的身体健康，疯狂吸烟，身体衰弱，但意志力顽强，甘于忍受被燃烧的痛苦。";
	haerona="L-9218-73Z";//刘泽宇
}
else if(idd==27){
    hname="革新派狭义牛马型反联通状方脑类伪弘毅主义哲学家";
	age=13;
	des="无礼而自负的疯子";
	dgs=5;
	info="这是一个令人无法忍受的哈儿，来自<a style=\"color: #AAAAFF;\" target=\"_blank\" href=\"index.html?haer=17\">已扭曲矩形对象</a>被销毁失败后产生的可以直视的副本，应当被销毁但生命力顽强，[br]我们切下了它的部分重要器官，但它第二天就自愈了，并且愈发地对哈儿实验室工作人员进行粗话侮辱。[br]虽然被<a href=\"index.html?haer=1\" target=\"_blank\" style=\"color: #FFAAAA;\">提季提孩子</a>撕咬了多于908次，但依然自愈，[br]素有“欠揍型不可繁殖或死亡的新型<a href=\"index.html?haer=7\" target=\"_blank\" style=\"color: #AAFFAA;\">小哈儿</a>”的美誉。[br]然而极其傲慢，粗鲁对待其它哈儿，并对哈儿实验室工作人员进行言语上的侮辱。[br]由于其过于令人无法忍受，且其无研究价值，又无法被销毁，经过相关同志的研究，[br]自2020年起<strong>其体重每年均会被计入《哈儿实验室年度环保报告》中全年垃圾总质量（单位为：吨/t）的数值</strong>。";
	haerona="G-6054-18K";
}
else if(idd==28){
    hname="卫生间杀手";
	age=13;
	des="使得其周围卫生间充满尸体";
	dgs=0;
	info="这是一个可怕的哈儿，游走于ĈFLŜ的卫生间，[br]对正在使用男厕小便池的人的身体特定部位实施攻击。[br]这使得正在如厕的人当场猝死。[br]极其危险，已经使得至少6个厕所被永久废弃。[br]其实施上述行为可能是其进入哈儿门前在寻找厕所导致的。";
	haerona="L-9218-73Z";//刘泽宇
}
else if(idd==29){
    hname="弹琴者";
	age=22;
	des="力大无穷的哈儿";
	dgs=3;
	info="这是一个<a style=\"color: #AAFFAA;\" target=\"_blank\" href=\"index.html?haer=19\">炼钢党</a>的受害者，喜欢抱着任何其可以拿到的物品弹琴。[br]无论其抱着的东西是什么，都可以发出在炼钢党员听起来很“优雅”的音乐。[br]其兴奋时可以将大树连根拔起以开始弹奏，甚至可以将整个建筑物抬起，[br]其是目前少数几个能够举起<a style=\"color: #FFAAAA;\" target=\"_blank\" href=\"index.html?haer=18\">Song Liangsa</a>炼的钢的哈儿。";
	haerona="L-9218-73Z";//刘泽宇
}
else if(idd==30){
    hname="排球对象";
	age=13;
	des="举着排球的哈儿贩子";
	dgs=0;
	info="这是一个喜好排球的哈儿，时常命令他人参加其所谓的“排球比赛”，[br]拒绝者将被其拖走，目前无反抗成功者，因其力气极大。[br]其于2021年10月13日试图拐卖3个持枪的<a style=\"color: #FFAAAA;\" target=\"_blank\" href=\"index.html?haer=1\">提季提孩子</a>，这使得其失踪，3日后被发现于60公里外，身受重伤，严重失血[br]部分身体器官丢失，并被提季提孩子没收了排球。[br]其生命力顽强，因此很快恢复。[br]但其总是能通过不明手段获取排球并继续拐卖哈儿实验室工作人员和哈儿。[br]被其拐卖者均精神失常，恢复后完全无法回想被拐卖期间的遭遇。[br]此哈儿极度危险，已被强制与<strong style=\"color: #CC0000;\">10个曾持枪对人射击使93人丢失身体重要器官的提季提孩子</strong>共同关押。";
	haerona="E-5407-61B";
}
else if(idd==31){
    hname="车内异常行为对象";
	age=13;
	des="ĈFLŜ最激情的哈儿";
	dgs=0;
	info="这是一个喜好激情的哈儿，常在ĈFLŜ例行运作时于ĈFLŜ-2019-17室内实施危险行为。[br]它时常是自己的特定身体器官凸起，并顶起它的服饰，以此为乐。[br]它用尽全力使身体特定器官更加坚硬，并时常用手配合上述行为。[br]我们告诫它：“不要这样，否则你会永久失去使用此器官的权利。”但它充耳不闻。[br]目前已经从<a style=\"color: #AAFFAA;\" target=\"_blank\" href=\"index.html?haer=19\">炼钢党</a>偷盗了60余个振动器以满足自己的奇特癖好。[br]由于其被发现时在一辆破旧的轿车内行使上述行为，由此得名。";
	haerona="L-9218-73Z";//刘泽宇
}
else if(idd==32){
    hname="关门者";
	age=13;
	des="炼钢党人最痛恨的哈儿之一";
	dgs=3;
	info="这是一个极度自私的哈儿，霸占了<a style=\"color: #FFAAFF;\" target=\"_blank\" href=\"index.html?haer=19\">炼钢党</a>专用炼钢室并独自享受这一整间炼钢室。[br]一旦其离开炼钢室，就立即将其锁上，不许他人入内。[br]但其智商过低，因此总是忘记把后门从里面锁上，[br]这使得炼钢党人尚存一些使用此室炼钢的机会。[br]炼钢党人与其斗争至今。";
	haerona="D-2530-60U";//张睿鑫
}
else if(idd==33){
    hname="雄性圆周运动物体";
	age=13;
	des="少数能确定性别的哈儿";
	dgs=1;
	info="这是一个能够流利使用炼钢语的哈儿，经常使用这门语言流利地辱骂他人。[br]喜好在狂风暴雨中骑着一匹几近残废的马[lstr]（此哈儿每日切割其特定部位所致）[rstr]并对路过的人射箭，[br]通常射不准。目前我们未侦测到它射中过非气态物质。[br]它自称自己是上帝，傲慢自负。[br]每当有人说它是哈儿，它就会反驳此人才是哈儿，并说这是“相对论”的结论。[br]其钢材产量极高，已被<a style=\"color: #FFAAAA;\" target=\"_blank\" href=\"index.html?haer=18\">Song Liangsa</a>亲自授予了“炼钢机器”的光荣称号。";
	haerona="L-9218-73Z";//刘泽宇
}
else if(idd==34){
    hname="春季积雨云对象";
	age=44;
	des="无时无刻不越权的哈儿";
	dgs=5;
	info="这是一个喜欢越权管理他人的哈儿。[br]它喜好站在树冠上朗诵哈儿传统文学作品（例如：《效前锇檄驮》、<a style=\"color: #FFAAAA;\" target=\"_blank\" href=\"https://hssrgov.github.io/2021/10/24/%E7%B4%A7%E6%80%A5%E9%80%9A%E7%9F%A5-%E7%82%BC%E9%92%A2%E5%85%9A%E7%82%B8%E5%B9%B3%E5%B1%B1%E5%A4%B4/\">《南阉耸山遇酸雨有感》</a>等）。[br]它强占了ĈFLŜ-2019-19并禁止ĈFLŜ-2019-17和ĈFLŜ-2019-18的人员靠近，否则会遭到其攻击。[br]ĈFLŜ的人员都很愤怒，但无法与它抗衡。[br]过于危险，但目前无法被销毁，正在研究销毁它的方法。";
	haerona="V-7851-08Z";//贺骥繇
}
else if(idd==35){
    hname="本源党";
	age=0;
	des="最可笑的特立独行的哈儿团";
	dgs=5;
	info="这是一个喜欢马桶刷子的哈儿团，由40余个难以被销毁的危险哈儿组成。[br]本源党中央委员会主席是一个[lstr]马桶刷子[rstr]，也是每个本源党员为之狂热的信仰。[br]据一位不愿公开身份的反本源党联合战线中央执行委员会候补委员透露，[br]本源党中央委员会第一副主席是一个名为“Yang Jinning”的危险哈儿，[br]它是本源党的实际掌权者，独裁着每个本源党员的思想、价值观和行为。[br]本源党对异己者实施残酷的打压，对其施加酷刑并实施精神折磨，称为“本源惩戒”。[br]其荒谬的宗旨是所谓[lstr]“从小流，不从大流”[rstr]，自以为“不与世俗同流合污”，[br]然而这事实上是在否认“群众的眼睛是雪亮的”，是共产主义的背叛者，是最无耻的[lstr]残存法西斯主义阴谋集团[rstr]，[br]是洗脑人民群众的新型邪教，是戕害青年心灵的肮脏魔鬼，是[lstr]试图重新压到无产者头上的罪恶的法西斯主义毒瘤[rstr]。[br]此党为了对世界现行民主制度进行螳臂当车般的“摧毁”，竟悍然对<a style=\"color: #FFAAAA;\" target=\"_blank\" href=\"index.html?haer=19\">炼钢党</a>发动进攻，做着“一举消灭炼钢党”的白日美梦，[br]沉浸在自己的幻想中无法自拔，认为自己拥有40余个危险哈儿就能征服世界，傲慢而自负，[br]自以为“清高”，实是[lstr]特立独行的蠢货[rstr]。哈儿实验室于2021年10月决定，对本源党实施持久战式销毁，[br]且自2020年起至其被完全剿灭前[lstr]其总体重每年均会被计入《哈儿实验室年度环保报告》中全年垃圾总质量（单位为：吨/t）的数值[rstr]。";
	haerona="OpenG-qkmb";
}
else if(idd==36){
    hname="孙子";
	age=42;
	des="大喊大叫的暴力危险哈儿";
	dgs=3;
	info="这是一个喜欢大喊大叫的哈儿，在ĈFLŜ于2021年10月27日下午的一次例行测试中在窗外大喊大叫而被鉴定为哈儿。[br]它具有[lstrw]严重的暴力倾向[rstr]，一言不合即对他人踢打，通常致残或致死。[br]时常“嘹骂咆抓，空谷传响，墙倾楫摧，虎啸猿啼，哀转久绝”（一位对哈儿实验室友好的人士的描述），使得ĈFLŜ当日的测试完全失败。[br]其过于危险，已被紧急隔离以防止更多故意伤害致残致死的事故。";
	haerona="L-9218-73Z";//刘泽宇
}
else if(idd==37){
    hname="空中悬浮对象";
	age=13;
	des="试图违背物理定律的哈儿";
	dgs=5;
	info="这是一个喜欢悬浮在低空的哈儿，是<a style=\"color: #AAFFFF;\" target=\"_blank\" href=\"https://hssrgov.github.io/2021/10/24/%E7%B4%A7%E6%80%A5%E9%80%9A%E7%9F%A5-%E7%82%BC%E9%92%A2%E5%85%9A%E7%82%B8%E5%B9%B3%E5%B1%B1%E5%A4%B4/\">2021年10月24日阉耸山战役</a>中战败的<a style=\"color: #AAFFAA;\" target=\"_blank\" href=\"index.html?haer=17\">已扭曲矩形对象</a>受伤后分裂出的副本。[br]与已扭曲矩形对象和<a style=\"color: #FFAAFF;\" target=\"_blank\" href=\"index.html?haer=27\">革新派狭义牛马型反联通状方脑类伪弘毅主义哲学家</a>一样无法被销毁且令人不适。[br]喜好悬浮在空中，如果有人试图将其降至地面则会与其一起悬浮在空中。[br]由于其时常站在200米以上的空中，目前我们无法得知其大多数性状。[br]其少数时候能站在3000米以上的空中。";
	haerona="E-5407-61B";
}
else if(idd==38){
    hname="守门员";
	age=26;
	des="负责开关门的哈儿";
	dgs=4;
	info="这是一个功能单一的哈儿，仅有开关门的功能，被授予“守门员”的美称。[br]其时常站在门边，当检测到附近有人时会自动开门，否则会自动关门。[br]其HIRG值过低，目前其与最粗劣的机器没有过多区别。[br]当其开门时，其会高呼：“我爱QJ！”这是它唯一会说的话。";
	haerona="K-2510-51Y";//江柯毅
}
else if(idd==39){
    hname="门神";
	age=13;
	des="负责问好的哈儿团";
	dgs=0;
	info="这是一个机械性的的哈儿团，共2个哈儿，常给经过楼梯口的人说“晚上好”，被授予“门神”的美称。[br]此二哈儿时常分站在楼梯口两侧，当检测到附近有人时会自动说“晚上好”。[br]其中一个哈儿认为自己的行为很光荣，并傲慢自负地认为自己无法被超越，并恶劣地辱骂批评者。[br]这个哈儿又被授予“自恋门神”称号。[br]此哈儿团同时又是危险哈儿团<a style=\"color: #FFAAAA;\" target=\"_blank\" href=\"index.html?haer=0\">“萨尤兹”联盟</a>的一部分。";
	haerona="E-5407-61B";
}
else if(idd==40){
    hname="器官凸起对象";
	age=13;
	des="平躺并凸起的哈儿";
	dgs=4;
	info="这是一个喜好平躺在多张连续排列的桌子上的哈儿，并常常在平躺时将身体特定部位凸起。[br]其与2021年6月被发现平躺在ĈFLŜ-2019-1819B中，身上摆满椅子，特定部位凸起，[br]我们无法理解它是如何做到上述动作的，但上述动作[lstrw]极其危险，严禁模仿[rstr]。[br]其行动缓慢而诡异，时常令路人惊恐而无所适从，已被特殊隔离。";
	haerona="L-9218-73Z";//刘泽宇
}
else
{
    document.getElementById("title").innerHTML = "无档案 - 哈儿实验室危险哈儿数据库 HLUHD";
    document.getElementById("main").innerHTML = "<h1 style=\" color: #FFAAAA;\">没有关于这个哈儿的档案</h1>";
	document.getElementById("haernum").innerHTML=minhn+"~"+mhn;
}
for(var i=0;i<rg;++i){
	info=info.replace("[Uns]","<strong style=\"color: #FF0000;\">[禁止显示]</strong>");
	info=info.replace("[br]","\n<br>\n");
	info=info.replace("[lstr]","<strong style=\"color: #FF0000;\">");
	info=info.replace("[lstrw]","<strong>");
	info=info.replace("[rstr]","</strong>");
}
document.getElementById("title").innerHTML = hname+" - 哈儿实验室危险哈儿数据库 HLUHD";
document.getElementById("t1").innerHTML =document.getElementById("t2").innerHTML =hname;
document.getElementById("des").innerHTML =des;
document.getElementById("img").alt = document.getElementById("id1").innerHTML =idd;
document.getElementById("age").innerHTML =Number(age)+Number(1);//注意每年末要更新哈儿的年龄！！！
document.getElementById("info").innerHTML =info;
document.getElementById("img").src ="haer-img\\"+idd+".jpg";
document.getElementById("img").title=hname+" - "+idd;
document.getElementById("dg").innerHTML=dg[dgs];
document.getElementById("dg").style="color: "+dgclr[dgs]+";";
document.getElementById("haerona").innerHTML=haerona;
document.getElementById("haernum").innerHTML=minhn+"~"+mhn;