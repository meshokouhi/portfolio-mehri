$(document).ready(function(){
  for(let i = 1; i < 4; i++){
    let moreLess, more, dots, flag;
    moreLess = '#more-less-0'+ i ;
    more ='#more-0'+i;
    dots = '#dots-0'+i;
    $(moreLess).click(function(){
      if ($(more).css('display') === ('none')){
        $(moreLess).html ('Read Less');
        $(dots).css({'display':'none'});
      }else{
        $(moreLess).html ('Read More');
        $(dots).css({'display':'inline'});
      };
      $(more).slideToggle('slow');
    })
  }
});