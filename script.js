const chatApp = document.querySelector("#chat");
const chatMessages = document.querySelector("#chat__messages");
const chatForm = document.querySelector("#chat-form");
const timeTag = document.querySelector(".notice");

// const URL_QUERY = "http://127.0.0.1:3000/query";
// const URL_QUERY = "https://port-0-aimpawpaw-backend-f69b2mlh9avo22.sel4.cloudtype.app/query";
const URL_QUERY = "https://aimpawpaw2.azurewebsites.net/query"

const messageChains = [];
let chatCnt = 0;

const currentDate = new Date();
const yyyy = currentDate.getFullYear();
const mm = currentDate.getMonth() + 1;
const dd = currentDate.getDate();
const hh = currentDate.getHours();
const apm = hh > 12 ? "오후" : "오전";
const apmHh = hh > 12 ? hh - 12 : hh;
const min = currentDate.getMinutes();

timeTag.innerText = `${yyyy}년 ${mm}월 ${dd}일 ${apm} ${apmHh}시 ${min}분 에 접속하셨어요.\n- 대화 새로고침은 상단(↑)의 AIm PawPaw를 클릭하세요.\n- 앱 정보보기는 오른쪽 위(↗)에 있는 발바닥 클릭하세요.`;

const chatInput = document.querySelector(".chat-input");
const chatSelectSpecies = document.querySelector(".chat-select-species");
const chatSelectSex = document.querySelector(".chat-select-sex");
const chatSelectAge = document.querySelector(".chat-select-age");
const chatInputWeight = document.querySelector(".chat-input-weight");
const chatSelectNeutral = document.querySelector(".chat-select-neutral");
const inputButton = document.querySelector(".input-button");


let preMessageIdx = 1;
let preUserMessage = "우리 애는 ";
const preMessage = [
  "안녕하세요~👋\n 반려동물에 대한 궁금증을 해결해 드릴 AI 메신져 '아임포포(AIm PawPaw)'입니다. 대화를 시작하기 전에 집사님의 반려동물(🐶/🐱)에 대한 5가지 짧은 질문을 먼저 할께요😆.",
  "첫번째 질문입니다~ 반려동물은 강아지인가요? 고양이인가요?",
  "혹시 아이의 성별은 어떻게 되나요?",
  "벌써 세번째 질문이네요~ 😊 반려동물의 나이는 어떻게 되나요?",
  "몸무게가 대략 kg 정도인지 알 수 있을까요?",
  "이제 마지막 질문이네요! 혹시 중성화 수술은 했나요?",
  "답변 감사합니다!🥰\n이제 궁금하신 내용을 자연스럽게 문의해 주세요.🤔 예를 들어, '우리 애가 눈물이 많이 나요. 어떻게 하죠?'와 같이요.",
];
let conversation_id = null;

// Get the user's preference
var preUserMessageCached = localStorage.getItem("preUserMessageCached");
var preUserMessageCached_V = localStorage.getItem("preUserMessageCached_V");
const preUserMessageCached_currentV = "20230502A";

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
      "집사님! 기존에 입력하신 반려동물의 정보를 확인했습니다. 아래 정보를 그대로 사용할까요?";
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
    localStorage.setItem("preUserMessageCached", preUserMessage);
    localStorage.setItem(
      "preUserMessageCached_V",
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
    chatInput.placeholder =
      "여기에 질문을 입력하신 후, 오른쪽 [보내기] 버튼을 클릭해 주세요~ ^^";
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
  innerHTML = `<i class="fa fa-paw a" aria-hidden="true" ></i>
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
  "어이쿠.. 😅\n 답변을 생성하다가 문제가 발생했어요. 죄송하지만 한 번더 시도해 보시겠어요? 🥺.",
  "헉.. 에러가 또 발생했네요.. 😢😢😢.",
];
// let isFirstError = true;
let lastMsg = ""
async function fetchMessage() {
  const answerDiv = await showAssistantFetching();
  const loadingIcon = document.querySelector(".loading-icon")
  loadingIcon.style.display = "block";

  inputDisabled(true);

  if (messageChains.length > 5) {
    requestMessage = [messageChains[0], ...messageChains.slice(-3)];

  } else {
    requestMessage = messageChains;
  }

  console.log(`[messageChains]\n`, messageChains);
  console.log(`[requestMessage]\n`, requestMessage);

  bodyData = JSON.stringify({ messageChains: [...messageChains] });

  const response = await fetch(URL_QUERY, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
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
      if (message.substring(0, 1) === "예") {
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
    fgContainer.style.display === "none" ? "block" : "none";
}

function handleRefreshChecker() {
  const refreshChecker = document.querySelector("#refresh-checker");
  refreshChecker.style.display =
    refreshChecker.style.display === "none" ? "block" : "none";
}
