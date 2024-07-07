dataSetVersion = "2024-05-12"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by School year",
    key: "year",
    tooltip: "Check this to restrict to certain year.\n取消勾選你將看不到該期生的cp",
    checked: false,
    sub: [
      { name: "102", key: "102" },
      { name: "103", key: "103" },
      { name: "104", key: "104" },
    ]
  },
  {
    name: "Filter by same grade",
    key: "grade",
    tooltip: "Check this to restrict to characters that appear in same grades.\n取消勾選你將看不到同年級cp",
    checked: false,
    sub: [ { name: "1st grade", key: "1st" }, 
    { name: "2nd grade", key: "2nd" }, 
    { name: "3rd grade", key: "3rd" }
   ]
  },
  {
    name: "Filter by same unit",
    key: "unit",
    tooltip: "Check this to restrict to characters that appear in same unit.\n取消勾選你將看不到同小組cp",
    checked: false,
    sub: [ { name: "cerise bouquet", key: "cb" }, 
    { name: "DOLLCHESTRA", key: "dc" }, 
    { name: "Mira-Cra Park!", key: "mcp" },
    { name:"Kahomegu♡Gelato", key:"khmg"},
    { name:"Hasu no Kyujitsu", key:"hs"},
    { name:"Rurino to Yukai na Tsuzuri-tach", key:"yk"},

   ]
  },
  {
    name: "Filter by charater",
    key: "charater",
    tooltip: "Check this to restrict characters.\n取消勾選你將看不到該角色的cp",
    checked: false,
    sub: [ 
    { name: "Kaho", key: "kh" }, 
    { name: "Sayaka", key: "sy" }, 
    { name: "Kozue", key: "kz" },
    { name: "Tsuzuri", key: "tz" }, 
    { name: "Rurino", key: "rr" }, 
    { name: "Megumi", key: "mg" },
    { name: "Ginko", key: "gk" }, 
    { name: "Kosuzu", key: "sz" }, 
    { name: "Hime", key: "hm" },
    { name: "Sachi", key: "sc" },
   ]
  }, 
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Ginko x Hime",//1
    img: "gkhm.png",
    opts: {
      year: [ "104" ],
      grade: ["1st"],
      charater:["gk","hm"]
    
    }
  },
  {
    name: "Ginko x Kosuzu",
    img: "gksz.png",
    opts: {
      year:["104"],
      grade: ["1st"],
      charater:["gk","sz"]
    }
  },
  {
    name: "Kaho x Ginko",
    img: "khgk.png",
    opts: {
      year: ["103","104"],
      unit:["cb"],
      charater:["kh","gk"]
    }
  },
  {
    name: "Kaho x hime",
    img: "khhm.png",
    opts: {
      year: ["103", "104"],
      charater:["hk","hm"]
    },
  },
  {
    name: "Kaho x Kosuzu",//5
    img: "khsz.png",
    opts: {
      year: ["103","104"],
      charater:["kh","sz"]
    }
  },
  {
    name: "Kaho x Tsuzuri",
    img: "khtz.png",
    opts: {
      year: ["103","102","104"],
      charater:["kh","tz"]
    }
  },
  {
    name: "Kozue x Ginko",
    img: "kzgk.png",
    opts: {
      year: ["102","103","104"],
      unit:["cb"],
      charater:["kz","gk"]
    }
  },
  {
    name: "Kozue x Hime",
    img: "kzhm.png",
    opts: {
      year: ["102","103","104"],
      charater: ["kz","hm"]
    }
  },
  {
    name: "Kozue x Kaho",
    img: "kzkh.png",
    opts: {
      year: ["102","103","104" ],
      unit:["cb"],
      charater: ["kz", "kh"]
    }
  },
  {
    name: "Kozue x Megumi",//10
    img: "kzmg.png",
    opts: {
      year: ["102","103","104"],
      grade:["3rd"],
      charater: ["kz","mg"]
    }
  },
  {
    name: "Kozue x Rurino",
    img: "kzrr.png",
    opts: {
      year: ["102","103","104"],
      charater: ["kz","rr"]
    }
  },
  {
    name: "Kozue x Kosuzu",
    img: "kzsz.png",
    opts: {
      year: ["102","103","104"],
      charater: ["kz","sz"]
    }
  },
  {
    name: "Kozue x Tsuzuri",
    img: "kztz.png",
    opts: {
      year: ["102","103","104"],
      grade:["3rd"],
      charater: ["kz", "tz"]
    }
  },
  {
    name: "Megumi x Ginko",
    img: "mggk.png",
    opts: {
      year: ["102","103","104"],
      charater: ["mg","gk"]
    }
  },
  {
    name: "Megumi x Hime",//15
    img: "mghm.png",
    opts: {
      year: ["102","103","104"],
      unit:["mcp"],
      charater: ["mg", "hm"]
    }
  },
  {
    name: "Megumi x Kaho",
    img: "mgkh.png",
    opts: {
      year: ["102","103","104"],
      unit:["khmg"],
      charater: ["kh","mg"]
    }
  },
  {
    name: "Megumi x Rurino",
    img: "mgrr.png",
    opts: {
      year: ["102","103","104"],
      unit:["mcp"],
      charater: ["mg","rr"]
    }
  },
  {
    name: "Megumi x Kosuzu",
    img: "mgsz.png",
    opts: {
      year: ["102","103","104"],
      charater: ["mg","sz"]
    }
  },
  {
    name: "Megumi x Tsuzuri",
    img: "mgtz.png",
    opts: {
      year: ["102","103","104"],
      grade:["3rd"],
      charater: ["mg", "tz"]
    }
  },
  {
    name: "Rurino x Ginko",//20
    img: "rrgk.png",
    opts: {
      year: ["103","104"],
      charater: ["rr", "gk"]
    }
  },
  {
    name: "Rurino x Hime",
    img: "rrhm.png",
    opts: {
      year: ["103","104"],
      charater: ["rr","hm"],
      unit:["mcp"]
    }
  },
  {
    name: "Rurino x Kaho",
    img: "rrkh.png",
    opts: {
      year: ["103","104"],
      grade:["2nd"],
      charater: ["rr","kh"]
    }
  },
  {
    name: "Rurino x Kosuzu",
    img: "rrsz.png",
    opts: {
      year: ["103","104"],
      charater: ["rr","sz"]
    }
  },
  {
    name: "Rurino x Tsuzuri",
    img: "rrtz.png",
    opts: {
      year: ["102","103","104"],
      unit:["yk"],
      charater: ["rr","tz"]
    }
  },
  {
    name: "Sayaka x Ginko",//25
    img: "sygk.png",
    opts: {
      year: ["103","104"],
      charater: ["sy","gk"]
    }
  },
  {
    name: "Sayaka x Hime",
    img: "syhm.png",
    opts: {
      year: ["103","104"],
      charater: ["sy","hm"]
    }
  },
  {
    name: "Sayaka x Kaho",
    img: "sykh.png",
    opts: {
      year: ["103","104"],
      grade:["2nd"],
      charater: ["sy","kh"]
    }
  },
  {
    name: "Sayaka x Kozue",
    img: "sykz.png",
    opts: {
      year: ["102","103","104"],
      unit:["hs"],
      charater: ["sy","kz"]
    }
  },
  {
    name: "Sayaka x Megumi",
    img: "symg.png",
    opts: {
      year: ["102","103","104"],
      charater: ["sy","mg"]
    }
  },
  {
    name: "Sayaka x Rurino",//30
    img: "syrr.png",
    opts: {
      year: ["103","104"],
      grade:["2nd"],
      charater: ["sy","rr"]
    }
  },
  {
    name: "Sayaka x Kosuzu",
    img: "sysz.png",
    opts: {
      year: ["103","104"],
      unit:["dc"],
      charater: ["sy","sz"]
    }
  },
  {
    name: "Sayaka x Tsuzuri",
    img: "sytz.png",
    opts: {
      year: ["102","103","104"],
      unit:["dc"],
      charater: ["sy","tz"]
    }
  },
  {
    name: "Kosuzu x Hime",
    img: "szhm.png",
    opts: {
      year: ["104"],
      grade:["1st"],
      charater: ["sz","hm"]
    }
  },
  {
    name: "Tsuzuri x Ginko",
    img: "tzgk.png",
    opts: {
      year: ["102","103","104"],
      charater: ["tz","gk"]
    }
  },
  {
    name: "Tsuzuri x Hime",//35
    img: "tzhm.png",
    opts: {
      year: ["102","103","104"],
      charater: ["tz","hm"]
    }
  },
  {
    name: "Tsuzuri x Kosuzu",
    img: "tzsz.png",
    opts: {
      year: ["102","103","104"],
      unit:["dc"],
      charater: ["tz","sz"]
    }
  },
  {
    name: "Megumi x Sachi",
    img: "mgsc.png",
    opts: {
      year: ["102"],
      charater: ["mg","sc"]
    }
  },
  {
    name: "Kozue x Sachi",
    img: "kzsc.png",
    opts: {
      year: ["102"],
      charater: ["kz","sc"]
    }
  },
  {
    name: "Tsuzuri x Sachi",
    img: "tzsc.png",
    opts: {
      year: ["102"],
      charater: ["tz","sc"]
    }
  },

];
