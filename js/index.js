const totalTime = 10000;
const oldTime = Date.now();

const timeId = setInterval(() => {
  const currentTime = Date.now();

  // 差分を求める
  const diff = currentTime - oldTime;

  const remainMSec = totalTime - diff;

  //ミリ秒を整数に変換
  const remainSec = Math.ceil(remainMSec / 1000);

  let label = `残り${remainSec}秒`;

  // 0秒以下になったら
  if (remainMSec <= 0) {
    clearInterval(timeId);

    // タイマー終了の文言を表示する
    label = "終了";
  }

  // 画面に表示する
  document.querySelector('#log').innerHTML = label;
})