const RelationshipTypes = {
  Single: "Single",
  Taken: "In a relationship with ",
  Married: "Married",
  ItsComplicated: "It's complicated"
};

const MonthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


class Character {
	
	Name;
	Nickname;
	ProfilePhoto;
	Photos;
	Networks;
	Friends;
	Birthday;
	Hometown;
	Relationship;
	Employer;
	Education;
	Quotations;
	Books;
	Movies;
	Music;
	Shows;
	Statuses;

	constructor(Name) { this.Name = Name; }

}

