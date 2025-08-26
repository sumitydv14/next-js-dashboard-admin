import { Users, Products   } from './models';
import {connectToDB} from '../lib/utils'
export const fetchUsers = async() => {
    try {
        await connectToDB();
       const users = await Users.find()
       return users;
    } catch(err) {
       console.log(err)
       throw new Error("Failed to fetch users!")
    }
}

export const fetchUser = async (id) => {
   try {
      await connectToDB();
      const user = await Users.findById(id).lean();
      if(!user) return null;

      return {
      ...user,
      _id: user._id.toString(),
      createdAt: user.createdAt?.toISOString(),
      updatedAt: user.updatedAt?.toISOString(),
    };
   } catch(error) {
    console.log(error)
    throw new Error("Failed to fetch user")
   }
}

export const fetchProducts = async () => {
    try {
        connectToDB();
        const products = await Products.find();
        return products
    } catch(error) {
        console.log(err)
        throw new Error("Failed to fetch products")
    }
}

export const fetchProduct = async (id) => {
    try{
      await connectToDB();
      const product = await Products.findById(id).lean();
      if(!product) return null

      return {
        ...product,
        _id: product._id?.toString(),
        createdAt: product.createdAt?.toISOString(),
        updatedAt: product.updatedAt?.toISOString(),
      }
    }catch (error){
      console.log(error)
      throw new Error("Failed to fetch Product")
    }
}
