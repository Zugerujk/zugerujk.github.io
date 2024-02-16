/*
    VARS
*/

var all_pages = [];

var pageg1_games = [
    "022474487139…",
    "020",
    "018",
    "017",
    "011",
    "009",
    "008",
    "006",
    "001",
];
var pageg2_moviestv = [
    "020",
    "017",
    "008",
    "003",
    "001",
];
var pageg3_hq = [
    "022474487139…",
    "021",
    "020",
    "017",
    "015",
    "014",
    "013",
    "006",
    "003",
    "001",
];
var pageg4_miscellany = [
    "024",
    "023",
    "021",
    "019",
    "014",
];
var pageg5_books = [
    "020",
    "016",
    "015",
    "013",
    "012",
]


var page_listing = {
    "001": {
        displaynum: "#001",
        title: "My nephew says \"bruh\"",
        date: "7/10/23 4:42:18 PM CST",
        link: "https://zugerujk.net/blog/blog001",
        var: "0",
    },
    "002": {
        displaynum: "#002",
        title: "I had to enter 45 captchas",
        date: "7/14/23 1:56:42 AM CST",
        link: "https://zugerujk.net/blog/blog002",
        var: "0",
    },
    "003": {
        displaynum: "#003",
        title: "Minnesota Roadtrip 2023 😎",
        date: "7/18/23 4:30:37 AM CST",
        link: "https://zugerujk.net/blog/blog003",
        var: "0",
    },
    "004": {
        displaynum: "#004",
        title: "On love",
        date: "8/1/23 6:17:14 AM CST",
        link: "https://zugerujk.net/blog/blog004",
        var: "0",
    },
    "005": {
        displaynum: "#005",
        title: "A robot phone call 😱⁉️",
        date: "8/11/23 9:44:13 PM CST",
        link: "https://zugerujk.net/blog/blog005",
        var: "0",
    },
    "006": {
        displaynum: "#006",
        title: "The birth of my child",
        date: "8/25/23 7:05:19 PM CST",
        link: "https://zugerujk.net/blog/blog006",
        var: "0",
    },
    "007": {
        displaynum: "#007",
        title: "Birth delayed",
        date: "8/26/23 1:15:52 AM CST",
        link: "https://zugerujk.net/blog/blog007",
        var: "0",
    },
    "008": {
        displaynum: "#008",
        title: "[pikmin][4] Holy Shit[pikminstanding]",
        date: "8/31/23 8:49:13 PM CST",
        link: "https://zugerujk.net/blog/blog008",
        var: "0",
    },
    "009": {
        displaynum: "#009",
        title: "More [pikmin][4][pikminstanding]",
        date: "9/2/23 11:01:15 PM CST",
        link: "https://zugerujk.net/blog/blog009",
        var: "0",
    },
    "010": {
        displaynum: "#010",
        title: "An Hour with Mr Beast",
        date: "9/3/23 1:06:26 AM CST",
        link: "https://zugerujk.net/blog/blog010",
        var: "0",
    },
    "011": {
        displaynum: "#011",
        title: "Beat [pikmin][4][pikminstanding]",
        date: "9/3/23 3:44:01 AM CST",
        link: "https://zugerujk.net/blog/blog011",
        var: "0",
    },
    "012": {
        displaynum: "#012",
        title: "Errands",
        date: "9/5/23 3:54:54 PM CST",
        link: "https://zugerujk.net/blog/blog012",
        var: "0",
    },
    "013": {
        displaynum: "#013",
        title: "The previous month of my life",
        date: "10/10/23 9:25:52 AM CST",
        link: "https://zugerujk.net/blog/blog013",
        var: "0",
    },
    "014": {
        displaynum: "#014",
        title: "I tried the Panera Bread drink that killed someone",
        date: "10/25/23 7:46:52 PM CST",
        link: "https://zugerujk.net/blog/blog014",
        var: "0",
    },
    "015": {
        displaynum: "#015",
        title: "The Ketamine Diaries",
        date: "11/15/23 4:12:33 PM CST",
        link: "https://zugerujk.net/blog/blog015",
        var: "0",
    },
    "016": {
        displaynum: "#016",
        title: "Thoughts on Borne, the book",
        date: "11/19/23 10:19:07 AM CST",
        link: "https://zugerujk.net/blog/blog016",
        var: "0",
    },
    "017": {
        displaynum: "#017",
        title: "Disco Elysium, The Voyeurs, and endings",
        date: "12/2/23 1:42:44 PM CST",
        link: "https://zugerujk.net/blog/blog017",
        var: "0",
    },
    "018": {
        displaynum: "#018",
        title: "Code Switching and Lego Universe",
        date: "12/28/23 5:58:09 AM CST",
        link: "https://zugerujk.net/blog/blog018",
        var: "0",
    },
    "019": {
        displaynum: "#019",
        title: "The Gundam Base Mobile USA Tour Tulsa Review",
        date: "12/28/23 2:11:29 PM CST",
        link: "https://zugerujk.net/blog/blog019",
        var: "0",
    },
    "020": {
        displaynum: "#020",
        title: "2023 Year-end Wrap-up",
        date: "12/30/23 10:45:38 PM CST",
        link: "https://zugerujk.net/blog/blog020",
        var: "0",
    },
    "021": {
        displaynum: "#021",
        title: "Things I own[br](for insurance, for when my home burns down)",
        date: "1/5/24 12:26:59 AM CST",
        link: "https://zugerujk.net/blog/blog021",
        var: "0",
    },
    "022474487139…": {
        displaynum: "#022474487139…",
        title: "NieR Replicant™ ver.1.22474487139... is the Game of All Time and I'm being so genuine",
        date: "1/7/24 8:53:51 PM CST",
        link: "https://zugerujk.net/blog/blog022474487139…",
        var: "0",
    },
    "023": {
        displaynum: "#023",
        title: "New coat",
        date: "1/12/24 11:52:58 PM CST",
        link: "https://zugerujk.net/blog/blog023",
        var: "0",
    },
    "024": {
        displaynum: "#024",
        title: "Panera Bread Review January 2024",
        date: "1/18/24 11:29:46 AM CST",
        link: "https://zugerujk.net/blog/blog024",
        var: "0",
    },
    "025": {
        displaynum: "#025",
        title: "Oh! Starving Cover",
        date: "2/16/24 12:59:19 AM CST",
        link: "https://www.youtube.com/watch?v=xmaNs_XTfJs",
        var: "1",
    },
    "026": {
        displaynum: "#026",
        title: "Personal Loss: Take5 Bar",
        date: "2/16/24 1:26:12 AM CST",
        link: "https://zugerujk.net/blog/blog026",
        var: "1",
    },
}

// Populate all_pages variable
for (page in page_listing) {
    all_pages.push(page);
};
all_pages.reverse();


/*
    BUILDING
*/
// Create the blog feed
const createBlogConstruct = function(sortVar = "") {
    let construct_element = document.getElementById("blog_construct_div");
    
    var included_pages = [];

    switch(sortVar) {
        case "all":
        case "":
            included_pages = all_pages;
            break;
        case "g1":
            included_pages = pageg1_games;
            break;
        case "g2":
            included_pages = pageg2_moviestv;
            break;
        case "g3":
            included_pages = pageg3_hq;
            break;
        case "g4":
            included_pages = pageg4_miscellany;
            break;
        case "g5":
            included_pages = pageg5_books;
            break;
    }

    for (i in included_pages) {
        page_num = included_pages[i]
        var page = page_listing[page_num]

        createBlogFeedEntry(page=page, page_num=page_num, construct_element=construct_element);
    }
}

// Create a blog feed entry
const createBlogFeedEntry = function(page = Object, page_num = "", construct_element) {
    // Create the containing div
    let entry_div = document.createElement("div");
    if (page.var == "1") {
        entry_div.setAttribute("class", "blog_feed_entry_var1");
    }
    else {
        entry_div.setAttribute("class", "blog_feed_entry");
    }
    entry_div.setAttribute("id", "entry" + page_num);

    // Create the clickable entry link
    let link_div = document.createElement("a");
    link_div.setAttribute("class", "blog_feed_entry_link");
    link_div.setAttribute("href", page.link);
    let link_text = document.createTextNode("< " + page.displaynum);
    link_div.appendChild(link_text);

    // Create the title
    let content_div = document.createElement("div");
    content_div.setAttribute("class", "blog_feed_entry_content");
    let title_div = parseTitle(page.title)
    content_div.append(title_div);

    // Create the date
    let date_div = document.createElement("div");
    date_div.setAttribute("class", "blog_feed_entry_end_cont");
    let date_text = document.createTextNode(page.date);
    date_div.appendChild(date_text);

    // Append city amirite
    content_div.append(date_div);
    entry_div.append(link_div);
    entry_div.append(content_div);
    construct_element.append(entry_div);
}

// Interpret a page.title
const parseTitle = function(title = "") {
    let title_div = document.createElement("div");
    let rVals = [0, 0];
    let limit = 0;
    // While there's still text tags to interpret
    while (rVals[0] != -1) {
        // Arbitrary limit, in case I accidentally make an infinite loop
        limit++;
        if (limit > 10) {
            break;
        }

        // Extract tags
        rVals = extractTitleTag(title);

        // If there's text before a tag (or no tag), insert it and remove from title
        if (rVals[1] != "") {
            let title_text = document.createTextNode(rVals[1]);
            title_div.appendChild(title_text);
            title = title.replace(rVals[1], "");
        }
        
        // If there's a tag, replace it and remove it
        if (rVals[0] != -1) {
            let tagElement = rVals[0];
            if (tagElement == "[pikmin]") {
                let image_div = document.createElement("img");
                image_div.setAttribute("src", "blog/blog-media/008logopikmin.png");
                image_div.setAttribute("alt", "Pikmin");
                image_div.setAttribute("height", "24px");
                image_div.setAttribute("width", "auto");
                image_div.setAttribute("class", "blog_feed_entry_image_as_text_left_margin");
                title_div.append(image_div);

            }
            else if (tagElement == "[4]") {
                let image_div = document.createElement("img");
                image_div.setAttribute("src", "blog/blog-media/008logo4.png");
                image_div.setAttribute("alt", "4");
                image_div.setAttribute("height", "24px");
                image_div.setAttribute("width", "auto");
                image_div.setAttribute("class", "blog_feed_entry_image_as_text_left_margin");
                title_div.append(image_div);

            }
            else if (tagElement == "[pikminstanding]") {
                let image_div = document.createElement("img");
                image_div.setAttribute("src", "blog/blog-media/008pikminstanding.png");
                image_div.setAttribute("alt", "Image of pikmin standing");
                image_div.setAttribute("height", "24px");
                image_div.setAttribute("width", "auto");
                image_div.setAttribute("class", "blog_feed_entry_image_as_text_left_margin");
                title_div.append(image_div);
            }
            else if (tagElement == "[br]") {
                let br_div = document.createElement("br");
                title_div.append(br_div);
            }
            else {
                console.log("Couldn't figure out a title tag! FUCK!")
            }

            title = title.replace(rVals[0], "");
        }

    }
    
    return title_div;
}

// Extract a tag and preceding text
const extractTitleTag = function(title = "") {
    tagS = title.indexOf("[");
    // If there's a [
    if (tagS != -1) {
        tagE = title.indexOf("]");
        tag = title.substring(tagS, tagE+1);

        // If there's text before the start of a tag, write that in beforeTag
        if (tagS != 0) {
            beforeTag = title.substring(0, tagS);
        }
        else {
            beforeTag = "";
        };

        // return
        return [tag, beforeTag]
    }
    else {
        return [-1, title];
    }
}

// Function to rebuild construct_element upon clicking a radio
const radioButtonClick = function(radioVal = "") {
    let construct_element = document.getElementById("blog_construct_div");
    console.log("Changing grouping to " + radioVal + "!");

    // Inelegant, but hey!
    construct_element.innerHTML = '';

    createBlogConstruct(sortVar=radioVal);
//     fuster_element.setAttribute("class", "settings_icon");
//     fuster_element.setAttribute("id", "fuster_closed");
//     fuster_element.setAttribute("onclick", "fusterOpen()");
}

// Give radios the function
var radios = document.forms["radio_group"].elements["construct_group"];
for (var radio of radios) {
    radio.onclick = function() {
        radioButtonClick(radioVal=this.value);
    }
}
