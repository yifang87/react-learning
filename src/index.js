import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //div生成
  const div = document.createElement("div");
  div.className = "row";
  //li生成
  const li = document.createElement("li");
  li.innerText = inputText;
  //完了ボタン生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click",()=>{
    
  });

  const deleteButton = document.createElement("button");
  completeButton.innerText = "削除";
  deleteButton.addEventListener("click",()=>{
    //親タグのdivを未完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    document.get("incomplete-list").removeChild(deleteTarget)
  });

  //divの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  document.getElementById("incompete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
