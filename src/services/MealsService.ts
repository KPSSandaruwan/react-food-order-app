import axios from "axios";

export class MealsService {
  public static async getAllAvailableMeals(): Promise<any>{
    const url = "https://react-food-order-app-f0ee8-default-rtdb.firebaseio.com/meals.json";
    return await axios.get<Partial<any[]>>(url);
  }

  public static async submitCheckoutForm(data: any): Promise<any> {
    // console.log(data)
    const url = "https://react-food-order-app-f0ee8-default-rtdb.firebaseio.com/orders.json";
    return await axios.post<any>(url, data);
  }


}


