import axios from 'axios'
import qs from 'qs'
import Login from '../pages/login/Login'

export const IP='http://127.16.14.244:668'
// export const IP='http://192.168.101.4:668'
// export const IP='http://172.20.10.8:668'
// export const IP='http://192.168.137.1:668'
const $http=axios.create({
    baseURL:IP,
    timeout:10000,
})


export const clickLogin=(acc,pwd)=>{
    return $http.post('/login.php',qs.stringify({acc,pwd}))
}

export const Regrequst=(acc,pwd)=>{
    return $http.post('/reg.php',qs.stringify({acc,pwd}))
}

export const valiData=()=>{
    return $http.get('/valitecode.php')
}

export const gethouselist=()=>{
    return $http.get('/gethouselist.php')
}


