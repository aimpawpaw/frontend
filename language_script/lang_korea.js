// import { URL_QUERY } from './common.js';

const titleElement = document.getElementById("title")
titleElement.innerText = "반려동물 집사들의 든든한 AI 동반자 - 아임포포 AIm PawPaw.";

const introTitleElement = document.getElementById("intro-title");
introTitleElement.innerText = "프롤로그";

const introElement = document.getElementById("intro")
introElement.innerHTML = `
안녕하세요.👋 너무 나도 사랑스러운 벨라를 키우고 있는 반려견 집사입니다~😃 <br> 벨라를 키우면서, 평소와 다른 행동을 할때 종종 동물병원을 방문하곤 하는데요..
          병원에 갈 만한 상황이면
          병원에 가면 되는데, 딱히 그렇지 않은 경우가 있잖아요? 그럴때면 포털을 검색하거나 지인 분께 물어 보곤 하는데, 사실 혼란스러운 경우가 많더라구요. 그래서 '혹시나..'' 하는 마음에, 요즘 핫한
          <span style="color:darkseagreen">ChatGPT</span>로 벨라에 대한 질문을 해보았는데.. 결과는? <br><br>'대박👍' 너무 깔끔하게 답을 해주는거에요!🥹
          그래서 많은 집사님들께 도움이 되었으면 하는 마음에, 집사님들이 쉽게 사용할 수 있는 앱을 만들어 보았습니다. 지금도 반려동물에게 사랑과 정성을 아끼지 않으시는 집사님들에게 작은 도움이 되었으면
          합니다! 😂
`

const qnaElement = document.getElementById("qna")
qnaElement.innerHTML = `
<p style="text-align:center">혹시 앱에 대해서 더 궁금하신 가요?</p>
          <details>
            <summary>대화 내용이 보관이 되나요?</summary>
            <p>네~ 본 앱은 서비스 개선을 위해서 대화 내용을 보관하고 있습니다. 하지만, 사용자의 접속 장비 정보 또는 IP 정보와 같이 개인을 확인 할 수 있는 내용은 절대 보관하지 않으며, 오직
              반려 동물과 관련된 문의 내용과 답변 내용만 보관하고 있습니다. 😅</p>
          </details>
          <details>
            <summary>광고 배너가 꼭 필요한가요?</summary>
            <p>본 앱을 운영하기 위해서는 서버 운영비와 Chat GPT 사용료를 여러분들을 대신해서 제가 감당해야 하기 때문에, 광고비로 충당을 해야
              한답니다..🤣 너그러운 이해 부탁드릴께요~ 😅</p>
          </details>
          <details>
            <summary>배너의 배경은 직접 그리셨나요?</summary>
            <p>그럴리가요~ 😆 해당 그림인 무료로 좋은 그림을 구할 수 있는 <a
                href="https://www.freepik.com/free-vector/hand-drawn-pet-sitting-facebook-cover_32874038.htm#query=pets&position=1&from_view=search&track=sph">freepik.com</a>에서
              상용으로 사용이 허락된 이미지 입니다. </p>
          </details>
          <details>
            <summary>추가 문의 사항이 있으신가요?</summary>
            <p>앱과 관련된 추가 문의 사항은 아래 이메일 주소로 연락주세요! 🤣</p>
            <a href="mailto:aimpawpaw.question@gmail.com">aimpawpaw.question@gmail.com</a>
          </details>
`
const closeButtonElement = document.getElementById("close-button")
closeButtonElement.innerText = "닫기"


const refreshMessageElement = document.getElementById("refresh_message")
refreshMessageElement.innerText = "새로 고침을 선택하셨어요. 아래 [예] 버튼을 클릭하시면, 새로고침이 되면서 대화 내용이 모두 삭제 됩니다. 새로 고침하시겠어요?"

const refreshButtonMessageYes = document.getElementById("refresh_button_yes")
refreshButtonMessageYes.innerText = "예!"

const refreshButtonMessageNo = document.getElementById("refresh_button_no")
refreshButtonMessageNo.innerText = "아니요!"

const refreshLanguageMessageElement = document.getElementById("refresh_language_message")
refreshLanguageMessageElement.innerText = "It switchs the language to English. Please note that after the change, all records of inquiries made in Korean will be removed. \n 영어로 언어를 변경합니다. 변경 후에는 한국어로 문의한 기록이 모두 제거 됩니다."

const refreshLanguageButtonMessageYes = document.getElementById("refresh_lang_button_yes")
refreshLanguageButtonMessageYes.innerText = "Yes, go ahead!\n네 변경해주세요!"

const refreshLanguageButtonMessageNo = document.getElementById("refresh_lang_button_no")
refreshLanguageButtonMessageNo.innerText = "No thanks.\n아니요. 취소할래요."


const chatInputElement = document.getElementById("chat_input")
const inputBoxPlaceholder = "여기에 질문을 입력하신 후, 오른쪽 [보내기] 버튼을 클릭해 주세요~ ^^ (최대 100글자)"
chatInputElement.placeholder = inputBoxPlaceholder

const opt10Element = document.getElementById("opt10")
opt10Element.innerText = "아이의 종을 선택해 주세요."

const opt11Element = document.getElementById("opt11")
opt11Element.value = "강아지입니다."
opt11Element.innerText = "강아지입니다."

const opt12Element = document.getElementById("opt12")
opt12Element.value = "고양이입니다."
opt12Element.innerText = "고양이입니다."


const opt20Element = document.getElementById("opt20")
opt20Element.innerText = "반려동물의 성별을 선택해 주세요."

const opt21Element = document.getElementById("opt21")
opt21Element.value = "남자입니다."
opt21Element.innerText = "우리 아이는 남자입니다."

const opt22Element = document.getElementById("opt22")
opt22Element.value = "여자입니다."
opt22Element.innerText = "우리 아이는 여자입니다."

const opt30Element = document.getElementById("opt30")
opt30Element.innerText = "반려동물의 나이를 선택해주세요."

const opt31Element = document.getElementById("opt31")
opt31Element.value = "나이는 1살 미만입니다."
opt31Element.innerText = "1살 미만입니다."

const opt32Element = document.getElementById("opt32")
opt32Element.value = "나이는 1~4살 사이입니다."
opt32Element.innerText = "1~4살 사이입니다."

const opt33Element = document.getElementById("opt33")
opt33Element.value = "나이는 5~9살 사이입니다."
opt33Element.innerText = "5~9살 사이입니다."

const opt34Element = document.getElementById("opt34")
opt34Element.value = "나이는 10~14살 사이입니다."
opt34Element.innerText = "10~14살 사이입니다."

const opt35Element = document.getElementById("opt35")
opt35Element.value = "나이는 15살 이상입니다."
opt35Element.innerText = "15살 이상입니다."

const opt40Element = document.getElementById("opt40")
opt40Element.innerText = "반려동물의 몸무게를 선택해주세요."

const opt41Element = document.getElementById("opt41")
opt41Element.value = "몸무게는 1kg 미만입니다."
opt41Element.innerText = "1kg 미만입니다."

const opt42Element = document.getElementById("opt42")
opt42Element.value = "몸무게는 1~5kg 사이입니다."
opt42Element.innerText = "1~5kg 사이입니다."

const opt43Element = document.getElementById("opt43")
opt43Element.value = "몸무게는 5~10kg 사이입니다."
opt43Element.innerText = "5~10kg 사이입니다."

const opt44Element = document.getElementById("opt44")
opt44Element.value = "몸무게는 10~18kg 사이입니다."
opt44Element.innerText = "10~18kg 사이입니다."

const opt45Element = document.getElementById("opt45")
opt45Element.value = "몸무게는 18~25kg 사이입니다."
opt45Element.innerText = "18~25kg 이상입니다."

const opt46Element = document.getElementById("opt46")
opt46Element.value = "몸무게는 25kg 이상입니다."
opt46Element.innerText = "25kg 이상입니다."


const opt50Element = document.getElementById("opt50")
opt50Element.innerText = "중성화 수술 여부를 선택해주세요."

const opt51Element = document.getElementById("opt51")
opt51Element.value = "중성화 수술을 했습니다."
opt51Element.innerText = "중성화 수술을 했습니다."

const opt52Element = document.getElementById("opt52")
opt52Element.value = "중성화 수술은 안했습니다."
opt52Element.innerText = "중성화 수술은 안했습니다."

const opt90Element = document.getElementById("opt90")
opt90Element.innerText = "예, 아니오 중 하나를 선택해 주세요."

const opt91Element = document.getElementById("opt91")
opt91Element.value = "예. 그렇게 해주세요."
opt91Element.innerText = "예. 그렇게 해주세요."

const opt92Element = document.getElementById("opt92")
opt92Element.value = "아니오. 새로 입력할께요."
opt92Element.innerText = "아니오. 새로 입력할께요."


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
const apm = hh > 12 ? "오후" : "오전";
const apmHh = hh > 12 ? hh - 12 : hh;
const min = currentDate.getMinutes();

timeTag.innerText = `${yyyy}년 ${mm}월 ${dd}일 ${apm} ${apmHh}시 ${min}분 에 접속하셨어요.`;

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
  "안녕하세요~ 👋\n 반려동물에 대한 궁금증을 해결해 드릴 AI 메신져 '아임포포(AIm PawPaw)'입니다. 대화를 시작하기 전에 집사님의 반려동물(🐶/🐱)에 대한 5가지 짧은 질문을 먼저 할께요😆.",
  "첫번째 질문입니다~ 반려동물은 강아지인가요? 고양이인가요?",
  "혹시 아이의 성별은 어떻게 되나요?",
  "벌써 세번째 질문이네요~ 😊 반려동물의 나이는 어떻게 되나요?",
  "몸무게가 대략 kg 정도인지 알 수 있을까요?",
  "이제 마지막 질문이네요! 혹시 중성화 수술은 했나요?",
  "답변 감사합니다!🥰\n이제 궁금하신 내용을 자연스럽게 문의해 주세요.🤔 예를 들어, '우리 애가 눈물이 많이 나요. 어떻게 하죠?'와 같이요.",
];
let conversation_id = null;

// Get the user's preference
var preUserMessageCached = localStorage.getItem("aimpawpaw.preUserMessageCached");
var preUserMessageCached_V = localStorage.getItem("aimpawpaw.preUserMessageCached_V");
const preUserMessageCached_currentV = "20230514K";

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

  let requestMessage;

  if (messageChains.length > 5) {
    requestMessage = [messageChains[0], ...messageChains.slice(-3)];

  } else {
    requestMessage = messageChains;
  }

  console.log(`[messageChains]\n`, messageChains);
  console.log(`[requestMessage]\n`, requestMessage);

  const bodyData = JSON.stringify({ language: "ko", messageChains: [...messageChains] });

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


// function handleFgContainer() {
//   const fgContainer = document.querySelector("#fg-container");
//   fgContainer.style.display =
//     (fgContainer.style.display === "none" || fgContainer.style.display === "") ? "block" : "none";
// }

// function handleRefreshChecker() {
//   const refreshChecker = document.querySelector("#refresh-checker");
//   refreshChecker.style.display =
//     (refreshChecker.style.display === "none" || refreshChecker.style.display === "") ? "block" : "none";
// }


// function handleLanguage() {
//   const refreshForLanguage = document.querySelector("#refresh-for-language");

//   refreshForLanguage.style.display =
//     (refreshForLanguage.style.display === "none" || refreshForLanguage.style.display === "") ? "block" : "none";
// }

function changeLanguage() {
  localStorage.setItem("aimpawpaw.language", "en");
  window.location.reload();
}

