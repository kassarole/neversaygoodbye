// Javascript was a mistake. Ecmascript is satan incarnate.

function RemElem(array, elem) {
    if (elem > -1) {
        array.splice(elem, 1);
    }
    return array
}


// URL Resize Bar

function resizeURLBar(){
  $(".browser_bar_search_text").css("width", ($(window).width() - 327).toString() + "px");
    $(".browser_bar_search_ass").css("margin-left", ($(window).width() - 80).toString() + "px");
} resizeURLBar();

$( window ).resize(function() {
	resizeURLBar();
});

// Toggle footer bar logic

$(".toggleLogic").click(function(e) {

	// hide everything in the trifecta if a trifecta element is click
	if ($(this).hasClass("footer_bar_chat") == false){
    if (this.id != "noti_bar"){$("#noti_pop").hide(); $("#noti_bar").addClass("footer_bar_closed");}
    if (this.id != "friends_bar"){$("#friends_pop").hide(); $("#friends_bar").addClass("footer_bar_closed");}
    if (this.id != "status_bar"){$("#status_pop").hide(); $("#status_bar").addClass("footer_bar_closed");}
	}

  var ChatPopupID = this.id
	$("#" + ChatPopupID.replace("bar", "pop")).toggle();
  if ($("#" + ChatPopupID.replace("bar", "pop")).is(':visible')){
  	$("#" + ChatPopupID).addClass("footer_bar_open")
  	$("#" + ChatPopupID).removeClass("footer_bar_closed")
  } else {
  	$("#" + ChatPopupID).removeClass("footer_bar_open")
  	$("#" + ChatPopupID).addClass("footer_bar_closed")
  }

});

// Registering a closed state to the popups.

$("#mat_bar").click()
$("#friends_bar").click()

// Message handling.

function AddMessage(MessageBoxID, MessageSender, MessageContent, MessageTime, MessageFunctions){
	$("#" + MessageBoxID + "> .footer_popups_chat_messages").append("<div class='footer_popups_chat_messages_msg'><div class='footer_popups_chat_messages_msg_name'>" + MessageSender + "</div><div class='footer_popups_chat_messages_msg_content'>" + MessageContent + "</div><div class='footer_popups_chat_messages_msg_time'>" + MessageTime + "</div></div>");
}

AddMessage("mat_pop", "Mat","That's great to hear an lorefjsdg fjsfjdjlsdk fnjk nfjksn dnjk fnjsdn jnfsd nfnsdmnfm,sdn fm, sdfsdjf sdjf dfjd fjfjfd fjsd fj fsdjkf sdfsdkf sdfjksd fjksd fsdjl sdjkf sdjkf dfjk sdjkfs fjsd fjksd fsdjk fsdjkf sdjkfsd jf sdfsdjk","9:22 pm")
AddMessage("mat_pop", "Mat","sorry my cat ran across my keyboard","9:23 pm")

// notifications
notificationCount = 0
function AddNotification(NoteID, NoteSender, NoteContent, NoteImage){
	$("#" + NoteID + "> .footer_popups_trifecta_popup_items").append("<div class='footer_popups_trifecta_popup_row_items_item'><img class='footer_popups_trifecta_popup_row_items_item_image' src='"+ NoteImage + "'><div class='footer_popups_trifecta_popup_row_items_item_title'>" + NoteSender + "</div><div class='footer_popups_trifecta_popup_row_items_item_sub'>" + NoteContent + "</div></div>");
  notificationCount = notificationCount + 1;
  $("div.footer_bar_notifications_eyecatcher").html("<p>"+notificationCount+"</p>")
}

AddNotification("noti_pop","Mat","Testing", "https://i.imgur.com/tL8Zgt5.png")
AddNotification("noti_pop","Matt Gursky", "tagged you in a photo", "https://i.imgur.com/tL8Zgt5.png")
// Page Navigation

PagesForwards = []
PagesBackwards = []

CurrentPage = "Landing"
$(".fsdf").text("Landing");

function CheckToDisable(){

  if (jQuery.isEmptyObject(PagesForwards)){
    $(".browser_bar_nav_right").addClass("browser_bar_nav_right_disabled");
  } else {
    $(".browser_bar_nav_right").removeClass("browser_bar_nav_right_disabled");
  }

  if (jQuery.isEmptyObject(PagesBackwards)){
    $(".browser_bar_nav_left").addClass("browser_bar_nav_left_disabled");
  } else {
    $(".browser_bar_nav_left").removeClass("browser_bar_nav_left_disabled");
  }

}

CheckToDisable();

function LoadPage(Page){
  $(".fsdf").text(Page);
  $("div.browser_bar_search_text").html("nsg://never.say/" + Page);
}

function FollowLink(Page){
  if (Page == CurrentPage){
    LoadPage(Page);
    alert('uu');
  } else {
    PagesBackwards.push(CurrentPage);
    CurrentPage = Page;
    LoadPage(Page);
    PagesForwards = [];
    CheckToDisable();
  }
}

$(".browser_bar_nav_left").click(function() {
  CheckToDisable();
  if ($(this).hasClass(".browser_bar_nav_left_disabled") === false){
    PagesForwards.push(CurrentPage);
    CurrentPage = PagesBackwards.slice(-1)[0];
    PagesBackwards.pop()
    LoadPage(CurrentPage);
    CheckToDisable();
  }
});

$(".browser_bar_nav_right").click(function() {
  CheckToDisable();
  if ($(this).hasClass(".browser_bar_nav_right_disabled") === false){
    PagesBackwards.push(CurrentPage);
    CurrentPage = PagesForwards.slice(-1)[0];
    PagesForwards.pop()
    LoadPage(CurrentPage);
    CheckToDisable();
  }
});
