import { useState } from "react";   
import { useDispatch } from "react-redux";
import { addFoodToCustomer } from "../features/customerSlice";

interface CustomerCardTypes {
    id: string;
    name: string;
    food: string[];
}

export default function CustomerCard({ id, name, food }: CustomerCardTypes) {
    const dispatch = useDispatch();
    const [customerFoodValue, setCustomerFoodValue] = useState('');
    return (
        <div className="customer-food-card-container">
            <p>{name}</p>
            <div className="customer-foods-container">
                <div className="customer-food">
                    {food.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </div>
                <div className="customer-food-input-container">
                    <input
                        value={customerFoodValue}
                        onChange={(e) => setCustomerFoodValue(e.target.value)}
                    />
                    <button onClick={() => {
                        if (!customerFoodValue) return;
                        dispatch(addFoodToCustomer({
                            id,
                            food: customerFoodValue
                        }));
                        setCustomerFoodValue('');
                    }}>
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
};