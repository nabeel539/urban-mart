import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../widgets/Title";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "@/assets/assets";
import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet";

const Orders = () => {
  const { backendUrl, token, currency, navigate } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    if (token) {
      loadOrderData();
    }
  }, [token]);

  const loadOrderData = async () => {
    try {
      if (!token) return;

      const response = await axios.post(
        backendUrl + "/api/order/userorders",
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        let allOrdersItem = [];
        response.data.orders.forEach((order) => {
          order.items.forEach((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["Date"] = order.Date;
            allOrdersItem.push(item);
          });
        });

        setOrderData(allOrdersItem.reverse());
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  const handleTrackOrder = (order) => {
    loadOrderData();
    setSelectedOrder(order);
    setIsSheetOpen(true);
  };

  const renderOrderStatus = (order) => {
    const parseDate = (dateString) => {
      const parsedDate = Date.parse(dateString);
      return !isNaN(parsedDate) ? new Date(parsedDate) : null;
    };

    const orderDate = parseDate(order.Date) || new Date();
    let deliveryDate = null;
    switch (order.status) {
      case "Order Placed":
        deliveryDate = new Date(orderDate);
        deliveryDate.setDate(orderDate.getDate() + 7);
        break;
      case "Shipped":
        deliveryDate = new Date(orderDate);
        deliveryDate.setDate(orderDate.getDate() + 4);
        break;
      case "Out for Delivery":
        deliveryDate = new Date(orderDate);
        deliveryDate.setDate(orderDate.getDate() + 1);
        break;
      case "Delivered":
        deliveryDate = parseDate(order.deliveryDate);
        break;
      default:
        deliveryDate = null;
        break;
    }

    const timelineSteps = [
      {
        label: "Ordered",
        completed: true,
        time: `Ordered on ${orderDate.toDateString()}`,
      },
      {
        label: "Shipped",
        completed: ["Shipped", "Out for Delivery", "Delivered"].includes(
          order.status
        ),
        time: order.shippedDate
          ? `Shipped on ${parseDate(order.shippedDate)?.toDateString()}`
          : "",
      },
      {
        label: "Out for Delivery",
        completed: ["Out for Delivery", "Delivered"].includes(order.status),
        time: order.outForDeliveryDate
          ? `Out for delivery on ${parseDate(
              order.outForDeliveryDate
            )?.toDateString()}`
          : "",
      },
      {
        label: "Delivered",
        completed: order.status === "Delivered",
        time:
          order.status === "Delivered"
            ? `Delivered Today`
            : `Expected delivery: ${deliveryDate?.toDateString() || "TBA"}`,
      },
    ];

    return (
      <div className="space-y-6">
        {/* Top Section */}
        <div className="flex justify-between items-center border-b pb-4">
          <div>
            <p className="text-sm font-semibold">Track Order</p>
            <p className="text-xs text-gray-500">
              Order ID:{" "}
              <span className="font-medium">{order.id || "123456"}</span>
            </p>
          </div>
          <p className="text-xs text-gray-500">{orderDate.toDateString()}</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {timelineSteps.map((step, index) => (
            <div key={index} className="flex items-center gap-4 mb-6">
              <div className="relative flex-shrink-0">
                <div
                  className={`w-6 h-6 flex items-center justify-center rounded-full ${
                    step.completed ? "bg-green-500" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`block w-3 h-3 rounded-full ${
                      step.completed ? "bg-white" : "bg-gray-400"
                    }`}
                  ></span>
                </div>
                {index < timelineSteps.length - 1 && (
                  <div
                    className={`absolute top-6 left-3 w-[2px] h-8 ${
                      timelineSteps[index + 1].completed
                        ? "bg-green-500"
                        : "bg-gray-300"
                    }`}
                  ></div>
                )}
              </div>
              <div>
                <p className="font-medium">{step.label}</p>
                <p className="text-xs text-gray-500">{step.time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t pt-4 space-y-4">
          <div>
            <p className="text-sm font-semibold">Courier</p>
            <p className="text-xs text-gray-500">
              {order.courier || "Yourway Logistics"}
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold">Tracking Number</p>
            <p className="text-xs text-gray-500">
              {order.trackingNumber || "1234567890"}
            </p>
          </div>
          <button
            className="w-full text-[12px] py-2 mt-4 text-white bg-red-500 rounded hover:bg-red-600"
            onClick={() => alert("Tracking shipment...")}
          >
            TRACK MY SHIPMENT
          </button>
          <button
            className="w-full text-[12px] py-2 mt-4 text-red-500 bg-white rounded hover:bg-gray-200 border border-red-500"
            onClick={() => navigate("/contact")}
          >
            Contact Support
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="border-t pt-16">
      <div className="text-2xl text-start">
        <Title text1={"Orders History"} text2={"Your Orders"} />
      </div>
      <div className="my-6">
        {orderData.length === 0 ? (
          <div className="text-center py-20">
            <img
              src={assets.noOrder} // Replace with the actual image path
              alt="Empty Order"
              className="mx-auto w-20"
            />
            <p className="mt-4 text-gray-600">No Orders Found</p>
          </div>
        ) : (
          orderData.map((item, index) => (
            <div
              key={index}
              className="py-1 px-3 my-2 border border-black text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div className="flex items-start gap-6 text-[10px] text-start">
                {item.image && item.image.length > 0 && (
                  <img
                    className="w-16 sm:w-20"
                    src={`http://localhost:4000${item.image}`}
                    alt="product"
                  />
                )}
                <div>
                  <p className="sm:text-base font-bold">{item.prodname}</p>
                  <div className="flex items-center gap-3 mt-1 text-base text-gray-700 ">
                    <p className="text-[12px] text-gray-600">
                      {currency}
                      {item.price}
                    </p>
                    <p className="text-[12px] text-gray-600">
                      Quantity : {item.quantity || 1}
                    </p>
                  </div>
                  <p className="mt-1">
                    Date :
                    <span className="text-gray-400">
                      {new Date(item.Date).toDateString()}
                    </span>
                  </p>
                  <p className="mt-1">
                    Payment :
                    <span className="text-gray-400">{item.paymentMethod}</span>
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-between">
                <div className="flex items-center gap-2">
                  <p className="min-w-2 h-2 rounded-full bg-gradient-to-t from-green-400 to-green-600 border border-green-700 "></p>
                  <p className="text-[12px]">{item.status}</p>
                </div>
                <button
                  onClick={() => handleTrackOrder(item)}
                  className="border px-5 py-2 text-[12px] font-medium bg-red-500 text-white rounded"
                >
                  Track Order
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Top Sheet */}
      {/* <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent position="top" className="p-6">
          <SheetHeader>
            <h2 className="text-lg font-bold">Order Details</h2>
          </SheetHeader>
          {selectedOrder && renderOrderStatus(selectedOrder)}
        </SheetContent>
      </Sheet> */}
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent position="top" className="p-6 max-w-lg mx-auto">
          <SheetHeader>
            <h2 className="text-lg font-bold">Order Details</h2>
          </SheetHeader>
          {selectedOrder && renderOrderStatus(selectedOrder)}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Orders;
