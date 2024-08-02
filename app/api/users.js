import apiclient from "./client";

const register = (userInfo) => apiclient.apiClient2.post("/users", userInfo);

const messages = (userInfo) => apiclient.apiClient2.post("/messages", userInfo);

export default {register};