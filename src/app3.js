import $ from 'jquery'
import './app3.css'
const $square = $('#app3 .square')

$square.on('click', ()=>{
  $square.toggleClass('active')
})
// 点击square，如果square没有类名active，就加上类名active；反之，如果有，就删除类名