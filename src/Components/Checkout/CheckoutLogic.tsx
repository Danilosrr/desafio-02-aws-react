import React, {createContext,useContext,useState,useEffect } from "react";

interface Item {
    id: number;
    title: string;
    price: number;
    quantity: number;
    image: string;
}



export interface Shipping {
    address: string;
    paymentMethod: 'cartão de crédito'|'cartão de débito'|'dinheiro';
    time: number;
}

interface CarContextType{
    carItems: Item[];
    addItem: (item: Item) => void;
    removeItem: (itemId: number) => void;
    shipping: Shipping | null;
    shippingDetails: (details:Shipping) => void;
}

const CarContext = createContext<CarContextType | undefined>(undefined);
export const CarProvider : React.FC <{children : React.ReactNode}> =({children})=>{
    const [shipping,setShipping] = useState<Shipping|null>(null)
    const [carItems, setCarItems] = useState<Item[]>(() => {
        const storedItems = localStorage.getItem('cartItems');
        return storedItems ? JSON.parse(storedItems) : [];
    });

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(carItems));
    }, [carItems]);

    const shippingDetails = (details:Shipping) => {
        setShipping(details);
    }

    const addItem = (item :Item)=>{
        setCarItems(prevItems=>{
            const existingItem = prevItems.find(i=>i.id ===item.id);
            if(existingItem) {
                return prevItems.map(i=>
                    i.id === item.id? {...i, quantity: i.quantity + item.quantity} : i
                );
        }
        return[...prevItems,{...item,quantity : 1}];
    });
    };

    const removeItem = (id: number)=>{
       
        setCarItems(prevItems=>prevItems.filter(item=>item.id!== id));
    };

    return(
        <CarContext.Provider value={{carItems, addItem, removeItem, shipping, shippingDetails}}>
            {children}
        </CarContext.Provider>
    );
};

export const useCar = ()=> { //hook 
    const context = useContext(CarContext);
    if(context === undefined){
        throw new Error('useCar must be used within a CartProvider');
    }
    return context;
};