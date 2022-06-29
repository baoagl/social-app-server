module.exports = {
  useTabs: false, // sử dụng tab đầu dòng
  tabWidth: 4, // chiều rộng tab
  endOfLine: 'auto',
  semi: false, // dấu ; cuối dòng
  trailingComma: 'none', // điền dấu , ở item cuối cùng của object
  // bracketSpacing: true, // khoảng trắng { a } thay vì {a}
  singleQuote: true, // dấu nháy '' thay vì ""
  printWidth: 100, // chiều dài 1 dòng: 120
  arrowParens: 'avoid', // arrowfunction dạng: a => {} thay vì (a)=>{}
  htmlWhitespaceSensitivity: 'ignore', // <a></a> không cho xuống dòng ngu ngu dạng <a></a  \n >
  quoteProps: 'as-needed' // Bỏ dấu ngoặc đơn ở key của Object
}
