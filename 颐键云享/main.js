// 热门话题区数据
const hotTopics = [
  { topic: "健康饮食小常识", views: "1.2w人关注" },
  { topic: "如何预防跌倒", views: "9800人关注" },
  { topic: "老年人兴趣小组招募", views: "8600人参与" },
  { topic: "智能手机使用技巧", views: "1.1w人学习" },
  { topic: "社区义诊活动", views: "7200人报名" },
  { topic: "广场舞交流", views: "1.5w人参与" },
  { topic: "银发志愿者故事", views: "5300人点赞" },
  { topic: "老年慢病管理", views: "8900人关注" }
];

function renderHotTopics() {
  const list = document.getElementById('hotList');
  list.innerHTML = '';
  hotTopics.forEach(topic => {
    list.innerHTML += `<div class="hot-topic">${topic.topic} <span style='font-size:12px;color:#888'>${topic.views}</span></div>`;
  });
}

function addPost() {
  alert('模拟：跳转到发布/发帖页面（未实现）');
}

renderHotTopics();

// 粒子特效相关
function bubbles() {
  document.querySelectorAll('.particletext.bubbles').forEach(function(el){
    var bubblecount = Math.floor((el.offsetWidth/50)*10);
    for(var i = 0; i <= bubblecount; i++) {
      var size = Math.floor(Math.random() * (8 - 4 + 1)) + 4;
      var top = Math.floor(Math.random() * (80 - 20 + 1)) + 20;
      var left = Math.floor(Math.random() * 95);
      var delay = (Math.random() * 3).toFixed(2);
      var span = document.createElement('span');
      span.className = 'particle';
      span.style.cssText = `top:${top}%;left:${left}%;width:${size}px;height:${size}px;animation-delay:${delay}s;`;
      el.appendChild(span);
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  bubbles();
}); 