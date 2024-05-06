/*
    VARS
*/

var all_pages = [];


var page_listing = {
    "001": {
        displaynum: "#001",
        title: "",
        date: "",
        link: "https://zugerujk.net/blog/blog001",
        var: "0",
    }
}

var included_pages = [];
var page_sort = "0";
var num_pages = 0;

// Populate all_pages variable
for (page in page_listing) {
    all_pages.push(page);
};
all_pages.reverse();


/*
    BUILDING
*/
// Create the blog feed
const createBlogConstruct = function(sortVar = "", numVar = 0) {
    let construct_element = document.getElementById("blog_construct_div");

    // Interpret any input from sortVar
    switch(sortVar) {
        case "":
            break;
        case "all":
            included_pages = all_pages;
            break;
        case "newtoold":
            page_sort = "0";
            break;
        case "oldtonew":
            page_sort = "1";
            break;
    }

    // Interpret numVar input
    if (numVar != 0) {
        num_pages = numVar;
    }

    // Create new array containing content of included_pages, but with a new reference.
    var sent_pages = [...included_pages];

    // Interpret any changes that need to be done to the sent_pages array
    switch (page_sort) {
        case "1":
            sent_pages.reverse();
            break;
    }

    // Create pages from the sent_pages array, up to the num_pages limit.
    pages_made = 0;
    for (i in sent_pages) {
        pages_made++;
        if (pages_made > num_pages) {
            break;
        }
        page_num = sent_pages[i]
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
    else if (page.var == "2") {
        entry_div.setAttribute("class", "blog_feed_entry_var2")
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
            else if (tagElement == "[in]") {
                let in_div = document.createElement("reinin");
                in_text = document.createTextNode("in");
                in_div.appendChild(in_text);
                title_div.append(in_div);
            }
            else if (tagElement == "[ineclipse]") {
                let in_div = document.createElement("reinin");
                in_text = document.createTextNode("eclipse");
                in_div.appendChild(in_text);
                title_div.append(in_div);
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
const inputEnter = function(radioVal = "", numInput = 0) {
    let construct_element = document.getElementById("blog_construct_div");
    if (radioVal != "") {
        console.log("Changing grouping to " + radioVal + "!");
    }
    if (numInput != 0) {
        console.log("Changing number of entries shown to " + numInput + "!");
    }

    // Inelegant, but hey!
    construct_element.innerHTML = '';

    createBlogConstruct(sortVar=radioVal, numVar=numInput);
}

// Give first radio group their function
var radios_group_type = document.forms["radio_group_type"].elements["construct_group"];
for (var radio of radios_group_type) {
    radio.onclick = function() {
        inputEnter(radioVal=this.value);
    }
}

// Give second radio group their function
var radios_group_sort = document.forms["radio_group_sort"].elements["construct_group"];
for (var radio of radios_group_sort) {
    radio.onclick = function() {
        inputEnter(radioVal=this.value);
    }
}