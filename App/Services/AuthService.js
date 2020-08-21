import $http from "App/Common/Axios";

function login(user, password) {
    return $http.post('token', {
        username: user,
        password: password
    }).then((response)=>{
        if (response.status === 200) {
            return response.data.access;
        }
    }).catch(e=> {
        return null
    })
}

export const authService = {
    login,
}
