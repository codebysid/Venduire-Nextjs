import React from "react";

const AddressCard = ({ selectAddressForOrder, removeAddress, allAddress }) => {
  return (
    <div className="flex flex-row flex-wrap gap-4 w-2/6">
      {allAddress.map((ele, key) => {
        return (
          <div key={key}>
            <p className="illustrationSubHead">
              Select your address or add a new one
            </p>
            <div
              key={ele.id}
              className="border border-green-700 rounded-2xl p-2"
            >
              <p className="font-bold">{ele.fullName}</p>
              <p>
                <span className="font-bold">Address:</span>
                {ele.streetLine1}
              </p>
              <p>
                <span className="font-bold">City:</span>
                {ele.city}
              </p>
              <p>
                <span className="font-bold">Phone Number:</span>
                {ele.phoneNumber}
              </p>
              <div className="flex flex-row flex-wrap gap-4 mt-4">
                <button
                  onClick={() =>
                    selectAddressForOrder({
                      fullName: ele.fullName,
                      streetLine1: ele.streetLine1,
                      streetLine2: ele.streetLine2,
                      city: ele.city,
                      postalCode: ele.postalCode,
                      countryCode: ele.country.code,
                      phoneNumber: ele.phoneNumber,
                    })
                  }
                  className="bg-green-500 hover:border hover:bg-green-200 hover:border-green-500 p-1 rounded hover:text-black"
                >
                  Select
                </button>

                <button
                  onClick={() => removeAddress(ele.id)}
                  className=" hover:border hover:border-red-500 p-1 rounded hover:text-red-500"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AddressCard;
