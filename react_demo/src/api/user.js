import axios from '../utils/axios'
import { getItem } from '../utils/webStorage'
export const UserLogin = (us, ps) => {
    return new Promise((resolve, reject) => {
        let url = '/hehe/login/login'
        axios.post(url, { us, ps })
            .then((res) => {
                if (res.err == 0) {
                    resolve(res)
                } else {
                    reject(res)
                }

            })
            .catch((err) => {
                reject(err)
                console.log(err)
            })
    })
}

export const UserLogout = async () => {
    let url = '/hehe/logout/logout'
    let uid = getItem('uid') || ''
    let result = await axios.post(url, { uid })
    //  console.log(result)
    if (result.err == 0) {
        return result
    } else {
        throw result
    }
}