// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//     name:{
//         type: String,
//         required:true,
//         unique:true,
//         max:20,
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     img: {
//         type:String
//     },    
//     role: { 
//         type: String,
//         enum: ["Admin", "User"], default: "User" 
//     },
    
//     phone: {
//         type: String,
//     },
//     address:{
//         type:String
//     },
//     status:{
//         type: String,
//         enum: ["Active", "Inactive"], default: "Active"  
//     } 
// },
// {
//     collection: "Users",
//     timestamps: true
// }
// )

// const productsSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     desc: {
//         type: String,
//         required: true
//     },
//     price: {
//         type: Number,
//         required: true,
//         min:0
//     },
//     stock: {
//         type: Number,
//         required: true,
//         min:0
//     },
//     img: {
//         type:String
//     },
//     color: {
//         type: String
//     },
//     size: {
//         type: String
//     }
// },
// {
//     collection: "Products",
//     timestamps: true
// }
// )


// export const Users = mongoose.models["Users"] || mongoose.model("Users", userSchema)
// export const Products = mongoose.models.Products || mongoose.model("Products", productsSchema)


import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    role: {
      type: String,
      enum: ["Admin", "User"],
      default: "User",
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
  },
  {
    collection: "Users",
    timestamps: true,
  }
);

const productsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    img: {
      type: String,
    },
    color: {
      type: String,
    },
    size: {
      type: String,
    },
  },
  {
    collection: "Products",
    timestamps: true,
  }
);

// ✅ Always use string keys to avoid "undefined" error
export const Users = mongoose.models["Users"] || mongoose.model("Users", userSchema);
export const Products = mongoose.models["Products"] || mongoose.model("Products", productsSchema);
