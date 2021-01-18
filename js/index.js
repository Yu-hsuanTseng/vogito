$( document ).ready(function(){							
    var angleSteps = 360 / $('#circle-list div').length;
    var baseAngle = 0;
    var jud = 0;
    
    function updateListPositions()
    {
        $('#circle-list div').each(function(index, element)
           {
               var angle = baseAngle + (index * angleSteps);
               var center = {x:60,y:180};
               var distance = 230;
               var x = distance * Math.cos(angle * (Math.PI / 180));
               var y = distance * Math.sin(angle * (Math.PI / 180));
               $(element).css({left:center.x+x, top:center.y+y});
               if(y>0){
                    jud = x+728;
               }
               else {
                   jud = x;
               }
               
           });
    }
    
    function stepAngle()
    {
        baseAngle++;
        updateListPositions();
    }
    stepAngle();
    //var stepInterval = setInterval(stepAngle, 100);
    //setTimeout(function(){clearInterval(stepInterval);},2000);
    
    var prevX,prevY;
    var currX,currY;
    var mouseClicked = false;
    
    $(document).mousedown(function(e){
        $('.cover_set').css('animation','none'); 
        $('.cover_set').css('top','0'); 
        $('.suggest_cat').css('visibility','hidden'); 
        $('.suggest_doll').css('visibility','hidden'); 
        $('.suggest_toy').css('visibility','hidden'); 
        $('.suggest_leather').css('visibility','hidden'); 
        $('.suggest_helmet').css('visibility','hidden'); 
        $('.suggest_head').css('visibility','hidden'); 


        prevX = currX = e.pageX; 
        prevY = currY = e.pageY; 
        mouseClicked = true;
    });
    
    $(document).mousemove(function(e){

        if(mouseClicked){
            prevX = currX;
            prevY = currY;
            
            currX = e.pageX;
            currY = e.pageY;

            baseAngle++;
            updateListPositions();

            
            
            if(currY < prevY){
                if (currX < prevX){
                baseAngle--;
                updateListPositions();
                }
            }
            
        }
        else {
            prevX = e.pageX; 
            prevY = e.pageY; 
            
        }
    });
    
    $(document).mouseup(function(e){
        prevX = e.pageX; 
        prevY = e.pageY; 
        mouseClicked = false;
        $('.cover_set').css('animation','fadein 2s ease'); 
        $('.cover_set').css('top','220px'); 
        
        console.log(jud);

        if (-200 < jud){
            $('.suggest_helmet').css('visibility','visible'); 
            $('.suggest_doll').css('visibility','hidden'); 
            $('.suggest_toy').css('visibility','hidden'); 
            $('.suggest_head').css('visibility','hidden'); 
            $('.suggest_cat').css('visibility','hidden'); 
            $('.suggest_leather').css('visibility','hidden'); 

            if (0 < jud){
                $('.suggest_cat').css('visibility','visible'); 
                $('.suggest_doll').css('visibility','hidden'); 
                $('.suggest_toy').css('visibility','hidden'); 
                $('.suggest_head').css('visibility','hidden');
                $('.suggest_leather').css('visibility','hidden'); 
                $('.suggest_helmet').css('visibility','hidden'); 

                if (200 < jud){
                    $('.suggest_toy').css('visibility','visible'); 
                    $('.suggest_doll').css('visibility','hidden');
                    $('.suggest_cat').css('visibility','hidden');
                    $('.suggest_head').css('visibility','hidden'); 
                    $('.suggest_leather').css('visibility','hidden'); 
                    $('.suggest_helmet').css('visibility','hidden'); 
                        if (400 < jud){
                            $('.suggest_leather').css('visibility','visible'); 
                            $('.suggest_doll').css('visibility','hidden'); 
                            $('.suggest_toy').css('visibility','hidden'); 
                            $('.suggest_head').css('visibility','hidden'); 
                            $('.suggest_helmet').css('visibility','hidden'); 
                            $('.suggest_cat').css('visibility','hidden'); 
                

                        if (600 < jud){
                            $('.suggest_head').css('visibility','visible'); 
                            $('.suggest_doll').css('visibility','hidden'); 
                            $('.suggest_toy').css('visibility','hidden'); 
                            $('.suggest_cat').css('visibility','hidden');
                            $('.suggest_leather').css('visibility','hidden'); 
                            $('.suggest_helmet').css('visibility','hidden'); 
            
                            
                            if (800 < jud){
                                $('.suggest_doll').css('visibility','visible'); 
                                $('.suggest_cat').css('visibility','hidden'); 
                                $('.suggest_toy').css('visibility','hidden'); 
                                $('.suggest_head').css('visibility','hidden');
                                $('.suggest_leather').css('visibility','hidden'); 
                                $('.suggest_helmet').css('visibility','hidden');



                            }
                        }    
                    }
                }
            }
        }
    });
    
    
    
});