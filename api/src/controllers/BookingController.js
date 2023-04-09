import db from "../models/index.js";
import Sequelize from "sequelize";
// import service
import BookingService from "../services/BookingService";

const BookingController = {
  CreateBooking: async (req, res) => {
    let data = req.body;
    try {
      if (
        data.Adult !== undefined &&
        data.Children !== undefined &&
        data.AdultTotalCost !== undefined &&
        data.ChildrenTotalCost !== undefined &&
        data.totalCost !== undefined &&
        data.totalGuest !== undefined &&
        data.idUser !== undefined &&
        data.idTourInfo !== undefined
      ) {
        const booking = await db.Booking.create({
          Adult: data.Adult,
          Children: data.Children,
          AdultTotalCost: data.AdultTotalCost,
          ChildrenTotalCost: data.ChildrenTotalCost,
          // StartedDay: data.StartedDay,
          totalCost: data.totalCost,
          totalGuest: data.totalGuest,
          Status: "NotConfirm",
          idUser: data.idUser,
          idTourInfo: data.idTourInfo,
        });
        return res.status(200).send({ msg: "Booking successFull !" });
      } else {
        return res.status(400).send({ msg: "Some Field Empty !" });
      }
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  GetAllBooking: async (req, res) => {
    let data = await BookingService.GetAll();
    return res.status(200).send(data);
  },
  GetIdBooking2: async (req, res) => {
    try {
      const { id } = req.params;
      const findBookingbyId = await db.Booking.findOne({
        attributes: [
          "id",
          "Adult",
          "Children",
          "Status",
          [
            Sequelize.fn(
              "SUM",
              Sequelize.where(
                Sequelize.col("Adult"),
                "+",
                Sequelize.col("Children")
              )
            ),
            "totalGuest",
          ],
        ],
        where: { id: id },
        group: ["id", "Adult", "Children", "Status"],
        include: [
          { model: db.User, attributes: ["name", "email", "phone"] },
          {
            model: db.TourInfo,
            attributes: ["NameTour", "PricePerson"],
            // include: [
            //   {
            //     moodel: db.Location,
            //     attributes: ["country", "placeName", "descLocation"],
            //     where: { id: db.TourInfo.idLocation },
            //   },
            // ],
          },
        ],
        raw: true,
        nest: true,
      });
      return res.status(200).json(findBookingbyId);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  GetBookingById: async (req, res) => {
    try {
      const { id } = req.params;
      const FindAll = await db.Booking.findOne({
        where: { id: id },
        include: [
          {
            model: db.TourInfo,
            attributes: [
              "NameTour",
              "PricePerson",
              "abbreviation",
              "totalTime",
              "images",
            ],
            include: [
              {
                model: db.Location,
                attributes: ["country", "placeName", "descLocation"],
              },
              {
                model: db.TypeOfTransport,
                attributes: ["nameTransport", "image"],
              },
              {
                model: db.Hotel,
                attributes: ["NameHotel", "images"],
              },
            ],
          },
        ],
        raw: true,
        nest: true,
      });
      return res.status(200).json(FindAll);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  DefaultPayment: async (req, res) => {
    try {
      const { id } = req.params;
      const GetOneBooking = await db.Booking.findOne({
        where: { id: id },
      });
      if (GetOneBooking) {
        GetOneBooking.Status = "Confirm";
        await GetOneBooking.save();
      }
      return res.status(200).json({ msg: "Confirm success !" });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  AllBookingPaymentSuccess: async (req, res) => {
    try {
      const { id } = req.params;
      const FindAll = await db.Booking.findAll({
        where: { idUser: id, Status: ["Success"] },
        include: [
          {
            model: db.TourInfo,
            attributes: ["NameTour", "PricePerson", "totalTime", "images"],
            include: [
              {
                model: db.Location,
                attributes: ["country", "placeName", "descLocation"],
              },
              {
                model: db.TypeOfTransport,
                attributes: ["nameTransport", "image"],
              },
            ],
          },
        ],
        raw: true,
        nest: true,
      });
      return res.status(200).json(FindAll);
    } catch (error) {}
  },
  AllBookingWithDone: async (req, res) => {
    try {
      const FindAll = await db.Booking.findAll({
        // where: { Status: "Default" & "Online" },
        where: {
          Status: ["Success"],
        },
        raw: true,
        nest: true,
      });
      return res.status(200).json(FindAll);
    } catch (error) {}
  },
  DeleteBooking: async (req, res) => {
    const { id } = req.params;
    try {
      const FindOne = await db.Booking.findOne({
        where: { id: id },
      });
      if (FindOne) {
        FindOne.destroy();
        return res.status(200).json({ msg: "Delete SuccessFull !" });
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

export default BookingController;
