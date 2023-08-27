let createNavbarElement = function(text = "blank", link = "") {
    let navbar_element;
    if (link == "") {  // A blocked navbar element
        navbar_element = document.createElement("div");
        navbar_element.setAttribute("class", "selected_upper_navbar_element");
    }
    else {  // A normal navbar element
        navbar_element = document.createElement("a");
        navbar_element.setAttribute("class", "upper_navbar_element");
        navbar_element.setAttribute("href", link)
    };

    const navbar_element_text = document.createTextNode(text);
    navbar_element.appendChild(navbar_element_text);

    return navbar_element;
}

let createNavbarSpacer = function() {
    const navbar_spacer = document.createElement("div");
    navbar_spacer.setAttribute("class", "upper_navbar_spacer");

    return navbar_spacer;
}

// To create a navbar (so cool, so easy!)
const createNavbar = function(blocked_space_arg = "") {
    // Establish the hyperlinks
    let home_link = "https://zugerujk.net/index.html";
    let blog_link = "https://zugerujk.net/blog.html";
    let projects_link = "https://zugerujk.net/index.html";
    let gallery_link = "https://zugerujk.net/index.html";
    let bio_link = "https://zugerujk.net/bio.html";

    switch(blocked_space_arg) {
        case "home":
            home_link = "";
            break;
        case "blog":
            blog_link = "";
            break;
        case "projects":
            projects_link = "";
            break;
        case "gallery":
            gallery_link = "";
            break;
        case "bio":
            bio_link = "";
            break;
    }

    // Create "home"
    home_navbar_element = createNavbarElement("Home", home_link);
    blog_navbar_element = createNavbarElement("Blog", blog_link);
    projects_navbar_element = createNavbarElement("Projects", projects_link);
    gallery_navbar_element = createNavbarElement("Gallery", gallery_link);
    bio_navbar_element = createNavbarElement("Bio / Contact", bio_link);

    // Create the spacer
    spacer1 = createNavbarSpacer();
    spacer2 = createNavbarSpacer();
    spacer3 = createNavbarSpacer();
    spacer4 = createNavbarSpacer();

    // Find the navbar div
    const navbarElement = document.getElementById("the_navbar");

    // Append city amirite
    navbarElement.append(home_navbar_element);
    navbarElement.append(spacer1);
    navbarElement.append(blog_navbar_element);
    navbarElement.append(spacer2);
    navbarElement.append(projects_navbar_element);
    navbarElement.append(spacer3);
    navbarElement.append(gallery_navbar_element);
    navbarElement.append(spacer4);
    navbarElement.append(bio_navbar_element);

};