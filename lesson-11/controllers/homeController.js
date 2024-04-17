// homeController.js
"use strict";

/**
 * Listing 10.2
 * 
 */
exports.getHome = (req,res) => {
    res.render ('index', {
        name: "mike", 
    people :{
        usa :{
            einstein : "Albert Einstein",
            musk : "Elon Musk"
            
        },
        korea : {
            psy : "싸이다!",
            kim : "김민재",
        },
        mexico : {
            jesus : "Jesus Alvarez"
        }

    } });
    }

exports.respondWithName1 = (req, res) => {
    res.render('index');
}

/**
 * Listing 10.3
 */
exports.respondWithName = (req, res) => {
    let paramsName = req.params.myName; // 라우트 매개변수 /name/myName;
    res.render('index', { 
        name: paramsName,
    people :{
        usa :{
            einstein : "Albert Einstein",
            musk : "Elon Musk"
            
        },
        korea : {
            psy : "싸이다!",
            kim : "김민재",
        },
        mexico : {
            jesus : "Jesus Alvarez"
        }

    } });
};