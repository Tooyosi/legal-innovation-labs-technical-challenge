import { toast } from "react-toastify"

export const apiErrorHandler = (error: any) => {
    toast.error(error?.response?.data?.description || "An error occured, kindly try again")
}

export const handleTextLength = (text: string, length:number) => {
    if (text.length > length) {
      return text.substring(0, length) + '...'
    } else {
      return text;
    }
  };
  