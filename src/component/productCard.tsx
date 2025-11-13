
interface product{
    id: string;
    name: string;
    details: string;
    price: number;
    imageUrl: string;

}

export default function ProductCard({name, details, price, imageUrl} : product){

    return(
        <div className="flex p-5 border-2 rounded-2xl flex-col hover:shadow-2xl hover:scale-110">
            <div className="flex justify-center">
                <img src={imageUrl} className="h-[170px] w-[150px] rounded-2xl" />
            </div>

            <div className="flex flex-col items-center">
                <label>{name}</label>
                <label>{details}</label>
                <label>{price.toLocaleString('id-ID')}</label>
            </div>

        </div>
    );
}