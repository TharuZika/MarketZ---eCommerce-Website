import { Request, RequestHandler, Response } from "express";
import mongoose, { ClientSession } from "mongoose";
import { Customer } from "../models/Customer";

export default class CustomerController {
    createCustomer: RequestHandler = async (req:Request, res:Response): Promise<Response> => {
        let session: ClientSession | null = null;

        try{
            session = await mongoose.startSession();
            session.startTransaction();

            const customer = new Customer(req.body);

            let newCustomer = await customer.save();

            await session.commitTransaction();
            session.endSession();

            return res.status(200).json({ message: "New Customer Added.", responseData: newCustomer });
    } catch (error: unknown) {
      if (session != null) {
        try {
          await session.abortTransaction();
        } catch (abortError) {
          console.log(`Error aborting transaction: ${abortError}`);
        }
      }
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message, responseData: false });
      } else {
        return res.status(500).json({ message: "Unknown error occured.", responseData: false });
      }
    }
  };
    checkSignIn = async (req: Request, res:Response): Promise<Response> => {
        try {
            const customers = await Customer.find();
            for(let index = 0; index < customers.length; index++) {
                if(customers[index].email === req.params.email){
                    if(customers[index].password === req.params.password){
                        return res.status(200).json({responseData: true});
                        break;
                    }else{
                        return res.status(200).json({responseData: false});
                        break;
                    }
                }else{
                    continue;
                }
            }
            return res.status(200).json({responseData: false});

        }catch(error:unknown){
            if(error instanceof Error) {
                return res.status(500).json({message: error});
            }else{
                return res.status(500).json({message: "Unknown error"});
            }
        }
    };

    getAllCustomers: RequestHandler = async (req: Request,res: Response): Promise<Response> => {
        try {
          const customers = await Customer.find();
          return res.status(200).json({ responseData: customers });
        } catch (error: unknown) {
          if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
          } else {
            return res.status(500).json({ message: "Unknown error." });
          }
        }
      };

}