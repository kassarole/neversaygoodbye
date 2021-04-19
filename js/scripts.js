function resizeURLBar(){
  $(".browser_bar_search_text").css("width", ($(window).width() - 327).toString() + "px");
    $(".browser_bar_search_ass").css("margin-left", ($(window).width() - 80).toString() + "px");
} resizeURLBar();

$( window ).resize(function() {
	resizeURLBar();
});



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

// default is enabled, this resets them to a coded hidden state
$("#mat_bar").click()
$("#friends_bar").click()


function AddMessage(MessageBoxID, MessageSender, MessageContent, MessageTime, MessageFunctions){
	$("#" + MessageBoxID + "> .footer_popups_chat_messages").append("<div class='footer_popups_chat_messages_msg'><div class='footer_popups_chat_messages_msg_name'>" + MessageSender + "</div><div class='footer_popups_chat_messages_msg_content'>" + MessageContent + "</div><div class='footer_popups_chat_messages_msg_time'>" + MessageTime + "</div></div>");
}

AddMessage("mat_pop", "Mat","That's great to hear an lorefjsdg fjsfjdjlsdk fnjk nfjksn dnjk fnjsdn jnfsd nfnsdmnfm,sdn fm, sdfsdjf sdjf dfjd fjfjfd fjsd fj fsdjkf sdfsdkf sdfjksd fjksd fsdjl sdjkf sdjkf dfjk sdjkfs fjsd fjksd fsdjk fsdjkf sdjkfsd jf sdfsdjk","9:22 pm")

AddMessage("mat_pop", "Mat","sorry my cat ran across my keyboard","9:23 pm")

window.oldSite = ''
window.futureSite = ''
$("div.browser_bar_nav_left").click(function(e) {
  console.log(window.oldSite)
  if (window.oldSite === '') {
    return
  } else {
    window.futureSite = $("div.browser_bar_search_text").html()
    console.log(window.futureSite)
    $("div.browser_bar_search_text").html(window.oldSite)
    $(".browser_bar_nav_right").css("background-image","url(https://i.imgur.com/bHklheN.png)")
  }
})
$(".browser_bar_nav_right").click(function(e) {
  if (window.futureSite === '') {
    return
  } else {
    console.log(window.oldSite)
    window.oldSite = $("div.browser_bar_search_text").html()
    $("div.browser_bar_search_text").html(window.futureSite)
  }
})
$(".link").click(function() {
  window.oldSite = $("div.browser_bar_search_text").html()
  console.log(window.oldSite)
  $("div.browser_bar_search_text").html("nsg://ilove.you/")
})
$(".browser_bar_home").click(function(e) {
	window.oldSite = $("div.browser_bar_search_text").html()
  $("div.browser_bar_search_text").html("nsg://never.say/goodbye")
})






