import "./app2.css";
import $ from "jquery";

const $tabBar = $("#app2 .tab-bar");
const $tabContent = $("#app2 .tab-content");

$tabBar.on("click", "li", e => { // 事件委托
  const $li = $(e.currentTarget);
  $li
    .addClass("selected")
    .siblings()
    .removeClass("selected");
    // 这叫“样式与行为分离”，而不是用jQuery操作css。
    // 点击一个li，给这个li增加类名selected，同时删除其他li的类名。类名selected的样式在css里设置。
  const index = $li.index(); // 获取点击的是第几个li
  $tabContent
    .children()
    .eq(index) // 表示选择第几个
    .addClass("active")
    .siblings()
    .removeClass("active");
});

$tabBar.children().eq(0).trigger('click') // 默认点击tab1