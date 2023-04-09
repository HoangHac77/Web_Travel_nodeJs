// import service
import db from "../models/index.js";
import TourService from "../services/TourService.js";

const TourController = {
  CreateTour: async (req, res) => {
    let data = req.body;

    // Su dung doan code o duoi trong truong hop test api
    // let filenames = req.files.map(function (file) {
    //   return file.path; // or file.originalname
    // });
    // console.log(filenames);
    // let imageData = JSON.stringify(filenames);
    // console.log(filenames);
    let tourData = await TourService.CreateTour(data);
    return res.status(200).json({
      errCode: tourData.errCode,
      message: tourData.errMessage,
    });
  },

  GetIdTour2: async (req, res) => {
    try {
      const { id } = req.params;
      // const findTourbyId = await db.TourInfo.findByPk(id);
      const findTourbyId = await db.TourInfo.findOne({
        attributes: [
          "id",
          "NameTour",
          "abbreviation",
          "totalTime",
          "Departureday",
          "Description",
          "PricePerson",
          "images",
        ],
        where: { id: id },
        include: [
          { model: db.TypeOfTransport, attributes: ["id", "nameTransport"] },
          { model: db.Hotel, attributes: ["id", "NameHotel"] },
          {
            model: db.Location,
            attributes: ["id", "country", "descLocation", "placeName"],
          },
        ],

        raw: true,
        nest: true,
      });
      return res.status(200).json(findTourbyId);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  GetAllTour: async (req, res) => {
    let data = await TourService.GetAll();
    return res.status(200).send(data);
  },
  GetAllWithPopular: async (req, res) => {
    let data = await TourService.GetAllWithPopular();
    return res.status(200).send(data);
  },
  GetAllWithNew: async (req, res) => {
    let data = await TourService.GetAllWithNew();
    return res.status(200).send(data);
  },
  UpdateOneTour: async (req, res) => {
    const { id } = req.params;
    try {
      const findOneTour = await db.TourInfo.findOne({
        where: { id: id },
      });
      if (
        findOneTour &&
        req.body.NameTour !== "" &&
        req.body.abbreviation !== "" &&
        req.body.totalTime !== "" &&
        req.body.PricePerson !== undefined &&
        req.body.Description !== "" &&
        req.body.idTypesOfTransport !== undefined &&
        req.body.idHotel !== undefined &&
        req.body.idLocation !== undefined
      ) {
        findOneTour.NameTour = req.body.NameTour;
        findOneTour.abbreviation = req.body.abbreviation;
        findOneTour.totalTime = req.body.totalTime;
        findOneTour.PricePerson = req.body.PricePerson;
        findOneTour.Description = req.body.Description;
        findOneTour.images = req.body.images;
        findOneTour.idTypesOfTransport = req.body.idTypesOfTransport;
        findOneTour.idHotel = req.body.idHotel;
        findOneTour.idLocation = req.body.idLocation;
        await findOneTour.save();
        return res.status(200).json({ msg: "Update Success !" });
      } else {
        return res.status(404).json({ msg: "Some Field is empty !" });
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  DeleteTour: async (req, res) => {
    const { id } = req.params;
    try {
      const FindOneTour = await db.TourInfo.findOne({
        where: { id: id },
      });
      if (FindOneTour) {
        FindOneTour.destroy();
        return res.status(200).json({ msg: "Delete tour SuccessFull !" });
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  QueryParams: async (req, res) => {
    const query = req.query;
    try {
      const findOneTour = await db.TourInfo.findAll({
        where: query,
        include: [
          { model: db.TypeOfTransport, attributes: ["nameTransport"] },
          { model: db.Hotel, attributes: ["NameHotel"] },
          {
            model: db.Location,
            attributes: ["country", "placeName", "descLocation"],
          },
        ],
        raw: true,
        nest: true,
      });
      return res.status(200).json(findOneTour);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  UpdateTourImage: async (req, res) => {
    const { id } = req.params;
    let filenames = req.files.map(function (file) {
      return file.path; // or file.originalname
    });
    try {
      const findOneTour = await db.TourInfo.findOne({
        where: { id: id },
      });
      if (findOneTour) {
        (findOneTour.images = filenames), await findOneTour.save();
        return res.status(200).json({ msg: "Update Success !" });
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

export default TourController;
