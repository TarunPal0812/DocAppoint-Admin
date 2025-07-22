import { useContext, useEffect } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";

const DoctorAppointments = () => {
  const {
    dToken,
    appointments,
    getDoctorAppointments,
    cancledAppointment,
    completeAppointment,
  } = useContext(DoctorContext);
  const { calculateAge, formatSlotDate, currency } = useContext(AppContext);
  useEffect(() => {
    if (dToken) {
      getDoctorAppointments();
    }
  }, [dToken]);
  return (
    <div className="w-full max-w-6xl m-5">
      <p className="mb-3 text-lg font-medium">All Appointments</p>
      <div className="bg-white border rounded text-sm max-h-[80vh] min-h-[50vh] overflow-y-scroll">
        <div className="max-sm:hidden grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-1 py-3 px-6 border-b">
          <p className="">#</p>
          <p className="">Patient</p>
          <p className="">Payment</p>
          <p className="">Age</p>
          <p className="">Date & Time</p>
          <p className="">Fees</p>
          <p className="">Action</p>
        </div>

        {appointments.reverse().map((items, index) => (
          <div
            className="flex flex-wrap justify-between max-sm:gap-5 max-sm: text-base sm:grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-1 items-center text-gray-500 py3 px-6 border-b hover:bg-gray-50"
            key={index}
          >
            <p className="max-sm:hidden">{index + 1}</p>
            <div className="flex items-center gap-2">
              <img
                className="w-8 rounded-full"
                src={items.userData.image}
                alt=""
              />
              <p>{items.userData.name}</p>
            </div>
            <div className="">
              <p className="text-xs inline border border-blue-600 px-2 rounded-full">
                {items.payment ? "ONLINE" : "CASH"}
              </p>
            </div>
            <p className="max-sm:hidden">{calculateAge(items.userData.dob)}</p>
            <p>
              {formatSlotDate(items.slotDate)}, {items.slotTime}
            </p>
            <p>{currency + items.amount}</p>
            {items.cancelled ? (
              <p className="text-red-400 text-xs font-medium">Canclled</p>
            ) : items.isCompleted ? (
              <p className="text-green-500 text-xs font-medium">Completed</p>
            ) : (
              <div className="flex">
                <img
                  onClick={() => cancledAppointment(items._id)}
                  className="w-10 cursor-pointer"
                  src={assets.cancel_icon}
                  alt=""
                />
                <img
                  onClick={() => completeAppointment(items._id)}
                  className="w-10 cursor-pointer"
                  src={assets.tick_icon}
                  alt=""
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorAppointments;
