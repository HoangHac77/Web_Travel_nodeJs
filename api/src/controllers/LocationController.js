// import service
import LocationService from "../services/LocationService.js";
import db from "../models/index";

const LocationController = {
  CreateLocation: async (req, res) => {
    let data = req.body;
    // console.log(data);
    let locationData = await LocationService.CreateLocation(data);
    return res.status(200).json({
      errCode: locationData.errCode,
      message: locationData.errMessage,
      // message: locationData.location,
    });
  },
  GetAllLocation: async (req, res) => {
    let data = await LocationService.GetAll();
    return res.status(200).send(data);
  },
  OneLocation: async (req, res) => {
    try {
      const { id } = req.params;
      const FindLocation = await db.Location.findOne({
        where: { id: id },
      });
      if (FindLocation) {
        return res.status(200).send(FindLocation);
      }else{
        return res.status(500).send({ message: "Can't find this location in DB"});
      }
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  UpdateLocation: async (req, res) => {
    // Lấy param id
    const { id } = req.params;
    //Lấy hết data
    const data = req.body;
    try {
      const FindLocation = await db.Location.findOne({
        where: { id: id },
      });
      if (FindLocation) {
        FindLocation.country = data.country;
        FindLocation.placeName = data.placeName;
        FindLocation.descLocation = data.descLocation;
        // FindUser.email = data.email;
        // FindUser.image = data.image;
        await FindLocation.save();
        return res.status(200).send({ message: "Update SuccessFull !" });
      }
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  DeleteLocation: async (req, res) => {
    try {
      const { id } = req.params;
      const FindLocation = await db.Location.findOne({
        where: { id: id },
      });
      if (FindLocation) {
        FindLocation.destroy();
        return res.status(200).json({ message: "Delete Location SuccessFull !" });
      }
    } catch (error) {
      return res.status(500).send({ message: "Delete Location Failed !" });
    }
  },
};

export default LocationController;
