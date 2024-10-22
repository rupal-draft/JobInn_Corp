export const PUBLIC_URLS = [
  "/signup",
  "/signup/business",
  "/signin",
  "/forgot-password",
  "/reset-password",
];

export const PRIVATE_URLS = [
  "/settings",
  "/job",
  "/workers",
  "/messages",
  "/training",
  "/organization",
];

export enum Routes {
  Home = "/",
  Signin = "/signin",
  Signup = "/signup",
  SignupBusiness = "/signup/business",
  CreatePassword = "/create-password",
  ForgotPassword = "/forgot-password",
  ResetPassword = "/reset-password",
  Settings = "/settings",
  Job = "/job",
  Workers = "/workers",
  Messages = "/messages",
  Training = "/training",
  Organization = "/organization",
  Dashboard = "/dashboard",
}

export const CONSTANTS = {
  Images: {
    BaseURL: `/assets/images`,
  },
  Icons: {
    BaseURL: `/assets/icons`,
  },
};

export const LOCALSTORAGE_KEYS = {
  Registration_Info: "REGISTRATION_INFO",
  Force_Change_Password: "FORCE_CHANGE_PASSWORD",
};

export const IMAGES = {
  Text: {
    logo: `${CONSTANTS.Images.BaseURL}/logo.png`,
    dots: `${CONSTANTS.Images.BaseURL}/dot-group.png`,
    circle: `${CONSTANTS.Images.BaseURL}/circle.png`,
    quotestart: `${CONSTANTS.Images.BaseURL}/quote-start.png`,
    quoteend: `${CONSTANTS.Images.BaseURL}/quote-end.png`,
  },
  Sidebar: {
    sidebarLogo: `${CONSTANTS.Images.BaseURL}/sidebarLogo.png`,
  },
  Headers: {
    profileLogo: `${CONSTANTS.Images.BaseURL}/logo-rectangle.png`,
  },
  Messages: {
    profilePicture: `${CONSTANTS.Images.BaseURL}/Rupal.jpg`,
  },
  Dashboard: {
    tIcon: `${CONSTANTS.Images.BaseURL}/T.png`,
  },
  Invoices: {
    mastercardLogo: `${CONSTANTS.Images.BaseURL}/mastercard.png`,
  },
  Jobs: {
    Avatar: `${CONSTANTS.Images.BaseURL}/Rupal.jpg`,
  },
  Calendar: {
    Avatar1: `${CONSTANTS.Images.BaseURL}/Rupal.jpg`,
    Avatar2: `${CONSTANTS.Images.BaseURL}/ShyamBhaiya.jpeg`,
  },
};

export const ICONS = {
  Sidebar: {
    job: `${CONSTANTS.Icons.BaseURL}/job.svg`,
    organization: `${CONSTANTS.Icons.BaseURL}/organization.svg`,
    calender: `${CONSTANTS.Icons.BaseURL}/calender.svg`,
    worker: `${CONSTANTS.Icons.BaseURL}/worker.svg`,
    training: `${CONSTANTS.Icons.BaseURL}/training.svg`,
    setting: `${CONSTANTS.Icons.BaseURL}/setting.svg`,
    invoice: `${CONSTANTS.Icons.BaseURL}/invoice.svg`,
    chat: `${CONSTANTS.Icons.BaseURL}/chat.svg`,
    dashboard: `${CONSTANTS.Icons.BaseURL}/category.svg`,
    logout: `${CONSTANTS.Icons.BaseURL}/logout.svg`,
    support: `${CONSTANTS.Icons.BaseURL}/contact.svg`,
  },
  ActiveSidebar: {
    job: `${CONSTANTS.Icons.BaseURL}/active-job.svg`,
    organization: `${CONSTANTS.Icons.BaseURL}/active-organization.svg`,
    calender: `${CONSTANTS.Icons.BaseURL}/active-calender.svg`,
    worker: `${CONSTANTS.Icons.BaseURL}/active-worker.svg`,
    training: `${CONSTANTS.Icons.BaseURL}/active-training.svg`,
    setting: `${CONSTANTS.Icons.BaseURL}/active-setting.svg`,
    invoice: `${CONSTANTS.Icons.BaseURL}/active-invoice.svg`,
    chat: `${CONSTANTS.Icons.BaseURL}/active-chat.svg`,
    dashboard: `${CONSTANTS.Icons.BaseURL}/active-category.svg`,
  },
};

export const pools = [
  {
    name: "Efficient Busboy",
    people: "5 people",
    trainings: "Required Trainings:",
  },
  {
    name: "Quick Bartender",
    people: "3 people",
    trainings: "Required Trainings:",
  },
  {
    name: "Experienced Chef",
    people: "4 people",
    trainings: "Required Trainings:",
  },
];

export const TrainingPools = [
  { name: "Security", people: "5 people" },
  { name: "Security Agent", people: "5 people" },
  { name: "Night Chef Cooks", people: "5 people" },
];

export const shifts = [
  {
    name: "Busboy",
    address: "12th Manfield Street",
    dateTime: "March 12th-11am to 2pm",
  },
  {
    name: "Security Agent",
    address: "12th Manfield Street",
    dateTime: "March 12th-11am to 2pm",
  },
  {
    name: "Chef Cook",
    address: "12th Manfield Street",
    dateTime: "March 12th-11am to 2pm",
  },
];

export const templates = [
  { name: "Security Agent", certification: "Certification required:" },
  { name: "Bartender", certification: "Certification required:" },
  { name: "Busboy", certification: "Certification required:" },
  { name: "Cleaner", certification: "Certification required:" },
];

export const events = [
  {
    title: "Job: Clean Windows",
    start: new Date(2024, 8, 5, 10, 0),
    end: new Date(2024, 8, 5, 12, 0),
    imageUrl: [IMAGES.Calendar.Avatar1, IMAGES.Calendar.Avatar2],
  },
  {
    title: "Training: Security Guard",
    start: new Date(2024, 8, 6, 14, 0),
    end: new Date(2024, 8, 8, 15, 30),
    imageUrl: [IMAGES.Calendar.Avatar1, IMAGES.Calendar.Avatar2],
  },
  {
    title: "Job: Cashier",
    start: new Date(2024, 8, 12, 9, 0),
    end: new Date(2024, 8, 12, 10, 30),
    imageUrl: [IMAGES.Calendar.Avatar1, IMAGES.Calendar.Avatar2],
  },
  {
    title: "Training: Shieves Worker",
    start: new Date(2024, 8, 13, 13, 0),
    end: new Date(2024, 8, 14, 14, 0),
    imageUrl: [IMAGES.Calendar.Avatar1, IMAGES.Calendar.Avatar2],
  },
  {
    title: "Training: Cashier",
    start: new Date(2024, 8, 24, 11, 0),
    end: new Date(2024, 8, 24, 12, 0),
    imageUrl: [IMAGES.Calendar.Avatar1, IMAGES.Calendar.Avatar2],
  },
];

export const WorkerData = [
  {
    id: 1,
    col1: "Jonas Major",
    col2: "4.7",
    col3: "Busboy",
    col4: "12 August 2022",
  },
  {
    id: 2,
    col1: "Jonas Major",
    col2: "4.7",
    col3: "Busboy",
    col4: "12 August 2022",
  },
  {
    id: 3,
    col1: "Jonas Major",
    col2: "4.7",
    col3: "Busboy",
    col4: "12 August 2022",
  },
  {
    id: 4,
    col1: "Jonas Major",
    col2: "4.7",
    col3: "Busboy",
    col4: "12 August 2022",
  },
  {
    id: 5,
    col1: "Jonas Major",
    col2: "4.7",
    col3: "Busboy",
    col4: "12 August 2022",
  },
  {
    id: 6,
    col1: "Jonas Major",
    col2: "4.7",
    col3: "Busboy",
    col4: "12 August 2022",
  },
  {
    id: 7,
    col1: "Jonas Major",
    col2: "4.7",
    col3: "Busboy",
    col4: "12 August 2022",
  },
];

export let MemberData = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    accountType: "Member",
    since: "10th July 2024",
  },
];

const generateRandomName = () => {
  const firstNames = [
    "John",
    "Jane",
    "Alex",
    "Sam",
    "Chris",
    "Taylor",
    "Jordan",
  ];
  const lastNames = [
    "Smith",
    "Johnson",
    "Brown",
    "Davis",
    "Martinez",
    "Lee",
    "Garcia",
  ];

  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

  return `${firstName} ${lastName}`;
};

const formatTodayDate = () => {
  const today = new Date();
  const day = today.getDate();
  const month = today.toLocaleString("default", { month: "long" });
  const year = today.getFullYear();

  const daySuffix = (d: number) => {
    if (d > 3 && d < 21) return "th";
    switch (d % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return `${day}${daySuffix(day)} ${month} ${year}`;
};

export const TrainingData = [
  {
    id: 1,
    col1: "Jonas Major",
    col2: "19",
    col3: "4.7",
    col4: "Busboy",
    col5: "12 August 2022",
    col6: ["Approve", "Deny"],
  },
  {
    id: 2,
    col1: "Jonas Major",
    col2: "19",
    col3: "4.7",
    col4: "Busboy",
    col5: "12 August 2022",
    col6: ["Approve", "Deny"],
  },
  {
    id: 3,
    col1: "Jonas Major",
    col2: "19",
    col3: "4.7",
    col4: "Busboy",
    col5: "12 August 2022",
    col6: ["Approve", "Deny"],
  },
  {
    id: 4,
    col1: "Jonas Major",
    col2: "19",
    col3: "4.7",
    col4: "Busboy",
    col5: "12 August 2022",
    col6: ["Approve", "Deny"],
  },
  {
    id: 5,
    col1: "Jonas Major",
    col2: "19",
    col3: "4.7",
    col4: "Busboy",
    col5: "12 August 2022",
    col6: ["Approve", "Deny"],
  },
];

export const PollsData = [
  {
    id: 1,
    col1: "Jonas Major",
    col2: "19",
    col3: "4.7",
    col4: "Busboy",
    col5: "12 August 2022",
    col6: "Active",
  },
  {
    id: 2,
    col1: "Jonas Major",
    col2: "19",
    col3: "4.7",
    col4: "Busboy",
    col5: "12 August 2022",
    col6: "Active",
  },
  {
    id: 3,
    col1: "Jonas Major",
    col2: "19",
    col3: "4.7",
    col4: "Busboy",
    col5: "12 August 2022",
    col6: "Active",
  },
  {
    id: 4,
    col1: "Jonas Major",
    col2: "19",
    col3: "4.7",
    col4: "Busboy",
    col5: "12 August 2022",
    col6: "Active",
  },
  {
    id: 5,
    col1: "Jonas Major",
    col2: "19",
    col3: "4.7",
    col4: "Busboy",
    col5: "12 August 2022",
    col6: "Active",
  },
  {
    id: 6,
    col1: "Jonas Major",
    col2: "19",
    col3: "4.7",
    col4: "Busboy",
    col5: "12 August 2022",
    col6: "Active",
  },
  {
    id: 7,
    col1: "Jonas Major",
    col2: "19",
    col3: "4.7",
    col4: "Busboy",
    col5: "12 August 2022",
    col6: "Active",
  },
  {
    id: 8,
    col1: "Jonas Major",
    col2: "19",
    col3: "4.7",
    col4: "Busboy",
    col5: "12 August 2022",
    col6: "Active",
  },
  {
    id: 9,
    col1: "Jonas Major",
    col2: "19",
    col3: "4.7",
    col4: "Busboy",
    col5: "12 August 2022",
    col6: "Active",
  },
  {
    id: 10,
    col1: "Jonas Major",
    col2: "19",
    col3: "4.7",
    col4: "Busboy",
    col5: "12 August 2022",
    col6: "Active",
  },
];

export const users = [
  {
    name: "Rupal Paul",
    image: IMAGES.Messages.profilePicture,
    message: "Hi I want to make enquiries",
    time: "10:30 AM",
    new: true,
  },
  {
    name: "John Doe",
    image: IMAGES.Messages.profilePicture,
    message: "Are you available for a call?",
    time: "10:45 AM",
    new: true,
  },
  {
    name: "Jane Smith",
    image: IMAGES.Messages.profilePicture,
    message: "Let's schedule a meeting.",
    time: "11:00 AM",
    new: false,
  },
  {
    name: "Emily Johnson",
    image: IMAGES.Messages.profilePicture,
    message: "Looking forward to your reply.",
    time: "11:15 AM",
    new: false,
  },
  {
    name: "Emily Johnson",
    image: IMAGES.Messages.profilePicture,
    message: "Looking forward to your reply.",
    time: "11:15 AM",
    new: false,
  },
  {
    name: "Emily Johnson",
    image: IMAGES.Messages.profilePicture,
    message: "Looking forward to your reply.",
    time: "11:15 AM",
    new: false,
  },
  {
    name: "Emily Johnson",
    image: IMAGES.Messages.profilePicture,
    message: "Looking forward to your reply.",
    time: "11:15 AM",
    new: false,
  },
  {
    name: "Emily Johnson",
    image: IMAGES.Messages.profilePicture,
    message: "Looking forward to your reply.",
    time: "11:15 AM",
    new: false,
  },
];

export const MESSAGES = [
  {
    text: "Hello! How are you?",
    time: "10:30 AM",
    sending: true,
  },
  {
    text: "I'm good, thanks! How about you?",
    time: "10:31 AM",
    sending: false,
  },
  {
    text: "What are your plans for today?",
    time: "10:32 AM",
    sending: true,
  },
  {
    text: "Just working on a project.",
    time: "10:33 AM",
    sending: false,
  },
];
export const rowData = [
  {
    invoiceId: "#342432",
    billingDate: "23 March 2023",
    plan: "Pro Plan",
    amount: "$250.00",
    status: "Paid",
  },
  {
    invoiceId: "#342432",
    billingDate: "23 March 2023",
    plan: "Pro Plan",
    amount: "$250.00",
    status: "Paid",
  },
  {
    invoiceId: "#342432",
    billingDate: "23 March 2023",
    plan: "Pro Plan",
    amount: "$250.00",
    status: "Paid",
  },
  {
    invoiceId: "#342432",
    billingDate: "23 March 2023",
    plan: "Pro Plan",
    amount: "$250.00",
    status: "Paid",
  },
  {
    invoiceId: "#342432",
    billingDate: "23 March 2023",
    plan: "Pro Plan",
    amount: "$250.00",
    status: "Paid",
  },
];
export const SidebarMenu = [
  {
    text: "Dashboard",
    path: "/dashboard",
    icon: ICONS.Sidebar.dashboard,
    activeIcon: ICONS.ActiveSidebar.dashboard,
  },
  {
    text: "Jobs",
    path: "/job",
    icon: ICONS.Sidebar.job,
    activeIcon: ICONS.ActiveSidebar.job,
  },
  {
    text: "Workers",
    path: "/workers",
    icon: ICONS.Sidebar.worker,
    activeIcon: ICONS.ActiveSidebar.worker,
  },
  {
    text: "Message",
    path: "/messages",
    icon: ICONS.Sidebar.chat,
    activeIcon: ICONS.ActiveSidebar.chat,
  },
  {
    text: "Training",
    path: "/training",
    icon: ICONS.Sidebar.training,
    activeIcon: ICONS.ActiveSidebar.training,
  },
  {
    text: "Calendar",
    path: "/calendar",
    icon: ICONS.Sidebar.calender,
    activeIcon: ICONS.ActiveSidebar.calender,
  },
  {
    text: "Invoices",
    path: "/invoices",
    icon: ICONS.Sidebar.invoice,
    activeIcon: ICONS.ActiveSidebar.invoice,
  },
  {
    text: "Organization",
    path: "/organization",
    icon: ICONS.Sidebar.organization,
    activeIcon: ICONS.ActiveSidebar.organization,
  },
  {
    text: "Settings",
    path: "/settings",
    icon: ICONS.Sidebar.setting,
    activeIcon: ICONS.ActiveSidebar.setting,
  },
  {
    text: "Contact Support",
    path: "/support",
    icon: ICONS.Sidebar.support,
    activeIcon: "",
  },
  {
    text: "Logout",
    icon: ICONS.Sidebar.logout,
    activeIcon: "",
  },
];

export const VALIDATION_MESSAGE = {
  Required: {
    Field: "This field is required!",
  },
};

export const PasswordRequirements = [
  "Must be at least 8 characters long",
  "Include at least one uppercase letter",
  "Include at least one lowercase letter",
  "Include at least one number",
  "Include at least one special character (eg.!,@,#,$,%,^,&,*)",
];

export const headings = [
  {
    id: "organizationProfile",
    label: "Organization Profile",
    position: "flex-start",
  },
  {
    id: "organizationMember",
    label: "Organization Member",
    position: "center",
  },
  {
    id: "superOrganization",
    label: "Super Organization",
    position: "flex-end",
  },
];

export const BusinessSelection = {
  business_type: [
    {
      id: 1,
      name: "Business",
    },
    {
      id: 2,
      name: "Individual",
    },
  ],
  organization_type: [
    {
      id: 1,
      name: "Member",
    },
    {
      id: 2,
      name: "Administrator",
    },
  ],
  countries: [
    {
      capital: "Kabul",
      code2: "AF",
      code3: "AFG",
      name: "Afghanistan",
      region: "Asia",
      states: [
        {
          code: "BDS",
          name: "Badakhshān",
        },
        {
          code: "BGL",
          name: "Baghlān",
        },
        {
          code: "BAL",
          name: "Balkh",
        },
        {
          code: "BDG",
          name: "Bādghīs",
        },
        {
          code: "BAM",
          name: "Bāmyān",
        },
        {
          code: "DAY",
          name: "Dāykundī",
        },
        {
          code: "FRA",
          name: "Farāh",
        },
        {
          code: "FYB",
          name: "Fāryāb",
        },
        {
          code: "GHA",
          name: "Ghaznī",
        },
        {
          code: "GHO",
          name: "Ghōr",
        },
        {
          code: "HEL",
          name: "Helmand",
        },
        {
          code: "HER",
          name: "Herāt",
        },
        {
          code: "JOW",
          name: "Jowzjān",
        },
        {
          code: "KAN",
          name: "Kandahār",
        },
        {
          code: "KHO",
          name: "Khōst",
        },
        {
          code: "KNR",
          name: "Kunar",
        },
        {
          code: "KDZ",
          name: "Kunduz",
        },
        {
          code: "KAB",
          name: "Kābul",
        },
        {
          code: "KAP",
          name: "Kāpīsā",
        },
        {
          code: "LAG",
          name: "Laghmān",
        },
        {
          code: "LOG",
          name: "Lōgar",
        },
        {
          code: "NAN",
          name: "Nangarhār",
        },
        {
          code: "NIM",
          name: "Nīmrōz",
        },
        {
          code: "NUR",
          name: "Nūristān",
        },
        {
          code: "PIA",
          name: "Paktiyā",
        },
        {
          code: "PKA",
          name: "Paktīkā",
        },
        {
          code: "PAN",
          name: "Panjshayr",
        },
        {
          code: "PAR",
          name: "Parwān",
        },
        {
          code: "SAM",
          name: "Samangān",
        },
        {
          code: "SAR",
          name: "Sar-e Pul",
        },
        {
          code: "TAK",
          name: "Takhār",
        },
        {
          code: "URU",
          name: "Uruzgān",
        },
        {
          code: "WAR",
          name: "Wardak",
        },
        {
          code: "ZAB",
          name: "Zābul",
        },
      ],
      subregion: "Southern Asia",
    },
    {
      capital: "Mariehamn",
      code2: "AX",
      code3: "ALA",
      name: "Åland Islands",
      region: "Europe",
      subregion: "Northern Europe",
    },
    {
      capital: "Tirana",
      code2: "AL",
      code3: "ALB",
      name: "Albania",
      region: "Europe",
      states: [
        {
          code: "01",
          name: "Berat",
        },
        {
          code: "09",
          name: "Dibër",
        },
        {
          code: "02",
          name: "Durrës",
        },
        {
          code: "03",
          name: "Elbasan",
        },
        {
          code: "04",
          name: "Fier",
        },
        {
          code: "05",
          name: "Gjirokastër",
        },
        {
          code: "06",
          name: "Korçë",
        },
        {
          code: "07",
          name: "Kukës",
        },
        {
          code: "08",
          name: "Lezhë",
        },
        {
          code: "10",
          name: "Shkodër",
        },
        {
          code: "11",
          name: "Tiranë",
        },
        {
          code: "12",
          name: "Vlorë",
        },
      ],
      subregion: "Southern Europe",
    },
    {
      capital: "Algiers",
      code2: "DZ",
      code3: "DZA",
      name: "Algeria",
      region: "Africa",
      states: [
        {
          code: "01",
          name: "Adrar",
        },
        {
          code: "16",
          name: "Alger",
        },
        {
          code: "23",
          name: "Annaba",
        },
        {
          code: "44",
          name: "Aïn Defla",
        },
        {
          code: "46",
          name: "Aïn Témouchent",
        },
        {
          code: "05",
          name: "Batna",
        },
        {
          code: "07",
          name: "Biskra",
        },
        {
          code: "09",
          name: "Blida",
        },
        {
          code: "34",
          name: "Bordj Bou Arréridj",
        },
        {
          code: "10",
          name: "Bouira",
        },
        {
          code: "35",
          name: "Boumerdès",
        },
        {
          code: "08",
          name: "Béchar",
        },
        {
          code: "06",
          name: "Béjaïa",
        },
        {
          code: "02",
          name: "Chlef",
        },
        {
          code: "25",
          name: "Constantine",
        },
        {
          code: "17",
          name: "Djelfa",
        },
        {
          code: "32",
          name: "El Bayadh",
        },
        {
          code: "39",
          name: "El Oued",
        },
        {
          code: "36",
          name: "El Tarf",
        },
        {
          code: "47",
          name: "Ghardaïa",
        },
        {
          code: "24",
          name: "Guelma",
        },
        {
          code: "33",
          name: "Illizi",
        },
        {
          code: "18",
          name: "Jijel",
        },
        {
          code: "40",
          name: "Khenchela",
        },
        {
          code: "03",
          name: "Laghouat",
        },
        {
          code: "29",
          name: "Mascara",
        },
        {
          code: "43",
          name: "Mila",
        },
        {
          code: "27",
          name: "Mostaganem",
        },
        {
          code: "28",
          name: "Msila",
        },
        {
          code: "26",
          name: "Médéa",
        },
        {
          code: "45",
          name: "Naama",
        },
        {
          code: "31",
          name: "Oran",
        },
        {
          code: "30",
          name: "Ouargla",
        },
        {
          code: "04",
          name: "Oum el Bouaghi",
        },
        {
          code: "48",
          name: "Relizane",
        },
        {
          code: "20",
          name: "Saïda",
        },
        {
          code: "22",
          name: "Sidi Bel Abbès",
        },
        {
          code: "21",
          name: "Skikda",
        },
        {
          code: "41",
          name: "Souk Ahras",
        },
        {
          code: "19",
          name: "Sétif",
        },
        {
          code: "11",
          name: "Tamanghasset",
        },
        {
          code: "14",
          name: "Tiaret",
        },
        {
          code: "37",
          name: "Tindouf",
        },
        {
          code: "42",
          name: "Tipaza",
        },
        {
          code: "38",
          name: "Tissemsilt",
        },
        {
          code: "15",
          name: "Tizi Ouzou",
        },
        {
          code: "13",
          name: "Tlemcen",
        },
        {
          code: "12",
          name: "Tébessa",
        },
      ],
      subregion: "Northern Africa",
    },
    {
      capital: "Pago Pago",
      code2: "AS",
      code3: "ASM",
      name: "American Samoa",
      region: "Oceania",
      subregion: "Polynesia",
    },
    {
      capital: "Andorra la Vella",
      code2: "AD",
      code3: "AND",
      name: "Andorra",
      region: "Europe",
      states: [
        {
          code: "07",
          name: "Andorra la Vella",
        },
        {
          code: "02",
          name: "Canillo",
        },
        {
          code: "03",
          name: "Encamp",
        },
        {
          code: "08",
          name: "Escaldes-Engordany",
        },
        {
          code: "04",
          name: "La Massana",
        },
        {
          code: "05",
          name: "Ordino",
        },
        {
          code: "06",
          name: "Sant Julià de Lòria",
        },
      ],
      subregion: "Southern Europe",
    },
    {
      capital: "Luanda",
      code2: "AO",
      code3: "AGO",
      name: "Angola",
      region: "Africa",
      states: [
        {
          code: "BGO",
          name: "Bengo",
        },
        {
          code: "BGU",
          name: "Benguela",
        },
        {
          code: "BIE",
          name: "Bié",
        },
        {
          code: "CAB",
          name: "Cabinda",
        },
        {
          code: "CNN",
          name: "Cunene",
        },
        {
          code: "HUA",
          name: "Huambo",
        },
        {
          code: "HUI",
          name: "Huíla",
        },
        {
          code: "CCU",
          name: "Kuando Kubango",
        },
        {
          code: "CNO",
          name: "Kwanza Norte",
        },
        {
          code: "CUS",
          name: "Kwanza Sul",
        },
        {
          code: "LUA",
          name: "Luanda",
        },
        {
          code: "LNO",
          name: "Lunda Norte",
        },
        {
          code: "LSU",
          name: "Lunda Sul",
        },
        {
          code: "MAL",
          name: "Malange",
        },
        {
          code: "MOX",
          name: "Moxico",
        },
        {
          code: "NAM",
          name: "Namibe",
        },
        {
          code: "UIG",
          name: "Uíge",
        },
        {
          code: "ZAI",
          name: "Zaire",
        },
      ],
      subregion: "Middle Africa",
    },
    {
      capital: "The Valley",
      code2: "AI",
      code3: "AIA",
      name: "Anguilla",
      region: "Americas",
      subregion: "Caribbean",
    },
    {
      capital: "",
      code2: "AQ",
      code3: "ATA",
      name: "Antarctica",
      region: "Polar",
      subregion: "",
    },
    {
      capital: "Saint John's",
      code2: "AG",
      code3: "ATG",
      name: "Antigua and Barbuda",
      region: "Americas",
      states: [
        {
          code: "10",
          name: "Barbuda",
        },
        {
          code: "11",
          name: "Redonda",
        },
        {
          code: "03",
          name: "Saint George",
        },
        {
          code: "04",
          name: "Saint John",
        },
        {
          code: "05",
          name: "Saint Mary",
        },
        {
          code: "06",
          name: "Saint Paul",
        },
        {
          code: "07",
          name: "Saint Peter",
        },
        {
          code: "08",
          name: "Saint Philip",
        },
      ],
      subregion: "Caribbean",
    },
    {
      capital: "Buenos Aires",
      code2: "AR",
      code3: "ARG",
      name: "Argentina",
      region: "Americas",
      states: [
        {
          code: "B",
          name: "Buenos Aires",
        },
        {
          code: "K",
          name: "Catamarca",
        },
        {
          code: "H",
          name: "Chaco",
        },
        {
          code: "U",
          name: "Chubut",
        },
        {
          code: "C",
          name: "Ciudad Autónoma de Buenos Aires",
        },
        {
          code: "W",
          name: "Corrientes",
        },
        {
          code: "X",
          name: "Córdoba",
        },
        {
          code: "E",
          name: "Entre Ríos",
        },
        {
          code: "P",
          name: "Formosa",
        },
        {
          code: "Y",
          name: "Jujuy",
        },
        {
          code: "L",
          name: "La Pampa",
        },
        {
          code: "F",
          name: "La Rioja",
        },
        {
          code: "M",
          name: "Mendoza",
        },
        {
          code: "N",
          name: "Misiones",
        },
        {
          code: "Q",
          name: "Neuquén",
        },
        {
          code: "R",
          name: "Río Negro",
        },
        {
          code: "A",
          name: "Salta",
        },
        {
          code: "J",
          name: "San Juan",
        },
        {
          code: "D",
          name: "San Luis",
        },
        {
          code: "Z",
          name: "Santa Cruz",
        },
        {
          code: "S",
          name: "Santa Fe",
        },
        {
          code: "G",
          name: "Santiago del Estero",
        },
        {
          code: "V",
          name: "Tierra del Fuego",
        },
        {
          code: "T",
          name: "Tucumán",
        },
      ],
      subregion: "South America",
    },
    {
      capital: "Yerevan",
      code2: "AM",
      code3: "ARM",
      name: "Armenia",
      region: "Asia",
      states: [
        {
          code: "AG",
          name: "Aragac̣otn",
        },
        {
          code: "AR",
          name: "Ararat",
        },
        {
          code: "AV",
          name: "Armavir",
        },
        {
          code: "ER",
          name: "Erevan",
        },
        {
          code: "GR",
          name: "Geġark'unik'",
        },
        {
          code: "KT",
          name: "Kotayk'",
        },
        {
          code: "LO",
          name: "Loṙi",
        },
        {
          code: "SU",
          name: "Syunik'",
        },
        {
          code: "TV",
          name: "Tavuš",
        },
        {
          code: "VD",
          name: "Vayoć Jor",
        },
        {
          code: "SH",
          name: "Širak",
        },
      ],
      subregion: "Western Asia",
    },
    {
      capital: "Oranjestad",
      code2: "AW",
      code3: "ABW",
      name: "Aruba",
      region: "Americas",
      subregion: "Caribbean",
    },
    {
      capital: "Canberra",
      code2: "AU",
      code3: "AUS",
      name: "Australia",
      region: "Oceania",
      states: [
        {
          code: "ACT",
          name: "Australian Capital Territory",
        },
        {
          code: "NSW",
          name: "New South Wales",
        },
        {
          code: "NT",
          name: "Northern Territory",
        },
        {
          code: "QLD",
          name: "Queensland",
        },
        {
          code: "SA",
          name: "South Australia",
        },
        {
          code: "TAS",
          name: "Tasmania",
        },
        {
          code: "VIC",
          name: "Victoria",
        },
        {
          code: "WA",
          name: "Western Australia",
        },
      ],
      subregion: "Australia and New Zealand",
    },
    {
      capital: "Vienna",
      code2: "AT",
      code3: "AUT",
      name: "Austria",
      region: "Europe",
      states: [
        {
          code: "B",
          name: "Burgenland",
        },
        {
          code: "K",
          name: "Kärnten",
        },
        {
          code: "NÖ",
          name: "Niederösterreich",
        },
        {
          code: "OÖ",
          name: "Oberösterreich",
        },
        {
          code: "S",
          name: "Salzburg",
        },
        {
          code: "ST",
          name: "Steiermark",
        },
        {
          code: "T",
          name: "Tirol",
        },
        {
          code: "V",
          name: "Vorarlberg",
        },
        {
          code: "W",
          name: "Wien",
        },
      ],
      subregion: "Western Europe",
    },
    {
      capital: "Baku",
      code2: "AZ",
      code3: "AZE",
      name: "Azerbaijan",
      region: "Asia",
      states: [
        {
          code: "NX",
          name: "Naxçıvan",
        },
      ],
      subregion: "Western Asia",
    },
    {
      capital: "Nassau",
      code2: "BS",
      code3: "BHS",
      name: "The Bahamas",
      region: "Americas",
      states: [
        {
          code: "AK",
          name: "Acklins",
        },
        {
          code: "BY",
          name: "Berry Islands",
        },
        {
          code: "BI",
          name: "Bimini",
        },
        {
          code: "BP",
          name: "Black Point",
        },
        {
          code: "CI",
          name: "Cat Island",
        },
        {
          code: "CO",
          name: "Central Abaco",
        },
        {
          code: "CS",
          name: "Central Andros",
        },
        {
          code: "CE",
          name: "Central Eleuthera",
        },
        {
          code: "FP",
          name: "City of Freeport",
        },
        {
          code: "CK",
          name: "Crooked Island and Long Cay",
        },
        {
          code: "EG",
          name: "East Grand Bahama",
        },
        {
          code: "EX",
          name: "Exuma",
        },
        {
          code: "GC",
          name: "Grand Cay",
        },
        {
          code: "HI",
          name: "Harbour Island",
        },
        {
          code: "HT",
          name: "Hope Town",
        },
        {
          code: "IN",
          name: "Inagua",
        },
        {
          code: "LI",
          name: "Long Island",
        },
        {
          code: "MC",
          name: "Mangrove Cay",
        },
        {
          code: "MG",
          name: "Mayaguana",
        },
        {
          code: "MI",
          name: "Moores Island",
        },
        {
          code: "NO",
          name: "North Abaco",
        },
        {
          code: "NS",
          name: "North Andros",
        },
        {
          code: "NE",
          name: "North Eleuthera",
        },
        {
          code: "RI",
          name: "Ragged Island",
        },
        {
          code: "RC",
          name: "Rum Cay",
        },
        {
          code: "SS",
          name: "San Salvador",
        },
        {
          code: "SO",
          name: "South Abaco",
        },
        {
          code: "SA",
          name: "South Andros",
        },
        {
          code: "SE",
          name: "South Eleuthera",
        },
        {
          code: "SW",
          name: "Spanish Wells",
        },
        {
          code: "WG",
          name: "West Grand Bahama",
        },
      ],
      subregion: "Caribbean",
    },
    {
      capital: "Manama",
      code2: "BH",
      code3: "BHR",
      name: "Bahrain",
      region: "Asia",
      states: [
        {
          code: "14",
          name: "Al Janūbīyah",
        },
        {
          code: "13",
          name: "Al Manāmah",
        },
        {
          code: "15",
          name: "Al Muḩarraq",
        },
        {
          code: "16",
          name: "Al Wusţá",
        },
        {
          code: "17",
          name: "Ash Shamālīyah",
        },
      ],
      subregion: "Western Asia",
    },
    {
      capital: "Dhaka",
      code2: "BD",
      code3: "BGD",
      name: "Bangladesh",
      region: "Asia",
      states: [
        {
          code: "A",
          name: "Barisal",
        },
        {
          code: "B",
          name: "Chittagong",
        },
        {
          code: "C",
          name: "Dhaka",
        },
        {
          code: "D",
          name: "Khulna",
        },
        {
          code: "E",
          name: "Rajshahi",
        },
        {
          code: "F",
          name: "Rangpur",
        },
        {
          code: "G",
          name: "Sylhet",
        },
      ],
      subregion: "Southern Asia",
    },
    {
      capital: "Bridgetown",
      code2: "BB",
      code3: "BRB",
      name: "Barbados",
      region: "Americas",
      states: [
        {
          code: "01",
          name: "Christ Church",
        },
        {
          code: "02",
          name: "Saint Andrew",
        },
        {
          code: "03",
          name: "Saint George",
        },
        {
          code: "04",
          name: "Saint James",
        },
        {
          code: "05",
          name: "Saint John",
        },
        {
          code: "06",
          name: "Saint Joseph",
        },
        {
          code: "07",
          name: "Saint Lucy",
        },
        {
          code: "08",
          name: "Saint Michael",
        },
        {
          code: "09",
          name: "Saint Peter",
        },
        {
          code: "10",
          name: "Saint Philip",
        },
        {
          code: "11",
          name: "Saint Thomas",
        },
      ],
      subregion: "Caribbean",
    },
    {
      capital: "Minsk",
      code2: "BY",
      code3: "BLR",
      name: "Belarus",
      region: "Europe",
      states: [
        {
          code: "BR",
          name: "Brestskaya voblasts'",
        },
        {
          code: "HO",
          name: "Homyel'skaya voblasts'",
        },
        {
          code: "HM",
          name: "Horad Minsk",
        },
        {
          code: "HR",
          name: "Hrodzenskaya voblasts'",
        },
        {
          code: "MA",
          name: "Mahilyowskaya voblasts'",
        },
        {
          code: "MI",
          name: "Minskaya voblasts'",
        },
        {
          code: "VI",
          name: "Vitsyebskaya voblasts'",
        },
      ],
      subregion: "Eastern Europe",
    },
    {
      capital: "Brussels",
      code2: "BE",
      code3: "BEL",
      name: "Belgium",
      region: "Europe",
      states: [
        {
          code: "BRU",
          name: "Brussels Hoofdstedelijk Gewest",
        },
        {
          code: "WAL",
          name: "Région Wallonne",
        },
        {
          code: "VLG",
          name: "Vlaams Gewest",
        },
      ],
      subregion: "Western Europe",
    },
    {
      capital: "Belmopan",
      code2: "BZ",
      code3: "BLZ",
      name: "Belize",
      region: "Americas",
      states: [
        {
          code: "BZ",
          name: "Belize",
        },
        {
          code: "CY",
          name: "Cayo",
        },
        {
          code: "CZL",
          name: "Corozal",
        },
        {
          code: "OW",
          name: "Orange Walk",
        },
        {
          code: "SC",
          name: "Stann Creek",
        },
        {
          code: "TOL",
          name: "Toledo",
        },
      ],
      subregion: "Central America",
    },
    {
      capital: "Porto-Novo",
      code2: "BJ",
      code3: "BEN",
      name: "Benin",
      region: "Africa",
      states: [
        {
          code: "AL",
          name: "Alibori",
        },
        {
          code: "AK",
          name: "Atakora",
        },
        {
          code: "AQ",
          name: "Atlantique",
        },
        {
          code: "BO",
          name: "Borgou",
        },
        {
          code: "CO",
          name: "Collines",
        },
        {
          code: "DO",
          name: "Donga",
        },
        {
          code: "KO",
          name: "Kouffo",
        },
        {
          code: "LI",
          name: "Littoral",
        },
        {
          code: "MO",
          name: "Mono",
        },
        {
          code: "OU",
          name: "Ouémé",
        },
        {
          code: "PL",
          name: "Plateau",
        },
        {
          code: "ZO",
          name: "Zou",
        },
      ],
      subregion: "Western Africa",
    },
    {
      capital: "Hamilton",
      code2: "BM",
      code3: "BMU",
      name: "Bermuda",
      region: "Americas",
      subregion: "Northern America",
    },
    {
      capital: "Thimphu",
      code2: "BT",
      code3: "BTN",
      name: "Bhutan",
      region: "Asia",
      states: [
        {
          code: "33",
          name: "Bumthang",
        },
        {
          code: "12",
          name: "Chhukha",
        },
        {
          code: "22",
          name: "Dagana",
        },
        {
          code: "GA",
          name: "Gasa",
        },
        {
          code: "13",
          name: "Ha",
        },
        {
          code: "44",
          name: "Lhuentse",
        },
        {
          code: "42",
          name: "Monggar",
        },
        {
          code: "11",
          name: "Paro",
        },
        {
          code: "43",
          name: "Pemagatshel",
        },
        {
          code: "23",
          name: "Punakha",
        },
        {
          code: "45",
          name: "Samdrup Jongkha",
        },
        {
          code: "14",
          name: "Samtse",
        },
        {
          code: "31",
          name: "Sarpang",
        },
        {
          code: "15",
          name: "Thimphu",
        },
        {
          code: "TY",
          name: "Trashi Yangtse",
        },
        {
          code: "41",
          name: "Trashigang",
        },
        {
          code: "32",
          name: "Trongsa",
        },
        {
          code: "21",
          name: "Tsirang",
        },
        {
          code: "24",
          name: "Wangdue Phodrang",
        },
        {
          code: "34",
          name: "Zhemgang",
        },
      ],
      subregion: "Southern Asia",
    },
    {
      capital: "Sucre",
      code2: "BO",
      code3: "BOL",
      name: "Bolivia",
      region: "Americas",
      states: [
        {
          code: "H",
          name: "Chuquisaca",
        },
        {
          code: "C",
          name: "Cochabamba",
        },
        {
          code: "B",
          name: "El Beni",
        },
        {
          code: "L",
          name: "La Paz",
        },
        {
          code: "O",
          name: "Oruro",
        },
        {
          code: "N",
          name: "Pando",
        },
        {
          code: "P",
          name: "Potosí",
        },
        {
          code: "S",
          name: "Santa Cruz",
        },
        {
          code: "T",
          name: "Tarija",
        },
      ],
      subregion: "South America",
    },
    {
      capital: "Kralendijk",
      code2: "BQ",
      code3: "BES",
      name: "Bonaire",
      region: "Americas",
      subregion: "Caribbean",
    },
    {
      capital: "Sarajevo",
      code2: "BA",
      code3: "BIH",
      name: "Bosnia and Herzegovina",
      region: "Europe",
      states: [
        {
          code: "BRC",
          name: "Brčko distrikt",
        },
        {
          code: "BIH",
          name: "Federacija Bosna i Hercegovina",
        },
        {
          code: "SRP",
          name: "Republika Srpska",
        },
      ],
      subregion: "Southern Europe",
    },
    {
      capital: "Gaborone",
      code2: "BW",
      code3: "BWA",
      name: "Botswana",
      region: "Africa",
      states: [
        {
          code: "CE",
          name: "Central",
        },
        {
          code: "CH",
          name: "Chobe",
        },
        {
          code: "FR",
          name: "Francistown",
        },
        {
          code: "GA",
          name: "Gaborone",
        },
        {
          code: "GH",
          name: "Ghanzi",
        },
        {
          code: "JW",
          name: "Jwaneng",
        },
        {
          code: "KG",
          name: "Kgalagadi",
        },
        {
          code: "KL",
          name: "Kgatleng",
        },
        {
          code: "KW",
          name: "Kweneng",
        },
        {
          code: "LO",
          name: "Lobatse",
        },
        {
          code: "NE",
          name: "North-East",
        },
        {
          code: "NW",
          name: "North-West",
        },
        {
          code: "SP",
          name: "Selibe Phikwe",
        },
        {
          code: "SE",
          name: "South-East",
        },
        {
          code: "SO",
          name: "Southern",
        },
        {
          code: "ST",
          name: "Sowa Town",
        },
      ],
      subregion: "Southern Africa",
    },
    {
      capital: "",
      code2: "BV",
      code3: "BVT",
      name: "Bouvet Island",
      region: "",
      subregion: "",
    },
    {
      capital: "Brasília",
      code2: "BR",
      code3: "BRA",
      name: "Brazil",
      region: "Americas",
      states: [
        {
          code: "AC",
          name: "Acre",
        },
        {
          code: "AL",
          name: "Alagoas",
        },
        {
          code: "AP",
          name: "Amapá",
        },
        {
          code: "AM",
          name: "Amazonas",
        },
        {
          code: "BA",
          name: "Bahia",
        },
        {
          code: "CE",
          name: "Ceará",
        },
        {
          code: "DF",
          name: "Distrito Federal",
        },
        {
          code: "ES",
          name: "Espírito Santo",
        },
        {
          code: "GO",
          name: "Goiás",
        },
        {
          code: "MA",
          name: "Maranhão",
        },
        {
          code: "MT",
          name: "Mato Grosso",
        },
        {
          code: "MS",
          name: "Mato Grosso do Sul",
        },
        {
          code: "MG",
          name: "Minas Gerais",
        },
        {
          code: "PR",
          name: "Paraná",
        },
        {
          code: "PB",
          name: "Paraíba",
        },
        {
          code: "PA",
          name: "Pará",
        },
        {
          code: "PE",
          name: "Pernambuco",
        },
        {
          code: "PI",
          name: "Piauí",
        },
        {
          code: "RN",
          name: "Rio Grande do Norte",
        },
        {
          code: "RS",
          name: "Rio Grande do Sul",
        },
        {
          code: "RJ",
          name: "Rio de Janeiro",
        },
        {
          code: "RO",
          name: "Rondônia",
        },
        {
          code: "RR",
          name: "Roraima",
        },
        {
          code: "SC",
          name: "Santa Catarina",
        },
        {
          code: "SE",
          name: "Sergipe",
        },
        {
          code: "SP",
          name: "São Paulo",
        },
        {
          code: "TO",
          name: "Tocantins",
        },
      ],
      subregion: "South America",
    },
    {
      capital: "Diego Garcia",
      code2: "IO",
      code3: "IOT",
      name: "British Indian Ocean Territory",
      region: "Africa",
      subregion: "Eastern Africa",
    },
    {
      capital: "",
      code2: "UM",
      code3: "UMI",
      name: "United States Minor Outlying Islands",
      region: "Americas",
      states: [
        {
          code: "81",
          name: "Baker Island",
        },
        {
          code: "84",
          name: "Howland Island",
        },
        {
          code: "86",
          name: "Jarvis Island",
        },
        {
          code: "67",
          name: "Johnston Atoll",
        },
        {
          code: "89",
          name: "Kingman Reef",
        },
        {
          code: "71",
          name: "Midway Islands",
        },
        {
          code: "76",
          name: "Navassa Island",
        },
        {
          code: "95",
          name: "Palmyra Atoll",
        },
        {
          code: "79",
          name: "Wake Island",
        },
      ],
      subregion: "Northern America",
    },
    {
      capital: "Road Town",
      code2: "VG",
      code3: "VGB",
      name: "Virgin Islands (British)",
      region: "Americas",
      subregion: "Caribbean",
    },
    {
      capital: "Charlotte Amalie",
      code2: "VI",
      code3: "VIR",
      name: "Virgin Islands (U.S.)",
      region: "Americas",
      subregion: "Caribbean",
    },
    {
      capital: "Bandar Seri Begawan",
      code2: "BN",
      code3: "BRN",
      name: "Brunei",
      region: "Asia",
      states: [
        {
          code: "BE",
          name: "Belait",
        },
        {
          code: "BM",
          name: "Brunei-Muara",
        },
        {
          code: "TE",
          name: "Temburong",
        },
        {
          code: "TU",
          name: "Tutong",
        },
      ],
      subregion: "South-Eastern Asia",
    },
    {
      capital: "Sofia",
      code2: "BG",
      code3: "BGR",
      name: "Bulgaria",
      region: "Europe",
      states: [
        {
          code: "01",
          name: "Blagoevgrad",
        },
        {
          code: "02",
          name: "Burgas",
        },
        {
          code: "08",
          name: "Dobrich",
        },
        {
          code: "07",
          name: "Gabrovo",
        },
        {
          code: "26",
          name: "Haskovo",
        },
        {
          code: "09",
          name: "Kardzhali",
        },
        {
          code: "10",
          name: "Kyustendil",
        },
        {
          code: "11",
          name: "Lovech",
        },
        {
          code: "12",
          name: "Montana",
        },
        {
          code: "13",
          name: "Pazardzhik",
        },
        {
          code: "14",
          name: "Pernik",
        },
        {
          code: "15",
          name: "Pleven",
        },
        {
          code: "16",
          name: "Plovdiv",
        },
        {
          code: "17",
          name: "Razgrad",
        },
        {
          code: "18",
          name: "Ruse",
        },
        {
          code: "27",
          name: "Shumen",
        },
        {
          code: "19",
          name: "Silistra",
        },
        {
          code: "20",
          name: "Sliven",
        },
        {
          code: "21",
          name: "Smolyan",
        },
        {
          code: "23",
          name: "Sofia",
        },
        {
          code: "22",
          name: "Sofia-Grad",
        },
        {
          code: "24",
          name: "Stara Zagora",
        },
        {
          code: "25",
          name: "Targovishte",
        },
        {
          code: "03",
          name: "Varna",
        },
        {
          code: "04",
          name: "Veliko Tarnovo",
        },
        {
          code: "05",
          name: "Vidin",
        },
        {
          code: "06",
          name: "Vratsa",
        },
        {
          code: "28",
          name: "Yambol",
        },
      ],
      subregion: "Eastern Europe",
    },
    {
      capital: "Ouagadougou",
      code2: "BF",
      code3: "BFA",
      name: "Burkina Faso",
      region: "Africa",
      states: [
        {
          code: "01",
          name: "Boucle du Mouhoun",
        },
        {
          code: "02",
          name: "Cascades",
        },
        {
          code: "03",
          name: "Centre",
        },
        {
          code: "04",
          name: "Centre-Est",
        },
        {
          code: "05",
          name: "Centre-Nord",
        },
        {
          code: "06",
          name: "Centre-Ouest",
        },
        {
          code: "07",
          name: "Centre-Sud",
        },
        {
          code: "08",
          name: "Est",
        },
        {
          code: "09",
          name: "Hauts-Bassins",
        },
        {
          code: "10",
          name: "Nord",
        },
        {
          code: "11",
          name: "Plateau-Central",
        },
        {
          code: "12",
          name: "Sahel",
        },
        {
          code: "13",
          name: "Sud-Ouest",
        },
      ],
      subregion: "Western Africa",
    },
    {
      capital: "Bujumbura",
      code2: "BI",
      code3: "BDI",
      name: "Burundi",
      region: "Africa",
      states: [
        {
          code: "BB",
          name: "Bubanza",
        },
        {
          code: "BM",
          name: "Bujumbura Mairie",
        },
        {
          code: "BL",
          name: "Bujumbura Rural",
        },
        {
          code: "BR",
          name: "Bururi",
        },
        {
          code: "CA",
          name: "Cankuzo",
        },
        {
          code: "CI",
          name: "Cibitoke",
        },
        {
          code: "GI",
          name: "Gitega",
        },
        {
          code: "KR",
          name: "Karuzi",
        },
        {
          code: "KY",
          name: "Kayanza",
        },
        {
          code: "KI",
          name: "Kirundo",
        },
        {
          code: "MA",
          name: "Makamba",
        },
        {
          code: "MU",
          name: "Muramvya",
        },
        {
          code: "MY",
          name: "Muyinga",
        },
        {
          code: "MW",
          name: "Mwaro",
        },
        {
          code: "NG",
          name: "Ngozi",
        },
        {
          code: "RT",
          name: "Rutana",
        },
        {
          code: "RY",
          name: "Ruyigi",
        },
      ],
      subregion: "Eastern Africa",
    },
    {
      capital: "Phnom Penh",
      code2: "KH",
      code3: "KHM",
      name: "Cambodia",
      region: "Asia",
      states: [
        {
          code: "2",
          name: "Baat Dambang",
        },
        {
          code: "1",
          name: "Banteay Mean Chey",
        },
        {
          code: "3",
          name: "Kampong Chaam",
        },
        {
          code: "4",
          name: "Kampong Chhnang",
        },
        {
          code: "5",
          name: "Kampong Spueu",
        },
        {
          code: "6",
          name: "Kampong Thum",
        },
        {
          code: "7",
          name: "Kampot",
        },
        {
          code: "8",
          name: "Kandaal",
        },
        {
          code: "9",
          name: "Kaoh Kong",
        },
        {
          code: "10",
          name: "Kracheh",
        },
        {
          code: "23",
          name: "Krong Kaeb",
        },
        {
          code: "24",
          name: "Krong Pailin",
        },
        {
          code: "18",
          name: "Krong Preah Sihanouk",
        },
        {
          code: "11",
          name: "Mondol Kiri",
        },
        {
          code: "22",
          name: "Otdar Mean Chey",
        },
        {
          code: "12",
          name: "Phnom Penh",
        },
        {
          code: "15",
          name: "Pousaat",
        },
        {
          code: "13",
          name: "Preah Vihear",
        },
        {
          code: "14",
          name: "Prey Veaeng",
        },
        {
          code: "16",
          name: "Rotanak Kiri",
        },
        {
          code: "17",
          name: "Siem Reab",
        },
        {
          code: "19",
          name: "Stueng Traeng",
        },
        {
          code: "20",
          name: "Svaay Rieng",
        },
        {
          code: "21",
          name: "Taakaev",
        },
      ],
      subregion: "South-Eastern Asia",
    },
    {
      capital: "Yaoundé",
      code2: "CM",
      code3: "CMR",
      name: "Cameroon",
      region: "Africa",
      states: [
        {
          code: "AD",
          name: "Adamaoua",
        },
        {
          code: "CE",
          name: "Centre",
        },
        {
          code: "ES",
          name: "East",
        },
        {
          code: "EN",
          name: "Far North",
        },
        {
          code: "LT",
          name: "Littoral",
        },
        {
          code: "NO",
          name: "North",
        },
        {
          code: "NW",
          name: "North-West",
        },
        {
          code: "SU",
          name: "South",
        },
        {
          code: "SW",
          name: "South-West",
        },
        {
          code: "OU",
          name: "West",
        },
      ],
      subregion: "Middle Africa",
    },
    {
      capital: "Ottawa",
      code2: "CA",
      code3: "CAN",
      name: "Canada",
      region: "Americas",
      states: [
        {
          code: "AB",
          name: "Alberta",
          subdivision: "province",
        },
        {
          code: "BC",
          name: "British Columbia",
          subdivision: "province",
        },
        {
          code: "MB",
          name: "Manitoba",
          subdivision: "province",
        },
        {
          code: "NB",
          name: "New Brunswick",
          subdivision: "province",
        },
        {
          code: "NL",
          name: "Newfoundland and Labrador",
          subdivision: "province",
        },
        {
          code: "NS",
          name: "Nova Scotia",
          subdivision: "province",
        },
        {
          code: "ON",
          name: "Ontario",
          subdivision: "province",
        },
        {
          code: "PE",
          name: "Prince Edward Island",
          subdivision: "province",
        },
        {
          code: "QC",
          name: "Quebec",
          subdivision: "province",
        },
        {
          code: "SK",
          name: "Saskatchewan",
          subdivision: "province",
        },
        {
          code: "NT",
          name: "Northwest Territories",
          subdivision: "territory",
        },
        {
          code: "NU",
          name: "Nunavut",
          subdivision: "territory",
        },
        {
          code: "YT",
          name: "Yukon",
          subdivision: "territory",
        },
      ],
      subregion: "Northern America",
    },
    {
      capital: "Praia",
      code2: "CV",
      code3: "CPV",
      name: "Cape Verde",
      region: "Africa",
      states: [
        {
          code: "B",
          name: "Ilhas de Barlavento",
        },
        {
          code: "S",
          name: "Ilhas de Sotavento",
        },
      ],
      subregion: "Western Africa",
    },
    {
      capital: "George Town",
      code2: "KY",
      code3: "CYM",
      name: "Cayman Islands",
      region: "Americas",
      subregion: "Caribbean",
    },
    {
      capital: "Bangui",
      code2: "CF",
      code3: "CAF",
      name: "Central African Republic",
      region: "Africa",
      states: [
        {
          code: "BB",
          name: "Bamingui-Bangoran",
        },
        {
          code: "BGF",
          name: "Bangui",
        },
        {
          code: "BK",
          name: "Basse-Kotto",
        },
        {
          code: "KB",
          name: "Gribingui",
        },
        {
          code: "HM",
          name: "Haut-Mbomou",
        },
        {
          code: "HK",
          name: "Haute-Kotto",
        },
        {
          code: "HS",
          name: "Haute-Sangha / Mambéré-Kadéï",
        },
        {
          code: "KG",
          name: "Kémo-Gribingui",
        },
        {
          code: "LB",
          name: "Lobaye",
        },
        {
          code: "MB",
          name: "Mbomou",
        },
        {
          code: "NM",
          name: "Nana-Mambéré",
        },
        {
          code: "MP",
          name: "Ombella-Mpoko",
        },
        {
          code: "UK",
          name: "Ouaka",
        },
        {
          code: "AC",
          name: "Ouham",
        },
        {
          code: "OP",
          name: "Ouham-Pendé",
        },
        {
          code: "SE",
          name: "Sangha",
        },
        {
          code: "VK",
          name: "Vakaga",
        },
      ],
      subregion: "Middle Africa",
    },
    {
      capital: "N'Djamena",
      code2: "TD",
      code3: "TCD",
      name: "Chad",
      region: "Africa",
      states: [
        {
          code: "BA",
          name: "Al Baṭḩah",
        },
        {
          code: "LC",
          name: "Al Buḩayrah",
        },
        {
          code: "BG",
          name: "Baḩr al Ghazāl",
        },
        {
          code: "BO",
          name: "Būrkū",
        },
        {
          code: "EN",
          name: "Innīdī",
        },
        {
          code: "KA",
          name: "Kānim",
        },
        {
          code: "LO",
          name: "Lūqūn al Gharbī",
        },
        {
          code: "LR",
          name: "Lūqūn ash Sharqī",
        },
        {
          code: "ND",
          name: "Madīnat Injamīnā",
        },
        {
          code: "MA",
          name: "Māndūl",
        },
        {
          code: "MO",
          name: "Māyū Kībbī al Gharbī",
        },
        {
          code: "ME",
          name: "Māyū Kībbī ash Sharqī",
        },
        {
          code: "GR",
          name: "Qīrā",
        },
        {
          code: "SA",
          name: "Salāmāt",
        },
        {
          code: "CB",
          name: "Shārī Bāqirmī",
        },
        {
          code: "MC",
          name: "Shārī al Awsaṭ",
        },
        {
          code: "SI",
          name: "Sīlā",
        },
        {
          code: "TI",
          name: "Tibastī",
        },
        {
          code: "TA",
          name: "Tānjilī",
        },
        {
          code: "OD",
          name: "Waddāy",
        },
        {
          code: "WF",
          name: "Wādī Fīrā",
        },
        {
          code: "HL",
          name: "Ḥajjar Lamīs",
        },
      ],
      subregion: "Middle Africa",
    },
    {
      capital: "Santiago",
      code2: "CL",
      code3: "CHL",
      name: "Chile",
      region: "Americas",
      states: [
        {
          code: "AI",
          name: "Aisén del General Carlos Ibañez del Campo",
        },
        {
          code: "AN",
          name: "Antofagasta",
        },
        {
          code: "AR",
          name: "Araucanía",
        },
        {
          code: "AP",
          name: "Arica y Parinacota",
        },
        {
          code: "AT",
          name: "Atacama",
        },
        {
          code: "BI",
          name: "Bío-Bío",
        },
        {
          code: "CO",
          name: "Coquimbo",
        },
        {
          code: "LI",
          name: "Libertador General Bernardo O'Higgins",
        },
        {
          code: "LL",
          name: "Los Lagos",
        },
        {
          code: "LR",
          name: "Los Ríos",
        },
        {
          code: "MA",
          name: "Magallanes",
        },
        {
          code: "ML",
          name: "Maule",
        },
        {
          code: "RM",
          name: "Región Metropolitana de Santiago",
        },
        {
          code: "TA",
          name: "Tarapacá",
        },
        {
          code: "VS",
          name: "Valparaíso",
        },
      ],
      subregion: "South America",
    },
    {
      capital: "Beijing",
      code2: "CN",
      code3: "CHN",
      name: "China",
      region: "Asia",
      states: [
        {
          code: "45",
          name: "Guangxi",
          subdivision: "Autonomous region",
        },
        {
          code: "15",
          name: "Nei Mongol",
          subdivision: "Autonomous region",
        },
        {
          code: "64",
          name: "Ningxia",
          subdivision: "Autonomous region",
        },
        {
          code: "65",
          name: "Xinjiang",
          subdivision: "Autonomous region",
        },
        {
          code: "54",
          name: "Xizang",
          subdivision: "Autonomous region",
        },
        {
          code: "11",
          name: "Beijing",
          subdivision: "Municipality",
        },
        {
          code: "50",
          name: "Chongqing",
          subdivision: "Municipality",
        },
        {
          code: "31",
          name: "Shanghai",
          subdivision: "Municipality",
        },
        {
          code: "12",
          name: "Tianjin",
          subdivision: "Municipality",
        },
        {
          code: "34",
          name: "Anhui",
          subdivision: "Province",
        },
        {
          code: "35",
          name: "Fujian",
          subdivision: "Province",
        },
        {
          code: "62",
          name: "Gansu",
          subdivision: "Province",
        },
        {
          code: "44",
          name: "Guangdong",
          subdivision: "Province",
        },
        {
          code: "52",
          name: "Guizhou",
          subdivision: "Province",
        },
        {
          code: "46",
          name: "Hainan",
          subdivision: "Province",
        },
        {
          code: "13",
          name: "Hebei",
          subdivision: "Province",
        },
        {
          code: "23",
          name: "Heilongjiang",
          subdivision: "Province",
        },
        {
          code: "41",
          name: "Henan",
          subdivision: "Province",
        },
        {
          code: "42",
          name: "Hubei",
          subdivision: "Province",
        },
        {
          code: "43",
          name: "Hunan",
          subdivision: "Province",
        },
        {
          code: "32",
          name: "Jiangsu",
          subdivision: "Province",
        },
        {
          code: "36",
          name: "Jiangxi",
          subdivision: "Province",
        },
        {
          code: "22",
          name: "Jilin",
          subdivision: "Province",
        },
        {
          code: "21",
          name: "Liaoning",
          subdivision: "Province",
        },
        {
          code: "63",
          name: "Qinghai",
          subdivision: "Province",
        },
        {
          code: "61",
          name: "Shaanxi",
          subdivision: "Province",
        },
        {
          code: "37",
          name: "Shandong",
          subdivision: "Province",
        },
        {
          code: "14",
          name: "Shanxi",
          subdivision: "Province",
        },
        {
          code: "51",
          name: "Sichuan",
          subdivision: "Province",
        },
        {
          code: "71",
          name: "Taiwan",
          subdivision: "Province",
        },
        {
          code: "53",
          name: "Yunnan",
          subdivision: "Province",
        },
        {
          code: "33",
          name: "Zhejiang",
          subdivision: "Province",
        },
        {
          code: "91",
          name: "Hong Kong",
          subdivision: "Special administrative region",
        },
        {
          code: "92",
          name: "Macao",
          subdivision: "Special administrative region",
        },
        {
          code: "",
          name: "Hong Kong Island",
          subdivision: "Special administrative region",
        },
        {
          code: "KOWLOON",
          name: "Kowloon",
          subdivision: "Special administrative region",
        },
        {
          code: "NEW TERRITORIES",
          name: "New Territories",
          subdivision: "Special administrative region",
        },
      ],
      subregion: "Eastern Asia",
    },
    {
      capital: "Flying Fish Cove",
      code2: "CX",
      code3: "CXR",
      name: "Christmas Island",
      region: "Oceania",
      subregion: "Australia and New Zealand",
    },
    {
      capital: "West Island",
      code2: "CC",
      code3: "CCK",
      name: "Cocos (Keeling) Islands",
      region: "Oceania",
      subregion: "Australia and New Zealand",
    },
    {
      capital: "Bogotá",
      code2: "CO",
      code3: "COL",
      name: "Colombia",
      region: "Americas",
      states: [
        {
          code: "AMA",
          name: "Amazonas",
        },
        {
          code: "ANT",
          name: "Antioquia",
        },
        {
          code: "ARA",
          name: "Arauca",
        },
        {
          code: "ATL",
          name: "Atlántico",
        },
        {
          code: "BOL",
          name: "Bolívar",
        },
        {
          code: "BOY",
          name: "Boyacá",
        },
        {
          code: "CAL",
          name: "Caldas",
        },
        {
          code: "CAQ",
          name: "Caquetá",
        },
        {
          code: "CAS",
          name: "Casanare",
        },
        {
          code: "CAU",
          name: "Cauca",
        },
        {
          code: "CES",
          name: "Cesar",
        },
        {
          code: "CHO",
          name: "Chocó",
        },
        {
          code: "CUN",
          name: "Cundinamarca",
        },
        {
          code: "COR",
          name: "Córdoba",
        },
        {
          code: "DC",
          name: "Distrito Capital de Bogotá",
        },
        {
          code: "GUA",
          name: "Guainía",
        },
        {
          code: "GUV",
          name: "Guaviare",
        },
        {
          code: "HUI",
          name: "Huila",
        },
        {
          code: "LAG",
          name: "La Guajira",
        },
        {
          code: "MAG",
          name: "Magdalena",
        },
        {
          code: "MET",
          name: "Meta",
        },
        {
          code: "NAR",
          name: "Nariño",
        },
        {
          code: "NSA",
          name: "Norte de Santander",
        },
        {
          code: "PUT",
          name: "Putumayo",
        },
        {
          code: "QUI",
          name: "Quindío",
        },
        {
          code: "RIS",
          name: "Risaralda",
        },
        {
          code: "SAP",
          name: "San Andrés, Providencia y Santa Catalina",
        },
        {
          code: "SAN",
          name: "Santander",
        },
        {
          code: "SUC",
          name: "Sucre",
        },
        {
          code: "TOL",
          name: "Tolima",
        },
        {
          code: "VAC",
          name: "Valle del Cauca",
        },
        {
          code: "VAU",
          name: "Vaupés",
        },
        {
          code: "VID",
          name: "Vichada",
        },
      ],
      subregion: "South America",
    },
    {
      capital: "Moroni",
      code2: "KM",
      code3: "COM",
      name: "Comoros",
      region: "Africa",
      states: [
        {
          code: "A",
          name: "Anjouan",
        },
        {
          code: "G",
          name: "Grande Comore",
        },
        {
          code: "M",
          name: "Mohéli",
        },
      ],
      subregion: "Eastern Africa",
    },
    {
      capital: "Brazzaville",
      code2: "CG",
      code3: "COG",
      name: "Republic of the Congo",
      region: "Africa",
      states: [
        {
          code: "11",
          name: "Bouenza",
        },
        {
          code: "BZV",
          name: "Brazzaville",
        },
        {
          code: "8",
          name: "Cuvette",
        },
        {
          code: "15",
          name: "Cuvette-Ouest",
        },
        {
          code: "5",
          name: "Kouilou",
        },
        {
          code: "7",
          name: "Likouala",
        },
        {
          code: "2",
          name: "Lékoumou",
        },
        {
          code: "9",
          name: "Niari",
        },
        {
          code: "14",
          name: "Plateaux",
        },
        {
          code: "16",
          name: "Pointe-Noire",
        },
        {
          code: "12",
          name: "Pool",
        },
        {
          code: "13",
          name: "Sangha",
        },
      ],
      subregion: "Middle Africa",
    },
    {
      capital: "Kinshasa",
      code2: "CD",
      code3: "COD",
      name: "Democratic Republic of the Congo",
      region: "Africa",
      states: [
        {
          code: "BN",
          name: "Bandundu",
        },
        {
          code: "BC",
          name: "Bas-Congo",
        },
        {
          code: "KW",
          name: "Kasai-Occidental",
        },
        {
          code: "KE",
          name: "Kasai-Oriental",
        },
        {
          code: "KA",
          name: "Katanga",
        },
        {
          code: "KN",
          name: "Kinshasa",
        },
        {
          code: "MA",
          name: "Maniema",
        },
        {
          code: "NK",
          name: "Nord-Kivu",
        },
        {
          code: "OR",
          name: "Orientale",
        },
        {
          code: "SK",
          name: "Sud-Kivu",
        },
        {
          code: "EQ",
          name: "Équateur",
        },
      ],
      subregion: "Middle Africa",
    },
    {
      capital: "Avarua",
      code2: "CK",
      code3: "COK",
      name: "Cook Islands",
      region: "Oceania",
      subregion: "Polynesia",
    },
    {
      capital: "San José",
      code2: "CR",
      code3: "CRI",
      name: "Costa Rica",
      region: "Americas",
      states: [
        {
          code: "A",
          name: "Alajuela",
        },
        {
          code: "C",
          name: "Cartago",
        },
        {
          code: "G",
          name: "Guanacaste",
        },
        {
          code: "H",
          name: "Heredia",
        },
        {
          code: "L",
          name: "Limón",
        },
        {
          code: "P",
          name: "Puntarenas",
        },
        {
          code: "SJ",
          name: "San José",
        },
      ],
      subregion: "Central America",
    },
    {
      capital: "Zagreb",
      code2: "HR",
      code3: "HRV",
      name: "Croatia",
      region: "Europe",
      states: [
        {
          code: "07",
          name: "Bjelovarsko-bilogorska županija",
        },
        {
          code: "12",
          name: "Brodsko-posavska županija",
        },
        {
          code: "19",
          name: "Dubrovačko-neretvanska županija",
        },
        {
          code: "21",
          name: "Grad Zagreb",
        },
        {
          code: "18",
          name: "Istarska županija",
        },
        {
          code: "04",
          name: "Karlovačka županija",
        },
        {
          code: "06",
          name: "Koprivničko-križevačka županija",
        },
        {
          code: "02",
          name: "Krapinsko-zagorska županija",
        },
        {
          code: "09",
          name: "Ličko-senjska županija",
        },
        {
          code: "20",
          name: "Međimurska županija",
        },
        {
          code: "14",
          name: "Osječko-baranjska županija",
        },
        {
          code: "11",
          name: "Požeško-slavonska županija",
        },
        {
          code: "08",
          name: "Primorsko-goranska županija",
        },
        {
          code: "03",
          name: "Sisačko-moslavačka županija",
        },
        {
          code: "17",
          name: "Splitsko-dalmatinska županija",
        },
        {
          code: "05",
          name: "Varaždinska županija",
        },
        {
          code: "10",
          name: "Virovitičko-podravska županija",
        },
        {
          code: "16",
          name: "Vukovarsko-srijemska županija",
        },
        {
          code: "13",
          name: "Zadarska županija",
        },
        {
          code: "01",
          name: "Zagrebačka županija",
        },
        {
          code: "15",
          name: "Šibensko-kninska županija",
        },
      ],
      subregion: "Southern Europe",
    },
    {
      capital: "Havana",
      code2: "CU",
      code3: "CUB",
      name: "Cuba",
      region: "Americas",
      states: [
        {
          code: "15",
          name: "Artemisa",
        },
        {
          code: "09",
          name: "Camagüey",
        },
        {
          code: "08",
          name: "Ciego de Ávila",
        },
        {
          code: "06",
          name: "Cienfuegos",
        },
        {
          code: "12",
          name: "Granma",
        },
        {
          code: "14",
          name: "Guantánamo",
        },
        {
          code: "11",
          name: "Holguín",
        },
        {
          code: "99",
          name: "Isla de la Juventud",
        },
        {
          code: "03",
          name: "La Habana",
        },
        {
          code: "10",
          name: "Las Tunas",
        },
        {
          code: "04",
          name: "Matanzas",
        },
        {
          code: "16",
          name: "Mayabeque",
        },
        {
          code: "01",
          name: "Pinar del Río",
        },
        {
          code: "07",
          name: "Sancti Spíritus",
        },
        {
          code: "13",
          name: "Santiago de Cuba",
        },
        {
          code: "05",
          name: "Villa Clara",
        },
      ],
      subregion: "Caribbean",
    },
    {
      capital: "Willemstad",
      code2: "CW",
      code3: "CUW",
      name: "Curaçao",
      region: "Americas",
      subregion: "Caribbean",
    },
    {
      capital: "Nicosia",
      code2: "CY",
      code3: "CYP",
      name: "Cyprus",
      region: "Europe",
      states: [
        {
          code: "04",
          name: "Ammochostos",
        },
        {
          code: "06",
          name: "Keryneia",
        },
        {
          code: "03",
          name: "Larnaka",
        },
        {
          code: "01",
          name: "Lefkosia",
        },
        {
          code: "02",
          name: "Lemesos",
        },
        {
          code: "05",
          name: "Pafos",
        },
      ],
      subregion: "Southern Europe",
    },
    {
      capital: "Prague",
      code2: "CZ",
      code3: "CZE",
      name: "Czech Republic",
      region: "Europe",
      states: [
        {
          code: "JM",
          name: "Jihomoravský kraj",
        },
        {
          code: "JC",
          name: "Jihočeský kraj",
        },
        {
          code: "KA",
          name: "Karlovarský kraj",
        },
        {
          code: "KR",
          name: "Královéhradecký kraj",
        },
        {
          code: "LI",
          name: "Liberecký kraj",
        },
        {
          code: "MO",
          name: "Moravskoslezský kraj",
        },
        {
          code: "OL",
          name: "Olomoucký kraj",
        },
        {
          code: "PA",
          name: "Pardubický kraj",
        },
        {
          code: "PL",
          name: "Plzeňský kraj",
        },
        {
          code: "PR",
          name: "Praha, hlavní město",
        },
        {
          code: "ST",
          name: "Středočeský kraj",
        },
        {
          code: "VY",
          name: "Vysočina",
        },
        {
          code: "ZL",
          name: "Zlínský kraj",
        },
        {
          code: "US",
          name: "Ústecký kraj",
        },
      ],
      subregion: "Eastern Europe",
    },
    {
      capital: "Copenhagen",
      code2: "DK",
      code3: "DNK",
      name: "Denmark",
      region: "Europe",
      states: [
        {
          code: "84",
          name: "Hovedstaden",
        },
        {
          code: "82",
          name: "Midtjylland",
        },
        {
          code: "81",
          name: "Nordjylland",
        },
        {
          code: "85",
          name: "Sjælland",
        },
        {
          code: "83",
          name: "Syddanmark",
        },
      ],
      subregion: "Northern Europe",
    },
    {
      capital: "Djibouti",
      code2: "DJ",
      code3: "DJI",
      name: "Djibouti",
      region: "Africa",
      states: [
        {
          code: "AS",
          name: "Ali Sabieh",
        },
        {
          code: "AR",
          name: "Arta",
        },
        {
          code: "DI",
          name: "Dikhil",
        },
        {
          code: "DJ",
          name: "Djibouti",
        },
        {
          code: "OB",
          name: "Obock",
        },
        {
          code: "TA",
          name: "Tadjourah",
        },
      ],
      subregion: "Eastern Africa",
    },
    {
      capital: "Roseau",
      code2: "DM",
      code3: "DMA",
      name: "Dominica",
      region: "Americas",
      states: [
        {
          code: "02",
          name: "Saint Andrew",
        },
        {
          code: "03",
          name: "Saint David",
        },
        {
          code: "04",
          name: "Saint George",
        },
        {
          code: "05",
          name: "Saint John",
        },
        {
          code: "06",
          name: "Saint Joseph",
        },
        {
          code: "07",
          name: "Saint Luke",
        },
        {
          code: "08",
          name: "Saint Mark",
        },
        {
          code: "09",
          name: "Saint Patrick",
        },
        {
          code: "10",
          name: "Saint Paul",
        },
        {
          code: "11",
          name: "Saint Peter",
        },
      ],
      subregion: "Caribbean",
    },
    {
      capital: "Santo Domingo",
      code2: "DO",
      code3: "DOM",
      name: "Dominican Republic",
      region: "Americas",
      states: [
        {
          code: "33",
          name: "Cibao Nordeste",
        },
        {
          code: "34",
          name: "Cibao Noroeste",
        },
        {
          code: "35",
          name: "Cibao Norte",
        },
        {
          code: "36",
          name: "Cibao Sur",
        },
        {
          code: "37",
          name: "El Valle",
        },
        {
          code: "38",
          name: "Enriquillo",
        },
        {
          code: "39",
          name: "Higuamo",
        },
        {
          code: "40",
          name: "Ozama",
        },
        {
          code: "41",
          name: "Valdesia",
        },
        {
          code: "42",
          name: "Yuma",
        },
      ],
      subregion: "Caribbean",
    },
    {
      capital: "Quito",
      code2: "EC",
      code3: "ECU",
      name: "Ecuador",
      region: "Americas",
      states: [
        {
          code: "A",
          name: "Azuay",
        },
        {
          code: "B",
          name: "Bolívar",
        },
        {
          code: "C",
          name: "Carchi",
        },
        {
          code: "F",
          name: "Cañar",
        },
        {
          code: "H",
          name: "Chimborazo",
        },
        {
          code: "X",
          name: "Cotopaxi",
        },
        {
          code: "O",
          name: "El Oro",
        },
        {
          code: "E",
          name: "Esmeraldas",
        },
        {
          code: "W",
          name: "Galápagos",
        },
        {
          code: "G",
          name: "Guayas",
        },
        {
          code: "I",
          name: "Imbabura",
        },
        {
          code: "L",
          name: "Loja",
        },
        {
          code: "R",
          name: "Los Ríos",
        },
        {
          code: "M",
          name: "Manabí",
        },
        {
          code: "S",
          name: "Morona-Santiago",
        },
        {
          code: "N",
          name: "Napo",
        },
        {
          code: "D",
          name: "Orellana",
        },
        {
          code: "Y",
          name: "Pastaza",
        },
        {
          code: "P",
          name: "Pichincha",
        },
        {
          code: "SE",
          name: "Santa Elena",
        },
        {
          code: "SD",
          name: "Santo Domingo de los Tsáchilas",
        },
        {
          code: "U",
          name: "Sucumbíos",
        },
        {
          code: "T",
          name: "Tungurahua",
        },
        {
          code: "Z",
          name: "Zamora-Chinchipe",
        },
      ],
      subregion: "South America",
    },
    {
      capital: "Cairo",
      code2: "EG",
      code3: "EGY",
      name: "Egypt",
      region: "Africa",
      states: [
        {
          code: "DK",
          name: "Ad Daqahlīyah",
        },
        {
          code: "BA",
          name: "Al Baḩr al Aḩmar",
        },
        {
          code: "BH",
          name: "Al Buḩayrah",
        },
        {
          code: "FYM",
          name: "Al Fayyūm",
        },
        {
          code: "GH",
          name: "Al Gharbīyah",
        },
        {
          code: "ALX",
          name: "Al Iskandarīyah",
        },
        {
          code: "IS",
          name: "Al Ismāٰīlīyah",
        },
        {
          code: "GZ",
          name: "Al Jīzah",
        },
        {
          code: "MN",
          name: "Al Minyā",
        },
        {
          code: "MNF",
          name: "Al Minūfīyah",
        },
        {
          code: "KB",
          name: "Al Qalyūbīyah",
        },
        {
          code: "C",
          name: "Al Qāhirah",
        },
        {
          code: "LX",
          name: "Al Uqşur",
        },
        {
          code: "WAD",
          name: "Al Wādī al Jadīd",
        },
        {
          code: "SUZ",
          name: "As Suways",
        },
        {
          code: "SU",
          name: "As Sādis min Uktūbar",
        },
        {
          code: "SHR",
          name: "Ash Sharqīyah",
        },
        {
          code: "ASN",
          name: "Aswān",
        },
        {
          code: "AST",
          name: "Asyūţ",
        },
        {
          code: "BNS",
          name: "Banī Suwayf",
        },
        {
          code: "PTS",
          name: "Būr Saٰīd",
        },
        {
          code: "DT",
          name: "Dumyāţ",
        },
        {
          code: "JS",
          name: "Janūb Sīnā'",
        },
        {
          code: "KFS",
          name: "Kafr ash Shaykh",
        },
        {
          code: "MT",
          name: "Maţrūḩ",
        },
        {
          code: "KN",
          name: "Qinā",
        },
        {
          code: "SIN",
          name: "Shamāl Sīnā'",
        },
        {
          code: "SHG",
          name: "Sūhāj",
        },
        {
          code: "HU",
          name: "Ḩulwān",
        },
      ],
      subregion: "Northern Africa",
    },
    {
      capital: "San Salvador",
      code2: "SV",
      code3: "SLV",
      name: "El Salvador",
      region: "Americas",
      states: [
        {
          code: "AH",
          name: "Ahuachapán",
        },
        {
          code: "CA",
          name: "Cabañas",
        },
        {
          code: "CH",
          name: "Chalatenango",
        },
        {
          code: "CU",
          name: "Cuscatlán",
        },
        {
          code: "LI",
          name: "La Libertad",
        },
        {
          code: "PA",
          name: "La Paz",
        },
        {
          code: "UN",
          name: "La Unión",
        },
        {
          code: "MO",
          name: "Morazán",
        },
        {
          code: "SM",
          name: "San Miguel",
        },
        {
          code: "SS",
          name: "San Salvador",
        },
        {
          code: "SV",
          name: "San Vicente",
        },
        {
          code: "SA",
          name: "Santa Ana",
        },
        {
          code: "SO",
          name: "Sonsonate",
        },
        {
          code: "US",
          name: "Usulután",
        },
      ],
      subregion: "Central America",
    },
    {
      capital: "Malabo",
      code2: "GQ",
      code3: "GNQ",
      name: "Equatorial Guinea",
      region: "Africa",
      states: [
        {
          code: "C",
          name: "Región Continental",
        },
        {
          code: "I",
          name: "Región Insular",
        },
      ],
      subregion: "Middle Africa",
    },
    {
      capital: "Asmara",
      code2: "ER",
      code3: "ERI",
      name: "Eritrea",
      region: "Africa",
      states: [
        {
          code: "MA",
          name: "Al Awsaţ",
        },
        {
          code: "DU",
          name: "Al Janūbĩ",
        },
        {
          code: "AN",
          name: "Ansabā",
        },
        {
          code: "DK",
          name: "Janūbī al Baḩrī al Aḩmar",
        },
        {
          code: "GB",
          name: "Qāsh-Barkah",
        },
        {
          code: "SK",
          name: "Shimālī al Baḩrī al Aḩmar",
        },
      ],
      subregion: "Eastern Africa",
    },
    {
      capital: "Tallinn",
      code2: "EE",
      code3: "EST",
      name: "Estonia",
      region: "Europe",
      states: [
        {
          code: "37",
          name: "Harjumaa",
        },
        {
          code: "39",
          name: "Hiiumaa",
        },
        {
          code: "44",
          name: "Ida-Virumaa",
        },
        {
          code: "51",
          name: "Järvamaa",
        },
        {
          code: "49",
          name: "Jõgevamaa",
        },
        {
          code: "59",
          name: "Lääne-Virumaa",
        },
        {
          code: "57",
          name: "Läänemaa",
        },
        {
          code: "67",
          name: "Pärnumaa",
        },
        {
          code: "65",
          name: "Põlvamaa",
        },
        {
          code: "70",
          name: "Raplamaa",
        },
        {
          code: "74",
          name: "Saaremaa",
        },
        {
          code: "78",
          name: "Tartumaa",
        },
        {
          code: "82",
          name: "Valgamaa",
        },
        {
          code: "84",
          name: "Viljandimaa",
        },
        {
          code: "86",
          name: "Võrumaa",
        },
      ],
      subregion: "Northern Europe",
    },
    {
      capital: "Addis Ababa",
      code2: "ET",
      code3: "ETH",
      name: "Ethiopia",
      region: "Africa",
      states: [
        {
          code: "BE",
          name: "Bīnshangul Gumuz",
        },
        {
          code: "DD",
          name: "Dirē Dawa",
        },
        {
          code: "GA",
          name: "Gambēla Hizboch",
        },
        {
          code: "HA",
          name: "Hārerī Hizb",
        },
        {
          code: "OR",
          name: "Oromīya",
        },
        {
          code: "SO",
          name: "Sumalē",
        },
        {
          code: "TI",
          name: "Tigray",
        },
        {
          code: "SN",
          name: "YeDebub Bihēroch Bihēreseboch na Hizboch",
        },
        {
          code: "AA",
          name: "Ādīs Ābeba",
        },
        {
          code: "AF",
          name: "Āfar",
        },
        {
          code: "AM",
          name: "Āmara",
        },
      ],
      subregion: "Eastern Africa",
    },
    {
      capital: "Stanley",
      code2: "FK",
      code3: "FLK",
      name: "Falkland Islands",
      region: "Americas",
      subregion: "South America",
    },
    {
      capital: "Tórshavn",
      code2: "FO",
      code3: "FRO",
      name: "Faroe Islands",
      region: "Europe",
      subregion: "Northern Europe",
    },
    {
      capital: "Suva",
      code2: "FJ",
      code3: "FJI",
      name: "Fiji",
      region: "Oceania",
      states: [
        {
          code: "C",
          name: "Central",
        },
        {
          code: "E",
          name: "Eastern",
        },
        {
          code: "N",
          name: "Northern",
        },
        {
          code: "R",
          name: "Rotuma",
        },
        {
          code: "W",
          name: "Western",
        },
      ],
      subregion: "Melanesia",
    },
    {
      capital: "Helsinki",
      code2: "FI",
      code3: "FIN",
      name: "Finland",
      region: "Europe",
      states: [
        {
          code: "01",
          name: "Ahvenanmaan maakunta",
        },
        {
          code: "02",
          name: "Etelä-Karjala",
        },
        {
          code: "03",
          name: "Etelä-Pohjanmaa",
        },
        {
          code: "04",
          name: "Etelä-Savo",
        },
        {
          code: "05",
          name: "Kainuu",
        },
        {
          code: "06",
          name: "Kanta-Häme",
        },
        {
          code: "07",
          name: "Keski-Pohjanmaa",
        },
        {
          code: "08",
          name: "Keski-Suomi",
        },
        {
          code: "09",
          name: "Kymenlaakso",
        },
        {
          code: "10",
          name: "Lappi",
        },
        {
          code: "11",
          name: "Pirkanmaa",
        },
        {
          code: "12",
          name: "Pohjanmaa",
        },
        {
          code: "13",
          name: "Pohjois-Karjala",
        },
        {
          code: "14",
          name: "Pohjois-Pohjanmaa",
        },
        {
          code: "15",
          name: "Pohjois-Savo",
        },
        {
          code: "16",
          name: "Päijät-Häme",
        },
        {
          code: "17",
          name: "Satakunta",
        },
        {
          code: "18",
          name: "Uusimaa",
        },
        {
          code: "19",
          name: "Varsinais-Suomi",
        },
      ],
      subregion: "Northern Europe",
    },
    {
      capital: "Paris",
      code2: "FR",
      code3: "FRA",
      name: "France",
      region: "Europe",
      states: [
        {
          code: "A",
          name: "Alsace",
          subdivision: "Metropolitan region",
        },
        {
          code: "B",
          name: "Aquitaine",
          subdivision: "Metropolitan region",
        },
        {
          code: "C",
          name: "Auvergne",
          subdivision: "Metropolitan region",
        },
        {
          code: "E",
          name: "Brittany",
          subdivision: "Metropolitan region",
        },
        {
          code: "D",
          name: "Burgundy",
          subdivision: "Metropolitan region",
        },
        {
          code: "F",
          name: "Centre-Val de Loire",
          subdivision: "Metropolitan region",
        },
        {
          code: "G",
          name: "Champagne-Ardenne",
          subdivision: "Metropolitan region",
        },
        {
          code: "H",
          name: "Corsica",
          subdivision: "Metropolitan region",
        },
        {
          code: "I",
          name: "Franche-Comté",
          subdivision: "Metropolitan region",
        },
        {
          code: "K",
          name: "Languedoc-Roussillon",
          subdivision: "Metropolitan region",
        },
        {
          code: "L",
          name: "Limousin",
          subdivision: "Metropolitan region",
        },
        {
          code: "M",
          name: "Lorraine",
          subdivision: "Metropolitan region",
        },
        {
          code: "P",
          name: "Lower Normandy",
          subdivision: "Metropolitan region",
        },
        {
          code: "N",
          name: "Midi-Pyrénées",
          subdivision: "Metropolitan region",
        },
        {
          code: "O",
          name: "Nord-Pas-de-Calais",
          subdivision: "Metropolitan region",
        },
        {
          code: "R",
          name: "Pays de la Loire",
          subdivision: "Metropolitan region",
        },
        {
          code: "S",
          name: "Picardy",
          subdivision: "Metropolitan region",
        },
        {
          code: "T",
          name: "Poitou-Charentes",
          subdivision: "Metropolitan region",
        },
        {
          code: "U",
          name: "Provence-Alpes-Côte d'Azur",
          subdivision: "Metropolitan region",
        },
        {
          code: "V",
          name: "Rhône-Alpes",
          subdivision: "Metropolitan region",
        },
        {
          code: "Q",
          name: "Upper Normandy",
          subdivision: "Metropolitan region",
        },
        {
          code: "J",
          name: "Île-de-France",
          subdivision: "Metropolitan region",
        },
      ],
      subregion: "Western Europe",
    },
    {
      capital: "Cayenne",
      code2: "GF",
      code3: "GUF",
      name: "French Guiana",
      region: "Americas",
      subregion: "South America",
    },
    {
      capital: "Papeetē",
      code2: "PF",
      code3: "PYF",
      name: "French Polynesia",
      region: "Oceania",
      subregion: "Polynesia",
    },
    {
      capital: "Port-aux-Français",
      code2: "TF",
      code3: "ATF",
      name: "French Southern and Antarctic Lands",
      region: "Africa",
      subregion: "Southern Africa",
    },
    {
      capital: "Libreville",
      code2: "GA",
      code3: "GAB",
      name: "Gabon",
      region: "Africa",
      states: [
        {
          code: "1",
          name: "Estuaire",
        },
        {
          code: "2",
          name: "Haut-Ogooué",
        },
        {
          code: "3",
          name: "Moyen-Ogooué",
        },
        {
          code: "4",
          name: "Ngounié",
        },
        {
          code: "5",
          name: "Nyanga",
        },
        {
          code: "6",
          name: "Ogooué-Ivindo",
        },
        {
          code: "7",
          name: "Ogooué-Lolo",
        },
        {
          code: "8",
          name: "Ogooué-Maritime",
        },
        {
          code: "9",
          name: "Woleu-Ntem",
        },
      ],
      subregion: "Middle Africa",
    },
    {
      capital: "Banjul",
      code2: "GM",
      code3: "GMB",
      name: "The Gambia",
      region: "Africa",
      states: [
        {
          code: "B",
          name: "Banjul",
        },
        {
          code: "M",
          name: "Central River",
        },
        {
          code: "L",
          name: "Lower River",
        },
        {
          code: "N",
          name: "North Bank",
        },
        {
          code: "U",
          name: "Upper River",
        },
        {
          code: "W",
          name: "Western",
        },
      ],
      subregion: "Western Africa",
    },
    {
      capital: "Tbilisi",
      code2: "GE",
      code3: "GEO",
      name: "Georgia",
      region: "Asia",
      states: [
        {
          code: "AB",
          name: "Abkhazia",
        },
        {
          code: "AJ",
          name: "Ajaria",
        },
        {
          code: "GU",
          name: "Guria",
        },
        {
          code: "IM",
          name: "Imereti",
        },
        {
          code: "KA",
          name: "K'akheti",
        },
        {
          code: "KK",
          name: "Kvemo Kartli",
        },
        {
          code: "MM",
          name: "Mtskheta-Mtianeti",
        },
        {
          code: "RL",
          name: "Rach'a-Lechkhumi-Kvemo Svaneti",
        },
        {
          code: "SZ",
          name: "Samegrelo-Zemo Svaneti",
        },
        {
          code: "SJ",
          name: "Samtskhe-Javakheti",
        },
        {
          code: "SK",
          name: "Shida Kartli",
        },
        {
          code: "TB",
          name: "Tbilisi",
        },
      ],
      subregion: "Western Asia",
    },
    {
      capital: "Berlin",
      code2: "DE",
      code3: "DEU",
      name: "Germany",
      region: "Europe",
      states: [
        {
          code: "BW",
          name: "Baden-Württemberg",
        },
        {
          code: "BY",
          name: "Bayern",
        },
        {
          code: "BE",
          name: "Berlin",
        },
        {
          code: "BB",
          name: "Brandenburg",
        },
        {
          code: "HB",
          name: "Bremen",
        },
        {
          code: "HH",
          name: "Hamburg",
        },
        {
          code: "HE",
          name: "Hessen",
        },
        {
          code: "MV",
          name: "Mecklenburg-Vorpommern",
        },
        {
          code: "NI",
          name: "Niedersachsen",
        },
        {
          code: "NW",
          name: "Nordrhein-Westfalen",
        },
        {
          code: "RP",
          name: "Rheinland-Pfalz",
        },
        {
          code: "SL",
          name: "Saarland",
        },
        {
          code: "SN",
          name: "Sachsen",
        },
        {
          code: "ST",
          name: "Sachsen-Anhalt",
        },
        {
          code: "SH",
          name: "Schleswig-Holstein",
        },
        {
          code: "TH",
          name: "Thüringen",
        },
      ],
      subregion: "Western Europe",
    },
    {
      capital: "Accra",
      code2: "GH",
      code3: "GHA",
      name: "Ghana",
      region: "Africa",
      states: [
        {
          code: "AH",
          name: "Ashanti",
        },
        {
          code: "BA",
          name: "Brong-Ahafo",
        },
        {
          code: "CP",
          name: "Central",
        },
        {
          code: "EP",
          name: "Eastern",
        },
        {
          code: "AA",
          name: "Greater Accra",
        },
        {
          code: "NP",
          name: "Northern",
        },
        {
          code: "UE",
          name: "Upper East",
        },
        {
          code: "UW",
          name: "Upper West",
        },
        {
          code: "TV",
          name: "Volta",
        },
        {
          code: "WP",
          name: "Western",
        },
      ],
      subregion: "Western Africa",
    },
    {
      capital: "Gibraltar",
      code2: "GI",
      code3: "GIB",
      name: "Gibraltar",
      region: "Europe",
      subregion: "Southern Europe",
    },
    {
      capital: "Athens",
      code2: "GR",
      code3: "GRC",
      name: "Greece",
      region: "Europe",
      states: [
        {
          code: "A",
          name: "Anatoliki Makedonia kai Thraki",
        },
        {
          code: "I",
          name: "Attiki",
        },
        {
          code: "G",
          name: "Dytiki Ellada",
        },
        {
          code: "C",
          name: "Dytiki Makedonia",
        },
        {
          code: "F",
          name: "Ionia Nisia",
        },
        {
          code: "D",
          name: "Ipeiros",
        },
        {
          code: "B",
          name: "Kentriki Makedonia",
        },
        {
          code: "M",
          name: "Kriti",
        },
        {
          code: "L",
          name: "Notio Aigaio",
        },
        {
          code: "J",
          name: "Peloponnisos",
        },
        {
          code: "H",
          name: "Sterea Ellada",
        },
        {
          code: "E",
          name: "Thessalia",
        },
        {
          code: "K",
          name: "Voreio Aigaio",
        },
      ],
      subregion: "Southern Europe",
    },
    {
      capital: "Nuuk",
      code2: "GL",
      code3: "GRL",
      name: "Greenland",
      region: "Americas",
      states: [
        {
          code: "KU",
          name: "Kommune Kujalleq",
        },
        {
          code: "SM",
          name: "Kommuneqarfik Sermersooq",
        },
        {
          code: "QA",
          name: "Qaasuitsup Kommunia",
        },
        {
          code: "QE",
          name: "Qeqqata Kommunia",
        },
      ],
      subregion: "Northern America",
    },
    {
      capital: "St. George's",
      code2: "GD",
      code3: "GRD",
      name: "Grenada",
      region: "Americas",
      states: [
        {
          code: "01",
          name: "Saint Andrew",
        },
        {
          code: "02",
          name: "Saint David",
        },
        {
          code: "03",
          name: "Saint George",
        },
        {
          code: "04",
          name: "Saint John",
        },
        {
          code: "05",
          name: "Saint Mark",
        },
        {
          code: "06",
          name: "Saint Patrick",
        },
        {
          code: "10",
          name: "Southern Grenadine Islands",
        },
      ],
      subregion: "Caribbean",
    },
    {
      capital: "Basse-Terre",
      code2: "GP",
      code3: "GLP",
      name: "Guadeloupe",
      region: "Americas",
      subregion: "Caribbean",
    },
    {
      capital: "Hagåtña",
      code2: "GU",
      code3: "GUM",
      name: "Guam",
      region: "Oceania",
      subregion: "Micronesia",
    },
    {
      capital: "Guatemala City",
      code2: "GT",
      code3: "GTM",
      name: "Guatemala",
      region: "Americas",
      states: [
        {
          code: "AV",
          name: "Alta Verapaz",
        },
        {
          code: "BV",
          name: "Baja Verapaz",
        },
        {
          code: "CM",
          name: "Chimaltenango",
        },
        {
          code: "CQ",
          name: "Chiquimula",
        },
        {
          code: "PR",
          name: "El Progreso",
        },
        {
          code: "ES",
          name: "Escuintla",
        },
        {
          code: "GU",
          name: "Guatemala",
        },
        {
          code: "HU",
          name: "Huehuetenango",
        },
        {
          code: "IZ",
          name: "Izabal",
        },
        {
          code: "JA",
          name: "Jalapa",
        },
        {
          code: "JU",
          name: "Jutiapa",
        },
        {
          code: "PE",
          name: "Petén",
        },
        {
          code: "QZ",
          name: "Quetzaltenango",
        },
        {
          code: "QC",
          name: "Quiché",
        },
        {
          code: "RE",
          name: "Retalhuleu",
        },
        {
          code: "SA",
          name: "Sacatepéquez",
        },
        {
          code: "SM",
          name: "San Marcos",
        },
        {
          code: "SR",
          name: "Santa Rosa",
        },
        {
          code: "SO",
          name: "Sololá",
        },
        {
          code: "SU",
          name: "Suchitepéquez",
        },
        {
          code: "TO",
          name: "Totonicapán",
        },
        {
          code: "ZA",
          name: "Zacapa",
        },
      ],
      subregion: "Central America",
    },
    {
      capital: "St. Peter Port",
      code2: "GG",
      code3: "GGY",
      name: "Guernsey",
      region: "Europe",
      subregion: "Northern Europe",
    },
    {
      capital: "Conakry",
      code2: "GN",
      code3: "GIN",
      name: "Guinea",
      region: "Africa",
      states: [
        {
          code: "B",
          name: "Boké",
        },
        {
          code: "C",
          name: "Conakry",
        },
        {
          code: "F",
          name: "Faranah",
        },
        {
          code: "K",
          name: "Kankan",
        },
        {
          code: "D",
          name: "Kindia",
        },
        {
          code: "L",
          name: "Labé",
        },
        {
          code: "M",
          name: "Mamou",
        },
        {
          code: "N",
          name: "Nzérékoré",
        },
      ],
      subregion: "Western Africa",
    },
    {
      capital: "Bissau",
      code2: "GW",
      code3: "GNB",
      name: "Guinea-Bissau",
      region: "Africa",
      states: [
        {
          code: "L",
          name: "Leste",
        },
        {
          code: "N",
          name: "Norte",
        },
        {
          code: "S",
          name: "Sul",
        },
      ],
      subregion: "Western Africa",
    },
    {
      capital: "Georgetown",
      code2: "GY",
      code3: "GUY",
      name: "Guyana",
      region: "Americas",
      states: [
        {
          code: "BA",
          name: "Barima-Waini",
        },
        {
          code: "CU",
          name: "Cuyuni-Mazaruni",
        },
        {
          code: "DE",
          name: "Demerara-Mahaica",
        },
        {
          code: "EB",
          name: "East Berbice-Corentyne",
        },
        {
          code: "ES",
          name: "Essequibo Islands-West Demerara",
        },
        {
          code: "MA",
          name: "Mahaica-Berbice",
        },
        {
          code: "PM",
          name: "Pomeroon-Supenaam",
        },
        {
          code: "PT",
          name: "Potaro-Siparuni",
        },
        {
          code: "UD",
          name: "Upper Demerara-Berbice",
        },
        {
          code: "UT",
          name: "Upper Takutu-Upper Essequibo",
        },
      ],
      subregion: "South America",
    },
    {
      capital: "Port-au-Prince",
      code2: "HT",
      code3: "HTI",
      name: "Haiti",
      region: "Americas",
      states: [
        {
          code: "AR",
          name: "Artibonite",
        },
        {
          code: "CE",
          name: "Centre",
        },
        {
          code: "GA",
          name: "Grande-Anse",
        },
        {
          code: "NI",
          name: "Nippes",
        },
        {
          code: "ND",
          name: "Nord",
        },
        {
          code: "NE",
          name: "Nord-Est",
        },
        {
          code: "NO",
          name: "Nord-Ouest",
        },
        {
          code: "OU",
          name: "Ouest",
        },
        {
          code: "SD",
          name: "Sud",
        },
        {
          code: "SE",
          name: "Sud-Est",
        },
      ],
      subregion: "Caribbean",
    },
    {
      capital: "",
      code2: "HM",
      code3: "HMD",
      name: "Heard Island and McDonald Islands",
      region: "",
      subregion: "",
    },
    {
      capital: "Rome",
      code2: "VA",
      code3: "VAT",
      name: "Holy See",
      region: "Europe",
      subregion: "Southern Europe",
    },
    {
      capital: "Tegucigalpa",
      code2: "HN",
      code3: "HND",
      name: "Honduras",
      region: "Americas",
      states: [
        {
          code: "AT",
          name: "Atlántida",
        },
        {
          code: "CH",
          name: "Choluteca",
        },
        {
          code: "CL",
          name: "Colón",
        },
        {
          code: "CM",
          name: "Comayagua",
        },
        {
          code: "CP",
          name: "Copán",
        },
        {
          code: "CR",
          name: "Cortés",
        },
        {
          code: "EP",
          name: "El Paraíso",
        },
        {
          code: "FM",
          name: "Francisco Morazán",
        },
        {
          code: "GD",
          name: "Gracias a Dios",
        },
        {
          code: "IN",
          name: "Intibucá",
        },
        {
          code: "IB",
          name: "Islas de la Bahía",
        },
        {
          code: "LP",
          name: "La Paz",
        },
        {
          code: "LE",
          name: "Lempira",
        },
        {
          code: "OC",
          name: "Ocotepeque",
        },
        {
          code: "OL",
          name: "Olancho",
        },
        {
          code: "SB",
          name: "Santa Bárbara",
        },
        {
          code: "VA",
          name: "Valle",
        },
        {
          code: "YO",
          name: "Yoro",
        },
      ],
      subregion: "Central America",
    },
    {
      capital: "City of Victoria",
      code2: "HK",
      code3: "HKG",
      name: "Hong Kong",
      region: "Asia",
      subregion: "Eastern Asia",
    },
    {
      capital: "Budapest",
      code2: "HU",
      code3: "HUN",
      name: "Hungary",
      region: "Europe",
      states: [
        {
          code: "BA",
          name: "Baranya",
        },
        {
          code: "BZ",
          name: "Borsod-Abaúj-Zemplén",
        },
        {
          code: "BU",
          name: "Budapest",
        },
        {
          code: "BK",
          name: "Bács-Kiskun",
        },
        {
          code: "BE",
          name: "Békés",
        },
        {
          code: "BC",
          name: "Békéscsaba",
        },
        {
          code: "CS",
          name: "Csongrád",
        },
        {
          code: "DE",
          name: "Debrecen",
        },
        {
          code: "DU",
          name: "Dunaújváros",
        },
        {
          code: "EG",
          name: "Eger",
        },
        {
          code: "FE",
          name: "Fejér",
        },
        {
          code: "GY",
          name: "Győr",
        },
        {
          code: "GS",
          name: "Győr-Moson-Sopron",
        },
        {
          code: "HB",
          name: "Hajdú-Bihar",
        },
        {
          code: "HE",
          name: "Heves",
        },
        {
          code: "HV",
          name: "Hódmezővásárhely",
        },
        {
          code: "JN",
          name: "Jász-Nagykun-Szolnok",
        },
        {
          code: "KV",
          name: "Kaposvár",
        },
        {
          code: "KM",
          name: "Kecskemét",
        },
        {
          code: "KE",
          name: "Komárom-Esztergom",
        },
        {
          code: "MI",
          name: "Miskolc",
        },
        {
          code: "NK",
          name: "Nagykanizsa",
        },
        {
          code: "NY",
          name: "Nyíregyháza",
        },
        {
          code: "NO",
          name: "Nógrád",
        },
        {
          code: "PE",
          name: "Pest",
        },
        {
          code: "PS",
          name: "Pécs",
        },
        {
          code: "ST",
          name: "Salgótarján",
        },
        {
          code: "SO",
          name: "Somogy",
        },
        {
          code: "SN",
          name: "Sopron",
        },
        {
          code: "SZ",
          name: "Szabolcs-Szatmár-Bereg",
        },
        {
          code: "SD",
          name: "Szeged",
        },
        {
          code: "SS",
          name: "Szekszárd",
        },
        {
          code: "SK",
          name: "Szolnok",
        },
        {
          code: "SH",
          name: "Szombathely",
        },
        {
          code: "SF",
          name: "Székesfehérvár",
        },
        {
          code: "TB",
          name: "Tatabánya",
        },
        {
          code: "TO",
          name: "Tolna",
        },
        {
          code: "VA",
          name: "Vas",
        },
        {
          code: "VE",
          name: "Veszprém",
        },
        {
          code: "VM",
          name: "Veszprém",
        },
        {
          code: "ZA",
          name: "Zala",
        },
        {
          code: "ZE",
          name: "Zalaegerszeg",
        },
        {
          code: "ER",
          name: "Érd",
        },
      ],
      subregion: "Eastern Europe",
    },
    {
      capital: "Reykjavík",
      code2: "IS",
      code3: "ISL",
      name: "Iceland",
      region: "Europe",
      states: [
        {
          code: "7",
          name: "Austurland",
        },
        {
          code: "1",
          name: "Höfuðborgarsvæði utan Reykjavíkur",
        },
        {
          code: "6",
          name: "Norðurland eystra",
        },
        {
          code: "5",
          name: "Norðurland vestra",
        },
        {
          code: "0",
          name: "Reykjavík",
        },
        {
          code: "8",
          name: "Suðurland",
        },
        {
          code: "2",
          name: "Suðurnes",
        },
        {
          code: "4",
          name: "Vestfirðir",
        },
        {
          code: "3",
          name: "Vesturland",
        },
      ],
      subregion: "Northern Europe",
    },
    {
      capital: "New Delhi",
      code2: "IN",
      code3: "IND",
      name: "India",
      region: "Asia",
      states: [
        {
          code: "AN",
          name: "Andaman and Nicobar Islands",
          subdivision: "Union territory",
        },
        {
          code: "CH",
          name: "Chandigarh",
          subdivision: "Union territory",
        },
        {
          code: "DN",
          name: "Dadra and Nagar Haveli",
          subdivision: "Union territory",
        },
        {
          code: "DD",
          name: "Daman and Diu",
          subdivision: "Union territory",
        },
        {
          code: "DL",
          name: "Delhi",
          subdivision: "Union territory",
        },
        {
          code: "LD",
          name: "Lakshadweep",
          subdivision: "Union territory",
        },
        {
          code: "PY",
          name: "Puducherry",
          subdivision: "Union territory",
        },
        {
          code: "AP",
          name: "Andhra Pradesh",
          subdivision: "state",
        },
        {
          code: "AR",
          name: "Arunachal Pradesh",
          subdivision: "state",
        },
        {
          code: "AS",
          name: "Assam",
          subdivision: "state",
        },
        {
          code: "BR",
          name: "Bihar",
          subdivision: "state",
        },
        {
          code: "CT",
          name: "Chhattisgarh",
          subdivision: "state",
        },
        {
          code: "GA",
          name: "Goa",
          subdivision: "state",
        },
        {
          code: "GJ",
          name: "Gujarat",
          subdivision: "state",
        },
        {
          code: "HR",
          name: "Haryana",
          subdivision: "state",
        },
        {
          code: "HP",
          name: "Himachal Pradesh",
          subdivision: "state",
        },
        {
          code: "JK",
          name: "Jammu and Kashmir",
          subdivision: "state",
        },
        {
          code: "JH",
          name: "Jharkhand",
          subdivision: "state",
        },
        {
          code: "KA",
          name: "Karnataka",
          subdivision: "state",
        },
        {
          code: "KL",
          name: "Kerala",
          subdivision: "state",
        },
        {
          code: "MP",
          name: "Madhya Pradesh",
          subdivision: "state",
        },
        {
          code: "MH",
          name: "Maharashtra",
          subdivision: "state",
        },
        {
          code: "MN",
          name: "Manipur",
          subdivision: "state",
        },
        {
          code: "ML",
          name: "Meghalaya",
          subdivision: "state",
        },
        {
          code: "MZ",
          name: "Mizoram",
          subdivision: "state",
        },
        {
          code: "NL",
          name: "Nagaland",
          subdivision: "state",
        },
        {
          code: "OR",
          name: "Odisha",
          subdivision: "state",
        },
        {
          code: "PB",
          name: "Punjab",
          subdivision: "state",
        },
        {
          code: "RJ",
          name: "Rajasthan",
          subdivision: "state",
        },
        {
          code: "SK",
          name: "Sikkim",
          subdivision: "state",
        },
        {
          code: "TN",
          name: "Tamil Nadu",
          subdivision: "state",
        },
        {
          code: "TG",
          name: "Telangana",
          subdivision: "state",
        },
        {
          code: "TR",
          name: "Tripura",
          subdivision: "state",
        },
        {
          code: "UP",
          name: "Uttar Pradesh",
          subdivision: "state",
        },
        {
          code: "UT",
          name: "Uttarakhand",
          subdivision: "state",
        },
        {
          code: "WB",
          name: "West Bengal",
          subdivision: "state",
        },
      ],
      subregion: "Southern Asia",
    },
    {
      capital: "Jakarta",
      code2: "ID",
      code3: "IDN",
      name: "Indonesia",
      region: "Asia",
      states: [
        {
          code: "JW",
          name: "Jawa",
        },
        {
          code: "KA",
          name: "Kalimantan",
        },
        {
          code: "ML",
          name: "Maluku",
        },
        {
          code: "NU",
          name: "Nusa Tenggara",
        },
        {
          code: "PP",
          name: "Papua",
        },
        {
          code: "SL",
          name: "Sulawesi",
        },
        {
          code: "SM",
          name: "Sumatera",
        },
      ],
      subregion: "South-Eastern Asia",
    },
    {
      capital: "Yamoussoukro",
      code2: "CI",
      code3: "CIV",
      name: "Ivory Coast",
      region: "Africa",
      states: [
        {
          code: "06",
          name: "18 Montagnes",
        },
        {
          code: "16",
          name: "Agnébi",
        },
        {
          code: "17",
          name: "Bafing",
        },
        {
          code: "09",
          name: "Bas-Sassandra",
        },
        {
          code: "10",
          name: "Denguélé",
        },
        {
          code: "18",
          name: "Fromager",
        },
        {
          code: "02",
          name: "Haut-Sassandra",
        },
        {
          code: "07",
          name: "Lacs",
        },
        {
          code: "01",
          name: "Lagunes",
        },
        {
          code: "12",
          name: "Marahoué",
        },
        {
          code: "19",
          name: "Moyen-Cavally",
        },
        {
          code: "05",
          name: "Moyen-Comoé",
        },
        {
          code: "11",
          name: "Nzi-Comoé",
        },
        {
          code: "03",
          name: "Savanes",
        },
        {
          code: "15",
          name: "Sud-Bandama",
        },
        {
          code: "13",
          name: "Sud-Comoé",
        },
        {
          code: "04",
          name: "Vallée du Bandama",
        },
        {
          code: "14",
          name: "Worodougou",
        },
        {
          code: "08",
          name: "Zanzan",
        },
      ],
      subregion: "Western Africa",
    },
    {
      capital: "Tehran",
      code2: "IR",
      code3: "IRN",
      name: "Iran",
      region: "Asia",
      states: [
        {
          code: "32",
          name: "Alborz",
        },
        {
          code: "03",
          name: "Ardabīl",
        },
        {
          code: "06",
          name: "Būshehr",
        },
        {
          code: "08",
          name: "Chahār Maḩāll va Bakhtīārī",
        },
        {
          code: "04",
          name: "Eşfahān",
        },
        {
          code: "14",
          name: "Fārs",
        },
        {
          code: "27",
          name: "Golestān",
        },
        {
          code: "19",
          name: "Gīlān",
        },
        {
          code: "24",
          name: "Hamadān",
        },
        {
          code: "23",
          name: "Hormozgān",
        },
        {
          code: "15",
          name: "Kermān",
        },
        {
          code: "17",
          name: "Kermānshāh",
        },
        {
          code: "29",
          name: "Khorāsān-e Janūbī",
        },
        {
          code: "30",
          name: "Khorāsān-e Razavī",
        },
        {
          code: "31",
          name: "Khorāsān-e Shemālī",
        },
        {
          code: "10",
          name: "Khūzestān",
        },
        {
          code: "18",
          name: "Kohgīlūyeh va Būyer Aḩmad",
        },
        {
          code: "16",
          name: "Kordestān",
        },
        {
          code: "20",
          name: "Lorestān",
        },
        {
          code: "22",
          name: "Markazī",
        },
        {
          code: "21",
          name: "Māzandarān",
        },
        {
          code: "28",
          name: "Qazvīn",
        },
        {
          code: "26",
          name: "Qom",
        },
        {
          code: "12",
          name: "Semnān",
        },
        {
          code: "13",
          name: "Sīstān va Balūchestān",
        },
        {
          code: "07",
          name: "Tehrān",
        },
        {
          code: "25",
          name: "Yazd",
        },
        {
          code: "11",
          name: "Zanjān",
        },
        {
          code: "02",
          name: "Āz̄arbāyjān-e Gharbī",
        },
        {
          code: "01",
          name: "Āz̄arbāyjān-e Sharqī",
        },
        {
          code: "05",
          name: "Īlām",
        },
      ],
      subregion: "Southern Asia",
    },
    {
      capital: "Baghdad",
      code2: "IQ",
      code3: "IRQ",
      name: "Iraq",
      region: "Asia",
      states: [
        {
          code: "AN",
          name: "Al Anbār",
        },
        {
          code: "BA",
          name: "Al Başrah",
        },
        {
          code: "MU",
          name: "Al Muthanná",
        },
        {
          code: "QA",
          name: "Al Qādisīyah",
        },
        {
          code: "NA",
          name: "An Najaf",
        },
        {
          code: "AR",
          name: "Arbīl",
        },
        {
          code: "SU",
          name: "As Sulaymānīyah",
        },
        {
          code: "TS",
          name: "At Ta'mīm",
        },
        {
          code: "BG",
          name: "Baghdād",
        },
        {
          code: "BB",
          name: "Bābil",
        },
        {
          code: "DA",
          name: "Dahūk",
        },
        {
          code: "DQ",
          name: "Dhī Qār",
        },
        {
          code: "DI",
          name: "Diyālá",
        },
        {
          code: "KA",
          name: "Karbalā'",
        },
        {
          code: "MA",
          name: "Maysān",
        },
        {
          code: "NI",
          name: "Nīnawá",
        },
        {
          code: "WA",
          name: "Wāsiţ",
        },
        {
          code: "SD",
          name: "Şalāḩ ad Dīn",
        },
      ],
      subregion: "Western Asia",
    },
    {
      capital: "Dublin",
      code2: "IE",
      code3: "IRL",
      name: "Republic of Ireland",
      region: "Europe",
      states: [
        {
          code: "C",
          name: "Connaught",
        },
        {
          code: "L",
          name: "Leinster",
        },
        {
          code: "M",
          name: "Munster",
        },
        {
          code: "U",
          name: "Ulster",
        },
      ],
      subregion: "Northern Europe",
    },
    {
      capital: "Douglas",
      code2: "IM",
      code3: "IMN",
      name: "Isle of Man",
      region: "Europe",
      subregion: "Northern Europe",
    },
    {
      capital: "Jerusalem",
      code2: "IL",
      code3: "ISR",
      name: "Israel",
      region: "Asia",
      states: [
        {
          code: "D",
          name: "HaDarom",
        },
        {
          code: "M",
          name: "HaMerkaz",
        },
        {
          code: "Z",
          name: "HaTsafon",
        },
        {
          code: "HA",
          name: "H̱efa",
        },
        {
          code: "TA",
          name: "Tel-Aviv",
        },
        {
          code: "JM",
          name: "Yerushalayim",
        },
      ],
      subregion: "Western Asia",
    },
    {
      capital: "Rome",
      code2: "IT",
      code3: "ITA",
      name: "Italy",
      region: "Europe",
      states: [
        {
          code: "65",
          name: "Abruzzo",
        },
        {
          code: "77",
          name: "Basilicata",
        },
        {
          code: "78",
          name: "Calabria",
        },
        {
          code: "72",
          name: "Campania",
        },
        {
          code: "45",
          name: "Emilia-Romagna",
        },
        {
          code: "36",
          name: "Friuli-Venezia Giulia",
        },
        {
          code: "62",
          name: "Lazio",
        },
        {
          code: "42",
          name: "Liguria",
        },
        {
          code: "25",
          name: "Lombardia",
        },
        {
          code: "57",
          name: "Marche",
        },
        {
          code: "67",
          name: "Molise",
        },
        {
          code: "21",
          name: "Piemonte",
        },
        {
          code: "75",
          name: "Puglia",
        },
        {
          code: "88",
          name: "Sardegna",
        },
        {
          code: "82",
          name: "Sicilia",
        },
        {
          code: "52",
          name: "Toscana",
        },
        {
          code: "32",
          name: "Trentino-Alto Adige",
        },
        {
          code: "55",
          name: "Umbria",
        },
        {
          code: "23",
          name: "Valle d'Aosta",
        },
        {
          code: "34",
          name: "Veneto",
        },
      ],
      subregion: "Southern Europe",
    },
    {
      capital: "Kingston",
      code2: "JM",
      code3: "JAM",
      name: "Jamaica",
      region: "Americas",
      states: [
        {
          code: "13",
          name: "Clarendon",
        },
        {
          code: "09",
          name: "Hanover",
        },
        {
          code: "01",
          name: "Kingston",
        },
        {
          code: "12",
          name: "Manchester",
        },
        {
          code: "04",
          name: "Portland",
        },
        {
          code: "02",
          name: "Saint Andrew",
        },
        {
          code: "06",
          name: "Saint Ann",
        },
        {
          code: "14",
          name: "Saint Catherine",
        },
        {
          code: "11",
          name: "Saint Elizabeth",
        },
        {
          code: "08",
          name: "Saint James",
        },
        {
          code: "05",
          name: "Saint Mary",
        },
        {
          code: "03",
          name: "Saint Thomas",
        },
        {
          code: "07",
          name: "Trelawny",
        },
        {
          code: "10",
          name: "Westmoreland",
        },
      ],
      subregion: "Caribbean",
    },
    {
      capital: "Tokyo",
      code2: "JP",
      code3: "JPN",
      name: "Japan",
      region: "Asia",
      states: [
        {
          code: "23",
          name: "Aiti",
        },
        {
          code: "05",
          name: "Akita",
        },
        {
          code: "02",
          name: "Aomori",
        },
        {
          code: "38",
          name: "Ehime",
        },
        {
          code: "21",
          name: "Gihu",
        },
        {
          code: "10",
          name: "Gunma",
        },
        {
          code: "34",
          name: "Hirosima",
        },
        {
          code: "01",
          name: "Hokkaidô",
        },
        {
          code: "18",
          name: "Hukui",
        },
        {
          code: "40",
          name: "Hukuoka",
        },
        {
          code: "07",
          name: "Hukusima",
        },
        {
          code: "28",
          name: "Hyôgo",
        },
        {
          code: "08",
          name: "Ibaraki",
        },
        {
          code: "17",
          name: "Isikawa",
        },
        {
          code: "03",
          name: "Iwate",
        },
        {
          code: "37",
          name: "Kagawa",
        },
        {
          code: "46",
          name: "Kagosima",
        },
        {
          code: "14",
          name: "Kanagawa",
        },
        {
          code: "43",
          name: "Kumamoto",
        },
        {
          code: "26",
          name: "Kyôto",
        },
        {
          code: "39",
          name: "Kôti",
        },
        {
          code: "24",
          name: "Mie",
        },
        {
          code: "04",
          name: "Miyagi",
        },
        {
          code: "45",
          name: "Miyazaki",
        },
        {
          code: "20",
          name: "Nagano",
        },
        {
          code: "42",
          name: "Nagasaki",
        },
        {
          code: "29",
          name: "Nara",
        },
        {
          code: "15",
          name: "Niigata",
        },
        {
          code: "33",
          name: "Okayama",
        },
        {
          code: "47",
          name: "Okinawa",
        },
        {
          code: "41",
          name: "Saga",
        },
        {
          code: "11",
          name: "Saitama",
        },
        {
          code: "25",
          name: "Siga",
        },
        {
          code: "32",
          name: "Simane",
        },
        {
          code: "22",
          name: "Sizuoka",
        },
        {
          code: "12",
          name: "Tiba",
        },
        {
          code: "36",
          name: "Tokusima",
        },
        {
          code: "09",
          name: "Totigi",
        },
        {
          code: "31",
          name: "Tottori",
        },
        {
          code: "16",
          name: "Toyama",
        },
        {
          code: "13",
          name: "Tôkyô",
        },
        {
          code: "30",
          name: "Wakayama",
        },
        {
          code: "06",
          name: "Yamagata",
        },
        {
          code: "35",
          name: "Yamaguti",
        },
        {
          code: "19",
          name: "Yamanasi",
        },
        {
          code: "44",
          name: "Ôita",
        },
        {
          code: "27",
          name: "Ôsaka",
        },
      ],
      subregion: "Eastern Asia",
    },
    {
      capital: "Saint Helier",
      code2: "JE",
      code3: "JEY",
      name: "Jersey",
      region: "Europe",
      subregion: "Northern Europe",
    },
    {
      capital: "Amman",
      code2: "JO",
      code3: "JOR",
      name: "Jordan",
      region: "Asia",
      states: [
        {
          code: "BA",
          name: "Al Balqā'",
        },
        {
          code: "AQ",
          name: "Al ʽAqabah",
        },
        {
          code: "AZ",
          name: "Az Zarqā'",
        },
        {
          code: "AT",
          name: "Aţ Ţafīlah",
        },
        {
          code: "IR",
          name: "Irbid",
        },
        {
          code: "JA",
          name: "Jerash",
        },
        {
          code: "KA",
          name: "Karak",
        },
        {
          code: "MN",
          name: "Ma'ān",
        },
        {
          code: "MA",
          name: "Mafraq",
        },
        {
          code: "MD",
          name: "Mādabā",
        },
        {
          code: "AJ",
          name: "ʽAjlūn",
        },
        {
          code: "AM",
          name: "‘Ammān",
        },
      ],
      subregion: "Western Asia",
    },
    {
      capital: "Astana",
      code2: "KZ",
      code3: "KAZ",
      name: "Kazakhstan",
      region: "Asia",
      states: [
        {
          code: "ALA",
          name: "Almaty",
        },
        {
          code: "ALM",
          name: "Almaty oblysy",
        },
        {
          code: "AKM",
          name: "Aqmola oblysy",
        },
        {
          code: "AKT",
          name: "Aqtöbe oblysy",
        },
        {
          code: "AST",
          name: "Astana",
        },
        {
          code: "ATY",
          name: "Atyraū oblysy",
        },
        {
          code: "ZAP",
          name: "Batys Qazaqstan oblysy",
        },
        {
          code: "MAN",
          name: "Mangghystaū oblysy",
        },
        {
          code: "YUZ",
          name: "Ongtüstik Qazaqstan oblysy",
        },
        {
          code: "PAV",
          name: "Pavlodar oblysy",
        },
        {
          code: "KAR",
          name: "Qaraghandy oblysy",
        },
        {
          code: "KUS",
          name: "Qostanay oblysy",
        },
        {
          code: "KZY",
          name: "Qyzylorda oblysy",
        },
        {
          code: "VOS",
          name: "Shyghys Qazaqstan oblysy",
        },
        {
          code: "SEV",
          name: "Soltüstik Qazaqstan oblysy",
        },
        {
          code: "ZHA",
          name: "Zhambyl oblysy",
        },
      ],
      subregion: "Central Asia",
    },
    {
      capital: "Nairobi",
      code2: "KE",
      code3: "KEN",
      name: "Kenya",
      region: "Africa",
      states: [
        {
          code: "200",
          name: "Central",
        },
        {
          code: "300",
          name: "Coast",
        },
        {
          code: "400",
          name: "Eastern",
        },
        {
          code: "110",
          name: "Nairobi",
        },
        {
          code: "500",
          name: "North-Eastern",
        },
        {
          code: "600",
          name: "Nyanza",
        },
        {
          code: "700",
          name: "Rift Valley",
        },
        {
          code: "800",
          name: "Western",
        },
      ],
      subregion: "Eastern Africa",
    },
    {
      capital: "South Tarawa",
      code2: "KI",
      code3: "KIR",
      name: "Kiribati",
      region: "Oceania",
      states: [
        {
          code: "G",
          name: "Gilbert Islands",
        },
        {
          code: "L",
          name: "Line Islands",
        },
        {
          code: "P",
          name: "Phoenix Islands",
        },
      ],
      subregion: "Micronesia",
    },
    {
      capital: "Kuwait City",
      code2: "KW",
      code3: "KWT",
      name: "Kuwait",
      region: "Asia",
      states: [
        {
          code: "AH",
          name: "Al Aḩmadi",
        },
        {
          code: "FA",
          name: "Al Farwānīyah",
        },
        {
          code: "JA",
          name: "Al Jahrā’",
        },
        {
          code: "KU",
          name: "Al Kuwayt",
        },
        {
          code: "MU",
          name: "Mubārak al Kabīr",
        },
        {
          code: "HA",
          name: "Ḩawallī",
        },
      ],
      subregion: "Western Asia",
    },
    {
      capital: "Bishkek",
      code2: "KG",
      code3: "KGZ",
      name: "Kyrgyzstan",
      region: "Asia",
      states: [
        {
          code: "B",
          name: "Batken",
        },
        {
          code: "GB",
          name: "Bishkek",
        },
        {
          code: "C",
          name: "Chü",
        },
        {
          code: "J",
          name: "Jalal-Abad",
        },
        {
          code: "N",
          name: "Naryn",
        },
        {
          code: "O",
          name: "Osh",
        },
        {
          code: "T",
          name: "Talas",
        },
        {
          code: "Y",
          name: "Ysyk-Köl",
        },
      ],
      subregion: "Central Asia",
    },
    {
      capital: "Vientiane",
      code2: "LA",
      code3: "LAO",
      name: "Laos",
      region: "Asia",
      states: [
        {
          code: "AT",
          name: "Attapu",
        },
        {
          code: "BK",
          name: "Bokèo",
        },
        {
          code: "BL",
          name: "Bolikhamxai",
        },
        {
          code: "CH",
          name: "Champasak",
        },
        {
          code: "HO",
          name: "Houaphan",
        },
        {
          code: "KH",
          name: "Khammouan",
        },
        {
          code: "LM",
          name: "Louang Namtha",
        },
        {
          code: "LP",
          name: "Louangphabang",
        },
        {
          code: "OU",
          name: "Oudômxai",
        },
        {
          code: "PH",
          name: "Phôngsali",
        },
        {
          code: "SL",
          name: "Salavan",
        },
        {
          code: "SV",
          name: "Savannakhét",
        },
        {
          code: "VT",
          name: "Vientiane",
        },
        {
          code: "VI",
          name: "Vientiane",
        },
        {
          code: "XA",
          name: "Xaignabouli",
        },
        {
          code: "XN",
          name: "Xaisômboun",
        },
        {
          code: "XI",
          name: "Xiangkhoang",
        },
        {
          code: "XE",
          name: "Xékong",
        },
      ],
      subregion: "South-Eastern Asia",
    },
    {
      capital: "Riga",
      code2: "LV",
      code3: "LVA",
      name: "Latvia",
      region: "Europe",
      states: [
        {
          code: "001",
          name: "Aglonas novads",
        },
        {
          code: "002",
          name: "Aizkraukles novads",
        },
        {
          code: "003",
          name: "Aizputes novads",
        },
        {
          code: "004",
          name: "Aknīstes novads",
        },
        {
          code: "005",
          name: "Alojas novads",
        },
        {
          code: "006",
          name: "Alsungas novads",
        },
        {
          code: "007",
          name: "Alūksnes novads",
        },
        {
          code: "008",
          name: "Amatas novads",
        },
        {
          code: "009",
          name: "Apes novads",
        },
        {
          code: "010",
          name: "Auces novads",
        },
        {
          code: "012",
          name: "Babītes novads",
        },
        {
          code: "013",
          name: "Baldones novads",
        },
        {
          code: "014",
          name: "Baltinavas novads",
        },
        {
          code: "015",
          name: "Balvu novads",
        },
        {
          code: "016",
          name: "Bauskas novads",
        },
        {
          code: "017",
          name: "Beverīnas novads",
        },
        {
          code: "018",
          name: "Brocēnu novads",
        },
        {
          code: "019",
          name: "Burtnieku novads",
        },
        {
          code: "020",
          name: "Carnikavas novads",
        },
        {
          code: "021",
          name: "Cesvaines novads",
        },
        {
          code: "023",
          name: "Ciblas novads",
        },
        {
          code: "022",
          name: "Cēsu novads",
        },
        {
          code: "024",
          name: "Dagdas novads",
        },
        {
          code: "DGV",
          name: "Daugavpils",
        },
        {
          code: "025",
          name: "Daugavpils novads",
        },
        {
          code: "026",
          name: "Dobeles novads",
        },
        {
          code: "027",
          name: "Dundagas novads",
        },
        {
          code: "028",
          name: "Durbes novads",
        },
        {
          code: "029",
          name: "Engures novads",
        },
        {
          code: "031",
          name: "Garkalnes novads",
        },
        {
          code: "032",
          name: "Grobiņas novads",
        },
        {
          code: "033",
          name: "Gulbenes novads",
        },
        {
          code: "034",
          name: "Iecavas novads",
        },
        {
          code: "035",
          name: "Ikšķiles novads",
        },
        {
          code: "036",
          name: "Ilūkstes novads",
        },
        {
          code: "037",
          name: "Inčukalna novads",
        },
        {
          code: "038",
          name: "Jaunjelgavas novads",
        },
        {
          code: "039",
          name: "Jaunpiebalgas novads",
        },
        {
          code: "040",
          name: "Jaunpils novads",
        },
        {
          code: "JEL",
          name: "Jelgava",
        },
        {
          code: "041",
          name: "Jelgavas novads",
        },
        {
          code: "JKB",
          name: "Jēkabpils",
        },
        {
          code: "042",
          name: "Jēkabpils novads",
        },
        {
          code: "JUR",
          name: "Jūrmala",
        },
        {
          code: "043",
          name: "Kandavas novads",
        },
        {
          code: "045",
          name: "Kocēnu novads",
        },
        {
          code: "046",
          name: "Kokneses novads",
        },
        {
          code: "048",
          name: "Krimuldas novads",
        },
        {
          code: "049",
          name: "Krustpils novads",
        },
        {
          code: "047",
          name: "Krāslavas novads",
        },
        {
          code: "050",
          name: "Kuldīgas novads",
        },
        {
          code: "044",
          name: "Kārsavas novads",
        },
        {
          code: "053",
          name: "Lielvārdes novads",
        },
        {
          code: "LPX",
          name: "Liepāja",
        },
        {
          code: "054",
          name: "Limbažu novads",
        },
        {
          code: "057",
          name: "Lubānas novads",
        },
        {
          code: "058",
          name: "Ludzas novads",
        },
        {
          code: "055",
          name: "Līgatnes novads",
        },
        {
          code: "056",
          name: "Līvānu novads",
        },
        {
          code: "059",
          name: "Madonas novads",
        },
        {
          code: "060",
          name: "Mazsalacas novads",
        },
        {
          code: "061",
          name: "Mālpils novads",
        },
        {
          code: "062",
          name: "Mārupes novads",
        },
        {
          code: "063",
          name: "Mērsraga novads",
        },
        {
          code: "064",
          name: "Naukšēnu novads",
        },
        {
          code: "065",
          name: "Neretas novads",
        },
        {
          code: "066",
          name: "Nīcas novads",
        },
        {
          code: "067",
          name: "Ogres novads",
        },
        {
          code: "068",
          name: "Olaines novads",
        },
        {
          code: "069",
          name: "Ozolnieku novads",
        },
        {
          code: "073",
          name: "Preiļu novads",
        },
        {
          code: "074",
          name: "Priekules novads",
        },
        {
          code: "075",
          name: "Priekuļu novads",
        },
        {
          code: "070",
          name: "Pārgaujas novads",
        },
        {
          code: "071",
          name: "Pāvilostas novads",
        },
        {
          code: "072",
          name: "Pļaviņu novads",
        },
        {
          code: "076",
          name: "Raunas novads",
        },
        {
          code: "078",
          name: "Riebiņu novads",
        },
        {
          code: "079",
          name: "Rojas novads",
        },
        {
          code: "080",
          name: "Ropažu novads",
        },
        {
          code: "081",
          name: "Rucavas novads",
        },
        {
          code: "082",
          name: "Rugāju novads",
        },
        {
          code: "083",
          name: "Rundāles novads",
        },
        {
          code: "REZ",
          name: "Rēzekne",
        },
        {
          code: "077",
          name: "Rēzeknes novads",
        },
        {
          code: "RIX",
          name: "Rīga",
        },
        {
          code: "084",
          name: "Rūjienas novads",
        },
        {
          code: "086",
          name: "Salacgrīvas novads",
        },
        {
          code: "085",
          name: "Salas novads",
        },
        {
          code: "087",
          name: "Salaspils novads",
        },
        {
          code: "088",
          name: "Saldus novads",
        },
        {
          code: "089",
          name: "Saulkrastu novads",
        },
        {
          code: "091",
          name: "Siguldas novads",
        },
        {
          code: "093",
          name: "Skrundas novads",
        },
        {
          code: "092",
          name: "Skrīveru novads",
        },
        {
          code: "094",
          name: "Smiltenes novads",
        },
        {
          code: "095",
          name: "Stopiņu novads",
        },
        {
          code: "096",
          name: "Strenču novads",
        },
        {
          code: "090",
          name: "Sējas novads",
        },
        {
          code: "097",
          name: "Talsu novads",
        },
        {
          code: "099",
          name: "Tukuma novads",
        },
        {
          code: "098",
          name: "Tērvetes novads",
        },
        {
          code: "100",
          name: "Vaiņodes novads",
        },
        {
          code: "101",
          name: "Valkas novads",
        },
        {
          code: "VMR",
          name: "Valmiera",
        },
        {
          code: "102",
          name: "Varakļānu novads",
        },
        {
          code: "104",
          name: "Vecpiebalgas novads",
        },
        {
          code: "105",
          name: "Vecumnieku novads",
        },
        {
          code: "VEN",
          name: "Ventspils",
        },
        {
          code: "106",
          name: "Ventspils novads",
        },
        {
          code: "107",
          name: "Viesītes novads",
        },
        {
          code: "108",
          name: "Viļakas novads",
        },
        {
          code: "109",
          name: "Viļānu novads",
        },
        {
          code: "103",
          name: "Vārkavas novads",
        },
        {
          code: "110",
          name: "Zilupes novads",
        },
        {
          code: "011",
          name: "Ādažu novads",
        },
        {
          code: "030",
          name: "Ērgļu novads",
        },
        {
          code: "051",
          name: "Ķeguma novads",
        },
        {
          code: "052",
          name: "Ķekavas novads",
        },
      ],
      subregion: "Northern Europe",
    },
    {
      capital: "Beirut",
      code2: "LB",
      code3: "LBN",
      name: "Lebanon",
      region: "Asia",
      states: [
        {
          code: "AK",
          name: "Aakkâr",
        },
        {
          code: "BH",
          name: "Baalbek-Hermel",
        },
        {
          code: "BA",
          name: "Beyrouth",
        },
        {
          code: "BI",
          name: "Béqaa",
        },
        {
          code: "AS",
          name: "Liban-Nord",
        },
        {
          code: "JA",
          name: "Liban-Sud",
        },
        {
          code: "JL",
          name: "Mont-Liban",
        },
        {
          code: "NA",
          name: "Nabatîyé",
        },
      ],
      subregion: "Western Asia",
    },
    {
      capital: "Maseru",
      code2: "LS",
      code3: "LSO",
      name: "Lesotho",
      region: "Africa",
      states: [
        {
          code: "D",
          name: "Berea",
        },
        {
          code: "B",
          name: "Butha-Buthe",
        },
        {
          code: "C",
          name: "Leribe",
        },
        {
          code: "E",
          name: "Mafeteng",
        },
        {
          code: "A",
          name: "Maseru",
        },
        {
          code: "F",
          name: "Mohale's Hoek",
        },
        {
          code: "J",
          name: "Mokhotlong",
        },
        {
          code: "H",
          name: "Qacha's Nek",
        },
        {
          code: "G",
          name: "Quthing",
        },
        {
          code: "K",
          name: "Thaba-Tseka",
        },
      ],
      subregion: "Southern Africa",
    },
    {
      capital: "Monrovia",
      code2: "LR",
      code3: "LBR",
      name: "Liberia",
      region: "Africa",
      states: [
        {
          code: "BM",
          name: "Bomi",
        },
        {
          code: "BG",
          name: "Bong",
        },
        {
          code: "GP",
          name: "Gbarpolu",
        },
        {
          code: "GB",
          name: "Grand Bassa",
        },
        {
          code: "CM",
          name: "Grand Cape Mount",
        },
        {
          code: "GG",
          name: "Grand Gedeh",
        },
        {
          code: "GK",
          name: "Grand Kru",
        },
        {
          code: "LO",
          name: "Lofa",
        },
        {
          code: "MG",
          name: "Margibi",
        },
        {
          code: "MY",
          name: "Maryland",
        },
        {
          code: "MO",
          name: "Montserrado",
        },
        {
          code: "NI",
          name: "Nimba",
        },
        {
          code: "RG",
          name: "River Gee",
        },
        {
          code: "RI",
          name: "Rivercess",
        },
        {
          code: "SI",
          name: "Sinoe",
        },
      ],
      subregion: "Western Africa",
    },
    {
      capital: "Tripoli",
      code2: "LY",
      code3: "LBY",
      name: "Libya",
      region: "Africa",
      states: [
        {
          code: "BU",
          name: "Al Buţnān",
        },
        {
          code: "JA",
          name: "Al Jabal al Akhḑar",
        },
        {
          code: "JG",
          name: "Al Jabal al Gharbī",
        },
        {
          code: "JI",
          name: "Al Jifārah",
        },
        {
          code: "JU",
          name: "Al Jufrah",
        },
        {
          code: "KF",
          name: "Al Kufrah",
        },
        {
          code: "MJ",
          name: "Al Marj",
        },
        {
          code: "MB",
          name: "Al Marqab",
        },
        {
          code: "WA",
          name: "Al Wāḩāt",
        },
        {
          code: "NQ",
          name: "An Nuqaţ al Khams",
        },
        {
          code: "ZA",
          name: "Az Zāwiyah",
        },
        {
          code: "BA",
          name: "Banghāzī",
        },
        {
          code: "DR",
          name: "Darnah",
        },
        {
          code: "GT",
          name: "Ghāt",
        },
        {
          code: "MI",
          name: "Mişrātah",
        },
        {
          code: "MQ",
          name: "Murzuq",
        },
        {
          code: "NL",
          name: "Nālūt",
        },
        {
          code: "SB",
          name: "Sabhā",
        },
        {
          code: "SR",
          name: "Surt",
        },
        {
          code: "WD",
          name: "Wādī al Ḩayāt",
        },
        {
          code: "WS",
          name: "Wādī ash Shāţiʾ",
        },
        {
          code: "TB",
          name: "Ţarābulus",
        },
      ],
      subregion: "Northern Africa",
    },
    {
      capital: "Vaduz",
      code2: "LI",
      code3: "LIE",
      name: "Liechtenstein",
      region: "Europe",
      states: [
        {
          code: "01",
          name: "Balzers",
        },
        {
          code: "02",
          name: "Eschen",
        },
        {
          code: "03",
          name: "Gamprin",
        },
        {
          code: "04",
          name: "Mauren",
        },
        {
          code: "05",
          name: "Planken",
        },
        {
          code: "06",
          name: "Ruggell",
        },
        {
          code: "07",
          name: "Schaan",
        },
        {
          code: "08",
          name: "Schellenberg",
        },
        {
          code: "09",
          name: "Triesen",
        },
        {
          code: "10",
          name: "Triesenberg",
        },
        {
          code: "11",
          name: "Vaduz",
        },
      ],
      subregion: "Western Europe",
    },
    {
      capital: "Vilnius",
      code2: "LT",
      code3: "LTU",
      name: "Lithuania",
      region: "Europe",
      states: [
        {
          code: "AL",
          name: "Alytaus Apskritis",
        },
        {
          code: "KU",
          name: "Kauno Apskritis",
        },
        {
          code: "KL",
          name: "Klaipėdos Apskritis",
        },
        {
          code: "MR",
          name: "Marijampolės Apskritis",
        },
        {
          code: "PN",
          name: "Panevėžio Apskritis",
        },
        {
          code: "TA",
          name: "Tauragės Apskritis",
        },
        {
          code: "TE",
          name: "Telšių Apskritis",
        },
        {
          code: "UT",
          name: "Utenos Apskritis",
        },
        {
          code: "VL",
          name: "Vilniaus Apskritis",
        },
        {
          code: "SA",
          name: "Šiaulių Apskritis",
        },
      ],
      subregion: "Northern Europe",
    },
    {
      capital: "Luxembourg",
      code2: "LU",
      code3: "LUX",
      name: "Luxembourg",
      region: "Europe",
      states: [
        {
          code: "D",
          name: "Diekirch",
        },
        {
          code: "G",
          name: "Grevenmacher",
        },
        {
          code: "L",
          name: "Luxembourg",
        },
      ],
      subregion: "Western Europe",
    },
    {
      capital: "",
      code2: "MO",
      code3: "MAC",
      name: "Macau",
      region: "Asia",
      subregion: "Eastern Asia",
    },
    {
      capital: "Skopje",
      code2: "MK",
      code3: "MKD",
      name: "Republic of Macedonia",
      region: "Europe",
      states: [
        {
          code: "01",
          name: "Aerodrom",
        },
        {
          code: "02",
          name: "Aračinovo",
        },
        {
          code: "03",
          name: "Berovo",
        },
        {
          code: "04",
          name: "Bitola",
        },
        {
          code: "05",
          name: "Bogdanci",
        },
        {
          code: "06",
          name: "Bogovinje",
        },
        {
          code: "07",
          name: "Bosilovo",
        },
        {
          code: "08",
          name: "Brvenica",
        },
        {
          code: "09",
          name: "Butel",
        },
        {
          code: "77",
          name: "Centar",
        },
        {
          code: "78",
          name: "Centar Župa",
        },
        {
          code: "21",
          name: "Debar",
        },
        {
          code: "22",
          name: "Debarca",
        },
        {
          code: "23",
          name: "Delčevo",
        },
        {
          code: "25",
          name: "Demir Hisar",
        },
        {
          code: "24",
          name: "Demir Kapija",
        },
        {
          code: "26",
          name: "Dojran",
        },
        {
          code: "27",
          name: "Dolneni",
        },
        {
          code: "28",
          name: "Drugovo",
        },
        {
          code: "17",
          name: "Gazi Baba",
        },
        {
          code: "18",
          name: "Gevgelija",
        },
        {
          code: "29",
          name: "Gjorče Petrov",
        },
        {
          code: "19",
          name: "Gostivar",
        },
        {
          code: "20",
          name: "Gradsko",
        },
        {
          code: "34",
          name: "Ilinden",
        },
        {
          code: "35",
          name: "Jegunovce",
        },
        {
          code: "37",
          name: "Karbinci",
        },
        {
          code: "38",
          name: "Karpoš",
        },
        {
          code: "36",
          name: "Kavadarci",
        },
        {
          code: "39",
          name: "Kisela Voda",
        },
        {
          code: "40",
          name: "Kičevo",
        },
        {
          code: "41",
          name: "Konče",
        },
        {
          code: "42",
          name: "Kočani",
        },
        {
          code: "43",
          name: "Kratovo",
        },
        {
          code: "44",
          name: "Kriva Palanka",
        },
        {
          code: "45",
          name: "Krivogaštani",
        },
        {
          code: "46",
          name: "Kruševo",
        },
        {
          code: "47",
          name: "Kumanovo",
        },
        {
          code: "48",
          name: "Lipkovo",
        },
        {
          code: "49",
          name: "Lozovo",
        },
        {
          code: "51",
          name: "Makedonska Kamenica",
        },
        {
          code: "52",
          name: "Makedonski Brod",
        },
        {
          code: "50",
          name: "Mavrovo i Rostuša",
        },
        {
          code: "53",
          name: "Mogila",
        },
        {
          code: "54",
          name: "Negotino",
        },
        {
          code: "55",
          name: "Novaci",
        },
        {
          code: "56",
          name: "Novo Selo",
        },
        {
          code: "58",
          name: "Ohrid",
        },
        {
          code: "57",
          name: "Oslomej",
        },
        {
          code: "60",
          name: "Pehčevo",
        },
        {
          code: "59",
          name: "Petrovec",
        },
        {
          code: "61",
          name: "Plasnica",
        },
        {
          code: "62",
          name: "Prilep",
        },
        {
          code: "63",
          name: "Probištip",
        },
        {
          code: "64",
          name: "Radoviš",
        },
        {
          code: "65",
          name: "Rankovce",
        },
        {
          code: "66",
          name: "Resen",
        },
        {
          code: "67",
          name: "Rosoman",
        },
        {
          code: "68",
          name: "Saraj",
        },
        {
          code: "70",
          name: "Sopište",
        },
        {
          code: "71",
          name: "Staro Nagoričane",
        },
        {
          code: "72",
          name: "Struga",
        },
        {
          code: "73",
          name: "Strumica",
        },
        {
          code: "74",
          name: "Studeničani",
        },
        {
          code: "69",
          name: "Sveti Nikole",
        },
        {
          code: "75",
          name: "Tearce",
        },
        {
          code: "76",
          name: "Tetovo",
        },
        {
          code: "10",
          name: "Valandovo",
        },
        {
          code: "11",
          name: "Vasilevo",
        },
        {
          code: "13",
          name: "Veles",
        },
        {
          code: "12",
          name: "Vevčani",
        },
        {
          code: "14",
          name: "Vinica",
        },
        {
          code: "15",
          name: "Vraneštica",
        },
        {
          code: "16",
          name: "Vrapčište",
        },
        {
          code: "31",
          name: "Zajas",
        },
        {
          code: "32",
          name: "Zelenikovo",
        },
        {
          code: "33",
          name: "Zrnovci",
        },
        {
          code: "79",
          name: "Čair",
        },
        {
          code: "80",
          name: "Čaška",
        },
        {
          code: "81",
          name: "Češinovo-Obleševo",
        },
        {
          code: "82",
          name: "Čučer Sandevo",
        },
        {
          code: "83",
          name: "Štip",
        },
        {
          code: "84",
          name: "Šuto Orizari",
        },
        {
          code: "30",
          name: "Želino",
        },
      ],
      subregion: "Southern Europe",
    },
    {
      capital: "Antananarivo",
      code2: "MG",
      code3: "MDG",
      name: "Madagascar",
      region: "Africa",
      states: [
        {
          code: "T",
          name: "Antananarivo",
        },
        {
          code: "D",
          name: "Antsiranana",
        },
        {
          code: "F",
          name: "Fianarantsoa",
        },
        {
          code: "M",
          name: "Mahajanga",
        },
        {
          code: "A",
          name: "Toamasina",
        },
        {
          code: "U",
          name: "Toliara",
        },
      ],
      subregion: "Eastern Africa",
    },
    {
      capital: "Lilongwe",
      code2: "MW",
      code3: "MWI",
      name: "Malawi",
      region: "Africa",
      states: [
        {
          code: "C",
          name: "Central Region",
        },
        {
          code: "N",
          name: "Northern Region",
        },
        {
          code: "S",
          name: "Southern Region",
        },
      ],
      subregion: "Eastern Africa",
    },
    {
      capital: "Kuala Lumpur",
      code2: "MY",
      code3: "MYS",
      name: "Malaysia",
      region: "Asia",
      states: [
        {
          code: "14",
          name: "Wilayah Persekutuan Kuala Lumpur",
          subdivision: "federal territory",
        },
        {
          code: "15",
          name: "Wilayah Persekutuan Labuan",
          subdivision: "federal territory",
        },
        {
          code: "16",
          name: "Wilayah Persekutuan Putrajaya",
          subdivision: "federal territory",
        },
        {
          code: "01",
          name: "Johor",
          subdivision: "state",
        },
        {
          code: "02",
          name: "Kedah",
          subdivision: "state",
        },
        {
          code: "03",
          name: "Kelantan",
          subdivision: "state",
        },
        {
          code: "04",
          name: "Melaka",
          subdivision: "state",
        },
        {
          code: "05",
          name: "Negeri Sembilan",
          subdivision: "state",
        },
        {
          code: "06",
          name: "Pahang",
          subdivision: "state",
        },
        {
          code: "08",
          name: "Perak",
          subdivision: "state",
        },
        {
          code: "09",
          name: "Perlis",
          subdivision: "state",
        },
        {
          code: "07",
          name: "Pulau Pinang",
          subdivision: "state",
        },
        {
          code: "12",
          name: "Sabah",
          subdivision: "state",
        },
        {
          code: "13",
          name: "Sarawak",
          subdivision: "state",
        },
        {
          code: "10",
          name: "Selangor",
          subdivision: "state",
        },
        {
          code: "11",
          name: "Terengganu",
          subdivision: "state",
        },
      ],
      subregion: "South-Eastern Asia",
    },
    {
      capital: "Malé",
      code2: "MV",
      code3: "MDV",
      name: "Maldives",
      region: "Asia",
      states: [
        {
          code: "CE",
          name: "Central",
        },
        {
          code: "MLE",
          name: "Male",
        },
        {
          code: "NO",
          name: "North",
        },
        {
          code: "NC",
          name: "North Central",
        },
        {
          code: "SU",
          name: "South",
        },
        {
          code: "SC",
          name: "South Central",
        },
        {
          code: "UN",
          name: "Upper North",
        },
        {
          code: "US",
          name: "Upper South",
        },
      ],
      subregion: "Southern Asia",
    },
    {
      capital: "Bamako",
      code2: "ML",
      code3: "MLI",
      name: "Mali",
      region: "Africa",
      states: [
        {
          code: "BKO",
          name: "Bamako",
        },
        {
          code: "7",
          name: "Gao",
        },
        {
          code: "1",
          name: "Kayes",
        },
        {
          code: "8",
          name: "Kidal",
        },
        {
          code: "2",
          name: "Koulikoro",
        },
        {
          code: "5",
          name: "Mopti",
        },
        {
          code: "3",
          name: "Sikasso",
        },
        {
          code: "4",
          name: "Ségou",
        },
        {
          code: "6",
          name: "Tombouctou",
        },
      ],
      subregion: "Western Africa",
    },
    {
      capital: "Valletta",
      code2: "MT",
      code3: "MLT",
      name: "Malta",
      region: "Europe",
      states: [
        {
          code: "01",
          name: "Attard",
        },
        {
          code: "02",
          name: "Balzan",
        },
        {
          code: "03",
          name: "Birgu",
        },
        {
          code: "04",
          name: "Birkirkara",
        },
        {
          code: "05",
          name: "Birżebbuġa",
        },
        {
          code: "06",
          name: "Bormla",
        },
        {
          code: "07",
          name: "Dingli",
        },
        {
          code: "08",
          name: "Fgura",
        },
        {
          code: "09",
          name: "Floriana",
        },
        {
          code: "10",
          name: "Fontana",
        },
        {
          code: "11",
          name: "Gudja",
        },
        {
          code: "13",
          name: "Għajnsielem",
        },
        {
          code: "14",
          name: "Għarb",
        },
        {
          code: "15",
          name: "Għargħur",
        },
        {
          code: "16",
          name: "Għasri",
        },
        {
          code: "17",
          name: "Għaxaq",
        },
        {
          code: "12",
          name: "Gżira",
        },
        {
          code: "19",
          name: "Iklin",
        },
        {
          code: "20",
          name: "Isla",
        },
        {
          code: "21",
          name: "Kalkara",
        },
        {
          code: "22",
          name: "Kerċem",
        },
        {
          code: "23",
          name: "Kirkop",
        },
        {
          code: "24",
          name: "Lija",
        },
        {
          code: "25",
          name: "Luqa",
        },
        {
          code: "26",
          name: "Marsa",
        },
        {
          code: "27",
          name: "Marsaskala",
        },
        {
          code: "28",
          name: "Marsaxlokk",
        },
        {
          code: "29",
          name: "Mdina",
        },
        {
          code: "30",
          name: "Mellieħa",
        },
        {
          code: "32",
          name: "Mosta",
        },
        {
          code: "33",
          name: "Mqabba",
        },
        {
          code: "34",
          name: "Msida",
        },
        {
          code: "35",
          name: "Mtarfa",
        },
        {
          code: "36",
          name: "Munxar",
        },
        {
          code: "31",
          name: "Mġarr",
        },
        {
          code: "37",
          name: "Nadur",
        },
        {
          code: "38",
          name: "Naxxar",
        },
        {
          code: "39",
          name: "Paola",
        },
        {
          code: "40",
          name: "Pembroke",
        },
        {
          code: "41",
          name: "Pietà",
        },
        {
          code: "42",
          name: "Qala",
        },
        {
          code: "43",
          name: "Qormi",
        },
        {
          code: "44",
          name: "Qrendi",
        },
        {
          code: "45",
          name: "Rabat Għawdex",
        },
        {
          code: "46",
          name: "Rabat Malta",
        },
        {
          code: "47",
          name: "Safi",
        },
        {
          code: "50",
          name: "San Lawrenz",
        },
        {
          code: "51",
          name: "San Pawl il-Baħar",
        },
        {
          code: "48",
          name: "San Ġiljan",
        },
        {
          code: "49",
          name: "San Ġwann",
        },
        {
          code: "52",
          name: "Sannat",
        },
        {
          code: "53",
          name: "Santa Luċija",
        },
        {
          code: "54",
          name: "Santa Venera",
        },
        {
          code: "55",
          name: "Siġġiewi",
        },
        {
          code: "56",
          name: "Sliema",
        },
        {
          code: "57",
          name: "Swieqi",
        },
        {
          code: "58",
          name: "Ta' Xbiex",
        },
        {
          code: "59",
          name: "Tarxien",
        },
        {
          code: "60",
          name: "Valletta",
        },
        {
          code: "61",
          name: "Xagħra",
        },
        {
          code: "62",
          name: "Xewkija",
        },
        {
          code: "63",
          name: "Xgħajra",
        },
        {
          code: "18",
          name: "Ħamrun",
        },
        {
          code: "64",
          name: "Żabbar",
        },
        {
          code: "65",
          name: "Żebbuġ Għawdex",
        },
        {
          code: "66",
          name: "Żebbuġ Malta",
        },
        {
          code: "67",
          name: "Żejtun",
        },
        {
          code: "68",
          name: "Żurrieq",
        },
      ],
      subregion: "Southern Europe",
    },
    {
      capital: "Majuro",
      code2: "MH",
      code3: "MHL",
      name: "Marshall Islands",
      region: "Oceania",
      states: [
        {
          code: "L",
          name: "Ralik chain",
        },
        {
          code: "T",
          name: "Ratak chain",
        },
      ],
      subregion: "Micronesia",
    },
    {
      capital: "Fort-de-France",
      code2: "MQ",
      code3: "MTQ",
      name: "Martinique",
      region: "Americas",
      subregion: "Caribbean",
    },
    {
      capital: "Nouakchott",
      code2: "MR",
      code3: "MRT",
      name: "Mauritania",
      region: "Africa",
      states: [
        {
          code: "07",
          name: "Adrar",
        },
        {
          code: "03",
          name: "Assaba",
        },
        {
          code: "05",
          name: "Brakna",
        },
        {
          code: "08",
          name: "Dakhlet Nouâdhibou",
        },
        {
          code: "04",
          name: "Gorgol",
        },
        {
          code: "10",
          name: "Guidimaka",
        },
        {
          code: "01",
          name: "Hodh ech Chargui",
        },
        {
          code: "02",
          name: "Hodh el Gharbi",
        },
        {
          code: "12",
          name: "Inchiri",
        },
        {
          code: "NKC",
          name: "Nouakchott",
        },
        {
          code: "09",
          name: "Tagant",
        },
        {
          code: "11",
          name: "Tiris Zemmour",
        },
        {
          code: "06",
          name: "Trarza",
        },
      ],
      subregion: "Western Africa",
    },
    {
      capital: "Port Louis",
      code2: "MU",
      code3: "MUS",
      name: "Mauritius",
      region: "Africa",
      states: [
        {
          code: "AG",
          name: "Agalega Islands",
        },
        {
          code: "BR",
          name: "Beau Bassin-Rose Hill",
        },
        {
          code: "BL",
          name: "Black River",
        },
        {
          code: "CC",
          name: "Cargados Carajos Shoals",
        },
        {
          code: "CU",
          name: "Curepipe",
        },
        {
          code: "FL",
          name: "Flacq",
        },
        {
          code: "GP",
          name: "Grand Port",
        },
        {
          code: "MO",
          name: "Moka",
        },
        {
          code: "PA",
          name: "Pamplemousses",
        },
        {
          code: "PW",
          name: "Plaines Wilhems",
        },
        {
          code: "PL",
          name: "Port Louis",
        },
        {
          code: "PU",
          name: "Port Louis",
        },
        {
          code: "QB",
          name: "Quatre Bornes",
        },
        {
          code: "RR",
          name: "Rivière du Rempart",
        },
        {
          code: "RO",
          name: "Rodrigues Island",
        },
        {
          code: "SA",
          name: "Savanne",
        },
        {
          code: "VP",
          name: "Vacoas-Phoenix",
        },
      ],
      subregion: "Eastern Africa",
    },
    {
      capital: "Mamoudzou",
      code2: "YT",
      code3: "MYT",
      name: "Mayotte",
      region: "Africa",
      subregion: "Eastern Africa",
    },
    {
      capital: "Mexico City",
      code2: "MX",
      code3: "MEX",
      name: "Mexico",
      region: "Americas",
      states: [
        {
          code: "DIF",
          name: "Distrito Federal",
          subdivision: "federal district",
        },
        {
          code: "AGU",
          name: "Aguascalientes",
          subdivision: "state",
        },
        {
          code: "BCN",
          name: "Baja California",
          subdivision: "state",
        },
        {
          code: "BCS",
          name: "Baja California Sur",
          subdivision: "state",
        },
        {
          code: "CAM",
          name: "Campeche",
          subdivision: "state",
        },
        {
          code: "CHP",
          name: "Chiapas",
          subdivision: "state",
        },
        {
          code: "CHH",
          name: "Chihuahua",
          subdivision: "state",
        },
        {
          code: "COA",
          name: "Coahuila",
          subdivision: "state",
        },
        {
          code: "COL",
          name: "Colima",
          subdivision: "state",
        },
        {
          code: "DUR",
          name: "Durango",
          subdivision: "state",
        },
        {
          code: "GUA",
          name: "Guanajuato",
          subdivision: "state",
        },
        {
          code: "GRO",
          name: "Guerrero",
          subdivision: "state",
        },
        {
          code: "HID",
          name: "Hidalgo",
          subdivision: "state",
        },
        {
          code: "JAL",
          name: "Jalisco",
          subdivision: "state",
        },
        {
          code: "MIC",
          name: "Michoacán",
          subdivision: "state",
        },
        {
          code: "MOR",
          name: "Morelos",
          subdivision: "state",
        },
        {
          code: "MEX",
          name: "México",
          subdivision: "state",
        },
        {
          code: "NAY",
          name: "Nayarit",
          subdivision: "state",
        },
        {
          code: "NLE",
          name: "Nuevo León",
          subdivision: "state",
        },
        {
          code: "OAX",
          name: "Oaxaca",
          subdivision: "state",
        },
        {
          code: "PUE",
          name: "Puebla",
          subdivision: "state",
        },
        {
          code: "QUE",
          name: "Querétaro",
          subdivision: "state",
        },
        {
          code: "ROO",
          name: "Quintana Roo",
          subdivision: "state",
        },
        {
          code: "SLP",
          name: "San Luis Potosí",
          subdivision: "state",
        },
        {
          code: "SIN",
          name: "Sinaloa",
          subdivision: "state",
        },
        {
          code: "SON",
          name: "Sonora",
          subdivision: "state",
        },
        {
          code: "TAB",
          name: "Tabasco",
          subdivision: "state",
        },
        {
          code: "TAM",
          name: "Tamaulipas",
          subdivision: "state",
        },
        {
          code: "TLA",
          name: "Tlaxcala",
          subdivision: "state",
        },
        {
          code: "VER",
          name: "Veracruz",
          subdivision: "state",
        },
        {
          code: "YUC",
          name: "Yucatán",
          subdivision: "state",
        },
        {
          code: "ZAC",
          name: "Zacatecas",
          subdivision: "state",
        },
      ],
      subregion: "Central America",
    },
    {
      capital: "Palikir",
      code2: "FM",
      code3: "FSM",
      name: "Federated States of Micronesia",
      region: "Oceania",
      states: [
        {
          code: "TRK",
          name: "Chuuk",
        },
        {
          code: "KSA",
          name: "Kosrae",
        },
        {
          code: "PNI",
          name: "Pohnpei",
        },
        {
          code: "YAP",
          name: "Yap",
        },
      ],
      subregion: "Micronesia",
    },
    {
      capital: "Chișinău",
      code2: "MD",
      code3: "MDA",
      name: "Moldova",
      region: "Europe",
      states: [
        {
          code: "AN",
          name: "Anenii Noi",
        },
        {
          code: "BS",
          name: "Basarabeasca",
        },
        {
          code: "BR",
          name: "Briceni",
        },
        {
          code: "BA",
          name: "Bălţi",
        },
        {
          code: "CA",
          name: "Cahul",
        },
        {
          code: "CT",
          name: "Cantemir",
        },
        {
          code: "CU",
          name: "Chişinău",
        },
        {
          code: "CM",
          name: "Cimişlia",
        },
        {
          code: "CR",
          name: "Criuleni",
        },
        {
          code: "CL",
          name: "Călăraşi",
        },
        {
          code: "CS",
          name: "Căuşeni",
        },
        {
          code: "DO",
          name: "Donduşeni",
        },
        {
          code: "DR",
          name: "Drochia",
        },
        {
          code: "DU",
          name: "Dubăsari",
        },
        {
          code: "ED",
          name: "Edineţ",
        },
        {
          code: "FL",
          name: "Floreşti",
        },
        {
          code: "FA",
          name: "Făleşti",
        },
        {
          code: "GL",
          name: "Glodeni",
        },
        {
          code: "GA",
          name: "Găgăuzia, Unitatea teritorială autonomă",
        },
        {
          code: "HI",
          name: "Hînceşti",
        },
        {
          code: "IA",
          name: "Ialoveni",
        },
        {
          code: "LE",
          name: "Leova",
        },
        {
          code: "NI",
          name: "Nisporeni",
        },
        {
          code: "OC",
          name: "Ocniţa",
        },
        {
          code: "OR",
          name: "Orhei",
        },
        {
          code: "RE",
          name: "Rezina",
        },
        {
          code: "RI",
          name: "Rîşcani",
        },
        {
          code: "SO",
          name: "Soroca",
        },
        {
          code: "ST",
          name: "Străşeni",
        },
        {
          code: "SN",
          name: "Stînga Nistrului, unitatea teritorială din",
        },
        {
          code: "SI",
          name: "Sîngerei",
        },
        {
          code: "TA",
          name: "Taraclia",
        },
        {
          code: "TE",
          name: "Teleneşti",
        },
        {
          code: "BD",
          name: "Tighina",
        },
        {
          code: "UN",
          name: "Ungheni",
        },
        {
          code: "SD",
          name: "Şoldăneşti",
        },
        {
          code: "SV",
          name: "Ştefan Vodă",
        },
      ],
      subregion: "Eastern Europe",
    },
    {
      capital: "Monaco",
      code2: "MC",
      code3: "MCO",
      name: "Monaco",
      region: "Europe",
      states: [
        {
          code: "FO",
          name: "Fontvieille",
        },
        {
          code: "JE",
          name: "Jardin Exotique",
        },
        {
          code: "CL",
          name: "La Colle",
        },
        {
          code: "CO",
          name: "La Condamine",
        },
        {
          code: "GA",
          name: "La Gare",
        },
        {
          code: "SO",
          name: "La Source",
        },
        {
          code: "LA",
          name: "Larvotto",
        },
        {
          code: "MA",
          name: "Malbousquet",
        },
        {
          code: "MO",
          name: "Monaco-Ville",
        },
        {
          code: "MG",
          name: "Moneghetti",
        },
        {
          code: "MC",
          name: "Monte-Carlo",
        },
        {
          code: "MU",
          name: "Moulins",
        },
        {
          code: "PH",
          name: "Port-Hercule",
        },
        {
          code: "SR",
          name: "Saint-Roman",
        },
        {
          code: "SD",
          name: "Sainte-Dévote",
        },
        {
          code: "SP",
          name: "Spélugues",
        },
        {
          code: "VR",
          name: "Vallon de la Rousse",
        },
      ],
      subregion: "Western Europe",
    },
    {
      capital: "Ulan Bator",
      code2: "MN",
      code3: "MNG",
      name: "Mongolia",
      region: "Asia",
      states: [
        {
          code: "073",
          name: "Arhangay",
        },
        {
          code: "071",
          name: "Bayan-Ölgiy",
        },
        {
          code: "069",
          name: "Bayanhongor",
        },
        {
          code: "067",
          name: "Bulgan",
        },
        {
          code: "037",
          name: "Darhan uul",
        },
        {
          code: "061",
          name: "Dornod",
        },
        {
          code: "063",
          name: "Dornogovĭ",
        },
        {
          code: "059",
          name: "Dundgovĭ",
        },
        {
          code: "057",
          name: "Dzavhan",
        },
        {
          code: "065",
          name: "Govĭ-Altay",
        },
        {
          code: "064",
          name: "Govĭ-Sümber",
        },
        {
          code: "039",
          name: "Hentiy",
        },
        {
          code: "043",
          name: "Hovd",
        },
        {
          code: "041",
          name: "Hövsgöl",
        },
        {
          code: "035",
          name: "Orhon",
        },
        {
          code: "049",
          name: "Selenge",
        },
        {
          code: "051",
          name: "Sühbaatar",
        },
        {
          code: "047",
          name: "Töv",
        },
        {
          code: "1",
          name: "Ulaanbaatar",
        },
        {
          code: "046",
          name: "Uvs",
        },
        {
          code: "053",
          name: "Ömnögovĭ",
        },
        {
          code: "055",
          name: "Övörhangay",
        },
      ],
      subregion: "Eastern Asia",
    },
    {
      capital: "Podgorica",
      code2: "ME",
      code3: "MNE",
      name: "Montenegro",
      region: "Europe",
      states: [
        {
          code: "01",
          name: "Andrijevica",
        },
        {
          code: "02",
          name: "Bar",
        },
        {
          code: "03",
          name: "Berane",
        },
        {
          code: "04",
          name: "Bijelo Polje",
        },
        {
          code: "05",
          name: "Budva",
        },
        {
          code: "06",
          name: "Cetinje",
        },
        {
          code: "07",
          name: "Danilovgrad",
        },
        {
          code: "22",
          name: "Gusinje",
        },
        {
          code: "08",
          name: "Herceg-Novi",
        },
        {
          code: "09",
          name: "Kolašin",
        },
        {
          code: "10",
          name: "Kotor",
        },
        {
          code: "11",
          name: "Mojkovac",
        },
        {
          code: "12",
          name: "Nikšić",
        },
        {
          code: "23",
          name: "Petnjica",
        },
        {
          code: "13",
          name: "Plav",
        },
        {
          code: "14",
          name: "Pljevlja",
        },
        {
          code: "15",
          name: "Plužine",
        },
        {
          code: "16",
          name: "Podgorica",
        },
        {
          code: "17",
          name: "Rožaje",
        },
        {
          code: "19",
          name: "Tivat",
        },
        {
          code: "20",
          name: "Ulcinj",
        },
        {
          code: "18",
          name: "Šavnik",
        },
        {
          code: "21",
          name: "Žabljak",
        },
      ],
      subregion: "Southern Europe",
    },
    {
      capital: "Plymouth",
      code2: "MS",
      code3: "MSR",
      name: "Montserrat",
      region: "Americas",
      subregion: "Caribbean",
    },
    {
      capital: "Rabat",
      code2: "MA",
      code3: "MAR",
      name: "Morocco",
      region: "Africa",
      states: [
        {
          code: "09",
          name: "Chaouia-Ouardigha",
        },
        {
          code: "10",
          name: "Doukhala-Abda",
        },
        {
          code: "05",
          name: "Fès-Boulemane",
        },
        {
          code: "02",
          name: "Gharb-Chrarda-Beni Hssen",
        },
        {
          code: "08",
          name: "Grand Casablanca",
        },
        {
          code: "14",
          name: "Guelmim-Es Smara",
        },
        {
          code: "04",
          name: "L'Oriental",
        },
        {
          code: "15",
          name: "Laâyoune-Boujdour-Sakia el Hamra",
        },
        {
          code: "11",
          name: "Marrakech-Tensift-Al Haouz",
        },
        {
          code: "06",
          name: "Meknès-Tafilalet",
        },
        {
          code: "16",
          name: "Oued ed Dahab-Lagouira",
        },
        {
          code: "07",
          name: "Rabat-Salé-Zemmour-Zaer",
        },
        {
          code: "13",
          name: "Souss-Massa-Drâa",
        },
        {
          code: "12",
          name: "Tadla-Azilal",
        },
        {
          code: "01",
          name: "Tanger-Tétouan",
        },
        {
          code: "03",
          name: "Taza-Al Hoceima-Taounate",
        },
      ],
      subregion: "Northern Africa",
    },
    {
      capital: "Maputo",
      code2: "MZ",
      code3: "MOZ",
      name: "Mozambique",
      region: "Africa",
      states: [
        {
          code: "P",
          name: "Cabo Delgado",
        },
        {
          code: "G",
          name: "Gaza",
        },
        {
          code: "I",
          name: "Inhambane",
        },
        {
          code: "B",
          name: "Manica",
        },
        {
          code: "MPM",
          name: "Maputo",
        },
        {
          code: "L",
          name: "Maputo",
        },
        {
          code: "N",
          name: "Nampula",
        },
        {
          code: "A",
          name: "Niassa",
        },
        {
          code: "S",
          name: "Sofala",
        },
        {
          code: "T",
          name: "Tete",
        },
        {
          code: "Q",
          name: "Zambézia",
        },
      ],
      subregion: "Eastern Africa",
    },
    {
      capital: "Naypyidaw",
      code2: "MM",
      code3: "MMR",
      name: "Myanmar",
      region: "Asia",
      states: [
        {
          code: "07",
          name: "Ayeyarwady",
        },
        {
          code: "02",
          name: "Bago",
        },
        {
          code: "14",
          name: "Chin",
        },
        {
          code: "11",
          name: "Kachin",
        },
        {
          code: "12",
          name: "Kayah",
        },
        {
          code: "13",
          name: "Kayin",
        },
        {
          code: "03",
          name: "Magway",
        },
        {
          code: "04",
          name: "Mandalay",
        },
        {
          code: "15",
          name: "Mon",
        },
        {
          code: "16",
          name: "Rakhine",
        },
        {
          code: "01",
          name: "Sagaing",
        },
        {
          code: "17",
          name: "Shan",
        },
        {
          code: "05",
          name: "Tanintharyi",
        },
        {
          code: "06",
          name: "Yangon",
        },
      ],
      subregion: "South-Eastern Asia",
    },
    {
      capital: "Windhoek",
      code2: "NA",
      code3: "NAM",
      name: "Namibia",
      region: "Africa",
      states: [
        {
          code: "ER",
          name: "Erongo",
        },
        {
          code: "HA",
          name: "Hardap",
        },
        {
          code: "KA",
          name: "Karas",
        },
        {
          code: "KE",
          name: "Kavango East",
        },
        {
          code: "KW",
          name: "Kavango West",
        },
        {
          code: "KH",
          name: "Khomas",
        },
        {
          code: "KU",
          name: "Kunene",
        },
        {
          code: "OW",
          name: "Ohangwena",
        },
        {
          code: "OH",
          name: "Omaheke",
        },
        {
          code: "OS",
          name: "Omusati",
        },
        {
          code: "ON",
          name: "Oshana",
        },
        {
          code: "OT",
          name: "Oshikoto",
        },
        {
          code: "OD",
          name: "Otjozondjupa",
        },
        {
          code: "CA",
          name: "Zambezi",
        },
      ],
      subregion: "Southern Africa",
    },
    {
      capital: "Yaren",
      code2: "NR",
      code3: "NRU",
      name: "Nauru",
      region: "Oceania",
      states: [
        {
          code: "01",
          name: "Aiwo",
        },
        {
          code: "02",
          name: "Anabar",
        },
        {
          code: "03",
          name: "Anetan",
        },
        {
          code: "04",
          name: "Anibare",
        },
        {
          code: "05",
          name: "Baiti",
        },
        {
          code: "06",
          name: "Boe",
        },
        {
          code: "07",
          name: "Buada",
        },
        {
          code: "08",
          name: "Denigomodu",
        },
        {
          code: "09",
          name: "Ewa",
        },
        {
          code: "10",
          name: "Ijuw",
        },
        {
          code: "11",
          name: "Meneng",
        },
        {
          code: "12",
          name: "Nibok",
        },
        {
          code: "13",
          name: "Uaboe",
        },
        {
          code: "14",
          name: "Yaren",
        },
      ],
      subregion: "Micronesia",
    },
    {
      capital: "Kathmandu",
      code2: "NP",
      code3: "NPL",
      name: "Nepal",
      region: "Asia",
      states: [
        {
          code: "2",
          name: "Madhya Pashchimanchal",
        },
        {
          code: "1",
          name: "Madhyamanchal",
        },
        {
          code: "3",
          name: "Pashchimanchal",
        },
        {
          code: "4",
          name: "Purwanchal",
        },
        {
          code: "5",
          name: "Sudur Pashchimanchal",
        },
      ],
      subregion: "Southern Asia",
    },
    {
      capital: "Amsterdam",
      code2: "NL",
      code3: "NLD",
      name: "Netherlands",
      region: "Europe",
      states: [
        {
          code: "DR",
          name: "Drenthe",
          subdivision: "Province",
        },
        {
          code: "FL",
          name: "Flevoland",
          subdivision: "Province",
        },
        {
          code: "FR",
          name: "Fryslân",
          subdivision: "Province",
        },
        {
          code: "GE",
          name: "Gelderland",
          subdivision: "Province",
        },
        {
          code: "GR",
          name: "Groningen",
          subdivision: "Province",
        },
        {
          code: "LI",
          name: "Limburg",
          subdivision: "Province",
        },
        {
          code: "NB",
          name: "Noord-Brabant",
          subdivision: "Province",
        },
        {
          code: "NH",
          name: "Noord-Holland",
          subdivision: "Province",
        },
        {
          code: "OV",
          name: "Overijssel",
          subdivision: "Province",
        },
        {
          code: "UT",
          name: "Utrecht",
          subdivision: "Province",
        },
        {
          code: "ZE",
          name: "Zeeland",
          subdivision: "Province",
        },
        {
          code: "ZH",
          name: "Zuid-Holland",
          subdivision: "Province",
        },
        {
          code: "AW",
          name: "Aruba",
          subdivision: "country",
        },
        {
          code: "CW",
          name: "Curaçao",
          subdivision: "country",
        },
        {
          code: "SX",
          name: "Sint Maarten",
          subdivision: "country",
        },
        {
          code: "BQ1",
          name: "Bonaire",
          subdivision: "special municipality",
        },
        {
          code: "BQ2",
          name: "Saba",
          subdivision: "special municipality",
        },
        {
          code: "BQ3",
          name: "Sint Eustatius",
          subdivision: "special municipality",
        },
      ],
      subregion: "Western Europe",
    },
    {
      capital: "Nouméa",
      code2: "NC",
      code3: "NCL",
      name: "New Caledonia",
      region: "Oceania",
      subregion: "Melanesia",
    },
    {
      capital: "Wellington",
      code2: "NZ",
      code3: "NZL",
      name: "New Zealand",
      region: "Oceania",
      states: [
        {
          code: "N",
          name: "North Island",
          subdivision: "Island",
        },
        {
          code: "S",
          name: "South Island",
          subdivision: "Island",
        },
        {
          code: "AUK",
          name: "Auckland",
          subdivision: "regional council",
        },
        {
          code: "BOP",
          name: "Bay of Plenty",
          subdivision: "regional council",
        },
        {
          code: "CAN",
          name: "Canterbury",
          subdivision: "regional council",
        },
        {
          code: "HKB",
          name: "Hawke's Bay",
          subdivision: "regional council",
        },
        {
          code: "MWT",
          name: "Manawatu-Wanganui",
          subdivision: "regional council",
        },
        {
          code: "NTL",
          name: "Northland",
          subdivision: "regional council",
        },
        {
          code: "OTA",
          name: "Otago",
          subdivision: "regional council",
        },
        {
          code: "STL",
          name: "Southland",
          subdivision: "regional council",
        },
        {
          code: "TKI",
          name: "Taranaki",
          subdivision: "regional council",
        },
        {
          code: "WKO",
          name: "Waikato",
          subdivision: "regional council",
        },
        {
          code: "WGN",
          name: "Wellington",
          subdivision: "regional council",
        },
        {
          code: "WTC",
          name: "West Coast",
          subdivision: "regional council",
        },
        {
          code: "CIT",
          name: "Chatham Islands Territory",
          subdivision: "special island authority",
        },
        {
          code: "GIS",
          name: "Gisborne District",
          subdivision: "unitary authority",
        },
        {
          code: "MBH",
          name: "Marlborough District",
          subdivision: "unitary authority",
        },
        {
          code: "NSN",
          name: "Nelson City",
          subdivision: "unitary authority",
        },
        {
          code: "TAS",
          name: "Tasman District",
          subdivision: "unitary authority",
        },
      ],
      subregion: "Australia and New Zealand",
    },
    {
      capital: "Managua",
      code2: "NI",
      code3: "NIC",
      name: "Nicaragua",
      region: "Americas",
      states: [
        {
          code: "AN",
          name: "Atlántico Norte",
        },
        {
          code: "AS",
          name: "Atlántico Sur",
        },
        {
          code: "BO",
          name: "Boaco",
        },
        {
          code: "CA",
          name: "Carazo",
        },
        {
          code: "CI",
          name: "Chinandega",
        },
        {
          code: "CO",
          name: "Chontales",
        },
        {
          code: "ES",
          name: "Estelí",
        },
        {
          code: "GR",
          name: "Granada",
        },
        {
          code: "JI",
          name: "Jinotega",
        },
        {
          code: "LE",
          name: "León",
        },
        {
          code: "MD",
          name: "Madriz",
        },
        {
          code: "MN",
          name: "Managua",
        },
        {
          code: "MS",
          name: "Masaya",
        },
        {
          code: "MT",
          name: "Matagalpa",
        },
        {
          code: "NS",
          name: "Nueva Segovia",
        },
        {
          code: "RI",
          name: "Rivas",
        },
        {
          code: "SJ",
          name: "Río San Juan",
        },
      ],
      subregion: "Central America",
    },
    {
      capital: "Niamey",
      code2: "NE",
      code3: "NER",
      name: "Niger",
      region: "Africa",
      states: [
        {
          code: "1",
          name: "Agadez",
        },
        {
          code: "2",
          name: "Diffa",
        },
        {
          code: "3",
          name: "Dosso",
        },
        {
          code: "4",
          name: "Maradi",
        },
        {
          code: "8",
          name: "Niamey",
        },
        {
          code: "5",
          name: "Tahoua",
        },
        {
          code: "6",
          name: "Tillabéri",
        },
        {
          code: "7",
          name: "Zinder",
        },
      ],
      subregion: "Western Africa",
    },
    {
      capital: "Abuja",
      code2: "NG",
      code3: "NGA",
      name: "Nigeria",
      region: "Africa",
      states: [
        {
          code: "AB",
          name: "Abia",
        },
        {
          code: "FC",
          name: "Abuja Federal Capital Territory",
        },
        {
          code: "AD",
          name: "Adamawa",
        },
        {
          code: "AK",
          name: "Akwa Ibom",
        },
        {
          code: "AN",
          name: "Anambra",
        },
        {
          code: "BA",
          name: "Bauchi",
        },
        {
          code: "BY",
          name: "Bayelsa",
        },
        {
          code: "BE",
          name: "Benue",
        },
        {
          code: "BO",
          name: "Borno",
        },
        {
          code: "CR",
          name: "Cross River",
        },
        {
          code: "DE",
          name: "Delta",
        },
        {
          code: "EB",
          name: "Ebonyi",
        },
        {
          code: "ED",
          name: "Edo",
        },
        {
          code: "EK",
          name: "Ekiti",
        },
        {
          code: "EN",
          name: "Enugu",
        },
        {
          code: "GO",
          name: "Gombe",
        },
        {
          code: "IM",
          name: "Imo",
        },
        {
          code: "JI",
          name: "Jigawa",
        },
        {
          code: "KD",
          name: "Kaduna",
        },
        {
          code: "KN",
          name: "Kano",
        },
        {
          code: "KT",
          name: "Katsina",
        },
        {
          code: "KE",
          name: "Kebbi",
        },
        {
          code: "KO",
          name: "Kogi",
        },
        {
          code: "KW",
          name: "Kwara",
        },
        {
          code: "LA",
          name: "Lagos",
        },
        {
          code: "NA",
          name: "Nassarawa",
        },
        {
          code: "NI",
          name: "Niger",
        },
        {
          code: "OG",
          name: "Ogun",
        },
        {
          code: "ON",
          name: "Ondo",
        },
        {
          code: "OS",
          name: "Osun",
        },
        {
          code: "OY",
          name: "Oyo",
        },
        {
          code: "PL",
          name: "Plateau",
        },
        {
          code: "RI",
          name: "Rivers",
        },
        {
          code: "SO",
          name: "Sokoto",
        },
        {
          code: "TA",
          name: "Taraba",
        },
        {
          code: "YO",
          name: "Yobe",
        },
        {
          code: "ZA",
          name: "Zamfara",
        },
      ],
      subregion: "Western Africa",
    },
    {
      capital: "Alofi",
      code2: "NU",
      code3: "NIU",
      name: "Niue",
      region: "Oceania",
      subregion: "Polynesia",
    },
    {
      capital: "Kingston",
      code2: "NF",
      code3: "NFK",
      name: "Norfolk Island",
      region: "Oceania",
      subregion: "Australia and New Zealand",
    },
    {
      capital: "Pyongyang",
      code2: "KP",
      code3: "PRK",
      name: "North Korea",
      region: "Asia",
      states: [
        {
          code: "04",
          name: "Chagang",
        },
        {
          code: "07",
          name: "Kangwon",
        },
        {
          code: "09",
          name: "North Hamgyong",
        },
        {
          code: "06",
          name: "North Hwanghae",
        },
        {
          code: "03",
          name: "North Pyongan",
        },
        {
          code: "01",
          name: "Pyongyang",
        },
        {
          code: "13",
          name: "Rason",
        },
        {
          code: "10",
          name: "Ryanggang",
        },
        {
          code: "08",
          name: "South Hamgyong",
        },
        {
          code: "05",
          name: "South Hwanghae",
        },
        {
          code: "02",
          name: "South Pyongan",
        },
      ],
      subregion: "Eastern Asia",
    },
    {
      capital: "Saipan",
      code2: "MP",
      code3: "MNP",
      name: "Northern Mariana Islands",
      region: "Oceania",
      subregion: "Micronesia",
    },
    {
      capital: "Oslo",
      code2: "NO",
      code3: "NOR",
      name: "Norway",
      region: "Europe",
      states: [
        {
          code: "02",
          name: "Akershus",
        },
        {
          code: "09",
          name: "Aust-Agder",
        },
        {
          code: "06",
          name: "Buskerud",
        },
        {
          code: "20",
          name: "Finnmark",
        },
        {
          code: "04",
          name: "Hedmark",
        },
        {
          code: "12",
          name: "Hordaland",
        },
        {
          code: "22",
          name: "Jan Mayen",
        },
        {
          code: "15",
          name: "Møre og Romsdal",
        },
        {
          code: "17",
          name: "Nord-Trøndelag",
        },
        {
          code: "18",
          name: "Nordland",
        },
        {
          code: "05",
          name: "Oppland",
        },
        {
          code: "03",
          name: "Oslo",
        },
        {
          code: "11",
          name: "Rogaland",
        },
        {
          code: "14",
          name: "Sogn og Fjordane",
        },
        {
          code: "21",
          name: "Svalbard",
        },
        {
          code: "16",
          name: "Sør-Trøndelag",
        },
        {
          code: "08",
          name: "Telemark",
        },
        {
          code: "19",
          name: "Troms",
        },
        {
          code: "10",
          name: "Vest-Agder",
        },
        {
          code: "07",
          name: "Vestfold",
        },
        {
          code: "01",
          name: "Østfold",
        },
      ],
      subregion: "Northern Europe",
    },
    {
      capital: "Muscat",
      code2: "OM",
      code3: "OMN",
      name: "Oman",
      region: "Asia",
      states: [
        {
          code: "DA",
          name: "Ad Dākhilīyah",
        },
        {
          code: "BU",
          name: "Al Buraymī",
        },
        {
          code: "BA",
          name: "Al Bāţinah",
        },
        {
          code: "WU",
          name: "Al Wusţá",
        },
        {
          code: "SH",
          name: "Ash Sharqīyah",
        },
        {
          code: "ZA",
          name: "Az̧ Z̧āhirah",
        },
        {
          code: "MA",
          name: "Masqaţ",
        },
        {
          code: "MU",
          name: "Musandam",
        },
        {
          code: "ZU",
          name: "Z̧ufār",
        },
      ],
      subregion: "Western Asia",
    },
    {
      capital: "Islamabad",
      code2: "PK",
      code3: "PAK",
      name: "Pakistan",
      region: "Asia",
      states: [
        {
          code: "JK",
          name: "Azad Kashmir",
        },
        {
          code: "BA",
          name: "Balochistan",
        },
        {
          code: "TA",
          name: "Federally Administered Tribal Areas",
        },
        {
          code: "GB",
          name: "Gilgit-Baltistan",
        },
        {
          code: "IS",
          name: "Islamabad",
        },
        {
          code: "KP",
          name: "Khyber Pakhtunkhwa",
        },
        {
          code: "PB",
          name: "Punjab",
        },
        {
          code: "SD",
          name: "Sindh",
        },
      ],
      subregion: "Southern Asia",
    },
    {
      capital: "Ngerulmud",
      code2: "PW",
      code3: "PLW",
      name: "Palau",
      region: "Oceania",
      states: [
        {
          code: "002",
          name: "Aimeliik",
        },
        {
          code: "004",
          name: "Airai",
        },
        {
          code: "010",
          name: "Angaur",
        },
        {
          code: "050",
          name: "Hatobohei",
        },
        {
          code: "100",
          name: "Kayangel",
        },
        {
          code: "150",
          name: "Koror",
        },
        {
          code: "212",
          name: "Melekeok",
        },
        {
          code: "214",
          name: "Ngaraard",
        },
        {
          code: "218",
          name: "Ngarchelong",
        },
        {
          code: "222",
          name: "Ngardmau",
        },
        {
          code: "224",
          name: "Ngatpang",
        },
        {
          code: "226",
          name: "Ngchesar",
        },
        {
          code: "227",
          name: "Ngeremlengui",
        },
        {
          code: "228",
          name: "Ngiwal",
        },
        {
          code: "350",
          name: "Peleliu",
        },
        {
          code: "370",
          name: "Sonsorol",
        },
      ],
      subregion: "Micronesia",
    },
    {
      capital: "Ramallah",
      code2: "PS",
      code3: "PSE",
      name: "Palestine",
      region: "Asia",
      states: [
        {
          code: "BTH",
          name: "Bethlehem",
        },
        {
          code: "DEB",
          name: "Deir El Balah",
        },
        {
          code: "GZA",
          name: "Gaza",
        },
        {
          code: "HBN",
          name: "Hebron",
        },
        {
          code: "JEN",
          name: "Jenin",
        },
        {
          code: "JRH",
          name: "Jericho – Al Aghwar",
        },
        {
          code: "JEM",
          name: "Jerusalem",
        },
        {
          code: "KYS",
          name: "Khan Yunis",
        },
        {
          code: "NBS",
          name: "Nablus",
        },
        {
          code: "NGZ",
          name: "North Gaza",
        },
        {
          code: "QQA",
          name: "Qalqilya",
        },
        {
          code: "RFH",
          name: "Rafah",
        },
        {
          code: "RBH",
          name: "Ramallah",
        },
        {
          code: "SLT",
          name: "Salfit",
        },
        {
          code: "TBS",
          name: "Tubas",
        },
        {
          code: "TKM",
          name: "Tulkarm",
        },
      ],
      subregion: "Western Asia",
    },
    {
      capital: "Panama City",
      code2: "PA",
      code3: "PAN",
      name: "Panama",
      region: "Americas",
      states: [
        {
          code: "1",
          name: "Bocas del Toro",
        },
        {
          code: "4",
          name: "Chiriquí",
        },
        {
          code: "2",
          name: "Coclé",
        },
        {
          code: "3",
          name: "Colón",
        },
        {
          code: "5",
          name: "Darién",
        },
        {
          code: "EM",
          name: "Emberá",
        },
        {
          code: "6",
          name: "Herrera",
        },
        {
          code: "KY",
          name: "Kuna Yala",
        },
        {
          code: "7",
          name: "Los Santos",
        },
        {
          code: "NB",
          name: "Ngöbe-Buglé",
        },
        {
          code: "8",
          name: "Panamá",
        },
        {
          code: "10",
          name: "Panamá Oeste",
        },
        {
          code: "9",
          name: "Veraguas",
        },
      ],
      subregion: "Central America",
    },
    {
      capital: "Port Moresby",
      code2: "PG",
      code3: "PNG",
      name: "Papua New Guinea",
      region: "Oceania",
      states: [
        {
          code: "NSB",
          name: "Bougainville",
        },
        {
          code: "CPM",
          name: "Central",
        },
        {
          code: "CPK",
          name: "Chimbu",
        },
        {
          code: "EBR",
          name: "East New Britain",
        },
        {
          code: "ESW",
          name: "East Sepik",
        },
        {
          code: "EHG",
          name: "Eastern Highlands",
        },
        {
          code: "EPW",
          name: "Enga",
        },
        {
          code: "GPK",
          name: "Gulf",
        },
        {
          code: "MPM",
          name: "Madang",
        },
        {
          code: "MRL",
          name: "Manus",
        },
        {
          code: "MBA",
          name: "Milne Bay",
        },
        {
          code: "MPL",
          name: "Morobe",
        },
        {
          code: "NCD",
          name: "National Capital District",
        },
        {
          code: "NIK",
          name: "New Ireland",
        },
        {
          code: "NPP",
          name: "Northern",
        },
        {
          code: "SAN",
          name: "Sandaun",
        },
        {
          code: "SHM",
          name: "Southern Highlands",
        },
        {
          code: "WBK",
          name: "West New Britain",
        },
        {
          code: "WPD",
          name: "Western",
        },
        {
          code: "WHM",
          name: "Western Highlands",
        },
      ],
      subregion: "Melanesia",
    },
    {
      capital: "Asunción",
      code2: "PY",
      code3: "PRY",
      name: "Paraguay",
      region: "Americas",
      states: [
        {
          code: "16",
          name: "Alto Paraguay",
        },
        {
          code: "10",
          name: "Alto Paraná",
        },
        {
          code: "13",
          name: "Amambay",
        },
        {
          code: "ASU",
          name: "Asunción",
        },
        {
          code: "19",
          name: "Boquerón",
        },
        {
          code: "5",
          name: "Caaguazú",
        },
        {
          code: "6",
          name: "Caazapá",
        },
        {
          code: "14",
          name: "Canindeyú",
        },
        {
          code: "11",
          name: "Central",
        },
        {
          code: "1",
          name: "Concepción",
        },
        {
          code: "3",
          name: "Cordillera",
        },
        {
          code: "4",
          name: "Guairá",
        },
        {
          code: "7",
          name: "Itapúa",
        },
        {
          code: "8",
          name: "Misiones",
        },
        {
          code: "9",
          name: "Paraguarí",
        },
        {
          code: "15",
          name: "Presidente Hayes",
        },
        {
          code: "2",
          name: "San Pedro",
        },
        {
          code: "12",
          name: "Ñeembucú",
        },
      ],
      subregion: "South America",
    },
    {
      capital: "Lima",
      code2: "PE",
      code3: "PER",
      name: "Peru",
      region: "Americas",
      states: [
        {
          code: "AMA",
          name: "Amazonas",
        },
        {
          code: "ANC",
          name: "Ancash",
        },
        {
          code: "APU",
          name: "Apurímac",
        },
        {
          code: "ARE",
          name: "Arequipa",
        },
        {
          code: "AYA",
          name: "Ayacucho",
        },
        {
          code: "CAJ",
          name: "Cajamarca",
        },
        {
          code: "CUS",
          name: "Cusco",
        },
        {
          code: "CAL",
          name: "El Callao",
        },
        {
          code: "HUV",
          name: "Huancavelica",
        },
        {
          code: "HUC",
          name: "Huánuco",
        },
        {
          code: "ICA",
          name: "Ica",
        },
        {
          code: "JUN",
          name: "Junín",
        },
        {
          code: "LAL",
          name: "La Libertad",
        },
        {
          code: "LAM",
          name: "Lambayeque",
        },
        {
          code: "LIM",
          name: "Lima",
        },
        {
          code: "LOR",
          name: "Loreto",
        },
        {
          code: "MDD",
          name: "Madre de Dios",
        },
        {
          code: "MOQ",
          name: "Moquegua",
        },
        {
          code: "LMA",
          name: "Municipalidad Metropolitana de Lima",
        },
        {
          code: "PAS",
          name: "Pasco",
        },
        {
          code: "PIU",
          name: "Piura",
        },
        {
          code: "PUN",
          name: "Puno",
        },
        {
          code: "SAM",
          name: "San Martín",
        },
        {
          code: "TAC",
          name: "Tacna",
        },
        {
          code: "TUM",
          name: "Tumbes",
        },
        {
          code: "UCA",
          name: "Ucayali",
        },
      ],
      subregion: "South America",
    },
    {
      capital: "Manila",
      code2: "PH",
      code3: "PHL",
      name: "Philippines",
      region: "Asia",
      states: [
        {
          code: "14",
          name: "Autonomous Region in Muslim Mindanao",
        },
        {
          code: "05",
          name: "Bicol",
        },
        {
          code: "02",
          name: "Cagayan Valley",
        },
        {
          code: "40",
          name: "Calabarzon",
        },
        {
          code: "13",
          name: "Caraga",
        },
        {
          code: "03",
          name: "Central Luzon",
        },
        {
          code: "07",
          name: "Central Visayas",
        },
        {
          code: "15",
          name: "Cordillera Administrative Region",
        },
        {
          code: "11",
          name: "Davao",
        },
        {
          code: "08",
          name: "Eastern Visayas",
        },
        {
          code: "01",
          name: "Ilocos",
        },
        {
          code: "41",
          name: "Mimaropa",
        },
        {
          code: "00",
          name: "National Capital Region",
        },
        {
          code: "10",
          name: "Northern Mindanao",
        },
        {
          code: "12",
          name: "Soccsksargen",
        },
        {
          code: "06",
          name: "Western Visayas",
        },
        {
          code: "09",
          name: "Zamboanga Peninsula",
        },
      ],
      subregion: "South-Eastern Asia",
    },
    {
      capital: "Adamstown",
      code2: "PN",
      code3: "PCN",
      name: "Pitcairn Islands",
      region: "Oceania",
      subregion: "Polynesia",
    },
    {
      capital: "Warsaw",
      code2: "PL",
      code3: "POL",
      name: "Poland",
      region: "Europe",
      states: [
        {
          code: "DS",
          name: "Dolnośląskie",
        },
        {
          code: "KP",
          name: "Kujawsko-pomorskie",
        },
        {
          code: "LU",
          name: "Lubelskie",
        },
        {
          code: "LB",
          name: "Lubuskie",
        },
        {
          code: "MZ",
          name: "Mazowieckie",
        },
        {
          code: "MA",
          name: "Małopolskie",
        },
        {
          code: "OP",
          name: "Opolskie",
        },
        {
          code: "PK",
          name: "Podkarpackie",
        },
        {
          code: "PD",
          name: "Podlaskie",
        },
        {
          code: "PM",
          name: "Pomorskie",
        },
        {
          code: "WN",
          name: "Warmińsko-mazurskie",
        },
        {
          code: "WP",
          name: "Wielkopolskie",
        },
        {
          code: "ZP",
          name: "Zachodniopomorskie",
        },
        {
          code: "LD",
          name: "Łódzkie",
        },
        {
          code: "SL",
          name: "Śląskie",
        },
        {
          code: "SK",
          name: "Świętokrzyskie",
        },
      ],
      subregion: "Eastern Europe",
    },
    {
      capital: "Lisbon",
      code2: "PT",
      code3: "PRT",
      name: "Portugal",
      region: "Europe",
      states: [
        {
          code: "01",
          name: "Aveiro",
        },
        {
          code: "02",
          name: "Beja",
        },
        {
          code: "03",
          name: "Braga",
        },
        {
          code: "04",
          name: "Bragança",
        },
        {
          code: "05",
          name: "Castelo Branco",
        },
        {
          code: "06",
          name: "Coimbra",
        },
        {
          code: "08",
          name: "Faro",
        },
        {
          code: "09",
          name: "Guarda",
        },
        {
          code: "10",
          name: "Leiria",
        },
        {
          code: "11",
          name: "Lisboa",
        },
        {
          code: "12",
          name: "Portalegre",
        },
        {
          code: "13",
          name: "Porto",
        },
        {
          code: "30",
          name: "Região Autónoma da Madeira",
        },
        {
          code: "20",
          name: "Região Autónoma dos Açores",
        },
        {
          code: "14",
          name: "Santarém",
        },
        {
          code: "15",
          name: "Setúbal",
        },
        {
          code: "16",
          name: "Viana do Castelo",
        },
        {
          code: "17",
          name: "Vila Real",
        },
        {
          code: "18",
          name: "Viseu",
        },
        {
          code: "07",
          name: "Évora",
        },
      ],
      subregion: "Southern Europe",
    },
    {
      capital: "San Juan",
      code2: "PR",
      code3: "PRI",
      name: "Puerto Rico",
      region: "Americas",
      subregion: "Caribbean",
    },
    {
      capital: "Doha",
      code2: "QA",
      code3: "QAT",
      name: "Qatar",
      region: "Asia",
      states: [
        {
          code: "DA",
          name: "Ad Dawḩah",
        },
        {
          code: "KH",
          name: "Al Khawr wa adh Dhakhīrah",
        },
        {
          code: "WA",
          name: "Al Wakrah",
        },
        {
          code: "RA",
          name: "Ar Rayyān",
        },
        {
          code: "MS",
          name: "Ash Shamāl",
        },
        {
          code: "ZA",
          name: "Az̧ Za̧`āyin",
        },
        {
          code: "US",
          name: "Umm Şalāl",
        },
      ],
      subregion: "Western Asia",
    },
    {
      capital: "Pristina",
      code2: "XK",
      code3: "KOS",
      name: "Republic of Kosovo",
      region: "Europe",
      subregion: "Eastern Europe",
    },
    {
      capital: "Saint-Denis",
      code2: "RE",
      code3: "REU",
      name: "Réunion",
      region: "Africa",
      subregion: "Eastern Africa",
    },
    {
      capital: "Bucharest",
      code2: "RO",
      code3: "ROU",
      name: "Romania",
      region: "Europe",
      states: [
        {
          code: "AB",
          name: "Alba",
        },
        {
          code: "AR",
          name: "Arad",
        },
        {
          code: "AG",
          name: "Argeș",
        },
        {
          code: "BC",
          name: "Bacău",
        },
        {
          code: "BH",
          name: "Bihor",
        },
        {
          code: "BN",
          name: "Bistrița-Năsăud",
        },
        {
          code: "BT",
          name: "Botoșani",
        },
        {
          code: "BV",
          name: "Brașov",
        },
        {
          code: "BR",
          name: "Brăila",
        },
        {
          code: "B",
          name: "București",
        },
        {
          code: "BZ",
          name: "Buzău",
        },
        {
          code: "CS",
          name: "Caraș-Severin",
        },
        {
          code: "CJ",
          name: "Cluj",
        },
        {
          code: "CT",
          name: "Constanța",
        },
        {
          code: "CV",
          name: "Covasna",
        },
        {
          code: "CL",
          name: "Călărași",
        },
        {
          code: "DJ",
          name: "Dolj",
        },
        {
          code: "DB",
          name: "Dâmbovița",
        },
        {
          code: "GL",
          name: "Galați",
        },
        {
          code: "GR",
          name: "Giurgiu",
        },
        {
          code: "GJ",
          name: "Gorj",
        },
        {
          code: "HR",
          name: "Harghita",
        },
        {
          code: "HD",
          name: "Hunedoara",
        },
        {
          code: "IL",
          name: "Ialomița",
        },
        {
          code: "IS",
          name: "Iași",
        },
        {
          code: "IF",
          name: "Ilfov",
        },
        {
          code: "MM",
          name: "Maramureș",
        },
        {
          code: "MH",
          name: "Mehedinți",
        },
        {
          code: "MS",
          name: "Mureș",
        },
        {
          code: "NT",
          name: "Neamț",
        },
        {
          code: "OT",
          name: "Olt",
        },
        {
          code: "PH",
          name: "Prahova",
        },
        {
          code: "SM",
          name: "Satu Mare",
        },
        {
          code: "SB",
          name: "Sibiu",
        },
        {
          code: "SV",
          name: "Suceava",
        },
        {
          code: "SJ",
          name: "Sălaj",
        },
        {
          code: "TR",
          name: "Teleorman",
        },
        {
          code: "TM",
          name: "Timiș",
        },
        {
          code: "TL",
          name: "Tulcea",
        },
        {
          code: "VS",
          name: "Vaslui",
        },
        {
          code: "VN",
          name: "Vrancea",
        },
        {
          code: "VL",
          name: "Vâlcea",
        },
      ],
      subregion: "Eastern Europe",
    },
    {
      capital: "Moscow",
      code2: "RU",
      code3: "RUS",
      name: "Russia",
      region: "Europe",
      states: [
        {
          code: "AMU",
          name: "Amurskaya oblast'",
          subdivision: "administrative region",
        },
        {
          code: "ARK",
          name: "Arkhangel'skaya oblast'",
          subdivision: "administrative region",
        },
        {
          code: "AST",
          name: "Astrakhanskaya oblast'",
          subdivision: "administrative region",
        },
        {
          code: "BEL",
          name: "Belgorodskaya oblast'",
          subdivision: "administrative region",
        },
        {
          code: "BRY",
          name: "Bryanskaya oblast'",
          subdivision: "administrative region",
        },
        {
          code: "CHE",
          name: "Chelyabinskaya oblast'",
          subdivision: "administrative region",
        },
        {
          code: "IRK",
          name: "Irkutskaya oblast'",
          subdivision: "administrative region",
        },
        {
          code: "IVA",
          name: "Ivanovskaya oblast'",
          subdivision: "administrative region",
        },
        {
          code: "KGD",
          name: "Kaliningradskaya oblast'",
          subdivision: "administrative region",
        },
        {
          code: "KLU",
          name: "Kaluzhskaya oblast'",
          subdivision: "administrative region",
        },
        {
          code: "KEM",
          name: "Kemerovskaya oblast'",
          subdivision: "administrative region",
        },
        {
          code: "KIR",
          name: "Kirovskaya oblast'",
          subdivision: "administrative region",
        },
        {
          code: "KOS",
          name: "Kostromskaya oblast'",
          subdivision: "administrative region",
        },
        {
          code: "KGN",
          name: "Kurganskaya oblast'",
          subdivision: "administrative region",
        },
        {
          code: "KRS",
          name: "Kurskaya oblast'",
          subdivision: "administrative region",
        },
        {
          code: "LEN",
          name: "Leningradskaya oblast'",
          subdivision: "administrative region",
        },
        {
          code: "LIP",
          name: "Lipetskaya oblast'",
          subdivision: "administrative region",
        },
        {
          code: "MAG",
          name: "Magadanskaya oblast'",
          subdivision: "administrative region",
        },
        {
          code: "MOS",
          name: "Moskovskaya oblast'",
          subdivision: "administrative region",
        },
        {
          code: "MUR",
          name: "Murmanskaya oblast'",
          subdivision: "administrative region",
        },
        {
          code: "NIZ",
          name: "Nizhegorodskaya oblast'",
          subdivision: "administrative region",
        },
        {
          code: "NGR",
          name: "Novgorodskaya oblast'",
          subdivision: "administrative region",
        },
        {
          code: "NVS",
          name: "Novosibirskaya oblast'",
          subdivision: "administrative region",
        },
        {
          code: "OMS",
          name: "Omskaya oblast'",
          subdivision: "administrative region",
        },
        {
          code: "ORE",
          name: "Orenburgskaya oblast'",
          subdivision: "administrative region",
        },
        {
          code: "ORL",
          name: "Orlovskaya oblast'",
          subdivision: "administrative region",
        },
        {
          code: "PNZ",
          name: "Penzenskaya oblast'",
          subdivision: "administrative region",
        },
        {
          code: "PSK",
          name: "Pskovskaya oblast'",
          subdivision: "administrative region",
        },
        {
          code: "ROS",
          name: "Rostovskaya oblast'",
          subdivision: "administrative region",
        },
        {
          code: "RYA",
          name: "Ryazanskaya oblast'",
          subdivision: "administrative region",
        },
        {
          code: "SAK",
          name: "Sakhalinskaya oblast'",
          subdivision: "administrative region",
        },
        {
          code: "SAM",
          name: "Samarskaya oblast'",
          subdivision: "administrative region",
        },
        {
          code: "SAR",
          name: "Saratovskaya oblast'",
          subdivision: "administrative region",
        },
        {
          code: "SMO",
          name: "Smolenskaya oblast'",
          subdivision: "administrative region",
        },
        {
          code: "SVE",
          name: "Sverdlovskaya oblast'",
          subdivision: "administrative region",
        },
        {
          code: "TAM",
          name: "Tambovskaya oblast'",
          subdivision: "administrative region",
        },
        {
          code: "TOM",
          name: "Tomskaya oblast'",
          subdivision: "administrative region",
        },
        {
          code: "TUL",
          name: "Tul'skaya oblast'",
          subdivision: "administrative region",
        },
        {
          code: "TVE",
          name: "Tverskaya oblast'",
          subdivision: "administrative region",
        },
        {
          code: "TYU",
          name: "Tyumenskaya oblast'",
          subdivision: "administrative region",
        },
        {
          code: "ULY",
          name: "Ul'yanovskaya oblast'",
          subdivision: "administrative region",
        },
        {
          code: "VLA",
          name: "Vladimirskaya oblast'",
          subdivision: "administrative region",
        },
        {
          code: "VGG",
          name: "Volgogradskaya oblast'",
          subdivision: "administrative region",
        },
        {
          code: "VLG",
          name: "Vologodskaya oblast'",
          subdivision: "administrative region",
        },
        {
          code: "VOR",
          name: "Voronezhskaya oblast'",
          subdivision: "administrative region",
        },
        {
          code: "YAR",
          name: "Yaroslavskaya oblast'",
          subdivision: "administrative region",
        },
        {
          code: "ALT",
          name: "Altayskiy kray",
          subdivision: "administrative territory",
        },
        {
          code: "KAM",
          name: "Kamchatskiy kray",
          subdivision: "administrative territory",
        },
        {
          code: "KHA",
          name: "Khabarovskiy kray",
          subdivision: "administrative territory",
        },
        {
          code: "KDA",
          name: "Krasnodarskiy kray",
          subdivision: "administrative territory",
        },
        {
          code: "KYA",
          name: "Krasnoyarskiy kray",
          subdivision: "administrative territory",
        },
        {
          code: "PER",
          name: "Permskiy kray",
          subdivision: "administrative territory",
        },
        {
          code: "PRI",
          name: "Primorskiy kray",
          subdivision: "administrative territory",
        },
        {
          code: "STA",
          name: "Stavropol'skiy kray",
          subdivision: "administrative territory",
        },
        {
          code: "ZAB",
          name: "Zabaykal'skiy kray",
          subdivision: "administrative territory",
        },
        {
          code: "MOW",
          name: "Moskva",
          subdivision: "autonomous city",
        },
        {
          code: "SPE",
          name: "Sankt-Peterburg",
          subdivision: "autonomous city",
        },
        {
          code: "CHU",
          name: "Chukotskiy avtonomnyy okrug",
          subdivision: "autonomous district",
        },
        {
          code: "KHM",
          name: "Khanty-Mansiyskiy avtonomnyy okrug-Yugra",
          subdivision: "autonomous district",
        },
        {
          code: "NEN",
          name: "Nenetskiy avtonomnyy okrug",
          subdivision: "autonomous district",
        },
        {
          code: "YAN",
          name: "Yamalo-Nenetskiy avtonomnyy okrug",
          subdivision: "autonomous district",
        },
        {
          code: "YEV",
          name: "Yevreyskaya avtonomnaya oblast'",
          subdivision: "autonomous region",
        },
        {
          code: "AD",
          name: "Adygeya, Respublika",
          subdivision: "republic",
        },
        {
          code: "AL",
          name: "Altay, Respublika",
          subdivision: "republic",
        },
        {
          code: "BA",
          name: "Bashkortostan, Respublika",
          subdivision: "republic",
        },
        {
          code: "BU",
          name: "Buryatiya, Respublika",
          subdivision: "republic",
        },
        {
          code: "CE",
          name: "Chechenskaya Respublika",
          subdivision: "republic",
        },
        {
          code: "CU",
          name: "Chuvashskaya Respublika",
          subdivision: "republic",
        },
        {
          code: "DA",
          name: "Dagestan, Respublika",
          subdivision: "republic",
        },
        {
          code: "IN",
          name: "Ingushetiya, Respublika",
          subdivision: "republic",
        },
        {
          code: "KB",
          name: "Kabardino-Balkarskaya Respublika",
          subdivision: "republic",
        },
        {
          code: "KL",
          name: "Kalmykiya, Respublika",
          subdivision: "republic",
        },
        {
          code: "KC",
          name: "Karachayevo-Cherkesskaya Respublika",
          subdivision: "republic",
        },
        {
          code: "KR",
          name: "Kareliya, Respublika",
          subdivision: "republic",
        },
        {
          code: "KK",
          name: "Khakasiya, Respublika",
          subdivision: "republic",
        },
        {
          code: "KO",
          name: "Komi, Respublika",
          subdivision: "republic",
        },
        {
          code: "ME",
          name: "Mariy El, Respublika",
          subdivision: "republic",
        },
        {
          code: "MO",
          name: "Mordoviya, Respublika",
          subdivision: "republic",
        },
        {
          code: "SA",
          name: "Sakha, Respublika",
          subdivision: "republic",
        },
        {
          code: "SE",
          name: "Severnaya Osetiya-Alaniya, Respublika",
          subdivision: "republic",
        },
        {
          code: "TA",
          name: "Tatarstan, Respublika",
          subdivision: "republic",
        },
        {
          code: "TY",
          name: "Tyva, Respublika",
          subdivision: "republic",
        },
        {
          code: "UD",
          name: "Udmurtskaya Respublika",
          subdivision: "republic",
        },
      ],
      subregion: "Eastern Europe",
    },
    {
      capital: "Kigali",
      code2: "RW",
      code3: "RWA",
      name: "Rwanda",
      region: "Africa",
      states: [
        {
          code: "02",
          name: "Est",
        },
        {
          code: "03",
          name: "Nord",
        },
        {
          code: "04",
          name: "Ouest",
        },
        {
          code: "05",
          name: "Sud",
        },
        {
          code: "01",
          name: "Ville de Kigali",
        },
      ],
      subregion: "Eastern Africa",
    },
    {
      capital: "Gustavia",
      code2: "BL",
      code3: "BLM",
      name: "Saint Barthélemy",
      region: "Americas",
      subregion: "Caribbean",
    },
    {
      capital: "Jamestown",
      code2: "SH",
      code3: "SHN",
      name: "Saint Helena",
      region: "Africa",
      states: [
        {
          code: "AC",
          name: "Ascension",
        },
        {
          code: "HL",
          name: "Saint Helena",
        },
        {
          code: "TA",
          name: "Tristan da Cunha",
        },
      ],
      subregion: "Western Africa",
    },
    {
      capital: "Basseterre",
      code2: "KN",
      code3: "KNA",
      name: "Saint Kitts and Nevis",
      region: "Americas",
      states: [
        {
          code: "N",
          name: "Nevis",
        },
        {
          code: "K",
          name: "Saint Kitts",
        },
      ],
      subregion: "Caribbean",
    },
    {
      capital: "Castries",
      code2: "LC",
      code3: "LCA",
      name: "Saint Lucia",
      region: "Americas",
      states: [
        {
          code: "01",
          name: "Anse la Raye",
        },
        {
          code: "02",
          name: "Castries",
        },
        {
          code: "03",
          name: "Choiseul",
        },
        {
          code: "04",
          name: "Dauphin",
        },
        {
          code: "05",
          name: "Dennery",
        },
        {
          code: "06",
          name: "Gros Islet",
        },
        {
          code: "07",
          name: "Laborie",
        },
        {
          code: "08",
          name: "Micoud",
        },
        {
          code: "09",
          name: "Praslin",
        },
        {
          code: "10",
          name: "Soufrière",
        },
        {
          code: "11",
          name: "Vieux Fort",
        },
      ],
      subregion: "Caribbean",
    },
    {
      capital: "Marigot",
      code2: "MF",
      code3: "MAF",
      name: "Saint Martin",
      region: "Americas",
      subregion: "Caribbean",
    },
    {
      capital: "Saint-Pierre",
      code2: "PM",
      code3: "SPM",
      name: "Saint Pierre and Miquelon",
      region: "Americas",
      subregion: "Northern America",
    },
    {
      capital: "Kingstown",
      code2: "VC",
      code3: "VCT",
      name: "Saint Vincent and the Grenadines",
      region: "Americas",
      states: [
        {
          code: "01",
          name: "Charlotte",
        },
        {
          code: "06",
          name: "Grenadines",
        },
        {
          code: "02",
          name: "Saint Andrew",
        },
        {
          code: "03",
          name: "Saint David",
        },
        {
          code: "04",
          name: "Saint George",
        },
        {
          code: "05",
          name: "Saint Patrick",
        },
      ],
      subregion: "Caribbean",
    },
    {
      capital: "Apia",
      code2: "WS",
      code3: "WSM",
      name: "Samoa",
      region: "Oceania",
      states: [
        {
          code: "AA",
          name: "A'ana",
        },
        {
          code: "AL",
          name: "Aiga-i-le-Tai",
        },
        {
          code: "AT",
          name: "Atua",
        },
        {
          code: "FA",
          name: "Fa'asaleleaga",
        },
        {
          code: "GE",
          name: "Gaga'emauga",
        },
        {
          code: "GI",
          name: "Gagaifomauga",
        },
        {
          code: "PA",
          name: "Palauli",
        },
        {
          code: "SA",
          name: "Satupa'itea",
        },
        {
          code: "TU",
          name: "Tuamasaga",
        },
        {
          code: "VF",
          name: "Va'a-o-Fonoti",
        },
        {
          code: "VS",
          name: "Vaisigano",
        },
      ],
      subregion: "Polynesia",
    },
    {
      capital: "City of San Marino",
      code2: "SM",
      code3: "SMR",
      name: "San Marino",
      region: "Europe",
      states: [
        {
          code: "01",
          name: "Acquaviva",
        },
        {
          code: "06",
          name: "Borgo Maggiore",
        },
        {
          code: "02",
          name: "Chiesanuova",
        },
        {
          code: "03",
          name: "Domagnano",
        },
        {
          code: "04",
          name: "Faetano",
        },
        {
          code: "05",
          name: "Fiorentino",
        },
        {
          code: "08",
          name: "Montegiardino",
        },
        {
          code: "07",
          name: "San Marino",
        },
        {
          code: "09",
          name: "Serravalle",
        },
      ],
      subregion: "Southern Europe",
    },
    {
      capital: "São Tomé",
      code2: "ST",
      code3: "STP",
      name: "São Tomé and Príncipe",
      region: "Africa",
      states: [
        {
          code: "P",
          name: "Príncipe",
        },
        {
          code: "S",
          name: "São Tomé",
        },
      ],
      subregion: "Middle Africa",
    },
    {
      capital: "Riyadh",
      code2: "SA",
      code3: "SAU",
      name: "Saudi Arabia",
      region: "Asia",
      states: [
        {
          code: "11",
          name: "Al Bāḩah",
        },
        {
          code: "12",
          name: "Al Jawf",
        },
        {
          code: "03",
          name: "Al Madīnah",
        },
        {
          code: "05",
          name: "Al Qaşīm",
        },
        {
          code: "08",
          name: "Al Ḩudūd ash Shamālīyah",
        },
        {
          code: "01",
          name: "Ar Riyāḑ",
        },
        {
          code: "04",
          name: "Ash Sharqīyah",
        },
        {
          code: "09",
          name: "Jīzān",
        },
        {
          code: "02",
          name: "Makkah",
        },
        {
          code: "10",
          name: "Najrān",
        },
        {
          code: "07",
          name: "Tabūk",
        },
        {
          code: "14",
          name: "ٰĀsīr",
        },
        {
          code: "06",
          name: "Ḩā'il",
        },
      ],
      subregion: "Western Asia",
    },
    {
      capital: "Dakar",
      code2: "SN",
      code3: "SEN",
      name: "Senegal",
      region: "Africa",
      states: [
        {
          code: "DK",
          name: "Dakar",
        },
        {
          code: "DB",
          name: "Diourbel",
        },
        {
          code: "FK",
          name: "Fatick",
        },
        {
          code: "KA",
          name: "Kaffrine",
        },
        {
          code: "KL",
          name: "Kaolack",
        },
        {
          code: "KD",
          name: "Kolda",
        },
        {
          code: "KE",
          name: "Kédougou",
        },
        {
          code: "LG",
          name: "Louga",
        },
        {
          code: "MT",
          name: "Matam",
        },
        {
          code: "SL",
          name: "Saint-Louis",
        },
        {
          code: "SE",
          name: "Sédhiou",
        },
        {
          code: "TC",
          name: "Tambacounda",
        },
        {
          code: "TH",
          name: "Thiès",
        },
        {
          code: "ZG",
          name: "Ziguinchor",
        },
      ],
      subregion: "Western Africa",
    },
    {
      capital: "Belgrade",
      code2: "RS",
      code3: "SRB",
      name: "Serbia",
      region: "Europe",
      states: [
        {
          code: "KM",
          name: "Kosovo-Metohija",
        },
        {
          code: "VO",
          name: "Vojvodina",
        },
      ],
      subregion: "Southern Europe",
    },
    {
      capital: "Victoria",
      code2: "SC",
      code3: "SYC",
      name: "Seychelles",
      region: "Africa",
      states: [
        {
          code: "02",
          name: "Anse Boileau",
        },
        {
          code: "03",
          name: "Anse Etoile",
        },
        {
          code: "05",
          name: "Anse Royale",
        },
        {
          code: "01",
          name: "Anse aux Pins",
        },
        {
          code: "04",
          name: "Au Cap",
        },
        {
          code: "06",
          name: "Baie Lazare",
        },
        {
          code: "07",
          name: "Baie Sainte Anne",
        },
        {
          code: "08",
          name: "Beau Vallon",
        },
        {
          code: "09",
          name: "Bel Air",
        },
        {
          code: "10",
          name: "Bel Ombre",
        },
        {
          code: "11",
          name: "Cascade",
        },
        {
          code: "16",
          name: "English River",
        },
        {
          code: "12",
          name: "Glacis",
        },
        {
          code: "13",
          name: "Grand Anse Mahe",
        },
        {
          code: "14",
          name: "Grand Anse Praslin",
        },
        {
          code: "15",
          name: "La Digue",
        },
        {
          code: "24",
          name: "Les Mamelles",
        },
        {
          code: "17",
          name: "Mont Buxton",
        },
        {
          code: "18",
          name: "Mont Fleuri",
        },
        {
          code: "19",
          name: "Plaisance",
        },
        {
          code: "20",
          name: "Pointe Larue",
        },
        {
          code: "21",
          name: "Port Glaud",
        },
        {
          code: "25",
          name: "Roche Caiman",
        },
        {
          code: "22",
          name: "Saint Louis",
        },
        {
          code: "23",
          name: "Takamaka",
        },
      ],
      subregion: "Eastern Africa",
    },
    {
      capital: "Freetown",
      code2: "SL",
      code3: "SLE",
      name: "Sierra Leone",
      region: "Africa",
      states: [
        {
          code: "E",
          name: "Eastern",
        },
        {
          code: "N",
          name: "Northern",
        },
        {
          code: "S",
          name: "Southern",
        },
        {
          code: "W",
          name: "Western Area",
        },
      ],
      subregion: "Western Africa",
    },
    {
      capital: "Singapore",
      code2: "SG",
      code3: "SGP",
      name: "Singapore",
      region: "Asia",
      states: [
        {
          code: "01",
          name: "Central Singapore",
        },
        {
          code: "02",
          name: "North East",
        },
        {
          code: "03",
          name: "North West",
        },
        {
          code: "04",
          name: "South East",
        },
        {
          code: "05",
          name: "South West",
        },
      ],
      subregion: "South-Eastern Asia",
    },
    {
      capital: "Philipsburg",
      code2: "SX",
      code3: "SXM",
      name: "Sint Maarten",
      region: "Americas",
      subregion: "Caribbean",
    },
    {
      capital: "Bratislava",
      code2: "SK",
      code3: "SVK",
      name: "Slovakia",
      region: "Europe",
      states: [
        {
          code: "BC",
          name: "Banskobystrický kraj",
        },
        {
          code: "BL",
          name: "Bratislavský kraj",
        },
        {
          code: "KI",
          name: "Košický kraj",
        },
        {
          code: "NI",
          name: "Nitriansky kraj",
        },
        {
          code: "PV",
          name: "Prešovský kraj",
        },
        {
          code: "TC",
          name: "Trenčiansky kraj",
        },
        {
          code: "TA",
          name: "Trnavský kraj",
        },
        {
          code: "ZI",
          name: "Žilinský kraj",
        },
      ],
      subregion: "Eastern Europe",
    },
    {
      capital: "Ljubljana",
      code2: "SI",
      code3: "SVN",
      name: "Slovenia",
      region: "Europe",
      states: [
        {
          code: "001",
          name: "Ajdovščina",
        },
        {
          code: "195",
          name: "Apače",
        },
        {
          code: "002",
          name: "Beltinci",
        },
        {
          code: "148",
          name: "Benedikt",
        },
        {
          code: "149",
          name: "Bistrica ob Sotli",
        },
        {
          code: "003",
          name: "Bled",
        },
        {
          code: "150",
          name: "Bloke",
        },
        {
          code: "004",
          name: "Bohinj",
        },
        {
          code: "005",
          name: "Borovnica",
        },
        {
          code: "006",
          name: "Bovec",
        },
        {
          code: "151",
          name: "Braslovče",
        },
        {
          code: "007",
          name: "Brda",
        },
        {
          code: "008",
          name: "Brezovica",
        },
        {
          code: "009",
          name: "Brežice",
        },
        {
          code: "152",
          name: "Cankova",
        },
        {
          code: "011",
          name: "Celje",
        },
        {
          code: "012",
          name: "Cerklje na Gorenjskem",
        },
        {
          code: "013",
          name: "Cerknica",
        },
        {
          code: "014",
          name: "Cerkno",
        },
        {
          code: "153",
          name: "Cerkvenjak",
        },
        {
          code: "196",
          name: "Cirkulane",
        },
        {
          code: "018",
          name: "Destrnik",
        },
        {
          code: "019",
          name: "Divača",
        },
        {
          code: "154",
          name: "Dobje",
        },
        {
          code: "020",
          name: "Dobrepolje",
        },
        {
          code: "155",
          name: "Dobrna",
        },
        {
          code: "021",
          name: "Dobrova–Polhov Gradec",
        },
        {
          code: "156",
          name: "Dobrovnik",
        },
        {
          code: "022",
          name: "Dol pri Ljubljani",
        },
        {
          code: "157",
          name: "Dolenjske Toplice",
        },
        {
          code: "023",
          name: "Domžale",
        },
        {
          code: "024",
          name: "Dornava",
        },
        {
          code: "025",
          name: "Dravograd",
        },
        {
          code: "026",
          name: "Duplek",
        },
        {
          code: "027",
          name: "Gorenja vas–Poljane",
        },
        {
          code: "028",
          name: "Gorišnica",
        },
        {
          code: "207",
          name: "Gorje",
        },
        {
          code: "029",
          name: "Gornja Radgona",
        },
        {
          code: "030",
          name: "Gornji Grad",
        },
        {
          code: "031",
          name: "Gornji Petrovci",
        },
        {
          code: "158",
          name: "Grad",
        },
        {
          code: "032",
          name: "Grosuplje",
        },
        {
          code: "159",
          name: "Hajdina",
        },
        {
          code: "161",
          name: "Hodoš",
        },
        {
          code: "162",
          name: "Horjul",
        },
        {
          code: "160",
          name: "Hoče–Slivnica",
        },
        {
          code: "034",
          name: "Hrastnik",
        },
        {
          code: "035",
          name: "Hrpelje-Kozina",
        },
        {
          code: "036",
          name: "Idrija",
        },
        {
          code: "037",
          name: "Ig",
        },
        {
          code: "038",
          name: "Ilirska Bistrica",
        },
        {
          code: "039",
          name: "Ivančna Gorica",
        },
        {
          code: "040",
          name: "Izola",
        },
        {
          code: "041",
          name: "Jesenice",
        },
        {
          code: "163",
          name: "Jezersko",
        },
        {
          code: "042",
          name: "Juršinci",
        },
        {
          code: "043",
          name: "Kamnik",
        },
        {
          code: "044",
          name: "Kanal",
        },
        {
          code: "045",
          name: "Kidričevo",
        },
        {
          code: "046",
          name: "Kobarid",
        },
        {
          code: "047",
          name: "Kobilje",
        },
        {
          code: "049",
          name: "Komen",
        },
        {
          code: "164",
          name: "Komenda",
        },
        {
          code: "050",
          name: "Koper",
        },
        {
          code: "197",
          name: "Kosanjevica na Krki",
        },
        {
          code: "165",
          name: "Kostel",
        },
        {
          code: "051",
          name: "Kozje",
        },
        {
          code: "048",
          name: "Kočevje",
        },
        {
          code: "052",
          name: "Kranj",
        },
        {
          code: "053",
          name: "Kranjska Gora",
        },
        {
          code: "166",
          name: "Križevci",
        },
        {
          code: "054",
          name: "Krško",
        },
        {
          code: "055",
          name: "Kungota",
        },
        {
          code: "056",
          name: "Kuzma",
        },
        {
          code: "057",
          name: "Laško",
        },
        {
          code: "058",
          name: "Lenart",
        },
        {
          code: "059",
          name: "Lendava",
        },
        {
          code: "060",
          name: "Litija",
        },
        {
          code: "061",
          name: "Ljubljana",
        },
        {
          code: "062",
          name: "Ljubno",
        },
        {
          code: "063",
          name: "Ljutomer",
        },
        {
          code: "208",
          name: "Log-Dragomer",
        },
        {
          code: "064",
          name: "Logatec",
        },
        {
          code: "167",
          name: "Lovrenc na Pohorju",
        },
        {
          code: "065",
          name: "Loška Dolina",
        },
        {
          code: "066",
          name: "Loški Potok",
        },
        {
          code: "068",
          name: "Lukovica",
        },
        {
          code: "067",
          name: "Luče",
        },
        {
          code: "069",
          name: "Majšperk",
        },
        {
          code: "198",
          name: "Makole",
        },
        {
          code: "070",
          name: "Maribor",
        },
        {
          code: "168",
          name: "Markovci",
        },
        {
          code: "071",
          name: "Medvode",
        },
        {
          code: "072",
          name: "Mengeš",
        },
        {
          code: "073",
          name: "Metlika",
        },
        {
          code: "074",
          name: "Mežica",
        },
        {
          code: "169",
          name: "Miklavž na Dravskem Polju",
        },
        {
          code: "075",
          name: "Miren–Kostanjevica",
        },
        {
          code: "170",
          name: "Mirna Peč",
        },
        {
          code: "076",
          name: "Mislinja",
        },
        {
          code: "199",
          name: "Mokronog–Trebelno",
        },
        {
          code: "078",
          name: "Moravske Toplice",
        },
        {
          code: "077",
          name: "Moravče",
        },
        {
          code: "079",
          name: "Mozirje",
        },
        {
          code: "080",
          name: "Murska Sobota",
        },
        {
          code: "081",
          name: "Muta",
        },
        {
          code: "082",
          name: "Naklo",
        },
        {
          code: "083",
          name: "Nazarje",
        },
        {
          code: "084",
          name: "Nova Gorica",
        },
        {
          code: "085",
          name: "Novo Mesto",
        },
        {
          code: "086",
          name: "Odranci",
        },
        {
          code: "171",
          name: "Oplotnica",
        },
        {
          code: "087",
          name: "Ormož",
        },
        {
          code: "088",
          name: "Osilnica",
        },
        {
          code: "089",
          name: "Pesnica",
        },
        {
          code: "090",
          name: "Piran",
        },
        {
          code: "091",
          name: "Pivka",
        },
        {
          code: "172",
          name: "Podlehnik",
        },
        {
          code: "093",
          name: "Podvelka",
        },
        {
          code: "092",
          name: "Podčetrtek",
        },
        {
          code: "200",
          name: "Poljčane",
        },
        {
          code: "173",
          name: "Polzela",
        },
        {
          code: "094",
          name: "Postojna",
        },
        {
          code: "174",
          name: "Prebold",
        },
        {
          code: "095",
          name: "Preddvor",
        },
        {
          code: "175",
          name: "Prevalje",
        },
        {
          code: "096",
          name: "Ptuj",
        },
        {
          code: "097",
          name: "Puconci",
        },
        {
          code: "100",
          name: "Radenci",
        },
        {
          code: "099",
          name: "Radeče",
        },
        {
          code: "101",
          name: "Radlje ob Dravi",
        },
        {
          code: "102",
          name: "Radovljica",
        },
        {
          code: "103",
          name: "Ravne na Koroškem",
        },
        {
          code: "176",
          name: "Razkrižje",
        },
        {
          code: "098",
          name: "Rače–Fram",
        },
        {
          code: "201",
          name: "Renče-Vogrsko",
        },
        {
          code: "209",
          name: "Rečica ob Savinji",
        },
        {
          code: "104",
          name: "Ribnica",
        },
        {
          code: "177",
          name: "Ribnica na Pohorju",
        },
        {
          code: "107",
          name: "Rogatec",
        },
        {
          code: "106",
          name: "Rogaška Slatina",
        },
        {
          code: "105",
          name: "Rogašovci",
        },
        {
          code: "108",
          name: "Ruše",
        },
        {
          code: "178",
          name: "Selnica ob Dravi",
        },
        {
          code: "109",
          name: "Semič",
        },
        {
          code: "110",
          name: "Sevnica",
        },
        {
          code: "111",
          name: "Sežana",
        },
        {
          code: "112",
          name: "Slovenj Gradec",
        },
        {
          code: "113",
          name: "Slovenska Bistrica",
        },
        {
          code: "114",
          name: "Slovenske Konjice",
        },
        {
          code: "179",
          name: "Sodražica",
        },
        {
          code: "180",
          name: "Solčava",
        },
        {
          code: "202",
          name: "Središče ob Dravi",
        },
        {
          code: "115",
          name: "Starše",
        },
        {
          code: "203",
          name: "Straža",
        },
        {
          code: "181",
          name: "Sveta Ana",
        },
        {
          code: "204",
          name: "Sveta Trojica v Slovenskih Goricah",
        },
        {
          code: "182",
          name: "Sveti Andraž v Slovenskih Goricah",
        },
        {
          code: "116",
          name: "Sveti Jurij",
        },
        {
          code: "210",
          name: "Sveti Jurij v Slovenskih Goricah",
        },
        {
          code: "205",
          name: "Sveti Tomaž",
        },
        {
          code: "184",
          name: "Tabor",
        },
        {
          code: "010",
          name: "Tišina",
        },
        {
          code: "128",
          name: "Tolmin",
        },
        {
          code: "129",
          name: "Trbovlje",
        },
        {
          code: "130",
          name: "Trebnje",
        },
        {
          code: "185",
          name: "Trnovska Vas",
        },
        {
          code: "186",
          name: "Trzin",
        },
        {
          code: "131",
          name: "Tržič",
        },
        {
          code: "132",
          name: "Turnišče",
        },
        {
          code: "133",
          name: "Velenje",
        },
        {
          code: "187",
          name: "Velika Polana",
        },
        {
          code: "134",
          name: "Velike Lašče",
        },
        {
          code: "188",
          name: "Veržej",
        },
        {
          code: "135",
          name: "Videm",
        },
        {
          code: "136",
          name: "Vipava",
        },
        {
          code: "137",
          name: "Vitanje",
        },
        {
          code: "138",
          name: "Vodice",
        },
        {
          code: "139",
          name: "Vojnik",
        },
        {
          code: "189",
          name: "Vransko",
        },
        {
          code: "140",
          name: "Vrhnika",
        },
        {
          code: "141",
          name: "Vuzenica",
        },
        {
          code: "142",
          name: "Zagorje ob Savi",
        },
        {
          code: "143",
          name: "Zavrč",
        },
        {
          code: "144",
          name: "Zreče",
        },
        {
          code: "015",
          name: "Črenšovci",
        },
        {
          code: "016",
          name: "Črna na Koroškem",
        },
        {
          code: "017",
          name: "Črnomelj",
        },
        {
          code: "033",
          name: "Šalovci",
        },
        {
          code: "183",
          name: "Šempeter–Vrtojba",
        },
        {
          code: "118",
          name: "Šentilj",
        },
        {
          code: "119",
          name: "Šentjernej",
        },
        {
          code: "120",
          name: "Šentjur",
        },
        {
          code: "211",
          name: "Šentrupert",
        },
        {
          code: "117",
          name: "Šenčur",
        },
        {
          code: "121",
          name: "Škocjan",
        },
        {
          code: "122",
          name: "Škofja Loka",
        },
        {
          code: "123",
          name: "Škofljica",
        },
        {
          code: "124",
          name: "Šmarje pri Jelšah",
        },
        {
          code: "206",
          name: "Šmarješke Toplice",
        },
        {
          code: "125",
          name: "Šmartno ob Paki",
        },
        {
          code: "194",
          name: "Šmartno pri Litiji",
        },
        {
          code: "126",
          name: "Šoštanj",
        },
        {
          code: "127",
          name: "Štore",
        },
        {
          code: "190",
          name: "Žalec",
        },
        {
          code: "146",
          name: "Železniki",
        },
        {
          code: "191",
          name: "Žetale",
        },
        {
          code: "147",
          name: "Žiri",
        },
        {
          code: "192",
          name: "Žirovnica",
        },
        {
          code: "193",
          name: "Žužemberk",
        },
      ],
      subregion: "Southern Europe",
    },
    {
      capital: "Honiara",
      code2: "SB",
      code3: "SLB",
      name: "Solomon Islands",
      region: "Oceania",
      states: [
        {
          code: "CT",
          name: "Capital Territory",
        },
        {
          code: "CE",
          name: "Central",
        },
        {
          code: "CH",
          name: "Choiseul",
        },
        {
          code: "GU",
          name: "Guadalcanal",
        },
        {
          code: "IS",
          name: "Isabel",
        },
        {
          code: "MK",
          name: "Makira-Ulawa",
        },
        {
          code: "ML",
          name: "Malaita",
        },
        {
          code: "RB",
          name: "Rennell and Bellona",
        },
        {
          code: "TE",
          name: "Temotu",
        },
        {
          code: "WE",
          name: "Western",
        },
      ],
      subregion: "Melanesia",
    },
    {
      capital: "Mogadishu",
      code2: "SO",
      code3: "SOM",
      name: "Somalia",
      region: "Africa",
      states: [
        {
          code: "AW",
          name: "Awdal",
        },
        {
          code: "BK",
          name: "Bakool",
        },
        {
          code: "BN",
          name: "Banaadir",
        },
        {
          code: "BR",
          name: "Bari",
        },
        {
          code: "BY",
          name: "Bay",
        },
        {
          code: "GA",
          name: "Galguduud",
        },
        {
          code: "GE",
          name: "Gedo",
        },
        {
          code: "HI",
          name: "Hiiraan",
        },
        {
          code: "JD",
          name: "Jubbada Dhexe",
        },
        {
          code: "JH",
          name: "Jubbada Hoose",
        },
        {
          code: "MU",
          name: "Mudug",
        },
        {
          code: "NU",
          name: "Nugaal",
        },
        {
          code: "SA",
          name: "Sanaag",
        },
        {
          code: "SD",
          name: "Shabeellaha Dhexe",
        },
        {
          code: "SH",
          name: "Shabeellaha Hoose",
        },
        {
          code: "SO",
          name: "Sool",
        },
        {
          code: "TO",
          name: "Togdheer",
        },
        {
          code: "WO",
          name: "Woqooyi Galbeed",
        },
      ],
      subregion: "Eastern Africa",
    },
    {
      capital: "Pretoria",
      code2: "ZA",
      code3: "ZAF",
      name: "South Africa",
      region: "Africa",
      states: [
        {
          code: "EC",
          name: "Eastern Cape",
        },
        {
          code: "FS",
          name: "Free State",
        },
        {
          code: "GT",
          name: "Gauteng",
        },
        {
          code: "NL",
          name: "KwaZulu-Natal",
        },
        {
          code: "LP",
          name: "Limpopo",
        },
        {
          code: "MP",
          name: "Mpumalanga",
        },
        {
          code: "NW",
          name: "North West",
        },
        {
          code: "NC",
          name: "Northern Cape",
        },
        {
          code: "WC",
          name: "Western Cape",
        },
      ],
      subregion: "Southern Africa",
    },
    {
      capital: "King Edward Point",
      code2: "GS",
      code3: "SGS",
      name: "South Georgia",
      region: "Americas",
      subregion: "South America",
    },
    {
      capital: "Seoul",
      code2: "KR",
      code3: "KOR",
      name: "South Korea",
      region: "Asia",
      states: [
        {
          code: "26",
          name: "Busan-gwangyeoksi",
        },
        {
          code: "43",
          name: "Chungcheongbuk-do",
        },
        {
          code: "44",
          name: "Chungcheongnam-do",
        },
        {
          code: "27",
          name: "Daegu-gwangyeoksi",
        },
        {
          code: "30",
          name: "Daejeon-gwangyeoksi",
        },
        {
          code: "42",
          name: "Gangwon-do",
        },
        {
          code: "29",
          name: "Gwangju-gwangyeoksi",
        },
        {
          code: "41",
          name: "Gyeonggi-do",
        },
        {
          code: "47",
          name: "Gyeongsangbuk-do",
        },
        {
          code: "48",
          name: "Gyeongsangnam-do",
        },
        {
          code: "28",
          name: "Incheon-gwangyeoksi",
        },
        {
          code: "49",
          name: "Jeju-teukbyeoljachido",
        },
        {
          code: "45",
          name: "Jeollabuk-do",
        },
        {
          code: "46",
          name: "Jeollanam-do",
        },
        {
          code: "50",
          name: "Sejong",
        },
        {
          code: "11",
          name: "Seoul-teukbyeolsi",
        },
        {
          code: "31",
          name: "Ulsan-gwangyeoksi",
        },
      ],
      subregion: "Eastern Asia",
    },
    {
      capital: "Juba",
      code2: "SS",
      code3: "SSD",
      name: "South Sudan",
      region: "Africa",
      states: [
        {
          code: "EC",
          name: "Central Equatoria",
        },
        {
          code: "EE",
          name: "Eastern Equatoria",
        },
        {
          code: "JG",
          name: "Jonglei",
        },
        {
          code: "LK",
          name: "Lakes",
        },
        {
          code: "BN",
          name: "Northern Bahr el Ghazal",
        },
        {
          code: "UY",
          name: "Unity",
        },
        {
          code: "NU",
          name: "Upper Nile",
        },
        {
          code: "WR",
          name: "Warrap",
        },
        {
          code: "BW",
          name: "Western Bahr el Ghazal",
        },
        {
          code: "EW",
          name: "Western Equatoria",
        },
      ],
      subregion: "Middle Africa",
    },
    {
      capital: "Madrid",
      code2: "ES",
      code3: "ESP",
      name: "Spain",
      region: "Europe",
      states: [
        {
          code: "C",
          name: "A Coruña",
          subdivision: "Province",
        },
        {
          code: "AB",
          name: "Albacete",
          subdivision: "Province",
        },
        {
          code: "A",
          name: "Alicante",
          subdivision: "Province",
        },
        {
          code: "AL",
          name: "Almería",
          subdivision: "Province",
        },
        {
          code: "O",
          name: "Asturias",
          subdivision: "Province",
        },
        {
          code: "BA",
          name: "Badajoz",
          subdivision: "Province",
        },
        {
          code: "PM",
          name: "Balears",
          subdivision: "Province",
        },
        {
          code: "B",
          name: "Barcelona",
          subdivision: "Province",
        },
        {
          code: "BU",
          name: "Burgos",
          subdivision: "Province",
        },
        {
          code: "S",
          name: "Cantabria",
          subdivision: "Province",
        },
        {
          code: "CS",
          name: "Castellón",
          subdivision: "Province",
        },
        {
          code: "CR",
          name: "Ciudad Real",
          subdivision: "Province",
        },
        {
          code: "CU",
          name: "Cuenca",
          subdivision: "Province",
        },
        {
          code: "CC",
          name: "Cáceres",
          subdivision: "Province",
        },
        {
          code: "CA",
          name: "Cádiz",
          subdivision: "Province",
        },
        {
          code: "CO",
          name: "Córdoba",
          subdivision: "Province",
        },
        {
          code: "GI",
          name: "Girona",
          subdivision: "Province",
        },
        {
          code: "GR",
          name: "Granada",
          subdivision: "Province",
        },
        {
          code: "GU",
          name: "Guadalajara",
          subdivision: "Province",
        },
        {
          code: "SS",
          name: "Guipúzcoa",
          subdivision: "Province",
        },
        {
          code: "H",
          name: "Huelva",
          subdivision: "Province",
        },
        {
          code: "HU",
          name: "Huesca",
          subdivision: "Province",
        },
        {
          code: "J",
          name: "Jaén",
          subdivision: "Province",
        },
        {
          code: "LO",
          name: "La Rioja",
          subdivision: "Province",
        },
        {
          code: "GC",
          name: "Las Palmas",
          subdivision: "Province",
        },
        {
          code: "LE",
          name: "León",
          subdivision: "Province",
        },
        {
          code: "L",
          name: "Lleida",
          subdivision: "Province",
        },
        {
          code: "LU",
          name: "Lugo",
          subdivision: "Province",
        },
        {
          code: "M",
          name: "Madrid",
          subdivision: "Province",
        },
        {
          code: "MU",
          name: "Murcia",
          subdivision: "Province",
        },
        {
          code: "MA",
          name: "Málaga",
          subdivision: "Province",
        },
        {
          code: "NA",
          name: "Navarra",
          subdivision: "Province",
        },
        {
          code: "OR",
          name: "Ourense",
          subdivision: "Province",
        },
        {
          code: "P",
          name: "Palencia",
          subdivision: "Province",
        },
        {
          code: "PO",
          name: "Pontevedra",
          subdivision: "Province",
        },
        {
          code: "SA",
          name: "Salamanca",
          subdivision: "Province",
        },
        {
          code: "TF",
          name: "Santa Cruz de Tenerife",
          subdivision: "Province",
        },
        {
          code: "SG",
          name: "Segovia",
          subdivision: "Province",
        },
        {
          code: "SE",
          name: "Sevilla",
          subdivision: "Province",
        },
        {
          code: "SO",
          name: "Soria",
          subdivision: "Province",
        },
        {
          code: "T",
          name: "Tarragona",
          subdivision: "Province",
        },
        {
          code: "TE",
          name: "Teruel",
          subdivision: "Province",
        },
        {
          code: "TO",
          name: "Toledo",
          subdivision: "Province",
        },
        {
          code: "V",
          name: "Valencia",
          subdivision: "Province",
        },
        {
          code: "VA",
          name: "Valladolid",
          subdivision: "Province",
        },
        {
          code: "BI",
          name: "Vizcaya",
          subdivision: "Province",
        },
        {
          code: "ZA",
          name: "Zamora",
          subdivision: "Province",
        },
        {
          code: "Z",
          name: "Zaragoza",
          subdivision: "Province",
        },
        {
          code: "VI",
          name: "Álava",
          subdivision: "Province",
        },
        {
          code: "AV",
          name: "Ávila",
          subdivision: "Province",
        },
        {
          code: "CE",
          name: "Ceuta",
          subdivision: "autonomous city in North Africa",
        },
        {
          code: "ML",
          name: "Melilla",
          subdivision: "autonomous city in North Africa",
        },
        {
          code: "AN",
          name: "Andalucía",
          subdivision: "autonomous community",
        },
        {
          code: "AR",
          name: "Aragón",
          subdivision: "autonomous community",
        },
        {
          code: "AS",
          name: "Asturias, Principado de",
          subdivision: "autonomous community",
        },
        {
          code: "CN",
          name: "Canarias",
          subdivision: "autonomous community",
        },
        {
          code: "CB",
          name: "Cantabria",
          subdivision: "autonomous community",
        },
        {
          code: "CL",
          name: "Castilla y León",
          subdivision: "autonomous community",
        },
        {
          code: "CM",
          name: "Castilla-La Mancha",
          subdivision: "autonomous community",
        },
        {
          code: "CT",
          name: "Catalunya",
          subdivision: "autonomous community",
        },
        {
          code: "EX",
          name: "Extremadura",
          subdivision: "autonomous community",
        },
        {
          code: "GA",
          name: "Galicia",
          subdivision: "autonomous community",
        },
        {
          code: "IB",
          name: "Illes Balears",
          subdivision: "autonomous community",
        },
        {
          code: "RI",
          name: "La Rioja",
          subdivision: "autonomous community",
        },
        {
          code: "MD",
          name: "Madrid, Comunidad de",
          subdivision: "autonomous community",
        },
        {
          code: "MC",
          name: "Murcia, Región de",
          subdivision: "autonomous community",
        },
        {
          code: "NC",
          name: "Navarra, Comunidad Foral de",
          subdivision: "autonomous community",
        },
        {
          code: "PV",
          name: "País Vasco",
          subdivision: "autonomous community",
        },
        {
          code: "VC",
          name: "Valenciana, Comunidad",
          subdivision: "autonomous community",
        },
      ],
      subregion: "Southern Europe",
    },
    {
      capital: "Colombo",
      code2: "LK",
      code3: "LKA",
      name: "Sri Lanka",
      region: "Asia",
      states: [
        {
          code: "2",
          name: "Central Province",
        },
        {
          code: "5",
          name: "Eastern Province",
        },
        {
          code: "7",
          name: "North Central Province",
        },
        {
          code: "6",
          name: "North Western Province",
        },
        {
          code: "4",
          name: "Northern Province",
        },
        {
          code: "9",
          name: "Sabaragamuwa Province",
        },
        {
          code: "3",
          name: "Southern Province",
        },
        {
          code: "8",
          name: "Uva Province",
        },
        {
          code: "1",
          name: "Western Province",
        },
      ],
      subregion: "Southern Asia",
    },
    {
      capital: "Khartoum",
      code2: "SD",
      code3: "SDN",
      name: "Sudan",
      region: "Africa",
      states: [
        {
          code: "RS",
          name: "Al Baḩr al Aḩmar",
        },
        {
          code: "GZ",
          name: "Al Jazīrah",
        },
        {
          code: "KH",
          name: "Al Kharţūm",
        },
        {
          code: "GD",
          name: "Al Qaḑārif",
        },
        {
          code: "NR",
          name: "An Nīl",
        },
        {
          code: "NW",
          name: "An Nīl al Abyaḑ",
        },
        {
          code: "NB",
          name: "An Nīl al Azraq",
        },
        {
          code: "NO",
          name: "Ash Shamālīyah",
        },
        {
          code: "DW",
          name: "Gharb Dārfūr",
        },
        {
          code: "DS",
          name: "Janūb Dārfūr",
        },
        {
          code: "KS",
          name: "Janūb Kurdufān",
        },
        {
          code: "KA",
          name: "Kassalā",
        },
        {
          code: "DN",
          name: "Shamāl Dārfūr",
        },
        {
          code: "KN",
          name: "Shamāl Kurdufān",
        },
        {
          code: "DE",
          name: "Sharq Dārfūr",
        },
        {
          code: "SI",
          name: "Sinnār",
        },
        {
          code: "DC",
          name: "Zalingei",
        },
      ],
      subregion: "Northern Africa",
    },
    {
      capital: "Paramaribo",
      code2: "SR",
      code3: "SUR",
      name: "Suriname",
      region: "Americas",
      states: [
        {
          code: "BR",
          name: "Brokopondo",
        },
        {
          code: "CM",
          name: "Commewijne",
        },
        {
          code: "CR",
          name: "Coronie",
        },
        {
          code: "MA",
          name: "Marowijne",
        },
        {
          code: "NI",
          name: "Nickerie",
        },
        {
          code: "PR",
          name: "Para",
        },
        {
          code: "PM",
          name: "Paramaribo",
        },
        {
          code: "SA",
          name: "Saramacca",
        },
        {
          code: "SI",
          name: "Sipaliwini",
        },
        {
          code: "WA",
          name: "Wanica",
        },
      ],
      subregion: "South America",
    },
    {
      capital: "Longyearbyen",
      code2: "SJ",
      code3: "SJM",
      name: "Svalbard and Jan Mayen",
      region: "Europe",
      subregion: "Northern Europe",
    },
    {
      capital: "Lobamba",
      code2: "SZ",
      code3: "SWZ",
      name: "Swaziland",
      region: "Africa",
      states: [
        {
          code: "HH",
          name: "Hhohho",
        },
        {
          code: "LU",
          name: "Lubombo",
        },
        {
          code: "MA",
          name: "Manzini",
        },
        {
          code: "SH",
          name: "Shiselweni",
        },
      ],
      subregion: "Southern Africa",
    },
    {
      capital: "Stockholm",
      code2: "SE",
      code3: "SWE",
      name: "Sweden",
      region: "Europe",
      states: [
        {
          code: "K",
          name: "Blekinge län",
        },
        {
          code: "W",
          name: "Dalarnas län",
        },
        {
          code: "I",
          name: "Gotlands län",
        },
        {
          code: "X",
          name: "Gävleborgs län",
        },
        {
          code: "N",
          name: "Hallands län",
        },
        {
          code: "Z",
          name: "Jämtlands län",
        },
        {
          code: "F",
          name: "Jönköpings län",
        },
        {
          code: "H",
          name: "Kalmar län",
        },
        {
          code: "G",
          name: "Kronobergs län",
        },
        {
          code: "BD",
          name: "Norrbottens län",
        },
        {
          code: "M",
          name: "Skåne län",
        },
        {
          code: "AB",
          name: "Stockholms län",
        },
        {
          code: "D",
          name: "Södermanlands län",
        },
        {
          code: "C",
          name: "Uppsala län",
        },
        {
          code: "S",
          name: "Värmlands län",
        },
        {
          code: "AC",
          name: "Västerbottens län",
        },
        {
          code: "Y",
          name: "Västernorrlands län",
        },
        {
          code: "U",
          name: "Västmanlands län",
        },
        {
          code: "O",
          name: "Västra Götalands län",
        },
        {
          code: "T",
          name: "Örebro län",
        },
        {
          code: "E",
          name: "Östergötlands län",
        },
      ],
      subregion: "Northern Europe",
    },
    {
      capital: "Bern",
      code2: "CH",
      code3: "CHE",
      name: "Switzerland",
      region: "Europe",
      states: [
        {
          code: "AG",
          name: "Aargau",
        },
        {
          code: "AR",
          name: "Appenzell Ausserrhoden",
        },
        {
          code: "AI",
          name: "Appenzell Innerrhoden",
        },
        {
          code: "BL",
          name: "Basel-Landschaft",
        },
        {
          code: "BS",
          name: "Basel-Stadt",
        },
        {
          code: "BE",
          name: "Bern",
        },
        {
          code: "FR",
          name: "Fribourg",
        },
        {
          code: "GE",
          name: "Genève",
        },
        {
          code: "GL",
          name: "Glarus",
        },
        {
          code: "GR",
          name: "Graubünden",
        },
        {
          code: "JU",
          name: "Jura",
        },
        {
          code: "LU",
          name: "Luzern",
        },
        {
          code: "NE",
          name: "Neuchâtel",
        },
        {
          code: "NW",
          name: "Nidwalden",
        },
        {
          code: "OW",
          name: "Obwalden",
        },
        {
          code: "SG",
          name: "Sankt Gallen",
        },
        {
          code: "SH",
          name: "Schaffhausen",
        },
        {
          code: "SZ",
          name: "Schwyz",
        },
        {
          code: "SO",
          name: "Solothurn",
        },
        {
          code: "TG",
          name: "Thurgau",
        },
        {
          code: "TI",
          name: "Ticino",
        },
        {
          code: "UR",
          name: "Uri",
        },
        {
          code: "VS",
          name: "Valais",
        },
        {
          code: "VD",
          name: "Vaud",
        },
        {
          code: "ZG",
          name: "Zug",
        },
        {
          code: "ZH",
          name: "Zürich",
        },
      ],
      subregion: "Western Europe",
    },
    {
      capital: "Damascus",
      code2: "SY",
      code3: "SYR",
      name: "Syria",
      region: "Asia",
      states: [
        {
          code: "LA",
          name: "Al Lādhiqīyah",
        },
        {
          code: "QU",
          name: "Al Qunayţirah",
        },
        {
          code: "HA",
          name: "Al Ḩasakah",
        },
        {
          code: "RA",
          name: "Ar Raqqah",
        },
        {
          code: "SU",
          name: "As Suwaydā'",
        },
        {
          code: "DR",
          name: "Darٰā",
        },
        {
          code: "DY",
          name: "Dayr az Zawr",
        },
        {
          code: "DI",
          name: "Dimashq",
        },
        {
          code: "ID",
          name: "Idlib",
        },
        {
          code: "RD",
          name: "Rīf Dimashq",
        },
        {
          code: "TA",
          name: "Ţarţūs",
        },
        {
          code: "HL",
          name: "Ḩalab",
        },
        {
          code: "HM",
          name: "Ḩamāh",
        },
        {
          code: "HI",
          name: "Ḩimş",
        },
      ],
      subregion: "Western Asia",
    },
    {
      capital: "Taipei",
      code2: "TW",
      code3: "TWN",
      name: "Taiwan",
      region: "Asia",
      states: [
        {
          code: "CHA",
          name: "Changhua",
        },
        {
          code: "CYQ",
          name: "Chiayi",
        },
        {
          code: "CYI",
          name: "Chiayi",
        },
        {
          code: "HSZ",
          name: "Hsinchu",
        },
        {
          code: "HSQ",
          name: "Hsinchu",
        },
        {
          code: "HUA",
          name: "Hualien",
        },
        {
          code: "ILA",
          name: "Ilan",
        },
        {
          code: "KHQ",
          name: "Kaohsiung",
        },
        {
          code: "KHH",
          name: "Kaohsiung",
        },
        {
          code: "KEE",
          name: "Keelung",
        },
        {
          code: "MIA",
          name: "Miaoli",
        },
        {
          code: "NAN",
          name: "Nantou",
        },
        {
          code: "PEN",
          name: "Penghu",
        },
        {
          code: "PIF",
          name: "Pingtung",
        },
        {
          code: "TXG",
          name: "Taichung",
        },
        {
          code: "TXQ",
          name: "Taichung",
        },
        {
          code: "TNN",
          name: "Tainan",
        },
        {
          code: "TNQ",
          name: "Tainan",
        },
        {
          code: "TPE",
          name: "Taipei",
        },
        {
          code: "TPQ",
          name: "Taipei",
        },
        {
          code: "TTT",
          name: "Taitung",
        },
        {
          code: "TAO",
          name: "Taoyuan",
        },
        {
          code: "YUN",
          name: "Yunlin",
        },
      ],
      subregion: "Eastern Asia",
    },
    {
      capital: "Dushanbe",
      code2: "TJ",
      code3: "TJK",
      name: "Tajikistan",
      region: "Asia",
      states: [
        {
          code: "DU",
          name: "Dushanbe",
        },
        {
          code: "KT",
          name: "Khatlon",
        },
        {
          code: "GB",
          name: "Kŭhistoni Badakhshon",
        },
        {
          code: "SU",
          name: "Sughd",
        },
      ],
      subregion: "Central Asia",
    },
    {
      capital: "Dodoma",
      code2: "TZ",
      code3: "TZA",
      name: "Tanzania",
      region: "Africa",
      states: [
        {
          code: "01",
          name: "Arusha",
        },
        {
          code: "02",
          name: "Dar es Salaam",
        },
        {
          code: "03",
          name: "Dodoma",
        },
        {
          code: "04",
          name: "Iringa",
        },
        {
          code: "05",
          name: "Kagera",
        },
        {
          code: "06",
          name: "Kaskazini Pemba",
        },
        {
          code: "07",
          name: "Kaskazini Unguja",
        },
        {
          code: "08",
          name: "Kigoma",
        },
        {
          code: "09",
          name: "Kilimanjaro",
        },
        {
          code: "10",
          name: "Kusini Pemba",
        },
        {
          code: "11",
          name: "Kusini Unguja",
        },
        {
          code: "12",
          name: "Lindi",
        },
        {
          code: "26",
          name: "Manyara",
        },
        {
          code: "13",
          name: "Mara",
        },
        {
          code: "14",
          name: "Mbeya",
        },
        {
          code: "15",
          name: "Mjini Magharibi",
        },
        {
          code: "16",
          name: "Morogoro",
        },
        {
          code: "17",
          name: "Mtwara",
        },
        {
          code: "18",
          name: "Mwanza",
        },
        {
          code: "19",
          name: "Pwani",
        },
        {
          code: "20",
          name: "Rukwa",
        },
        {
          code: "21",
          name: "Ruvuma",
        },
        {
          code: "22",
          name: "Shinyanga",
        },
        {
          code: "23",
          name: "Singida",
        },
        {
          code: "24",
          name: "Tabora",
        },
        {
          code: "25",
          name: "Tanga",
        },
      ],
      subregion: "Eastern Africa",
    },
    {
      capital: "Bangkok",
      code2: "TH",
      code3: "THA",
      name: "Thailand",
      region: "Asia",
      states: [
        {
          code: "37",
          name: "Amnat Charoen",
        },
        {
          code: "15",
          name: "Ang Thong",
        },
        {
          code: "38",
          name: "Bueng Kan",
        },
        {
          code: "31",
          name: "Buri Ram",
        },
        {
          code: "24",
          name: "Chachoengsao",
        },
        {
          code: "18",
          name: "Chai Nat",
        },
        {
          code: "36",
          name: "Chaiyaphum",
        },
        {
          code: "22",
          name: "Chanthaburi",
        },
        {
          code: "50",
          name: "Chiang Mai",
        },
        {
          code: "57",
          name: "Chiang Rai",
        },
        {
          code: "20",
          name: "Chon Buri",
        },
        {
          code: "86",
          name: "Chumphon",
        },
        {
          code: "46",
          name: "Kalasin",
        },
        {
          code: "62",
          name: "Kamphaeng Phet",
        },
        {
          code: "71",
          name: "Kanchanaburi",
        },
        {
          code: "40",
          name: "Khon Kaen",
        },
        {
          code: "81",
          name: "Krabi",
        },
        {
          code: "10",
          name: "Krung Thep Maha Nakhon",
        },
        {
          code: "52",
          name: "Lampang",
        },
        {
          code: "51",
          name: "Lamphun",
        },
        {
          code: "42",
          name: "Loei",
        },
        {
          code: "16",
          name: "Lop Buri",
        },
        {
          code: "58",
          name: "Mae Hong Son",
        },
        {
          code: "44",
          name: "Maha Sarakham",
        },
        {
          code: "49",
          name: "Mukdahan",
        },
        {
          code: "26",
          name: "Nakhon Nayok",
        },
        {
          code: "73",
          name: "Nakhon Pathom",
        },
        {
          code: "48",
          name: "Nakhon Phanom",
        },
        {
          code: "30",
          name: "Nakhon Ratchasima",
        },
        {
          code: "60",
          name: "Nakhon Sawan",
        },
        {
          code: "80",
          name: "Nakhon Si Thammarat",
        },
        {
          code: "55",
          name: "Nan",
        },
        {
          code: "96",
          name: "Narathiwat",
        },
        {
          code: "39",
          name: "Nong Bua Lam Phu",
        },
        {
          code: "43",
          name: "Nong Khai",
        },
        {
          code: "12",
          name: "Nonthaburi",
        },
        {
          code: "13",
          name: "Pathum Thani",
        },
        {
          code: "94",
          name: "Pattani",
        },
        {
          code: "82",
          name: "Phangnga",
        },
        {
          code: "93",
          name: "Phatthalung",
        },
        {
          code: "S",
          name: "Phatthaya",
        },
        {
          code: "56",
          name: "Phayao",
        },
        {
          code: "67",
          name: "Phetchabun",
        },
        {
          code: "76",
          name: "Phetchaburi",
        },
        {
          code: "66",
          name: "Phichit",
        },
        {
          code: "65",
          name: "Phitsanulok",
        },
        {
          code: "14",
          name: "Phra Nakhon Si Ayutthaya",
        },
        {
          code: "54",
          name: "Phrae",
        },
        {
          code: "83",
          name: "Phuket",
        },
        {
          code: "25",
          name: "Prachin Buri",
        },
        {
          code: "77",
          name: "Prachuap Khiri Khan",
        },
        {
          code: "85",
          name: "Ranong",
        },
        {
          code: "70",
          name: "Ratchaburi",
        },
        {
          code: "21",
          name: "Rayong",
        },
        {
          code: "45",
          name: "Roi Et",
        },
        {
          code: "27",
          name: "Sa Kaeo",
        },
        {
          code: "47",
          name: "Sakon Nakhon",
        },
        {
          code: "11",
          name: "Samut Prakan",
        },
        {
          code: "74",
          name: "Samut Sakhon",
        },
        {
          code: "75",
          name: "Samut Songkhram",
        },
        {
          code: "19",
          name: "Saraburi",
        },
        {
          code: "91",
          name: "Satun",
        },
        {
          code: "33",
          name: "Si Sa Ket",
        },
        {
          code: "17",
          name: "Sing Buri",
        },
        {
          code: "90",
          name: "Songkhla",
        },
        {
          code: "64",
          name: "Sukhothai",
        },
        {
          code: "72",
          name: "Suphan Buri",
        },
        {
          code: "84",
          name: "Surat Thani",
        },
        {
          code: "32",
          name: "Surin",
        },
        {
          code: "63",
          name: "Tak",
        },
        {
          code: "92",
          name: "Trang",
        },
        {
          code: "23",
          name: "Trat",
        },
        {
          code: "34",
          name: "Ubon Ratchathani",
        },
        {
          code: "41",
          name: "Udon Thani",
        },
        {
          code: "61",
          name: "Uthai Thani",
        },
        {
          code: "53",
          name: "Uttaradit",
        },
        {
          code: "95",
          name: "Yala",
        },
        {
          code: "35",
          name: "Yasothon",
        },
      ],
      subregion: "South-Eastern Asia",
    },
    {
      capital: "Dili",
      code2: "TL",
      code3: "TLS",
      name: "East Timor",
      region: "Asia",
      states: [
        {
          code: "AL",
          name: "Aileu",
        },
        {
          code: "AN",
          name: "Ainaro",
        },
        {
          code: "BA",
          name: "Baucau",
        },
        {
          code: "BO",
          name: "Bobonaro",
        },
        {
          code: "CO",
          name: "Cova Lima",
        },
        {
          code: "DI",
          name: "Díli",
        },
        {
          code: "ER",
          name: "Ermera",
        },
        {
          code: "LA",
          name: "Lautem",
        },
        {
          code: "LI",
          name: "Liquiça",
        },
        {
          code: "MT",
          name: "Manatuto",
        },
        {
          code: "MF",
          name: "Manufahi",
        },
        {
          code: "OE",
          name: "Oecussi",
        },
        {
          code: "VI",
          name: "Viqueque",
        },
      ],
      subregion: "South-Eastern Asia",
    },
    {
      capital: "Lomé",
      code2: "TG",
      code3: "TGO",
      name: "Togo",
      region: "Africa",
      states: [
        {
          code: "C",
          name: "Centre",
        },
        {
          code: "K",
          name: "Kara",
        },
        {
          code: "M",
          name: "Maritime",
        },
        {
          code: "P",
          name: "Plateaux",
        },
        {
          code: "S",
          name: "Savannes",
        },
      ],
      subregion: "Western Africa",
    },
    {
      capital: "Fakaofo",
      code2: "TK",
      code3: "TKL",
      name: "Tokelau",
      region: "Oceania",
      subregion: "Polynesia",
    },
    {
      capital: "Nuku'alofa",
      code2: "TO",
      code3: "TON",
      name: "Tonga",
      region: "Oceania",
      states: [
        {
          code: "01",
          name: "'Eua",
        },
        {
          code: "02",
          name: "Ha'apai",
        },
        {
          code: "03",
          name: "Niuas",
        },
        {
          code: "04",
          name: "Tongatapu",
        },
        {
          code: "05",
          name: "Vava'u",
        },
      ],
      subregion: "Polynesia",
    },
    {
      capital: "Port of Spain",
      code2: "TT",
      code3: "TTO",
      name: "Trinidad and Tobago",
      region: "Americas",
      states: [
        {
          code: "ARI",
          name: "Arima",
        },
        {
          code: "CHA",
          name: "Chaguanas",
        },
        {
          code: "CTT",
          name: "Couva-Tabaquite-Talparo",
        },
        {
          code: "DMN",
          name: "Diego Martin",
        },
        {
          code: "ETO",
          name: "Eastern Tobago",
        },
        {
          code: "PED",
          name: "Penal-Debe",
        },
        {
          code: "PTF",
          name: "Point Fortin",
        },
        {
          code: "POS",
          name: "Port of Spain",
        },
        {
          code: "PRT",
          name: "Princes Town",
        },
        {
          code: "RCM",
          name: "Rio Claro-Mayaro",
        },
        {
          code: "SFO",
          name: "San Fernando",
        },
        {
          code: "SJL",
          name: "San Juan-Laventille",
        },
        {
          code: "SGE",
          name: "Sangre Grande",
        },
        {
          code: "SIP",
          name: "Siparia",
        },
        {
          code: "TUP",
          name: "Tunapuna-Piarco",
        },
        {
          code: "WTO",
          name: "Western Tobago",
        },
      ],
      subregion: "Caribbean",
    },
    {
      capital: "Tunis",
      code2: "TN",
      code3: "TUN",
      name: "Tunisia",
      region: "Africa",
      states: [
        {
          code: "12",
          name: "Ariana",
        },
        {
          code: "13",
          name: "Ben Arous",
        },
        {
          code: "23",
          name: "Bizerte",
        },
        {
          code: "31",
          name: "Béja",
        },
        {
          code: "81",
          name: "Gabès",
        },
        {
          code: "71",
          name: "Gafsa",
        },
        {
          code: "32",
          name: "Jendouba",
        },
        {
          code: "41",
          name: "Kairouan",
        },
        {
          code: "42",
          name: "Kasserine",
        },
        {
          code: "73",
          name: "Kebili",
        },
        {
          code: "14",
          name: "La Manouba",
        },
        {
          code: "33",
          name: "Le Kef",
        },
        {
          code: "53",
          name: "Mahdia",
        },
        {
          code: "82",
          name: "Medenine",
        },
        {
          code: "52",
          name: "Monastir",
        },
        {
          code: "21",
          name: "Nabeul",
        },
        {
          code: "61",
          name: "Sfax",
        },
        {
          code: "43",
          name: "Sidi Bouzid",
        },
        {
          code: "34",
          name: "Siliana",
        },
        {
          code: "51",
          name: "Sousse",
        },
        {
          code: "83",
          name: "Tataouine",
        },
        {
          code: "72",
          name: "Tozeur",
        },
        {
          code: "11",
          name: "Tunis",
        },
        {
          code: "22",
          name: "Zaghouan",
        },
      ],
      subregion: "Northern Africa",
    },
    {
      capital: "Ankara",
      code2: "TR",
      code3: "TUR",
      name: "Turkey",
      region: "Asia",
      states: [
        {
          code: "01",
          name: "Adana",
        },
        {
          code: "02",
          name: "Adıyaman",
        },
        {
          code: "03",
          name: "Afyonkarahisar",
        },
        {
          code: "68",
          name: "Aksaray",
        },
        {
          code: "05",
          name: "Amasya",
        },
        {
          code: "06",
          name: "Ankara",
        },
        {
          code: "07",
          name: "Antalya",
        },
        {
          code: "75",
          name: "Ardahan",
        },
        {
          code: "08",
          name: "Artvin",
        },
        {
          code: "09",
          name: "Aydın",
        },
        {
          code: "04",
          name: "Ağrı",
        },
        {
          code: "10",
          name: "Balıkesir",
        },
        {
          code: "74",
          name: "Bartın",
        },
        {
          code: "72",
          name: "Batman",
        },
        {
          code: "69",
          name: "Bayburt",
        },
        {
          code: "11",
          name: "Bilecik",
        },
        {
          code: "12",
          name: "Bingöl",
        },
        {
          code: "13",
          name: "Bitlis",
        },
        {
          code: "14",
          name: "Bolu",
        },
        {
          code: "15",
          name: "Burdur",
        },
        {
          code: "16",
          name: "Bursa",
        },
        {
          code: "20",
          name: "Denizli",
        },
        {
          code: "21",
          name: "Diyarbakır",
        },
        {
          code: "81",
          name: "Düzce",
        },
        {
          code: "22",
          name: "Edirne",
        },
        {
          code: "23",
          name: "Elazığ",
        },
        {
          code: "24",
          name: "Erzincan",
        },
        {
          code: "25",
          name: "Erzurum",
        },
        {
          code: "26",
          name: "Eskişehir",
        },
        {
          code: "27",
          name: "Gaziantep",
        },
        {
          code: "28",
          name: "Giresun",
        },
        {
          code: "29",
          name: "Gümüşhane",
        },
        {
          code: "30",
          name: "Hakkâri",
        },
        {
          code: "31",
          name: "Hatay",
        },
        {
          code: "32",
          name: "Isparta",
        },
        {
          code: "76",
          name: "Iğdır",
        },
        {
          code: "46",
          name: "Kahramanmaraş",
        },
        {
          code: "78",
          name: "Karabük",
        },
        {
          code: "70",
          name: "Karaman",
        },
        {
          code: "36",
          name: "Kars",
        },
        {
          code: "37",
          name: "Kastamonu",
        },
        {
          code: "38",
          name: "Kayseri",
        },
        {
          code: "79",
          name: "Kilis",
        },
        {
          code: "41",
          name: "Kocaeli",
        },
        {
          code: "42",
          name: "Konya",
        },
        {
          code: "43",
          name: "Kütahya",
        },
        {
          code: "39",
          name: "Kırklareli",
        },
        {
          code: "71",
          name: "Kırıkkale",
        },
        {
          code: "40",
          name: "Kırşehir",
        },
        {
          code: "44",
          name: "Malatya",
        },
        {
          code: "45",
          name: "Manisa",
        },
        {
          code: "47",
          name: "Mardin",
        },
        {
          code: "33",
          name: "Mersin",
        },
        {
          code: "48",
          name: "Muğla",
        },
        {
          code: "49",
          name: "Muş",
        },
        {
          code: "50",
          name: "Nevşehir",
        },
        {
          code: "51",
          name: "Niğde",
        },
        {
          code: "52",
          name: "Ordu",
        },
        {
          code: "80",
          name: "Osmaniye",
        },
        {
          code: "53",
          name: "Rize",
        },
        {
          code: "54",
          name: "Sakarya",
        },
        {
          code: "55",
          name: "Samsun",
        },
        {
          code: "56",
          name: "Siirt",
        },
        {
          code: "57",
          name: "Sinop",
        },
        {
          code: "58",
          name: "Sivas",
        },
        {
          code: "59",
          name: "Tekirdağ",
        },
        {
          code: "60",
          name: "Tokat",
        },
        {
          code: "61",
          name: "Trabzon",
        },
        {
          code: "62",
          name: "Tunceli",
        },
        {
          code: "64",
          name: "Uşak",
        },
        {
          code: "65",
          name: "Van",
        },
        {
          code: "77",
          name: "Yalova",
        },
        {
          code: "66",
          name: "Yozgat",
        },
        {
          code: "67",
          name: "Zonguldak",
        },
        {
          code: "17",
          name: "Çanakkale",
        },
        {
          code: "18",
          name: "Çankırı",
        },
        {
          code: "19",
          name: "Çorum",
        },
        {
          code: "34",
          name: "İstanbul",
        },
        {
          code: "35",
          name: "İzmir",
        },
        {
          code: "63",
          name: "Şanlıurfa",
        },
        {
          code: "73",
          name: "Şırnak",
        },
      ],
      subregion: "Western Asia",
    },
    {
      capital: "Ashgabat",
      code2: "TM",
      code3: "TKM",
      name: "Turkmenistan",
      region: "Asia",
      states: [
        {
          code: "A",
          name: "Ahal",
        },
        {
          code: "S",
          name: "Aşgabat",
        },
        {
          code: "B",
          name: "Balkan",
        },
        {
          code: "D",
          name: "Daşoguz",
        },
        {
          code: "L",
          name: "Lebap",
        },
        {
          code: "M",
          name: "Mary",
        },
      ],
      subregion: "Central Asia",
    },
    {
      capital: "Cockburn Town",
      code2: "TC",
      code3: "TCA",
      name: "Turks and Caicos Islands",
      region: "Americas",
      subregion: "Caribbean",
    },
    {
      capital: "Funafuti",
      code2: "TV",
      code3: "TUV",
      name: "Tuvalu",
      region: "Oceania",
      states: [
        {
          code: "FUN",
          name: "Funafuti",
        },
        {
          code: "NMG",
          name: "Nanumanga",
        },
        {
          code: "NMA",
          name: "Nanumea",
        },
        {
          code: "NIT",
          name: "Niutao",
        },
        {
          code: "NUI",
          name: "Nui",
        },
        {
          code: "NKF",
          name: "Nukufetau",
        },
        {
          code: "NKL",
          name: "Nukulaelae",
        },
        {
          code: "VAI",
          name: "Vaitupu",
        },
      ],
      subregion: "Polynesia",
    },
    {
      capital: "Kampala",
      code2: "UG",
      code3: "UGA",
      name: "Uganda",
      region: "Africa",
      states: [
        {
          code: "C",
          name: "Central",
        },
        {
          code: "E",
          name: "Eastern",
        },
        {
          code: "N",
          name: "Northern",
        },
        {
          code: "W",
          name: "Western",
        },
      ],
      subregion: "Eastern Africa",
    },
    {
      capital: "Kiev",
      code2: "UA",
      code3: "UKR",
      name: "Ukraine",
      region: "Europe",
      states: [
        {
          code: "43",
          name: "Avtonomna Respublika Krym",
        },
        {
          code: "71",
          name: "Cherkas'ka Oblast'",
        },
        {
          code: "74",
          name: "Chernihivs'ka Oblast'",
        },
        {
          code: "77",
          name: "Chernivets'ka Oblast'",
        },
        {
          code: "12",
          name: "Dnipropetrovs'ka Oblast'",
        },
        {
          code: "14",
          name: "Donets'ka Oblast'",
        },
        {
          code: "26",
          name: "Ivano-Frankivs'ka Oblast'",
        },
        {
          code: "63",
          name: "Kharkivs'ka Oblast'",
        },
        {
          code: "65",
          name: "Khersons'ka Oblast'",
        },
        {
          code: "68",
          name: "Khmel'nyts'ka Oblast'",
        },
        {
          code: "35",
          name: "Kirovohrads'ka Oblast'",
        },
        {
          code: "30",
          name: "Kyïv",
        },
        {
          code: "32",
          name: "Kyïvs'ka Oblast'",
        },
        {
          code: "46",
          name: "L'vivs'ka Oblast'",
        },
        {
          code: "09",
          name: "Luhans'ka Oblast'",
        },
        {
          code: "48",
          name: "Mykolaïvs'ka Oblast'",
        },
        {
          code: "51",
          name: "Odes'ka Oblast'",
        },
        {
          code: "53",
          name: "Poltavs'ka Oblast'",
        },
        {
          code: "56",
          name: "Rivnens'ka Oblast'",
        },
        {
          code: "40",
          name: "Sevastopol'",
        },
        {
          code: "59",
          name: "Sums'ka Oblast'",
        },
        {
          code: "61",
          name: "Ternopil's'ka Oblast'",
        },
        {
          code: "05",
          name: "Vinnyts'ka Oblast'",
        },
        {
          code: "07",
          name: "Volyns'ka Oblast'",
        },
        {
          code: "21",
          name: "Zakarpats'ka Oblast'",
        },
        {
          code: "23",
          name: "Zaporiz'ka Oblast'",
        },
        {
          code: "18",
          name: "Zhytomyrs'ka Oblast'",
        },
      ],
      subregion: "Eastern Europe",
    },
    {
      capital: "Abu Dhabi",
      code2: "AE",
      code3: "ARE",
      name: "United Arab Emirates",
      region: "Asia",
      states: [
        {
          code: "AJ",
          name: "'Ajmān",
        },
        {
          code: "AZ",
          name: "Abū Z̧aby",
        },
        {
          code: "FU",
          name: "Al Fujayrah",
        },
        {
          code: "SH",
          name: "Ash Shāriqah",
        },
        {
          code: "DU",
          name: "Dubayy",
        },
        {
          code: "RK",
          name: "Ra's al Khaymah",
        },
        {
          code: "UQ",
          name: "Umm al Qaywayn",
        },
      ],
      subregion: "Western Asia",
    },
    {
      capital: "London",
      code2: "GB",
      code3: "GBR",
      name: "United Kingdom",
      region: "Europe",
      states: [
        {
          code: "BDG",
          name: "Barking and Dagenham",
          subdivision: "London borough",
        },
        {
          code: "BNE",
          name: "Barnet",
          subdivision: "London borough",
        },
        {
          code: "BEX",
          name: "Bexley",
          subdivision: "London borough",
        },
        {
          code: "BEN",
          name: "Brent",
          subdivision: "London borough",
        },
        {
          code: "BRY",
          name: "Bromley",
          subdivision: "London borough",
        },
        {
          code: "CMD",
          name: "Camden",
          subdivision: "London borough",
        },
        {
          code: "CRY",
          name: "Croydon",
          subdivision: "London borough",
        },
        {
          code: "EAL",
          name: "Ealing",
          subdivision: "London borough",
        },
        {
          code: "ENF",
          name: "Enfield",
          subdivision: "London borough",
        },
        {
          code: "GRE",
          name: "Greenwich",
          subdivision: "London borough",
        },
        {
          code: "HCK",
          name: "Hackney",
          subdivision: "London borough",
        },
        {
          code: "HMF",
          name: "Hammersmith and Fulham",
          subdivision: "London borough",
        },
        {
          code: "HRY",
          name: "Haringey",
          subdivision: "London borough",
        },
        {
          code: "HRW",
          name: "Harrow",
          subdivision: "London borough",
        },
        {
          code: "HAV",
          name: "Havering",
          subdivision: "London borough",
        },
        {
          code: "HIL",
          name: "Hillingdon",
          subdivision: "London borough",
        },
        {
          code: "HNS",
          name: "Hounslow",
          subdivision: "London borough",
        },
        {
          code: "ISL",
          name: "Islington",
          subdivision: "London borough",
        },
        {
          code: "KEC",
          name: "Kensington and Chelsea",
          subdivision: "London borough",
        },
        {
          code: "KTT",
          name: "Kingston upon Thames",
          subdivision: "London borough",
        },
        {
          code: "LBH",
          name: "Lambeth",
          subdivision: "London borough",
        },
        {
          code: "LEW",
          name: "Lewisham",
          subdivision: "London borough",
        },
        {
          code: "MRT",
          name: "Merton",
          subdivision: "London borough",
        },
        {
          code: "NWM",
          name: "Newham",
          subdivision: "London borough",
        },
        {
          code: "RDB",
          name: "Redbridge",
          subdivision: "London borough",
        },
        {
          code: "RIC",
          name: "Richmond upon Thames",
          subdivision: "London borough",
        },
        {
          code: "SWK",
          name: "Southwark",
          subdivision: "London borough",
        },
        {
          code: "STN",
          name: "Sutton",
          subdivision: "London borough",
        },
        {
          code: "TWH",
          name: "Tower Hamlets",
          subdivision: "London borough",
        },
        {
          code: "WFT",
          name: "Waltham Forest",
          subdivision: "London borough",
        },
        {
          code: "WND",
          name: "Wandsworth",
          subdivision: "London borough",
        },
        {
          code: "WSM",
          name: "Westminster",
          subdivision: "London borough",
        },
        {
          code: "EAW",
          name: "England and Wales",
          subdivision: "Nation",
        },
        {
          code: "GBN",
          name: "Great Britain",
          subdivision: "Nation",
        },
        {
          code: "UKM",
          name: "United Kingdom",
          subdivision: "Nation",
        },
        {
          code: "LND",
          name: "London, City of",
          subdivision: "city corporation",
        },
        {
          code: "ABE",
          name: "Aberdeen City",
          subdivision: "council area",
        },
        {
          code: "ABD",
          name: "Aberdeenshire",
          subdivision: "council area",
        },
        {
          code: "ANS",
          name: "Angus",
          subdivision: "council area",
        },
        {
          code: "AGB",
          name: "Argyll and Bute",
          subdivision: "council area",
        },
        {
          code: "CLK",
          name: "Clackmannanshire",
          subdivision: "council area",
        },
        {
          code: "DGY",
          name: "Dumfries and Galloway",
          subdivision: "council area",
        },
        {
          code: "DND",
          name: "Dundee City",
          subdivision: "council area",
        },
        {
          code: "EAY",
          name: "East Ayrshire",
          subdivision: "council area",
        },
        {
          code: "EDU",
          name: "East Dunbartonshire",
          subdivision: "council area",
        },
        {
          code: "ELN",
          name: "East Lothian",
          subdivision: "council area",
        },
        {
          code: "ERW",
          name: "East Renfrewshire",
          subdivision: "council area",
        },
        {
          code: "EDH",
          name: "Edinburgh, City of",
          subdivision: "council area",
        },
        {
          code: "ELS",
          name: "Eilean Siar",
          subdivision: "council area",
        },
        {
          code: "FAL",
          name: "Falkirk",
          subdivision: "council area",
        },
        {
          code: "FIF",
          name: "Fife",
          subdivision: "council area",
        },
        {
          code: "GLG",
          name: "Glasgow City",
          subdivision: "council area",
        },
        {
          code: "HLD",
          name: "Highland",
          subdivision: "council area",
        },
        {
          code: "IVC",
          name: "Inverclyde",
          subdivision: "council area",
        },
        {
          code: "MLN",
          name: "Midlothian",
          subdivision: "council area",
        },
        {
          code: "MRY",
          name: "Moray",
          subdivision: "council area",
        },
        {
          code: "NAY",
          name: "North Ayrshire",
          subdivision: "council area",
        },
        {
          code: "NLK",
          name: "North Lanarkshire",
          subdivision: "council area",
        },
        {
          code: "ORK",
          name: "Orkney Islands",
          subdivision: "council area",
        },
        {
          code: "PKN",
          name: "Perth and Kinross",
          subdivision: "council area",
        },
        {
          code: "RFW",
          name: "Renfrewshire",
          subdivision: "council area",
        },
        {
          code: "SCB",
          name: "Scottish Borders, The",
          subdivision: "council area",
        },
        {
          code: "ZET",
          name: "Shetland Islands",
          subdivision: "council area",
        },
        {
          code: "SAY",
          name: "South Ayrshire",
          subdivision: "council area",
        },
        {
          code: "SLK",
          name: "South Lanarkshire",
          subdivision: "council area",
        },
        {
          code: "STG",
          name: "Stirling",
          subdivision: "council area",
        },
        {
          code: "WDU",
          name: "West Dunbartonshire",
          subdivision: "council area",
        },
        {
          code: "WLN",
          name: "West Lothian",
          subdivision: "council area",
        },
        {
          code: "ENG",
          name: "England",
          subdivision: "country",
        },
        {
          code: "SCT",
          name: "Scotland",
          subdivision: "country",
        },
        {
          code: "WLS",
          name: "Wales",
          subdivision: "country",
        },
        {
          code: "ANT",
          name: "Antrim",
          subdivision: "district council area",
        },
        {
          code: "ARD",
          name: "Ards",
          subdivision: "district council area",
        },
        {
          code: "ARM",
          name: "Armagh",
          subdivision: "district council area",
        },
        {
          code: "BLA",
          name: "Ballymena",
          subdivision: "district council area",
        },
        {
          code: "BLY",
          name: "Ballymoney",
          subdivision: "district council area",
        },
        {
          code: "BNB",
          name: "Banbridge",
          subdivision: "district council area",
        },
        {
          code: "BFS",
          name: "Belfast",
          subdivision: "district council area",
        },
        {
          code: "CKF",
          name: "Carrickfergus",
          subdivision: "district council area",
        },
        {
          code: "CSR",
          name: "Castlereagh",
          subdivision: "district council area",
        },
        {
          code: "CLR",
          name: "Coleraine",
          subdivision: "district council area",
        },
        {
          code: "CKT",
          name: "Cookstown",
          subdivision: "district council area",
        },
        {
          code: "CGV",
          name: "Craigavon",
          subdivision: "district council area",
        },
        {
          code: "DRY",
          name: "Derry",
          subdivision: "district council area",
        },
        {
          code: "DOW",
          name: "Down",
          subdivision: "district council area",
        },
        {
          code: "DGN",
          name: "Dungannon and South Tyrone",
          subdivision: "district council area",
        },
        {
          code: "FER",
          name: "Fermanagh",
          subdivision: "district council area",
        },
        {
          code: "LRN",
          name: "Larne",
          subdivision: "district council area",
        },
        {
          code: "LMV",
          name: "Limavady",
          subdivision: "district council area",
        },
        {
          code: "LSB",
          name: "Lisburn",
          subdivision: "district council area",
        },
        {
          code: "MFT",
          name: "Magherafelt",
          subdivision: "district council area",
        },
        {
          code: "MYL",
          name: "Moyle",
          subdivision: "district council area",
        },
        {
          code: "NYM",
          name: "Newry and Mourne District",
          subdivision: "district council area",
        },
        {
          code: "NTA",
          name: "Newtownabbey",
          subdivision: "district council area",
        },
        {
          code: "NDN",
          name: "North Down",
          subdivision: "district council area",
        },
        {
          code: "OMH",
          name: "Omagh",
          subdivision: "district council area",
        },
        {
          code: "STB",
          name: "Strabane",
          subdivision: "district council area",
        },
        {
          code: "BNS",
          name: "Barnsley",
          subdivision: "metropolitan district",
        },
        {
          code: "BIR",
          name: "Birmingham",
          subdivision: "metropolitan district",
        },
        {
          code: "BOL",
          name: "Bolton",
          subdivision: "metropolitan district",
        },
        {
          code: "BRD",
          name: "Bradford",
          subdivision: "metropolitan district",
        },
        {
          code: "BUR",
          name: "Bury",
          subdivision: "metropolitan district",
        },
        {
          code: "CLD",
          name: "Calderdale",
          subdivision: "metropolitan district",
        },
        {
          code: "COV",
          name: "Coventry",
          subdivision: "metropolitan district",
        },
        {
          code: "DNC",
          name: "Doncaster",
          subdivision: "metropolitan district",
        },
        {
          code: "DUD",
          name: "Dudley",
          subdivision: "metropolitan district",
        },
        {
          code: "GAT",
          name: "Gateshead",
          subdivision: "metropolitan district",
        },
        {
          code: "KIR",
          name: "Kirklees",
          subdivision: "metropolitan district",
        },
        {
          code: "KWL",
          name: "Knowsley",
          subdivision: "metropolitan district",
        },
        {
          code: "LDS",
          name: "Leeds",
          subdivision: "metropolitan district",
        },
        {
          code: "LIV",
          name: "Liverpool",
          subdivision: "metropolitan district",
        },
        {
          code: "MAN",
          name: "Manchester",
          subdivision: "metropolitan district",
        },
        {
          code: "NET",
          name: "Newcastle upon Tyne",
          subdivision: "metropolitan district",
        },
        {
          code: "NTY",
          name: "North Tyneside",
          subdivision: "metropolitan district",
        },
        {
          code: "OLD",
          name: "Oldham",
          subdivision: "metropolitan district",
        },
        {
          code: "RCH",
          name: "Rochdale",
          subdivision: "metropolitan district",
        },
        {
          code: "ROT",
          name: "Rotherham",
          subdivision: "metropolitan district",
        },
        {
          code: "SLF",
          name: "Salford",
          subdivision: "metropolitan district",
        },
        {
          code: "SAW",
          name: "Sandwell",
          subdivision: "metropolitan district",
        },
        {
          code: "SFT",
          name: "Sefton",
          subdivision: "metropolitan district",
        },
        {
          code: "SHF",
          name: "Sheffield",
          subdivision: "metropolitan district",
        },
        {
          code: "SOL",
          name: "Solihull",
          subdivision: "metropolitan district",
        },
        {
          code: "STY",
          name: "South Tyneside",
          subdivision: "metropolitan district",
        },
        {
          code: "SHN",
          name: "St. Helens",
          subdivision: "metropolitan district",
        },
        {
          code: "SKP",
          name: "Stockport",
          subdivision: "metropolitan district",
        },
        {
          code: "SND",
          name: "Sunderland",
          subdivision: "metropolitan district",
        },
        {
          code: "TAM",
          name: "Tameside",
          subdivision: "metropolitan district",
        },
        {
          code: "TRF",
          name: "Trafford",
          subdivision: "metropolitan district",
        },
        {
          code: "WKF",
          name: "Wakefield",
          subdivision: "metropolitan district",
        },
        {
          code: "WLL",
          name: "Walsall",
          subdivision: "metropolitan district",
        },
        {
          code: "WGN",
          name: "Wigan",
          subdivision: "metropolitan district",
        },
        {
          code: "WRL",
          name: "Wirral",
          subdivision: "metropolitan district",
        },
        {
          code: "WLV",
          name: "Wolverhampton",
          subdivision: "metropolitan district",
        },
        {
          code: "NIR",
          name: "Northern Ireland",
          subdivision: "province",
        },
        {
          code: "BKM",
          name: "Buckinghamshire",
          subdivision: "two-tier county",
        },
        {
          code: "CAM",
          name: "Cambridgeshire",
          subdivision: "two-tier county",
        },
        {
          code: "CMA",
          name: "Cumbria",
          subdivision: "two-tier county",
        },
        {
          code: "DBY",
          name: "Derbyshire",
          subdivision: "two-tier county",
        },
        {
          code: "DEV",
          name: "Devon",
          subdivision: "two-tier county",
        },
        {
          code: "DOR",
          name: "Dorset",
          subdivision: "two-tier county",
        },
        {
          code: "ESX",
          name: "East Sussex",
          subdivision: "two-tier county",
        },
        {
          code: "ESS",
          name: "Essex",
          subdivision: "two-tier county",
        },
        {
          code: "GLS",
          name: "Gloucestershire",
          subdivision: "two-tier county",
        },
        {
          code: "HAM",
          name: "Hampshire",
          subdivision: "two-tier county",
        },
        {
          code: "HRT",
          name: "Hertfordshire",
          subdivision: "two-tier county",
        },
        {
          code: "KEN",
          name: "Kent",
          subdivision: "two-tier county",
        },
        {
          code: "LAN",
          name: "Lancashire",
          subdivision: "two-tier county",
        },
        {
          code: "LEC",
          name: "Leicestershire",
          subdivision: "two-tier county",
        },
        {
          code: "LIN",
          name: "Lincolnshire",
          subdivision: "two-tier county",
        },
        {
          code: "NFK",
          name: "Norfolk",
          subdivision: "two-tier county",
        },
        {
          code: "NYK",
          name: "North Yorkshire",
          subdivision: "two-tier county",
        },
        {
          code: "NTH",
          name: "Northamptonshire",
          subdivision: "two-tier county",
        },
        {
          code: "NTT",
          name: "Nottinghamshire",
          subdivision: "two-tier county",
        },
        {
          code: "OXF",
          name: "Oxfordshire",
          subdivision: "two-tier county",
        },
        {
          code: "SOM",
          name: "Somerset",
          subdivision: "two-tier county",
        },
        {
          code: "STS",
          name: "Staffordshire",
          subdivision: "two-tier county",
        },
        {
          code: "SFK",
          name: "Suffolk",
          subdivision: "two-tier county",
        },
        {
          code: "SRY",
          name: "Surrey",
          subdivision: "two-tier county",
        },
        {
          code: "WAR",
          name: "Warwickshire",
          subdivision: "two-tier county",
        },
        {
          code: "WSX",
          name: "West Sussex",
          subdivision: "two-tier county",
        },
        {
          code: "WOR",
          name: "Worcestershire",
          subdivision: "two-tier county",
        },
        {
          code: "BAS",
          name: "Bath and North East Somerset",
          subdivision: "unitary authority",
        },
        {
          code: "BDF",
          name: "Bedford",
          subdivision: "unitary authority",
        },
        {
          code: "BBD",
          name: "Blackburn with Darwen",
          subdivision: "unitary authority",
        },
        {
          code: "BPL",
          name: "Blackpool",
          subdivision: "unitary authority",
        },
        {
          code: "BGW",
          name: "Blaenau Gwent",
          subdivision: "unitary authority",
        },
        {
          code: "BMH",
          name: "Bournemouth",
          subdivision: "unitary authority",
        },
        {
          code: "BRC",
          name: "Bracknell Forest",
          subdivision: "unitary authority",
        },
        {
          code: "BGE",
          name: "Bridgend",
          subdivision: "unitary authority",
        },
        {
          code: "BNH",
          name: "Brighton and Hove",
          subdivision: "unitary authority",
        },
        {
          code: "BST",
          name: "Bristol, City of",
          subdivision: "unitary authority",
        },
        {
          code: "CAY",
          name: "Caerphilly",
          subdivision: "unitary authority",
        },
        {
          code: "CRF",
          name: "Cardiff",
          subdivision: "unitary authority",
        },
        {
          code: "CMN",
          name: "Carmarthenshire",
          subdivision: "unitary authority",
        },
        {
          code: "CBF",
          name: "Central Bedfordshire",
          subdivision: "unitary authority",
        },
        {
          code: "CGN",
          name: "Ceredigion",
          subdivision: "unitary authority",
        },
        {
          code: "CHE",
          name: "Cheshire East",
          subdivision: "unitary authority",
        },
        {
          code: "CHW",
          name: "Cheshire West and Chester",
          subdivision: "unitary authority",
        },
        {
          code: "CWY",
          name: "Conwy",
          subdivision: "unitary authority",
        },
        {
          code: "CON",
          name: "Cornwall",
          subdivision: "unitary authority",
        },
        {
          code: "DAL",
          name: "Darlington",
          subdivision: "unitary authority",
        },
        {
          code: "DEN",
          name: "Denbighshire",
          subdivision: "unitary authority",
        },
        {
          code: "DER",
          name: "Derby",
          subdivision: "unitary authority",
        },
        {
          code: "DUR",
          name: "Durham, County",
          subdivision: "unitary authority",
        },
        {
          code: "ERY",
          name: "East Riding of Yorkshire",
          subdivision: "unitary authority",
        },
        {
          code: "FLN",
          name: "Flintshire",
          subdivision: "unitary authority",
        },
        {
          code: "GWN",
          name: "Gwynedd",
          subdivision: "unitary authority",
        },
        {
          code: "HAL",
          name: "Halton",
          subdivision: "unitary authority",
        },
        {
          code: "HPL",
          name: "Hartlepool",
          subdivision: "unitary authority",
        },
        {
          code: "HEF",
          name: "Herefordshire",
          subdivision: "unitary authority",
        },
        {
          code: "AGY",
          name: "Isle of Anglesey",
          subdivision: "unitary authority",
        },
        {
          code: "IOW",
          name: "Isle of Wight",
          subdivision: "unitary authority",
        },
        {
          code: "IOS",
          name: "Isles of Scilly",
          subdivision: "unitary authority",
        },
        {
          code: "KHL",
          name: "Kingston upon Hull",
          subdivision: "unitary authority",
        },
        {
          code: "LCE",
          name: "Leicester",
          subdivision: "unitary authority",
        },
        {
          code: "LUT",
          name: "Luton",
          subdivision: "unitary authority",
        },
        {
          code: "MDW",
          name: "Medway",
          subdivision: "unitary authority",
        },
        {
          code: "MTY",
          name: "Merthyr Tydfil",
          subdivision: "unitary authority",
        },
        {
          code: "MDB",
          name: "Middlesbrough",
          subdivision: "unitary authority",
        },
        {
          code: "MIK",
          name: "Milton Keynes",
          subdivision: "unitary authority",
        },
        {
          code: "MON",
          name: "Monmouthshire",
          subdivision: "unitary authority",
        },
        {
          code: "NTL",
          name: "Neath Port Talbot",
          subdivision: "unitary authority",
        },
        {
          code: "NWP",
          name: "Newport",
          subdivision: "unitary authority",
        },
        {
          code: "NEL",
          name: "North East Lincolnshire",
          subdivision: "unitary authority",
        },
        {
          code: "NLN",
          name: "North Lincolnshire",
          subdivision: "unitary authority",
        },
        {
          code: "NSM",
          name: "North Somerset",
          subdivision: "unitary authority",
        },
        {
          code: "NBL",
          name: "Northumberland",
          subdivision: "unitary authority",
        },
        {
          code: "NGM",
          name: "Nottingham",
          subdivision: "unitary authority",
        },
        {
          code: "PEM",
          name: "Pembrokeshire",
          subdivision: "unitary authority",
        },
        {
          code: "PTE",
          name: "Peterborough",
          subdivision: "unitary authority",
        },
        {
          code: "PLY",
          name: "Plymouth",
          subdivision: "unitary authority",
        },
        {
          code: "POL",
          name: "Poole",
          subdivision: "unitary authority",
        },
        {
          code: "POR",
          name: "Portsmouth",
          subdivision: "unitary authority",
        },
        {
          code: "POW",
          name: "Powys",
          subdivision: "unitary authority",
        },
        {
          code: "RDG",
          name: "Reading",
          subdivision: "unitary authority",
        },
        {
          code: "RCC",
          name: "Redcar and Cleveland",
          subdivision: "unitary authority",
        },
        {
          code: "RCT",
          name: "Rhondda, Cynon, Taff",
          subdivision: "unitary authority",
        },
        {
          code: "RUT",
          name: "Rutland",
          subdivision: "unitary authority",
        },
        {
          code: "SHR",
          name: "Shropshire",
          subdivision: "unitary authority",
        },
        {
          code: "SLG",
          name: "Slough",
          subdivision: "unitary authority",
        },
        {
          code: "SGC",
          name: "South Gloucestershire",
          subdivision: "unitary authority",
        },
        {
          code: "STH",
          name: "Southampton",
          subdivision: "unitary authority",
        },
        {
          code: "SOS",
          name: "Southend-on-Sea",
          subdivision: "unitary authority",
        },
        {
          code: "STT",
          name: "Stockton-on-Tees",
          subdivision: "unitary authority",
        },
        {
          code: "STE",
          name: "Stoke-on-Trent",
          subdivision: "unitary authority",
        },
        {
          code: "SWA",
          name: "Swansea",
          subdivision: "unitary authority",
        },
        {
          code: "SWD",
          name: "Swindon",
          subdivision: "unitary authority",
        },
        {
          code: "TFW",
          name: "Telford and Wrekin",
          subdivision: "unitary authority",
        },
        {
          code: "THR",
          name: "Thurrock",
          subdivision: "unitary authority",
        },
        {
          code: "TOB",
          name: "Torbay",
          subdivision: "unitary authority",
        },
        {
          code: "TOF",
          name: "Torfaen",
          subdivision: "unitary authority",
        },
        {
          code: "VGL",
          name: "Vale of Glamorgan, The",
          subdivision: "unitary authority",
        },
        {
          code: "WRT",
          name: "Warrington",
          subdivision: "unitary authority",
        },
        {
          code: "WBK",
          name: "West Berkshire",
          subdivision: "unitary authority",
        },
        {
          code: "WIL",
          name: "Wiltshire",
          subdivision: "unitary authority",
        },
        {
          code: "WNM",
          name: "Windsor and Maidenhead",
          subdivision: "unitary authority",
        },
        {
          code: "WOK",
          name: "Wokingham",
          subdivision: "unitary authority",
        },
        {
          code: "WRX",
          name: "Wrexham",
          subdivision: "unitary authority",
        },
        {
          code: "YOR",
          name: "York",
          subdivision: "unitary authority",
        },
      ],
      subregion: "Northern Europe",
    },
    {
      capital: "Washington, D.C.",
      code2: "US",
      code3: "USA",
      name: "United States",
      region: "Americas",
      states: [
        {
          code: "DC",
          name: "District of Columbia",
          subdivision: "district",
        },
        {
          code: "AS",
          name: "American Samoa",
          subdivision: "outlying territory",
        },
        {
          code: "GU",
          name: "Guam",
          subdivision: "outlying territory",
        },
        {
          code: "MP",
          name: "Northern Mariana Islands",
          subdivision: "outlying territory",
        },
        {
          code: "PR",
          name: "Puerto Rico",
          subdivision: "outlying territory",
        },
        {
          code: "UM",
          name: "United States Minor Outlying Islands",
          subdivision: "outlying territory",
        },
        {
          code: "VI",
          name: "Virgin Islands, U.S.",
          subdivision: "outlying territory",
        },
        {
          code: "AL",
          name: "Alabama",
          subdivision: "state",
        },
        {
          code: "AK",
          name: "Alaska",
          subdivision: "state",
        },
        {
          code: "AZ",
          name: "Arizona",
          subdivision: "state",
        },
        {
          code: "AR",
          name: "Arkansas",
          subdivision: "state",
        },
        {
          code: "CA",
          name: "California",
          subdivision: "state",
        },
        {
          code: "CO",
          name: "Colorado",
          subdivision: "state",
        },
        {
          code: "CT",
          name: "Connecticut",
          subdivision: "state",
        },
        {
          code: "DE",
          name: "Delaware",
          subdivision: "state",
        },
        {
          code: "FL",
          name: "Florida",
          subdivision: "state",
        },
        {
          code: "GA",
          name: "Georgia",
          subdivision: "state",
        },
        {
          code: "HI",
          name: "Hawaii",
          subdivision: "state",
        },
        {
          code: "ID",
          name: "Idaho",
          subdivision: "state",
        },
        {
          code: "IL",
          name: "Illinois",
          subdivision: "state",
        },
        {
          code: "IN",
          name: "Indiana",
          subdivision: "state",
        },
        {
          code: "IA",
          name: "Iowa",
          subdivision: "state",
        },
        {
          code: "KS",
          name: "Kansas",
          subdivision: "state",
        },
        {
          code: "KY",
          name: "Kentucky",
          subdivision: "state",
        },
        {
          code: "LA",
          name: "Louisiana",
          subdivision: "state",
        },
        {
          code: "ME",
          name: "Maine",
          subdivision: "state",
        },
        {
          code: "MD",
          name: "Maryland",
          subdivision: "state",
        },
        {
          code: "MA",
          name: "Massachusetts",
          subdivision: "state",
        },
        {
          code: "MI",
          name: "Michigan",
          subdivision: "state",
        },
        {
          code: "MN",
          name: "Minnesota",
          subdivision: "state",
        },
        {
          code: "MS",
          name: "Mississippi",
          subdivision: "state",
        },
        {
          code: "MO",
          name: "Missouri",
          subdivision: "state",
        },
        {
          code: "MT",
          name: "Montana",
          subdivision: "state",
        },
        {
          code: "NE",
          name: "Nebraska",
          subdivision: "state",
        },
        {
          code: "NV",
          name: "Nevada",
          subdivision: "state",
        },
        {
          code: "NH",
          name: "New Hampshire",
          subdivision: "state",
        },
        {
          code: "NJ",
          name: "New Jersey",
          subdivision: "state",
        },
        {
          code: "NM",
          name: "New Mexico",
          subdivision: "state",
        },
        {
          code: "NY",
          name: "New York",
          subdivision: "state",
        },
        {
          code: "NC",
          name: "North Carolina",
          subdivision: "state",
        },
        {
          code: "ND",
          name: "North Dakota",
          subdivision: "state",
        },
        {
          code: "OH",
          name: "Ohio",
          subdivision: "state",
        },
        {
          code: "OK",
          name: "Oklahoma",
          subdivision: "state",
        },
        {
          code: "OR",
          name: "Oregon",
          subdivision: "state",
        },
        {
          code: "PA",
          name: "Pennsylvania",
          subdivision: "state",
        },
        {
          code: "RI",
          name: "Rhode Island",
          subdivision: "state",
        },
        {
          code: "SC",
          name: "South Carolina",
          subdivision: "state",
        },
        {
          code: "SD",
          name: "South Dakota",
          subdivision: "state",
        },
        {
          code: "TN",
          name: "Tennessee",
          subdivision: "state",
        },
        {
          code: "TX",
          name: "Texas",
          subdivision: "state",
        },
        {
          code: "UT",
          name: "Utah",
          subdivision: "state",
        },
        {
          code: "VT",
          name: "Vermont",
          subdivision: "state",
        },
        {
          code: "VA",
          name: "Virginia",
          subdivision: "state",
        },
        {
          code: "WA",
          name: "Washington",
          subdivision: "state",
        },
        {
          code: "WV",
          name: "West Virginia",
          subdivision: "state",
        },
        {
          code: "WI",
          name: "Wisconsin",
          subdivision: "state",
        },
        {
          code: "WY",
          name: "Wyoming",
          subdivision: "state",
        },
      ],
      subregion: "Northern America",
    },
    {
      capital: "Montevideo",
      code2: "UY",
      code3: "URY",
      name: "Uruguay",
      region: "Americas",
      states: [
        {
          code: "AR",
          name: "Artigas",
        },
        {
          code: "CA",
          name: "Canelones",
        },
        {
          code: "CL",
          name: "Cerro Largo",
        },
        {
          code: "CO",
          name: "Colonia",
        },
        {
          code: "DU",
          name: "Durazno",
        },
        {
          code: "FS",
          name: "Flores",
        },
        {
          code: "FD",
          name: "Florida",
        },
        {
          code: "LA",
          name: "Lavalleja",
        },
        {
          code: "MA",
          name: "Maldonado",
        },
        {
          code: "MO",
          name: "Montevideo",
        },
        {
          code: "PA",
          name: "Paysandú",
        },
        {
          code: "RV",
          name: "Rivera",
        },
        {
          code: "RO",
          name: "Rocha",
        },
        {
          code: "RN",
          name: "Río Negro",
        },
        {
          code: "SA",
          name: "Salto",
        },
        {
          code: "SJ",
          name: "San José",
        },
        {
          code: "SO",
          name: "Soriano",
        },
        {
          code: "TA",
          name: "Tacuarembó",
        },
        {
          code: "TT",
          name: "Treinta y Tres",
        },
      ],
      subregion: "South America",
    },
    {
      capital: "Tashkent",
      code2: "UZ",
      code3: "UZB",
      name: "Uzbekistan",
      region: "Asia",
      states: [
        {
          code: "AN",
          name: "Andijon",
        },
        {
          code: "BU",
          name: "Buxoro",
        },
        {
          code: "FA",
          name: "Farg‘ona",
        },
        {
          code: "JI",
          name: "Jizzax",
        },
        {
          code: "NG",
          name: "Namangan",
        },
        {
          code: "NW",
          name: "Navoiy",
        },
        {
          code: "QA",
          name: "Qashqadaryo",
        },
        {
          code: "QR",
          name: "Qoraqalpog‘iston Respublikasi",
        },
        {
          code: "SA",
          name: "Samarqand",
        },
        {
          code: "SI",
          name: "Sirdaryo",
        },
        {
          code: "SU",
          name: "Surxondaryo",
        },
        {
          code: "TO",
          name: "Toshkent",
        },
        {
          code: "TK",
          name: "Toshkent",
        },
        {
          code: "XO",
          name: "Xorazm",
        },
      ],
      subregion: "Central Asia",
    },
    {
      capital: "Port Vila",
      code2: "VU",
      code3: "VUT",
      name: "Vanuatu",
      region: "Oceania",
      states: [
        {
          code: "MAP",
          name: "Malampa",
        },
        {
          code: "PAM",
          name: "Pénama",
        },
        {
          code: "SAM",
          name: "Sanma",
        },
        {
          code: "SEE",
          name: "Shéfa",
        },
        {
          code: "TAE",
          name: "Taféa",
        },
        {
          code: "TOB",
          name: "Torba",
        },
      ],
      subregion: "Melanesia",
    },
    {
      capital: "Caracas",
      code2: "VE",
      code3: "VEN",
      name: "Venezuela",
      region: "Americas",
      states: [
        {
          code: "Z",
          name: "Amazonas",
        },
        {
          code: "B",
          name: "Anzoátegui",
        },
        {
          code: "C",
          name: "Apure",
        },
        {
          code: "D",
          name: "Aragua",
        },
        {
          code: "E",
          name: "Barinas",
        },
        {
          code: "F",
          name: "Bolívar",
        },
        {
          code: "G",
          name: "Carabobo",
        },
        {
          code: "H",
          name: "Cojedes",
        },
        {
          code: "Y",
          name: "Delta Amacuro",
        },
        {
          code: "W",
          name: "Dependencias Federales",
        },
        {
          code: "A",
          name: "Distrito Capital",
        },
        {
          code: "I",
          name: "Falcón",
        },
        {
          code: "J",
          name: "Guárico",
        },
        {
          code: "K",
          name: "Lara",
        },
        {
          code: "M",
          name: "Miranda",
        },
        {
          code: "N",
          name: "Monagas",
        },
        {
          code: "L",
          name: "Mérida",
        },
        {
          code: "O",
          name: "Nueva Esparta",
        },
        {
          code: "P",
          name: "Portuguesa",
        },
        {
          code: "R",
          name: "Sucre",
        },
        {
          code: "T",
          name: "Trujillo",
        },
        {
          code: "S",
          name: "Táchira",
        },
        {
          code: "X",
          name: "Vargas",
        },
        {
          code: "U",
          name: "Yaracuy",
        },
        {
          code: "V",
          name: "Zulia",
        },
      ],
      subregion: "South America",
    },
    {
      capital: "Hanoi",
      code2: "VN",
      code3: "VNM",
      name: "Vietnam",
      region: "Asia",
      states: [
        {
          code: "44",
          name: "An Giang",
        },
        {
          code: "43",
          name: "Bà Rịa–Vũng Tàu",
        },
        {
          code: "57",
          name: "Bình Dương",
        },
        {
          code: "58",
          name: "Bình Phước",
        },
        {
          code: "40",
          name: "Bình Thuận",
        },
        {
          code: "31",
          name: "Bình Định",
        },
        {
          code: "55",
          name: "Bạc Liêu",
        },
        {
          code: "54",
          name: "Bắc Giang",
        },
        {
          code: "53",
          name: "Bắc Kạn",
        },
        {
          code: "56",
          name: "Bắc Ninh",
        },
        {
          code: "50",
          name: "Bến Tre",
        },
        {
          code: "04",
          name: "Cao Bằng",
        },
        {
          code: "59",
          name: "Cà Mau",
        },
        {
          code: "CT",
          name: "Cần Thơ",
        },
        {
          code: "30",
          name: "Gia Lai",
        },
        {
          code: "03",
          name: "Hà Giang",
        },
        {
          code: "63",
          name: "Hà Nam",
        },
        {
          code: "HN",
          name: "Hà Nội",
        },
        {
          code: "15",
          name: "Hà Tây",
        },
        {
          code: "23",
          name: "Hà Tĩnh",
        },
        {
          code: "14",
          name: "Hòa Bình",
        },
        {
          code: "66",
          name: "Hưng Yên",
        },
        {
          code: "61",
          name: "Hải Dương",
        },
        {
          code: "HP",
          name: "Hải Phòng",
        },
        {
          code: "73",
          name: "Hậu Giang",
        },
        {
          code: "SG",
          name: "Hồ Chí Minh",
        },
        {
          code: "34",
          name: "Khánh Hòa",
        },
        {
          code: "47",
          name: "Kiên Giang",
        },
        {
          code: "28",
          name: "Kon Tum",
        },
        {
          code: "01",
          name: "Lai Châu",
        },
        {
          code: "41",
          name: "Long An",
        },
        {
          code: "02",
          name: "Lào Cai",
        },
        {
          code: "35",
          name: "Lâm Đồng",
        },
        {
          code: "09",
          name: "Lạng Sơn",
        },
        {
          code: "67",
          name: "Nam Định",
        },
        {
          code: "22",
          name: "Nghệ An",
        },
        {
          code: "18",
          name: "Ninh Bình",
        },
        {
          code: "36",
          name: "Ninh Thuận",
        },
        {
          code: "68",
          name: "Phú Thọ",
        },
        {
          code: "32",
          name: "Phú Yên",
        },
        {
          code: "24",
          name: "Quảng Bình",
        },
        {
          code: "27",
          name: "Quảng Nam",
        },
        {
          code: "29",
          name: "Quảng Ngãi",
        },
        {
          code: "13",
          name: "Quảng Ninh",
        },
        {
          code: "25",
          name: "Quảng Trị",
        },
        {
          code: "52",
          name: "Sóc Trăng",
        },
        {
          code: "05",
          name: "Sơn La",
        },
        {
          code: "21",
          name: "Thanh Hóa",
        },
        {
          code: "20",
          name: "Thái Bình",
        },
        {
          code: "69",
          name: "Thái Nguyên",
        },
        {
          code: "26",
          name: "Thừa Thiên–Huế",
        },
        {
          code: "46",
          name: "Tiền Giang",
        },
        {
          code: "51",
          name: "Trà Vinh",
        },
        {
          code: "07",
          name: "Tuyên Quang",
        },
        {
          code: "37",
          name: "Tây Ninh",
        },
        {
          code: "49",
          name: "Vĩnh Long",
        },
        {
          code: "70",
          name: "Vĩnh Phúc",
        },
        {
          code: "06",
          name: "Yên Bái",
        },
        {
          code: "71",
          name: "Điện Biên",
        },
        {
          code: "DN",
          name: "Đà Nẵng",
        },
        {
          code: "33",
          name: "Đắk Lắk",
        },
        {
          code: "72",
          name: "Đắk Nông",
        },
        {
          code: "39",
          name: "Đồng Nai",
        },
        {
          code: "45",
          name: "Đồng Tháp",
        },
      ],
      subregion: "South-Eastern Asia",
    },
    {
      capital: "Mata-Utu",
      code2: "WF",
      code3: "WLF",
      name: "Wallis and Futuna",
      region: "Oceania",
      subregion: "Polynesia",
    },
    {
      capital: "El Aaiún",
      code2: "EH",
      code3: "ESH",
      name: "Western Sahara",
      region: "Africa",
      subregion: "Northern Africa",
    },
    {
      capital: "Sana'a",
      code2: "YE",
      code3: "YEM",
      name: "Yemen",
      region: "Asia",
      states: [
        {
          code: "AD",
          name: "'Adan",
        },
        {
          code: "AM",
          name: "'Amrān",
        },
        {
          code: "AB",
          name: "Abyān",
        },
        {
          code: "BA",
          name: "Al Bayḑā'",
        },
        {
          code: "JA",
          name: "Al Jawf",
        },
        {
          code: "MR",
          name: "Al Mahrah",
        },
        {
          code: "MW",
          name: "Al Maḩwīt",
        },
        {
          code: "HU",
          name: "Al Ḩudaydah",
        },
        {
          code: "DA",
          name: "Aḑ Ḑāli'",
        },
        {
          code: "DH",
          name: "Dhamār",
        },
        {
          code: "IB",
          name: "Ibb",
        },
        {
          code: "LA",
          name: "Laḩij",
        },
        {
          code: "MA",
          name: "Ma'rib",
        },
        {
          code: "RA",
          name: "Raymah",
        },
        {
          code: "SH",
          name: "Shabwah",
        },
        {
          code: "TA",
          name: "Tā‘izz",
        },
        {
          code: "SA",
          name: "Şan‘ā'",
        },
        {
          code: "SN",
          name: "Şan‘ā'",
        },
        {
          code: "SD",
          name: "Şā‘dah",
        },
        {
          code: "HJ",
          name: "Ḩajjah",
        },
        {
          code: "HD",
          name: "Ḩaḑramawt",
        },
      ],
      subregion: "Western Asia",
    },
    {
      capital: "Lusaka",
      code2: "ZM",
      code3: "ZMB",
      name: "Zambia",
      region: "Africa",
      states: [
        {
          code: "02",
          name: "Central",
        },
        {
          code: "08",
          name: "Copperbelt",
        },
        {
          code: "03",
          name: "Eastern",
        },
        {
          code: "04",
          name: "Luapula",
        },
        {
          code: "09",
          name: "Lusaka",
        },
        {
          code: "06",
          name: "North-Western",
        },
        {
          code: "05",
          name: "Northern",
        },
        {
          code: "07",
          name: "Southern",
        },
        {
          code: "01",
          name: "Western",
        },
      ],
      subregion: "Eastern Africa",
    },
    {
      capital: "Harare",
      code2: "ZW",
      code3: "ZWE",
      name: "Zimbabwe",
      region: "Africa",
      states: [
        {
          code: "BU",
          name: "Bulawayo",
        },
        {
          code: "HA",
          name: "Harare",
        },
        {
          code: "MA",
          name: "Manicaland",
        },
        {
          code: "MC",
          name: "Mashonaland Central",
        },
        {
          code: "ME",
          name: "Mashonaland East",
        },
        {
          code: "MW",
          name: "Mashonaland West",
        },
        {
          code: "MV",
          name: "Masvingo",
        },
        {
          code: "MN",
          name: "Matabeleland North",
        },
        {
          code: "MS",
          name: "Matabeleland South",
        },
        {
          code: "MI",
          name: "Midlands",
        },
      ],
      subregion: "Eastern Africa",
    },
  ],
  industry: [
    {
      id: 1,
      name: "Information Technology (IT)",
    },
    {
      id: 2,
      name: "Automobile Manufacturing",
    },
    {
      id: 3,
      name: "Textiles",
    },
    {
      id: 4,
      name: "Pharmaceuticals",
    },
    {
      id: 5,
      name: "Agriculture",
    },
    {
      id: 6,
      name: "Telecommunications",
    },
    {
      id: 7,
      name: "Renewable Energy",
    },
    {
      id: 8,
      name: "Financial Services",
    },
    {
      id: 9,
      name: "Healthcare",
    },
    {
      id: 10,
      name: "Hospitality and Tourism",
    },
    {
      id: 11,
      name: "Steel Production",
    },
    {
      id: 12,
      name: "Film Industry (Bollywood)",
    },
    {
      id: 13,
      name: "Real Estate",
    },
    {
      id: 14,
      name: "Retail",
    },
  ],
  languages: [
    {
      id: 1,
      name: "French",
      region: "Quebec",
    },
    {
      id: 2,
      name: "English",
      region: "Global",
    },
  ],
  status: [
    {
      id: 1,
      name: "Pending",
    },
    {
      id: 2,
      name: "Completed",
    },
  ],
};

export const Languages = [
  { code: "ab", name: "Abkhaz", nativeName: "аҧсуа" },
  { code: "aa", name: "Afar", nativeName: "Afaraf" },
  { code: "af", name: "Afrikaans", nativeName: "Afrikaans" },
  { code: "ak", name: "Akan", nativeName: "Akan" },
  { code: "sq", name: "Albanian", nativeName: "Shqip" },
  { code: "am", name: "Amharic", nativeName: "አማርኛ" },
  { code: "ar", name: "Arabic", nativeName: "العربية" },
  { code: "an", name: "Aragonese", nativeName: "Aragonés" },
  { code: "hy", name: "Armenian", nativeName: "Հայերեն" },
  { code: "as", name: "Assamese", nativeName: "অসমীয়া" },
  { code: "av", name: "Avaric", nativeName: "авар мацӀ, магӀарул мацӀ" },
  { code: "ae", name: "Avestan", nativeName: "avesta" },
  { code: "ay", name: "Aymara", nativeName: "aymar aru" },
  { code: "az", name: "Azerbaijani", nativeName: "azərbaycan dili" },
  { code: "bm", name: "Bambara", nativeName: "bamanankan" },
  { code: "ba", name: "Bashkir", nativeName: "башҡорт теле" },
  { code: "eu", name: "Basque", nativeName: "euskara, euskera" },
  { code: "be", name: "Belarusian", nativeName: "Беларуская" },
  { code: "bn", name: "Bengali", nativeName: "বাংলা" },
  { code: "bh", name: "Bihari", nativeName: "भोजपुरी" },
  { code: "bi", name: "Bislama", nativeName: "Bislama" },
  { code: "bs", name: "Bosnian", nativeName: "bosanski jezik" },
  { code: "br", name: "Breton", nativeName: "brezhoneg" },
  { code: "bg", name: "Bulgarian", nativeName: "български език" },
  { code: "my", name: "Burmese", nativeName: "ဗမာစာ" },
  { code: "ca", name: "Catalan; Valencian", nativeName: "Català" },
  { code: "ch", name: "Chamorro", nativeName: "Chamoru" },
  { code: "ce", name: "Chechen", nativeName: "нохчийн мотт" },
  {
    code: "ny",
    name: "Chichewa; Chewa; Nyanja",
    nativeName: "chiCheŵa, chinyanja",
  },
  { code: "zh", name: "Chinese", nativeName: "中文 (Zhōngwén), 汉语, 漢語" },
  { code: "cv", name: "Chuvash", nativeName: "чӑваш чӗлхи" },
  { code: "kw", name: "Cornish", nativeName: "Kernewek" },
  { code: "co", name: "Corsican", nativeName: "corsu, lingua corsa" },
  { code: "cr", name: "Cree", nativeName: "ᓀᐦᐃᔭᐍᐏᐣ" },
  { code: "hr", name: "Croatian", nativeName: "hrvatski" },
  { code: "cs", name: "Czech", nativeName: "česky, čeština" },
  { code: "da", name: "Danish", nativeName: "dansk" },
  { code: "dv", name: "Divehi; Dhivehi; Maldivian;", nativeName: "ދިވެހި" },
  { code: "nl", name: "Dutch", nativeName: "Nederlands, Vlaams" },
  { code: "en", name: "English", nativeName: "English" },
  { code: "eo", name: "Esperanto", nativeName: "Esperanto" },
  { code: "et", name: "Estonian", nativeName: "eesti, eesti keel" },
  { code: "ee", name: "Ewe", nativeName: "Eʋegbe" },
  { code: "fo", name: "Faroese", nativeName: "føroyskt" },
  { code: "fj", name: "Fijian", nativeName: "vosa Vakaviti" },
  { code: "fi", name: "Finnish", nativeName: "suomi, suomen kieli" },
  { code: "fr", name: "French", nativeName: "français, langue française" },
  {
    code: "ff",
    name: "Fula; Fulah; Pulaar; Pular",
    nativeName: "Fulfulde, Pulaar, Pular",
  },
  { code: "gl", name: "Galician", nativeName: "Galego" },
  { code: "ka", name: "Georgian", nativeName: "ქართული" },
  { code: "de", name: "German", nativeName: "Deutsch" },
  { code: "el", name: "Greek, Modern", nativeName: "Ελληνικά" },
  { code: "gn", name: "Guaraní", nativeName: "Avañeẽ" },
  { code: "gu", name: "Gujarati", nativeName: "ગુજરાતી" },
  { code: "ht", name: "Haitian; Haitian Creole", nativeName: "Kreyòl ayisyen" },
  { code: "ha", name: "Hausa", nativeName: "Hausa, هَوُسَ" },
  { code: "he", name: "Hebrew (modern)", nativeName: "עברית" },
  { code: "hz", name: "Herero", nativeName: "Otjiherero" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी, हिंदी" },
  { code: "ho", name: "Hiri Motu", nativeName: "Hiri Motu" },
  { code: "hu", name: "Hungarian", nativeName: "Magyar" },
  { code: "ia", name: "Interlingua", nativeName: "Interlingua" },
  { code: "id", name: "Indonesian", nativeName: "Bahasa Indonesia" },
  {
    code: "ie",
    name: "Interlingue",
    nativeName: "Originally called Occidental; then Interlingue after WWII",
  },
  { code: "ga", name: "Irish", nativeName: "Gaeilge" },
  { code: "ig", name: "Igbo", nativeName: "Asụsụ Igbo" },
  { code: "ik", name: "Inupiaq", nativeName: "Iñupiaq, Iñupiatun" },
  { code: "io", name: "Ido", nativeName: "Ido" },
  { code: "is", name: "Icelandic", nativeName: "Íslenska" },
  { code: "it", name: "Italian", nativeName: "Italiano" },
  { code: "iu", name: "Inuktitut", nativeName: "ᐃᓄᒃᑎᑐᑦ" },
  { code: "ja", name: "Japanese", nativeName: "日本語 (にほんご／にっぽんご)" },
  { code: "jv", name: "Javanese", nativeName: "basa Jawa" },
  {
    code: "kl",
    name: "Kalaallisut, Greenlandic",
    nativeName: "kalaallisut, kalaallit oqaasii",
  },
  { code: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ" },
  { code: "kr", name: "Kanuri", nativeName: "Kanuri" },
  { code: "ks", name: "Kashmiri", nativeName: "कश्मीरी, كشميري‎" },
  { code: "kk", name: "Kazakh", nativeName: "Қазақ тілі" },
  { code: "km", name: "Khmer", nativeName: "ភាសាខ្មែរ" },
  { code: "ki", name: "Kikuyu, Gikuyu", nativeName: "Gĩkũyũ" },
  { code: "rw", name: "Kinyarwanda", nativeName: "Ikinyarwanda" },
  { code: "ky", name: "Kirghiz, Kyrgyz", nativeName: "кыргыз тили" },
  { code: "kv", name: "Komi", nativeName: "коми кыв" },
  { code: "kg", name: "Kongo", nativeName: "KiKongo" },
  {
    code: "ko",
    name: "Korean",
    nativeName: "한국어 (韓國語), 조선말 (朝鮮語)",
  },
  { code: "ku", name: "Kurdish", nativeName: "Kurdî, كوردی‎" },
  { code: "kj", name: "Kwanyama, Kuanyama", nativeName: "Kuanyama" },
  { code: "la", name: "Latin", nativeName: "latine, lingua latina" },
  {
    code: "lb",
    name: "Luxembourgish, Letzeburgesch",
    nativeName: "Lëtzebuergesch",
  },
  { code: "lg", name: "Luganda", nativeName: "Luganda" },
  {
    code: "li",
    name: "Limburgish, Limburgan, Limburger",
    nativeName: "Limburgs",
  },
  { code: "ln", name: "Lingala", nativeName: "Lingála" },
  { code: "lo", name: "Lao", nativeName: "ພາສາລາວ" },
  { code: "lt", name: "Lithuanian", nativeName: "lietuvių kalba" },
  { code: "lu", name: "Luba-Katanga", nativeName: "" },
  { code: "lv", name: "Latvian", nativeName: "latviešu valoda" },
  { code: "gv", name: "Manx", nativeName: "Gaelg, Gailck" },
  { code: "mk", name: "Macedonian", nativeName: "македонски јазик" },
  { code: "mg", name: "Malagasy", nativeName: "Malagasy fiteny" },
  { code: "ms", name: "Malay", nativeName: "bahasa Melayu, بهاس ملايو‎" },
  { code: "ml", name: "Malayalam", nativeName: "മലയാളം" },
  { code: "mt", name: "Maltese", nativeName: "Malti" },
  { code: "mi", name: "Māori", nativeName: "te reo Māori" },
  { code: "mr", name: "Marathi (Marāṭhī)", nativeName: "मराठी" },
  { code: "mh", name: "Marshallese", nativeName: "Kajin M̧ajeļ" },
  { code: "mn", name: "Mongolian", nativeName: "монгол" },
  { code: "na", name: "Nauru", nativeName: "Ekakairũ Naoero" },
  { code: "nv", name: "Navajo, Navaho", nativeName: "Diné bizaad, Dinékʼehǰí" },
  { code: "nb", name: "Norwegian Bokmål", nativeName: "Norsk bokmål" },
  { code: "nd", name: "North Ndebele", nativeName: "isiNdebele" },
  { code: "ne", name: "Nepali", nativeName: "नेपाली" },
  { code: "ng", name: "Ndonga", nativeName: "Owambo" },
  { code: "nn", name: "Norwegian Nynorsk", nativeName: "Norsk nynorsk" },
  { code: "no", name: "Norwegian", nativeName: "Norsk" },
  { code: "ii", name: "Nuosu", nativeName: "ꆈꌠ꒿ Nuosuhxop" },
  { code: "nr", name: "South Ndebele", nativeName: "isiNdebele" },
  { code: "oc", name: "Occitan", nativeName: "Occitan" },
  { code: "oj", name: "Ojibwe, Ojibwa", nativeName: "ᐊᓂᔑᓈᐯᒧᐎᓐ" },
  {
    code: "cu",
    name: "Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic",
    nativeName: "ѩзыкъ словѣньскъ",
  },
  { code: "om", name: "Oromo", nativeName: "Afaan Oromoo" },
  { code: "or", name: "Oriya", nativeName: "ଓଡ଼ିଆ" },
  { code: "os", name: "Ossetian, Ossetic", nativeName: "ирон æвзаг" },
  { code: "pa", name: "Panjabi, Punjabi", nativeName: "ਪੰਜਾਬੀ, پنجابی‎" },
  { code: "pi", name: "Pāli", nativeName: "पाऴि" },
  { code: "fa", name: "Persian", nativeName: "فارسی" },
  { code: "pl", name: "Polish", nativeName: "polski" },
  { code: "ps", name: "Pashto, Pushto", nativeName: "پښتو" },
  { code: "pt", name: "Portuguese", nativeName: "Português" },
  { code: "qu", name: "Quechua", nativeName: "Runa Simi, Kichwa" },
  { code: "rm", name: "Romansh", nativeName: "rumantsch grischun" },
  { code: "rn", name: "Kirundi", nativeName: "kiRundi" },
  { code: "ro", name: "Romanian, Moldavian, Moldovan", nativeName: "română" },
  { code: "ru", name: "Russian", nativeName: "русский язык" },
  { code: "sa", name: "Sanskrit (Saṁskṛta)", nativeName: "संस्कृतम्" },
  { code: "sc", name: "Sardinian", nativeName: "sardu" },
  { code: "sd", name: "Sindhi", nativeName: "सिन्धी, سنڌي، سندھی‎" },
  { code: "se", name: "Northern Sami", nativeName: "Davvisámegiella" },
  { code: "sm", name: "Samoan", nativeName: "gagana faa Samoa" },
  { code: "sg", name: "Sango", nativeName: "yângâ tî sängö" },
  { code: "sr", name: "Serbian", nativeName: "српски језик" },
  { code: "gd", name: "Scottish Gaelic; Gaelic", nativeName: "Gàidhlig" },
  { code: "sn", name: "Shona", nativeName: "chiShona" },
  { code: "si", name: "Sinhala, Sinhalese", nativeName: "සිංහල" },
  { code: "sk", name: "Slovak", nativeName: "slovenčina" },
  { code: "sl", name: "Slovene", nativeName: "slovenščina" },
  { code: "so", name: "Somali", nativeName: "Soomaaliga, af Soomaali" },
  { code: "st", name: "Southern Sotho", nativeName: "Sesotho" },
  { code: "es", name: "Spanish; Castilian", nativeName: "español, castellano" },
  { code: "su", name: "Sundanese", nativeName: "Basa Sunda" },
  { code: "sw", name: "Swahili", nativeName: "Kiswahili" },
  { code: "ss", name: "Swati", nativeName: "SiSwati" },
  { code: "sv", name: "Swedish", nativeName: "svenska" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்" },
  { code: "te", name: "Telugu", nativeName: "తెలుగు" },
  { code: "tg", name: "Tajik", nativeName: "тоҷикӣ, toğikī, تاجیکی‎" },
  { code: "th", name: "Thai", nativeName: "ไทย" },
  { code: "ti", name: "Tigrinya", nativeName: "ትግርኛ" },
  {
    code: "bo",
    name: "Tibetan Standard, Tibetan, Central",
    nativeName: "བོད་ཡིག",
  },
  { code: "tk", name: "Turkmen", nativeName: "Türkmen, Түркмен" },
  { code: "tl", name: "Tagalog", nativeName: "Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔" },
  { code: "tn", name: "Tswana", nativeName: "Setswana" },
  { code: "to", name: "Tonga (Tonga Islands)", nativeName: "faka Tonga" },
  { code: "tr", name: "Turkish", nativeName: "Türkçe" },
  { code: "ts", name: "Tsonga", nativeName: "Xitsonga" },
  { code: "tt", name: "Tatar", nativeName: "татарча, tatarça, تاتارچا‎" },
  { code: "tw", name: "Twi", nativeName: "Twi" },
  { code: "ty", name: "Tahitian", nativeName: "Reo Tahiti" },
  { code: "ug", name: "Uighur, Uyghur", nativeName: "Uyƣurqə, ئۇيغۇرچە‎" },
  { code: "uk", name: "Ukrainian", nativeName: "українська" },
  { code: "ur", name: "Urdu", nativeName: "اردو" },
  { code: "uz", name: "Uzbek", nativeName: "zbek, Ўзбек, أۇزبېك‎" },
  { code: "ve", name: "Venda", nativeName: "Tshivenḓa" },
  { code: "vi", name: "Vietnamese", nativeName: "Tiếng Việt" },
  { code: "vo", name: "Volapük", nativeName: "Volapük" },
  { code: "wa", name: "Walloon", nativeName: "Walon" },
  { code: "cy", name: "Welsh", nativeName: "Cymraeg" },
  { code: "wo", name: "Wolof", nativeName: "Wollof" },
  { code: "fy", name: "Western Frisian", nativeName: "Frysk" },
  { code: "xh", name: "Xhosa", nativeName: "isiXhosa" },
  { code: "yi", name: "Yiddish", nativeName: "ייִדיש" },
  { code: "yo", name: "Yoruba", nativeName: "Yorùbá" },
  { code: "za", name: "Zhuang, Chuang", nativeName: "Saɯ cueŋƅ, Saw cuengh" },
];

let members = [];

export const getMembers = () => members;

export const addMember = (email: string) => {
  const newMember = { id: members.length + 1, email, role: "Member" };
  members = [...members, newMember];
};

export const removeMember = (id: number) => {
  members = members.filter((member) => member.id !== id);
};

export const addMemberData = (email: string, role: string) => {
  const newMember = {
    id: MemberData.length + 1,
    name: generateRandomName(),
    email,
    accountType: role,
    since: formatTodayDate(),
  };
  const updatedMemberData = [...MemberData, newMember];
  MemberData = updatedMemberData;
  members = [];
};
