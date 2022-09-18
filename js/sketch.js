  let tooltip = d3.select('body')         /////////////////////////////////////右边诗经信息
                .append('div')
                .style('position', 'fixed')
                .style('width', '45px')
                .style('height', '110px')
                .style('top', '50px')
                .style('left', '50px')
                .style('z-index', '10')
                .style('background-color', '#fae6c8')
                .style('color', '#000000')
                .style('visibility', 'hidden') // 是否可见（一开始设置为隐藏）
                .style('font-size', '12px')
                .style('font-weight', 'bold')
                .style("-webkit-writing-mode","vertical-rl")
                .style("writing-mode","vertical-rl")
                .style("letter-spacing","0px")
                .style("font-size","1.4rem")
                .style("font-family","黑体")
                .style("color","#444e55")
                .style("padding","8px")
                .style("filter","progid:DXImageTransform.Microsoft.Shadow(color=#909090,direction=120,strength=4)")
                .style("-moz-box-shadow","2px 2px 10px #909090")
                .style("-webkit-box-shadow","2px 2px 10px #909090")
                .style("box-shadow","2px 2px 10px #909090")
  
  let showjuan = tooltip.append("text")
             .attr("id","showjuan")
             .style("font-weight","normal")
             .style("font-size","12px")
             
             tooltip.append("br")
  let showtitle = tooltip.append("text")
             .attr("id","showtitle")
             .style("font-size","16px")
             

  let playtitle = d3.select('body')       //////////////////////////////////////左边诗经信息
                .append('div')
                .style('position', 'absolute')
                .style('width', '20px')
                .style('height', '200px')
                .style('top', '45px')
                .style('left', '450px')
                .style('z-index', '10')
                
                .style("opacity","0.5")
                .style('visibility', 'visible') // 是否可见（一开始设置为可见）
                .style('font-size', '12px')
                .style('font-weight', 'bold')
                .style("-webkit-writing-mode","vertical-rl")
                .style("writing-mode","vertical-rl")
                .style("letter-spacing","0px")
                .style("font-size","1.8rem")
                .style("font-family","黑体")
                .style("color","#ffffff")
                .style("padding","15px")


  let playpretitle = d3.select('body')       //////////////////////////////////////预先显示左边诗经信息
                .append('div')
                .style('position', 'absolute')
                .style('width', '20px')
                .style('height', '200px')
                .style('top', '45px')
                .style('left', '450px')
                .style('z-index', '100')
                .style("id","pretitle")
                .style("opacity","0.5")
                .style('visibility', 'visible') // 是否可见（一开始设置为可见）
                .style('font-size', '12px')
                .style('font-weight', 'bold')
                .style("-webkit-writing-mode","vertical-rl")
                .style("writing-mode","vertical-rl")
                .style("letter-spacing","0px")
                .style("font-size","1.8rem")
                .style("font-family","黑体")
                .style("color","#ffffff")
                .style("padding","15px")
                .text("国风·周南 关雎")








var fengdata = d3.csv("data/feng-titles.csv").then(function(data){ 
  //console.log(data[1].title);

  
  

  var glist = d3.select("body").select("#feng-titles-svg").selectAll("g")
                .data(data).enter()
                .append("g")
                .attr("id",function(d){
                  return d.id;
                })
                .attr("class",function(d){
                  return d.class;
                })
                
  
  rect0 = glist.append('rect')  //选择框
    .attr("class","rect0")
    .attr('x',function(d,i){
      return 260-25*(parseInt(i/20))-25;
    })
    .attr('y',function(d,i){
       return 10+25*(i%20)+1;
    })
    .attr('width',0)
    .attr('height',0)
    .attr('fill','#ffffff')
    .attr("fill-opacity","0")
    .attr("stroke",function(d,i){//////默认选中第一个关雎
      if(i == 0){
        return "#ff0000";
      }
    })
    .attr("stroke-width",function(d,i){
      if(i == 0){
        return "2";
      }
    })
    .attr("stroke-opacity","0.5")
    .transition()
          .delay(function(d,i){
            return 50*i;
          })
          .duration(200)
          .attr("width", "22px")
          .attr("height", "22px")
          .attr('x',function(d,i){
      return 250-25*(parseInt(i/20))-25-1;
    })
          .attr('y',function(d,i){
       return 25*(i%20)+1;
    })


  rect1 = glist.append('rect')  //章跨数
    .attr("class","rect1")
    .attr('x',function(d,i){
      return 260-25*(parseInt(i/20))-25;
    })
    .attr('y',function(d,i){
       return 10+25*(i%20)+2;
    })
    .attr('width',0)
    .attr('height',0)
    .attr('fill','#ffffff')
    .attr("fill-opacity",function(d){
      if(d.zhang == 0){
        return "0.08";
      }else{
        return "0.25";
      }
    })
    /*.attr("stroke",function(d){
      if(d.zhang == 0){
        return "#ffffff";
      }
    })
    .attr("stroke-width",function(d){
      if(d.zhang == 0){
        return "0.5";
      }
    })
    .attr("stroke-opacity","0.5")*/
    //.attr("stroke","#51863f")
    //.attr("stroke-width","1")
    .transition()
          .delay(function(d,i){
            return 50*i;
          })
          .duration(200)
          .attr("width", 20)
          .attr("height", 20)
          .attr('x',function(d,i){
      return 250-25*(parseInt(i/20))-25;
    })
          .attr('y',function(d,i){
       return 25*(i%20)+2;
    })


  glist.append('rect')  //复沓数
    .attr("class","rect2")
    .attr('x',function(d,i){
      return 260-25*(parseInt(i/20))-25;
    })
    .attr('y',function(d,i){
       return 10+25*(i%20)+2;
    })
    .attr('width',0)
    .attr('height',0)
    .attr('fill','#2f90d6')
    .transition()
          .delay(function(d,i){
            return 50*i;
          })
          .duration(400)
          .attr('width',function(d){
      return 20*Math.sqrt(d.futa/d.zhang);
    })
          .attr('height',function(d){
      return 20*Math.sqrt(d.futa/d.zhang);
    })
          .attr('x',function(d,i){
      return 250-25*(parseInt(i/20))-25+(20*(1-Math.sqrt(d.futa/d.zhang)))/2;
    })
          .attr('y',function(d,i){
      return 25*(i%20)+(20*(1-Math.sqrt(d.futa/d.zhang)))/2+2;
    })


  glist.append('rect')  //更换字复沓数
    .attr("class","rect3")
    .attr('x',function(d,i){
      return 260-25*(parseInt(i/20))-25;
    })
    .attr('y',function(d,i){
       return 10+25*(i%20)+2;
    })
    .attr('width',0)
    .attr('height',0)
    .attr('fill',"#20dab0")
    .transition()
          .delay(function(d,i){
            return 50*i;
          })
          .duration(600)
          .attr('width',function(d){
      return 20*Math.sqrt(d.genghuan/d.zhang);
    })
          .attr('height',function(d){
      return 20*Math.sqrt(d.genghuan/d.zhang);
    })
          .attr('x',function(d,i){
      return 250-25*(parseInt(i/20))-25+(20*(1-Math.sqrt(d.genghuan/d.zhang)))/2;
    })
          .attr('y',function(d,i){
       return 25*(i%20)+(20*(1-Math.sqrt(d.genghuan/d.zhang)))/2+2;
    })

  /*glist.append("text")
       .text(function(d){return d.title;})
       //.attr("-webkit-writing-mode","vertical-rl")
       //.attr("writing-mode","vertical-rl")
       .attr("x",function(d,i){return 200-i*20;})
       .attr('y',0)
       .style("fill","#30be9c")
       .style("fill-opacity",function(d){
            if(d.dens>=0 && d.dens<=0.2){
              return "0.2";
            }else if(d.dens>0.2 && d.dens<=0.4){
              return "0.4";
            }else if(d.dens>0.4 && d.dens<=0.6){
              return "0.6";
            }else if(d.dens>0.6 && d.dens<=0.8){
              return "0.8";
            }else if(d.dens>0.8 && d.dens<=1){
              return "1";
            }
       })*/

  
    




    let playsong = d3.select("body").select("#songs");  ///////////////////////////////////////////////绘制诗经和复沓效果
    let playall = playsong.selectAll(".chart");


    /*var svglist = playsong.selectAll("svg")  /////////////////////////先生成所有空svg后面填山水
                    .data(data).enter()
                    .append("svg")
                    .attr("id",function(d){
                      return d.id;
                    })
                    .attr("class","chart")
                    .attr("height","99%")
                    .attr("height","99%")
                    .attr("width","500px")*/


    d3.csv("data/songs/guanju.csv").then(function(data){
                      dlength = data.length;///////获得数组长度

                var preglist = playsong.select("#preguanju")////画正方形部分
                var glist = playsong.select("#preguanju").selectAll("g")//////////画山水部分
                                                            .data(data)
                                                            .enter()
                                                            .append("g")
 /*preglist.append("rect")  //生成正方形白
           .attr('x',472)
           .attr('y',35)
           .attr('width',0)
           .attr('height',0)
           .attr('fill','#ffffff')
           .attr("fill-opacity","0")
          .transition()
          .delay(function(d,i){
            return 100*dlength+2000;
          })
          .duration(2000)
          .attr("width", 20)
          .attr("height", 20)
          .attr('x',function(d,i){
      return 472-10;
    })
          .attr('y',function(d,i){
       return 35-10;
    })
          .attr("fill-opacity","0.25")
          .transition()
          .duration(2000)
          .delay(4000)
          .attr('width',0)
          .attr('height',0)
          .attr("fill-opacity","0")

 preglist.append("rect")  //生成正方形青
           .attr('x',472)
           .attr('y',35)
           .attr('width',0)
           .attr('height',0)
           .attr('fill','#2f90d6')
           .attr("fill-opacity","00")
          .transition()
          .delay(function(d,i){
            return 100*dlength+4000;
          })
          .duration(2000)
          .attr("width", 14.142)
          .attr("height", 14.142)
          .attr('x',function(d,i){
      return 472-14.142/2;
    })
          .attr('y',function(d,i){
       return 35-14.142/2;
    })
          .attr("fill-opacity","1")
          .transition()
          .duration(2000)
          .delay(2000)
          .attr('width',0)
          .attr('height',0)
          .attr("fill-opacity","0")

 preglist.append("rect")  //生成正方形绿
           .attr('x',472)
           .attr('y',35)
           .attr('width',0)
           .attr('height',0)
           .attr('fill','#20dab0')
           .attr("fill-opacity","0")
          .transition()
          .delay(function(d,i){
            return 100*dlength+6000;
          })
          .duration(2000)
          .attr("width", 7.746)
          .attr("height", 7.746)
          .attr('x',function(d,i){
      return 472-7.746/2;
    })
          .attr('y',function(d,i){
       return 35-7.746/2;
    })
          .attr("fill-opacity","1")
          .transition()
          .duration(2000)
          .delay(0)
          .attr('width',0)
          .attr('height',0)
          .attr("fill-opacity","0")*/

 glist.append("path")  //生成弧线
      .attr("d",function(d){
      if(d.lcol != 0 && d.lcol != -1){
        if(d.prow == d.lrow){  //水平波浪
            if(d.lcol-d.pcol == 1){
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){ //更换字
                var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = 0;
              var hu = "m "+lcol+" "+lrow+" c 10 "+high+" "+(40+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              }else{  //重复字
                var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = 0;
              var hu = "m "+lcol+" "+lrow+" c 10 "+high+" "+(40+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              }
              
            }else if(d.lcol-d.pcol == 2){ 
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){  //更换字
                var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = 0;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
            }else{  //重复字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = 0;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              
            }
            }
          
        }else if(d.prow<d.lrow && d.lcol != -1){ //斜向下波浪
          var lrow = 425-30*d.lrow;
          var lcol = 55+25*d.lcol;
          var prow = 50*(d.lrow-d.prow);
          var pcol = 25*(d.pcol-d.lcol);
          var high = -5;
          var hu = "m "+lrow+" "+lcol+" c 5 "+high+" "+(25+30*(d.lrow-d.prow-1))+" "+high+" "+prow+" "+pcol;
        return hu;
        }else if(d.prow>d.lrow && d.lcol != -1){  //斜向上波浪
          var lrow = 425-30*d.lrow;
          var lcol = 55+25*d.lcol;
          var prow = 50*(d.lrow-d.prow);
          var pcol = 25*(d.pcol-d.lcol);
          var high = -5;
          var hu = "m "+lrow+" "+lcol+" c 5 "+high+" "+(25+30*(d.lrow-d.prow-1))+" "+high+" "+prow+" "+pcol;
        return hu;


        }
      }
            
      })
      //.attr("d","m 10 55 c 5 -20 25 -20 30 0")
      .attr("fill", function(d){
        if(d.seq == 1){
          return "url(#lv)";
        }else if(d.seq == 2){
          return "url(#lv)";
        }else if(d.seq == 3){
          return "url(#lv)";
        }else if(d.seq == 4){
          return "url(#lv)";
        }else{
          return "url(#qing)";
        }
      })
      .attr("fill-opacity","0")
      //.attr("fill-opacity", "0")
      .attr("stroke", function(d){
        if(d.seq == 0){
          return "#30bcbe";
        }else if(d.seq == 1){
          return "url(#change1)";
        }else if(d.seq == 2){
          return "url(#change1)";
        }else if(d.seq == 3){
          return "url(#change1)";
        }else if(d.seq == 4){
          return "url(#change1)";
        }
      })
      //.attr("stroke-linecap", "round")
      .attr("stroke-position","inside")
      .attr("stroke-width","0")
      .transition()
      .duration(1000)
      .delay(function(d,i){
        return i*1000;
      })
      .attr("fill-opacity","1")
      .attr("d",function(d){
      if(d.lcol != 0 && d.lcol != -1){
        if(d.prow == d.lrow){  //水平波浪
            if(d.lcol-d.pcol == 1){ 
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){ //更换字
                var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -100;
              var hu = "m "+lcol+" "+lrow+" c 10 "+high+" "+(40+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              }else{  //重复字
                var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -75;
              var hu = "m "+lcol+" "+lrow+" c 10 "+high+" "+(40+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              }
              
            }else if(d.lcol-d.pcol == 2){ 
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){  //更换字
                var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -100;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
            }else{  //重复字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -75;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              
            }
            }
          
        }else if(d.prow<d.lrow && d.lcol != -1){ //斜向下波浪
          var lrow = 425-30*d.lrow;
          var lcol = 55+25*d.lcol;
          var prow = 50*(d.lrow-d.prow);
          var pcol = 25*(d.pcol-d.lcol);
          var high = -5;
          var hu = "m "+lrow+" "+lcol+" c 5 "+high+" "+(25+30*(d.lrow-d.prow-1))+" "+high+" "+prow+" "+pcol;
        return hu;
        }else if(d.prow>d.lrow && d.lcol != -1){  //斜向上波浪
          var lrow = 425-30*d.lrow;
          var lcol = 55+25*d.lcol;
          var prow = 50*(d.lrow-d.prow);
          var pcol = 25*(d.pcol-d.lcol);
          var high = -5;
          var hu = "m "+lrow+" "+lcol+" c 5 "+high+" "+(25+30*(d.lrow-d.prow-1))+" "+high+" "+prow+" "+pcol;
        return hu;


        }
      }
            
      })


      glist.append("text")  //生成字
      .text(function(d){return d.font;})
      .attr("x",function(d,i){
        return 425-50*(d.pcol-1);
      })
      .attr('y',function(d,i){
        return 62+24*(d.prow-1);
      })
      .attr("fill",function(d){
        if(d.color == 0){
          return "#ffffff";
        }else if(d.color == 1){
          return "#2f90d6";
        }
        else if(d.color == 2){
          return "#20dab0";
        }
      })
      .attr("fill-opacity",function(d){
        if(d.color == 0){
          return "0";
        }else if(d.color == 1){
          return "0";
        }
        else if(d.color == 2){
          return "0";
        }
      })
      .style("font-size","14px")
      .transition()//////////////////////显字
      .duration(1000)
      .delay(function(d,i){
        return i*1000;
      })
      .attr("fill-opacity",function(d){
        if(d.color == 0){
          return "0.35";
        }else if(d.color == 1){
          return "1";
        }
        else if(d.color == 2){
          return "1";
        }
      })
      /*.transition()/////////////////////移走字
      .duration(2000)
      .delay(function(d,i){
        if(d.color == 0){
          return 100*(dlength-i);
        }else if(d.color == 1){
          return 100*(dlength-i)+2000;
        }else if(d.color == 2){
          return 100*(dlength-i)+4000;
        }
      })
      .attr("x",function(d,i){
        return 472;
      })
      .attr('y',function(d,i){
        return 28;
      })
      .attr("fill-opacity","0")
      .transition()////////////////////移回字
      .duration(2000)
      .delay(function(d,i){
        if(d.color == 0){
          return 100*dlength-4000;
        }else if(d.color == 1){
          return 100*dlength-6000;
        }else if(d.color == 2){
          return 100*dlength-8000;
        }
      })
      .attr("x",function(d,i){
        return 425-50*(d.pcol-1);
      })
      .attr('y',function(d,i){
        return 62+24*(d.prow-1);
      })
      .attr("fill",function(d){
        if(d.color == 0){
          return "#ffffff";
        }else if(d.color == 1){
          return "#2f90d6";
        }
        else if(d.color == 2){
          return "#20dab0";
        }
      })
      .attr("fill-opacity",function(d){
        if(d.color == 0){
          return "0.35";
        }else if(d.color == 1){
          return "1";
        }
        else if(d.color == 2){
          return "1";
        }
      })*/
      /*.attr("fill-opacity",function(d){
        if(d.color == 0){
          return "0.35";
        }else if(d.color == 1){
          return "1";
        }
        else if(d.color == 2){
          return "1";
        }
      })*/

      


                      


    })








    glist.on('click', function (d, i) {      //////////////////////////////////////////////点选后的绘制

                    playpretitle.style('visibility', 'hidden') // 隐藏掉预先显示的title

                    d3.select("#titles").selectAll("g"+" "+"rect:first-child")   //////////重制选中状态
                      .attr("stroke","#ff0000")
                      .attr("stroke-width","0")
                    d3.select("#titles").select("#"+i.id+" "+"rect:first-child") //////////选中状态
                      .attr("stroke","#ff0000")
                      .attr("stroke-width","2")






                    d3.csv("data/songs/"+i.id+".csv").then(function(data){ 
                          //console.log(data[1].font);

    var  playone = playsong.select("#"+i.id).style("visibility","visible")
    var  glist = playone.selectAll("g")
                         .data(data)
                         .enter()
                         .append("g")
 
glist.append("path")  //生成金边
      .attr("d",function(d){
      if(d.lcol != 0){ //非最后一行
        if(d.prow == d.lrow){  //水平波浪
            

          
        }else if(d.prow<d.lrow){ //斜向下波浪
          var lrow = 74+24*(d.lrow-1);
              var lcol = 424-50*(d.lcol-1);
              var prow = 0;
              var pcol = 50*(d.lcol-d.pcol);
              var high = 0;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
        }else if(d.prow>d.lrow){  //斜向上波浪
          var lrow = 74+24*(d.lrow-1);
              var lcol = 424-50*(d.lcol-1);
              var prow = 0;
              var pcol = 50*(d.lcol-d.pcol);
              var high = 0;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;


        }
      }
            
      })
      //.attr("d","m 10 55 c 5 -20 25 -20 30 0")
      .attr("fill", function(d){
        
          return "url(#jin)";

      })
      .attr("fill-opacity","0")
      //.attr("fill-opacity", "0")
      .attr("stroke", function(d){
        if(d.seq == 0){
          return "#30bcbe";
        }else if(d.seq == 1){
          return "url(#change1)";
        }else if(d.seq == 2){
          return "url(#change1)";
        }else if(d.seq == 3){
          return "url(#change1)";
        }else if(d.seq == 4){
          return "url(#change1)";
        }
      })
      //.attr("stroke-linecap", "round")
      .attr("stroke-position","inside")
      .attr("stroke-width","0")
      .transition()
      .duration(800)
      .delay(function(d,i){
        return i*80;
      })
      .attr("fill-opacity","1")
      .attr("d",function(d){
      if(d.lcol != 0){ ///////////////////////////////////////////////////非最后一行
        if(d.prow == d.lrow){  /////////////////////////////水平波浪
            
          
        }else if(d.prow<d.lrow){ ////////////////////////////斜向下波浪
          if(d.lcol-d.pcol == 1){ /////////////小跨度
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){ //更换字
              var lrow = 74+24*(d.lrow-1);
              var lcol = 424-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -100;
              var hu = "m "+lcol+" "+lrow+" c 10 "+high+" "+(40+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              }else{  //重复字
              var lrow = 74+24*(d.lrow-1);
              var lcol = 424-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var lhigh = -75;
              var rhigh = -75+35*(d.prow-d.lrow);
              var hu = "m "+lcol+" "+lrow+" c 0 "+lhigh+" "+(25+50*(d.lcol-d.pcol-1))+" "+rhigh+" "+pcol+" "+prow;
              return hu;
              }
              
            }else if(d.lcol-d.pcol == 2 || d.lcol-d.pcol == 3 || d.lcol-d.pcol == 4){ ////////大跨度
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){  //更换字
              var lrow = 74+24*(d.lrow-1);
              var lcol = 424-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -100;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
            }else{  //重复字
              var lrow = 74+24*(d.lrow-1);
              var lcol = 424-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -75;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              
            }
            }
        }else if(d.prow>d.lrow){  ////////////////////////////斜向上波浪
          if(d.lcol-d.pcol == 1){ /////////////小跨度
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){ //更换字
              var lrow = 74+24*(d.lrow-1);
              var lcol = 424-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -100;
              var hu = "m "+lcol+" "+lrow+" c 10 "+high+" "+(40+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              }else{  //重复字
              var lrow = 74+24*(d.lrow-1);
              var lcol = 424-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -75;
              var hu = "m "+lcol+" "+lrow+" c 10 "+high+" "+(40+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              }
              
            }else if(d.lcol-d.pcol == 2 || d.lcol-d.pcol == 3 || d.lcol-d.pcol == 4){ ////////大跨度
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){  //更换字
              var lrow = 74+24*(d.lrow-1);
              var lcol = 424-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -100;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
            }else{  //重复字
              var lrow = 74+24*(d.lrow-1);
              var lcol = 424-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -75;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              
            }
            }


        }
      }
            
      })

 glist.append("path")  //生成弧线
      .attr("d",function(d){
      if(d.lcol != 0){ //非最后一行
        if(d.prow == d.lrow){  //水平波浪
            if(d.lcol-d.pcol == 1){ 
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){ //更换字
              var lrow = 75+25*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = 0;
              var hu = "m "+lcol+" "+lrow+" c 10 "+high+" "+(40+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              }else{  //重复字
              var lrow = 75+25*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = 0;
              var hu = "m "+lcol+" "+lrow+" c 10 "+high+" "+(40+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              }
          
            }else if(d.lcol-d.pcol == 2 || d.lcol-d.pcol == 3 || d.lcol-d.pcol == 4){ 
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){  //更换字
              var lrow = 75+25*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = 0;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
            }else{  //重复字
              var lrow = 75+25*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = 0;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              
            }
            }

          
        }else if(d.prow<d.lrow){ //斜向下波浪
          var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 0;
              var pcol = 50*(d.lcol-d.pcol);
              var high = 0;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
        }else if(d.prow>d.lrow){  //斜向上波浪
          var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 0;
              var pcol = 50*(d.lcol-d.pcol);
              var high = 0;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;


        }
      }
            
      })
      //.attr("d","m 10 55 c 5 -20 25 -20 30 0")
      .attr("fill", function(d){
        if(d.seq == 1){
          return "url(#lv)";
        }else if(d.seq == 2){
          return "url(#lv)";
        }else if(d.seq == 3){
          return "url(#lv)";
        }else if(d.seq == 4){
          return "url(#lv)";
        }else{
          return "url(#qing)";
        }
      })
      .attr("fill-opacity","0")
      //.attr("fill-opacity", "0")
      .attr("stroke", function(d){
        if(d.seq == 0){
          return "#30bcbe";
        }else if(d.seq == 1){
          return "url(#change1)";
        }else if(d.seq == 2){
          return "url(#change1)";
        }else if(d.seq == 3){
          return "url(#change1)";
        }else if(d.seq == 4){
          return "url(#change1)";
        }
      })
      //.attr("stroke-linecap", "round")
      .attr("stroke-position","inside")
      .attr("stroke-width","0")
      .transition()
      .duration(1000)
      .delay(function(d,i){
        return i*1000;
      })
      .attr("fill-opacity","1")
      .attr("d",function(d){
      if(d.lcol != 0){ ///////////////////////////////////////////////////非最后一行
        if(d.prow == d.lrow){  /////////////////////////////水平波浪
            if(d.lcol-d.pcol == 1){ /////////////小跨度
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){ //更换字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -100;
              var hu = "m "+lcol+" "+lrow+" c 10 "+high+" "+(40+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              }else{  //重复字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -75;
              var hu = "m "+lcol+" "+lrow+" c 10 "+high+" "+(40+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              }
              
            }else if(d.lcol-d.pcol == 2 || d.lcol-d.pcol == 3 || d.lcol-d.pcol == 4){ ////////大跨度
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){  //更换字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -100;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
            }else{  //重复字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -75;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              
            }
            }
          
        }else if(d.prow<d.lrow){ ////////////////////////////斜向下波浪
          if(d.lcol-d.pcol == 1){ /////////////小跨度
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){ //更换字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -100;
              var hu = "m "+lcol+" "+lrow+" c 10 "+high+" "+(40+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              }else{  //重复字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var lhigh = -75;
              var rhigh = -75+35*(d.prow-d.lrow);
              var hu = "m "+lcol+" "+lrow+" c 0 "+lhigh+" "+(25+50*(d.lcol-d.pcol-1))+" "+rhigh+" "+pcol+" "+prow;
              return hu;
              }
              
            }else if(d.lcol-d.pcol == 2 || d.lcol-d.pcol == 3 || d.lcol-d.pcol == 4){ ////////大跨度
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){  //更换字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -100;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
            }else{  //重复字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -75;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              
            }
            }
        }else if(d.prow>d.lrow){  ////////////////////////////斜向上波浪
          if(d.lcol-d.pcol == 1){ /////////////小跨度
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){ //更换字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -100;
              var hu = "m "+lcol+" "+lrow+" c 10 "+high+" "+(40+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              }else{  //重复字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -75;
              var hu = "m "+lcol+" "+lrow+" c 10 "+high+" "+(40+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              }
              
            }else if(d.lcol-d.pcol == 2 || d.lcol-d.pcol == 3 || d.lcol-d.pcol == 4){ ////////大跨度
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){  //更换字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -100;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
            }else{  //重复字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -75;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              
            }
            }


        }
      }
            
      })
 
      //.attr("display","none");


  /*glist.append("circle")  //生成圆
       .attr("r", function(d,i){
         if(d.lcol == 0){
          return 0;
         }else{
          return 5;
         }
       })
       .attr("cx", function(d,i){
        return 425-(d.pcol-1)*50;
       })
       .attr("cy", function(d,i){
        return 40+(d.prow-1)*15;
       })
       .attr("fill", function(d,i){
          if(d.lcol != 0){
            if(d.seq == 0 || d.seq == -1){
              return "#30bcbe";
            }else if(d.seq == 1){
              return "#00ffd4";
            }else if(d.seq == 2){
              return "#00ffd4";
            }else if(d.seq == 3){
              return "#00ffd4";
            }else if(d.seq == 4){
              return "#00ffd4";
            }
          }
       })*/

 glist.append("text")  //生成字
      .text(function(d){return d.font;})
      .attr("x",function(d,i){
        return 425-50*(d.pcol-1);
      })
      .attr('y',function(d,i){
        return 62+24*(d.prow-1);
      })
      .attr("fill",function(d){
        if(d.color == 0){
          return "#ffffff";
        }else if(d.color == 1){
          return "#2f90d6";
        }
        else if(d.color == 2){
          return "#20dab0";
        }
      })
      .attr("fill-opacity","0")
      .style("font-size","14px")
      .transition()
      .duration(1000)
      .delay(function(d,i){
        return i*1000;
      })
      .attr("fill-opacity",function(d){
        if(d.color == 0){
          return "0.35";
        }else if(d.color == 1){
          return "1";
        }
        else if(d.color == 2){
          return "1";
        }
      })


      })
          
          playall.style('visibility', 'hidden');
          playsong.style('visibility', 'visible');
          playtitle.style('visibility', 'visible').text(i.chapter+" "+i.title);

                })
                .on('mouseover', function (d, i) {
                    ///console.log(i);
                    tooltip.style('visibility', 'visible');
                    showjuan.text(i.chapter);
                    showtitle.text(i.title);
                    
                  })
                .on('mousemove', function (d, i) {
                    tooltip.style('top', (event.pageY-10)+'px').style('left',(event.pageX+10)+'px');
                })
                .on('mouseout', function (d, i) {
                    tooltip.style('visibility', 'hidden');
                    //playtitle.style('visibility', 'hidden');
                    
                })




  /*let playbg = d3.select("body").select("#songs").select("#vein");     ////////////////////绘制背景纹理
    var list = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1)
    playbg.selectAll("circle").data(list).enter()
                         .append("circle")
                         .attr("cx", function(d,i){
                          if(parseInt(i/50)%2 == 1){
                            return 1000-25*(i%50)-12.5;
                          }else{
                            return 1000-25*(i%50);
                          }
                          
                         })
                         .attr("cy", function(d,i){
                          return 10+6.25*(parseInt(i/50));
                         })
                         .attr("r",12.5)
                         .attr("fill","#ffffff")
                         //.attr("fill-opacity", "0")
                         .attr("stroke","url(#lang)")
                         .attr("stroke-width","1")
                         .transition()
                         .duration(10000)
                         .delay(0)
                         .ease(d3.easeLinear)
                         .attr('cx',function(d,i){
                            if(parseInt(i/50)%3 == 1){
                            return 1150-25*(i%50)-12.5;
                            }else if(parseInt(i/50)%3 == 2){
                            return 1100-25*(i%50);
                            }else{
                            return 1050-25*(i%50);
                            }
                          })*/
                         








    var glist2 = d3.select("body").select("#ya-titles-svg")
    var glist3 = d3.select("body").select("#song-titles-svg")

    var sort1 = d3.select("body").select("#mulu")                ///////////////////////////////////原排序
    var sort2 = d3.select("body").select("#futa")                ///////////////////////////////////排序更新1
    var sort3 = d3.select("body").select("#genghuanzi")          ///////////////////////////////////排序更新2

    sort1.on('click', function (){
      //console.log("test");
      sort1.style("color","#c25633").style("border-color","#c25633")     ////////////按钮设定
      sort2.style("color","#444e55").style("border-color","#444e55")                                    
      sort3.style("color","#444e55").style("border-color","#444e55")


      
      glist.selectAll(".rect0")
      .transition()
      .duration(600)
      .attr('x',function(d){
      return 250-25*(parseInt(d.sort/20))-25-1;
    })
      .attr('y',function(d){
       return 25*(d.sort%20)+1;
    })

      glist.selectAll(".rect1")
      .transition()
      .duration(600)
      .attr('x',function(d){
      return 250-25*(parseInt(d.sort/20))-25;
    })
      .attr('y',function(d){
       return 25*(d.sort%20)+2;
    })

     glist.selectAll(".rect2")
      .transition()
      .duration(600)
      .attr('x',function(d){
      return 250-25*(parseInt(d.sort/20))-25+(20*(1-Math.sqrt(d.futa/d.zhang)))/2;
    })
      .attr('y',function(d){
      return 25*(d.sort%20)+(20*(1-Math.sqrt(d.futa/d.zhang)))/2+2;
    })

      glist.selectAll(".rect3")
      .transition()
      .duration(600)
      .attr('x',function(d){
      return 250-25*(parseInt(d.sort/20))-25+(20*(1-Math.sqrt(d.genghuan/d.zhang)))/2;
    })
      .attr('y',function(d){
       return 25*(d.sort%20)+(20*(1-Math.sqrt(d.genghuan/d.zhang)))/2+2;
    })

   
      glist2.selectAll(".rect0")
      .transition()
      .duration(600)
      .attr('x',function(d){
      return 200-25*(parseInt(d.sort/20))-25-1;
    })
      .attr('y',function(d){
       return 25*(d.sort%20)+1;
    })

      glist2.selectAll(".rect1")
      .transition()
      .duration(600)
      .attr('x',function(d){
      return 200-25*(parseInt(d.sort/20))-25;
    })
      .attr('y',function(d){
       return 25*(d.sort%20)+2;
    })

     glist2.selectAll(".rect2")
      .transition()
      .duration(600)
      .attr('x',function(d){
      return 200-25*(parseInt(d.sort/20))-25+(20*(1-Math.sqrt(d.futa/d.zhang)))/2;
    })
      .attr('y',function(d){
      return 25*(d.sort%20)+(20*(1-Math.sqrt(d.futa/d.zhang)))/2+2;
    })

      glist2.selectAll(".rect3")
      .transition()
      .duration(600)
      .attr('x',function(d){
      return 200-25*(parseInt(d.sort/20))-25+(20*(1-Math.sqrt(d.genghuan/d.zhang)))/2;
    })
      .attr('y',function(d){
       return 25*(d.sort%20)+(20*(1-Math.sqrt(d.genghuan/d.zhang)))/2+2;
    })
      

      glist3.selectAll(".rect0")
      .transition()
      .duration(600)
      .attr('x',function(d){
      return 50-25*(parseInt(d.sort/20))-25+1;
    })
      .attr('y',function(d){
       return 25*(d.sort%20)-1;
    })

      glist3.selectAll(".rect1")
      .transition()
      .duration(600)
      .attr('x',function(d){
      return 50-25*(parseInt(d.sort/20))-25;
    })
      .attr('y',function(d){
       return 25*(d.sort%20)+2;
    })

     glist3.selectAll(".rect2")
      .transition()
      .duration(600)
      .attr('x',function(d){
      return 50-25*(parseInt(d.sort/20))-25+(20*(1-Math.sqrt(d.futa/d.zhang)))/2;
    })
      .attr('y',function(d){
      return 25*(d.sort%20)+(20*(1-Math.sqrt(d.futa/d.zhang)))/2+2;
    })

      glist3.selectAll(".rect3")
      .transition()
      .duration(600)
      .attr('x',function(d){
      return 50-25*(parseInt(d.sort/20))-25+(20*(1-Math.sqrt(d.genghuan/d.zhang)))/2;
    })
      .attr('y',function(d){
       return 25*(d.sort%20)+(20*(1-Math.sqrt(d.genghuan/d.zhang)))/2+2;
    })


    })




    

    sort2.on('click', function (){
      sort1.style("color","#444e55").style("border-color","#444e55")     ////////////按钮设定
      sort2.style("color","#c25633").style("border-color","#c25633")                                    
      sort3.style("color","#444e55").style("border-color","#444e55")

      glist.selectAll(".rect0")
      .transition()
      .duration(600)
      .attr('x',function(d){
      return 250-25*(parseInt(d.sort1/20))-25-1;
    })
      .attr('y',function(d){
       return 25*(d.sort1%20)+1;
    })

      glist.selectAll(".rect1")
      .transition()
      .duration(600)
      .attr('x',function(d){
      return 250-25*(parseInt(d.sort1/20))-25;
    })
      .attr('y',function(d){
       return 25*(d.sort1%20)+2;
    })

     glist.selectAll(".rect2")
      .transition()
      .duration(600)
      .attr('x',function(d){
      return 250-25*(parseInt(d.sort1/20))-25+(20*(1-Math.sqrt(d.futa/d.zhang)))/2;
    })
      .attr('y',function(d){
      return 25*(d.sort1%20)+(20*(1-Math.sqrt(d.futa/d.zhang)))/2+2;
    })

      glist.selectAll(".rect3")
      .transition()
      .duration(600)
      .attr('x',function(d){
      return 250-25*(parseInt(d.sort1/20))-25+(20*(1-Math.sqrt(d.genghuan/d.zhang)))/2;
    })
      .attr('y',function(d){
       return 25*(d.sort1%20)+(20*(1-Math.sqrt(d.genghuan/d.zhang)))/2+2;
    })

   
      glist2.selectAll(".rect0")
      .transition()
      .duration(600)
      .attr('x',function(d){
      return 200-25*(parseInt(d.sort1/20))-25-1;
    })
      .attr('y',function(d){
       return 25*(d.sort1%20)+1;
    })

      glist2.selectAll(".rect1")
      .transition()
      .duration(600)
      .attr('x',function(d){
      return 200-25*(parseInt(d.sort1/20))-25;
    })
      .attr('y',function(d){
       return 25*(d.sort1%20)+2;
    })

     glist2.selectAll(".rect2")
      .transition()
      .duration(600)
      .attr('x',function(d){
      return 200-25*(parseInt(d.sort1/20))-25+(20*(1-Math.sqrt(d.futa/d.zhang)))/2;
    })
      .attr('y',function(d){
      return 25*(d.sort1%20)+(20*(1-Math.sqrt(d.futa/d.zhang)))/2+2;
    })

      glist2.selectAll(".rect3")
      .transition()
      .duration(600)
      .attr('x',function(d){
      return 200-25*(parseInt(d.sort1/20))-25+(20*(1-Math.sqrt(d.genghuan/d.zhang)))/2;
    })
      .attr('y',function(d){
       return 25*(d.sort1%20)+(20*(1-Math.sqrt(d.genghuan/d.zhang)))/2+2;
    })
      

      glist3.selectAll(".rect0")
      .transition()
      .duration(600)
      .attr('x',function(d){
      return 50-25*(parseInt(d.sort1/20))-25-1;
    })
      .attr('y',function(d){
       return 25*(d.sort1%20)+1;
    })

      glist3.selectAll(".rect1")
      .transition()
      .duration(600)
      .attr('x',function(d){
      return 50-25*(parseInt(d.sort1/20))-25;
    })
      .attr('y',function(d){
       return 25*(d.sort1%20)+2;
    })

     glist3.selectAll(".rect2")
      .transition()
      .duration(600)
      .attr('x',function(d){
      return 50-25*(parseInt(d.sort1/20))-25+(20*(1-Math.sqrt(d.futa/d.zhang)))/2;
    })
      .attr('y',function(d){
      return 25*(d.sort1%20)+(20*(1-Math.sqrt(d.futa/d.zhang)))/2+2;
    })

      glist3.selectAll(".rect3")
      .transition()
      .duration(600)
      .attr('x',function(d){
      return 50-25*(parseInt(d.sort1/20))-25+(20*(1-Math.sqrt(d.genghuan/d.zhang)))/2;
    })
      .attr('y',function(d){
       return 25*(d.sort1%20)+(20*(1-Math.sqrt(d.genghuan/d.zhang)))/2+2;
    })


    })



    

    sort3.on('click', function (){
      sort1.style("color","#444e55").style("border-color","#444e55")     ////////////按钮设定
      sort2.style("color","#444e55").style("border-color","#444e55")                                    
      sort3.style("color","#c25633").style("border-color","#c25633")

      glist.selectAll(".rect0")
      .transition()
      .duration(600)
      .attr('x',function(d){
      return 250-25*(parseInt(d.sort2/20))-25-1;
    })
      .attr('y',function(d){
       return 25*(d.sort2%20)+1;
    })

      glist.selectAll(".rect1")
      .transition()
      .duration(600)
      .attr('x',function(d){
      return 250-25*(parseInt(d.sort2/20))-25;
    })
      .attr('y',function(d){
       return 25*(d.sort2%20)+2;
    })

     glist.selectAll(".rect2")
      .transition()
      .duration(600)
      .attr('x',function(d){
      return 250-25*(parseInt(d.sort2/20))-25+(20*(1-Math.sqrt(d.futa/d.zhang)))/2;
    })
      .attr('y',function(d){
      return 25*(d.sort2%20)+(20*(1-Math.sqrt(d.futa/d.zhang)))/2+2;
    })

      glist.selectAll(".rect3")
      .transition()
      .duration(600)
      .attr('x',function(d){
      return 250-25*(parseInt(d.sort2/20))-25+(20*(1-Math.sqrt(d.genghuan/d.zhang)))/2;
    })
      .attr('y',function(d){
       return 25*(d.sort2%20)+(20*(1-Math.sqrt(d.genghuan/d.zhang)))/2+2;
    })

   
      glist2.selectAll(".rect0")
      .transition()
      .duration(600)
      .attr('x',function(d){
      return 200-25*(parseInt(d.sort2/20))-25-1;
    })
      .attr('y',function(d){
       return 25*(d.sort2%20)+1;
    })

      glist2.selectAll(".rect1")
      .transition()
      .duration(600)
      .attr('x',function(d){
      return 200-25*(parseInt(d.sort2/20))-25;
    })
      .attr('y',function(d){
       return 25*(d.sort2%20)+2;
    })

     glist2.selectAll(".rect2")
      .transition()
      .duration(600)
      .attr('x',function(d){
      return 200-25*(parseInt(d.sort2/20))-25+(20*(1-Math.sqrt(d.futa/d.zhang)))/2;
    })
      .attr('y',function(d){
      return 25*(d.sort2%20)+(20*(1-Math.sqrt(d.futa/d.zhang)))/2+2;
    })

      glist2.selectAll(".rect3")
      .transition()
      .duration(600)
      .attr('x',function(d){
      return 200-25*(parseInt(d.sort2/20))-25+(20*(1-Math.sqrt(d.genghuan/d.zhang)))/2;
    })
      .attr('y',function(d){
       return 25*(d.sort2%20)+(20*(1-Math.sqrt(d.genghuan/d.zhang)))/2+2;
    })
      

      glist3.selectAll(".rect0")
      .transition()
      .duration(600)
      .attr('x',function(d){
      return 50-25*(parseInt(d.sort2/20))-25-1;
    })
      .attr('y',function(d){
       return 25*(d.sort2%20)+1;
    })

      glist3.selectAll(".rect1")
      .transition()
      .duration(600)
      .attr('x',function(d){
      return 50-25*(parseInt(d.sort2/20))-25;
    })
      .attr('y',function(d){
       return 25*(d.sort2%20)+2;
    })

     glist3.selectAll(".rect2")
      .transition()
      .duration(600)
      .attr('x',function(d){
      return 50-25*(parseInt(d.sort2/20))-25+(20*(1-Math.sqrt(d.futa/d.zhang)))/2;
    })
      .attr('y',function(d){
      return 25*(d.sort2%20)+(20*(1-Math.sqrt(d.futa/d.zhang)))/2+2;
    })

      glist3.selectAll(".rect3")
      .transition()
      .duration(600)
      .attr('x',function(d){
      return 50-25*(parseInt(d.sort2/20))-25+(20*(1-Math.sqrt(d.genghuan/d.zhang)))/2;
    })
      .attr('y',function(d){
       return 25*(d.sort2%20)+(20*(1-Math.sqrt(d.genghuan/d.zhang)))/2+2;
    })


    })



  var selec0 = d3.select("body").select("#quanbu")            /////////////////////////////////恢复全部
  var selec1 = d3.select("body").select("#chongzhangfuta")      /////////////////////////////////100%～80%
  var selec2 = d3.select("body").select("#daliangfuta")        /////////////////////////////////80%～60%
  var selec3 = d3.select("body").select("#dulijiafutazhang")  /////////////////////////////////60%～40%
  var selec4 = d3.select("body").select("#bufenjuzifuta")     /////////////////////////////////40%～20%
  var selec5 = d3.select("body").select("#jihubufuta")        /////////////////////////////////20%～0%



  selec0.on("click",function(){
    console.log("test");
    selec0.style("color","#c25633").style("border-color","#c25633")     ////////////按钮设定
    selec1.style("color","#444e55").style("border-color","#444e55")                                    
    selec2.style("color","#444e55").style("border-color","#444e55")
    selec3.style("color","#444e55").style("border-color","#444e55")
    selec4.style("color","#444e55").style("border-color","#444e55")
    selec5.style("color","#444e55").style("border-color","#444e55")
    d3.select("body").select("#titles").selectAll(".rect1").attr("fill-opacity","0.25")
    d3.select("body").select("#titles").selectAll(".rect2").style("display","block")
    d3.select("body").select("#titles").selectAll(".rect3").style("display","block")
  })


  
  selec1.on("click",function(){
    console.log("test");
    selec0.style("color","#444e55").style("border-color","#444e55")     ////////////按钮设定
    selec1.style("color","#c25633").style("border-color","#c25633")                                    
    selec2.style("color","#444e55").style("border-color","#444e55")
    selec3.style("color","#444e55").style("border-color","#444e55")
    selec4.style("color","#444e55").style("border-color","#444e55")
    selec5.style("color","#444e55").style("border-color","#444e55")
    d3.select("body").select("#titles").selectAll("g").select(".rect1")
      .attr("fill-opacity",function(d){
        if(d.futa/d.zhang <= 1 && d.futa/d.zhang >0.8){
          return "0.25";
        }else{
          return "0.08";
        }
      })
    d3.select("body").select("#titles").selectAll("g").select(".rect2")
      .style("display",function(d){
        if(d.futa/d.zhang <= 1 && d.futa/d.zhang >0.8){
          return "block";
        }else{
          return "none";
        }
      })
    d3.select("body").select("#titles").selectAll("g").select(".rect3")
      .style("display",function(d){
        if(d.futa/d.zhang <= 1 && d.futa/d.zhang >0.8){
          return "block";
        }else{
          return "none";
        }
      })
  })


  
  selec2.on("click",function(){
    console.log("test");
    selec0.style("color","#444e55").style("border-color","#444e55")     ////////////按钮设定
    selec1.style("color","#444e55").style("border-color","#444e55")                                    
    selec2.style("color","#c25633").style("border-color","#c25633")
    selec3.style("color","#444e55").style("border-color","#444e55")
    selec4.style("color","#444e55").style("border-color","#444e55")
    selec5.style("color","#444e55").style("border-color","#444e55")
    d3.select("body").select("#titles").selectAll("g").select(".rect1")
      .attr("fill-opacity",function(d){
        if(d.futa/d.zhang <= 0.8 && d.futa/d.zhang >0.6){
          return "0.25";
        }else{
          return "0.08";
        }
      })
    d3.select("body").select("#titles").selectAll("g").select(".rect2")
      .style("display",function(d){
        if(d.futa/d.zhang <= 0.8 && d.futa/d.zhang >0.6){
          return "block";
        }else{
          return "none";
        }
      })
    d3.select("body").select("#titles").selectAll("g").select(".rect3")
      .style("display",function(d){
        if(d.futa/d.zhang <= 0.8 && d.futa/d.zhang >0.6){
          return "block";
        }else{
          return "none";
        }
      })
  })

  
  selec3.on("click",function(){
    console.log("test");
    selec0.style("color","#444e55").style("border-color","#444e55")     ////////////按钮设定
    selec1.style("color","#444e55").style("border-color","#444e55")                                    
    selec2.style("color","#444e55").style("border-color","#444e55")
    selec3.style("color","#c25633").style("border-color","#c25633")
    selec4.style("color","#444e55").style("border-color","#444e55")
    selec5.style("color","#444e55").style("border-color","#444e55")
    d3.select("body").select("#titles").selectAll("g").select(".rect1")
      .attr("fill-opacity",function(d){
        if(d.futa/d.zhang <= 0.6 && d.futa/d.zhang >0.4){
          return "0.25";
        }else{
          return "0.08";
        }
      })
    d3.select("body").select("#titles").selectAll("g").select(".rect2")
      .style("display",function(d){
        if(d.futa/d.zhang <= 0.6 && d.futa/d.zhang >0.4){
          return "block";
        }else{
          return "none";
        }
      })
    d3.select("body").select("#titles").selectAll("g").select(".rect3")
      .style("display",function(d){
        if(d.futa/d.zhang <= 0.6 && d.futa/d.zhang >0.4){
          return "block";
        }else{
          return "none";
        }
      })
  })

  
  selec4.on("click",function(){
    console.log("test");
    selec0.style("color","#444e55").style("border-color","#444e55")     ////////////按钮设定
    selec1.style("color","#444e55").style("border-color","#444e55")                                    
    selec2.style("color","#444e55").style("border-color","#444e55")
    selec3.style("color","#444e55").style("border-color","#444e55")
    selec4.style("color","#c25633").style("border-color","#c25633")
    selec5.style("color","#444e55").style("border-color","#444e55")
    d3.select("body").select("#titles").selectAll("g").select(".rect1")
      .attr("fill-opacity",function(d){
        if(d.futa/d.zhang <= 0.4 && d.futa/d.zhang >0.2){
          return "0.25";
        }else{
          return "0.08";
        }
      })
    d3.select("body").select("#titles").selectAll("g").select(".rect2")
      .style("display",function(d){
        if(d.futa/d.zhang <= 0.4 && d.futa/d.zhang >0.2){
          return "block";
        }else{
          return "none";
        }
      })
    d3.select("body").select("#titles").selectAll("g").select(".rect3")
      .style("display",function(d){
        if(d.futa/d.zhang <= 0.4 && d.futa/d.zhang >0.2){
          return "block";
        }else{
          return "none";
        }
      })
  })


  selec5.on("click",function(){
    console.log("test");
    selec0.style("color","#444e55").style("border-color","#444e55")     ////////////按钮设定
    selec1.style("color","#444e55").style("border-color","#444e55")                                    
    selec2.style("color","#444e55").style("border-color","#444e55")
    selec3.style("color","#444e55").style("border-color","#444e55")
    selec4.style("color","#444e55").style("border-color","#444e55")
    selec5.style("color","#c25633").style("border-color","#c25633")
    d3.select("body").select("#titles").selectAll("g").select(".rect1")
      .attr("fill-opacity",function(d){
        if(d.futa/d.zhang <= 0.2 && d.futa/d.zhang >=0){
          return "0.25";
        }else{
          return "0.08";
        }
      })
    d3.select("body").select("#titles").selectAll("g").select(".rect2")
      .style("display",function(d){
        if(d.futa/d.zhang <= 0.1 && d.futa/d.zhang >=0){
          return "block";
        }else{
          return "none";
        }
      })
    d3.select("body").select("#titles").selectAll("g").select(".rect3")
      .style("display",function(d){
        if(d.futa/d.zhang <= 0.1 && d.futa/d.zhang >=0){
          return "block";
        }else{
          return "none";
        }
      })
  })







    var operat0 = d3.select("body").select("#quanbuxianshi")     /////////////////////////////////全部显示
    var operat1 = d3.select("body").select("#xianshiwenzi")      /////////////////////////////////显示文字
    var operat2 = d3.select("body").select("#yincangwenzi")      /////////////////////////////////显示文字
    
    operat0.on("click",function(){
        operat0.style("color","#c25633").style("border-color","#c25633")
        operat1.style("color","#444e55").style("border-color","#444e55")     ////////////按钮设定
        operat2.style("color","#444e55").style("border-color","#444e55")
        d3.select("body").select("#songs").selectAll(".chart").selectAll("text")
        .transition()
        .duration(2000)
        .attr("x",function(d,i){
        return 472;
      })
        .attr('y',function(d,i){
        return 28;
      })
        .attr("fill-opacity","0")
        d3.select("body").select("#songs").selectAll(".chart").selectAll("path")
        .transition()
        .duration(2000)
        .attr("d",function(d){
      if(d.lcol != 0){ ///////////////////////////////////////////////////非最后一行
        if(d.prow == d.lrow){  /////////////////////////////水平波浪
            if(d.lcol-d.pcol == 1){ /////////////小跨度
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){ //更换字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -100;
              var hu = "m "+lcol+" "+lrow+" c 10 "+high+" "+(40+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              }else{  //重复字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -75;
              var hu = "m "+lcol+" "+lrow+" c 10 "+high+" "+(40+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              }
              
            }else if(d.lcol-d.pcol == 2 || d.lcol-d.pcol == 3 || d.lcol-d.pcol == 4){ ////////大跨度
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){  //更换字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -100;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
            }else{  //重复字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -75;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              
            }
            }
          
        }else if(d.prow<d.lrow){ ////////////////////////////斜向下波浪
          if(d.lcol-d.pcol == 1){ /////////////小跨度
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){ //更换字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -100;
              var hu = "m "+lcol+" "+lrow+" c 10 "+high+" "+(40+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              }else{  //重复字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var lhigh = -75;
              var rhigh = -75+35*(d.prow-d.lrow);
              var hu = "m "+lcol+" "+lrow+" c 0 "+lhigh+" "+(25+50*(d.lcol-d.pcol-1))+" "+rhigh+" "+pcol+" "+prow;
              return hu;
              }
              
            }else if(d.lcol-d.pcol == 2 || d.lcol-d.pcol == 3 || d.lcol-d.pcol == 4){ ////////大跨度
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){  //更换字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -100;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
            }else{  //重复字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -75;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              
            }
            }
        }else if(d.prow>d.lrow){  ////////////////////////////斜向上波浪
          if(d.lcol-d.pcol == 1){ /////////////小跨度
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){ //更换字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -100;
              var hu = "m "+lcol+" "+lrow+" c 10 "+high+" "+(40+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              }else{  //重复字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -75;
              var hu = "m "+lcol+" "+lrow+" c 10 "+high+" "+(40+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              }
              
            }else if(d.lcol-d.pcol == 2 || d.lcol-d.pcol == 3 || d.lcol-d.pcol == 4){ ////////大跨度
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){  //更换字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -100;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
            }else{  //重复字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -75;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              
            }
            }


        }
      }
            
      })
        d3.select("body").select("#songs").selectAll(".wave").selectAll("path").style("display","block")

    })
    operat1.on("click",function(){
        operat0.style("color","#444e55").style("border-color","#444e55")
        operat1.style("color","#c25633").style("border-color","#c25633")     ////////////按钮设定
        operat2.style("color","#444e55").style("border-color","#444e55")
        d3.select("body").select("#songs").selectAll(".chart").selectAll("text")
        .transition()
        .duration(2000)
        .attr("x",function(d,i){
        return 425-50*(d.pcol-1);
      })
        .attr('y',function(d,i){
        return 62+24*(d.prow-1);
      })
        .attr("fill",function(d){
        if(d.color == 0){
          return "#ffffff";
        }else if(d.color == 1){
          return "#2f90d6";
        }
        else if(d.color == 2){
          return "#20dab0";
        }
      })
        .attr("fill-opacity",function(d){
        if(d.color == 0){
          return "0.35";
        }else if(d.color == 1){
          return "1";
        }
        else if(d.color == 2){
          return "1";
        }
      })
        d3.select("body").select("#songs").selectAll(".chart").selectAll("path")
        .transition()
        .duration(2000)
        .attr("d",function(d){
      if(d.lcol != 0){ //非最后一行
        if(d.prow == d.lrow){  //水平波浪
            if(d.lcol-d.pcol == 1){ 
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){ //更换字
              var lrow = 75+25*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = 0;
              var hu = "m "+lcol+" "+lrow+" c 10 "+high+" "+(40+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              }else{  //重复字
              var lrow = 75+25*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = 0;
              var hu = "m "+lcol+" "+lrow+" c 10 "+high+" "+(40+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              }
          
            }else if(d.lcol-d.pcol == 2 || d.lcol-d.pcol == 3 || d.lcol-d.pcol == 4){ 
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){  //更换字
              var lrow = 75+25*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = 0;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
            }else{  //重复字
              var lrow = 75+25*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = 0;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              
            }
            }

          
        }else if(d.prow<d.lrow){ //斜向下波浪
          var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 0;
              var pcol = 50*(d.lcol-d.pcol);
              var high = 0;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
        }else if(d.prow>d.lrow){  //斜向上波浪
          var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 0;
              var pcol = 50*(d.lcol-d.pcol);
              var high = 0;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;


        }
      }
            
      })
        d3.select("body").select("#songs").selectAll(".wave").selectAll("path").style("display","none")

    })
    operat2.on("click",function(){
        operat0.style("color","#444e55").style("border-color","#444e55")
        operat1.style("color","#444e55").style("border-color","#444e55")     ////////////按钮设定
        operat2.style("color","#c25633").style("border-color","#c25633")
        d3.select("body").select("#songs").selectAll(".chart").selectAll("text")
        .transition()
        .duration(2000)
        .attr("x",function(d,i){
        return 425-50*(d.pcol-1);
      })
        .attr('y',function(d,i){
        return 62+24*(d.prow-1);
      })
        .attr("fill",function(d){
        if(d.color == 0){
          return "#ffffff";
        }else if(d.color == 1){
          return "#2f90d6";
        }
        else if(d.color == 2){
          return "#20dab0";
        }
      })
        .attr("fill-opacity",function(d){
        if(d.color == 0){
          return "0.35";
        }else if(d.color == 1){
          return "1";
        }
        else if(d.color == 2){
          return "1";
        }
      })
        d3.select("body").select("#songs").selectAll(".chart").selectAll("path")
        .transition()
        .duration(2000)
        .attr("d",function(d){
      if(d.lcol != 0){ ///////////////////////////////////////////////////非最后一行
        if(d.prow == d.lrow){  /////////////////////////////水平波浪
            if(d.lcol-d.pcol == 1){ /////////////小跨度
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){ //更换字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -100;
              var hu = "m "+lcol+" "+lrow+" c 10 "+high+" "+(40+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              }else{  //重复字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -75;
              var hu = "m "+lcol+" "+lrow+" c 10 "+high+" "+(40+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              }
              
            }else if(d.lcol-d.pcol == 2 || d.lcol-d.pcol == 3 || d.lcol-d.pcol == 4){ ////////大跨度
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){  //更换字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -100;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
            }else{  //重复字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -75;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              
            }
            }
          
        }else if(d.prow<d.lrow){ ////////////////////////////斜向下波浪
          if(d.lcol-d.pcol == 1){ /////////////小跨度
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){ //更换字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -100;
              var hu = "m "+lcol+" "+lrow+" c 10 "+high+" "+(40+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              }else{  //重复字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var lhigh = -75;
              var rhigh = -75+35*(d.prow-d.lrow);
              var hu = "m "+lcol+" "+lrow+" c 0 "+lhigh+" "+(25+50*(d.lcol-d.pcol-1))+" "+rhigh+" "+pcol+" "+prow;
              return hu;
              }
              
            }else if(d.lcol-d.pcol == 2 || d.lcol-d.pcol == 3 || d.lcol-d.pcol == 4){ ////////大跨度
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){  //更换字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -100;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
            }else{  //重复字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -75;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              
            }
            }
        }else if(d.prow>d.lrow){  ////////////////////////////斜向上波浪
          if(d.lcol-d.pcol == 1){ /////////////小跨度
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){ //更换字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -100;
              var hu = "m "+lcol+" "+lrow+" c 10 "+high+" "+(40+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              }else{  //重复字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -75;
              var hu = "m "+lcol+" "+lrow+" c 10 "+high+" "+(40+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              }
              
            }else if(d.lcol-d.pcol == 2 || d.lcol-d.pcol == 3 || d.lcol-d.pcol == 4){ ////////大跨度
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){  //更换字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -100;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
            }else{  //重复字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -75;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              
            }
            }


        }
      }
            
      })
        d3.select("body").select("#songs").selectAll(".wave").selectAll("path").style("display","block")

    })










});














































d3.csv("data/ya-titles.csv").then(function(data){ 
  //console.log(data[1].title);





  var glist = d3.select("body").select("#ya-titles-svg").selectAll("g")
                .data(data).enter()
                .append("g")
                .attr("id",function(d){
                  return d.id;
                })
                .attr("class",function(d){
                  return d.class;
                });



  glist.append('rect')  //选择框
    .attr("class","rect0")
    .attr('x',function(d,i){
      return 210-25*(parseInt(i/20))-25;
    })
    .attr('y',function(d,i){
       return 10+25*(i%20)+1;
    })
    .attr('width',0)
    .attr('height',0)
    .attr('fill','#ffffff')
    .attr("fill-opacity","0")
    .attr("stroke-opacity","0.5")
    .transition()
          .delay(function(d,i){
            return 50*i;
          })
          .duration(200)
          .attr("width", 22)
          .attr("height", 22)
          .attr('x',function(d,i){
      return 200-25*(parseInt(i/20))-25-1;
    })
          .attr('y',function(d,i){
       return 25*(i%20)+1;
    })


  glist.append('rect')  //章跨数
    .attr("class","rect1")
    .attr('x',function(d,i){
      return 210-25*(parseInt(i/20))-25;
    })
    .attr('y',function(d,i){
       return 10+25*(i%20)+2;
    })
    .attr('width',0)
    .attr('height',0)
    .attr('fill','#ffffff')
    .attr("fill-opacity",function(d){
      if(d.zhang == 0){
        return "0.08";
      }else{
        return "0.25";
      }
    })
    /*.attr("stroke",function(d){
      if(d.zhang == 0){
        return "#ffffff";
      }
    })
    .attr("stroke-width",function(d){
      if(d.zhang == 0){
        return "0.5";
      }
    })
    .attr("stroke-opacity","0.5")*/
    .transition()
          .delay(function(d,i){
            return 50*i;
          })
          .duration(200)
          .attr("width", 20)
          .attr("height", 20)
          .attr('x',function(d,i){
      return 200-25*(parseInt(i/20))-25;
    })
          .attr('y',function(d,i){
       return 25*(i%20)+2;
    })


  glist.append('rect')  //复沓数
    .attr("class","rect2")
    .attr('x',function(d,i){
      return 210-25*(parseInt(i/20))-25;
    })
    .attr('y',function(d,i){
       return 10+25*(i%20)+2;
    })
    .attr('width',0)
    .attr('height',0)
    .attr('fill','#2f90d6')
    .transition()
          .delay(function(d,i){
            return 50*i;
          })
          .duration(400)
          .attr('width',function(d){
      return 20*Math.sqrt(d.futa/d.zhang);
    })
          .attr('height',function(d){
      return 20*Math.sqrt(d.futa/d.zhang);
    })
          .attr('x',function(d,i){
      return 200-25*(parseInt(i/20))-25+(20*(1-Math.sqrt(d.futa/d.zhang)))/2;
    })
          .attr('y',function(d,i){
       return 25*(i%20)+(20*(1-Math.sqrt(d.futa/d.zhang)))/2+2;
    })


  glist.append('rect')  //更换字复沓数
    .attr("class","rect3")
    .attr('x',function(d,i){
      return 210-25*(parseInt(i/20))-25;
    })
    .attr('y',function(d,i){
       return 10+25*(i%20)+2;
    })
    .attr('width',0)
    .attr('height',0)
    .attr('fill',"#20dab0")
    .transition()
          .delay(function(d,i){
            return 50*i;
          })
          .duration(600)
          .attr('width',function(d){
      return 20*Math.sqrt(d.genghuan/d.zhang);
    })
          .attr('height',function(d){
      return 20*Math.sqrt(d.genghuan/d.zhang);
    })
          .attr('x',function(d,i){
      return 200-25*(parseInt(i/20))-25+(20*(1-Math.sqrt(d.genghuan/d.zhang)))/2;
    })
          .attr('y',function(d,i){
       return 25*(i%20)+(20*(1-Math.sqrt(d.genghuan/d.zhang)))/2+2;
    })

  /*glist.append("text")
       .text(function(d){return d.title;})
       //.attr("-webkit-writing-mode","vertical-rl")
       //.attr("writing-mode","vertical-rl")
       .attr("x",function(d,i){return 200-i*20;})
       .attr('y',0)
       .style("fill","#30be9c")
       .style("fill-opacity",function(d){
            if(d.dens>=0 && d.dens<=0.2){
              return "0.2";
            }else if(d.dens>0.2 && d.dens<=0.4){
              return "0.4";
            }else if(d.dens>0.4 && d.dens<=0.6){
              return "0.6";
            }else if(d.dens>0.6 && d.dens<=0.8){
              return "0.8";
            }else if(d.dens>0.8 && d.dens<=1){
              return "1";
            }
       })*/


        let playsong = d3.select("body").select("#songs");  //////////////绘制诗经和复沓效果
    let playall = playsong.selectAll(".chart");




    glist.on('click', function (d, i) {
                    playpretitle.style('visibility', 'hidden') // 隐藏掉预先显示的title

                    d3.select("#titles").selectAll("g"+" "+"rect:first-child")   //////////重制选中状态
                      .attr("stroke","#ff0000")
                      .attr("stroke-width","0")
                    d3.select("#titles").select("#"+i.id+" "+"rect:first-child") //////////选中状态
                      .attr("stroke","#ff0000")
                      .attr("stroke-width","2")



                    d3.csv("data/songs/"+i.id+".csv").then(function(data){ 
                          //console.log(data[1].font);

    var  playone = playsong.select("#"+i.id).style("visibility","visible")
    var  glist = playone.selectAll("g")
                         .data(data)
                         .enter()
                         .append("g")
 


 glist.append("path")  //生成金边
      .attr("d",function(d){
      if(d.lcol != 0){ //非最后一行
        if(d.prow == d.lrow){  //水平波浪
            

          
        }else if(d.prow<d.lrow){ //斜向下波浪
          var lrow = 74+24*(d.lrow-1);
              var lcol = 424-50*(d.lcol-1);
              var prow = 0;
              var pcol = 50*(d.lcol-d.pcol);
              var high = 0;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
        }else if(d.prow>d.lrow){  //斜向上波浪
          var lrow = 74+24*(d.lrow-1);
              var lcol = 424-50*(d.lcol-1);
              var prow = 0;
              var pcol = 50*(d.lcol-d.pcol);
              var high = 0;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;


        }
      }
            
      })
      //.attr("d","m 10 55 c 5 -20 25 -20 30 0")
      .attr("fill", function(d){
        
          return "url(#jin)";

      })
      .attr("fill-opacity","0")
      //.attr("fill-opacity", "0")
      .attr("stroke", function(d){
        if(d.seq == 0){
          return "#30bcbe";
        }else if(d.seq == 1){
          return "url(#change1)";
        }else if(d.seq == 2){
          return "url(#change1)";
        }else if(d.seq == 3){
          return "url(#change1)";
        }else if(d.seq == 4){
          return "url(#change1)";
        }
      })
      //.attr("stroke-linecap", "round")
      .attr("stroke-position","inside")
      .attr("stroke-width","0")
      .transition()
      .duration(800)
      .delay(function(d,i){
        return i*80;
      })
      .attr("fill-opacity","0.6")
      .attr("d",function(d){
      if(d.lcol != 0){ ///////////////////////////////////////////////////非最后一行
        if(d.prow == d.lrow){  /////////////////////////////水平波浪
            
          
        }else if(d.prow<d.lrow){ ////////////////////////////斜向下波浪
          if(d.lcol-d.pcol == 1){ /////////////小跨度
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){ //更换字
              var lrow = 74+24*(d.lrow-1);
              var lcol = 424-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -100;
              var hu = "m "+lcol+" "+lrow+" c 10 "+high+" "+(40+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              }else{  //重复字
              var lrow = 74+24*(d.lrow-1);
              var lcol = 424-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var lhigh = -75;
              var rhigh = -75+35*(d.prow-d.lrow);
              var hu = "m "+lcol+" "+lrow+" c 0 "+lhigh+" "+(25+50*(d.lcol-d.pcol-1))+" "+rhigh+" "+pcol+" "+prow;
              return hu;
              }
              
            }else if(d.lcol-d.pcol == 2 || d.lcol-d.pcol == 3 || d.lcol-d.pcol == 4){ ////////大跨度
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){  //更换字
              var lrow = 74+24*(d.lrow-1);
              var lcol = 424-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -100;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
            }else{  //重复字
              var lrow = 74+24*(d.lrow-1);
              var lcol = 424-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -75;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              
            }
            }
        }else if(d.prow>d.lrow){  ////////////////////////////斜向上波浪
          if(d.lcol-d.pcol == 1){ /////////////小跨度
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){ //更换字
              var lrow = 74+24*(d.lrow-1);
              var lcol = 424-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -100;
              var hu = "m "+lcol+" "+lrow+" c 10 "+high+" "+(40+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              }else{  //重复字
              var lrow = 74+24*(d.lrow-1);
              var lcol = 424-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -75;
              var hu = "m "+lcol+" "+lrow+" c 10 "+high+" "+(40+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              }
              
            }else if(d.lcol-d.pcol == 2 || d.lcol-d.pcol == 3 || d.lcol-d.pcol == 4){ ////////大跨度
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){  //更换字
              var lrow = 74+24*(d.lrow-1);
              var lcol = 424-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -100;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
            }else{  //重复字
              var lrow = 74+24*(d.lrow-1);
              var lcol = 424-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -75;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              
            }
            }


        }
      }
            
      })

 glist.append("path")  //生成弧线
      .attr("d",function(d){
      if(d.lcol != 0){ //非最后一行
        if(d.prow == d.lrow){  //水平波浪
            if(d.lcol-d.pcol == 1){ 
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){ //更换字
              var lrow = 75+25*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = 0;
              var hu = "m "+lcol+" "+lrow+" c 10 "+high+" "+(40+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              }else{  //重复字
              var lrow = 75+25*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = 0;
              var hu = "m "+lcol+" "+lrow+" c 10 "+high+" "+(40+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              }
          
            }else if(d.lcol-d.pcol == 2 || d.lcol-d.pcol == 3 || d.lcol-d.pcol == 4){ 
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){  //更换字
              var lrow = 75+25*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = 0;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
            }else{  //重复字
              var lrow = 75+25*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = 0;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              
            }
            }

          
        }else if(d.prow<d.lrow){ //斜向下波浪
          var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 0;
              var pcol = 50*(d.lcol-d.pcol);
              var high = 0;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
        }else if(d.prow>d.lrow){  //斜向上波浪
          var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 0;
              var pcol = 50*(d.lcol-d.pcol);
              var high = 0;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;


        }
      }
            
      })
      //.attr("d","m 10 55 c 5 -20 25 -20 30 0")
      .attr("fill", function(d){
        if(d.seq == 1){
          return "url(#lv)";
        }else if(d.seq == 2){
          return "url(#lv)";
        }else if(d.seq == 3){
          return "url(#lv)";
        }else if(d.seq == 4){
          return "url(#lv)";
        }else{
          return "url(#qing)";
        }
      })
      .attr("fill-opacity","0")
      //.attr("fill-opacity", "0")
      .attr("stroke", function(d){
        if(d.seq == 0){
          return "#30bcbe";
        }else if(d.seq == 1){
          return "url(#change1)";
        }else if(d.seq == 2){
          return "url(#change1)";
        }else if(d.seq == 3){
          return "url(#change1)";
        }else if(d.seq == 4){
          return "url(#change1)";
        }
      })
      //.attr("stroke-linecap", "round")
      .attr("stroke-position","inside")
      .attr("stroke-width","0")
      .transition()
      .duration(800)
      .delay(function(d,i){
        return i*80;
      })
      .attr("fill-opacity","0.6")
      .attr("d",function(d){
      if(d.lcol != 0){ ///////////////////////////////////////////////////非最后一行
        if(d.prow == d.lrow){  /////////////////////////////水平波浪
            if(d.lcol-d.pcol == 1){ /////////////小跨度
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){ //更换字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -100;
              var hu = "m "+lcol+" "+lrow+" c 10 "+high+" "+(40+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              }else{  //重复字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -75;
              var hu = "m "+lcol+" "+lrow+" c 10 "+high+" "+(40+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              }
              
            }else if(d.lcol-d.pcol == 2 || d.lcol-d.pcol == 3 || d.lcol-d.pcol == 4){ ////////大跨度
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){  //更换字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -100;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
            }else{  //重复字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -75;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              
            }
            }
          
        }else if(d.prow<d.lrow){ ////////////////////////////斜向下波浪
          if(d.lcol-d.pcol == 1){ /////////////小跨度
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){ //更换字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -100;
              var hu = "m "+lcol+" "+lrow+" c 10 "+high+" "+(40+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              }else{  //重复字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var lhigh = -75;
              var rhigh = -75+35*(d.prow-d.lrow);
              var hu = "m "+lcol+" "+lrow+" c 0 "+lhigh+" "+(25+50*(d.lcol-d.pcol-1))+" "+rhigh+" "+pcol+" "+prow;
              return hu;
              }
              
            }else if(d.lcol-d.pcol == 2 || d.lcol-d.pcol == 3 || d.lcol-d.pcol == 4){ ////////大跨度
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){  //更换字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -100;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
            }else{  //重复字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -75;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              
            }
            }
        }else if(d.prow>d.lrow){  ////////////////////////////斜向上波浪
          if(d.lcol-d.pcol == 1){ /////////////小跨度
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){ //更换字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -100;
              var hu = "m "+lcol+" "+lrow+" c 10 "+high+" "+(40+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              }else{  //重复字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -75;
              var hu = "m "+lcol+" "+lrow+" c 10 "+high+" "+(40+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              }
              
            }else if(d.lcol-d.pcol == 2 || d.lcol-d.pcol == 3 || d.lcol-d.pcol == 4){ ////////大跨度
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){  //更换字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -100;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
            }else{  //重复字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -75;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              
            }
            }


        }
      }
            
      })
 
      //.attr("display","none");


  /*glist.append("circle")  //生成圆
       .attr("r", function(d,i){
         if(d.lcol == 0){
          return 0;
         }else{
          return 5;
         }
       })
       .attr("cx", function(d,i){
        return 425-(d.pcol-1)*50;
       })
       .attr("cy", function(d,i){
        return 40+(d.prow-1)*15;
       })
       .attr("fill", function(d,i){
          if(d.lcol != 0){
            if(d.seq == 0 || d.seq == -1){
              return "#30bcbe";
            }else if(d.seq == 1){
              return "#00ffd4";
            }else if(d.seq == 2){
              return "#00ffd4";
            }else if(d.seq == 3){
              return "#00ffd4";
            }else if(d.seq == 4){
              return "#00ffd4";
            }
          }
       })*/

 glist.append("text")  //生成字
      .text(function(d){return d.font;})
      .attr("x",function(d,i){
        return 425-50*(d.pcol-1);
      })
      .attr('y',function(d,i){
        return 62+24*(d.prow-1);
      })
      .attr("fill",function(d){
        if(d.color == 0){
          return "#ffffff";
        }else if(d.color == 1){
          return "#2f90d6";
        }
        else if(d.color == 2){
          return "#20dab0";
        }
      })
      .attr("fill-opacity","0")
      .style("font-size","14px")
      .transition()
      .duration(800)
      .delay(function(d,i){
        return i*80;
      })
      .attr("fill-opacity",function(d){
        if(d.color == 0){
          return "0.35";
        }else if(d.color == 1){
          return "1";
        }
        else if(d.color == 2){
          return "1";
        }
      })




      })

          playall.style('visibility', 'hidden');
          playsong.style('visibility', 'visible');
          playtitle.style('visibility', 'visible').text(i.chapter+" "+i.title);

                })
                .on('mouseover', function (d, i) {
                    ///console.log(i);
                    tooltip.style('visibility', 'visible');
                    showjuan.text(i.chapter);
                    showtitle.text(i.title);
                    //playtitle.style('visibility', 'visible').text(i.chapter+" "+i.title);
                  })
                .on('mousemove', function (d, i) {
                    tooltip.style('top', (event.pageY-10)+'px').style('left',(event.pageX+10)+'px');
                })
                .on('mouseout', function (d, i) {
                    tooltip.style('visibility', 'hidden');
                    //playtitle.style('visibility', 'hidden');
                    
                })

















});



















































d3.csv("data/song-titles.csv").then(function(data){ 
  //console.log(data[1].title);



  var glist = d3.select("body").select("#song-titles-svg").selectAll("g")
                .data(data).enter()
                .append("g")
                .attr("id",function(d){
                  return d.id;
                })
                .attr("class",function(d){
                  return d.class;
                });

  
  glist.append('rect')  //选择框
    .attr("class","rect0")
    .attr('x',function(d,i){
      return 62-25*(parseInt(i/20))-25;
    })
    .attr('y',function(d,i){
       return 10+25*(i%20)+1;
    })
    .attr('width',0)
    .attr('height',0)
    .attr('fill','#ffffff')
    .attr("fill-opacity","0")
    .attr("stroke-opacity","0.5")
    .transition()
          .delay(function(d,i){
            return 50*i;
          })
          .duration(200)
          .attr("width", 22)
          .attr("height", 22)
          .attr('x',function(d,i){
      return 52-25*(parseInt(i/20))-25;
    })
          .attr('y',function(d,i){
       return 25*(i%20)+1;
    })

  glist.append('rect')  //章跨数
    .attr("class","rect1")
    .attr('x',function(d,i){
      return 62-25*(parseInt(i/20))-25+1;
    })
    .attr('y',function(d,i){
       return 10+25*(i%20)+2;
    })
    .attr('width',0)
    .attr('height',0)
    .attr('fill','#ffffff')
    .attr("fill-opacity",function(d){
      if(d.zhang == 0){
        return "0";
      }else{
        return "0.25";
      }
    })
    .attr("stroke",function(d){
      if(d.zhang == 0){
        return "#ffffff";
      }
    })
    .attr("stroke-width",function(d){
      if(d.zhang == 0){
        return "0.5";
      }
    })
    .attr("stroke-opacity","0.5")
    .transition()
          .delay(function(d,i){
            return 50*i;
          })
          .duration(200)
          .attr("width", 20)
          .attr("height", 20)
          .attr('x',function(d,i){
      return 52-25*(parseInt(i/20))-25+1;
    })
          .attr('y',function(d,i){
       return 25*(i%20)+2;
    })


  glist.append('rect')  //复沓数
    .attr("class","rect2")
    .attr('x',function(d,i){
      return 62-25*(parseInt(i/20))-25+1;
    })
    .attr('y',function(d,i){
       return 10+25*(i%20)+2;
    })
    .attr('width',0)
    .attr('height',0)
    .attr('fill','#2f90d6')
    .transition()
          .delay(function(d,i){
            return 50*i;
          })
          .duration(400)
          .attr('width',function(d){
      return 20*Math.sqrt(d.futa/d.zhang);
    })
          .attr('height',function(d){
      return 20*Math.sqrt(d.futa/d.zhang);
    })
          .attr('x',function(d,i){
      return 52-25*(parseInt(i/20))-25+(20*(1-Math.sqrt(d.futa/d.zhang)))/2+1;
    })
          .attr('y',function(d,i){
       return 25*(i%20)+(20*(1-Math.sqrt(d.futa/d.zhang)))/2+2;
    })


  glist.append('rect')  //更换字复沓数
    .attr("class","rect3")
    .attr('x',function(d,i){
      return 62-25*(parseInt(i/20))-25;
    })
    .attr('y',function(d,i){
       return 10+25*(i%20)+1;
    })
    .attr('width',0)
    .attr('height',0)
    .attr('fill',"#20dab0")
    .transition()
          .delay(function(d,i){
            return 50*i;
          })
          .duration(600)
          .attr('width',function(d){
      return 20*Math.sqrt(d.genghuan/d.zhang);
    })
          .attr('height',function(d){
      return 20*Math.sqrt(d.genghuan/d.zhang);
    })
          .attr('x',function(d,i){
      return 52-25*(parseInt(i/20))-25+(20*(1-Math.sqrt(d.genghuan/d.zhang)))/2+1;
    })
          .attr('y',function(d,i){
       return 25*(i%20)+(20*(1-Math.sqrt(d.genghuan/d.zhang)))/2+2;
    })

  /*glist.append("text")
       .text(function(d){return d.title;})
       //.attr("-webkit-writing-mode","vertical-rl")
       //.attr("writing-mode","vertical-rl")
       .attr("x",function(d,i){return 200-i*20;})
       .attr('y',0)
       .style("fill","#30be9c")
       .style("fill-opacity",function(d){
            if(d.dens>=0 && d.dens<=0.2){
              return "0.2";
            }else if(d.dens>0.2 && d.dens<=0.4){
              return "0.4";
            }else if(d.dens>0.4 && d.dens<=0.6){
              return "0.6";
            }else if(d.dens>0.6 && d.dens<=0.8){
              return "0.8";
            }else if(d.dens>0.8 && d.dens<=1){
              return "1";
            }
       })*/


        let playsong = d3.select("body").select("#songs");  //////////////绘制诗经和复沓效果
    let playall = playsong.selectAll(".chart");




    glist.on('click', function (d, i) {
                    playpretitle.style('visibility', 'hidden') // 隐藏掉预先显示的title

                    d3.select("#titles").selectAll("g"+" "+"rect:first-child")   //////////重制选中状态
                      .attr("stroke","#ff0000")
                      .attr("stroke-width","0")
                    d3.select("#titles").select("#"+i.id+" "+"rect:first-child") //////////选中状态
                      .attr("stroke","#ff0000")
                      .attr("stroke-width","2")



                    d3.csv("data/songs/"+i.id+".csv").then(function(data){ 
                          //console.log(data[1].font);

    var  playone = playsong.select("#"+i.id).style("visibility","visible")
    var  glist = playone.selectAll("g")
                         .data(data)
                         .enter()
                         .append("g")
 


 glist.append("path")  //生成金边
      .attr("d",function(d){
      if(d.lcol != 0){ //非最后一行
        if(d.prow == d.lrow){  //水平波浪
            

          
        }else if(d.prow<d.lrow){ //斜向下波浪
          var lrow = 74+24*(d.lrow-1);
              var lcol = 424-50*(d.lcol-1);
              var prow = 0;
              var pcol = 50*(d.lcol-d.pcol);
              var high = 0;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
        }else if(d.prow>d.lrow){  //斜向上波浪
          var lrow = 74+24*(d.lrow-1);
              var lcol = 424-50*(d.lcol-1);
              var prow = 0;
              var pcol = 50*(d.lcol-d.pcol);
              var high = 0;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;


        }
      }
            
      })
      //.attr("d","m 10 55 c 5 -20 25 -20 30 0")
      .attr("fill", function(d){
        
          return "url(#jin)";

      })
      .attr("fill-opacity","0")
      //.attr("fill-opacity", "0")
      .attr("stroke", function(d){
        if(d.seq == 0){
          return "#30bcbe";
        }else if(d.seq == 1){
          return "url(#change1)";
        }else if(d.seq == 2){
          return "url(#change1)";
        }else if(d.seq == 3){
          return "url(#change1)";
        }else if(d.seq == 4){
          return "url(#change1)";
        }
      })
      //.attr("stroke-linecap", "round")
      .attr("stroke-position","inside")
      .attr("stroke-width","0")
      .transition()
      .duration(800)
      .delay(function(d,i){
        return i*80;
      })
      .attr("fill-opacity","0.6")
      .attr("d",function(d){
      if(d.lcol != 0){ ///////////////////////////////////////////////////非最后一行
        if(d.prow == d.lrow){  /////////////////////////////水平波浪
            
          
        }else if(d.prow<d.lrow){ ////////////////////////////斜向下波浪
          if(d.lcol-d.pcol == 1){ /////////////小跨度
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){ //更换字
              var lrow = 74+24*(d.lrow-1);
              var lcol = 424-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -100;
              var hu = "m "+lcol+" "+lrow+" c 10 "+high+" "+(40+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              }else{  //重复字
              var lrow = 74+24*(d.lrow-1);
              var lcol = 424-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var lhigh = -75;
              var rhigh = -75+35*(d.prow-d.lrow);
              var hu = "m "+lcol+" "+lrow+" c 0 "+lhigh+" "+(25+50*(d.lcol-d.pcol-1))+" "+rhigh+" "+pcol+" "+prow;
              return hu;
              }
              
            }else if(d.lcol-d.pcol == 2 || d.lcol-d.pcol == 3 || d.lcol-d.pcol == 4){ ////////大跨度
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){  //更换字
              var lrow = 74+24*(d.lrow-1);
              var lcol = 424-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -100;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
            }else{  //重复字
              var lrow = 74+24*(d.lrow-1);
              var lcol = 424-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -75;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              
            }
            }
        }else if(d.prow>d.lrow){  ////////////////////////////斜向上波浪
          if(d.lcol-d.pcol == 1){ /////////////小跨度
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){ //更换字
              var lrow = 74+24*(d.lrow-1);
              var lcol = 424-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -100;
              var hu = "m "+lcol+" "+lrow+" c 10 "+high+" "+(40+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              }else{  //重复字
              var lrow = 74+24*(d.lrow-1);
              var lcol = 424-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -75;
              var hu = "m "+lcol+" "+lrow+" c 10 "+high+" "+(40+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              }
              
            }else if(d.lcol-d.pcol == 2 || d.lcol-d.pcol == 3 || d.lcol-d.pcol == 4){ ////////大跨度
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){  //更换字
              var lrow = 74+24*(d.lrow-1);
              var lcol = 424-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -100;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
            }else{  //重复字
              var lrow = 74+24*(d.lrow-1);
              var lcol = 424-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -75;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              
            }
            }


        }
      }
            
      })

 glist.append("path")  //生成弧线
      .attr("d",function(d){
      if(d.lcol != 0){ //非最后一行
        if(d.prow == d.lrow){  //水平波浪
            if(d.lcol-d.pcol == 1){ 
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){ //更换字
              var lrow = 75+25*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = 0;
              var hu = "m "+lcol+" "+lrow+" c 10 "+high+" "+(40+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              }else{  //重复字
              var lrow = 75+25*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = 0;
              var hu = "m "+lcol+" "+lrow+" c 10 "+high+" "+(40+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              }
          
            }else if(d.lcol-d.pcol == 2 || d.lcol-d.pcol == 3 || d.lcol-d.pcol == 4){ 
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){  //更换字
              var lrow = 75+25*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = 0;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
            }else{  //重复字
              var lrow = 75+25*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = 0;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              
            }
            }

          
        }else if(d.prow<d.lrow){ //斜向下波浪
          var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 0;
              var pcol = 50*(d.lcol-d.pcol);
              var high = 0;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
        }else if(d.prow>d.lrow){  //斜向上波浪
          var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 0;
              var pcol = 50*(d.lcol-d.pcol);
              var high = 0;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;


        }
      }
            
      })
      //.attr("d","m 10 55 c 5 -20 25 -20 30 0")
      .attr("fill", function(d){
        if(d.seq == 1){
          return "url(#lv)";
        }else if(d.seq == 2){
          return "url(#lv)";
        }else if(d.seq == 3){
          return "url(#lv)";
        }else if(d.seq == 4){
          return "url(#lv)";
        }else{
          return "url(#qing)";
        }
      })
      .attr("fill-opacity","0")
      //.attr("fill-opacity", "0")
      .attr("stroke", function(d){
        if(d.seq == 0){
          return "#30bcbe";
        }else if(d.seq == 1){
          return "url(#change1)";
        }else if(d.seq == 2){
          return "url(#change1)";
        }else if(d.seq == 3){
          return "url(#change1)";
        }else if(d.seq == 4){
          return "url(#change1)";
        }
      })
      //.attr("stroke-linecap", "round")
      .attr("stroke-position","inside")
      .attr("stroke-width","0")
      .transition()
      .duration(800)
      .delay(function(d,i){
        return i*80;
      })
      .attr("fill-opacity","0.6")
      .attr("d",function(d){
      if(d.lcol != 0){ ///////////////////////////////////////////////////非最后一行
        if(d.prow == d.lrow){  /////////////////////////////水平波浪
            if(d.lcol-d.pcol == 1){ /////////////小跨度
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){ //更换字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -100;
              var hu = "m "+lcol+" "+lrow+" c 10 "+high+" "+(40+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              }else{  //重复字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -75;
              var hu = "m "+lcol+" "+lrow+" c 10 "+high+" "+(40+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              }
              
            }else if(d.lcol-d.pcol == 2 || d.lcol-d.pcol == 3 || d.lcol-d.pcol == 4){ ////////大跨度
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){  //更换字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -100;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
            }else{  //重复字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -75;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              
            }
            }
          
        }else if(d.prow<d.lrow){ ////////////////////////////斜向下波浪
          if(d.lcol-d.pcol == 1){ /////////////小跨度
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){ //更换字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -100;
              var hu = "m "+lcol+" "+lrow+" c 10 "+high+" "+(40+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              }else{  //重复字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var lhigh = -75;
              var rhigh = -75+35*(d.prow-d.lrow);
              var hu = "m "+lcol+" "+lrow+" c 0 "+lhigh+" "+(25+50*(d.lcol-d.pcol-1))+" "+rhigh+" "+pcol+" "+prow;
              return hu;
              }
              
            }else if(d.lcol-d.pcol == 2 || d.lcol-d.pcol == 3 || d.lcol-d.pcol == 4){ ////////大跨度
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){  //更换字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -100;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
            }else{  //重复字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -75;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              
            }
            }
        }else if(d.prow>d.lrow){  ////////////////////////////斜向上波浪
          if(d.lcol-d.pcol == 1){ /////////////小跨度
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){ //更换字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -100;
              var hu = "m "+lcol+" "+lrow+" c 10 "+high+" "+(40+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              }else{  //重复字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -75;
              var hu = "m "+lcol+" "+lrow+" c 10 "+high+" "+(40+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              }
              
            }else if(d.lcol-d.pcol == 2 || d.lcol-d.pcol == 3 || d.lcol-d.pcol == 4){ ////////大跨度
              if(d.seq == 1 || d.seq == 2 || d.seq == 3 || d.seq == 4){  //更换字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -100;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
            }else{  //重复字
              var lrow = 75+24*(d.lrow-1);
              var lcol = 425-50*(d.lcol-1);
              var prow = 25*(d.prow-d.lrow);
              var pcol = 50*(d.lcol-d.pcol);
              var high = -75;
              var hu = "m "+lcol+" "+lrow+" c 30 "+high+" "+(20+50*(d.lcol-d.pcol-1))+" "+high+" "+pcol+" "+prow;
              return hu;
              
            }
            }


        }
      }
            
      })
 
      //.attr("display","none");


  /*glist.append("circle")  //生成圆
       .attr("r", function(d,i){
         if(d.lcol == 0){
          return 0;
         }else{
          return 5;
         }
       })
       .attr("cx", function(d,i){
        return 425-(d.pcol-1)*50;
       })
       .attr("cy", function(d,i){
        return 40+(d.prow-1)*15;
       })
       .attr("fill", function(d,i){
          if(d.lcol != 0){
            if(d.seq == 0 || d.seq == -1){
              return "#30bcbe";
            }else if(d.seq == 1){
              return "#00ffd4";
            }else if(d.seq == 2){
              return "#00ffd4";
            }else if(d.seq == 3){
              return "#00ffd4";
            }else if(d.seq == 4){
              return "#00ffd4";
            }
          }
       })*/

 glist.append("text")  //生成字
      .text(function(d){return d.font;})
      .attr("x",function(d,i){
        return 425-50*(d.pcol-1);
      })
      .attr('y',function(d,i){
        return 62+24*(d.prow-1);
      })
      .attr("fill",function(d){
        if(d.color == 0){
          return "#ffffff";
        }else if(d.color == 1){
          return "#2f90d6";
        }
        else if(d.color == 2){
          return "#20dab0";
        }
      })
      .attr("fill-opacity","0")
      .style("font-size","14px")
      .transition()
      .duration(800)
      .delay(function(d,i){
        return i*80;
      })
      .attr("fill-opacity",function(d){
        if(d.color == 0){
          return "0.35";
        }else if(d.color == 1){
          return "1";
        }
        else if(d.color == 2){
          return "1";
        }
      })




      })

          playall.style('visibility', 'hidden');
          playsong.style('visibility', 'visible');
          playtitle.style('visibility', 'visible').text(i.chapter+" "+i.title);

                })
                .on('mouseover', function (d, i) {
                    ///console.log(i);
                    tooltip.style('visibility', 'visible');
                    showjuan.text(i.chapter);
                    showtitle.text(i.title);
                    //playtitle.style('visibility', 'visible').text(i.chapter+" "+i.title);
                  })
                .on('mousemove', function (d, i) {
                    tooltip.style('top', (event.pageY-10)+'px').style('left',(event.pageX+10)+'px');
                })
                .on('mouseout', function (d, i) {
                    tooltip.style('visibility', 'hidden');
                    //playtitle.style('visibility', 'hidden');
                    
                })












});








































    




































/*
d3.csv("data/zhounan.csv",function(data){ 
  console.log(data); 
  return data;
}).then(function(data){	
	console.log(data[1].title);


    var chart = d3.select("body").select("#chart1");
    chart.selectAll("path")//生成海浪
      .data(data)
      .enter()
      .append("path")
      .attr("class",function(d){
      	return d.class;
      })
      .attr("id",function(d){
      	return d.id;
      })
      .attr("d",function(d){
      	if(d.pcol == d.lcol){ //水平波浪
      		var prow = 30*(d.lrow-d.prow);
      		var pcol = 15*(d.pcol-d.lcol);
      		var lrow = 1250-30*d.lrow-5*d.lcol;
      	    var lcol = 55+15*d.lcol;
      	    var high = -5*(d.num);
      	
      	var hu = "m "+lrow+" "+lcol+" c 5 "+high+" "+(25+30*(d.lrow-d.prow-1))+" "+high+" "+prow+" "+pcol;
      	return hu;
      	}else if(d.pcol<d.lcol){ //斜向下波浪
      		var prow = 30*(d.lrow-d.prow);
      		var pcol = 15*(d.pcol-d.lcol);
      		var lrow = 1250-30*d.lrow-5*d.lcol;
      	    var lcol = 55+15*d.lcol;
      	    var high = -8.5*(d.num);
      	
      	var hu = "m "+lrow+" "+lcol+" c 5 "+high+" "+(25+30*(d.lrow-d.prow-1))+" "+high+" "+prow+" "+pcol;
      	return hu;
      	}else if(d.pcol>d.lcol){  //斜向上波浪
      		var prow = 30*(d.lrow-d.prow);
      		var pcol = 15*(d.pcol-d.lcol);
      		var lrow = 1250-30*d.lrow-5*d.lcol;
      	    var lcol = 55+15*d.lcol;
      	    var high = -5*(d.num);
      	
      	var hu = "m "+lrow+" "+lcol+" c 5 "+high+" "+(25+30*(d.lrow-d.prow-1))+" "+high+" "+prow+" "+pcol;
      	return hu;


      	}
      	    
      })
      //.attr("d","m 10 55 c 5 -20 25 -20 30 0")
      .attr("fill", "#00a4c5")
      .attr("fill-opacity", ".0")
      .transition()
          .duration(function(d){
          	return 10*d.prow;
          })
          .attr("fill-opacity", ".5")
      .attr("stroke", "url(#change1)")
      .attr("stroke-linecap", "round")
      .attr("stroke-position","inside")
      .attr("stroke-width","0")
      .transition()
          .duration(function(d){
          	return 200*d.prow;
          })
          .attr("stroke-width", function(d){
      	return 2*d.change;
      })
      .on("mouseover", function(d,i){ 
      	let song = d3.select("."+this.class);
      	return song.text("test");

      })
      //.attr("display","none");
      	
      	


});


d3.csv("data/zhaonan.csv",function(data){ 
  console.log(data); 
  return data;
}).then(function(data){	
	console.log(data[1].title);


   
    var chart = d3.select("body").select("#chart2");
    chart.selectAll("path")//生成海浪
      .data(data)
      .enter()
      .append("path")
      .attr("class",function(d){
      	return d.class;
      })
      .attr("id",function(d){
      	return d.id;
      })
      .attr("d",function(d){
      	    if(d.pcol == d.lcol){ //水平波浪
      		var prow = 30*(d.lrow-d.prow);
      		var pcol = 15*(d.pcol-d.lcol);
      		var lrow = 1250-30*d.lrow-5*d.lcol;
      	    var lcol = 55+15*d.lcol;
      	    var high = -5*(d.num);
      	
      	var hu = "m "+lrow+" "+lcol+" c 5 "+high+" "+(25+30*(d.lrow-d.prow-1))+" "+high+" "+prow+" "+pcol;
      	return hu;
      	}else if(d.pcol<d.lcol && d.cross == 0){ //斜向下波浪
      		var prow = 30*(d.lrow-d.prow);
      		var pcol = 15*(d.pcol-d.lcol);
      		var lrow = 1250-30*d.lrow-5*d.lcol;
      	    var lcol = 55+15*d.lcol;
      	    var high = -8.5*(d.num);
      	
      	var hu = "m "+lrow+" "+lcol+" c 5 "+high+" "+(25+30*(d.lrow-d.prow-1))+" "+high+" "+prow+" "+pcol;
      	return hu;
      	}else if(d.pcol>d.lcol && d.cross == 0){ //斜向上波浪
      		var prow = 30*(d.lrow-d.prow);
      		var pcol = 15*(d.pcol-d.lcol);
      		var lrow = 1250-30*d.lrow-5*d.lcol;
      	    var lcol = 55+15*d.lcol;
      	    var high = -8.5*(d.num);
      	
      	var hu = "m "+lrow+" "+lcol+" c 5 "+high+" "+(25+30*(d.lrow-d.prow-1))+" "+high+" "+prow+" "+pcol;
      	return hu;
      	}else if(d.cross == 1){            //交叉波浪
      		if(d.pcol < d.lcol){  //斜向下交叉波浪
      		var prow = 30*(d.lrow-d.prow);
      		var pcol = 15*(d.pcol-d.lcol);
      		var lrow = 1250-30*d.lrow-5*d.lcol;
      	    var lcol = 55+15*d.lcol;
      	    var high = -8.5*(d.num);
      	
      	var hu = "m "+lrow+" "+lcol+" c 10 "+(-8.5*3)+" "+(25+30*(d.lrow-d.prow-1))+" "+high+" "+prow+" "+pcol;
      	return hu;
      	}else if(d.pcol > d.lcol){ //斜向上交叉波浪
      		var prow = 30*(d.lrow-d.prow);
      		var pcol = 15*(d.pcol-d.lcol);
      		var lrow = 1250-30*d.lrow-5*d.lcol;
      	    var lcol = 55+15*d.lcol;
      	    var high = -8.5*(d.num);
      	
      	var hu = "m "+lrow+" "+lcol+" c 5 "+high+" "+(25+30*(d.lrow-d.prow-1))+" "+0+" "+prow+" "+pcol;
      	return hu;
      	}

      	}
      })
      //.attr("d","m 10 55 c 5 -20 25 -20 30 0")
      .attr("fill", "#00a4c5")
      .attr("fill-opacity", ".0")
      .transition()
          .duration(function(d){
          	return 10*d.prow;
          })
          .attr("fill-opacity", ".5")
      .attr("stroke", "url(#change1)")
      .attr("stroke-linecap", "round")
      .attr("stroke-position","inside")
      .attr("stroke-width","0")
      .transition()
          .duration(function(d){
          	return 200*d.prow;
          })
          .attr("stroke-width", function(d){
      	return 2*d.change;
      })
      //.attr("display","none");
      


});
*/






