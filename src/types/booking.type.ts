import { TFacility } from "./facility.type";
import { TUser } from "./user.type";


export type TBookingStatus = 'confirmed' | 'unconfirmed' | 'canceled';

export type TBooking = {
    _id: string;
    date: Date;
    startTime: string;
    endTime: string;
    user?: TUser;
    facility: TFacility;
    payableAmount?: number;
    isBooked?: TBookingStatus;
}