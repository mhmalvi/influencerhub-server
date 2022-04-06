// import axios from "axios";
// import React from "react";
// import useSWR from "swr";

// //get function to fetch data
// const fetcher = (url) => axios.get(url).then((res) => res.data);

// const apiAction = (url, method) => {
//   if (method === "GET") {
//     return GetData(url);
//   } else if (method === "POST") {
//     return PostData(url);
//   } else if (method === "PUT") {
//     return UpdateData(url);
//   } else if (method === "DELETE") {
//     return CutData(url);
//   } else {
//     alert("you are not apply your method or url currently");
//   }
// };

// // const get data
// const GetData = (url) => {
//   const { data, error } = useSWR(url, fetcher);
// };

// // const post data
// const PostData = async (url) => {
//   axios.post(url, {
//     //   here is the object or data that are post
//     firstName: "mahmud",
//     lastName: "hasan",
//   });
// };
// //update data
// const UpdateData = async (url) => {
//   await axios.put(url, { id: "number" });
//   await res.data.json;
// };
// // delete  data
// const CutData = async (url) => {
//   await axios.delete(url, { data: { id: "number" } });
//   await res.data.json;
// };
// export default apiAction;
