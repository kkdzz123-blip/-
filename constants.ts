import { Faction, Location } from './types';

export const UNIVERSE_INFO = [
  "서부개척시대 배경 (1878년)",
  "남북전쟁 이후 대량 무기 유통, 혼란스러운 미국 서부",
  "총기 사용 일상화 (최후수단 아님)",
  "죽음이 가벼운 서부 (NPC 사망 빈번)",
  "문명화된 평화로운 동부와 중부 vs 아직 무법지대인 서부",
  "서부 內 구분: 스톤월 산맥 기준 동부(평화/준법) vs 서부(무법/위험)"
];

export const LOCATIONS: Location[] = [
  { name: "그린우드", description: ["서부에서 그나마 동쪽에 위치한 마을", "준법적 (동쪽 도시와 가깝기 때문)"] },
  { name: "스톤월 산맥", description: ["서부 중앙을 세로로 가로막고 있는 석산", "유일한 통로는 스톤컷 패스"] },
  { name: "레드 더스트", description: ["극서부, 멕시코와 거의 맞닿은 지역", "B.S의 본거지 (규율이 있는 마을)"] },
  { name: "아이언 폴", description: ["서부에서 동쪽 끝자락에 자리한 대도시", "철광, 석탄, 석유, 철도산업의 중심지", "C.U.C와 B.A.D의 본거지"] },
];

export const OTHER_LOCATIONS = {
  east: ["메이플 크릭", "하트필드", "올드밀"],
  west: ["데드리지", "라스트포스트", "카인즈그릭"]
};

// Helper to generate gallery URLs
const getGallery = (group: 'A' | 'B', charCode: string, count: number) => 
  Array.from({ length: count }, (_, i) => `https://itimg.kr/1987/WS/${group}/${charCode}/${i + 1}.png`);

export const FACTIONS: Faction[] = [
  {
    id: "cuc",
    name: "C.U.C",
    koreanName: "크라운 유니온 컴퍼니",
    fullName: "Crown Union Company",
    slogan: "\"총보다 계약서를 먼저 내미는 자들이, 가장 많은 피를 흘리게 했다.\"",
    logo: "https://itimg.kr/1987/11/크라운유니온컴퍼니.png",
    description: [
      "철도, 금광 등 서부 주요 사업을 장악한 최대 기업.",
      "B.A.D를 설립하여 '자산 보호' 명목으로 사병을 운용하며 불법 행위를 자행합니다."
    ],
    style: { accentColor: "#fbbf24" }, // Amber-400
    characters: [
      {
        id: "matilda", name: "마틸다 프레스턴", gender: "여", alignment: "악", nickname: "악녀", age: "35",
        personality: "사교적+오만함+이중적+야욕", origin: "서민 출신, 귀족과 결혼", job: "C.U.C 대표",
        strength: "무한한 재력+인맥+음모+경호", weapon: "없음", speechStyle: "귀족+우아함",
        backstory: "백인. 남편 허셸 프레스턴 의문사 후 대표가 됨.", 
        image: "https://itimg.kr/1987/11/aa/마틸다.png",
        largeImage: "https://itimg.kr/1987/11/aa/마틸다확대.png",
        height: "167cm", weight: "59kg", cupSize: "E컵",
        gallery: getGallery('A', 'F', 31)
      },
      {
        id: "agatha", name: "아가사 베넷", gender: "여", alignment: "중립", nickname: "-", age: "27",
        personality: "냉철함+차가움+원칙적인+준법적인", origin: "마틸다의 친동생", job: "C.U.C 철도사업부 총괄",
        strength: "법+영리함+논리+경호", weapon: "없음", speechStyle: "딱딱+사무적",
        backstory: "백인. 형부가 죽은 후 C.U.C에 들어옴.", 
        image: "https://itimg.kr/1987/11/aa/아가사.png",
        largeImage: "https://itimg.kr/1987/11/aa/아가사확대.png",
        height: "162cm", weight: "51kg", cupSize: "D컵",
        gallery: getGallery('A', 'G', 31)
      }
    ]
  },
  {
    id: "bad",
    name: "B.A.D",
    koreanName: "바베 탐정 사무소",
    fullName: "Babe Agency of Detection",
    slogan: "\"법이라는 가면을 쓰고, 법이 하지 못할 일을 한다.\"",
    logo: "https://itimg.kr/1987/11/바베탐정사무소.png",
    description: [
      "C.U.C 산하 무력 조직.",
      "최신식 무기와 장비로 무장한 50여 명의 정예 요원.",
      "검은색 3피스 정장과 금색 배지가 상징입니다."
    ],
    style: { accentColor: "#9ca3af" }, // Gray-400
    characters: [
      {
        id: "waldo", name: "왈도 브라운", gender: "남", alignment: "악", nickname: "스톤페이스", age: "32",
        personality: "묵묵함+철두철미+충성심+계산적", origin: "참전 장교 출신", job: "B.A.D 치프 에이전트",
        strength: "사격술+용병술+전술+치밀함", weapon: "모든 총기", speechStyle: "딱딱+군인+사무적",
        backstory: "동양계.", 
        image: "https://itimg.kr/1987/11/aa/왈도.png",
        largeImage: "https://itimg.kr/1987/11/aa/왈도확대.png",
        height: "187cm", weight: "78kg",
        gallery: getGallery('B', 'B', 11)
      },
      {
        id: "ida", name: "아이다 도노반", gender: "여", alignment: "중립", nickname: "괴짜", age: "26",
        personality: "호기심+밝음+우유부단+엉뚱함", origin: "무법자 출신", job: "B.A.D 시니어 에이전트",
        strength: "투척 실력+민첩성+기민함+승마술", weapon: "스로잉 나이프, 샷건, 사냥돌(포박추)", speechStyle: "엉뚱+많은 질문",
        backstory: "백인.", 
        image: "https://itimg.kr/1987/11/aa/아이다.png",
        largeImage: "https://itimg.kr/1987/11/aa/아이다확대.png",
        height: "164cm", weight: "47kg", cupSize: "B컵",
        gallery: getGallery('A', 'H', 31)
      }
    ]
  },
  {
    id: "bs",
    name: "B.S",
    koreanName: "블랙 스퍼스",
    fullName: "Black Spurs",
    slogan: "\"무법이었지만 무질서하지는 않았다.\"",
    logo: "https://itimg.kr/1987/11/블랙스퍼스.png",
    description: [
      "미 서부 최대 규모 갱단이자 레드 더스트의 지배자.",
      "전직 군인들이 다수 포함되어 있으며 엄격한 규율을 따릅니다.",
      "선은 넘지 않는 군대식 갱단."
    ],
    style: { accentColor: "#ef4444" }, // Red-500
    characters: [
      {
        id: "rufus", name: "루퍼스 스프링스틴", gender: "남", alignment: "선", nickname: "대부", age: "42",
        personality: "밝음+서글서글+유머러스+농담+유쾌함", origin: "군인(상사) 출신", job: "B.A.D 우두머리",
        strength: "사격술+용병술+전술+치밀함", weapon: "모든 총기", speechStyle: "호방함+인자함",
        backstory: "라틴계. 무법지대 구원을 위해 자경단으로 시작했으나 갱이라는 오명을 얻음.", 
        image: "https://itimg.kr/1987/11/aa/루퍼스.png",
        largeImage: "https://itimg.kr/1987/11/aa/루퍼스확대.png",
        height: "185cm", weight: "88kg",
        gallery: getGallery('B', 'D', 11)
      },
      {
        id: "carmela", name: "카멜라 루치아", gender: "여", alignment: "중립", nickname: "해결사", age: "28",
        personality: "묵묵함+충성심+이성적+고지식", origin: "북부 사냥꾼 출신", job: "B.S 해결사",
        strength: "사격+추적+은신+생존", weapon: "라이플", speechStyle: "단답+사무적",
        backstory: "이탈리아계.", 
        image: "https://itimg.kr/1987/11/aa/카멜라.png",
        largeImage: "https://itimg.kr/1987/11/aa/카멜라확대.png",
        height: "170cm", weight: "48kg", cupSize: "B컵",
        gallery: getGallery('A', 'K', 31)
      },
      {
        id: "sting", name: "스팅", gender: "여", alignment: "선", nickname: "스팅", age: "25",
        personality: "엉뚱함+해맑음+유머러스+긍정적", origin: "서커스 출신", job: "B.S 행동대장",
        strength: "투척 무기+암살+은신+민첩함+유연함", weapon: "스로잉 나이프", speechStyle: "엉뚱함+긍정적",
        backstory: "흑인. 서커스단 노예 출신.", 
        image: "https://itimg.kr/1987/11/aa/스팅.png",
        largeImage: "https://itimg.kr/1987/11/aa/스팅확대.png",
        height: "174cm", weight: "57kg", cupSize: "C컵",
        gallery: getGallery('A', 'J', 31)
      }
    ]
  },
  {
    id: "prm",
    name: "P.R.M",
    koreanName: "페이드 로드 맨",
    fullName: "Paid Road Men",
    slogan: "\"통행료를 내면 악마라도 통과, 통행료를 내지 않으면 성자라도 불통.\"",
    logo: "https://itimg.kr/1987/11/페이드로드맨.png",
    description: [
      "스톤월 산맥의 유일한 관통로 '스톤컷 패스'를 점거한 집단.",
      "합리적 통행료를 지불하면 누구든 안전하게 통과시켜 줍니다.",
      "내부 규칙에 집착하며 스톤컷을 요새화했습니다."
    ],
    style: { accentColor: "#15803d" }, // Green-700
    characters: [
      {
        id: "thomas", name: "토마스 캘러핸", gender: "남", alignment: "중립", nickname: "벽창호", age: "32",
        personality: "공명정대+규칙 준수+지혜로움", origin: "선교사", job: "P.R.M 사장",
        strength: "합리적인 규칙+부하들의 충심", weapon: "라이플", speechStyle: "논리적+규범적+사무적",
        backstory: "라틴계. 길을 직접 닦은 아버지에게 물려받은 2대 사장.", 
        image: "https://itimg.kr/1987/11/aa/토마스.png",
        largeImage: "https://itimg.kr/1987/11/aa/토마스확대.png",
        height: "186cm", weight: "82kg",
        gallery: getGallery('B', 'C', 11)
      },
      {
        id: "sophia", name: "소피아 킴", gender: "여", alignment: "선", nickname: "레이븐", age: "28",
        personality: "순수함+티 없는+이상주의+자애로움", origin: "이방인", job: "P.R.M 집행관",
        strength: "침착함+판단력+이성", weapon: "저격 라이플", speechStyle: "자애로움+순수함",
        backstory: "동양계. 조선의 노비 출신으로 선교사에게 거둬짐.", 
        image: "https://itimg.kr/1987/11/aa/소피아.png",
        largeImage: "https://itimg.kr/1987/11/aa/소피아확대.png",
        height: "158cm", weight: "42kg", cupSize: "A컵",
        gallery: getGallery('A', 'I', 31)
      },
      {
        id: "martha", name: "마사", gender: "여", alignment: "중립", nickname: "블랙 쿠거", age: "30",
        personality: "사교적+센스있는+유머러스+친절", origin: "노예출신", job: "P.R.M 도로 보안관",
        strength: "사격+나이프 전투", weapon: "유머러스+친근함", speechStyle: "P.R.M 복장",
        backstory: "흑인. 해방된 노예 출신.", 
        image: "https://itimg.kr/1987/WS/T/마사.png",
        largeImage: "https://itimg.kr/1987/WS/T/마사1.png",
        height: "168cm", weight: "65kg", cupSize: "F컵",
        gallery: getGallery('A', 'L', 31)
      }
    ]
  },
  {
    id: "stonehoof",
    name: "돌발굽 부족",
    koreanName: "Stone Hoof Tribe",
    fullName: "Stone Hoof Tribe",
    slogan: "\"강했기 때문에 끝까지 싸웠고, 그래서 더 크게 부서졌다.\"",
    logo: "https://itimg.kr/1987/11/돌발굽부족.png",
    description: [
      "개척 저항 전사 부족으로 군대 패배 후 스톤월 산맥에 은신했습니다.",
      "활, 단검, 도끼를 주무기로 사용하는 은밀하고 치명적인 사냥꾼들입니다."
    ],
    style: { accentColor: "#a8a29e" }, // Stone-400
    characters: [
      {
        id: "nighteye", name: "밤눈매", gender: "여", alignment: "중립", nickname: "소리없는 죽음", age: "23",
        personality: "엉뚱함+4차원+눈치빠름+영리함", origin: "돌발굽 부족 전사", job: "현상금 사냥꾼",
        strength: "은신+추적+암살+사냥+생존", weapon: "활, 도끼, 단검", speechStyle: "어눌+어순변경+엉뚱",
        backstory: "인디언. 부족민들의 거처 마련을 위해 돈을 모으는 중.", 
        image: "https://itimg.kr/1987/11/aa/밤눈매.png",
        largeImage: "https://itimg.kr/1987/11/aa/밤눈매확대.png",
        height: "162cm", weight: "48kg", cupSize: "B컵", specialStatus: "처녀",
        gallery: getGallery('A', 'E', 31)
      }
    ]
  },
  {
    id: "dj",
    name: "D.J",
    koreanName: "더스트 잭스",
    fullName: "Dust Jacks",
    slogan: "\"돈이 보이면, 사람은 보지 않는다.\"",
    logo: "https://itimg.kr/1987/11/더스트잭스.png",
    description: [
      "돈에 미친 소규모 갱단.",
      "약자 대상 강도, 살인, 인신매매 등 돈이 되는 일이라면 뭐든지 수행합니다."
    ],
    style: { accentColor: "#d97706" }, // Amber-600
    characters: [
      {
        id: "chris", name: "크리스", gender: "남", alignment: "악", nickname: "돈에 미친 놈", age: "32",
        personality: "돈 밝힘+욕망+저열함", origin: "부랑자", job: "D.J 우두머리",
        strength: "비열함+음모+부하들", weapon: "금으로 된 리볼버", speechStyle: "천박함+욕",
        backstory: "백인. 알비니즘으로 인해 불길하다며 마을에서 쫓겨남. 오직 돈만 믿음.", 
        image: "https://itimg.kr/1987/11/aa/크리스.png",
        largeImage: "https://itimg.kr/1987/11/aa/크리스확대.png",
        height: "177cm", weight: "64kg",
        gallery: getGallery('B', 'E', 11)
      }
    ]
  },
  {
    id: "rd",
    name: "R.D",
    koreanName: "레이지 독스",
    fullName: "Rage Dogs",
    slogan: "\"목적 없는 폭력이 가장 멈추기 어렵다.\"",
    logo: "https://itimg.kr/1987/11/레이지독스.png",
    description: [
      "광기 어린 미치광이 갱단.",
      "돈이 목적이 아닌 살인, 강간 등 욕구 충족을 위해 무법을 이용합니다.",
      "인육 섭취, 시신 훼손 등의 기행을 일삼습니다."
    ],
    style: { accentColor: "#991b1b" }, // Red-800
    characters: [
      {
        id: "grok", name: "그록", gender: "남", alignment: "악", nickname: "도살자", age: "40",
        personality: "광기+이해불가+냉혈한", origin: "정육업자", job: "R.D 우두머리",
        strength: "겁 없음+고통 못 느낌+대담함", weapon: "도끼", speechStyle: "기괴한 웃음+추임새",
        backstory: "라틴계. 사람을 도축하고 장식하는 미치광이.", 
        image: "https://itimg.kr/1987/11/aa/그록.png",
        largeImage: "https://itimg.kr/1987/11/aa/그록확대.png",
        height: "195cm", weight: "110kg",
        gallery: getGallery('B', 'F', 11)
      }
    ]
  },
  {
    id: "independent",
    name: "무소속",
    koreanName: "Independent / Drifters",
    fullName: "Independent / Drifters",
    slogan: "\"지옥을 홀로 걷는 자들.\"",
    logo: "https://itimg.kr/1987/11/aa/무소속.jpg",
    description: [
      "어디에도 속하지 않은 방랑자들, 복수자들, 혹은 생존자들.",
      "각자의 목적을 위해 서부를 누비는 개인들입니다."
    ],
    style: { accentColor: "#78716c" }, // Stone-500
    characters: [
      {
        id: "murphy", name: "머피 갤러거", gender: "남", alignment: "중립", nickname: "떠벌이 머피", age: "32",
        personality: "사교적+계획적+영리함+눈치빠름", origin: "철도사업가", job: "정보상",
        strength: "정보+언변+인맥+통찰", weapon: "말빨, 임기응변", speechStyle: "경박+미사여구+논리적",
        backstory: "백인. CUC의 부당 계약으로 파산 후 복수 준비 중.", 
        image: "https://itimg.kr/1987/11/aa/머피.png",
        largeImage: "https://itimg.kr/1987/11/aa/머피확대.png",
        height: "180cm", weight: "65kg",
        gallery: getGallery('B', 'A', 11)
      },
      {
        id: "rose", name: "로즈 설리번", gender: "여", alignment: "악", nickname: "독 장미", age: "27",
        personality: "장난기 많음+유머러스+농담+가벼운", origin: "창녀", job: "무법자",
        strength: "연기+유혹+정보수집+근거리 암살", weapon: "독, 단검, 권총", speechStyle: "관능+섹시",
        backstory: "백인. 동부에서 창녀로 일하다 포주를 죽이고 서부로 도주.", 
        image: "https://itimg.kr/1987/11/aa/로즈.png",
        largeImage: "https://itimg.kr/1987/11/aa/로즈확대.png",
        height: "167cm", weight: "55kg", cupSize: "D컵",
        gallery: getGallery('A', 'C', 31)
      },
      {
        id: "emily", name: "에밀리 록시", gender: "여", alignment: "선", nickname: "록시 중사", age: "25",
        personality: "준법적+양심적+올곧은+정의감+침착함", origin: "남북전쟁 기병대 중사", job: "현상금 사냥꾼",
        strength: "생존+사격+승마+기마사격", weapon: "모든 총기류", speechStyle: "딱딱+군인",
        backstory: "동양계. 남북전쟁 시 신념을 위해 남장 후 참전, 민간인 사살 임무 거부하고 탈영.", 
        image: "https://itimg.kr/1987/11/aa/에밀리.png",
        largeImage: "https://itimg.kr/1987/11/aa/에밀리확대.png",
        height: "165cm", weight: "49kg", cupSize: "A컵",
        gallery: getGallery('A', 'A', 31)
      },
      {
        id: "joy", name: "조이 번즈", gender: "여", alignment: "선", nickname: "스마일 번즈", age: "22",
        personality: "해맑음+긍정적+개구쟁이+엉뚱함+머리좋음", origin: "광산 노동자의 딸", job: "폭발물 전문가",
        strength: "폭발물 제조+무기 정비+제작 기술", weapon: "다이너마이트, 지연 폭발물", speechStyle: "애교+장난",
        backstory: "아이리쉬계. 아버지를 잃고 기술을 배움.", 
        image: "https://itimg.kr/1987/11/aa/조이.png",
        largeImage: "https://itimg.kr/1987/11/aa/조이확대.png",
        height: "155cm", weight: "42kg", cupSize: "A컵", specialStatus: "처녀",
        gallery: getGallery('A', 'B', 31)
      },
      {
        id: "hazel", name: "헤이즐 킹슬리", gender: "여", alignment: "선", nickname: "철없는 공주님", age: "23",
        personality: "우아함+고고함+약간 오만함+선함+선민의식", origin: "명예 귀족 킹슬리 가문 장녀", job: "현상금 사냥꾼",
        strength: "정규교육+라이플 사격+승마+재력", weapon: "고급 라이플", speechStyle: "고고함+귀족+우아함",
        backstory: "영국계. 사병 이끌고 무법자 소탕 중 혼자 살아남음. 현실과 이상의 괴리에 고통.", 
        image: "https://itimg.kr/1987/11/aa/헤이즐.png",
        largeImage: "https://itimg.kr/1987/11/aa/헤이즐확대.png",
        height: "170cm", weight: "57kg", cupSize: "D컵", specialStatus: "처녀",
        gallery: getGallery('A', 'D', 31)
      }
    ]
  },
  {
    id: "world-map",
    name: "World Map",
    koreanName: "세계관 지도",
    fullName: "Western Sunset Map",
    slogan: "Explore the Territory",
    logo: "https://itimg.kr/1987/11/aa/맵.jpg",
    description: [
      "미 서부 개척시대를 배경으로 하지만 지역, 지명, 세력, 인물 등 모두 창작 된 세계관입니다."
    ],
    style: { accentColor: "#e7e5e4" }, // stone-200
    characters: [] // Empty for the map
  }
];