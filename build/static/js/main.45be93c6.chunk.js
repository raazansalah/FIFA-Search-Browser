(this["webpackJsonpfifa-assesment"]=this["webpackJsonpfifa-assesment"]||[]).push([[0],{10:function(A){A.exports=JSON.parse('[{"id":1,"Name":"L. Messi","Age":31,"Nationality":"Argentina","Overall":94,"Club":"FC Barcelona","Value":"\u20ac110.5M","Wage":"\u20ac565K","Preferred Foot":"Left","Work Rate":"Medium/ Medium","Position":"RF","Jersey Number":10,"Joined":"1-Jul-04","Contract Valid Until":2021,"Height":"5\'7","Weight":"159lbs","Crossing":84,"Finishing":95,"HeadingAccuracy":70,"ShortPassing":90,"Volleys":86},{"id":2,"Name":"Cristiano Ronaldo","Age":33,"Nationality":"Portugal","Overall":94,"Club":"Juventus","Value":"\u20ac77M","Wage":"\u20ac405K","Preferred Foot":"Right","Work Rate":"High/ Low","Position":"ST","Jersey Number":7,"Joined":"10-Jul-18","Contract Valid Until":2022,"Height":"6\'2","Weight":"183lbs","Crossing":84,"Finishing":94,"HeadingAccuracy":89,"ShortPassing":81,"Volleys":87},{"id":3,"Name":"Neymar Jr","Age":26,"Nationality":"Brazil","Overall":92,"Club":"Paris Saint-Germain","Value":"\u20ac118.5M","Wage":"\u20ac290K","Preferred Foot":"Right","Work Rate":"High/ Medium","Position":"LW","Jersey Number":10,"Joined":"3-Aug-17","Contract Valid Until":2022,"Height":"5\'9","Weight":"150lbs","Crossing":79,"Finishing":87,"HeadingAccuracy":62,"ShortPassing":84,"Volleys":84},{"id":4,"Name":"De Gea","Age":27,"Nationality":"Spain","Overall":91,"Club":"Manchester United","Value":"\u20ac72M","Wage":"\u20ac260K","Preferred Foot":"Right","Work Rate":"Medium/ Medium","Position":"GK","Jersey Number":1,"Joined":"1-Jul-11","Contract Valid Until":2020,"Height":"6\'4","Weight":"168lbs","Crossing":17,"Finishing":13,"HeadingAccuracy":21,"ShortPassing":50,"Volleys":13},{"id":5,"Name":"K. De Bruyne","Age":27,"Nationality":"Belgium","Overall":91,"Club":"Manchester City","Value":"\u20ac102M","Wage":"\u20ac355K","Preferred Foot":"Right","Work Rate":"High/ High","Position":"RCM","Jersey Number":7,"Joined":"30-Aug-15","Contract Valid Until":2023,"Height":"5\'11","Weight":"154lbs","Crossing":93,"Finishing":82,"HeadingAccuracy":55,"ShortPassing":92,"Volleys":82}]')},30:function(A,e,t){},31:function(A,e,t){},39:function(A,e,t){},40:function(A,e,t){"use strict";t.r(e);var s=t(1),i=t.n(s),r=t(18),n=t.n(r),a=(t(30),t(2)),c=(t(31),t(10)),C=t(16),g=t(11),l=t(19),Q=t(20),B=t(25),o=t(24),L=t(21),E=t.n(L),j=t(0),d=function(A){Object(B.a)(t,A);var e=Object(o.a)(t);function t(A){var s;return Object(l.a)(this,t),(s=e.call(this,A)).state={series:[{name:"Series 1",data:[90,100,80,80,70,90]}],options:{chart:{toolbar:{show:!1},height:450,type:"radar"},xaxis:{categories:["Pace","Dribbling","Shooting","Defending","Passing","Physicality"]},yaxis:{tickAmount:10},colors:["#f64762"],stroke:{show:!0,width:3},markers:{size:9}}},s}return Object(Q.a)(t,[{key:"render",value:function(){return Object(j.jsx)("div",{id:"chart",children:Object(j.jsx)(E.a,{options:this.state.options,series:this.state.series,type:"radar",height:400})})}}]),t}(i.a.Component),u=t(9),h=function(){var A=Object(a.f)(),e=(A.Name,A.id),t=c[e-1];return Object(j.jsxs)("div",{className:"profile-page",children:[Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)(u.b,{to:"/",children:Object(j.jsxs)("button",{className:"btn btn-home",children:[Object(j.jsx)(C.a,{className:"btn-icon"})," Home"]})}),Object(j.jsxs)("button",{className:"btn btn-help",children:[" ",Object(j.jsx)(C.b,{className:"btn-icon"})," Help"]}),Object(j.jsx)("p",{className:"name-header",children:t.Name})]}),Object(j.jsxs)("div",{className:"flex-container",children:[Object(j.jsxs)("div",{className:"flex-item col-1",children:[Object(j.jsx)(d,{}),Object(j.jsxs)("div",{className:"progress-box",children:[Object(j.jsxs)("p",{children:["Finishing  ",Object(j.jsx)("progress",{value:t.Finishing,max:"100",children:"  "})]}),Object(j.jsxs)("p",{children:["Crossing  ",Object(j.jsx)("progress",{value:t.Crossing,max:"100",children:" "})]}),Object(j.jsxs)("p",{children:["HeadingAccuracy  ",Object(j.jsx)("progress",{value:t.HeadingAccuracy,max:"100",children:" "})]}),Object(j.jsxs)("p",{children:["ShortPassing  ",Object(j.jsx)("progress",{value:t.ShortPassing,max:"100",children:" "})]}),Object(j.jsxs)("p",{children:["Volleys  ",Object(j.jsx)("progress",{value:t.Volleys,max:"100",children:"  "})]})]})]}),Object(j.jsxs)("div",{className:"flex-item col-2",children:[Object(j.jsxs)("div",{className:"over-div",children:[Object(j.jsxs)("span",{className:"border-sp",children:["Overall",c[e-1].Overall]}),Object(j.jsx)("span",{className:"border-sp",children:"Potential80"})]}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{children:[" Age ",Object(j.jsx)("strong",{children:t.Age})]}),Object(j.jsxs)("p",{children:[" Nationality ",Object(j.jsx)("strong",{children:t.Nationality})]}),Object(j.jsxs)("p",{children:["Height ",Object(j.jsxs)("strong",{children:[t.Height," - ",(.3048*parseInt(t.Height)).toFixed(2),"m "]})]}),Object(j.jsxs)("p",{children:["Weight ",Object(j.jsxs)("strong",{children:[t.Weight," - ",parseInt(.45359237*parseInt(t.Weight)),"Kg"]})]}),Object(j.jsxs)("p",{children:["Wage ",Object(j.jsxs)("strong",{children:[t.Wage," "]})]}),Object(j.jsxs)("p",{children:["Value ",Object(j.jsxs)("strong",{children:[t.Value," "]})]}),Object(j.jsxs)("p",{children:["Prefered Foot ",Object(j.jsx)("strong",{children:t["Preferred Foot"]})]}),Object(j.jsxs)("p",{children:["Position ",Object(j.jsx)("strong",{children:t.Position})]}),Object(j.jsxs)("p",{children:["Jersey Number ",Object(j.jsx)("strong",{children:t["Jersey Number"]})]}),Object(j.jsxs)("p",{children:["Weak Foot ",Object(j.jsx)("span",{children:Object(j.jsx)(g.RatingView,{ratingValue:4,stars:4})})]}),Object(j.jsxs)("p",{children:["Skill Moves ",Object(j.jsx)("span",{children:Object(j.jsx)(g.RatingView,{ratingValue:5,stars:5})})]}),Object(j.jsxs)("p",{children:["Work Rate (Attack - Deffense) ",Object(j.jsx)("strong",{children:t["Work Rate"]})]}),Object(j.jsxs)("p",{children:["International Reputation ",Object(j.jsx)("span",{children:Object(j.jsx)(g.RatingView,{ratingValue:4,stars:4})})]}),Object(j.jsxs)("p",{children:["Club  ",Object(j.jsx)("strong",{children:t.Club})," - Joind :",Object(j.jsx)("strong",{children:t.Joined})]}),Object(j.jsxs)("p",{children:["Contract Valid Until ",Object(j.jsx)("strong",{children:t["Contract Valid Until"]})]})]})]})]})]})},b=t(15),x=(t(39),function(A){var e=A.data,t=Object(s.useState)([]),i=Object(b.a)(t,2),r=i[0],n=i[1],a=Object(s.useState)(""),c=Object(b.a)(a,2),C=(c[0],c[1]);return Object(j.jsx)("div",{className:"search-page",children:Object(j.jsxs)("div",{className:"search-container",children:[Object(j.jsx)("img",{src:"data:image/png;base64,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",width:"400",height:"200"}),Object(j.jsxs)("div",{className:"search-box",children:[Object(j.jsx)("input",{className:"search-input",type:"text",placeholder:" Search for player",onChange:function(A){var t=A.target.value.toLowerCase();C(t);var s=e.filter((function(A){var e=A.Name.toLowerCase(),s=A.Nationality.toLowerCase(),i=A.Position.toLowerCase(),r=A.Age.toString(),n=A["Preferred Foot"].toLowerCase();if(s.includes(t)||e.includes(t)||r.includes(t)||i.includes(t)||n.includes(t))return A}));n(""===t?[]:s)}}),0!=r.length&&Object(j.jsx)("div",{className:"search-result",children:r.map((function(A,e){return Object(j.jsx)(u.b,{to:"/playerprofile/".concat(A.Name,"/").concat(A.id),children:Object(j.jsx)("p",{className:"player-data-item",children:A.Name},A.id)})}))})]})]})})});var O=function(){return Object(j.jsx)(u.a,{children:Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(a.c,{children:[Object(j.jsx)(a.a,{exact:!0,path:"/",children:Object(j.jsx)(x,{data:c})}),Object(j.jsx)(a.a,{path:"/playerprofile/:Name/:id",children:Object(j.jsx)(h,{})})]})})})},I=function(A){A&&A instanceof Function&&t.e(3).then(t.bind(null,41)).then((function(e){var t=e.getCLS,s=e.getFID,i=e.getFCP,r=e.getLCP,n=e.getTTFB;t(A),s(A),i(A),r(A),n(A)}))};n.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),I()}},[[40,1,2]]]);
//# sourceMappingURL=main.45be93c6.chunk.js.map