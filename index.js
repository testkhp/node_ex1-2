const express = require('express')
const app = express()
const port = 3000

//ejs 파일 사용하고 싶을 때?
app.set("view engine","ejs")
//정적파일들(css,js,img) 사용하고 싶을 때?
app.use(express.static('public'))
 
//라우터 설정
app.get('/', (req, res) => {
  res.render("index.ejs")
})

app.get('/sub', (req, res) => {
    res.render("sub.ejs")
})

//서버가 시작이 됬을 때 사용되는 코드
app.listen(port, () => {
  console.log("서버가 정상적으로 실행되고 있습니다.")
})