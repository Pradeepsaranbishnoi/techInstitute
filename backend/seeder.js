const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Lead = require('./models/Lead');

dotenv.config();

const leads = [
  {
    name: "John Doe",
    email: "john@example.com",
    course: "Full Stack Development",
    message: "Interested in the weekend batch.",
    status: "New",
    date: new Date('2026-01-15')
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    course: "UI/UX Design",
    message: "Does this cover Figma?",
    status: "Contacted",
    date: new Date('2026-01-14')
  },
  {
    name: "Michael Brown",
    email: "michael@example.com",
    course: "Data Science",
    message: "Looking for scholarship options.",
    status: "Enrolled",
    date: new Date('2026-01-12')
  },
  {
    name: "Sarah Wilson",
    email: "sarah@example.com",
    course: "Cyber Security",
    message: "I have no prior coding experience.",
    status: "New",
    date: new Date('2026-01-10')
  },
  {
    name: "David Lee",
    email: "david@example.com",
    course: "Full Stack Development",
    message: "Just checking fees.",
    status: "Closed",
    date: new Date('2026-01-09')
  }
];

const importData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    // Optional: Clear existing data
    // await Lead.deleteMany();

    await Lead.insertMany(leads);

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

importData();
