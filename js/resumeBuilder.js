
// BIO OBJECT

const bio = {
    "name": "Jeremy Lee",
    "role": "Aspiring Software Engineer",
    "welcomeMessage": "Hi there!",
    "biopic": "images/fry.jpg",
    "skills": ["telekinesis", "mind-control", "teleportation"],
    "contacts": {
        "mobile": "xxx-xxx-xxxx",
        "email": "xxx@xxx.xxx",
        "github": "github-username",
        "twitter": "twitter-username",
        "location": "Los Angeles, CA"
    },
    "display": function() {
        let formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedHeaderRole);

        let formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedHeaderName);

        let formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedBioPic);

        let formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedWelcomeMsg);

        let formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts").append(formattedMobile);

        let formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(formattedEmail);

        let formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(formattedGithub);

        let formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#topContacts").append(formattedTwitter);

        let formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formattedLocation);

        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            
            for (let i = 0; i < bio.skills.length; i++) {
                let formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills").append(formattedSkill);
            }
        }
    }
};


// WORK OBJECT

const work = {
    "jobs": [
        {
            "employer": "employer-1",
            "title": "title-1",
            "dates": "date - date",
            "description": "description-1",
            "location": "location1"
        },
        {
            "employer": "employer-2",
            "title": "title-2",
            "dates": "date - date",
            "description": "description-2",
            "location": "location2"
        },
        {
            "employer": "employer-3",
            "title": "title-3",
            "dates": "date - date",
            "description": "description-3",
            "location": "location3"
        }
    ],
    "display": function() {
        for (let j = 0; j < work.jobs.length; j++) {
            $("#workExperience").append(HTMLworkStart);
            
            let formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[j].employer);
            let formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[j].title);
            let formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);

            let formattedDates = HTMLworkDates.replace("%data%", work.jobs[j].dates);
            $(".work-entry:last").append(formattedDates);

            let formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[j].location);
            $(".work-entry:last").append(formattedLocation);

            let formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[j].description);
            $(".work-entry:last").append(formattedDescription);
        }
    }
};


// PROJECTS OBJECT

const projects = {
    "projects": [
        {
            "title": "title-1",
            "dates": "date - date",
            "description": "description-1",
            "images": ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif"]
        },
        {
            "title": "title-2",
            "dates": "date - date",
            "description": "description-2",
            "images": ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif"]
        },
        {
            "title": "title-3",
            "dates": "date - date",
            "description": "description-3",
            "images": ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif"]
        }
    ],
    "display": function() {
        for (let k = 0; k < this.projects.length; k++) {
            $("#projects").append(HTMLprojectStart);
            
            let formattedTitle = HTMLprojectTitle.replace("%data%", this.projects[k].title);
            $(".project-entry:last").append(formattedTitle);

            let formattedDates = HTMLprojectDates.replace("%data%", this.projects[k].dates);
            $(".project-entry:last").append(formattedDates);

            let formattedDescription = HTMLprojectDescription.replace("%data%", this.projects[k].description);
            $(".project-entry:last").append(formattedDescription);

            if (this.projects[k].images.length > 0) {
                for (let l = 0; l < this.projects[k].images.length; l++) {
                    let formattedImage = HTMLprojectImage.replace("%data%", this.projects[k].images[l]);
                    $(".project-entry:last").append(formattedImage);
                }
            }
        }
    }
};


// EDUCATION OBJECT

const education = {
    "schools": [
        {
            "name": "school-1",
            "location": "location-1",
            "degree": "degree1",
            "degree dates": "date - date",
            "url": "#",
            "majors": ["major1", "major2"]
        },
        {
            "name": "school-2",
            "location": "location-2",
            "degree": "degree1",
            "degree dates": "date - date",
            "url": "#",
            "majors": ["major1"]
        }
    ],
    "onlineCourses": [
        {
            "title": "title-1",
            "school": "school",
            "dates": "date - date",
            "url": "url1"
        },
        {
            "title": "title-2",
            "school": "school",
            "dates": "date - date",
            "url": "url2"
        }
    ],
    "display": function() {
        for (let m = 0; m < this.schools.length; m++) {
            $("#education").append(HTMLschoolStart);

            let formattedName = HTMLschoolName.replace("%data%", this.schools[m].name);
            let formattedDegree = HTMLschoolDegree.replace("%data%", this.schools[m].degree);
            let formattedNameDegree = formattedName + formattedDegree;
            $(".education-entry:last").append(formattedNameDegree);

            let formattedDates = HTMLschoolDates.replace("%data%", this.schools[m]["degree dates"]);
            $(".education-entry:last").append(formattedDates);
            
            let formattedLocation = HTMLschoolLocation.replace("%data%", this.schools[m].location);
            $(".education-entry:last").append(formattedLocation);

            for (let n = 0; n < this.schools[m].majors.length; n++) {
                let formattedMajor = HTMLschoolMajor.replace("%data%", this.schools[m].majors[n]);
                $(".education-entry:last").append(formattedMajor);
            }
        }

        $("#education").append(HTMLonlineClasses);

        for (let o = 0; o < this.onlineCourses.length; o++) {
            $("#education").append(HTMLschoolStart);
            
            let formattedTitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[o].title);
            let formattedSchool = HTMLonlineSchool.replace("%data%", this.onlineCourses[o].school);
            let formattedTitleSchool = formattedTitle + formattedSchool;
            $(".education-entry:last").append(formattedTitleSchool);

            let formattedDates = HTMLonlineDates.replace("%data%", this.onlineCourses[o].dates);
            $(".education-entry:last").append(formattedDates);

            let formattedURL = HTMLonlineURL.replace("%data%", this.onlineCourses[o].url);
            $(".education-entry:last").append(formattedURL);
        }
    }
}


// INTERNATIONALIZE

$("#main").append(internationalizeButton);

function inName(name) {
    let newName = name;
    newName = name.split(' ');
    newName[1] = newName[1].toUpperCase();
    newName = newName.join(' ');
    return newName;
}


// GOOGLE MAP

$("#mapDiv").append(googleMap);


// INVOCATION OF DISPLAY FUNCTIONS

bio.display();
work.display();
projects.display();
education.display();