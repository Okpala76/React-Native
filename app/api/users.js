import apiclient from "./client";

const register = (userInfo) => apiclient.apiClient2.post("/users", userInfo);

export default {register};