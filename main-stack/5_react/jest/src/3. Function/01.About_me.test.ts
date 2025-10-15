import { StudentType } from "../2. Object/01.About_me";
import { addSkill, makeStudentActive, doesStudnetLiveIn } from './functions'

let student: StudentType;

beforeEach(() => {
    student = {
        id: 1, name : "Ali", age: 25, isActive: false,
        address: {
            streetTitle: "Dollar Ciyar",
                city: {
                    title: "Azerbaijan",
                    countryTitle: "Baku"
                }
        },
        technologies: [
            { id: 1, title: "HTML" },
            { id: 2, title: "CSS" },
            { id: 3, title: "React" }
        ]
    }
})


test ("new tech skill should be added to student", () => {
    expect(student.technologies.length).toBe(3);

    addSkill(student, "JS");

    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe("JS");
    expect(student.technologies[3].id).toBeDefined();
})

test ("student should be made student", () => {
    expect(student.isActive).toBe(false);
    makeStudentActive(student);

    expect(student.isActive).toBe(true)
})

test("does student live in city?", () => {
    let result1 = doesStudnetLiveIn(student, "Moscow");
    let result2 = doesStudnetLiveIn(student, "Azerbaijan");

    expect(result1).toBe(false);
    expect(result2).toBe(true)
})