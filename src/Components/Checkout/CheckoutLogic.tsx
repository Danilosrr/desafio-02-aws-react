import React, {createContext,useContext,useState} from "react";

interface Item {
    id: number;
    title: string;
    price: number;
    quantity: number;
    image: string;
}

interface CarContextType{
    carItems: Item[];
    addItem: (item: Item) => void;
    removeItem: (itemId: number) => void;
}
const CarContext = createContext<CarContextType | undefined>(undefined);
export const CarProvider : React.FC <{children : React.ReactNode}> =({children})=>{
    const [carItems, setCarItems] = useState<Item[]>([]);

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
        <CarContext.Provider value={{carItems, addItem, removeItem}}>
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