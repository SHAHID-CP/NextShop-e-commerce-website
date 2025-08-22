import dbConnect, { collectionNames } from "@/Lib/dbConnect";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, description, price, image } = body;
    const productCollection = dbConnect(collectionNames.productCollection)

    await productCollection.insertOne({
      name,
      description,
      price: parseFloat(price),
      image,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: "Product added!" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to add product" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const productCollection = dbConnect(collectionNames.productCollection);
    const products = await productCollection.find({}).toArray();

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    // console.error("Error fetching products:", error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}