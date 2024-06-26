// homeController.js
"use strict";

/**
 * Listing 9.6 (p. 153)
 * 콜백 함수를 homeController.js의 홈 컨트롤러로 이동
 */
// @TODO: exports 객체를 사용해 sendReqParam 함수를 모듈로 내보낸다
exports.sendVegParam = (req,res) => {
    let veg = req.parms.vegetable.toUpperCase();
    res.send(`This is the <span stytle='color:purple>${veg}</span>page`);
}; // 지정 라우트 요청 처리를 위한 함수 생성

exports.sendUserParam = (req,res) => {
    let uname = req.parms.username.toUpperCase();
    res.send(`This is the <span stytle='color:blue>${uname}</span>page`);
};
exports.sendCourseParam = (req,res) => {
    let course = req.parms.courseID.toUpperCase();
    res.send(`This is the <span stytle='color:goldenrod>${course}</span>page`);
};
/**
 * 다른 라우트를 옮기기
 */
exports.getHome = (req,res) => {
    res.send("This is the <span style='color: red;'>Home</span> page")
}; // @TODO: exports 객체를 사용해 getHome 함수를 모듈로 내보낸다
exports.getAbout = (req,res) => {
    res.send("This is the <span style='color: blue;'>About</span> page")
};

exports.getContact = (req,res) => {
    res.send("This is the <span style='color: orange;'>Contact</span> page")
}; // @TODO: exports 객체를 사용해 getContact 함수를 모듈로 내보낸다
exports.postContact = (req,res) => {
    res.send("Contact info submitted!!!!!")
}; // @TODO: exports 객체를 사용해 postContact 함수를 모듈로 내보낸다

// @TODO: exports 객체를 사용해 logRequestPaths 미들웨어 함수를 모듈로 내보낸다
exports.logRequestPaths = (req,res,next) => {
    console.log(`reqest to : ${req.url}`);
    next();
};
