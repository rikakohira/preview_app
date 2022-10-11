document.addEventListener('DOMContentLoaded', function(){
  // フォームを取得
  const postForm = document.getElementById('new_post');
  // プレビューを取得
  const previewList = document.getElementById('previews');
  if (!postForm) return null;
  console.log("preview.jsが読み込まれました");

  // input要素を取得
  const fileField = document.querySelector('input[type="file"][name="post[image]"]');
  // ファイル選択時にイベント発火
  fileField.addEventListener('change', function(e){
    // プレビューが存在する場合は削除
    const alreadyPreview = document.querySelector('.preview');
    if (alreadyPreview) {
      alreadyPreview.remove();
    };
    const file = e.target.files[0];
    // 画像情報を渡してURLを生成
    const blob = window.URL.createObjectURL(file);
    // 画像を表示するHTMLを作成
    const previewWrapper = document.createElement('div');
    previewWrapper.setAttribute('class', 'preview');
    const previewImage = document.createElement('img');
    previewImage.setAttribute('class', 'preview-image');
    previewImage.setAttribute('src', blob);

    // 生成したHTMLの要素をブラウザに表示させる
    previewWrapper.appendChild(previewImage);
    previewList.appendChild(previewWrapper);
  });
});