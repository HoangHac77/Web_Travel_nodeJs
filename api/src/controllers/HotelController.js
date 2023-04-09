// import service
import HotelService from "../services/HotelService.js";
import db from "../models/index";

const HotelController = {
  CreateHotel: async (req, res) => {
    let data = req.body;
    // console.log(req.files);
    // let filenames = req.files.map(function (file) {
    //   return file.path; // or file.originalname
    // });
    // let imageData = JSON.stringify(filenames);
    let hotelData = await HotelService.CreateHotel(data);
    return res.status(200).json({
      errCode: hotelData.errCode,
      message: hotelData.errMessage,
    });
  },
  GetAllHotel: async (req, res) => {
    let data = await HotelService.GetAll();
    return res.status(200).send(data);
  },
  GetOneHotel: async (req, res) => {
    const { id } = req.params;
    try {
      const OneHotel = await db.Hotel.findOne({
        where: { id: id },
      });
      return res.status(200).send(OneHotel);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  UpdateHotel: async (req, res) => {
      // Lấy param id
      const { id } = req.params;
      const data = req.body;
    try {
      const FindHotel = await db.Hotel.findOne({
        where: { id: id },
      });
      if (FindHotel) {
        FindHotel.NameHotel = data.NameHotel;
        FindHotel.save();
        return res.status(200).json({ message: "Update Hotel SuccessFull !" });
      }
    } catch (error) {
      return res.status(500).send({ message: "Update Hotel Failed !" });
    }
  },
  DeleteHotel: async (req, res) => {
    try {
      const { id } = req.params;
      const FindHotel = await db.Hotel.findOne({
        where: { id: id },
      });
      if (FindHotel) {
        FindHotel.destroy();
        return res.status(200).json({ message: "Delete Hotel SuccessFull !" });
      }
    } catch (error) {
      return res.status(500).send({ message: "Delete Hotel Failed !" });
    }
  },
};

export default HotelController;
