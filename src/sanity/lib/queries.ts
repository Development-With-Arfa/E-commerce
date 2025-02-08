import { groq } from "next-sanity";

export const ourProducts = groq`*[_type=='products'] | order(_createdAt desc) [0...8]`;
export const featuredProducts =groq `*[_type == "products" && "featured" in tags]`;
export const categories = groq`*[_type == "categories"]`;
export const productPage = groq`*[_type == "products"] | order(_createdAt desc)`;
export const wingChair = groq `*[_type == "products" && category -> title == "Wing Chair"]`
export const deskChair = groq `*[_type == "products" && category -> title == "Desk Chair"]`
export const woodenChair = groq `*[_type == "products" && category -> title == "Wooden Chair"]`