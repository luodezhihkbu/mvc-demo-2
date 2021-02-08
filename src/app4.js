import $ from "jquery";
import "./app4.css";

const $circle = $('#app4 .circle')

$circle.on('mouseenter', ()=>{ 
  $circle.addClass('active')
}).on('mouseleave', ()=>{
  $circle.removeClass('active') 
})
// 鼠标进去，增加类名active；鼠标出去，删除类名active