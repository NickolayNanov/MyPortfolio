export const projects = [
  {
    title: 'VTU Manager',
    description: "The VTU administration needed more modern software for managing their work so me and a friend of mine did this system for them. I did the back-end architecture by using DDD and making sure that all SOLID principles are being followed. As a database we use MSSQL Server and EF Core 5 as an ORM.",
      image: '/images/1.png',
      tags: ['ASP .NET CORE 5 WebAPI', 'React', 'EF Core 5', 'MSSQL'],
    source: '#projects',
    visit: 'https://vtuwork.com/',
    id: 0,
  },
  {
    title: 'Planner',
    description:"An app which currently is not deployed anywhere. It is using a basic ASP .NET Core API and React with bootstrap as a UI framework. The purpose of this project was to learn React and this project has been assigned with 6.00 from the tutors at the university",
    image: '/images/2.png',
    tags: ['React', 'JavaScript', 'Typescript', 'ASP .NET Core'],
    source: 'https://google.com',
    visit: 'https://google.com',
    id: 1,
  },
  {
    title: 'Maturnik',
    description: "This is a project where I made online preparation for the exams for the 12th graders. I used Blazor-Server-Side for making the project and it had 200+ users registerd. As a utility project I also did a pdf reader which scraped the questions and answers from a pdf and produces an excel file with all the data which is later being imported directly into the system.",
      image: '/images/3.png',
      tags: ['Blazor', 'ASP NET 5', 'C#'],
    source: 'https://github.com/NickolayNanov/Examer',
    visit: 'https://maturnik.com',
    id: 2,
  }
];

export const TimeLineData = [
  { year: 2018, text: 'Signed up in Softuni', },
  { year: 2019, text: 'Graduated at Softuni with overall mark: 5.91', },
  { year: 2020, text: 'Started work as junior .NET developer at VSG Bulgaria', },
  { year: 2021, text: 'Continue to develop myself as a professional'},
];