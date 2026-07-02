export type LessonType = {
    title: string
}

export type ManType = {
    name: string
    age: number
    lessons: Array<LessonType>
    address: {
        street: {
            title: string
        }
    }
}

let props: ManType;

beforeEach(() => {
        props = {
            name: "Ali", age: 25,
            lessons: [
                {title: "1"},
                {title: "2"},
                {title: "3"}
            ],
            address: {
                street: {
                    title: "Nezavisimosti street"
                }
            }
        }
    }
)

test("Information", () => {
    const {age, lessons} = props;
    // const age = props.age and const lessons = props.lessons;

    const {title} = props.address.street
    // const title = props.address.street

    expect(age).toBe(25);
    expect(lessons.length).toBe(3)
    expect(title).toBe("Nezavisimosti street")
})


test("", ()=> {
    const l1 = props.lessons[0];
    const l2 = props.lessons[1];

    const[ls1, ls2] = props.lessons;
    // [ls1] - когда необходим только первый элемент
    // [,ls2] - когда необходим только второй элемент
    // [,,ls3] - когда необходтио 3 элемент
    const [ls3, ...restLessons] = props.lessons

    expect (l1.title).toBe('1')
    expect (l2.title).toBe('2')
    expect (ls1.title).toBe('1')
    expect (ls2.title).toBe('2')

    expect (restLessons.length).toBe(2)
    expect (restLessons[0].title).toBe('2')
});
