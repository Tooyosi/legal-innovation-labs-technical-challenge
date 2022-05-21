import { toast } from "react-toastify"

export const apiErrorHandler = (error: any) => {
    toast.error(error?.response?.data?.description || "An error occured, kindly try again")
}