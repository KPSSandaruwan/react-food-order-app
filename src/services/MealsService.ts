import axios from "axios";

export class MealsService {
  public static async getAllAvailableMeals(): Promise<any>{
    const url = "https://react-food-order-app-f0ee8-default-rtdb.firebaseio.com/meals.json";
    return await axios.get<Partial<any[]>>(url);
  }

  // public static async getTourGuideProfile(tourGuideId: string): Promise<AppResponse<TourGuide>> {
  //   const url = Util.apiAuthUrl(`view/tourGuide/${tourGuideId}`);
  //   return await axios.get<Partial<TourGuide>, AppResponse<any>>(url);
  // }

  // public static async getAllBookingSessionsforTourguideByAdmin(tourGuideId: string): Promise<AppResponse<BookingSession[]>> {
  //   const url = Util.apiAuthUrl(`admin/get/all/bookingsessions/guide/${tourGuideId}`);

  //   return await axios.get<Partial<BookingSession[]>, AppResponse<any>>(url);
  // }

  // public static async getAllTourBookingsByTourGuide(sessionId: string): Promise<AppResponse<Booking[]>> {
  //   const url = Util.apiAuthUrl(`admin/get/all/bookings/${sessionId}`);

  //   return await axios.get<Partial<Booking[]>, AppResponse<any>>(url);
  // }

  // public static async getAllTourOffersByTourGuide(tourGuideId: string): Promise<AppResponse<any>> {
  //   const url = Util.apiAuthUrl(`admin/get/all/sent/offers/guide/${tourGuideId}`);

  //   return await axios.get<Partial<any>, AppResponse<any>>(url);
  // }

  // public static async changeVerificationStatusByAdmin(data: UserBlocandActivekData): Promise<AppResponse<any>> {
  //   // console.log(data)
  //   const url = Util.apiAuthUrl(`admin/change/tourGuide/verificationStatus`);
  //   return await axios.post<UserBlocandActivekData, AppResponse<any>>(url, data);
  // }


  // public static async updateTourGuideByAdmin(data: any): Promise<AppResponse<any>> {
  //   console.log("data", data);
  //   const url = Util.apiAuthUrl(`admin/update/tourGuide`);

  //   return await axios.post<any, AppResponse<any>>(url, data);
  // }

  // public static async getAllToursByTourGuide(tourGuideId: string): Promise<AppResponse<any>> {

  //   // const id = "61923d38f53fcd0be89eabda"
  //   const url = Util.apiAuthUrl(`view/allToursByGuideId/${tourGuideId}`);

  //   return await axios.get<Partial<any>, AppResponse<any>>(url);
  // }
}


