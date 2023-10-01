import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3 } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import dictionary from "../src/assets/images/dictionary.png"
import rent from "./rent.png"
const projects = [
    {
        id: 1,
        title: "Rent From ME",
        description: "Rent From Me is perfect for people who want to earn extra money by renting out their belongings, such as tools, sports equipment, party supplies, and more. It's also a great option for people who are looking for a convenient and affordable way to rent items that they only need occasionally.",
        language: ["React","Tailwind","RTK Query"],
        image: `${rent}`,
        github_link: "https://github.com/BakarMokhtarAli/Rent-From-Me",
        live_link: "https://rent-from-me-y1gc.vercel.app/"
    },
    {
        id: 2,
        title: "Nasrudiin",
        description: "Nasrudin School is a private, independent, co-educational Islamic school located in Mogadishu, Somalia. It was founded in 2021 with the mission of providing high-quality education to students of all backgrounds, regardless of their financial situation. ",
        language: ["Html","css","js"],
        image: "../src/assets/images/nasrudiin.png",
        github_link: "https://github.com/BakarMokhtarAli/nasrudiin",
        live_link: "https://clever-moonbeam-9f7e59.netlify.app/"
    },
    {
        id: 3,
        title: "Movies",
        description: "Movie App is the perfect app for movie lovers of all ages. It's easy to use and navigate, and it's packed with features that will help you find the perfect movie to watch next",
        image: "../src/assets/images/movies.png",
        language: ["React","Tailwind"],
        github_link: "https://github.com/BakarMokhtarAli/Movie-App",
        live_link: "https://movie-759a0f.netlify.app/"
    },
    {
        id: 4,
        title: "Dictionary",
        description: "This is a simple dictionary project built using HTML, CSS, and JavaScript. It allows users to look up the definitions of words and phrases.",
        image: `${dictionary}`,
        language: ["Html","Css", "Js"],
        github_link: "https://github.com/BakarMokhtarAli/English-Dictionary",
        live_link: "https://english-dictionary-netlify.netlify.app/"
    },
    {
        id: 5,
        title: "Rock Paper Scissor Game",
        description: "Rock, Paper, Scissors is a simple but fun game that can be enjoyed by people of all ages",
        image: "../src/assets/images/game.png",
        language: ["Html","Css", "Js"],
        github_link: "https://github.com/BakarMokhtarAli/Rock-paper-scissor",
        live_link: "https://rock-paper-scissors1-game87.netlify.app/"
    },
    {
        id: 6,
        title: "Note Taking App",
        description: "Note Taking App is perfect for students, professionals, and anyone else who needs to take notes on the go. It's easy to use and navigate, and it has all the features you need to take organized and effective notes.",
        image: "../src/assets/images/note.png",
        language: ["Html","Css", "Js"],
        github_link: "https://github.com/BakarMokhtarAli/note-aking",
        live_link: "https://note-taking-appc30ece.netlify.app/"
    },
    {
        id: 7,
        title: "Age Calculator",
        description: "Age Calculator App is perfect for anyone who needs to calculate their age quickly and easily. It's also a great way to keep track of your age over time.",
        image: "../src/assets/images/age.png",
        language: ["Html","Css", "Js"],
        github_link: "https://github.com/BakarMokhtarAli/Age-Calculator",
        live_link: "https://benevolent-blini-0c5ec3.netlify.app/"
    }
]

export default projects;