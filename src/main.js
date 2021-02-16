import "./reset.css";
import "./global.css";

import x from './app1.js' // 引用'./app1.js'导出的默认变量，并命名为x
import y from './app2.js'
import "./app3.js";
import "./app4.js";

x.init('#app1')
y.init('#app2')