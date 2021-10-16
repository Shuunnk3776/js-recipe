const memoInput = document.getElementById("memo-input")
const addContainer = document.getElementById("add-button")
const memoContainer = document.getElementById("memo-container")

addContainer.onclick = function() {
  //valueで値を与える
  const text = memoInput.value
  //memoContainerの中にcardとcontentのdivをつくって追加（append）する
  const card = document.createElement("div")
  card.className = "card"
  const content = document.createElement("div")
  content.className = "content"
  content.textContent = text
  card.append(content)
  //削除ボタンを作りたい
  const deleteButton = document.createElement("button")
  deleteButton.className = "deleteButton"
  deleteButton.textContent = "削除"
  card.append(deleteButton)
  //削除機能をつける（remove）
  deleteButton.onclick = function() {
    card.remove()
  }
  memoContainer.append(card)
  //inputタグの中身が更新されるようにしたい
  memoInput.value = ""
}
