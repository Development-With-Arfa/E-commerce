import { StaticImageData } from "next/image";

export type Products = {
    map(arg0: (products: Products, index: number) => React.JSX.Element): React.ReactNode | Iterable<React.ReactNode>;
    _id: string,
    slug: {
        _type: "slug"
        current: string;
    }
    title: string,
    description: string,
    image: any,
    price: number,
    discountPercentage:number,
    priceWithoutDiscount:number,
    products: number,
    badge: string,
    inventory: number,
    total: number,
}
