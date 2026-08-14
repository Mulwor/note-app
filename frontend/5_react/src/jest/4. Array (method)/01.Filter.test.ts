import {CityType} from '../2. Object/02.Building';
import {demolishHousesOnTheStreet, getBuildingWithStaffCountGreaterThen} from "./Method";

type CourseType = {
    title: string
    price: number
}

test ("should take old men older then 90", () => {
    const ages = [10,20,22,1,100,90,44]
    const oldAges = ages.filter(age =>  age > 90);

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})

test ("should take courses chipper 160", () => {
    const courses = [
        {title: "CSS", price: 110},
        {title: "JS", price: 200},
        {title: "React", price: 150}
    ]

    const chipPredicate = (course: CourseType) => course.price < 160;

    const chipCourses = courses.filter(chipPredicate);
    expect(chipCourses.length).toBe(2)
    expect(chipCourses[0].title).toBe("CSS")
    expect(chipCourses[1].title).toBe("React")
})

test ("get only completed tasks", () => {
        const tasks = [
            {id: 1, title: "Bread", isDone: false},
            {id: 2, title: "Milk", isDone: true},
            {id: 3, title: "Solt", isDone: false},
            {id: 4, title: "Sugar", isDone: true},
        ]

        const completedTasks = tasks.filter (task => task.isDone === true)

        expect(completedTasks.length).toBe(2)
        expect(completedTasks[0].id).toBe(2)
        expect(completedTasks[1].id).toBe(4)
})

test ("get only uncompleted tasks", () => {
        const tasks = [
            {id: 1, title: "Bread", isDone: false},
            {id: 2, title: "Milk", isDone: true},
            {id: 3, title: "Solt", isDone: false},
            {id: 4, title: "Sugar", isDone: true},
        ]

        const completedTasks = tasks.filter (task => task.isDone === false)
                                                {/* !task.isDone */}

        expect(completedTasks.length).toBe(2)
        expect(completedTasks[0].id).toBe(1)
        expect(completedTasks[1].id).toBe(3)
})


// ======== Buildings ===========
let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                id: 1, buildedAt: 2012, repaired: false,
                address: {
                    number: 100,
                    street: {title: "White Street"}
                }
            },

            {
                id: 2, buildedAt: 2008, repaired: false,
                address: {
                    number: 100,
                    street: {title: "Happy street"}
                }
            },

            {
                id: 3, buildedAt: 2020, repaired: false,
                address: {
                    number: 101,
                    street: {title: "Happy street"}
                },
            }
        ],
        governmentBuildings: [
            {
                type: "HOSPITAL", budget: 200000, staffCount: 200,
                address: {
                    street: {
                        title: "Central Str"
                    }
                },
            },
            {
                type: 'FIRE-STATION', budget: 500000, staffCount: 1000,
                address: {
                    street: {
                        title: "South Str"
                    }
                },
            },
        ],
        citizensNumber: 1000000
    }
})

test ("Houses should be destroyed", () => {
    demolishHousesOnTheStreet(city, "Happy street");

    expect(city.houses.length).toBe(1)
    expect(city.houses[0].id).toBe(1)
})

test("Building with correct staff count", () => {
    let buildings = getBuildingWithStaffCountGreaterThen(city.governmentBuildings, 500)

    expect(buildings.length).toBe(1)
    expect(buildings[0].type).toBe("FIRE-STATION")
})