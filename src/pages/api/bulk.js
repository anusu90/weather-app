// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
const URL_BULK = `http://api.weatherapi.com/v1/forecast.json?key=92c670185cda426d8b9162522232203&q=bulk&days=1`;

export default async function handler(req, res) {
  const option = {
    method: "GET",
    url: URL_BULK,
    headers: {
      "content-type": "application/json",
    },
    data: {
      locations: [
        {
          q: "New delhi",
          custom_id: "0",
        },
        {
          q: "Chennai",
          custom_id: "1",
        },
        {
          q: "Mumbai",
          custom_id: "2",
        },
      ],
    },
  };
  const resData = await axios.request(option);
  res.json({ data: resData?.data });
}
