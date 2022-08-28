import axios from "axios";

const clientApi = axios.create({
  baseURL: "http://mbti-env.eba-w4bnzjmm.ap-northeast-2.elasticbeanstalk.com/",
});

export default clientApi;