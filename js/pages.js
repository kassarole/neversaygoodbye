function ProfilePage(CharacterFile){
	var d = new Date(CharacterFile.Birthday)
	var BirthdayCorrected = (MonthNames[d.getMonth()] + " " + d.getDay()).toString();
	if (CharacterFile.Relationship[0] == RelationshipTypes.Taken){
		RelationshipPossible = CharacterFile.Relationship[1].Name;
	} else {
		RelationshipPossible = "";
	}

	Content = `
<div class="page_profile_wrapper">			
		
		<div class="page_profile_tabs">
			<div class="page_profile_tab profileTabLogic tab_selected" id="wall_tab">Wall</div>
			<div class="page_profile_tab profileTabLogic" id="info_tab">Info</div>
			<div class="page_profile_tab profileTabLogic" id="photos_tab">Photos</div>
		</div>	


		<div class="page_profile_headline">
			<div class="page_profile_headline_name">${CharacterFile.Name}</div>
			<div class="page_profile_headline_status">${CharacterFile.Statuses.slice(-1)[0]}</div>
			<div class="page_profile_headline_date">Today.</div>
		</div>	



		<div class="page_profile_sidebar">
			
			<img class="page_profile_sidebar_image" src="${CharacterFile.ProfilePhoto}">
			<div class="page_profile_sidebar_links">
				<div class="page_profile_sidebar_link">View Photos of ${CharacterFile.Name.split(" ")[0]} (3)</div>
				<div class="page_profile_sidebar_link">View Information</div>
				<div class="page_profile_sidebar_link">Poke ${CharacterFile.Name.split(" ")[0]}</div>
			</div>

			<div class="page_profile_sidebar_info_wrapper">
				<div class="page_profile_sidebar_info_header">Basic Information</div>
				<div class="page_profile_sidebar_info_catagory">Networks</div>
				<div class="page_profile_sidebar_info_value">${CharacterFile.Networks}</div>
				<div class="page_profile_sidebar_info_catagory">Relationship Status</div>
				<div class="page_profile_sidebar_info_value">${CharacterFile.Relationship[0] + RelationshipPossible}</div>
				<div class="page_profile_sidebar_info_catagory">Birthday</div>
				<div class="page_profile_sidebar_info_value">${BirthdayCorrected}</div>
				<div class="page_profile_sidebar_info_catagory">Hometown</div>
				<div class="page_profile_sidebar_info_value">${CharacterFile.Hometown}</div>
				<div class="page_profile_sidebar_info_header">Friends</div>
				<div class="page_profile_sidebar_friends_wrapper">
					<div class="page_profile_sidebar_friend"><img src="https://i.imgur.com/jY7EsH4.png"><p>Jane Doe</p></div>
					<div class="page_profile_sidebar_friend"><img src="https://i.imgur.com/3tl1OSl.png"><p>Emily Singer</p></div>
					<div class="page_profile_sidebar_friend"><img src="https://i.imgur.com/giHd1fv.png"><p>Evelyn Merem</p></div>
					<div class="page_profile_sidebar_friend"><img src="https://i.imgur.com/GFUURwc.png"><p>Kelly Struman</p></div>
				</div>
			</div>
		</div>
		
		<div class="page_profile_info" style="display: none;">info</div>
		<div class="page_profile_photos" style="display: none;">photos</div>

		<div class="page_profile_wall">

			<div class="page_profile_wall_clear_divider"></div>

			<div class="page_profile_wall_divider" style="padding-bottom: 5px">
				<div class="page_profile_wall_divider_time">Today</div>
				<div class="page_profile_wall_divider_line"></div>
			</div>

			<div class="page_profile_wall_node">
				<img class="page_profile_wall_node_icon" src="https://i.imgur.com/xDJxffC.png">
				<div class="page_profile_wall_node_value">Mat wrote on Kyle Seeley's wall.<div class="page_profile_wall_node_time">6:14pm</div></div>
			</div>

			<div class="page_profile_wall_divider">
				<div class="page_profile_wall_divider_line"></div>
			</div>

			<div class="page_profile_wall_node">
				<img class="page_profile_wall_node_icon" src="https://i.imgur.com/xDJxffC.png">
				<div class="page_profile_wall_node_value node_status_value">Mat wrote on Kyle Seeley's wall.<div class="page_profile_wall_node_time">6:14pm</div></div>
			</div>

			<div class="page_profile_wall_divider">
				<div class="page_profile_wall_divider_line"></div>
			</div>

			<div class="page_profile_wall_node">
				<img class="page_profile_wall_node_icon" src="https://i.imgur.com/xDJxffC.png">
				<div class="page_profile_wall_node_value">Mat wrote on Kyle Seeley's wall.<div class="page_profile_wall_node_time">6:14pm</div></div>
			</div>


			<div class="page_profile_wall_divider">
				<div class="page_profile_wall_divider_line"></div>
			</div>

			<div class="page_profile_wall_node">
				<img class="page_profile_wall_node_icon" src="https://i.imgur.com/xDJxffC.png">
				<div class="page_profile_wall_node_value">Mat wrote on Kyle Seeley's wall.<div class="page_profile_wall_node_time">6:14pm</div></div>
			</div>


			<div class="page_profile_wall_divider">
				<div class="page_profile_wall_divider_line"></div>
			</div>

			<div class="page_profile_wall_node">
				<img class="page_profile_wall_node_icon" src="https://i.imgur.com/xDJxffC.png">
				<div class="page_profile_wall_node_value">Mat wrote on Kyle Seeley's wall.<div class="page_profile_wall_node_time">6:14pm</div></div>
				<div class="page_profile_wall_node_images">
					<img class="page_profile_wall_node_image" src="https://picsum.photos/100">
					<img class="page_profile_wall_node_image" src="https://picsum.photos/100">
				</div>
			</div>

			<div class="page_profile_wall_divider">
				<div class="page_profile_wall_divider_line"></div>
			</div>


		</div>
	</div>

	<script>

	$(".profileTabLogic").click(function(e) {

	  $(".page_profile_wall").hide();
	  $(".page_profile_info").hide();
	  $(".page_profile_photos").hide();
	  $(this).siblings().removeClass("tab_selected");

	  var ContentID = this.id.replace("_tab", "");
	  $(".page_profile_" + ContentID).show();
	  $(this).addClass("tab_selected");
	});

	</script>
`;

return [Content, CharacterFile.Nickname];
}

	