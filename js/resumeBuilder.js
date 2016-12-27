/*
 This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    name: "Shawn Zhang",
    role: "Web Developer",
    contacts: {
        mobile: "516-244-1858",
        email: "yixiongzhagn1121@gmail.com",
        github: "https://github.com/Malloy1121",
        location: "Manassas, VA",
    },
    welcomeMessage: "Hello, this is my resume.",
    biopic: "images/fry.jpg",
    skills: ["HTML", "CSS", "JS", "Java"],
    display: function () {
        var name = HTMLheaderName.replace("%data%", bio.name);
        var role = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(role).prepend(name);
        var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var email = HTMLemail.replace("%data%", bio.contacts.email);
        var github = HTMLgithub.replace("%data%", bio.contacts.github);
        var location = HTMLlocation.replace("%data%", bio.contacts.location);
        var welcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        var biopic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#topContacts, #footerContacts").append(mobile).append(email).append(github).append(location);
        var div = $("#header").append("<div></div>");
        div.append(biopic).append(welcome);
        var skills = div.append("<ul></ul>");
        skills.css("list-style", "none");
        skills.append(HTMLskillsStart);
        for (var skill=0; skill<bio.skills.length;skill++) {
            var s = HTMLskills.replace("%data%", bio.skills[skill]);
            skills.append(s);
        }
    }
};

bio.display();

var education = {
    schools: [{
        name: "Beijing University of Technology",
        location: "Beijing, China",
        degree: "Bachelor",
        majors: ["Computer Science"],
        dates: "2010-1014",
        url: "http://www.bjut.edu.cn/",
    }, {
        name: "New York Institute of Technology",
        location: "New York, NY",
        degree: "Master",
        majors: ["Computer Science"],
        dates: "2014-2016",
        url: "http://www.nyit.edu/",
    }],
    onlineCourses: [{
        title: "Front End Developer",
        school: "Udacity",
        dates: "Nov, 2016-Present",
        url: "https://www.udacity.com/",
    }],
    display: function () {
        for(var s=0;s< this.schools.length;s++){
            var school=this.schools[s];
            var name=HTMLschoolName.replace("%data%",school.name);
            var location=HTMLschoolLocation.replace("%data%",school.location);
            var degree=name+HTMLschoolDegree.replace("%data%",school.degree);

            var dates=HTMLschoolDates.replace("%data%",school.dates);
            $("#education").append(HTMLschoolStart);
            var div=$("div.education-entry:last");
            div.append(degree).append(location).append(dates);
            for(var m=0;m<school.majors.length;m++){
                var major=HTMLschoolMajor.replace("%data%",school.majors[m]);
                div.append(major);
            }
        }
        $("#education").append(HTMLonlineClasses);
        for(var o=0;o<this.onlineCourses.length;o++){
            var course=this.onlineCourses[o];
            var title=HTMLonlineTitle.replace("%data%",course.title);
            var school_online=title+HTMLonlineSchool.replace("%data%",course.school);
            var dates_online=HTMLonlineDates.replace("%data%",course.dates);
            var url=HTMLonlineURL.replace("%data%",course.url);
            $("#education").append(HTMLschoolStart);
            var div_online=$("div.education-entry:last");
            div_online.append(school_online).append(dates_online).append(url);
        }
    }
};

education.display();

var work = {
    jobs: [{
        employer: "PCCW Limited",
        title: "Java Developer",
        location: "Beijing, China",
        dates: "2012-2014",
        description: "Worked as an intern, who was in charge of web applications development.",
    }
    ],
    display: function () {
        for (var job=0;job<work.jobs.length;job++) {
            var j = work.jobs[job];
            var employer = HTMLworkEmployer.replace("%data%", j.employer);
            var title = employer + HTMLworkTitle.replace("%data%", j.title);
            var location = HTMLworkLocation.replace("%data%", j.location);
            var dates = HTMLworkDates.replace("%data%", j.dates);
            var desc = HTMLworkDescription.replace("%data%", j.description);
            $("#workExperience").append(HTMLworkStart);
            var div = $("div.work-entry:last");
            div.append(title).append(dates).append(location).append(desc);
        }
    }
};

work.display();

var projects = {
    projects: [{
        title: "Portfolio",
        dates: "Nov, 2016",
        description: "Nanodegree project",
        images: ["http://dogsarena.com/wp-content/uploads/2014/02/small-dog-crate.jpg",
            "data:image/jpeg;base64,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"]
    }, {
        title: "Online Resume",
        dates: "Nov, 2016",
        description: "Nanodegree project",
        images: ["http://www.moda-cani.it/gallery/big/2957.jpg",
            "https://s-media-cache-ak0.pinimg.com/564x/e1/16/1b/e1161b04bc71b9b128971b87b7cf1d5c.jpg"]
    }],
    display: function () {
        for (var p=0;p < this.projects.length;p++) {
            var project = this.projects[p];
            var title = HTMLprojectTitle.replace("%data%", project.title);
            var dates = HTMLprojectDates.replace("%data%", project.dates);
            var desc = HTMLprojectDescription.replace("%data%", project.description);
            $("#projects").append(HTMLprojectStart);
            var div = $("div.project-entry:last");
            div.append(title).append(dates).append(desc);
            for (var i=0;i < project.images.length;i++) {
                var image = HTMLprojectImage.replace("%data%", project.images[i]);
                div.append(image);
            }
            $(div).find("img").css({"width": "300px", "height": "200px"});
        }
    }
};

projects.display();
$("#mapDiv").append(googleMap);