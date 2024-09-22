// calculate average salary with present and past

const employees = [
    {
        "employeeId": "50c9a385-89b6-4860-bda1-6fc6cb549d28",
        "name": "Margaret Summers",
        "age": 54,
        "position": "Scientist, research (life sciences)",
        "department": "drive killer niches",
        "salary": 117016,
        "address": {
            "street": "26146 Jeffrey Junctions Apt. 219",
            "city": "Vazquezburgh",
            "state": "Kentucky",
            "zipcode": "26185"
        },
        "jobHistory": [
            {
                "company": "Henderson PLC",
                "position": "Quarry manager",
                "startDate": "2019-03-01",
                "endDate": "2022-05-14",
                "salary": 60536
            },
            {
                "company": "Butler-Young",
                "position": "Financial planner",
                "startDate": "2019-10-25",
                "endDate": "2024-05-07",
                "salary": 96926
            }
        ]
    },
    {
        "employeeId": "6a7946a3-43ae-4595-9387-ce48f5d6e8d8",
        "name": "Andrew Jones",
        "age": 35,
        "position": "Field trials officer",
        "department": "innovate proactive interfaces",
        "salary": 116066,
        "address": {
            "street": "00294 Shepherd Orchard Suite 469",
            "city": "Dianaview",
            "state": "Illinois",
            "zipcode": "93956"
        },
        "jobHistory": [
            {
                "company": "Garcia-White",
                "position": "Journalist, magazine",
                "startDate": "2017-09-26",
                "endDate": "2024-03-15",
                "salary": 63354
            },
            {
                "company": "Matthews-Hill",
                "position": "Retail banker",
                "startDate": "2021-09-21",
                "endDate": "2023-10-11",
                "salary": 96297
            }
        ]
    },
    {
        "employeeId": "010c72a0-6aae-4104-82e6-fd93295a02ec",
        "name": "Anthony Lee",
        "age": 50,
        "position": "International aid/development worker",
        "department": "grow rich e-markets",
        "salary": 119234,
        "address": {
            "street": "398 Marquez Mountain",
            "city": "West Melissa",
            "state": "West Virginia",
            "zipcode": "93803"
        },
        "jobHistory": [
            {
                "company": "Gutierrez, Walker and Williams",
                "position": "Tax adviser",
                "startDate": "2016-07-02",
                "endDate": "2023-11-01",
                "salary": 42203
            },
            {
                "company": "Alvarado, King and Yoder",
                "position": "Exhibitions officer, museum/gallery",
                "startDate": "2019-07-20",
                "endDate": "2022-11-22",
                "salary": 111883
            }
        ]
    },
    {
        "employeeId": "3232f748-e3bb-423f-970b-6e8b1c33a46f",
        "name": "Daniel Williams",
        "age": 34,
        "position": "Administrator, arts",
        "department": "aggregate innovative e-markets",
        "salary": 61627,
        "address": {
            "street": "05133 Reed Causeway Suite 224",
            "city": "North Mariabury",
            "state": "Georgia",
            "zipcode": "74462"
        },
        "jobHistory": [
            {
                "company": "Oliver-Wilson",
                "position": "Scientist, physiological",
                "startDate": "2014-07-25",
                "endDate": "2023-04-07",
                "salary": 85208
            },
            {
                "company": "Jones, Gillespie and Wright",
                "position": "Media buyer",
                "startDate": "2020-12-06",
                "endDate": "2024-01-01",
                "salary": 80894
            }
        ]
    },
    {
        "employeeId": "82fc652c-6301-4f2a-8bd0-12c87bc7fd54",
        "name": "Ricky Moore",
        "age": 41,
        "position": "Air traffic controller",
        "department": "brand integrated relationships",
        "salary": 130330,
        "address": {
            "street": "73502 May Station Suite 173",
            "city": "Lake Michaelview",
            "state": "Nebraska",
            "zipcode": "78965"
        },
        "jobHistory": [
            {
                "company": "Nolan, Andrews and Singh",
                "position": "Geophysicist/field seismologist",
                "startDate": "2016-07-15",
                "endDate": "2021-08-18",
                "salary": 79244
            },
            {
                "company": "Williams Group",
                "position": "Financial adviser",
                "startDate": "2020-09-18",
                "endDate": "2022-08-21",
                "salary": 118123
            }
        ]
    },
    {
        "employeeId": "9c99f0ed-8af7-4140-8c58-7cbacdd39c24",
        "name": "Timothy Perry",
        "age": 25,
        "position": "Scientist, audiological",
        "department": "matrix cross-platform ROI",
        "salary": 148054,
        "address": {
            "street": "0181 Dawn Fords Apt. 992",
            "city": "South Thomastown",
            "state": "Florida",
            "zipcode": "37572"
        },
        "jobHistory": [
            {
                "company": "Chaney-Gonzales",
                "position": "Pharmacist, hospital",
                "startDate": "2015-12-05",
                "endDate": "2020-02-22",
                "salary": 58640
            },
            {
                "company": "Campbell, Williams and Ramirez",
                "position": "Scientist, research (maths)",
                "startDate": "2019-08-11",
                "endDate": "2023-06-02",
                "salary": 105702
            }
        ]
    },
    {
        "employeeId": "4dc72cb9-ce84-48bc-a120-b0a1b40d3afc",
        "name": "Katrina Benson",
        "age": 52,
        "position": "Science writer",
        "department": "e-enable 24/365 technologies",
        "salary": 107902,
        "address": {
            "street": "355 Cummings Common",
            "city": "East Feliciaburgh",
            "state": "New Hampshire",
            "zipcode": "35623"
        },
        "jobHistory": [
            {
                "company": "Smith PLC",
                "position": "Armed forces logistics/support/administrative officer",
                "startDate": "2018-03-06",
                "endDate": "2021-08-03",
                "salary": 61141
            },
            {
                "company": "Edwards Group",
                "position": "Neurosurgeon",
                "startDate": "2022-07-04",
                "endDate": "2022-10-01",
                "salary": 93859
            }
        ]
    },
    {
        "employeeId": "04683ae0-9afa-4080-b280-c1d0b00a3c78",
        "name": "Julie Sanchez",
        "age": 31,
        "position": "Forest/woodland manager",
        "department": "transform value-added e-tailers",
        "salary": 120421,
        "address": {
            "street": "3675 Smith Stream",
            "city": "Lake Matthewbury",
            "state": "Rhode Island",
            "zipcode": "10106"
        },
        "jobHistory": [
            {
                "company": "Hernandez, Cooper and Stout",
                "position": "Theme park manager",
                "startDate": "2019-02-21",
                "endDate": "2020-11-20",
                "salary": 76559
            },
            {
                "company": "Bartlett, Brown and Moreno",
                "position": "Applications developer",
                "startDate": "2021-06-29",
                "endDate": "2023-08-20",
                "salary": 86785
            }
        ]
    },
    {
        "employeeId": "18930020-8877-4a8b-bf6d-d2d4b15d5138",
        "name": "Jeffrey Carr",
        "age": 40,
        "position": "Advice worker",
        "department": "re-contextualize innovative info-mediaries",
        "salary": 106171,
        "address": {
            "street": "825 Elijah Summit Suite 082",
            "city": "Port Scott",
            "state": "Pennsylvania",
            "zipcode": "93863"
        },
        "jobHistory": [
            {
                "company": "Anderson Inc",
                "position": "Environmental consultant",
                "startDate": "2019-04-02",
                "endDate": "2020-04-07",
                "salary": 83100
            },
            {
                "company": "Woods, Marquez and Alexander",
                "position": "Music therapist",
                "startDate": "2020-11-19",
                "endDate": "2024-02-20",
                "salary": 116233
            }
        ]
    },
    {
        "employeeId": "aff335c2-b420-4bf8-87b6-91a1bf77d6c2",
        "name": "Kenneth Castro",
        "age": 31,
        "position": "Neurosurgeon",
        "department": "unleash bricks-and-clicks eyeballs",
        "salary": 78181,
        "address": {
            "street": "89000 Casey Village Suite 109",
            "city": "North Larryburgh",
            "state": "Vermont",
            "zipcode": "57807"
        },
        "jobHistory": [
            {
                "company": "Garcia-Swanson",
                "position": "Building services engineer",
                "startDate": "2015-10-13",
                "endDate": "2021-04-14",
                "salary": 71259
            },
            {
                "company": "Smith LLC",
                "position": "Chartered loss adjuster",
                "startDate": "2021-02-20",
                "endDate": "2023-05-17",
                "salary": 66722
            }
        ]
    }
]


for (let i = 0; i < employees.length; i++) {
    let totalSalary = 0;
    let salaryCount = 0;
    totalSalary += employees[i].salary;
    salaryCount++;
    if (employees[i].jobHistory) {
        for (let j = 0; j < employees[i].jobHistory.length; j++) {
            totalSalary += employees[i].jobHistory[j].salary;
            salaryCount++;
        }
    }
    const avgSalary = totalSalary / salaryCount;
    console.log(`Average salary of ${employees[i].name}: ${avgSalary}`);
}
console.log(avgSalary)
