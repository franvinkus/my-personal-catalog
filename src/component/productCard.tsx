
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
            <div className="flex justify-center h-72 w-full">
                <img src={imageUrl} className="h-full w-full rounded-2xl" />
            </div>

            <div className="flex flex-col grow items-center space-y-3">
                <label className="line-clamp-1">{name}</label>
                <label className="line-clamp-2">{details}</label>
                <label>{price.toLocaleString('id-ID')}</label>
            </div>

        </div>
    );
}