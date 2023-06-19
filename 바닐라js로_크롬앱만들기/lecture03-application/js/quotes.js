const quotes = [
    {
        quote: "Dont't worry if it doesn't work right. If everything did, you'd be out of a job.",
        author : ""
    },
    {
        quote: "Don't comment bad code - rewrite it.",
        author : "Brian Kernighan"
    },
    {
        quote: "A programming language is for thinking about programs, not for expressing programs you've already thought of. It should be a pencil, not a pen. ",
        author : "Paul Graham"
    },
    {
        quote: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.",
        author : "Dan Salomon"
    },
    {
        quote: "It´s better to wait for a productive programmer to become available than it is to wait for the first available programmer to become productive.",
        author : "Steve McConnell"
    },
    {
        quote: "One of my most productive days was throwing away 1000 lines of code.",
        author : "Ken Thompson"
    },
    {
        quote: "Debugging is twice as hard as writing the code in the first place.Therfore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it. ",
        author : "Rajanand"
    },
    {
        quote: "I don't care if it works on your machine! We are not shipping your machine!",
        author : "Vidiu Platon"
    },
    {
        quote: "Measuring programming progree by lines of code is like measuring aircraft building progree by weight.",
        author : "Bill Gates"
    },
    {
        quote: "The computer was born to solve problems that did not exist before.",
        author : "Bill Gates"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;