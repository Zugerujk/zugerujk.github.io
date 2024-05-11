/*
    COOKIE UTILITY
*/
const fetchCookie = function(cookie_name = "") { 
    // Get the list of cookies separated into an array
    let document_cookies = document.cookie.split(';')
    // Cycle through the array
    for (i = 0; i < document_cookies.length; i++) {
        let cookie_name_index = document_cookies[i].indexOf(cookie_name);
        // If the cookie name is present, grab it!
        if (cookie_name_index != -1) { // Will return 0+ if present.
            document_cookies[i] = document_cookies[i].replace(cookie_name + "=", "");
            return String(document_cookies[i].trim());
        }
    }
    return "-1";
}


/*
    SPACER STUFF
*/
const createVerticalSpacer = function() {
    let new_vertical_spacer = document.createElement("div");
    new_vertical_spacer.setAttribute("class", "generic_vertical_spacer");
    return new_vertical_spacer;
}



/*
    HEADER STUFF
*/
const changeHeaderToSecret = function() {  // Runs whenever the header image is clicked.
    const headerElement = document.getElementsByClassName("right")[0];
    console.log("Say hi to debug Alm 🥺");
    headerElement.id = "header_right_secret";
    headerElement.title = "Art credit: Hidari";
}

const determineHeaderSeed = function() {  // Figures out which header image to show.
    let the_date = new Date();
    let seconds_since_epoch = Math.round(the_date.getTime() / 1000);
    let header_seed = Math.floor(seconds_since_epoch / 3600) % 9; // Remainder of "hours since epoch / 9"
    console.log("The header seed is " + header_seed + ".");
    return header_seed;
}

const createHeaderRight = function() {
    let header_element_right = document.createElement("div");
    header_element_right.setAttribute("class", "right");
    let header_number = determineHeaderSeed();
    
    switch (header_number) {
        case 0:
            header_element_right.setAttribute("id", "header_right_00");
            header_element_right.setAttribute("title", "Art credit: MAJYKKS");
            break;
        case 1:
            header_element_right.setAttribute("id", "header_right_01");
            header_element_right.setAttribute("title", "Photo credit: GuardianGlimmer");
            break;
        case 2:
            header_element_right.setAttribute("id", "header_right_02");
            header_element_right.setAttribute("title", "Art credit: Meronpan");
            break;
        case 3:
            header_element_right.setAttribute("id", "header_right_03");
            header_element_right.setAttribute("title", "Art credit: f0nk (emirulz)");
            break;
        case 4:
            header_element_right.setAttribute("id", "header_right_04");
            header_element_right.setAttribute("title", "Art credit: Lambchopper");
            break;
        case 5:
            header_element_right.setAttribute("id", "header_right_05");
            header_element_right.setAttribute("title", "Art credit: Crank");
            break;
        case 6:
            header_element_right.setAttribute("id", "header_right_06");
            header_element_right.setAttribute("title", "Art credit: Prince Annihilation");
            break;
        case 7:
            header_element_right.setAttribute("id", "header_right_07");
            header_element_right.setAttribute("title", "Photo credit: Mark Glickman. Art credit: Hidari");
            break;
        case 8:
            header_element_right.setAttribute("id", "header_right_08");
            header_element_right.setAttribute("title", "Art credit: Crank");
            break;

    }

    header_element_right.setAttribute("onclick", "changeHeaderToSecret()");

    return header_element_right;
}

const createHeader = function() {
    let header_element = document.getElementById("the_header");
    // Create title left area
    let zugerujknet_title_text = "Zugerujk.net 😎"
    let header_element_left = document.createElement("div");
    header_element_left.setAttribute("class", "left");
    header_element_left.setAttribute("id", "zugerujknet_title");

    let header_element_left_text = document.createTextNode(zugerujknet_title_text);
    header_element_left.appendChild(header_element_left_text);
    header_element_right = createHeaderRight();

    header_element.before(createVerticalSpacer());
    header_element.append(header_element_left);
    header_element.append(header_element_right);

    console.log("Created header.")
}



/*
    NAVBAR STUFF
*/
const createNavbarElement = function(text = "blank", link = "") {
    let navbar_element;
    if (link == "") {  // A filled-in unclickable navbar element
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
};

const createNavbarSpacer = function() {
    let navbar_spacer = document.createElement("div");
    navbar_spacer.setAttribute("class", "upper_navbar_spacer");

    return navbar_spacer;
};

// To create a navbar (so cool, so easy!)
const createNavbar = function(blocked_space_arg = "") {
    // Establish the hyperlinks
    let home_link = "https://zugerujk.net/index.html";
    let blog_link = "https://zugerujk.net/blog.html";
    let projects_link = "https://zugerujk.net/projects.html";
    let gallery_link = "https://zugerujk.net/gallery.html";
    let bio_link = "https://zugerujk.net/bio.html";

    // Erase link corresponding to the desired blocked space, so that no link is passed on to createNavbarElement().
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
    bio_navbar_element = createNavbarElement("About", bio_link);

    // Find the navbar div
    let navbar_master_element = document.getElementById("the_navbar"); // Like the master emerald

    // Append city amirite
    navbar_master_element.append(home_navbar_element);
    navbar_master_element.append(createNavbarSpacer());
    navbar_master_element.append(blog_navbar_element);
    navbar_master_element.append(createNavbarSpacer());
    navbar_master_element.append(projects_navbar_element);
    navbar_master_element.append(createNavbarSpacer());
    navbar_master_element.append(gallery_navbar_element);
    navbar_master_element.append(createNavbarSpacer());
    navbar_master_element.append(bio_navbar_element);

    console.log("Created navbar.");

    // Add Fuster
    head_text_meta = document.querySelector('meta[name="fuster-dialogue"]');
    if (head_text_meta != null) {
        head_text = head_text_meta.content;
        if (head_text != "") {
            console.log("Creating Fuster element");
            // Create a blank div with the class "fuster_box"
            let fuster_element = document.createElement("div");
            fuster_element.setAttribute("class", "fuster_box");
            navbar_master_element.append(fuster_element);
            // Reset Fuster
            fusterReset();
        }
        else {
            console.log("'fuster-dialogue' meta element found in head, though no text found within 'content'. Did not create Fuster.");
        }
    }
    else {
        console.log("No 'fuster-dialogue' meta element found in head. Did not create Fuster.");
    }
    
};



/*
    FOOTER STUFF
*/
const createFooter = function() {
    let generic_footer_text = "All rights reserved, Me, 2024. v0.8";
    let settings_text = "⚙️ Settings";
    
    // Find the navbar div
    let footer_element = document.getElementById("the_footer");

    // Add generic text
    let footer_element_text = document.createTextNode(generic_footer_text);
    footer_element.appendChild(footer_element_text);

    // Add Settings link
    let settings_link_box = document.createElement("div") // Used so that the <a> div doesn't extend across the entire width of the footer.
    let settings_link = document.createElement("a");
    settings_link.setAttribute("href", "https://zugerujk.net/settings.html")
    let settings_link_text = document.createTextNode(settings_text);
    settings_link.appendChild(settings_link_text);
    settings_link_box.appendChild(settings_link)
    footer_element.appendChild(settings_link_box);

    // Create blank space after the footer.
    footer_element.after(createVerticalSpacer());
    footer_element.after(createVerticalSpacer());

    console.log("Created footer.");

};



/*
    THE FULL LOAD
*/
const createElements = function(navbar_blocked_space_arg="") {
    createHeader();
    createNavbar(blocked_space_arg=navbar_blocked_space_arg);
    createFooter();
}



/*
    Check for preferences and edit page accordingly!
*/
const prefChecks = function() {
    let motion_toggle = fetchCookie("motiontoggle");
    
    // If motion toggle cookie is "1", set the background triangles to not move.
    if (motion_toggle == 1) {
            bg_tri_element = document.getElementById("background_triangles");
            bg_tri_element.id = "background_triangles_nomotion"
            console.log("motiontoggle cookie found with value 1. Turning off background motion.")
    }
    else {
        console.log("motiontoggle cookie found with value" + motion_toggle);
    }

    // Check if the user's display is taller than wider, change the meta to be mobile-friendly.
    if (window.innerWidth <= window.innerHeight) {
        meta_element = document.querySelector('meta[name="viewport"]');
        meta_element.content = "width=1000";
    } 
}



/*
    FUSTER STUFF
*/

const fusterOpen = function() {
    let fuster_element = document.getElementsByClassName("fuster_box")[0];

    // Change fuster's div ID to appear vastly different
    fuster_element.setAttribute("id", "fuster_open");
    fuster_element.setAttribute("onclick", "fusterReset()");

    // Change the source gif of the fuster_image element
    fuster_img_element = document.getElementById("fuster_image");
    fuster_img_element.setAttribute("src", "https://zugerujk.net/images/SiteAssets/Fuster/Fuster%20Open.gif");

    // Add dialogue for fuster, found within the head of the document.
    fuster_dialogue_div = document.createElement("p"); 
    fuster_dialogue_div.setAttribute("id", "fuster_dialogue");
    let fuster_dialogue = "\"Hi!\"";
    try {
        head_text = document.querySelector('meta[name="fuster-dialogue"]').content;
        console.log("Opening Fuster with dialogue: " + head_text);
        fuster_dialogue = "\"" + head_text + "\"";
    }
    catch {
        console.log("Fuster dialogue found, though issue found parsing it.");
    }
    fuster_dialogue_div.appendChild(document.createTextNode(fuster_dialogue));
    fuster_element.append(fuster_dialogue_div);
}

const fusterReset = function() { 
    let fuster_element = document.getElementsByClassName("fuster_box")[0];

    // Wipes the inside of fuster_element if not empty.
    fuster_element.innerHTML = '';
    fuster_element.setAttribute("class", "fuster_box");
    fuster_element.setAttribute("id", "fuster_closed");
    fuster_element.setAttribute("onclick", "fusterOpen()");

    // Creates the image to go inside the closed element
    fuster_img_element = document.createElement("img");
    fuster_img_element.setAttribute("src", "https://zugerujk.net/images/SiteAssets/Fuster/Fuster%20Idle.gif");
    fuster_img_element.setAttribute("id", "fuster_image");
    fuster_element.append(fuster_img_element);

    return fuster_element;
}



/*
    GALLERY STUFF
*/

const galleryPhotoChange = function(new_photo="", alt_text="") {
    let gallery_main_photo = document.getElementById("gallery_photo");
    console.log("Changing gallery photo");

    gallery_main_photo.setAttribute("src", new_photo);
    gallery_main_photo.setAttribute("alt", alt_text);
    gallery_main_photo.setAttribute("title", alt_text);
}