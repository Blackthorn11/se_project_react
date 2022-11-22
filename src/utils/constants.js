// Perosnal API Key = "9f8c2d48165812ad3855017695e94b3e"

const APIkey = "9f8c2d48165812ad3855017695e94b3e";

// My hometown coordinates
const latitude = "32.6941";
const longitude = "35.3685";

// Weather conditions for the WeatherCard

const weatherConditions = {
  sunday: "/images/sunday.svg",
  cloudday: "/images/cloudday.svg",
  rainday: "/images/rainday.svg",
  stormday: "/images/stormday.svg",
  snowday: "/images/snowday.svg",
  fogday: "/images/fogday.svg",
  sunnight: "/images/sunnight.svg",
  cloudnight: "/images/cloudnight.svg",
  rainnight: "/images/rainnight.svg",
  stormnight: "/images/stormnight.svg",
  snownight: "/images/snownight.svg",
  fognight: "/images/fognight.svg",
};

// Default clothing items array

const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://images.unsplash.com/photo-1589831377283-33cb1cc6bd5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fENhcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://images.unsplash.com/photo-1513789181297-6f2ec112c0bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8SG9vZGllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8SmFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    _id: 5,
    name: "Winter coat",
    weather: "cold",
    link: "https://images.unsplash.com/photo-1548950939-629ecb4d7101?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8V2ludGVyJTIwY29hdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
];

export { APIkey, latitude, longitude, weatherConditions, defaultClothingItems };
