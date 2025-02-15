// window.addEventListener('scroll', () => {获取页面锚点
//     const sections = document.querySelectorAll('section');
//     sections.forEach(section => {
//         const rect = section.getBoundingClientRect();
//         if (rect.top <= 100 && rect.bottom >= 100) {
//             document.querySelectorAll('nav .sidebar a').forEach(a => {
//                 a.classList.remove('active');
//                 if (a.getAttribute('href') === `#${section.id}`) {
//                     a.classList.add('active');
//                 }
//             });
//         }
//     });
// });
// 获取所有导航项
const navItems = document.querySelectorAll('.sidebar li a');
// 获取当前页面的锚点
const currentHash = window.location.hash;

// 遍历导航项，查找匹配的链接并添加高亮类
navItems.forEach(item => {
    if (item.getAttribute('href') === currentHash) {
        item.classList.add('active');
    }
});