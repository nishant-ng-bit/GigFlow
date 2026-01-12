import Gig from "../models/gig.model.js";

export const getOpenGigs = async (query) => {
  const { title, budget } = query;
  const filter = { status: "open" };

  if (title) filter.title = new RegExp(title, "i");
  if (budget) filter.budget = Number(budget);

  const gigs = await Gig.find(filter);
  return gigs;
};

export const createGigs = async (gigData) => {
  const { title, description, budget, ownerId } = gigData;
  if (!title || !description || !budget || !ownerId)
    throw new Error("All fields are required");

  const gig = await Gig.create(gigData);
  return gig;
};
