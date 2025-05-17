import OrderReport from "./OrderReport";
import OrderSummary from "./OrderSummary";

export default function RightSideBar() {
    return (
        <div class="md:col-span-2 h-[calc(100vh_-_30px)]">
            <OrderSummary/>
           <OrderReport/>
        </div>
    )
}
