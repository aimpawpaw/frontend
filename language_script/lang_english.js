import { URL_QUERY } from './common.js';

const titleElement = document.getElementById("title")
titleElement.innerText = "AI Messenger for Pet Pals - AIm PawPaw ";

const introTitleElement = document.getElementById("intro-title");
introTitleElement.innerText = "Prologue";

const introElement = document.getElementById("intro")
introElement.innerHTML = `
Hello, Pet Pals! 👋 I'm a lucky guy who has the most adorable companion named Bella~😃 Taking care of Bella often means visiting animal hospitals for various reasons. But I understand that not everyone can easily go to the hospital when needed. Ever been in that situation? It can be tough to navigate! So, I thought, "What if there was a solution...?" Recently, I discovered a trending solution!

I tried seeking advice for Bella using the ever-helpful <span style = 'color:darksegreen'>ChatGPT</span>. And wow! The responses were fantastic!👍 Clear and concise answers that left me impressed!🥹

That's why I created this app for fellow pet owners, aiming to make their lives easier.<br><br> Join me on this exciting journey! 😂
`

const qnaElement = document.getElementById("qna")
qnaElement.innerHTML = `
<p style="text-align:center">More information for AimPawPaw?</p>
          <details>
            <summary>Saving Conversation.</summary>
            <p>Your privacy and security are our top priorities. When using our app, rest assured that we prioritize the protection of your personal information. We keep a record of pet-related inquiries and answers, but we don't store any personal details like access equipment or IP information. Our focus is on improving our services and providing a seamless experience for you and your furry friends. Thank you for trusting us and joining us on this delightful journey with our pet-friendly app! 😄</p>
          </details>
          <details>
            <summary>Advertising Support.</summary>
            <p>To keep our app running smoothly, we have server and Chat GPT usage costs. We rely on advertising to cover these expenses.

            We kindly ask for your understanding and support. By allowing ads, we can maintain a delightful and user-friendly experience. We strive to provide valuable content while ensuring an enjoyable app usage for you.
            
            Thank you for your support! We appreciate you being part of our community. Let's make this app even more amazing together! 😄</p>
          </details>
          <details>
            <summary>Origin of Images</summary>
            <p>We wanted to create a visually appealing experience for you, so we used some fantastic images from freepik.com for our top banner and background icon.

            If you're curious to learn more about these images or explore other great resources, we invite you to visit  <a
            href="https://www.freepik.com/free-vector/hand-drawn-pet-sitting-facebook-cover_32874038.htm#query=pets&position=1&from_view=search&track=sph">freepik.com</a>. They have a wide range of captivating visuals that can add charm and personality to any project.</p>
          </details>
          <details>
            <summary>More question?</summary>
            <p>We're here to assist you every step of the way! If you have any questions or need further information about our app, please don't hesitate to reach out to us.

            Feel free to contact us via email below. We value your feedback and are excited to address any inquiries or concerns you may have.
            
            Thank you for your interest in our app. We look forward to hearing from you soon! 🤣</p>
            <a href="mailto:aimpawpaw.question@gmail.com">aimpawpaw.question@gmail.com</a>
          </details>
`
const closeButtonElement = document.getElementById("close-button")
closeButtonElement.innerText = "Close"


const refreshMessageElement = document.getElementById("refresh_message")
refreshMessageElement.innerText = "If you click the 'Yes' button below, the refresh option will be activated. However, please note that this action will delete all conversations. So, before you proceed, please consider if you truly want to refresh and start with a clean message."

const refreshButtonMessageYes = document.getElementById("refresh_button_yes")
refreshButtonMessageYes.innerText = "Yes!"

const refreshButtonMessageNo = document.getElementById("refresh_button_no")
refreshButtonMessageNo.innerText = "No!"

const refreshLanguageMessageElement = document.getElementById("refresh_language_message")
refreshLanguageMessageElement.innerText = "It switchs the language to Korean. Please note that after the change, all records of inquiries made in English will be removed."

const refreshLanguageButtonMessageYes = document.getElementById("refresh_lang_button_yes")
refreshLanguageButtonMessageYes.innerText = "Yes, go ahead!"

const refreshLanguageButtonMessageNo = document.getElementById("refresh_lang_button_no")
refreshLanguageButtonMessageNo.innerText = "No, bring me back."


const chatInputElement = document.getElementById("chat_input")
const inputBoxPlaceholder = "Just type in your questions here and hit that flight button on the right(max: 100 characters)."
chatInputElement.placeholder = inputBoxPlaceholder

const opt10Element = document.getElementById("opt10")
opt10Element.innerText = "Select a pet species."

const opt11Element = document.getElementById("opt11")
opt11Element.value = "I have a dog"
opt11Element.innerText = "I have a dog"

const opt12Element = document.getElementById("opt12")
opt12Element.value = "I have a cat"
opt12Element.innerText = "I have a cat"


const opt20Element = document.getElementById("opt20")
opt20Element.innerText = "Choose the gender of your furry friend."

const opt21Element = document.getElementById("opt21")
opt21Element.value = "who is a boy"
opt21Element.innerText = "a boy"

const opt22Element = document.getElementById("opt22")
opt22Element.value = "who is a girl"
opt22Element.innerText = "a girl"

const opt30Element = document.getElementById("opt30")
opt30Element.innerText = "Determine your pet's age"

const opt31Element = document.getElementById("opt31")
opt31Element.value = ", under a year old"
opt31Element.innerText = "under a year old"

const opt32Element = document.getElementById("opt32")
opt32Element.value = ", 1~4 years old"
opt32Element.innerText = "1~4 years old"

const opt33Element = document.getElementById("opt33")
opt33Element.value = ", 5~9 years old"
opt33Element.innerText = "5~9 years old"

const opt34Element = document.getElementById("opt34")
opt34Element.value = ", 10~14 years old"
opt34Element.innerText = "10~14 years old"

const opt35Element = document.getElementById("opt35")
opt35Element.value = ", over 15 years old"
opt35Element.innerText = "over 15 years old"

const opt40Element = document.getElementById("opt40")
opt40Element.innerText = "Choose your pet's weight."

const opt41Element = document.getElementById("opt41")
opt41Element.value = ", less than 1kg"
opt41Element.innerText = "less than 1kg or 2.2lb"

const opt42Element = document.getElementById("opt42")
opt42Element.value = ", between 1~5kg"
opt42Element.innerText = "between 1~5kg or 2~11lb"

const opt43Element = document.getElementById("opt43")
opt43Element.value = ", between 5~10kg"
opt43Element.innerText = "between 5~10kg or 11~22lb"

const opt44Element = document.getElementById("opt44")
opt44Element.value = ", between 10~18kg"
opt44Element.innerText = "between 10~18kg or 22~40lb"

const opt45Element = document.getElementById("opt45")
opt45Element.value = ", between 18~25kg"
opt45Element.innerText = "between 18~25kg or 40~55lb"

const opt46Element = document.getElementById("opt46")
opt46Element.value = ", more than 25kg"
opt46Element.innerText = "more than 25kg or 55lb"


const opt50Element = document.getElementById("opt50")
opt50Element.innerText = "Status of neutering surgery on your pet"

const opt51Element = document.getElementById("opt51")
opt51Element.value = "and had a neutering operation"
opt51Element.innerText = "had a neutering operation"

const opt52Element = document.getElementById("opt52")
opt52Element.value = "and never had a neutering operation"
opt52Element.innerText = "never had a neutering operation"

const opt90Element = document.getElementById("opt90")
opt90Element.innerText = "Yes or No"

const opt91Element = document.getElementById("opt91")
opt91Element.value = "Yes. please go ahead."
opt91Element.innerText = "Yes. please go ahead."

const opt92Element = document.getElementById("opt92")
opt92Element.value = "No, I need fresh input"
opt92Element.innerText = "No, I need fresh input"


////////////////////
const chatApp = document.querySelector("#chat");
const chatMessages = document.querySelector("#chat__messages");
const chatForm = document.querySelector("#chat-form");
const timeTag = document.querySelector(".notice");

// const URL_QUERY = "http://127.0.0.1:3000/query";
// const URL_QUERY = "https://port-0-aimpawpaw-backend-f69b2mlh9avo22.sel4.cloudtype.app/query";

const messageChains = [];
let chatCnt = 0;

const currentDate = new Date();
const yyyy = currentDate.getFullYear();
const mm = currentDate.getMonth() + 1;
const dd = currentDate.getDate();
const hh = currentDate.getHours();
const apm = hh > 12 ? "PM" : "AM";
const apmHh = hh > 12 ? hh - 12 : hh;
const min = currentDate.getMinutes();

timeTag.innerText = `You've connected at ${yyyy}-${mm}-${dd} ${apm} ${apmHh}:${min}`;

const chatInput = document.querySelector(".chat-input");
const chatSelectSpecies = document.querySelector(".chat-select-species");
const chatSelectSex = document.querySelector(".chat-select-sex");
const chatSelectAge = document.querySelector(".chat-select-age");
const chatInputWeight = document.querySelector(".chat-input-weight");
const chatSelectNeutral = document.querySelector(".chat-select-neutral");
const inputButton = document.querySelector(".input-button");


let preMessageIdx = 1;
let preUserMessage = "";
const preMessage = [
  "Hey there! 👋 I'm your friendly AI messenger, 'Aim PawPaw'. I'm here to help you with any questions you have about pets. But before we dive in, I have few questionnaire about your furry friend (🐶/🐱). 😆 Let's get started, shall we?",
  "Okay, let's start with the first question! Is your pet a dog or a cat?",
  "Please let us know the gender of your pet?",
  "Here comes question number three! 😊 May I know how old your furry friend is?",
  "Now, please provide the weight of your pet?",
  "Just one last question! Has your pet had a neutering operation?",
  "Thank you for your answer! 🥰 Please text your question naturally. For instance, you can ask, 'My pet is weeping a lot. What should I do?' Just like that!",
];
let conversation_id = null;

// Get the user's preference
var preUserMessageCached = localStorage.getItem("aimpawpaw.preUserMessageCached");
var preUserMessageCached_V = localStorage.getItem("aimpawpaw.preUserMessageCached_V");
const preUserMessageCached_currentV = "20230514E";

const chatSelectYesNo = document.querySelector(".chat-select-yesno");
let chatEventInput = chatSelectYesNo;

function debugPrint() {
  return;
  let txt = "[DEBUG] ";
  const argsArray = Array.from(arguments);
  argsArray.forEach((arg) => {
    txt += " " + arg;
  });
  console.log(txt);
}

async function main() {
  inputDisabled(true);

  if (
    preUserMessageCached &&
    preUserMessageCached_V === preUserMessageCached_currentV
  ) {
    const welcomeMsg = preMessage[0];

    debugPrint("check1");
    await createMessage(welcomeMsg, "assistant");

    selectInputType(0);
    const message =
      "Great news! I found the information you provided for your pet. Can we go ahead and use the same information below?";
    await createMessage(message, "assistant");
    await createMessage(`"${preUserMessageCached}"`, "assistant");
  } else {
    addPreMessageAssistant(0);
    addPreMessageAssistant(preMessageIdx);
  }
}

main();

function createMessage(message, messageClass, isHTML = false, delayTime = 200) {
  return new Promise((resolve, reject) => {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add(messageClass);

    // message = message.trim();
    // if (messageClass === "assistant" && chatEventInput.isEqualNode(chatInput)) {
    //   if (!(message.slice(-1) === "." || message.slice(-1) === "!" || message.slice(-1) === "?" || message.slice(-1) === ">")) {
    //     message += "\n\n" + " * 문장이 잘렸네요. 원하신다면 continue를 입력해서 답변을 완성해 보세요."
    //     chatInput.disabled = false;
    //     chatInput.value = "continue";
    //   }
    // }


    if (isHTML) {
      messageDiv.innerHTML = message;
    } else {
      messageDiv.innerText = message;
    }

    setTimeout(() => {
      chatMessages.appendChild(messageDiv);
      chatMessages.scrollTop = chatMessages.scrollHeight;
      resolve(messageDiv);
    }, delayTime);
  });
}
function createMessageNow(message, messageClass) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add(messageClass);
  messageDiv.innerText = message;
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return messageDiv;
}

async function addPreMessageAssistant(idx) {
  const messageClass = "assistant";
  const message = preMessage[idx];

  debugPrint("idx2 from addPreMessageAssistant: ", idx);

  if (idx === preMessage.length - 1) {
    messageChains.push({ role: "user", content: preUserMessage });
    localStorage.setItem("aimpawpaw.preUserMessageCached", preUserMessage);
    localStorage.setItem(
      "aimpawpaw.preUserMessageCached_V",
      preUserMessageCached_currentV
    );
  }

  debugPrint("idx from addPreMessageAssistant: ", idx);
  selectInputType(idx);

  await createMessage(message, messageClass);
}

function inputDisabled(isDisable) {
  if (isDisable) {
    //Diable
    chatInput.placeholder = "";
    chatInput.style.backgroundColor = "lightgray";
    chatInput.disabled = true;
    inputButton.disabled = true;
    inputButton.style.color = "rgb(50, 50, 50)";
  } else {
    //Enable
    chatInput.disabled = false;
    chatInput.placeholder = inputBoxPlaceholder;
    chatInput.style.backgroundColor = "white";
    inputButton.disabled = false;
    inputButton.style.color = "rgb(200, 200, 200)";
  }
}

async function addPreMessageUser(message) {
  const messageClass = "user";
  await createMessage(message, messageClass, 0);
}

function selectInputType(idx) {
  chatInput.style.display = "none";
  chatSelectSpecies.style.display = "none";
  chatSelectSex.style.display = "none";
  chatSelectAge.style.display = "none";
  chatInputWeight.style.display = "none";
  chatSelectNeutral.style.display = "none";
  chatSelectYesNo.style.display = "none";

  switch (idx) {
    case 0:
      chatEventInput = chatSelectYesNo;
      chatSelectYesNo.style.display = "block";
      // chatSelectYesNo.focus();
      break;
    case 1:
      chatEventInput = chatSelectSpecies;
      chatSelectSpecies.style.display = "block";
      // chatSelectSpecies.focus();
      break;
    case 2:
      chatEventInput = chatSelectSex;
      chatSelectSex.style.display = "block";
      // chatSelectSex.focus();
      break;
    case 3:
      chatEventInput = chatSelectAge;
      chatSelectAge.style.display = "block";
      // chatSelectAge.focus();
      break;
    case 4:
      chatEventInput = chatInputWeight;
      chatInputWeight.style.display = "block";
      // chatInputWeight.focus();
      break;
    case 5:
      chatEventInput = chatSelectNeutral;
      chatSelectNeutral.style.display = "block";
      // chatSelectNeutral.focus();
      break;
    default:
      chatEventInput = chatInput;
      chatInput.style.display = "block";
      // chatInput.focus();
      break;
  }
}

async function addMessage(message, isUser) {
  const messageClass = isUser ? "user" : "assistant";
  await createMessage(message, messageClass);
  messageChains.push({ role: messageClass, content: message });
}

async function addErrorMessage(message) {
  const messageClass = "assistant";

  await createMessage(message, messageClass);
  messageChains.pop();
}

async function showAssistantFetching() {
  const innerHTML = `<i class="fa fa-paw a" aria-hidden="true" ></i>
  <i class="fa fa-paw b" aria-hidden="true" ></i>
  <i class="fa fa-paw c" aria-hidden="true" ></i>
  <i class="fa fa-paw d" aria-hidden="true" ></i>
  <i class="fa fa-paw e" aria-hidden="true" ></i>
  <i class="fa fa-paw f" aria-hidden="true" ></i>
  `;
  const resultDiv = await createMessage(innerHTML, "assistant", true);
  return resultDiv;
}

const errorMessage = [
  "Oops... 😅 It seems there was a problem generating an answer. I apologize for the inconvenience. Would you mind giving it another try? Pretty please? 🥺",
  "Oops.. a problem generated again.. 😢😢😢.",
];
// let isFirstError = true;
let lastMsg = ""
async function fetchMessage() {
  const answerDiv = await showAssistantFetching();
  const loadingIcon = document.querySelector(".loading-icon")
  loadingIcon.style.display = "block";

  inputDisabled(true);

  let requestMessage;

  if (messageChains.length > 5) {
    requestMessage = [messageChains[0], ...messageChains.slice(-3)];

  } else {
    requestMessage = messageChains;
  }

  console.log(`[messageChains]\n`, messageChains);
  console.log(`[requestMessage]\n`, requestMessage);

  const bodyData = JSON.stringify({ language: "en", messageChains: [...messageChains] });

  const response = await fetch(URL_QUERY, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // "Access-Control-Allow-Origin": "*",
    },
    body: bodyData,
  })
    .then(response => {
      const reader = response.body.getReader();
      let result = "";

      return reader.read().then(function processText({ done, value }) {
        result += new TextDecoder().decode(value || new Uint8Array());
        answerDiv.innerHTML = `${result} ...`;
        answerDiv.scrollTop = answerDiv.scrollHeight;


        if (done) {
          answerDiv.innerHTML = `${result}`;
          messageChains.push({ role: 'assistant', content: result });
          loadingIcon.style.display = "none";
          inputDisabled(false);
        } else {
          return reader.read().then(processText);
        }
      })
    })
    .catch(error => {
      console.error("Error:", error);

      answerDiv.remove()
      addErrorMessage(errorMessage[0]);
      lastMsg = messageChains.slice(-1)[0].content;
      loadingIcon.style.display = "none";
      inputDisabled(false);
    });

  if (lastMsg !== "") {
    chatInput.value = lastMsg;
  }
}

const submitForm = async (event) => {
  event.preventDefault();
  const originalMessage = chatEventInput.value.trim();

  if (originalMessage === "") {
    inputButton.classList.add("shake");
    chatEventInput.classList.add("shake");
    setTimeout(() => {
      inputButton.classList.remove("shake");
      chatEventInput.classList.remove("shake");
    }, 500);
    // chatEventInput.focus();
    return;
  }

  inputDisabled(true);
  let message = originalMessage;

  // if the message is answers from pre-questions, the message will not be stacked and request fetcing.
  if (chatEventInput.isEqualNode(chatInput)) {
    await addMessage(message, true);
    fetchMessage();
    chatInput.value = "";

    // chatInput.focus();
  } else {
    await addPreMessageUser(message);

    if (chatEventInput.isEqualNode(chatSelectYesNo)) {
      if (message.substring(0, 1) === "Y") {
        preUserMessage = preUserMessageCached;
        preMessageIdx = preMessage.length - 1;
        await addPreMessageAssistant(preMessageIdx);
      } else {
        await addPreMessageAssistant(1);
        preMessageIdx = 1;
      }
    } else {
      preUserMessage += message + " ";
      preMessageIdx++;
      await addPreMessageAssistant(preMessageIdx);
    }
  }

  if (preMessageIdx >= preMessage.length - 1) {
    inputDisabled(false);
  }

  return;
};

chatForm.addEventListener("submit", submitForm);
chatForm.addEventListener("change", (event) => {
  if (chatEventInput === chatInput) {
    return;
  } else {
    submitForm(event);
  }
});


function handleFgContainer() {
  const fgContainer = document.querySelector("#fg-container");
  fgContainer.style.display =
    (fgContainer.style.display === "none" || fgContainer.style.display === "") ? "block" : "none";
}

function handleRefreshChecker() {
  const refreshChecker = document.querySelector("#refresh-checker");
  refreshChecker.style.display =
    (refreshChecker.style.display === "none" || refreshChecker.style.display === "") ? "block" : "none";
}


function handleLanguage() {
  const refreshForLanguage = document.querySelector("#refresh-for-language");

  refreshForLanguage.style.display =
    (refreshForLanguage.style.display === "none" || refreshForLanguage.style.display === "") ? "block" : "none";
}

function changeLanguage() {
  localStorage.setItem("aimpawpaw.language", "ko");
  window.location.reload();
}

