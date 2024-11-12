import React from "react";
import { getStoredCartList } from "../../Utility/addToDb";
import { Helmet } from "react-helmet-async";

const PurchaseHistory = () => {
  const historys = getStoredCartList("history");

  console.log(historys);
  return (
    <div>
      <Helmet>
        <title>History|Gadget Heaven</title>
      </Helmet>
      <div className="text-center bg-customPurple h-52 flex flex-col justify-center ">
        <h1 className="font-bold text-4xl text-white">Purchase History</h1>
        <p className="text-gray-200 font-light text-sm mt-4">
          Here you will see your transaction history
        </p>
      </div>
      <div className="container mx-auto my-10 bg-white rounded-xl drop-shadow-lg">
        <table className="table-auto w-full ">
          <thead>
          <th className="text-center">Transaction Number</th>
            <th className="text-center">Total Item </th>
            <th className="text-center text-green-600">Total Price</th>
            <th className="text-center">Time</th>
            
          </thead>
          {historys.map((history) => (
            <tr className="mt-4">
                <td className="text-center">GadgetHub-{history.time}</td>
              <td className="text-center">{history.itemLength}</td>
              <td className="text-center text-green-600">{history.totalPrice}</td>
              <td className="text-center">{new Date(history.time).toLocaleTimeString()}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default PurchaseHistory;
