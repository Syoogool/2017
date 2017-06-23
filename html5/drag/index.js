
// 拖动元素是依次发生事件：dragstart drag  dragend
// 放置元素时依次发生事件：dragenter dragover dragleave(drop)


var dragEle = document.getElementById("box");
var dropTarget = document.getElementById('drop-box');


// dragEle.addEventListener('dragstart', function(e) {
//   e.dataTransfer.effectAllowed = 'move';
// })
// 设置数据
dragEle.addEventListener('dragstart', function(e) {
  console.log(e.dataTransfer);
  e.dataTransfer.setData("Text", e.target.id);
});

//  重写dragover事件的默认行为自定义放置目标
dropTarget.addEventListener('dragover', function(e) {
  e.preventDefault();
//   e.dataTransfer.dropEffect = 'move';
});

// 接受数据
dropTarget.addEventListener('drop', function(e) {
  // e.preventDefault();
  var data = e.dataTransfer.getData("Text");
  console.log(data);
  e.target.appendChild(document.getElementById(data));
})
