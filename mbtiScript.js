var num = 1;
var q = {
    1: {"title": "하루를 시작하려는 당신에게 예상치 못한 갑작스러운 일정이 생겼습니다. 이 때 당신의 마음은?", "type": "IE", "A": "계획에 없던 일이 생겨서 짜증이 난다.", "B": "인생에 이런 색다른 일도 생겨야 재밌지."},    
    2: {"title": "해결해야 할 업무가 생겼습니다. 어떤 업무 방식을 선호하시나요?", "type": "IE", "A": "혼자서 도맡아서 마음껏 일한다.", "B": "팀으로 역할을 나누어 일한다."},
    3: {"title": "많은 사람들이 모인 자리에서 하고 싶은 말이 생겼습니다.", "type": "IE", "A": "말을 할지 말지 한 번 더 생각 한다.", "B": "하고 싶은 말은 바로 해야 한다."},
    4: {"title": "전에 한 번 방문한 가게를 찾아가야 합니다. 어떻게 찾아 가실건가요?", "type": "SN", "A": "한번 가본 길로 곧잘 찾아간다.", "B": "지도 어플을 켜고 더 빠른 길을 찾는다."},
    5: {"title": "새로운 도전을 시작할 때 당신은 어떤 기준으로 판단하나요?", "type": "SN", "A": "과거의 경험으로 판단한다.", "B": "미래의 가능성으로 판단한다."},
    6: {"title": "영화를 보고 나와서 친구와 후기를 공유할 때 어떻게 설명 하실건가요?", "type": "SN", "A": "영화의 장면과 구조를 설명한다.", "B": "영화의 전반적인 느낌을 설명한다."},
    7: {"title": "아주 슬픈 영화를 봤을 때 어떤 반응을 보이실 건가요?", "type": "TF", "A": "주인공이 난관을 어떻게 해결했다면 좋을지 생각한다.", "B": "주인공의 감정에 이입하여 울거나 마음 아파한다."},
    8: {"title": "꼭 갖고 싶은 물건이 생겼는데 친한 친구와 누가 가질지 정해야 합니다.", "type": "TF", "A": "공정하게 경쟁해서 승부를 낸다.", "B": "친구에게 흔쾌히 물건을 양보한다."},
    9: {"title": "누군가 당신을 칭찬할 때 어떤 말을 듣는 게 더 좋을까요?", "type": "TF", "A": "넌 능력 있는 사람이야.", "B": "넌 따뜻한 사람이야."},
    10: {"title": "당신은 지금보다 더 행복해지고 싶으신가요?", "type": "Happy", "A": "그렇다. 정말 행복하고 싶다.", "B": "정말 그렇다. 행복해지고 싶다."},
}
var result = {
    "ISF": {
        "typeName": "안정책임형",
        "explain": "안정책임형인 당신은 맡은 일에 책임감 있게 헌신하고 안정적으로 일을 추진하는 사람입니다. 남들 앞에 앞장서서 뭔가를 주도하기보다 주어진 상황에 따라 묵묵히 자신의 역할을 충실하게 수행하는 성격입니다. 목표에 집착하며 힘들어하지 않고 현재에 최선을 다하고 현실을 즐깁니다.",
        "subTitle": "공약 이행률 최고! 약속을 지키는 이재명!",
        "jmimage": "img/jm.jpg",
        "subExplain": "때로 개혁은 맡은 일을 최선을 다해 수행하는 것에서 시작합니다. 모두가 자신의 역할을 최대한 성실하게 한다면 대한민국은 분명 더 새롭고 더 나은 곳이 될 것입니다.</br> '2021 전국 시·도지사, 교육감 공약이행 및 정보공개 평가'에 따르면 이재명은 경기도지사로 무려 81.3%가 넘는 공약 이행률을 보이고 있습니다. 전국 시·도지사 평균인 61.96%보다 20%가량 높은 수치입니다. 약속한 것을 묵묵히 지키고 자신의 역할을 최선을 다해 수행한 공약 이행률 최고! 약속을 지키는 이재명을 소개합니다!",
        "source": "출처 : http://www.inews24.com/view/1369908(참고)"
    },
    "IST": {
        "typeName": "논리철저형",
        "explain": "논리철저형인 당신은 조용하고 과묵하며 세상의 모든 일들을 관찰하고 분석합니다. 조곤조곤 이유를 대며 잘못된 것들을 찾아내고 논리적인 원칙에 따라 그것들을 해결하고자 합니다. 우리 사회가 어떤 원리로 돌아가는지 관심이 많은 당신은 더 나은 사회 시스템을 통해 세상을 개혁하려 합니다.",
        "subTitle": "성남시의 부채를 해결한 철저한 이재명!",
        "jmimage": "img/jm2.jpg",
        "subExplain": "어떤 문제를 해결하기 위해서는 시스템에 대한 깊은 고민이 필요합니다. 이재명이 성남시장으로 취임한 2010년 성남시의 부채는 무려 5910억에 달했습니다. 하지만 이재명은 각종 부채 탕감 정책을 펴 2018년 부채를 9억까지 줄였습니다. 민간개발을 공공개발로 전환하고, 시민배당으로 빚도 갚고 새로운 투자를 이끄는 발상의 전환을 보이기도 했습니다. 논리적으로 해결책을 찾고 철저한 성과를 냈던 성남시의 부채를 해결한 철저한 이재명을 소개합니다!",
        "source": "출처 : https://snvision.seongnam.go.kr/7760(참고)"
    },
    "INF": {
        "typeName": "정의배려형",
        "explain": "정의배려형인 당신은 사람에 대한 따뜻한 마음이 돋보입니다. 자신이 지향하는 이상적인 것들에 대해 정열적인 신념을 가지고 있으며, 본인이 생각하는 정의를 위해서라면 다른 것들을 개의치 않고 곧게 걸어가는 사람입니다. 내면이 단단한 경우가 많으며 신념을 현실로 만드는 개혁을 추구합니다.",
        "subTitle": "노란리본을 지킨 이재명!",
        "jmimage": "img/jm3.jpg",
        "subExplain": "세월호 참사가 발생하고 온 국민의 마음에 큰 상처가 남았습니다. 그 직후 성남시청에는 커다란 현수막이 붙었습니다. 커다란 노란리본이 그려진 현수막이었습니다.</br> 그로부터 몇 년 뒤 기자회견을 하던 이재명에게 어느 시민이 ‘노란 리본이 지겹지 않냐’고 말했습니다. 이재명은 거세게 분노하며 ‘어떻게 사람이 죽었는데 그런 소리를 하냐’고 말했습니다. 개혁은 아픔에 공감하고 모두가 덜 아픈 세상을 만들려 할 때 이뤄질 수 있습니다. 노란리본을 잊지 않고 지켜온 이재명을 정의배려형인 당신에게 소개합니다.",
    },
    "INT": {
        "typeName": "통찰추진형",
        "explain": "통찰추진형인 당신은 뛰어난 통찰력과 직관력을 가졌습니다. 자신이 가진 목적을 실현하려는 강한 의지를 가지고 있으며 그 실현을 위해 많은 노력을 투자합니다. 자칫 거만하다는 오해를 받을 수는 있지만 그럼에도 굳건한 의지로 모든 것을 이겨낼 수 있는 사람입니다.",
        "subTitle": "새로운 비전 기본소득을 제안한 이재명!",
        "jmimage": "img/jm4.jpg",
        "subExplain": "이재명은 몇 년 동안 꾸준히 기본소득의 필요성을 주장했습니다. 기본소득은 재난지원금 같은 일회성 지원이 아니라 모든 국민에게 차별 없이 꾸준히 지급하는 일종의 국가 배당금입니다. 지금까지 누구도 시도하지 못한 일이기에 정치인에게는 엄청난 도전이었습니다.</br> 많은 사람들이 기본소득에 대해 반대나 우려의 시각을 보였지만 이재명의 소신은 크게 달라지지 않았습니다. 새로운 세계에는 새로운 정책이 필요하다며 공정과 평등을 위해 이재명이 제시하는 새로운 비전 기본소득을 통찰추진형인 당신에게 소개합니다.",
    },
    "ESF": {
        "typeName": "활기조화형",
        "explain": "활기조화형인 당신은 사람들과의 관계를 중시하며 사교적인 사람입니다. 주변에서 일어나는 일에 관심이 많으며 다른 사람들과 대화를 나누는 것을 즐깁니다. 모임이나 조직에서 밝고 재미있는 분위기를 만드는 분위기메이커 역할을 하며 충돌하기보다는 조화를 이루는 것을 중시합니다.",
        "subTitle": "상생을 위한 지역화폐를 도입한 이재명!",
        "jmimage": "img/jm5.jpg",
        "subExplain": "코로나19의 유행으로 인해 지역 상권이 많은 타격을 입었습니다. 위기상황인 것은 분명하지만, 위기를 방치하는 것 보다 뚫고 나가는 개혁이 필요합니다.</br> 코로나가 유행하기 전부터 이재명이 적극적으로 도입하던 지역화폐가 위기 상황에서 빛을 발했습니다. 상점마다 지역화폐를 받는다는 문구를 붙였고, 시민들은 지역화폐로 생필품을 구입했습니다. 지역화폐가 극심한 불황을 이겨내는 호흡기가 되었습니다. 함께 살기 위한 노력 지역화폐! 활기조화형인 당신께 지역화폐를 도입한 이재명을 소개합니다!",
        },
    "EST": {
        "typeName": "실용해결형",
        "explain": "실용해결형인 당신은 현실감각이 뛰어나며 개방적이라서 사람이나 일에 대한 선입견이 별로 없는 편입니다. 실현 가능한 일을 계획하고 추진하는 능력이 있으며 미래의 가치보다는 현실의 사실을 추구합니다. 두루뭉술한 아이디어보다 당장 무엇을 이룰 수 있을지 고민하는 사람입니다.",
        "subTitle": "수술실 CCTV 도입을 외치는 이재명!",
        "jmimage": "img/jm6.jpg",
        "subExplain": "최근 몇 년 동안 대리수술을 비롯하여 수술실에서 발생한 다양한 일들이 사람들을 충격에 빠지게 했습니다. 내 가족의 생명이 오가는 수술실에서 무슨 일이 생길지도 모른다는 두려움 때문입니다.</br> 이재명은 국회의원들에게 ‘병원 수술실 CCTV 설치 의무화’를 법제화해달라는 요청을 꾸준히 해왔습니다. 환자와 가족들의 신뢰를 확보하고 신뢰를 얻은 병원과 의사도 책임 있는 진료를 하게 되는 정책이라는 것입니다. 실용해결형인 당신에게 많은 논란과 일부 의료진의 반대에도 불구하고 현실적인 문제 해결을 위해 꿋꿋하게 수술실 CCTV 도입을 주장하는 이재명을 소개합니다.",
    },
    "ENF": {
        "typeName": "열정도전형",
        "explain": "열정도전형인 당신은 창의적이며 항상 새로운 것을 찾아 도전하는 사람입니다. 뭐든지 빠르게 해결하고자 하며, 그럴만한 수행 능력과 열정을 가지고 있습니다. 다른 사람의 의견에 진지하게 귀 기울이며 뜨거운 열정을 가지고 새로운 아이디어를 제시하기도 합니다.",
        "subTitle": "모든 청년에게 청년배당을 지급한 이재명!",
        "jmimage": "img/jm7.jpg",
        "subExplain": "청년들의 기회와 공정에 대한 이야기가 매우 뜨거운 이슈입니다. 같은 청년이지만 조건과 상황이 달라 그들의 미래까지 달라지는 안타까운 현실에서 똑같지는 않더라도 비슷한 도전의 기회를 제공할 수 있는 개혁이 필요합니다.</br> 이재명은 성남시장으로 일하던 2016년, 전국 최초로 ‘청년배당’을 지급했습니다. 성남에서 3년 이상 거주한 만24세의 모든 청년들에게 똑같은 금액의 지역화폐를 제공한 것입니다. 청년배당으로 생계가 어려운 청년은 밥 한 끼라도 더 먹으며 미래를 꿈꿀 수 있게 되었습니다. 열정도전형인 당신에게 도전을 응원하는 청년배당을 지급한 이재명을 소개합니다!",
    },
    "ENT": {
        "typeName": "의욕리더형",
        "explain": "의욕리더형인 당신은 독창적이며 창의적인 사람입니다. 상황을 보는 넓은 시야와 다양한 재능으로 문제를 해결하는데 탁월한 능력을 가지고 있습니다. 리더십이 있으며 큰 그림을 그리고 직접 솔선수범 실현하기까지 합니다. 자신의 감정을 누르고 책임감을 중시하여 때로 스트레스를 받기도 합니다.",
        "subTitle": "삶 자체로 개혁을 이뤄온 이재명!",
        "jmimage": "img/jm8.jpg",
        "subExplain": "많은 사람들이 이재명을 ‘흙수저’라고 합니다. 사람을 수저 색으로 나눈다는 게 정말 서글픈 일이지만 어쨌든 그렇게 말 합니다. 가난한 집에서 태어난 이재명은 열다섯의 나이에 공장의 소년공으로 일하다가 벨트에 손이 말려 들어가 장애를 얻었습니다. 그러나 포기하지 않고 사법고시에 합격해 인권변호사로 활동했으며 성남시장으로 많은 개혁을 성공시켰습니다. 경기도지사가 된 후에도 획기적인 개혁들은 멈추지 않았습니다.</br> 이제 대통령 선거에 도전하며 최초의 소년공 출신 대통령이 되어 새로운 대한민국을 만들겠다고 외칩니다. 의욕리더형인 당신에게 삶 자체로 개혁을 이뤄온 이재명을 소개합니다.",
    }
}

function start(){
    $(".start").hide();
    $(".question").show();
    $(".progress").attr("style", "display:flex");
    next();
}
$("#A").click(function(){
    $("#B").removeClass("choice");
    $("#A").addClass("choice");
    $("#A_check").val("Y");
});
$("#B").click(function(){
    $("#A").removeClass("choice");
    $("#B").addClass("choice");
    $("#A_check").val("N");
});

function next(){
    if(num == 11){
        $(".question").hide();
        $(".result").show();
        let mbti = "";
        ($("#IE").val()) < 2 ? mbti += "E" : mbti += "I";
        ($("#SN").val()) < 2 ? mbti += "N" : mbti += "S";
        ($("#TF").val()) < 2 ? mbti += "F" : mbti += "T";
        /*$("#result_type").html(mbti);*/
        $("#reform").html(result[mbti]["typeName"]);
        $("#explain").html(result[mbti]["explain"]);
        $("#type_name").html(result[mbti]["typeName"]+"인 당신에게</br>개혁적인 이재명을 소개합니다!");
        $("#sub_title").html(result[mbti]["subTitle"]);
        $('#jmimage').attr('src', result[mbti]["jmimage"]);
        $("#sub_explain").html(result[mbti]["subExplain"]);
        $("#source").html(result[mbti]["source"]);
        $("#share").html('<div class="addthis_inline_share_toolbox text-center"></div>');
        $("body").attr("style", "height:100%");

        const state = { 'mbti': mbti }
        const title = ''
        const url = 'index.html?mbti='+mbti;
        history.pushState(state, title, url);
        $(".progress").attr("style", "display:none");
        window.location.reload();
    }else if(num == 12){
        $(".question").hide();
        $(".result").show();
        /*$("#result_type").html(mbti);*/
        $("#reform").html(result[mbti]["typeName"]);
        $("#explain").html(result[mbti]["explain"]);
        $("#type_name").html(result[mbti]["typeName"]+"인 당신에게</br>개혁적인 이재명을 소개합니다!");
        $("#sub_title").html(result[mbti]["subTitle"]);
        $('#jmimage').attr('src', result[mbti]["jmimage"]);
        $("#sub_explain").html(result[mbti]["subExplain"]);
        $("#source").html(result[mbti]["source"]);
        $("#share").html('<div class="addthis_inline_share_toolbox text-center"></div>');
        $("body").attr("style", "height:100%");

        const state = { 'mbti': mbti }
        const title = ''
        const url = 'index.html?mbti='+mbti;
        history.pushState(state, title, url);
    }else{
        if($("#A_check").val() == ""){
            alert("문답을 선택해주세요.");
            return false;
        }
       if($("#A_check").val() == "Y"){
            const type = $("#type").val();
            var preValue = $("#"+type).val();
            $("#"+type).val(parseInt(preValue)+1);
        }
        $(".progress-bar").attr('style', 'width: calc(100/10*'+num+'%)')
        $("#q_num").html("Q"+num+".")
        $("#title").html(q[num]["title"]);
        $("#type").val(q[num]["type"]);
        $("#A #A_text").html(q[num]["A"]);
        $("#B #B_text").html(q[num]["B"]);
        $("#A_check").val("");
        $("#A, #B").removeClass("choice");
        $('.next_button > img').attr('src', 'img/next_button.png');
        num++
    }
}

// 시작 버튼
$(".start_button").mouseover(function(){ // 마우스를 올렸을 때
    $(".start_button img").attr("src", "img/start_button_hover.png");
});

$(".start_button").mouseout(function(){ // 마우스 내렸을 때
    $(".start_button img").attr("src", "img/start_button.png");
});

// 다음 버튼
$(".next_button").mouseover(function(){ // 마우스를 올렸을 때
    $(".next_button img").attr("src", "img/next_button_hover.png");
});
$(".next_button").mouseout(function(){ // 마우스 내렸을 때
    $(".next_button img").attr("src", "img/next_button.png");
});

// 선거인단 버튼
$(".app_button").mouseover(function(){ // 마우스를 올렸을 때
    $(".app_button img").attr("src", "img/app_button_hover.png");
});
$(".app_button").mouseout(function(){ // 마우스 내렸을 때
    $(".app_button img").attr("src", "img/app_button.png");
});

// 선거인단 버튼
$(".reset_button").mouseover(function(){ // 마우스를 올렸을 때
    $(".reset_button img").attr("src", "img/reset_button_hover.png");
});
$(".reset_button").mouseout(function(){ // 마우스 내렸을 때
    $(".reset_button img").attr("src", "img/reset_button.png");
});

function getParam(sname) {
    var params = location.search
.substr(location.search.indexOf("?") + 1);
    var sval = "";
    params = params.split("&");
    for (var i = 0; i < params.length; i++) {
        temp = params[i].split("=");
        if ([temp[0]] == sname) { sval = temp[1]; }
    }
    return sval;
}

if(getParam("mbti") != ""){
    num = 12;
    mbti = getParam("mbti");
    $(".start").hide();
    next();
}
