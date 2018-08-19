var bio = {
  name: "Greg Fells",
  role: "Front End Developer",
  contacts: {
       mobile: "REDACTED",
       email: "gfells@live.com",
       github: "getPetrafied",
       twitter: "REDACTED",
       location: "Denver, CO"
     },
  welcomeMessage: "I'm working on it bruh",
  skills: ["This", "Will need", "To be", "Updated when I have some"],
  biopic: "images/me.png",
  display: function(){
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedContacts = [
      HTMLmobile.replace("%data%", bio.contacts.mobile),
      HTMLemail.replace("%data%", bio.contacts.email),
      HTMLgithub.replace("%data%", bio.contacts.github),
      HTMLtwitter.replace("%data%", bio.contacts.twitter),
      HTMLlocation.replace("%data%", bio.contacts.location)
    ]
    for(i in formattedContacts) {
    	$("#topContacts").append(formattedContacts[i]);
    	$("#footerContacts").append(formattedContacts[i]);
    };
  }
};

var education = {
  schools: [
    {
      name: "Arapahoe Community College",
      location: "Arapahoe, CO",
      degree: "Associate of Arts: Psychology",
      majors: "Psychology",
      dates: "2010 - 2013",
    },
    {
      name: "University of Colorado Denver",
      location: "Denver, CO",
      degree: "Bachelor of Arts: Nueropsychology",
      majors: "Nueropsychology",
      dates: "2013 - 2015",
    }
  ],
  onlineCourses: [
    {
      title: "Intro to Programming Nanodegree",
      school: "Udacity",
      dates: "2017",
      url: "udacity.com"
    },
    {
      title: "Front-End Web Developmer Nanodegree",
      school: "Udacity",
      dates: "2018",
      url: "udacity.com"
    }
  ],
  display: function(){}
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
  display: function(){}
};

var projects = {
  projects:[
    {
      title: "I'm glad I can put fake info here",
      dates: "2017 - 2018",
      description: "I don't really want to use this as a resume, probably, so I \
      don't want to take the time to actually set my projects in here. This is just \
      placeholder information!",
      images: ["placeholderurl", "andanotherone.com"]
    }
  ],
  display: function(){}
};
