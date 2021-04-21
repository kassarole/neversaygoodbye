// =========== Mat Character ==============

let MatChar = new Character("Mat Gursky");

MatChar.Nickname = "mat";
MatChar.Networks = "Natick High School";
MatChar.Birthday = 676080000; // 5th June 1991 in seconds from Unix epoch (Jan 1 1970)
MatChar.Hometown = "Natick, MA";
MatChar.Employer = "professional dumbass";
MatChar.Education = "school of hard KNOCKS";
MatChar.Quotations = "i said shush giiiirl, shut yo lips\ndo the helen keler and talk wit yo hips\n\nmat stop! think of your future children..\non second thought, go right ahead\n-kelly\n\nkonichiwaaa BITCHES!\n-wutangg\n\nlove u kells";
MatChar.Books = ["The Shining", "The Lay of the Land", "The Hunger Games"];
MatChar.Movies = ["Wall Street", "Groundhog Day", "The Matrix"]
MatChar.Music = ["3OH!3 - Don't Trust Me", "Lady Gaga - Poker Face", "Metro Station - Shake It"]
MatChar.Shows = ["Sex and the city", "Ally McBeal"]

MatChar.ProfilePhoto = "../static/images/profile/mat.png";
MatChar.Photos = [
	"../static/images/photos/image1.png",
	"../static/images/photos/image2.png",
	"../static/images/photos/image3.png"
];

// =========== Kelly Character ==============

let KellyChar = new Character("Kelly Struman");

KellyChar.Nickname = "kelly";
KellyChar.Networks = "Natick High School";
KellyChar.Birthday = 676080000; // 26th October 1991 in seconds from Unix epoch (Jan 1 1970)
KellyChar.Hometown = "Natick, MA";
KellyChar.Employer = "Uh, nope.";
KellyChar.Education = "Natick High School";
KellyChar.Quotations = "I'm not writing all of that crap.";
KellyChar.Books = ["Dr Jekyll and Mr Hyde", "The Witcher", "War and Peace"];
KellyChar.Movies = ["The Girl Next Door", "Walking Tall"]
KellyChar.Music = ["Waters of March - Jane Monheit", "All my Friends - LCD Soundsystem", "Sound of Silver - LCD Soundystem"]
KellyChar.Shows = ["Scrubs", "The Office"]

KellyChar.ProfilePhoto = "../static/images/profile/kelly.png";
KellyChar.Photos = [
	"../static/images/photos/image4.png",
	"../static/images/photos/image5.png",
	"../static/images/photos/image6.png"
];


// =========== James Character ==============

let JimChar = new Character("James Zachary");

JimChar.Nickname = "Jim";
JimChar.Networks = "Freshman Class of 2011";
JimChar.Birthday = 695952000;
JimChar.Hometown = "The Moon";
JimChar.Employer = "I'd share, but then I'd have to kill you";
JimChar.Education = "Nikipedia";
JimChar.Quotations = "I don't trust like that.\nChocolate? CHOCOLATE!? CHOCOLATE!\nLook, I was gonna go easy on you, not to hurt your feelings.";
JimChar.Books = ["Artemis Fowl", "Percy Jackson", "Diary of a Wimpy Kid"];
JimChar.Movies = ["White Men Can't Jump", "Jaws", "Transformers"]
JimChar.Music = ["Swedish House Mafia - Don't You Worry Child", "No More Kings - Obey the Groove", "PaceWon&Mr.Green - Number Won"]
JimChar.Shows = ["Survivor", "The Office"]

JimChar.ProfilePhoto = "../static/images/profile/Jim.png";
JimChar.Photos = [
	"../static/images/photos/image7.png",
	"../static/images/photos/image8.png",
	"../static/images/photos/image9.png"
];



MatChar.Relationship = [RelationshipTypes.Taken, KellyChar];
MatChar.Friends = [KellyChar, JimChar];

KellyChar.Relationship = [RelationshipTypes.Taken, MatChar];
KellyChar.Friends = [MatChar, JimChar];

JimChar.Relationship = [RelationshipTypes.Single];
JimChar.Friends = [MatChar, KellyChar];