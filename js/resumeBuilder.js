var bio = {
  name: "Greg Fells",
  role: "Front End Developer",
  contacts: {
       mobile: "REDACTED",
       email: "gfells@live.com",
       github: "getPetrafied",
       twitter: "REDACTED",
       location: "Denver"
     },
  welcomeMessage: "This is a super sweet bio message placeholder",
  skills: ["This", "Will need", "To be", "Updated when I have some"],
  biopic: "images/profpic.png",
  display: function(){
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedContacts = [
      HTMLmobile.replace("%data%", bio.contacts.mobile),
      HTMLemail.replace("%data%", bio.contacts.email),
      HTMLgithub.replace("%data%", bio.contacts.github),
      HTMLtwitter.replace("%data%", bio.contacts.twitter),
      HTMLlocation.replace("%data%", bio.contacts.location)
    ]
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    for(i in formattedContacts) {
    	$("#topContacts").append(formattedContacts[i]);
    	$("#footerContacts").append(formattedContacts[i]);
    };
    $("#header").append(formattedWelcomeMsg);
    $("#header").append(formattedBioPic);
    $("#header").append(HTMLskillsStart);
    for (i in bio.skills) {
      $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    };
  }
};

var education = {
  schools: [
    {
      name: "Arapahoe Community College",
      location: "Arapahoe, CO",
      degree: "AA",
      majors: "Psychology",
      dates: "2010 - 2013",
    },
    {
      name: "University of Colorado Denver",
      location: "Denver, CO",
      degree: "BA",
      majors: "Nueropsychology",
      dates: "2013 - 2015",
    }
  ],
  onlineCourses: [
    {
      title: "Intro to Programming Nanodegree",
      school: "Udacity",
      dates: "2017",
      url: "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
    },
    {
      title: "Front-End Web Developmer Nanodegree",
      school: "Udacity",
      dates: "2018",
      url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }
  ],
  display: function(){
    var formattedSchools = [];
    var formattedOnlineCourses = [];
    for (i in education.schools) {
      formattedSchools[i] = [
        HTMLschoolName.replace("%data%", education.schools[i].name) + " " +
        HTMLschoolDegree.replace("%data%", education.schools[i].degree),
        HTMLschoolLocation.replace("%data%", education.schools[i].location),
        HTMLschoolDates.replace("%data%", education.schools[i].dates),
        HTMLschoolMajor.replace("%data%", education.schools[i].majors)
      ];
    };
    $("#education").append(HTMLschoolStart);
    for (i in formattedSchools) {
      $(".education-entry").append(formattedSchools[i]);
    }
    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);
    for (i in education.onlineCourses) {
      formattedOnlineCourses[i] = [
        HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title) + " " +
        HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school),
        HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates),
        HTMLonlineURL.replace("%data%", education.onlineCourses[i].url)
      ];
    };
    for (i in formattedOnlineCourses) {
      $(".education-entry:last").append(formattedOnlineCourses[i]);
    }
  }
};

var work = {
  jobs: [
    {
      employer: "CDR Construction",
      title: "Partner",
      location: "Denver, CO",
      dates: "2007 - Present",
      description: "The 'Son' in a 'Father and Son' construction business. Helped \
      manage billing, clients, materials, and jobs, as well as performing labor \
      and acting as foreman of small crews."
    },
    {
      employer: "Safeway Inc.",
      title: "All Purpose Clerk",
      location: "Englewood, CO",
      dates: "July 2007 - Jan 2011",
      description: "Started as a courtesy clerk, where I assisted customers, did \
      basic cleaning tasks, and performed minor inventory maintenance. After 4 years \
      I had been the GMHBC manager, front end manager, and ended as the fuel station \
      manager. Also worked in most other departments, including bookkeeping. I was \
      the acting Fuel Station manager, though I often stepped in as manager of other \
      departments to fill in for sick leave, vacations, or other vacancies."
    }
  ],
  display: function(){
    var formattedJobs = [];
    for (i in work.jobs) {
      formattedJobs[i] = [
        HTMLworkEmployer.replace("%data%", work.jobs[i].employer) + " " +
        HTMLworkTitle.replace("%data%", work.jobs[i].title),
        HTMLworkLocation.replace("%data%", work.jobs[i].location),
        HTMLworkDates.replace("%data%", work.jobs[i].dates),
        HTMLworkDescription.replace("%data%", work.jobs[i].description)
      ];
    };
    $("#workExperience").append(HTMLworkStart);
    for (i in formattedJobs) {
      $(".work-entry").append(formattedJobs[i]);
    }
  }
};

var projects = {
  projects:[
    {
      title: "I'm glad I can put fake info here",
      dates: "2017 - 2018",
      description: "I don't really want to use this as a resume, probably, so I \
      don't want to take the time to actually set my projects in here. This is just \
      placeholder information!",
      images: ["images/project-holder1.jpg", "images/project-holder2.jpg"]
    }
  ],
  display: function(){
    var formattedProjects = [];
    for (i in projects.projects) {
      formattedProjects = [
        HTMLprojectTitle.replace("%data%", projects.projects[i].title),
        HTMLprojectDates.replace("%data%", projects.projects[i].dates),
        HTMLprojectDescription.replace("%data%", projects.projects[i].description)
      ]
      for (e in projects.projects[i].images) {
        formattedProjects.push(HTMLprojectImage.replace("%data%", projects.projects[i].images[e]))
      };
    };
    $("#projects").append(HTMLprojectStart);
    for (i in formattedProjects) {
      $(".project-entry").append(formattedProjects[i]);
    };
  }
};

bio.display();
education.display();
work.display();
projects.display();
