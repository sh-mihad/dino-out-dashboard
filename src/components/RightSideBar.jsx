import OrderReport from "./OrderReport";
import OrderSummary from "./OrderSummary";

export default function RightSideBar({
    orders,
    handleDeleteOrder,
    handleChangeStatus
}) {
    return (
        <div class="md:col-span-2 h-[calc(100vh_-_30px)]">
            <OrderSummary orders={orders}/>
           <OrderReport orders={orders} handleDeleteOrder={handleDeleteOrder} handleChangeStatus={handleChangeStatus}/>
        </div>
    )
}
