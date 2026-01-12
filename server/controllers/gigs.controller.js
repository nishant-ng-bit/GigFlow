import { createGigs, getOpenGigs } from "../services/gigs.service.js";

export const createGigsController = async (req, res) => {
  try {
    const gigData = req.body;
    gigData.ownerId = req.user.id;

    const gig = await createGigs(gigData);
    res.status(200).json(gig);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getOpenGigsController = async (req, res) => {
  try {
    const gigs = await getOpenGigs(req.query);
    res.status(200).json(gigs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
