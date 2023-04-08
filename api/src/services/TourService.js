import db from "../models/index";

const TourService = {
  CreateTour: (data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const tourData = {};

        // validate
        if (
          data.NameTour !== "" &&
          data.abbreviation !== "" &&
          data.totalTime !== "" &&
          data.PricePerson !== "" &&
          data.Description !== "" &&
          data.idTypesOfTransport != undefined &&
          data.idHotel != undefined &&
          data.idLocation != undefined
        ) {
          let Tour = await db.TourInfo.create({
            NameTour: data.NameTour,
            abbreviation: data.abbreviation, // Viết tắt
            totalTime: data.totalTime, // Tổng thời gian
            // Departureday: data.Departureday, // Thời gian khởi hành
            Description: data.Description,
            PricePerson: data.PricePerson,
            images: data.images,
            idTypesOfTransport: data.idTypesOfTransport,
            idHotel: data.idHotel,
            idLocation: data.idLocation,
          });
          tourData.errCode = 0;
          tourData.errMessage = "Create Tour successfully !";
          tourData.Tour = Tour;
        } else {
          tourData.errCode = 1;
          tourData.errMessage = "Some Field is empty !";
        }

        resolve(tourData);
      } catch (e) {
        reject(e);
      }
    });
  },
  GetById: (idTour) => {
    return new Promise(async (resolve, reject) => {
      try {
        const tourData = {};

        let GetIdTour = await db.TourInfo.findOne({
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
          where: { id: idTour.id },
          include: [
            { model: db.Hotel, attributes: ["NameHotel"] },
            { model: db.TypeOfTransport, attributes: ["nameTransport"] },
          ],
          raw: true,
          nest: true,
        });
        // check id tour
        // if (!GetIdTour == null || !GetIdTour == "") {
        tourData.errCode = 0;
        tourData.errMessage = "Success !";
        tourData.GetById = GetIdTour;
        // } else {
        //   tourData.errCode = 1;
        //   tourData.errMessage = "Can't find this id is system !";
        // }
      } catch (error) {}
    });
  },
  GetAll: () => {
    return new Promise(async (resolve, reject) => {
      try {
        let allHotel = db.TourInfo.findAll({
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
        resolve(allHotel);
      } catch (e) {
        reject(e);
      }
    });
  },
  GetAllWithPopular: () => {
    return new Promise(async (resolve, reject) => {
      try {
        let allHotel = db.TourInfo.findAll({
          include: [
            { model: db.TypeOfTransport, attributes: ["nameTransport"] },
            { model: db.Hotel, attributes: ["NameHotel"] },
            {
              model: db.Location,
              attributes: ["country", "placeName", "descLocation"],
            },
          ],
          order: [["updatedAt", "DESC"]],
          limit : 4,
          raw: true,
          nest: true,
        });
        resolve(allHotel);
      } catch (e) {
        reject(e);
      }
    });
  },
  GetAllWithNew: () => {
    return new Promise(async (resolve, reject) => {
      try {
        let allHotel = db.TourInfo.findAll({
          include: [
            { model: db.TypeOfTransport, attributes: ["nameTransport"] },
            { model: db.Hotel, attributes: ["NameHotel"] },
            {
              model: db.Location,
              attributes: ["country", "placeName", "descLocation"],
            },
          ],
          order: [["createdAt", "DESC"]],
          limit : 4,
          raw: true,
          nest: true,
        });
        resolve(allHotel);
      } catch (e) {
        reject(e);
      }
    });
  },
};

export default TourService;
