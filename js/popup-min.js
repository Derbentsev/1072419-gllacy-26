var link=document.querySelector(".feedback-button");var popup=document.querySelector(".feedback");var close=document.querySelector(".modal-close");var nameFeedback=document.querySelector("[name=login-feedback]");var emailFeedback=document.querySelector("[name=email-feedback]");var form=document.querySelector(".feedback-form");var isStorageSupport=!0;var storageName="";var storageEmail="";try{storageName=localStorage.getItem("nameFeedback");storageEmail=localStorage.getItem("emailFeedback")}
catch(err){isStorageSupport=!1}
link.addEventListener("click",function(evt){evt.preventDefault();popup.classList.add("show-modal");if(storageName){nameFeedback.value=storageName}
else{nameFeedback.focus()}
if(storageEmail){storageEmail.value=storageEmail}
else{nameEmail.focus()}});close.addEventListener("click",function(evt){evt.preventDefault();popup.classList.remove("show-modal")})
form.addEventListener("submit",function(evt){if(!nameFeedback.value||!emailFeedback.value){evt.preventDefault();console.log("Нужно ввести Имя и Email")}
else{if(isStorageSupport){localStorage.setItem("nameFeedback",nameFeedback.value)}}})
window.addEventListener("keydown",function(evt){if(evt.keyCode===27){evt.preventDefault();if(popup.classList.contains("show-modal")){popup.classList.remove("show-modal")}}})