const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")

let count = 0

// ボタンをクリックしたときの処理を登録
plusButton.onclick = function() {
  // count を更新
  count += 1
  // count を表示
  display.textContent = count
}

const minusButton = document.getElementById("minus-button")

minusButton.onclick = function() {
  count -= 1
  display.textContent = count
}

const doubleButton = document.getElementById("double-button")

doubleButton.onclick = function() {
  count *= 2
  display.textContent = count
}
