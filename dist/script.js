const { Router, Route, IndexRoute, Link } = ReactRouter;
const App = React.createClass({ displayName: "App",
  render: function () {
    return (
      React.createElement("div", null,
      React.createElement("header", { className: "header" },
      React.createElement("logo", null,
      React.createElement("img", { src: "http://ahmetaksungur.com/wp-content/uploads/2019/09/Ahmet-Aksungur-Logo-1024x527.png" })),


      React.createElement("menu", null,
      React.createElement("ul", null,
      React.createElement("li", null,
      React.createElement(Link, { className: "menu-link", to: "/" }, "Home ")),


      React.createElement("li", null, React.createElement(Link, { className: "menu-link", to: "work" }, "Work ")),
      React.createElement("li", null, React.createElement(Link, { className: "menu-link", to: "about" }, "About")),
      React.createElement("li", null, React.createElement(Link, { className: "menu-link", to: "blog" }, "Blog")),
      React.createElement("li", { className: "contact-button" }, React.createElement(Link, { to: "work" }, "Contact"))))),



      this.props.children));

  } });


const Home = React.createClass({ displayName: "Home",
  render: function () {
    return (
      React.createElement("main", null,



      React.createElement("page-home", null,

      React.createElement("div", { className: "title" },
      React.createElement("h1", null, "Hi, "),

      React.createElement("h1", { className: "im" }, "I'm "),
      React.createElement("h1", { className: "mi" }, " AHMET AKSUNGUR"),
      React.createElement("h1", null, "Creator,"),

      React.createElement("h1", null, "Web Developer and Designer ")),



      React.createElement("div", { className: "social" },
      React.createElement("ul", null,

      React.createElement("li", null,
      React.createElement("a", { href: "#" },
      React.createElement("svg", { viewBox: "0 0 32.6 31.8" }, React.createElement("path", { class: "st0", d: "M16.3,0C7.3,0,0,7.3,0,16.3c0,7.2,4.7,13.3,11.1,15.5c0.8,0.1,1.1-0.4,1.1-0.8c0-0.4,0-1.4,0-2.8  c-4.5,1-5.5-2.2-5.5-2.2c-0.7-1.9-1.8-2.4-1.8-2.4c-1.5-1,0.1-1,0.1-1c1.6,0.1,2.5,1.7,2.5,1.7c1.5,2.5,3.8,1.8,4.7,1.4  c0.1-1.1,0.6-1.8,1-2.2c-3.6-0.4-7.4-1.8-7.4-8.1c0-1.8,0.6-3.2,1.7-4.4C7.4,10.7,6.8,9,7.7,6.8c0,0,1.4-0.4,4.5,1.7  c1.3-0.4,2.7-0.5,4.1-0.5c1.4,0,2.8,0.2,4.1,0.5c3.1-2.1,4.5-1.7,4.5-1.7c0.9,2.2,0.3,3.9,0.2,4.3c1,1.1,1.7,2.6,1.7,4.4  c0,6.3-3.8,7.6-7.4,8c0.6,0.5,1.1,1.5,1.1,3c0,2.2,0,3.9,0,4.5c0,0.4,0.3,0.9,1.1,0.8c6.5-2.2,11.1-8.3,11.1-15.5  C32.6,7.3,25.3,0,16.3,0z" })))),




      React.createElement("li", null,
      React.createElement("a", { href: "#" },
      React.createElement("svg", { viewBox: "-28 0 512 512.00098" }, React.createElement("path", { d: "m104.359375 151.625h-86.3125c-9.675781 0-17.546875 7.871094-17.546875 17.546875v325.285156c0 9.671875 7.871094 17.542969 17.546875 17.542969h86.3125c9.671875 0 17.542969-7.871094 17.542969-17.542969v-325.285156c0-9.675781-7.871094-17.546875-17.542969-17.546875zm-12.5 330.332031h-61.316406v-300.289062h61.316406zm0 0" }), React.createElement("path", { d: "m61.203125 0c-33.75 0-61.203125 27.453125-61.203125 61.199219 0 33.75 27.453125 61.203125 61.203125 61.203125 33.742187 0 61.199219-27.453125 61.199219-61.203125 0-33.746094-27.453125-61.199219-61.199219-61.199219zm0 92.359375c-17.183594 0-31.160156-13.976563-31.160156-31.160156 0-17.179688 13.976562-31.15625 31.160156-31.15625 17.179687 0 31.15625 13.976562 31.15625 31.15625 0 17.179687-13.976563 31.160156-31.15625 31.160156zm0 0" }), React.createElement("path", { d: "m401.046875 189.761719c-20.632813-17.222657-46.863281-26.433594-73.832031-25.933594-16.75.308594-33.117188 4.347656-47.949219 11.660156v-7.101562c0-9.253907-7.503906-16.757813-16.757813-16.757813h-87.882812c-9.253906 0-16.757812 7.503906-16.757812 16.757813v326.855469c0 9.257812 7.503906 16.757812 16.757812 16.757812h89.617188c8.296874 0 15.023437-6.726562 15.023437-15.019531v-194.878907c0-16.683593 13.054687-30.800781 29.726563-31.296874 17.328124-.511719 31.585937 13.429687 31.585937 30.644531v195.84375c0 8.121093 6.585937 14.707031 14.707031 14.707031h86.128906c8.121094 0 14.707032-6.585938 14.707032-14.707031v-189.886719c0-45.546875-20.074219-88.429688-55.074219-117.644531zm25.03125 292.195312h-55.453125v-180.507812c0-33.46875-27.230469-60.699219-60.703125-60.699219-33.46875 0-60.699219 27.230469-60.699219 60.699219v180.507812h-61.3125v-300.289062h61.3125v21.832031h.019532c-.003907 3.539062 1.226562 7.09375 3.757812 9.957031 5.496094 6.210938 14.992188 6.789063 21.203125 1.289063 14.800781-13.101563 33.824219-20.515625 53.566406-20.882813 19.761719-.375 38.941407 6.367188 54.027344 18.960938 28.144531 23.492187 44.28125 57.964843 44.28125 94.582031zm0 0" })))),





      React.createElement("li", null,
      React.createElement("a", { href: "#" },
      React.createElement("svg", { viewBox: "0 0 56.7 56.7" },
      React.createElement("g", null, React.createElement("path", { d: "M28.2,16.7c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8S41,36.5,41,29.5S35.2,16.7,28.2,16.7z M28.2,37.7 c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S32.7,37.7,28.2,37.7z" }),

      React.createElement("circle", { cx: "41.5", cy: "16.4", r: "2.9" }),
      React.createElement("path", { d: "M49,8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7,0-14.5,5.8-14.5,14.5v20.5c0,4.3,1.4,8,4.2,10.7c2.7,2.6,6.3,3.9,10.4,3.9 h20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.6V19.3C53,15.1,51.6,11.5,49,8.9z M48.6,39.9c0,3.1-1.1,5.6-2.9,7.3 s-4.3,2.6-7.3,2.6H18c-3,0-5.5-0.9-7.3-2.6C8.9,45.4,8,42.9,8,39.8V19.3c0-3,0.9-5.5,2.7-7.3c1.7-1.7,4.3-2.6,7.3-2.6h20.6 c3,0,5.5,0.9,7.3,2.7c1.7,1.8,2.7,4.3,2.7,7.2V39.9L48.6,39.9z" }))))),











      React.createElement("li", null,
      React.createElement("a", { href: "#" },
      React.createElement("svg", { viewBox: "0 0 24 24" }, React.createElement("polygon", { fill: "none", points: "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2", stroke: "#000", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2" }), React.createElement("line", { fill: "none", stroke: "#000", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", x1: "12", x2: "12", y1: "22", y2: "15.5" }), React.createElement("polyline", { fill: "none", points: "22 8.5 12 15.5 2 8.5", stroke: "#000", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2" }), React.createElement("polyline", { fill: "none", points: "2 15.5 12 8.5 22 15.5", stroke: "#000", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2" }), React.createElement("line", { fill: "none", stroke: "#000", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", x1: "12", x2: "12", y1: "2", y2: "8.5" })))),



      React.createElement("li", null,
      React.createElement("a", { href: "#" },
      React.createElement("svg", { viewBox: "0 0 24 24" }, React.createElement("path", { d: "m16.354 23.17c.02-.006.039-.014.059-.021 12.215-4.853 8.836-23.149-4.413-23.149-6.649 0-12 5.42-12 12 0 8.327 8.434 14.269 16.354 11.17zm-11.073-3.111c.852-1.432 3.609-5.472 8.315-6.866.984 2.509 1.674 5.436 1.742 8.755-3.566 1.199-7.327.392-10.057-1.889zm11.532 1.263c-.131-3.189-.782-6.017-1.71-8.467 2.082-.325 4.492-.108 7.225.987-.581 3.261-2.666 6.002-5.515 7.48zm5.672-9.031c-3.01-1.131-5.663-1.272-7.959-.834-.355-.8-.728-1.569-1.123-2.277 3.523-1.407 5.605-3.122 6.537-4.03 1.645 1.904 2.622 4.369 2.545 7.141zm-3.61-8.209c-.848.807-2.845 2.437-6.26 3.77-1.674-2.648-3.464-4.516-4.598-5.562 3.628-1.494 7.812-.856 10.858 1.792zm-12.292-1.059c.856.753 2.735 2.561 4.548 5.357-2.49.802-5.612 1.391-9.409 1.474.604-2.894 2.408-5.346 4.861-6.831zm-5.051 8.337c4.25-.069 7.69-.74 10.409-1.648.376.659.733 1.377 1.076 2.123-4.735 1.508-7.694 5.401-8.827 7.159-1.828-2.04-2.836-4.702-2.658-7.634z" })))),




      React.createElement("li", null,
      React.createElement("a", { href: "#" },
      React.createElement("svg", { viewBox: "0 0 24 24" },
      React.createElement("g", null,
      React.createElement("g", { transform: "translate(-700.000000, -600.000000)" }),

      React.createElement("g", { transform: "translate(12.000000, 18.000000)" },
      React.createElement("path", { d: "M3.7-13v1.5h6.2V-13H3.7z M-12-13.8l7.2,0.1c0,0,3.9-0.2,4.5,2.9c0.5,3.1-2,3.9-2,3.9s3.1,0.7,2.7,4.3 s-4.7,3.7-4.7,3.7H-12V-13.8z M-8.7-7.8l3,0c0.2,0,0.7,0,1.1-0.1c0.2,0,0.5-0.2,0.8-0.4c0.1-0.1,0.3-0.3,0.4-0.6 c0.1-0.3,0.1-0.6,0.1-0.7c0-0.2,0-0.4-0.1-0.6s-0.2-0.4-0.4-0.5c-0.2-0.1-0.4-0.3-0.6-0.3s-0.6-0.1-0.9-0.1l-3.2,0V-7.8z M-8.7-1.6l3.2,0c0.2,0,0.8,0,1.2-0.1c0.2,0,0.6-0.2,0.8-0.4c0.1-0.1,0.3-0.4,0.4-0.7C-3-3.1-2.9-3.5-2.9-3.6c0-0.3,0-0.5-0.1-0.7 c-0.1-0.2-0.2-0.4-0.4-0.6c-0.2-0.2-0.4-0.3-0.7-0.4c-0.3-0.1-0.6-0.1-1-0.1l-3.5,0V-1.6z M4.3-3.6c0,0.1,0,2.2,1.8,2.7 c2,0.6,2.9-1.1,3-1.3h2.7c-0.1,0.3-1.2,4.7-7,3.3C1.1,0.2,1.3-4.1,1.3-4.4c0-0.3,0-2.1,1.5-3.8s3.5-1.7,3.9-1.7s2.6,0,3.9,1.5 C12.3-6.5,12-3.5,12-3.5L4.3-3.6z M9-5.4c0-0.3-0.1-0.6-0.2-0.9C8.7-6.6,8.5-6.9,8.3-7.1C8.1-7.3,7.9-7.5,7.6-7.6 C7.3-7.7,7-7.8,6.7-7.8c-0.3,0-0.6,0.1-0.9,0.2S5.3-7.3,5.1-7.1C4.9-6.9,4.8-6.6,4.6-6.3C4.5-6.1,4.4-5.8,4.4-5.4H9z" })))))))))));




















  } });

const work = React.createClass({ displayName: "work",
  render: function () {
    return (
      React.createElement("page-work", null,
      React.createElement("div", { className: "work" },
      React.createElement("article", { className: "recent-card" },
      React.createElement("div", { style: { backgroundImage: `url(https://cdn.dribbble.com/users/45617/screenshots/10634676/media/7058768655770eaa5c87e995ba1283b7.png)` }, className: "recent-card-image text-bottom-left" },
      React.createElement("article-meta", null,
      React.createElement("span", { className: "recent-card-title" }, "teknoloji-haberleri.com"),
      React.createElement("span", { className: "recent-card-alt-title" }, "Front-End")))),






      React.createElement("article", { className: "recent-card" },
      React.createElement("div", { style: { backgroundImage: `url(https://cdn.dribbble.com/users/45617/screenshots/10487061/media/4cce4ebac15596877ce33016725a1367.png)` }, className: "recent-card-image text-bottom-left" },
      React.createElement("article-meta", null,
      React.createElement("span", { className: "recent-card-title" }, "teknoloji-haberleri.com"),
      React.createElement("span", { className: "recent-card-alt-title" }, "Front-End")))),






      React.createElement("article", { className: "recent-card" },
      React.createElement("div", { style: { backgroundImage: `url(https://cdn.dribbble.com/users/1608962/screenshots/6837438/mobile_4x.png)` }, className: "recent-card-image text-bottom-left" },
      React.createElement("article-meta", null,
      React.createElement("span", { className: "recent-card-title" }, "teknoloji-haberleri.com"),
      React.createElement("span", { className: "recent-card-alt-title" }, "Front-End")))),






      React.createElement("article", { className: "recent-card" },
      React.createElement("div", { style: { backgroundImage: `url(https://cdn.dribbble.com/users/427857/screenshots/10632047/media/2ed35245dd5012238edb809b2fa49918.jpg)` }, className: "recent-card-image text-bottom-left" },
      React.createElement("article-meta", null,
      React.createElement("span", { className: "recent-card-title" }, "teknoloji-haberleri.com"),
      React.createElement("span", { className: "recent-card-alt-title" }, "Front-End")))),






      React.createElement("article", { className: "recent-card" },
      React.createElement("div", { style: { backgroundImage: `url(https://cdn.dribbble.com/users/427857/screenshots/10632047/media/2ed35245dd5012238edb809b2fa49918.jpg)` }, className: "recent-card-image text-bottom-left" },
      React.createElement("article-meta", null,
      React.createElement("span", { className: "recent-card-title" }, "teknoloji-haberleri.com"),
      React.createElement("span", { className: "recent-card-alt-title" }, "Front-End")))),






      React.createElement("article", { className: "recent-card" },
      React.createElement("div", { style: { backgroundImage: `url(https://cdn.dribbble.com/users/427857/screenshots/10632047/media/2ed35245dd5012238edb809b2fa49918.jpg)` }, className: "recent-card-image text-bottom-left" },
      React.createElement("article-meta", null,
      React.createElement("span", { className: "recent-card-title" }, "teknoloji-haberleri.com"),
      React.createElement("span", { className: "recent-card-alt-title" }, "Front-End")))),







      React.createElement("article", { className: "recent-card" },
      React.createElement("div", { style: { backgroundImage: `url(https://cdn.dribbble.com/users/427857/screenshots/10632047/media/2ed35245dd5012238edb809b2fa49918.jpg)` }, className: "recent-card-image text-bottom-left" },
      React.createElement("article-meta", null,
      React.createElement("span", { className: "recent-card-title" }, "teknoloji-haberleri.com"),
      React.createElement("span", { className: "recent-card-alt-title" }, "Front-End")))),







      React.createElement("article", { className: "recent-card" },
      React.createElement("div", { style: { backgroundImage: `url(https://cdn.dribbble.com/users/427857/screenshots/10632047/media/2ed35245dd5012238edb809b2fa49918.jpg)` }, className: "recent-card-image text-bottom-left" },
      React.createElement("article-meta", null,
      React.createElement("span", { className: "recent-card-title" }, "teknoloji-haberleri.com"),
      React.createElement("span", { className: "recent-card-alt-title" }, "Front-End")))),







      React.createElement("article", { className: "recent-card" },
      React.createElement("div", { style: { backgroundImage: `url(https://cdn.dribbble.com/users/427857/screenshots/10632047/media/2ed35245dd5012238edb809b2fa49918.jpg)` }, className: "recent-card-image text-bottom-left" },
      React.createElement("article-meta", null,
      React.createElement("span", { className: "recent-card-title" }, "teknoloji-haberleri.com"),
      React.createElement("span", { className: "recent-card-alt-title" }, "Front-End")))))));







  } });


const about = React.createClass({ displayName: "about",
  render: function () {
    return (
      React.createElement("page-about", null,
      React.createElement("div", { className: "about" },
      React.createElement("h3", null, "About"),
      React.createElement("p", null, "For the past 12 years, I've been developing applications for the web using mostly PHP. I do this for a living and love what I do as every day there is something new and exciting to learn.    "),


      React.createElement("p", null, "In my spare time, the web development community is a big part of my life. Whether teaching code to kids at a local school, managing online programming groups and blogs or attending a conference, I find keeping involved helps me stay up to date."),

      React.createElement("p", null, "This is also my chance to give back to the community that helped me get started, a place I am proud to be part of."),

      React.createElement("p", null, "Besides programming I love spending time with friends and family and can often be found together going out catching the latest movie, staying in playing games on the sofa or planning a trip to someplace I've never been before."),

      React.createElement("p", null, "I graduated from university Hull School of Art & Design where I studied web design and got a first class degree with honours. While I was at university I worked part time for a web design agency called Surrect Media that helped me to further hone in my skills as a developer. When not at work I'm usually working on a new project from home which could be anything to updating one of my sites to creating a new CRM application. Since leaving university I've been lucky enough to work for The One Point."))));





  } });


const blog = React.createClass({ displayName: "blog",
  render: function () {
    return (
      React.createElement("div", null,
      React.createElement("section", { className: "card-container" },


      React.createElement("article", { className: "card-md" },
      React.createElement("a", { className: "card-md__link", href: "#" },
      React.createElement("div", { className: "card-md__img" },
      React.createElement("div", { className: "absolute-bg", style: { backgroundImage: `url(https://cdn.dribbble.com/users/1608962/screenshots/6837438/mobile_4x.png)` } })),

      React.createElement("div", { className: "card-md__container" },
      React.createElement("span", { className: "card-md__fake" }, "Mobil"),

      React.createElement("h2", null, "The Best Outerwear Options for the 2016 Fall/Winter Season"),
      React.createElement("span", { className: "card-md__fake" }, "Read more")))),




      React.createElement("article", { className: "card-md" },
      React.createElement("a", { className: "card-md__link", href: "#" },
      React.createElement("div", { className: "card-md__img" },
      React.createElement("div", { className: "absolute-bg", style: { backgroundImage: `url(https://cdn.dribbble.com/users/1608962/screenshots/6837438/mobile_4x.png)` } })),

      React.createElement("div", { className: "card-md__container" },
      React.createElement("span", { className: "card-md__fake" }, "Mobil"),

      React.createElement("h2", null, "The Best Outerwear Options for the 2016 Fall/Winter Season"),
      React.createElement("span", { className: "card-md__fake" }, "Read more")))),




      React.createElement("article", { className: "card-md" },
      React.createElement("a", { className: "card-md__link", href: "#" },
      React.createElement("div", { className: "card-md__img" },
      React.createElement("div", { className: "absolute-bg", style: { backgroundImage: `url(https://cdn.dribbble.com/users/1608962/screenshots/6837438/mobile_4x.png)` } })),

      React.createElement("div", { className: "card-md__container" },
      React.createElement("span", { className: "card-md__fake" }, "Mobil"),

      React.createElement("h2", null, "The Best Outerwear Options for the 2016 Fall/Winter Season"),
      React.createElement("span", { className: "card-md__fake" }, "Read more")))),




      React.createElement("article", { className: "card-md" },
      React.createElement("a", { className: "card-md__link", href: "#" },
      React.createElement("div", { className: "card-md__img" },
      React.createElement("div", { className: "absolute-bg", style: { backgroundImage: `url(https://cdn.dribbble.com/users/1608962/screenshots/6837438/mobile_4x.png)` } })),

      React.createElement("div", { className: "card-md__container" },
      React.createElement("span", { className: "card-md__fake" }, "Mobil"),

      React.createElement("h2", null, "The Best Outerwear Options for the 2016 Fall/Winter Season"),
      React.createElement("span", { className: "card-md__fake" }, "Read more")))),





      React.createElement("article", { className: "card-md" },
      React.createElement("a", { className: "card-md__link", href: "#" },
      React.createElement("div", { className: "card-md__img" },
      React.createElement("div", { className: "absolute-bg", style: { backgroundImage: `url(https://cdn.dribbble.com/users/1608962/screenshots/6837438/mobile_4x.png)` } })),

      React.createElement("div", { className: "card-md__container" },
      React.createElement("span", { className: "card-md__fake" }, "Mobil"),

      React.createElement("h2", null, "The Best Outerwear Options for the 2016 Fall/Winter Season"),
      React.createElement("span", { className: "card-md__fake" }, "Read more")))),





      React.createElement("article", { className: "card-md" },
      React.createElement("a", { className: "card-md__link", href: "#" },
      React.createElement("div", { className: "card-md__img" },
      React.createElement("div", { className: "absolute-bg", style: { backgroundImage: `url(https://cdn.dribbble.com/users/1608962/screenshots/6837438/mobile_4x.png)` } })),

      React.createElement("div", { className: "card-md__container" },
      React.createElement("span", { className: "card-md__fake" }, "Mobil"),

      React.createElement("h2", null, "The Best Outerwear Options for the 2016 Fall/Winter Season"),
      React.createElement("span", { className: "card-md__fake" }, "Read more")))),




      React.createElement("article", { className: "card-md" },
      React.createElement("a", { className: "card-md__link", href: "#" },
      React.createElement("div", { className: "card-md__img" },
      React.createElement("div", { className: "absolute-bg", style: { backgroundImage: `url(https://cdn.dribbble.com/users/1608962/screenshots/6837438/mobile_4x.png)` } })),

      React.createElement("div", { className: "card-md__container" },
      React.createElement("span", { className: "card-md__fake" }, "Mobil"),

      React.createElement("h2", null, "The Best Outerwear Options for the 2016 Fall/Winter Season"),
      React.createElement("span", { className: "card-md__fake" }, "Read more")))))));






  } });


// Set a "home" route of "/" to work with the main "App" component, then use IndexRoute with the "Home' component to set it as the initial component rendered.
ReactDOM.render(
React.createElement(Router, null,
React.createElement(Route, { path: "/", component: App },
React.createElement(IndexRoute, { component: Home }),
React.createElement(Route, { path: "work", component: work }),
React.createElement(Route, { path: "about", component: about }),
React.createElement(Route, { path: "blog", component: blog }))),


document.getElementById('main'));