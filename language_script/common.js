//export const URL_QUERY = "http://127.0.0.1:3000/query";
//export const URL_QUERY = "https://port-0-aimpawpaw-backend-f69b2mlh9avo22.sel4.cloudtype.app/query";

const URL_QUERY = "https://aimpawpaw.azurewebsites.net/query"
// const URL_QUERY = "http://localhost:8080/query"


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



async function preHeatingFetch() {
  console.log("preheating started");

  let requestMessage;
  requestMessage = messageChains;

  const bodyData = JSON.stringify({ language: "en", messageChains: [...messageChains] });

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
        console.log("+");
      })
    })
    .catch(error => {
      console.error("Error:", error);
    });

  console.log("preheating finished");

}