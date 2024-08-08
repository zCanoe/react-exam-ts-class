let BASE_URL = "";
if (process.env.NODE_ENV === "development") {
  BASE_URL = "http://codercba.com:9002" as const;
} else {
  BASE_URL = "http://codercba.com:9002" as const;
}
// console.log(process.env.NODE_ENV, process.env.REACT_APP_BASE_URL); // 两种定义的方式
const TIME_OUT1 = 10000 as const;

export { TIME_OUT1, BASE_URL };
// export { BASE_URL };
