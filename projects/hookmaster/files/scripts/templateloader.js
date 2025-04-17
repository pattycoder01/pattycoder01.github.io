const loadButton = document.getElementById("loadTemplate");

loadButton.addEventListener('click', async (event) => {
   const selectedTemplate = document.getElementById("templateSelector").value;
   switch (selectedTemplate) {
      default:
         alert("error loading template: template doesn't exist! case " + selectedTemplate);
         break;
      case "0":
         alert("Please select a template!\nInvalid selection!");
         break;
      case "1":
         document.getElementById("webhookName").value = "AnnouncementBot";
         document.getElementById("avatarURL").value = "";
         document.getElementById("messageInput").value = "# Important announcement:\n[your announcement here]";
         break;
   }
   adjustHeight();
})

// example template config
/*
  case "x":
   document.getElementById("webhookName").value = "";
   document.getElementById("avatarURL").value = "";
   document.getElementById("messageInput").value = "";
   break;
*/

// optional elements:

/*
   document.getElementById("webhookURL").value = "";
   document.getElementById("ttsEnabled").checked = false;
*/