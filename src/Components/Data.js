import Project from "./Project";
import { UserContext } from "../App.js";
import { useContext } from "react";

import p1_1 from "../Assets/Images/p1.1.jpg";
import p1_2 from "../Assets/Images/p1.2.jpg";
import p1_3 from "../Assets/Images/p1.3.jpg";

import p2_1 from "../Assets/Images/p2.1.jpg";
import p2_2 from "../Assets/Images/p2.2.jpg";
import p2_3 from "../Assets/Images/p2.3.jpg";

const Data = () => {
  const data = [
    {
      Name: "LiveShop",
      Category: "Web Design",
      Client: "Nill",
      Date: "22/08/2021",
      Description: "Ecommerce website,A complete shopping website with all the basic functionalities like add to cart, product details, and transactions. Use HTML and bootstrap for frontend design and Django for the backend. Implement ajax validation and PayPal integration.",
      Image1: p1_1,
      Image2: p1_2,
      Image3: p1_3,
      Link: "https://liveshops.herokuapp.com/",
    },
    {
      Name: "Blood Bank",
      Category: "Web Design",
      Client: "Nill",
      Date: "01/07/2021",
      Description: "Blood details collecting app.Its a webapp in which you can add the details of blood donors.It can be really useful for the people in case of any emergency blood requirement.Used html,CSS,Bootstrap,javascript and ajax for the frontend part.Django framework was used for the backend.",
      Image1: p2_1,
      Image2: p2_2,
      Image3: p2_3,
      Link: "https://dpbloodbank.herokuapp.com/",
    },
  ];

  const { state } = useContext(UserContext);
  console.log(state);
  if (state === 1) {
    return <Project info={data[0]} />;
  } else if (state === 2) {
    return <Project info={data[1]} />;
  } else return <h1>not matched</h1>;
};

export default Data;
