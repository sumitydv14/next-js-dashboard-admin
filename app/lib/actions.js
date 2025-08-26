"use server";
import { redirect } from "next/navigation";
import { Products, Users } from "./models";
import { connectToDB } from "./utils";
import bcrypt from 'bcrypt'
import { revalidatePath } from "next/cache";

const addUser = async (formDate) => {
    const { name, email, password, phone, img, address, isAdmin, isAction } = Object.fromEntries(formDate)
    console.log(isAction)
    try{
       connectToDB();
       const salt = await bcrypt.genSalt(10);
       const hashedPassword = await bcrypt.hash(password, salt)
       const newUser = new Users({
        name,
        email,
        password: hashedPassword,
        phone,
        img,
        address,
        role: isAdmin || "User",
        status: isAction || "Active",
       })
       await newUser.save()
    }catch(error) {
      console.log(err)
      throw new Error("Failed to Create User")
    }
    redirect('/dashboard/users')
}


export const  addProduct = async (formData) => {
  const { title, desc, price, stock, color, size, img } = Object.fromEntries(formData)
  try{
    connectToDB();
    const newProduct = new Products({
      title,
      desc,
      price: Number(price),
      stock: Number(stock),
      color,
      size,
      img
    })
    await newProduct.save()
  }catch(error) {
    console.log("error", error)
    throw new Error("Failed to Add Product")
  }
  redirect('/dashboard/products')
}

export const deleteUser = async (fromData) => {
    const { id } = Object.fromEntries(fromData);
    try {
      connectToDB();
      await Users.findByIdAndDelete(id);
    } catch (error) { 
       console.log("failed to delete user")
    }
    revalidatePath("/dashboard/users")
}

export const deleteProduct = async (fromData) => {
   const {id} = Object.fromEntries(fromData); 
   try {
     connectToDB();
     await Products.findByIdAndDelete(id);
   } catch(error) {
     console.log("Failed to delete products")
   }
   revalidatePath("/dashboard/products")

}

export const updateUser = async (fromData) => {
  const {id, name, email, password, phone, img, address, role, status} = Object.fromEntries(fromData)
  try {
    connectToDB()
    const updateFields = { name, email, phone, address, img, role, status };
    if (password) {
      const salt = await bcrypt.genSalt(10);
      updateFields.password = await bcrypt.hash(password, salt);
    }

    Object.keys(updateFields).forEach((key) => {
      if (!updateFields[key]) delete updateFields[key];
    });
    await Users.findByIdAndUpdate(id, updateFields, {new: true})
  } catch (error) {
    console.log("error", error);
    throw new Error("Failed to update user")
  }
  redirect('/dashboard/users')
}

export const updateProduct = async (fromData) => {
  const {id, title, price, desc, stock, color,  size} = Object.fromEntries(fromData)
  try {
    connectToDB()
    const updateFields = { title, price, desc, stock,  color, size };

    Object.keys(updateFields).forEach((key) => {
      if (!updateFields[key]) delete updateFields[key];
    });
    await Products.findByIdAndUpdate(id, updateFields, {new: true})
  } catch (error) {
    console.log("error", error);
    throw new Error("Failed to products")
  }
  redirect('/dashboard/products')
}

export default addUser