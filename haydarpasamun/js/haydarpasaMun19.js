		$(document).ready(function(){
			$("#dropdown-committees").click(function(){
				$("#dropdown-menu-committees").slideToggle("normal");
			});

			$("#dropdown-conference").click(function(){
				$("#dropdown-menu-conference").slideToggle("normal");
			});

			$("#dropdown-aboutus").click(function(){
				$("#dropdown-menu-aboutus").slideToggle("normal");
			});

			$("#dropdown-registration").click(function(){
				$("#dropdown-menu-registration").slideToggle("normal");
			});
		});
				$(document).mouseup(function (e)
			{
					if(e.target.id == "dropdown-committees")
				return;
					if($(e.target).closest('#dropdown-committees').length)
				return;

				var mydiv = $('#dropdown-menu-committees');
				if (!mydiv.is(e.target) && mydiv.has(e.target).length === 0){
						mydiv.slideUp("normal");
				}
			});

			$(document).mouseup(function (e)
			{
					if(e.target.id == "dropdown-conference")
				return;
					if($(e.target).closest('#dropdown-conference').length)
				return;

				var mydiv = $('#dropdown-menu-conference');
				if (!mydiv.is(e.target) && mydiv.has(e.target).length === 0){
						mydiv.slideUp("normal");
				}
			});

			$(document).mouseup(function (e)
			{
					if(e.target.id == "dropdown-aboutus")
				return;
					if($(e.target).closest('#dropdown-aboutus').length)
				return;

				var mydiv = $('#dropdown-menu-aboutus');
				if (!mydiv.is(e.target) && mydiv.has(e.target).length === 0){
						mydiv.slideUp("normal");
				}
			});

			$(document).mouseup(function (e)
			{
					if(e.target.id == "dropdown-registration")
				return;
					if($(e.target).closest('#dropdown-registration').length)
				return;

				var mydiv = $('#dropdown-menu-registration');
				if (!mydiv.is(e.target) && mydiv.has(e.target).length === 0){
						mydiv.slideUp("normal");
				}
			});
