'use strict'

const STORAGE_KEY = 'userInfoDB'

function saveUserInfo(){
    const userData ={
        email: email.value,
        age: age.value,
        GBcolor: bgColor.value,
        txtColor: textColor.value,
        birthDate: birthDate.value,
        birthTime: birthTime.value
    }
    console.log(userData)
    _saveUserInfo(userData)
}


function _saveUserInfo(val){
    saveToStorage(STORAGE_KEY, val)
}