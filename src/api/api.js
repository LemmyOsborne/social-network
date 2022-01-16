import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "f9f2b78b-33a5-4bb1-8984-36609ada0956"
    }
})

export const usersAPI = {
    getUsers(currentPage, count) {
        return instance.get(`users?page=${currentPage}&count=${count}`)
            .then(response => response.data)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`, {})
            .then(response => response.data)
    }
}

export const authAPI = {
    getAuthUser() {
        return instance.get("auth/me")
            .then(response => response.data)
    },
    loginUser(loginData) {
        return instance.post("auth/login",loginData)
            .then(response => response.data)
    },
    logoutUser() {
        return instance.delete("auth/login")
            .then(response => response.data)
    }
}

export const profileAPI = {
    getUserProfile(userId) {
       return instance.get("profile/" + userId)
            .then(response => response.data)
    },
    getUserStatus(userId) {
        return instance.get("profile/status/" + userId)
            .then(response => response.data)
    },
    updateUserStatus(status) {
        return instance.put("profile/status/", {status})
            .then(response => response.data)
    },

}