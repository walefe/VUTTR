import mongoose from 'mongoose';

const Tools = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    user: {
      type: Number,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tags: Array,
  },
  { timestamps: true }
);

export default mongoose.model('Tools', Tools);
