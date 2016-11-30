var game = new Chess();

// CPUプレイヤーの移動処理
var makeCPUmove = function() {
  
  // CPUが動ける場所を取得し変数に代入
  var cpuMoves = game.moves();

  // 駒が動かせる場所をランダムに1つ選ぶ
  var randomNum = Math.floor(Math.random() * cpuMoves.length);

  // ゲームの終了判定
  if (cpuMoves.length === 0) {
    alert('ゲーム終了');
    
    // チェスボードを元に戻す
    game.reset();
  }

  // 選択した場所へ駒を動かす
  game.move(cpuMoves[randomNum]);

  // チェスボードの描画を更新する
  board.position(game.fen());
};



// 駒を置いた後の処理
var onDrop = function(source, target) {
  
  // 駒の移動パターンをチェックする
  var move = game.move({

    from: source,  // 移動元の位置
    to: target     // 移動後の位置

  });
  
  // 駒の移動に問題があれば元の位置に戻す
  if (move === null) return 'snapback';
  
  // CPUプレイヤーの移動処理を実行。
  // アニメーションをスムーズにするため、
  // 少しタイミングをずらす
  window.setTimeout(makeCPUmove, 250);
};



// 設定オプション
var config = {
  
  draggable: true,    // 駒をマウスで移動する
  position: 'start',  // 駒の初期位置
  onDrop: onDrop      // 駒の移動後のイベント処理

  
};

// チェスボードを描画
var board = ChessBoard('board', config);
