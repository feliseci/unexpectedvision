// Note: This is not a working, or well-designed database.
// It's simply designed to spit out the data required for the front-end.

//
const issues = [
    {
        name: "Facebook data leak",
        type: "editor",
        date: 1,
        popularity: 1,
        categories: ["privacy", "internet"],
        image: "https://source.unsplash.com/random/800x600",
        url: "0",  // URL constructed from (site)/(type)/url (url = id)
        description: "Facebook records users' metadata and sells it to other companies."
    },
    {
        name: "Horse racing",
        type: "contributor",
        date: 3,
        popularity: 2,
        categories: ["animal welfare"],
        image: "https://images.pexels.com/photos/158976/pexels-photo-158976.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        url: "0",
        description: "Is horse racing animal abuse?"
    },
    {
        name: "Global warming",
        type: "editor",
        date: 2,
        popularity: 3,
        categories: ["environment"],
        image: "https://images.pexels.com/photos/29465/smoke-chimney-industrial-29465.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        url: "1",
        description: "Global warming dummy text"
    }
];

module.exports = issues;