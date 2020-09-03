$(document).ready(function(){
  $("#dropdown-etkinliklerimiz").click(function(){
    $("#dropdown-menu-etkinliklerimiz").slideToggle("slow");
  });

  $("#dropdown-staj").click(function(){
    $("#dropdown-menu-staj").slideToggle("normal");
  });

  $("#dropdown-hakkimizda").click(function(){
    $("#dropdown-menu-hakkimizda").slideToggle("normal");

  });
});
$(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("navbar-collapse in");
        if (_opened === true && !clickover.hasClass("navbar-toggle")) {
            $("button.navbar-toggle").click();
        }
    });
});


$(document).mouseup(function (e)
{
  if(e.target.id == "dropdown-etkinliklerimiz")
return;
  if($(e.target).closest('#dropdown-etkinliklerimiz').length)
return;

var mydiv = $('#dropdown-menu-etkinliklerimiz');
if (!mydiv.is(e.target) && mydiv.has(e.target).length === 0){
    mydiv.slideUp("slow");
}
});

$(document).mouseup(function (e)
{
  if(e.target.id == "dropdown-staj")
return;
  if($(e.target).closest('#dropdown-staj').length)
return;

var mydiv = $('#dropdown-menu-staj');
if (!mydiv.is(e.target) && mydiv.has(e.target).length === 0){
    mydiv.slideUp("normal");
}
});

$(document).mouseup(function (e)
{
  if(e.target.id == "dropdown-hakkimizda")
return;
  if($(e.target).closest('#dropdown-hakkimizda').length)
return;

var mydiv = $('#dropdown-menu-hakkimizda');
if (!mydiv.is(e.target) && mydiv.has(e.target).length === 0){
    mydiv.slideUp("normal");
}
});
